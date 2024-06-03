package main

import (
	"bytes"
	"fmt"
	"io/fs"
	"os"
	"strings"
	"text/template"

	"path/filepath"

	"github.com/khulnasoft/avd-generator/menu"
	"github.com/khulnasoft/avd-generator/util"
	"gopkg.in/yaml.v3"
)

type KubeBenchConfig struct {
	Version string `yaml:"version"`
	ID      string `yaml:"id"`
	Text    string `yaml:"text"`
	Type    string `yaml:"type"`
	Groups  []struct {
		ID     string `yaml:"id"`
		Text   string `yaml:"text"`
		Checks []struct {
			ID          string `yaml:"id"`
			Text        string `yaml:"text"`
			Type        string `yaml:"type"`
			Remediation string `yaml:"remediation"`
			Scored      bool   `yaml:"scored"`
		} `yaml:"checks"`
	} `yaml:"groups"`
}

func generateKubeBenchPages(configDir, outputDir string) {
	var configs []KubeBenchConfig

	if err := filepath.Walk(configDir, func(path string, info fs.FileInfo, err error) error {
		if err != nil {
			return err
		}

		if info.IsDir() || info.Name() == "config.yaml" {
			return nil
		}

		content, err := os.ReadFile(path)
		if err != nil {
			return err
		}

		var config KubeBenchConfig
		if err := yaml.Unmarshal(content, &config); err != nil {
			return err
		}

		configs = append(configs, config)

		return nil
	}); err != nil {
		fmt.Println(err)
	}
	versionedConfigs := make(map[string]map[string]KubeBenchConfig)

	for _, config := range configs {
		if _, ok := versionedConfigs[config.Version]; !ok {
			versionedConfigs[config.Version] = make(map[string]KubeBenchConfig)
		}
		configTypeMap := versionedConfigs[config.Version]
		if _, ok := configTypeMap[config.Type]; !ok {
			configTypeMap[config.Type] = config
		}

		versionedConfigs[config.Version] = configTypeMap
	}

	if err := writeTemplates(versionedConfigs, outputDir); err != nil {
		fmt.Println(err)
	}
}

func writeTemplates(versionedConfigs map[string]map[string]KubeBenchConfig, outputDir string) error {
	complianceMenu.AddNode("kubernetes", "Kubernetes", outputDir, "compliance", []string{},
		[]menu.BreadCrumb{{Name: "Compliance", Url: "/compliance"}}, "kubernetes", true)

	outputDir = filepath.Join(outputDir, "kubernetes")

	t := template.Must(template.New("bodyContent").Parse(kubeBenchTemplate))
	for version, grouping := range versionedConfigs {
		complianceMenu.AddNode(version, cisVersion(version), filepath.Join(outputDir),
			"kubernetes", []string{},
			[]menu.BreadCrumb{{Name: "Compliance", Url: "/compliance"},
				{Name: "Kubernetes", Url: "/compliance/kubernetes"}}, "kubernetes", true)

		for group, config := range grouping {

			complianceMenu.AddNode(fmt.Sprintf("%s-%s", version, group), config.Text, filepath.Join(outputDir, version),
				version, []string{},
				[]menu.BreadCrumb{
					{Name: "Compliance", Url: "/compliance"},
					{Name: "Kubernetes", Url: "/compliance/kubernetes"},
					{Name: cisVersion(version), Url: fmt.Sprintf("/compliance/kubernetes/%s", version)},
				}, "aqua", false)

			for _, checkGroup := range config.Groups {

				targetFilePath := filepath.Join(outputDir, version, fmt.Sprintf("%s-%s", version, group),
					fmt.Sprintf("%s.md", checkGroup.ID))
				if err := os.MkdirAll(filepath.Dir(targetFilePath), os.ModePerm); err != nil {
					return err
				}
				var documentBody bytes.Buffer
				if err := t.Execute(&documentBody, map[string]interface{}{
					"ShortName":   checkGroup.Text,
					"ID":          checkGroup.ID,
					"Version":     config.Version,
					"NiceVersion": cisVersion(config.Version),
					"Category":    config.Type,
					"Checks":      checkGroup.Checks,
					"ParentID":    group,
					"ParentTitle": config.Text,
				}); err != nil {
					return err
				}

				if err := os.WriteFile(targetFilePath, documentBody.Bytes(), os.ModePerm); err != nil {
					return err
				}
			}
		}
	}
	return nil
}

func cisVersion(version string) string {
	if strings.HasPrefix(version, "cis") {
		return util.Nicify(version)
	}
	return fmt.Sprintf("CIS - %s", util.Nicify(version))
}

const kubeBenchTemplate string = `---
title: {{.ShortName}}
id: {{ .ID }}
source: Kube Bench
icon: kubernetes
draft: false
shortName: {{.ShortName}}
severity: "n/a"
version: {{ .Version}}
category: compliance
keywords: "{{ .Category }}"

breadcrumbs: 
  - name: Compliance
    path: /compliance
  - name: Kubernetes
    path: /compliance/kubernetes
  - name: {{ .NiceVersion }}
    path: /compliance/kubernetes/{{ .Version}}
  - name: {{ .ParentTitle }}
    path: /compliance/kubernetes/{{ .Version}}/{{ .Version}}-{{ .ParentID}}


avd_page_type: avd_page

---

### {{ .ID }} {{ .ShortName }}
{{ range .Checks }}
#### {{ .ID }} {{ .Text}}

##### Recommended Action
{{ .Remediation }}
<br />

{{ end }}
`
