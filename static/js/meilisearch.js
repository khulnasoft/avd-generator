(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.MeiliSearch = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var MeiliSearchTimeOutError = /** @class */ (function (_super) {
        __extends(MeiliSearchTimeOutError, _super);
        function MeiliSearchTimeOutError(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'MeiliSearchTimeOutError';
            _this.type = _this.constructor.name;
            Error.captureStackTrace(_this, MeiliSearchTimeOutError);
            return _this;
        }
        return MeiliSearchTimeOutError;
    }(Error));

    var bind = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };

    /*global toString:true*/

    // utils is a library of generic helper functions non-specific to axios

    var toString = Object.prototype.toString;

    /**
     * Determine if a value is an Array
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Array, otherwise false
     */
    function isArray(val) {
      return toString.call(val) === '[object Array]';
    }

    /**
     * Determine if a value is undefined
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if the value is undefined, otherwise false
     */
    function isUndefined(val) {
      return typeof val === 'undefined';
    }

    /**
     * Determine if a value is a Buffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Buffer, otherwise false
     */
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
        && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
    }

    /**
     * Determine if a value is an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an ArrayBuffer, otherwise false
     */
    function isArrayBuffer(val) {
      return toString.call(val) === '[object ArrayBuffer]';
    }

    /**
     * Determine if a value is a FormData
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an FormData, otherwise false
     */
    function isFormData(val) {
      return (typeof FormData !== 'undefined') && (val instanceof FormData);
    }

    /**
     * Determine if a value is a view on an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
     */
    function isArrayBufferView(val) {
      var result;
      if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
      } else {
        result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
      }
      return result;
    }

    /**
     * Determine if a value is a String
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a String, otherwise false
     */
    function isString(val) {
      return typeof val === 'string';
    }

    /**
     * Determine if a value is a Number
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Number, otherwise false
     */
    function isNumber(val) {
      return typeof val === 'number';
    }

    /**
     * Determine if a value is an Object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Object, otherwise false
     */
    function isObject(val) {
      return val !== null && typeof val === 'object';
    }

    /**
     * Determine if a value is a Date
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Date, otherwise false
     */
    function isDate(val) {
      return toString.call(val) === '[object Date]';
    }

    /**
     * Determine if a value is a File
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a File, otherwise false
     */
    function isFile(val) {
      return toString.call(val) === '[object File]';
    }

    /**
     * Determine if a value is a Blob
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Blob, otherwise false
     */
    function isBlob(val) {
      return toString.call(val) === '[object Blob]';
    }

    /**
     * Determine if a value is a Function
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Function, otherwise false
     */
    function isFunction(val) {
      return toString.call(val) === '[object Function]';
    }

    /**
     * Determine if a value is a Stream
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Stream, otherwise false
     */
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }

    /**
     * Determine if a value is a URLSearchParams object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a URLSearchParams object, otherwise false
     */
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
    }

    /**
     * Trim excess whitespace off the beginning and end of a string
     *
     * @param {String} str The String to trim
     * @returns {String} The String freed of excess whitespace
     */
    function trim(str) {
      return str.replace(/^\s*/, '').replace(/\s*$/, '');
    }

    /**
     * Determine if we're running in a standard browser environment
     *
     * This allows axios to run in a web worker, and react-native.
     * Both environments support XMLHttpRequest, but not fully standard globals.
     *
     * web workers:
     *  typeof window -> undefined
     *  typeof document -> undefined
     *
     * react-native:
     *  navigator.product -> 'ReactNative'
     * nativescript
     *  navigator.product -> 'NativeScript' or 'NS'
     */
    function isStandardBrowserEnv() {
      if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                               navigator.product === 'NativeScript' ||
                                               navigator.product === 'NS')) {
        return false;
      }
      return (
        typeof window !== 'undefined' &&
        typeof document !== 'undefined'
      );
    }

    /**
     * Iterate over an Array or an Object invoking a function for each item.
     *
     * If `obj` is an Array callback will be called passing
     * the value, index, and complete array for each item.
     *
     * If 'obj' is an Object callback will be called passing
     * the value, key, and complete object for each property.
     *
     * @param {Object|Array} obj The object to iterate
     * @param {Function} fn The callback to invoke for each item
     */
    function forEach(obj, fn) {
      // Don't bother if no value provided
      if (obj === null || typeof obj === 'undefined') {
        return;
      }

      // Force an array if not already something iterable
      if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
      }

      if (isArray(obj)) {
        // Iterate over array values
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        // Iterate over object keys
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }

    /**
     * Accepts varargs expecting each argument to be an object, then
     * immutably merges the properties of each object and returns result.
     *
     * When multiple objects contain the same key the later object in
     * the arguments list will take precedence.
     *
     * Example:
     *
     * ```js
     * var result = merge({foo: 123}, {foo: 456});
     * console.log(result.foo); // outputs 456
     * ```
     *
     * @param {Object} obj1 Object to merge
     * @returns {Object} Result of all merge properties
     */
    function merge(/* obj1, obj2, obj3, ... */) {
      var result = {};
      function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
          result[key] = merge(result[key], val);
        } else {
          result[key] = val;
        }
      }

      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }

    /**
     * Function equal to merge with the difference being that no reference
     * to original objects is kept.
     *
     * @see merge
     * @param {Object} obj1 Object to merge
     * @returns {Object} Result of all merge properties
     */
    function deepMerge(/* obj1, obj2, obj3, ... */) {
      var result = {};
      function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
          result[key] = deepMerge(result[key], val);
        } else if (typeof val === 'object') {
          result[key] = deepMerge({}, val);
        } else {
          result[key] = val;
        }
      }

      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }

    /**
     * Extends object a by mutably adding to it the properties of object b.
     *
     * @param {Object} a The object to be extended
     * @param {Object} b The object to copy properties from
     * @param {Object} thisArg The object to bind function to
     * @return {Object} The resulting value of object a
     */
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }

    var utils = {
      isArray: isArray,
      isArrayBuffer: isArrayBuffer,
      isBuffer: isBuffer,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isObject: isObject,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge,
      deepMerge: deepMerge,
      extend: extend,
      trim: trim
    };

    function encode(val) {
      return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
    }

    /**
     * Build a URL by appending params to the end
     *
     * @param {string} url The base of the url (e.g., http://www.google.com)
     * @param {object} [params] The params to be appended
     * @returns {string} The formatted url
     */
    var buildURL = function buildURL(url, params, paramsSerializer) {
      /*eslint no-param-reassign:0*/
      if (!params) {
        return url;
      }

      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];

        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === 'undefined') {
            return;
          }

          if (utils.isArray(val)) {
            key = key + '[]';
          } else {
            val = [val];
          }

          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + '=' + encode(v));
          });
        });

        serializedParams = parts.join('&');
      }

      if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }

        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
      }

      return url;
    };

    function InterceptorManager() {
      this.handlers = [];
    }

    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    InterceptorManager.prototype.use = function use(fulfilled, rejected) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected
      });
      return this.handlers.length - 1;
    };

    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     */
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };

    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     */
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };

    var InterceptorManager_1 = InterceptorManager;

    /**
     * Transform the data for a request or a response
     *
     * @param {Object|String} data The data to be transformed
     * @param {Array} headers The headers for the request or response
     * @param {Array|Function} fns A single function or Array of functions
     * @returns {*} The resulting transformed data
     */
    var transformData = function transformData(data, headers, fns) {
      /*eslint no-param-reassign:0*/
      utils.forEach(fns, function transform(fn) {
        data = fn(data, headers);
      });

      return data;
    };

    var isCancel = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };

    var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };

    /**
     * Update an Error with the specified config, error code, and response.
     *
     * @param {Error} error The error to update.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The error.
     */
    var enhanceError = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }

      error.request = request;
      error.response = response;
      error.isAxiosError = true;

      error.toJSON = function() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: this.config,
          code: this.code
        };
      };
      return error;
    };

    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The created error.
     */
    var createError = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };

    /**
     * Resolve or reject a Promise based on response status.
     *
     * @param {Function} resolve A function that resolves the promise.
     * @param {Function} reject A function that rejects the promise.
     * @param {object} response The response.
     */
    var settle = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError(
          'Request failed with status code ' + response.status,
          response.config,
          null,
          response.request,
          response
        ));
      }
    };

    /**
     * Determines whether the specified URL is absolute
     *
     * @param {string} url The URL to test
     * @returns {boolean} True if the specified URL is absolute, otherwise false
     */
    var isAbsoluteURL = function isAbsoluteURL(url) {
      // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
      // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
      // by any combination of letters, digits, plus, period, or hyphen.
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };

    /**
     * Creates a new URL by combining the specified URLs
     *
     * @param {string} baseURL The base URL
     * @param {string} relativeURL The relative URL
     * @returns {string} The combined URL
     */
    var combineURLs = function combineURLs(baseURL, relativeURL) {
      return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
    };

    /**
     * Creates a new URL by combining the baseURL with the requestedURL,
     * only when the requestedURL is not already an absolute URL.
     * If the requestURL is absolute, this function returns the requestedURL untouched.
     *
     * @param {string} baseURL The base URL
     * @param {string} requestedURL Absolute or relative URL to combine
     * @returns {string} The combined full path
     */
    var buildFullPath = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };

    // Headers whose duplicates are ignored by node
    // c.f. https://nodejs.org/api/http.html#http_message_headers
    var ignoreDuplicateOf = [
      'age', 'authorization', 'content-length', 'content-type', 'etag',
      'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
      'last-modified', 'location', 'max-forwards', 'proxy-authorization',
      'referer', 'retry-after', 'user-agent'
    ];

    /**
     * Parse headers into an object
     *
     * ```
     * Date: Wed, 27 Aug 2014 08:58:49 GMT
     * Content-Type: application/json
     * Connection: keep-alive
     * Transfer-Encoding: chunked
     * ```
     *
     * @param {String} headers Headers needing to be parsed
     * @returns {Object} Headers parsed into an object
     */
    var parseHeaders = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;

      if (!headers) { return parsed; }

      utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));

        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === 'set-cookie') {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
          }
        }
      });

      return parsed;
    };

    var isURLSameOrigin = (
      utils.isStandardBrowserEnv() ?

      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
        (function standardBrowserEnv() {
          var msie = /(msie|trident)/i.test(navigator.userAgent);
          var urlParsingNode = document.createElement('a');
          var originURL;

          /**
        * Parse a URL to discover it's components
        *
        * @param {String} url The URL to be parsed
        * @returns {Object}
        */
          function resolveURL(url) {
            var href = url;

            if (msie) {
            // IE needs attribute set twice to normalize properties
              urlParsingNode.setAttribute('href', href);
              href = urlParsingNode.href;
            }

            urlParsingNode.setAttribute('href', href);

            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                urlParsingNode.pathname :
                '/' + urlParsingNode.pathname
            };
          }

          originURL = resolveURL(window.location.href);

          /**
        * Determine if a URL shares the same origin as the current location
        *
        * @param {String} requestURL The URL to test
        * @returns {boolean} True if URL shares the same origin, otherwise false
        */
          return function isURLSameOrigin(requestURL) {
            var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
            return (parsed.protocol === originURL.protocol &&
                parsed.host === originURL.host);
          };
        })() :

      // Non standard browser envs (web workers, react-native) lack needed support.
        (function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        })()
    );

    var cookies = (
      utils.isStandardBrowserEnv() ?

      // Standard browser envs support document.cookie
        (function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              var cookie = [];
              cookie.push(name + '=' + encodeURIComponent(value));

              if (utils.isNumber(expires)) {
                cookie.push('expires=' + new Date(expires).toGMTString());
              }

              if (utils.isString(path)) {
                cookie.push('path=' + path);
              }

              if (utils.isString(domain)) {
                cookie.push('domain=' + domain);
              }

              if (secure === true) {
                cookie.push('secure');
              }

              document.cookie = cookie.join('; ');
            },

            read: function read(name) {
              var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
              return (match ? decodeURIComponent(match[3]) : null);
            },

            remove: function remove(name) {
              this.write(name, '', Date.now() - 86400000);
            }
          };
        })() :

      // Non standard browser env (web workers, react-native) lack needed support.
        (function nonStandardBrowserEnv() {
          return {
            write: function write() {},
            read: function read() { return null; },
            remove: function remove() {}
          };
        })()
    );

    var xhr = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;

        if (utils.isFormData(requestData)) {
          delete requestHeaders['Content-Type']; // Let the browser set it
        }

        var request = new XMLHttpRequest();

        // HTTP basic authentication
        if (config.auth) {
          var username = config.auth.username || '';
          var password = config.auth.password || '';
          requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }

        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

        // Set the request timeout in MS
        request.timeout = config.timeout;

        // Listen for ready state
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
          }

          // Prepare the response
          var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config: config,
            request: request
          };

          settle(resolve, reject, response);

          // Clean up request
          request = null;
        };

        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }

          reject(createError('Request aborted', config, 'ECONNABORTED', request));

          // Clean up request
          request = null;
        };

        // Handle low level network errors
        request.onerror = function handleError() {
          // Real errors are hidden from us by the browser
          // onerror should only fire if it's a network error
          reject(createError('Network Error', config, null, request));

          // Clean up request
          request = null;
        };

        // Handle timeout
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
            request));

          // Clean up request
          request = null;
        };

        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
          var cookies$1 = cookies;

          // Add xsrf header
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
            cookies$1.read(config.xsrfCookieName) :
            undefined;

          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }

        // Add headers to the request
        if ('setRequestHeader' in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
              // Remove Content-Type if data is undefined
              delete requestHeaders[key];
            } else {
              // Otherwise add header to the request
              request.setRequestHeader(key, val);
            }
          });
        }

        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }

        // Add responseType to request if needed
        if (config.responseType) {
          try {
            request.responseType = config.responseType;
          } catch (e) {
            // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
            // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
            if (config.responseType !== 'json') {
              throw e;
            }
          }
        }

        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
          request.addEventListener('progress', config.onDownloadProgress);
        }

        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) {
          request.upload.addEventListener('progress', config.onUploadProgress);
        }

        if (config.cancelToken) {
          // Handle cancellation
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }

            request.abort();
            reject(cancel);
            // Clean up request
            request = null;
          });
        }

        if (requestData === undefined) {
          requestData = null;
        }

        // Send the request
        request.send(requestData);
      });
    };

    var DEFAULT_CONTENT_TYPE = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
      }
    }

    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = xhr;
      } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        // For node use HTTP adapter
        adapter = xhr;
      }
      return adapter;
    }

    var defaults = {
      adapter: getDefaultAdapter(),

      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, 'Accept');
        normalizeHeaderName(headers, 'Content-Type');
        if (utils.isFormData(data) ||
          utils.isArrayBuffer(data) ||
          utils.isBuffer(data) ||
          utils.isStream(data) ||
          utils.isFile(data) ||
          utils.isBlob(data)
        ) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
          return data.toString();
        }
        if (utils.isObject(data)) {
          setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
          return JSON.stringify(data);
        }
        return data;
      }],

      transformResponse: [function transformResponse(data) {
        /*eslint no-param-reassign:0*/
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) { /* Ignore */ }
        }
        return data;
      }],

      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,

      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',

      maxContentLength: -1,

      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      }
    };

    defaults.headers = {
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    };

    utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });

    utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });

    var defaults_1 = defaults;

    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
    }

    /**
     * Dispatch a request to the server using the configured adapter.
     *
     * @param {object} config The config that is to be used for the request
     * @returns {Promise} The Promise to be fulfilled
     */
    var dispatchRequest = function dispatchRequest(config) {
      throwIfCancellationRequested(config);

      // Ensure headers exist
      config.headers = config.headers || {};

      // Transform request data
      config.data = transformData(
        config.data,
        config.headers,
        config.transformRequest
      );

      // Flatten headers
      config.headers = utils.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers
      );

      utils.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );

      var adapter = config.adapter || defaults_1.adapter;

      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);

        // Transform response data
        response.data = transformData(
          response.data,
          response.headers,
          config.transformResponse
        );

        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);

          // Transform response data
          if (reason && reason.response) {
            reason.response.data = transformData(
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }

        return Promise.reject(reason);
      });
    };

    /**
     * Config-specific merge-function which creates a new config-object
     * by merging two configuration objects together.
     *
     * @param {Object} config1
     * @param {Object} config2
     * @returns {Object} New object resulting from merging config2 to config1
     */
    var mergeConfig = function mergeConfig(config1, config2) {
      // eslint-disable-next-line no-param-reassign
      config2 = config2 || {};
      var config = {};

      var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
      var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
      var defaultToConfig2Keys = [
        'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
        'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
        'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
        'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
        'httpsAgent', 'cancelToken', 'socketPath'
      ];

      utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
          config[prop] = config2[prop];
        }
      });

      utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
        if (utils.isObject(config2[prop])) {
          config[prop] = utils.deepMerge(config1[prop], config2[prop]);
        } else if (typeof config2[prop] !== 'undefined') {
          config[prop] = config2[prop];
        } else if (utils.isObject(config1[prop])) {
          config[prop] = utils.deepMerge(config1[prop]);
        } else if (typeof config1[prop] !== 'undefined') {
          config[prop] = config1[prop];
        }
      });

      utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
          config[prop] = config2[prop];
        } else if (typeof config1[prop] !== 'undefined') {
          config[prop] = config1[prop];
        }
      });

      var axiosKeys = valueFromConfig2Keys
        .concat(mergeDeepPropertiesKeys)
        .concat(defaultToConfig2Keys);

      var otherKeys = Object
        .keys(config2)
        .filter(function filterAxiosKeys(key) {
          return axiosKeys.indexOf(key) === -1;
        });

      utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
          config[prop] = config2[prop];
        } else if (typeof config1[prop] !== 'undefined') {
          config[prop] = config1[prop];
        }
      });

      return config;
    };

    /**
     * Create a new instance of Axios
     *
     * @param {Object} instanceConfig The default config for the instance
     */
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager_1(),
        response: new InterceptorManager_1()
      };
    }

    /**
     * Dispatch a request
     *
     * @param {Object} config The config specific for this request (merged with this.defaults)
     */
    Axios.prototype.request = function request(config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof config === 'string') {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }

      config = mergeConfig(this.defaults, config);

      // Set config.method
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = 'get';
      }

      // Hook up interceptors middleware
      var chain = [dispatchRequest, undefined];
      var promise = Promise.resolve(config);

      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });

      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });

      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    };

    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
    };

    // Provide aliases for supported request methods
    utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, config) {
        return this.request(utils.merge(config || {}, {
          method: method,
          url: url
        }));
      };
    });

    utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, data, config) {
        return this.request(utils.merge(config || {}, {
          method: method,
          url: url,
          data: data
        }));
      };
    });

    var Axios_1 = Axios;

    /**
     * A `Cancel` is an object that is thrown when an operation is canceled.
     *
     * @class
     * @param {string=} message The message.
     */
    function Cancel(message) {
      this.message = message;
    }

    Cancel.prototype.toString = function toString() {
      return 'Cancel' + (this.message ? ': ' + this.message : '');
    };

    Cancel.prototype.__CANCEL__ = true;

    var Cancel_1 = Cancel;

    /**
     * A `CancelToken` is an object that can be used to request cancellation of an operation.
     *
     * @class
     * @param {Function} executor The executor function.
     */
    function CancelToken(executor) {
      if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
      }

      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });

      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          // Cancellation has already been requested
          return;
        }

        token.reason = new Cancel_1(message);
        resolvePromise(token.reason);
      });
    }

    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };

    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token,
        cancel: cancel
      };
    };

    var CancelToken_1 = CancelToken;

    /**
     * Syntactic sugar for invoking a function and expanding an array for arguments.
     *
     * Common use case would be to use `Function.prototype.apply`.
     *
     *  ```js
     *  function f(x, y, z) {}
     *  var args = [1, 2, 3];
     *  f.apply(null, args);
     *  ```
     *
     * With `spread` this example can be re-written.
     *
     *  ```js
     *  spread(function(x, y, z) {})([1, 2, 3]);
     *  ```
     *
     * @param {Function} callback
     * @returns {Function}
     */
    var spread = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };

    /**
     * Create an instance of Axios
     *
     * @param {Object} defaultConfig The default config for the instance
     * @return {Axios} A new instance of Axios
     */
    function createInstance(defaultConfig) {
      var context = new Axios_1(defaultConfig);
      var instance = bind(Axios_1.prototype.request, context);

      // Copy axios.prototype to instance
      utils.extend(instance, Axios_1.prototype, context);

      // Copy context to instance
      utils.extend(instance, context);

      return instance;
    }

    // Create the default instance to be exported
    var axios = createInstance(defaults_1);

    // Expose Axios class to allow class inheritance
    axios.Axios = Axios_1;

    // Factory for creating new instances
    axios.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios.defaults, instanceConfig));
    };

    // Expose Cancel & CancelToken
    axios.Cancel = Cancel_1;
    axios.CancelToken = CancelToken_1;
    axios.isCancel = isCancel;

    // Expose all/spread
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
    axios.spread = spread;

    var axios_1 = axios;

    // Allow use of default import syntax in TypeScript
    var _default = axios;
    axios_1.default = _default;

    var axios$1 = axios_1;

    var MeiliSearchApiError = /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(error, cachedStack) {
            var _a;
            var _this = _super.call(this, error.message) || this;
            _this.type = 'MeiliSearchApiError';
            _this.name = 'MeiliSearchApiError';
            // Fetch the native error message but add our application name in front of it.
            // This means slicing the "Error" string at the start of the message.
            if (error.response !== undefined) {
                _this.response = {
                    status: error.response.status,
                    statusText: error.response.statusText,
                    path: error.response.config.url,
                    method: error.response.config.method,
                };
                // If a custom message was sent back by our API
                // We change the error message to be more explicit
                if (((_a = error.response.data) === null || _a === void 0 ? void 0 : _a.message) !== undefined) {
                    _this.errorCode = error.response.data.errorCode;
                    _this.errorType = error.response.data.errorType;
                    _this.errorLink = error.response.data.errorLink;
                    _this.message = error.response.data.message;
                }
            }
            // use cached Stack on error object to keep the call stack
            if (cachedStack !== undefined && error.stack !== undefined) {
                _this.stack = _this.name + ": " + _this.message + "\n" + cachedStack
                    .split('\n')
                    .slice(1)
                    .join('\n');
            }
            return _this;
        }
        return class_1;
    }(Error));

    var MeiliSearchCommunicationError = /** @class */ (function (_super) {
        __extends(MeiliSearchCommunicationError, _super);
        function MeiliSearchCommunicationError(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'MeiliSearchCommunicationError';
            _this.type = 'MeiliSearchCommunicationError';
            Error.captureStackTrace(_this, MeiliSearchCommunicationError);
            return _this;
        }
        return MeiliSearchCommunicationError;
    }(Error));

    function httpErrorHandler(e, cachedStack) {
        if (e.response !== undefined) {
            throw new MeiliSearchApiError(e, cachedStack);
        }
        else if (e.isAxiosError === true) {
            throw new MeiliSearchCommunicationError(e.message);
        }
        else {
            throw e;
        }
    }

    /*
     * Bundle: MeiliSearch
     * Project: MeiliSearch - Javascript API
     * Author: Quentin de Quelen <quentin@meilisearch.com>
     * Copyright: 2019, MeiliSearch
     */
    var MeiliAxiosWrapper = /** @class */ (function () {
        function MeiliAxiosWrapper(config) {
            if (config.apiKey !== undefined) {
                this.instance = axios$1.create({
                    baseURL: config.host,
                    headers: {
                        'X-Meili-API-Key': config.apiKey,
                    },
                });
            }
            else {
                this.instance = axios$1.create({
                    baseURL: config.host,
                });
            }
            this.cancelTokenSource = axios$1.CancelToken.source();
            this.instance.interceptors.response.use(function (response) { return response.data; });
            this.instance.interceptors.request.use(function (request) {
                if (request.data !== undefined) {
                    return __assign(__assign({}, request), { data: JSON.stringify(request.data) });
                }
                return request;
            });
        }
        MeiliAxiosWrapper.prototype.get = function (url, config) {
            return __awaiter(this, void 0, void 0, function () {
                var cachedStack, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cachedStack = new Error().stack;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.instance.get(url, config)];
                        case 2: return [2 /*return*/, _a.sent()];
                        case 3:
                            e_1 = _a.sent();
                            throw httpErrorHandler(e_1, cachedStack);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        MeiliAxiosWrapper.prototype.post = function (url, data, config) {
            return __awaiter(this, void 0, void 0, function () {
                var cachedStack, e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cachedStack = new Error().stack;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.instance.post(url, data, config)];
                        case 2: return [2 /*return*/, _a.sent()];
                        case 3:
                            e_2 = _a.sent();
                            throw httpErrorHandler(e_2, cachedStack);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        MeiliAxiosWrapper.prototype.put = function (url, data, config) {
            return __awaiter(this, void 0, void 0, function () {
                var cachedStack, e_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cachedStack = new Error().stack;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.instance.put(url, data, config)];
                        case 2: return [2 /*return*/, _a.sent()];
                        case 3:
                            e_3 = _a.sent();
                            throw httpErrorHandler(e_3, cachedStack);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        MeiliAxiosWrapper.prototype.patch = function (url, data, config) {
            return __awaiter(this, void 0, void 0, function () {
                var cachedStack, e_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cachedStack = new Error().stack;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.instance.patch(url, data, config)];
                        case 2: return [2 /*return*/, _a.sent()];
                        case 3:
                            e_4 = _a.sent();
                            throw httpErrorHandler(e_4, cachedStack);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        MeiliAxiosWrapper.prototype["delete"] = function (url, config) {
            return __awaiter(this, void 0, void 0, function () {
                var cachedStack, e_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cachedStack = new Error().stack;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.instance["delete"](url, config)];
                        case 2: return [2 /*return*/, _a.sent()];
                        case 3:
                            e_5 = _a.sent();
                            throw httpErrorHandler(e_5, cachedStack);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return MeiliAxiosWrapper;
    }());

    function sleep(ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }

    /*
     * Bundle: MeiliSearch / Indexes
     * Project: MeiliSearch - Javascript API
     * Author: Quentin de Quelen <quentin@meilisearch.com>
     * Copyright: 2019, MeiliSearch
     */
    var Index = /** @class */ (function (_super) {
        __extends(Index, _super);
        function Index(config, uid) {
            var _this = _super.call(this, config) || this;
            _this.uid = uid;
            return _this;
        }
        ///
        /// UPDATES
        ///
        /**
         * Get the informations about an update status
         * @memberof Index
         * @method getUpdateStatus
         */
        Index.prototype.getUpdateStatus = function (updateId) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/updates/" + updateId;
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        Index.prototype.waitForPendingUpdate = function (updateId, _a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.timeOutMs, timeOutMs = _c === void 0 ? 5000 : _c, _d = _b.intervalMs, intervalMs = _d === void 0 ? 50 : _d;
            return __awaiter(this, void 0, void 0, function () {
                var startingTime, response;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            startingTime = Date.now();
                            _e.label = 1;
                        case 1:
                            if (!(Date.now() - startingTime < timeOutMs)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.getUpdateStatus(updateId)];
                        case 2:
                            response = _e.sent();
                            if (response.status !== 'enqueued')
                                return [2 /*return*/, response];
                            return [4 /*yield*/, sleep(intervalMs)];
                        case 3:
                            _e.sent();
                            return [3 /*break*/, 1];
                        case 4: throw new MeiliSearchTimeOutError("timeout of " + timeOutMs + "ms has exceeded on process " + updateId + " when waiting for pending update to resolve.");
                    }
                });
            });
        };
        /**
         * Get the list of all updates
         * @memberof Index
         * @method getAllUpdateStatus
         */
        Index.prototype.getAllUpdateStatus = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/updates";
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// SEARCH
        ///
        /**
         * Search for documents into an index
         * @memberof Index
         * @method search
         */
        Index.prototype.search = function (query, options) {
            return __awaiter(this, void 0, void 0, function () {
                var url, params;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/search";
                            params = {
                                q: query,
                            };
                            if (options !== undefined) {
                                if (options.offset !== undefined) {
                                    params.offset = options.offset;
                                }
                                if (options.limit !== undefined) {
                                    params.limit = options.limit;
                                }
                                if (options.attributesToRetrieve !== undefined) {
                                    if (Array.isArray(options.attributesToRetrieve)) {
                                        params.attributesToRetrieve = options.attributesToRetrieve.join(',');
                                    }
                                    else {
                                        params.attributesToRetrieve = options.attributesToRetrieve;
                                    }
                                }
                                if (options.attributesToCrop !== undefined) {
                                    if (Array.isArray(options.attributesToCrop)) {
                                        params.attributesToCrop = options.attributesToCrop.join(',');
                                    }
                                    else {
                                        params.attributesToCrop = options.attributesToCrop;
                                    }
                                }
                                if (options.cropLength !== undefined) {
                                    params.cropLength = options.cropLength;
                                }
                                if (options.attributesToHighlight !== undefined) {
                                    if (Array.isArray(options.attributesToHighlight)) {
                                        params.attributesToHighlight = options.attributesToHighlight.join(',');
                                    }
                                    else {
                                        params.attributesToHighlight = options.attributesToHighlight;
                                    }
                                }
                                if (options.filters !== undefined) {
                                    params.filters = options.filters;
                                }
                                if (options.matches !== undefined) {
                                    params.matches = options.matches;
                                }
                                if (options.facetFilters !== undefined) {
                                    params.facetFilters = JSON.stringify(options.facetFilters);
                                }
                                if (options.facetsDistribution !== undefined) {
                                    params.facetsDistribution = JSON.stringify(options.facetsDistribution);
                                }
                            }
                            return [4 /*yield*/, this.get(url, {
                                    params: params,
                                    cancelToken: this.cancelTokenSource.token,
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// INDEX
        ///
        /**
         * Show index information.
         * @memberof Index
         * @method show
         */
        Index.prototype.show = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid;
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Update an index.
         * @memberof Index
         * @method updateIndex
         */
        Index.prototype.updateIndex = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid;
                            return [4 /*yield*/, this.put(url, data)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Delete an index.
         * @memberof Index
         * @method deleteIndex
         */
        Index.prototype.deleteIndex = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid;
                            return [4 /*yield*/, this["delete"](url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// STATS
        ///
        /**
         * get stats of an index
         * @memberof Index
         * @method getStats
         */
        Index.prototype.getStats = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/stats";
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// DOCUMENTS
        ///
        /**
         * get documents of an index
         * @memberof Index
         * @method getDocuments
         */
        Index.prototype.getDocuments = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var url, attr;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/documents";
                            if (options !== undefined && Array.isArray(options.attributesToRetrieve)) {
                                attr = options.attributesToRetrieve.join(',');
                            }
                            return [4 /*yield*/, this.get(url, {
                                    params: __assign(__assign({}, options), (attr !== undefined ? { attributesToRetrieve: attr } : {})),
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Get one document
         * @memberof Index
         * @method getDocument
         */
        Index.prototype.getDocument = function (documentId) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/documents/" + documentId;
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Add or replace multiples documents to an index
         * @memberof Index
         * @method addDocuments
         */
        Index.prototype.addDocuments = function (documents, options) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/documents";
                            return [4 /*yield*/, this.post(url, documents, {
                                    params: options,
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Add or update multiples documents to an index
         * @memberof Index
         * @method updateDocuments
         */
        Index.prototype.updateDocuments = function (documents, options) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/documents";
                            return [4 /*yield*/, this.put(url, documents, {
                                    params: options,
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Delete one document
         * @memberof Index
         * @method deleteDocument
         */
        Index.prototype.deleteDocument = function (documentId) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/documents/" + documentId;
                            return [4 /*yield*/, this["delete"](url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Delete multiples documents of an index
         * @memberof Index
         * @method deleteDocuments
         */
        Index.prototype.deleteDocuments = function (documentsIds) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/documents/delete-batch";
                            return [4 /*yield*/, this.post(url, documentsIds)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Delete all documents of an index
         * @memberof Index
         * @method deleteAllDocuments
         */
        Index.prototype.deleteAllDocuments = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/documents";
                            return [4 /*yield*/, this["delete"](url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// SETTINGS
        ///
        /**
         * Retrieve all settings
         * @memberof Index
         * @method getSettings
         */
        Index.prototype.getSettings = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings";
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Update all settings
         * Any parameters not provided will be left unchanged.
         * @memberof Index
         * @method updateSettings
         */
        Index.prototype.updateSettings = function (settings) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings";
                            return [4 /*yield*/, this.post(url, settings)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Reset settings.
         * @memberof Index
         * @method resetSettings
         */
        Index.prototype.resetSettings = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings";
                            return [4 /*yield*/, this["delete"](url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// SYNONYMS
        ///
        /**
         * Get the list of all synonyms
         * @memberof Index
         * @method getSynonyms
         */
        Index.prototype.getSynonyms = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/synonyms";
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Update the list of synonyms. Overwrite the old list.
         * @memberof Index
         * @method updateSynonyms
         */
        Index.prototype.updateSynonyms = function (synonyms) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/synonyms";
                            return [4 /*yield*/, this.post(url, synonyms)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Reset the synonym list to be empty again
         * @memberof Index
         * @method resetSynonyms
         */
        Index.prototype.resetSynonyms = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/synonyms";
                            return [4 /*yield*/, this["delete"](url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// STOP WORDS
        ///
        /**
         * Get the list of all stop-words
         * @memberof Index
         * @method getStopWords
         */
        Index.prototype.getStopWords = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/stop-words";
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Update the list of stop-words. Overwrite the old list.
         * @memberof Index
         * @method updateStopWords
         */
        Index.prototype.updateStopWords = function (stopWords) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/stop-words";
                            return [4 /*yield*/, this.post(url, stopWords)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Reset the stop-words list to be empty again
         * @memberof Index
         * @method resetStopWords
         */
        Index.prototype.resetStopWords = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/stop-words";
                            return [4 /*yield*/, this["delete"](url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// RANKING RULES
        ///
        /**
         * Get the list of all ranking-rules
         * @memberof Index
         * @method getRankingRules
         */
        Index.prototype.getRankingRules = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/ranking-rules";
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Update the list of ranking-rules. Overwrite the old list.
         * @memberof Index
         * @method updateRankingRules
         */
        Index.prototype.updateRankingRules = function (rankingRules) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/ranking-rules";
                            return [4 /*yield*/, this.post(url, rankingRules)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Reset the ranking rules list to its default value
         * @memberof Index
         * @method resetRankingRules
         */
        Index.prototype.resetRankingRules = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/ranking-rules";
                            return [4 /*yield*/, this["delete"](url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// DISTINCT ATTRIBUTE
        ///
        /**
         * Get the distinct-attribute
         * @memberof Index
         * @method getDistinctAttribute
         */
        Index.prototype.getDistinctAttribute = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/distinct-attribute";
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Update the distinct-attribute.
         * @memberof Index
         * @method updateDistinctAttribute
         */
        Index.prototype.updateDistinctAttribute = function (distinctAttribute) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/distinct-attribute";
                            return [4 /*yield*/, this.post(url, distinctAttribute)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Reset the distinct-attribute.
         * @memberof Index
         * @method resetDistinctAttribute
         */
        Index.prototype.resetDistinctAttribute = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/distinct-attribute";
                            return [4 /*yield*/, this["delete"](url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// ATTRIBUTES FOR FACETING
        ///
        /**
         * Get the attributes-for-faceting
         * @memberof Index
         * @method getAttributesForFaceting
         */
        Index.prototype.getAttributesForFaceting = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/attributes-for-faceting";
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Update the attributes-for-faceting.
         * @memberof Index
         * @method updateAttributesForFaceting
         */
        Index.prototype.updateAttributesForFaceting = function (attributesForFaceting) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/attributes-for-faceting";
                            return [4 /*yield*/, this.post(url, attributesForFaceting)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Reset the attributes-for-faceting.
         * @memberof Index
         * @method resetAttributesForFaceting
         */
        Index.prototype.resetAttributesForFaceting = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/attributes-for-faceting";
                            return [4 /*yield*/, this["delete"](url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// SEARCHABLE ATTRIBUTE
        ///
        /**
         * Get the searchable-attributes
         * @memberof Index
         * @method getSearchableAttributes
         */
        Index.prototype.getSearchableAttributes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/searchable-attributes";
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Update the searchable-attributes.
         * @memberof Index
         * @method updateSearchableAttributes
         */
        Index.prototype.updateSearchableAttributes = function (searchableAttributes) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/searchable-attributes";
                            return [4 /*yield*/, this.post(url, searchableAttributes)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Reset the searchable-attributes.
         * @memberof Index
         * @method resetSearchableAttributes
         */
        Index.prototype.resetSearchableAttributes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/searchable-attributes";
                            return [4 /*yield*/, this["delete"](url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// DISPLAYED ATTRIBUTE
        ///
        /**
         * Get the displayed-attributes
         * @memberof Index
         * @method getDisplayedAttributes
         */
        Index.prototype.getDisplayedAttributes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/displayed-attributes";
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Update the displayed-attributes.
         * @memberof Index
         * @method updateDisplayedAttributes
         */
        Index.prototype.updateDisplayedAttributes = function (displayedAttributes) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/displayed-attributes";
                            return [4 /*yield*/, this.post(url, displayedAttributes)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Reset the displayed-attributes.
         * @memberof Index
         * @method resetDisplayedAttributes
         */
        Index.prototype.resetDisplayedAttributes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/displayed-attributes";
                            return [4 /*yield*/, this["delete"](url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// ACCEPT NEW FIELDS
        ///
        /**
         * Get the accept-new-fields value.
         * @memberof Index
         * @method getAcceptNewFields
         */
        Index.prototype.getAcceptNewFields = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/accept-new-fields";
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Update the accept-new-fields value.
         * @memberof Index
         * @method updateAcceptNewFields
         */
        Index.prototype.updateAcceptNewFields = function (acceptNewFields) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "/indexes/" + this.uid + "/settings/accept-new-fields";
                            return [4 /*yield*/, this.post(url, acceptNewFields)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return Index;
    }(MeiliAxiosWrapper));

    /*
     * Bundle: MeiliSearch
     * Project: MeiliSearch - Javascript API
     * Author: Quentin de Quelen <quentin@meilisearch.com>
     * Copyright: 2019, MeiliSearch
     */
    var MeiliSearch = /** @class */ (function (_super) {
        __extends(MeiliSearch, _super);
        function MeiliSearch(config) {
            var _this = _super.call(this, config) || this;
            _this.config = config;
            return _this;
        }
        /**
         * Return an Index instance
         * @memberof MeiliSearch
         * @method getIndex
         */
        MeiliSearch.prototype.getIndex = function (indexUid) {
            return new Index(this.config, indexUid);
        };
        /**
         * Get an index or create it if it does not exist
         * @memberof MeiliSearch
         * @method getOrCreateIndex
         */
        MeiliSearch.prototype.getOrCreateIndex = function (uid, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var index, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.createIndex(uid, options)];
                        case 1:
                            index = _a.sent();
                            return [2 /*return*/, index];
                        case 2:
                            e_1 = _a.sent();
                            if (e_1.errorCode === 'index_already_exists') {
                                return [2 /*return*/, this.getIndex(uid)];
                            }
                            throw e_1;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * List all indexes in the database
         * @memberof MeiliSearch
         * @method listIndexes
         */
        MeiliSearch.prototype.listIndexes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/indexes';
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Create a new index
         * @memberof MeiliSearch
         * @method createIndex
         */
        MeiliSearch.prototype.createIndex = function (uid, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var url, index;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/indexes';
                            return [4 /*yield*/, this.post(url, __assign(__assign({}, options), { uid: uid }))];
                        case 1:
                            index = _a.sent();
                            return [2 /*return*/, new Index(this.config, index.uid)];
                    }
                });
            });
        };
        ///
        /// KEYS
        ///
        /**
         * Get private and public key
         * @memberof MeiliSearch
         * @method getKey
         */
        MeiliSearch.prototype.getKeys = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/keys';
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// HEALTH
        ///
        /**
         * Check if the server is healhty
         * @memberof MeiliSearch
         * @method isHealthy
         */
        MeiliSearch.prototype.isHealthy = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/health';
                            return [4 /*yield*/, this.get(url).then(function (_) { return true; })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Change the healthyness to healthy
         * @memberof MeiliSearch
         * @method setHealthy
         */
        MeiliSearch.prototype.setHealthy = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/health';
                            return [4 /*yield*/, this.put(url, {
                                    health: true,
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Change the healthyness to unhealthy
         * @memberof MeiliSearch
         * @method setUnhealthy
         */
        MeiliSearch.prototype.setUnhealthy = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/health';
                            return [4 /*yield*/, this.put(url, {
                                    health: false,
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Set the healthyness to health value
         * @memberof MeiliSearch
         * @method changeHealthTo
         */
        MeiliSearch.prototype.changeHealthTo = function (health) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/health';
                            return [4 /*yield*/, this.put(url, {
                                    health: health,
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ///
        /// STATS
        ///
        /**
         * Get the stats of all the database
         * @memberof MeiliSearch
         * @method stats
         */
        MeiliSearch.prototype.stats = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/stats';
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Get the version of MeiliSearch
         * @memberof MeiliSearch
         * @method version
         */
        MeiliSearch.prototype.version = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/version';
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Get the server consuption, RAM / CPU / Network
         * @memberof MeiliSearch
         * @method sysInfo
         */
        MeiliSearch.prototype.sysInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/sys-info';
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Get the server consuption, RAM / CPU / Network. All information as human readable
         * @memberof MeiliSearch
         * @method prettySysInfo
         */
        MeiliSearch.prototype.prettySysInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/sys-info/pretty';
                            return [4 /*yield*/, this.get(url)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return MeiliSearch;
    }(MeiliAxiosWrapper));

    return MeiliSearch;

})));
