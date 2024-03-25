const fs = require('fs');
const EventListener = require('events');

(() => {
  consoleX = {
    log: function () {},
    warn: function () {},
    error: function () {},
  };

  var eventName, fileName, Module, Module_pdf, Module_word, Module_sheet, pohostname;

  const self = new EventListener();
  self.addEventListener = self.on;
  self.postMessage = data => {
    self.emit('message', data);
  };

  function xlog(...args) {}

  ////////////////////////////////////////////////////////////////

  var ModuleX = (() => {
    var Et =
      'undefined' != typeof document && document.currentScript
        ? document.currentScript.src
        : void 0;
    return (
      'undefined' != typeof __filename && (Et = Et || __filename),
      function (d) {
        ((d = (d = d || {}) || (void 0 !== d ? d : {})).ready = new Promise(function (e, t) {
          (L = e), (j = t);
        })),
          [
            '_main',
            '_ISetEngineConfig',
            '_IGetEngineConfig',
            '_IPoDocumenttoImage',
            '_IPoCompressPDF',
            '_IPoProtectPDF',
            '_IPoUnlockPDF',
            '_IPoAddFileForMerge',
            '_IPoMergePDF',
            '_IPoSplitPDF',
            '_IPoGetFirstThumbnail',
            '_IPoGetThumbnail',
            '_IPoGetFileInfo',
            '_IPoDocumentConverter',
            '_IPoAddFileForImageToPDF',
            '_IPoImageToPDF',
            '_IPoImageConverter',
            '_IPoShowReflowDocument',
            '_IPoExtractContents',
            '_IPoAddFileForMakeCover',
            '_IPoMakeCover',
            '_IPoCreateFileHandle',
            '_IPoReleaseFileHandle',
            '_IPoEditPDFAnnotation',
            '_IPoSaveFileHandle',
            '_fflush',
            'onRuntimeInitialized',
          ].forEach(e => {
            Object.getOwnPropertyDescriptor(d.ready, e) ||
              Object.defineProperty(d.ready, e, {
                get: () =>
                  v(
                    'You are getting ' +
                      e +
                      ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'
                  ),
                set: () =>
                  v(
                    'You are setting ' +
                      e +
                      ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'
                  ),
              });
          });
        var L,
          j,
          e = Object.assign({}, d),
          x = './this.program',
          U = (e, t) => {
            throw t;
          },
          B = 'object' == typeof window,
          l = 'function' == typeof importScripts,
          a =
            'object' == typeof process &&
            'object' == typeof process.versions &&
            'string' == typeof process.versions.node,
          t = !B && !a && !l;
        if (d.ENVIRONMENT)
          throw new Error(
            'Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)'
          );
        var G,
          z,
          H,
          W,
          Y,
          q,
          r = '';

        function V(t) {
          if (!(t instanceof be)) {
            let e = t;
            t && 'object' == typeof t && t.stack && (e = [t, t.stack]),
              s('exiting due to exception: ' + e);
          }
        }

        if (a) {
          if ('undefined' == typeof process || !process.release || 'node' !== process.release.name)
            throw new Error(
              'not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)'
            );
          (r = l ? require('path').dirname(r) + '/' : __dirname + '/'),
            (q = () => {
              Y || ((W = require('fs')), (Y = require('path')));
            }),
            (G = function (e, t) {
              return q(), (e = Y.normalize(e)), W.readFileSync(e, t ? void 0 : 'utf8');
            }),
            (H = e => {
              e = G(e, !0);
              return g((e = e.buffer ? e : new Uint8Array(e)).buffer), e;
            }),
            (z = (e, r, n) => {
              q(),
                (e = Y.normalize(e)),
                W.readFile(e, function (e, t) {
                  e ? n(e) : r(t.buffer);
                });
            }),
            1 < process.argv.length && (x = process.argv[1].replace(/\\/g, '/')),
            process.argv.slice(2),
            process.on('uncaughtException', function (e) {
              if (!(e instanceof be)) throw e;
            }),
            process.on('unhandledRejection', function (e) {
              throw e;
            }),
            (U = (e, t) => {
              if (Q) throw ((process.exitCode = e), t);
              V(t), process.exit(e);
            }),
            (d.inspect = function () {
              return '[Emscripten Module object]';
            });
        } else if (t) {
          if (
            ('object' == typeof process && 'function' == typeof require) ||
            'object' == typeof window ||
            'function' == typeof importScripts
          )
            throw new Error(
              'not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)'
            );
          'undefined' != typeof read &&
            (G = function (e) {
              return read(e);
            }),
            (H = function (e) {
              return 'function' == typeof readbuffer
                ? new Uint8Array(readbuffer(e))
                : (g('object' == typeof (e = read(e, 'binary'))), e);
            }),
            (z = function (e, t, r) {
              setTimeout(() => t(H(e)), 0);
            }),
            'undefined' != typeof scriptArgs ? 0 : void 0 !== arguments && 0,
            'function' == typeof quit &&
              (U = (e, t) => {
                V(t), quit(e);
              }),
            'undefined' != typeof print &&
              (((console = 'undefined' == typeof console ? {} : console).log = print),
              (console.warn = console.error = 'undefined' != typeof printErr ? printErr : print));
        } else {
          if (!B && !l) throw new Error('environment detection error');
          if (
            (l
              ? (r = self.location.href)
              : 'undefined' != typeof document &&
                document.currentScript &&
                (r = document.currentScript.src),
            (r =
              0 !== (r = Et ? Et : r).indexOf('blob:')
                ? r.substr(0, r.replace(/[?#].*/, '').lastIndexOf('/') + 1)
                : ''),
            'object' != typeof window && 'function' != typeof importScripts)
          )
            throw new Error(
              'not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)'
            );
          (G = e => {
            var t = new XMLHttpRequest();
            return t.open('GET', e, !1), t.send(null), t.responseText;
          }),
            l &&
              (H = e => {
                var t = new XMLHttpRequest();
                return (
                  t.open('GET', e, !1),
                  (t.responseType = 'arraybuffer'),
                  t.send(null),
                  new Uint8Array(t.response)
                );
              }),
            (z = (e, t, r) => {
              var n = new XMLHttpRequest();
              n.open('GET', e, !0),
                (n.responseType = 'arraybuffer'),
                (n.onload = () => {
                  200 == n.status || (0 == n.status && n.response) ? t(n.response) : r();
                }),
                (n.onerror = r),
                n.send(null);
            }),
            0;
        }
        var J,
          f = d.print || consoleX.log.bind(consoleX),
          s = d.printErr || consoleX.warn.bind(consoleX),
          e = (Object.assign(d, e), 'fetchSettings');
        Object.getOwnPropertyDescriptor(d, e) &&
          v(
            '`Module.' + e + '` was supplied but `' + e + '` not included in INCOMING_MODULE_JS_API'
          ),
          d.arguments && d.arguments,
          n('arguments', 'arguments_'),
          d.thisProgram && (x = d.thisProgram),
          n('thisProgram', 'thisProgram'),
          d.quit && (U = d.quit),
          n('quit', 'quit_'),
          g(
            void 0 === d.memoryInitializerPrefixURL,
            'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead'
          ),
          g(
            void 0 === d.pthreadMainPrefixURL,
            'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead'
          ),
          g(
            void 0 === d.cdInitializerPrefixURL,
            'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead'
          ),
          g(
            void 0 === d.filePackagePrefixURL,
            'Module.filePackagePrefixURL option was removed, use Module.locateFile instead'
          ),
          g(void 0 === d.read, 'Module.read option was removed (modify read_ in JS)'),
          g(void 0 === d.readAsync, 'Module.readAsync option was removed (modify readAsync in JS)'),
          g(
            void 0 === d.readBinary,
            'Module.readBinary option was removed (modify readBinary in JS)'
          ),
          g(
            void 0 === d.setWindowTitle,
            'Module.setWindowTitle option was removed (modify setWindowTitle in JS)'
          ),
          g(
            void 0 === d.TOTAL_MEMORY,
            'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY'
          ),
          n('read', 'read_'),
          n('readAsync', 'readAsync'),
          n('readBinary', 'readBinary'),
          n('setWindowTitle', 'setWindowTitle'),
          g(
            !t,
            "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable."
          );

        function n(e, t) {
          Object.getOwnPropertyDescriptor(d, e) ||
            Object.defineProperty(d, e, {
              configurable: !0,
              get: function () {
                v(
                  'Module.' +
                    e +
                    ' has been replaced with plain ' +
                    t +
                    ' (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)'
                );
              },
            });
        }

        function X(e) {
          return (
            'FS_createPath' === e ||
            'FS_createDataFile' === e ||
            'FS_createPreloadedFile' === e ||
            'FS_unlink' === e ||
            'addRunDependency' === e ||
            'FS_createLazyFile' === e ||
            'FS_createDevice' === e ||
            'removeRunDependency' === e
          );
        }

        d.wasmBinary && (J = d.wasmBinary), n('wasmBinary', 'wasmBinary');
        var K,
          Q = d.noExitRuntime || !0,
          Z =
            (n('noExitRuntime', 'noExitRuntime'),
            'object' != typeof WebAssembly && v('no native wasm support detected'),
            !1);

        function g(e, t) {
          e || v('Assertion failed' + (t ? ': ' + t : ''));
        }

        var $,
          h,
          m,
          ee,
          te,
          y,
          u,
          re = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0;

        function ne(e, t, r) {
          for (var n = t + r, o = t; e[o] && !(n <= o); ) ++o;
          if (16 < o - t && e.buffer && re) return re.decode(e.subarray(t, o));
          for (var i = ''; t < o; ) {
            var a,
              s,
              c = e[t++];
            128 & c
              ? ((s = 63 & e[t++]),
                192 == (224 & c)
                  ? (i += String.fromCharCode(((31 & c) << 6) | s))
                  : ((a = 63 & e[t++]),
                    (c =
                      224 == (240 & c)
                        ? ((15 & c) << 12) | (s << 6) | a
                        : (240 != (248 & c) &&
                            S(
                              'Invalid UTF-8 leading byte 0x' +
                                c.toString(16) +
                                ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!'
                            ),
                          ((7 & c) << 18) | (s << 12) | (a << 6) | (63 & e[t++]))) < 65536
                      ? (i += String.fromCharCode(c))
                      : ((s = c - 65536),
                        (i += String.fromCharCode(55296 | (s >> 10), 56320 | (1023 & s))))))
              : (i += String.fromCharCode(c));
          }
          return i;
        }

        function _(e, t) {
          return e ? ne(m, e, t) : '';
        }

        function oe(e, t, r, n) {
          if (!(0 < n)) return 0;
          for (var o = r, i = r + n - 1, a = 0; a < e.length; ++a) {
            var s = e.charCodeAt(a);
            if (
              (s =
                55296 <= s && s <= 57343
                  ? (65536 + ((1023 & s) << 10)) | (1023 & e.charCodeAt(++a))
                  : s) <= 127
            ) {
              if (i <= r) break;
              t[r++] = s;
            } else {
              if (s <= 2047) {
                if (i <= r + 1) break;
                t[r++] = 192 | (s >> 6);
              } else {
                if (s <= 65535) {
                  if (i <= r + 2) break;
                  t[r++] = 224 | (s >> 12);
                } else {
                  if (i <= r + 3) break;
                  1114111 < s &&
                    S(
                      'Invalid Unicode code point 0x' +
                        s.toString(16) +
                        ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).'
                    ),
                    (t[r++] = 240 | (s >> 18)),
                    (t[r++] = 128 | ((s >> 12) & 63));
                }
                t[r++] = 128 | ((s >> 6) & 63);
              }
              t[r++] = 128 | (63 & s);
            }
          }
          return (t[r] = 0), r - o;
        }

        function ie(e, t, r) {
          return (
            g(
              'number' == typeof r,
              'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!'
            ),
            oe(e, m, t, r)
          );
        }

        function c(e) {
          for (var t = 0, r = 0; r < e.length; ++r) {
            var n = e.charCodeAt(r);
            n <= 127
              ? t++
              : n <= 2047
                ? (t += 2)
                : 55296 <= n && n <= 57343
                  ? ((t += 4), ++r)
                  : (t += 3);
          }
          return t;
        }

        function ae(e) {
          ($ = e),
            (d.HEAP8 = h = new Int8Array(e)),
            (d.HEAP16 = ee = new Int16Array(e)),
            (d.HEAP32 = y = new Int32Array(e)),
            (d.HEAPU8 = m = new Uint8Array(e)),
            (d.HEAPU16 = te = new Uint16Array(e)),
            (d.HEAPU32 = u = new Uint32Array(e)),
            (d.HEAPF32 = new Float32Array(e)),
            (d.HEAPF64 = new Float64Array(e));
        }

        var p,
          e = 5242880,
          t =
            (d.TOTAL_STACK &&
              g(e === d.TOTAL_STACK, 'the stack size can no longer be determined at runtime'),
            d.INITIAL_MEMORY || 33554432);

        function se() {
          var e, t, r;
          Z ||
            ((e = st()),
            (t = u[e >> 2]),
            (r = u[(e + 4) >> 2]),
            (34821223 == t && 2310721022 == r) ||
              v(
                'Stack overflow! Stack cookie has been overwritten at 0x' +
                  e.toString(16) +
                  ', expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' +
                  r.toString(16) +
                  ' 0x' +
                  t.toString(16)
              ),
            1668509029 !== u[0] &&
              v(
                'Runtime error: The application has corrupted its heap memory area (address zero)!'
              ));
        }

        n('INITIAL_MEMORY', 'INITIAL_MEMORY'),
          g(
            e <= t,
            'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' +
              t +
              '! (TOTAL_STACK=' +
              e +
              ')'
          ),
          g(
            'undefined' != typeof Int32Array &&
              'undefined' != typeof Float64Array &&
              null != Int32Array.prototype.subarray &&
              null != Int32Array.prototype.set,
            'JS engine does not provide full typed array support'
          ),
          g(
            !d.wasmMemory,
            'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally'
          ),
          g(
            33554432 == t,
            'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically'
          );
        (e = new Int16Array(1)), (t = new Int8Array(e.buffer));
        if (((e[0] = 25459), 115 !== t[0] || 99 !== t[1]))
          throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
        var ce = [],
          ue = [],
          le = [],
          de = !1;

        function fe() {
          if (d.preRun)
            for ('function' == typeof d.preRun && (d.preRun = [d.preRun]); d.preRun.length; )
              (e = d.preRun.shift()), ce.unshift(e);
          var e;
          ke(ce);
        }

        function he() {
          if ((se(), d.postRun))
            for ('function' == typeof d.postRun && (d.postRun = [d.postRun]); d.postRun.length; )
              (e = d.postRun.shift()), le.unshift(e);
          var e;
          ke(le);
        }

        g(
          Math.imul,
          'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill'
        ),
          g(
            Math.fround,
            'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill'
          ),
          g(
            Math.clz32,
            'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill'
          ),
          g(
            Math.trunc,
            'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill'
          );
        var o = 0,
          i = null,
          me = null,
          pe = {};

        function ve(e) {
          for (var t = e; ; ) {
            if (!pe[e]) return e;
            e = t + Math.random();
          }
        }

        function ye(e) {
          o++,
            d.monitorRunDependencies && d.monitorRunDependencies(o),
            e
              ? (g(!pe[e]),
                (pe[e] = 1),
                null === i &&
                  'undefined' != typeof setInterval &&
                  (i = setInterval(function () {
                    if (Z) clearInterval(i), (i = null);
                    else {
                      var e,
                        t = !1;
                      for (e in pe)
                        t || ((t = !0), s('still waiting on run dependencies:')),
                          s('dependency: ' + e);
                      t && s('(end of list)');
                    }
                  }, 1e4)))
              : s('warning: run dependency added without ID');
        }

        function ge(e) {
          o--,
            d.monitorRunDependencies && d.monitorRunDependencies(o),
            e ? (g(pe[e]), delete pe[e]) : s('warning: run dependency removed without ID'),
            0 == o &&
              (null !== i && (clearInterval(i), (i = null)), me) &&
              ((e = me), (me = null), e());
        }

        function v(e) {
          d.onAbort && d.onAbort(e), s((e = 'Aborted(' + e + ')')), (Z = !0), 0;
          e = new WebAssembly.RuntimeError(e);
          throw (j(e), e);
        }

        var w, E, b;

        function _e(e) {
          return e.startsWith('data:application/octet-stream;base64,');
        }

        function we(e) {
          return e.startsWith('file://');
        }

        function k(r, n) {
          return function () {
            var e = r,
              t = n;
            return (
              n || (t = d.asm),
              g(de, 'native function `' + e + '` called before runtime initialization'),
              t[r] || g(t[r], 'exported native function `' + e + '` not found'),
              t[r].apply(null, arguments)
            );
          };
        }

        function Ee(e) {
          try {
            if (e == w && J) return new Uint8Array(J);
            if (H) return H(e);
            throw 'both async and sync fetching of the wasm failed';
          } catch (e) {
            v(e);
          }
        }

        _e((w = 'libpolarisoffice_word.wasm')) ||
          ((e = w), (w = d.locateFile ? d.locateFile(e, r) : r + e));

        function be(e) {
          (this.name = 'ExitStatus'),
            (this.message = 'Program terminated with exit(' + e + ')'),
            (this.status = e);
        }

        function ke(e) {
          for (; 0 < e.length; ) e.shift()(d);
        }

        function Se(i) {
          return (
            (Se.recursionGuard = 1 + (0 | Se.recursionGuard)),
            1 < Se.recursionGuard
              ? i
              : (g(ot),
                (e = function () {
                  try {
                    var e = i,
                      t = c((e = e.startsWith('__Z') ? e.substr(1) : e)) + 1,
                      r = ct(t),
                      n = (ie(e, r, t), ct(4)),
                      o = ot(r, 0, 0, n);
                    if (0 === y[n >> 2] && o) return _(o);
                  } catch (e) {
                  } finally {
                    et(o), Se.recursionGuard < 2 && --Se.recursionGuard;
                  }
                  return i;
                }),
                (t = N()),
                (e = e()),
                R(t),
                e)
          );
          var e, t;
        }

        function Te(e) {
          return e.replace(/\b_Z[\w\d_]+/g, function (e) {
            var t = Se(e);
            return e === t ? e : t + ' [' + e + ']';
          });
        }

        function S(e) {
          S.shown || (S.shown = {}),
            S.shown[e] || ((S.shown[e] = 1), s((e = a ? 'warning: ' + e : e)));
        }

        function Fe(e, t) {
          g(
            0 <= e.length,
            'writeArrayToMemory array must have a length (should be an array or typed array)'
          ),
            h.set(e, t);
        }

        function Pe(e) {
          (this.excPtr = e),
            (this.ptr = e - 24),
            (this.set_type = function (e) {
              u[(this.ptr + 4) >> 2] = e;
            }),
            (this.get_type = function () {
              return u[(this.ptr + 4) >> 2];
            }),
            (this.set_destructor = function (e) {
              u[(this.ptr + 8) >> 2] = e;
            }),
            (this.get_destructor = function () {
              return u[(this.ptr + 8) >> 2];
            }),
            (this.set_refcount = function (e) {
              y[this.ptr >> 2] = e;
            }),
            (this.set_caught = function (e) {
              h[(this.ptr + 12) >> 0] = e = e ? 1 : 0;
            }),
            (this.get_caught = function () {
              return 0 != h[(this.ptr + 12) >> 0];
            }),
            (this.set_rethrown = function (e) {
              h[(this.ptr + 13) >> 0] = e = e ? 1 : 0;
            }),
            (this.get_rethrown = function () {
              return 0 != h[(this.ptr + 13) >> 0];
            }),
            (this.init = function (e, t) {
              this.set_adjusted_ptr(0),
                this.set_type(e),
                this.set_destructor(t),
                this.set_refcount(0),
                this.set_caught(!1),
                this.set_rethrown(!1);
            }),
            (this.add_ref = function () {
              var e = y[this.ptr >> 2];
              y[this.ptr >> 2] = e + 1;
            }),
            (this.release_ref = function () {
              var e = y[this.ptr >> 2];
              return (y[this.ptr >> 2] = e - 1), g(0 < e), 1 === e;
            }),
            (this.set_adjusted_ptr = function (e) {
              u[(this.ptr + 16) >> 2] = e;
            }),
            (this.get_adjusted_ptr = function () {
              return u[(this.ptr + 16) >> 2];
            }),
            (this.get_exception_ptr = function () {
              var e;
              return ut(this.get_type())
                ? u[this.excPtr >> 2]
                : 0 !== (e = this.get_adjusted_ptr())
                  ? e
                  : this.excPtr;
            });
        }

        var T = {
          isAbs: e => '/' === e.charAt(0),
          splitPath: e => {
            return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);
          },
          normalizeArray: (e, t) => {
            for (var r = 0, n = e.length - 1; 0 <= n; n--) {
              var o = e[n];
              '.' === o
                ? e.splice(n, 1)
                : '..' === o
                  ? (e.splice(n, 1), r++)
                  : r && (e.splice(n, 1), r--);
            }
            if (t) for (; r; r--) e.unshift('..');
            return e;
          },
          normalize: e => {
            var t = T.isAbs(e),
              r = '/' === e.substr(-1);
            return (
              (e =
                (e = T.normalizeArray(
                  e.split('/').filter(e => !!e),
                  !t
                ).join('/')) || t
                  ? e
                  : '.') &&
                r &&
                (e += '/'),
              (t ? '/' : '') + e
            );
          },
          dirname: e => {
            var e = T.splitPath(e),
              t = e[0],
              e = e[1];
            return t || e ? t + (e = e && e.substr(0, e.length - 1)) : '.';
          },
          basename: e => {
            var t;
            return '/' === e
              ? '/'
              : -1 === (t = (e = (e = T.normalize(e)).replace(/\/$/, '')).lastIndexOf('/'))
                ? e
                : e.substr(t + 1);
          },
          join: function () {
            var e = Array.prototype.slice.call(arguments);
            return T.normalize(e.join('/'));
          },
          join2: (e, t) => T.normalize(e + '/' + t),
        };
        var F = {
          resolve: function () {
            for (var e = '', t = !1, r = arguments.length - 1; -1 <= r && !t; r--) {
              var n = 0 <= r ? arguments[r] : C.cwd();
              if ('string' != typeof n)
                throw new TypeError('Arguments to path.resolve must be strings');
              if (!n) return '';
              (e = n + '/' + e), (t = T.isAbs(n));
            }
            return (
              (t ? '/' : '') +
                (e = T.normalizeArray(
                  e.split('/').filter(e => !!e),
                  !t
                ).join('/')) || '.'
            );
          },
          relative: (e, t) => {
            function r(e) {
              for (var t = 0; t < e.length && '' === e[t]; t++);
              for (var r = e.length - 1; 0 <= r && '' === e[r]; r--);
              return r < t ? [] : e.slice(t, r - t + 1);
            }

            (e = F.resolve(e).substr(1)), (t = F.resolve(t).substr(1));
            for (
              var n = r(e.split('/')),
                o = r(t.split('/')),
                i = Math.min(n.length, o.length),
                a = i,
                s = 0;
              s < i;
              s++
            )
              if (n[s] !== o[s]) {
                a = s;
                break;
              }
            for (var c = [], s = a; s < n.length; s++) c.push('..');
            return (c = c.concat(o.slice(a))).join('/');
          },
        };

        function De(e, t, r) {
          (r = 0 < r ? r : c(e) + 1), (r = new Array(r)), (e = oe(e, r, 0, r.length));
          return t && (r.length = e), r;
        }

        var P = {
          ttys: [],
          init: function () {},
          shutdown: function () {},
          register: function (e, t) {
            (P.ttys[e] = {
              input: [],
              output: [],
              ops: t,
            }),
              C.registerDevice(e, P.stream_ops);
          },
          stream_ops: {
            open: function (e) {
              var t = P.ttys[e.node.rdev];
              if (!t) throw new C.ErrnoError(43);
              (e.tty = t), (e.seekable = !1);
            },
            close: function (e) {
              e.tty.ops.fsync(e.tty);
            },
            fsync: function (e) {
              e.tty.ops.fsync(e.tty);
            },
            read: function (e, t, r, n, o) {
              if (!e.tty || !e.tty.ops.get_char) throw new C.ErrnoError(60);
              for (var i, a = 0, s = 0; s < n; s++) {
                try {
                  i = e.tty.ops.get_char(e.tty);
                } catch (e) {
                  throw new C.ErrnoError(29);
                }
                if (void 0 === i && 0 === a) throw new C.ErrnoError(6);
                if (null == i) break;
                a++, (t[r + s] = i);
              }
              return a && (e.node.timestamp = Date.now()), a;
            },
            write: function (e, t, r, n, o) {
              if (!e.tty || !e.tty.ops.put_char) throw new C.ErrnoError(60);
              try {
                for (var i = 0; i < n; i++) e.tty.ops.put_char(e.tty, t[r + i]);
              } catch (e) {
                throw new C.ErrnoError(29);
              }
              return n && (e.node.timestamp = Date.now()), i;
            },
          },
          default_tty_ops: {
            get_char: function (e) {
              if (!e.input.length) {
                var t = null;
                if (a) {
                  var r = Buffer.alloc(256),
                    n = 0;
                  try {
                    n = W.readSync(process.stdin.fd, r, 0, 256, -1);
                  } catch (e) {
                    if (!e.toString().includes('EOF')) throw e;
                    n = 0;
                  }
                  t = 0 < n ? r.slice(0, n).toString('utf-8') : null;
                } else
                  'undefined' != typeof window && 'function' == typeof window.prompt
                    ? null !== (t = window.prompt('Input: ')) && (t += '\n')
                    : 'function' == typeof readline && null !== (t = readline()) && (t += '\n');
                if (!t) return null;
                e.input = De(t, !0);
              }
              return e.input.shift();
            },
            put_char: function (e, t) {
              null === t || 10 === t
                ? (f(ne(e.output, 0)), (e.output = []))
                : 0 != t && e.output.push(t);
            },
            fsync: function (e) {
              e.output && 0 < e.output.length && (f(ne(e.output, 0)), (e.output = []));
            },
          },
          default_tty1_ops: {
            put_char: function (e, t) {
              null === t || 10 === t
                ? (s(ne(e.output, 0)), (e.output = []))
                : 0 != t && e.output.push(t);
            },
            fsync: function (e) {
              e.output && 0 < e.output.length && (s(ne(e.output, 0)), (e.output = []));
            },
          },
        };

        function Ce(e) {
          (r = e), g((t = 65536), 'alignment argument is required'), (e = Math.ceil(r / t) * t);
          var t,
            r = it(65536, e);
          return r ? ((t = r), (r = e), m.fill(0, t, t + r), t) : 0;
        }

        var D = {
          ops_table: null,
          mount: function (e) {
            return D.createNode(null, '/', 16895, 0);
          },
          createNode: function (e, t, r, n) {
            if (C.isBlkdev(r) || C.isFIFO(r)) throw new C.ErrnoError(63);
            D.ops_table ||
              (D.ops_table = {
                dir: {
                  node: {
                    getattr: D.node_ops.getattr,
                    setattr: D.node_ops.setattr,
                    lookup: D.node_ops.lookup,
                    mknod: D.node_ops.mknod,
                    rename: D.node_ops.rename,
                    unlink: D.node_ops.unlink,
                    rmdir: D.node_ops.rmdir,
                    readdir: D.node_ops.readdir,
                    symlink: D.node_ops.symlink,
                  },
                  stream: {
                    llseek: D.stream_ops.llseek,
                  },
                },
                file: {
                  node: {
                    getattr: D.node_ops.getattr,
                    setattr: D.node_ops.setattr,
                  },
                  stream: {
                    llseek: D.stream_ops.llseek,
                    read: D.stream_ops.read,
                    write: D.stream_ops.write,
                    allocate: D.stream_ops.allocate,
                    mmap: D.stream_ops.mmap,
                    msync: D.stream_ops.msync,
                  },
                },
                link: {
                  node: {
                    getattr: D.node_ops.getattr,
                    setattr: D.node_ops.setattr,
                    readlink: D.node_ops.readlink,
                  },
                  stream: {},
                },
                chrdev: {
                  node: {
                    getattr: D.node_ops.getattr,
                    setattr: D.node_ops.setattr,
                  },
                  stream: C.chrdev_stream_ops,
                },
              });
            r = C.createNode(e, t, r, n);
            return (
              C.isDir(r.mode)
                ? ((r.node_ops = D.ops_table.dir.node),
                  (r.stream_ops = D.ops_table.dir.stream),
                  (r.contents = {}))
                : C.isFile(r.mode)
                  ? ((r.node_ops = D.ops_table.file.node),
                    (r.stream_ops = D.ops_table.file.stream),
                    (r.usedBytes = 0),
                    (r.contents = null))
                  : C.isLink(r.mode)
                    ? ((r.node_ops = D.ops_table.link.node),
                      (r.stream_ops = D.ops_table.link.stream))
                    : C.isChrdev(r.mode) &&
                      ((r.node_ops = D.ops_table.chrdev.node),
                      (r.stream_ops = D.ops_table.chrdev.stream)),
              (r.timestamp = Date.now()),
              e && ((e.contents[t] = r), (e.timestamp = r.timestamp)),
              r
            );
          },
          getFileDataAsTypedArray: function (e) {
            return e.contents
              ? e.contents.subarray
                ? e.contents.subarray(0, e.usedBytes)
                : new Uint8Array(e.contents)
              : new Uint8Array(0);
          },
          expandFileStorage: function (e, t) {
            var r = e.contents ? e.contents.length : 0;
            t <= r ||
              ((t = Math.max(t, (r * (r < 1048576 ? 2 : 1.125)) >>> 0)),
              0 != r && (t = Math.max(t, 256)),
              (r = e.contents),
              (e.contents = new Uint8Array(t)),
              0 < e.usedBytes && e.contents.set(r.subarray(0, e.usedBytes), 0));
          },
          resizeFileStorage: function (e, t) {
            var r;
            e.usedBytes != t &&
              (0 == t
                ? ((e.contents = null), (e.usedBytes = 0))
                : ((r = e.contents),
                  (e.contents = new Uint8Array(t)),
                  r && e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))),
                  (e.usedBytes = t)));
          },
          node_ops: {
            getattr: function (e) {
              var t = {};
              return (
                (t.dev = C.isChrdev(e.mode) ? e.id : 1),
                (t.ino = e.id),
                (t.mode = e.mode),
                (t.nlink = 1),
                (t.uid = 0),
                (t.gid = 0),
                (t.rdev = e.rdev),
                C.isDir(e.mode)
                  ? (t.size = 4096)
                  : C.isFile(e.mode)
                    ? (t.size = e.usedBytes)
                    : C.isLink(e.mode)
                      ? (t.size = e.link.length)
                      : (t.size = 0),
                (t.atime = new Date(e.timestamp)),
                (t.mtime = new Date(e.timestamp)),
                (t.ctime = new Date(e.timestamp)),
                (t.blksize = 4096),
                (t.blocks = Math.ceil(t.size / t.blksize)),
                t
              );
            },
            setattr: function (e, t) {
              void 0 !== t.mode && (e.mode = t.mode),
                void 0 !== t.timestamp && (e.timestamp = t.timestamp),
                void 0 !== t.size && D.resizeFileStorage(e, t.size);
            },
            lookup: function (e, t) {
              throw C.genericErrors[44];
            },
            mknod: function (e, t, r, n) {
              return D.createNode(e, t, r, n);
            },
            rename: function (e, t, r) {
              if (C.isDir(e.mode)) {
                var n;
                try {
                  n = C.lookupNode(t, r);
                } catch (e) {}
                if (n) for (var o in n.contents) throw new C.ErrnoError(55);
              }
              delete e.parent.contents[e.name],
                (e.parent.timestamp = Date.now()),
                (e.name = r),
                (t.contents[r] = e),
                (t.timestamp = e.parent.timestamp),
                (e.parent = t);
            },
            unlink: function (e, t) {
              delete e.contents[t], (e.timestamp = Date.now());
            },
            rmdir: function (e, t) {
              for (var r in C.lookupNode(e, t).contents) throw new C.ErrnoError(55);
              delete e.contents[t], (e.timestamp = Date.now());
            },
            readdir: function (e) {
              var t,
                r = ['.', '..'];
              for (t in e.contents) e.contents.hasOwnProperty(t) && r.push(t);
              return r;
            },
            symlink: function (e, t, r) {
              e = D.createNode(e, t, 41471, 0);
              return (e.link = r), e;
            },
            readlink: function (e) {
              if (C.isLink(e.mode)) return e.link;
              throw new C.ErrnoError(28);
            },
          },
          stream_ops: {
            read: function (e, t, r, n, o) {
              var i = e.node.contents;
              if (o >= e.node.usedBytes) return 0;
              var a = Math.min(e.node.usedBytes - o, n);
              if ((g(0 <= a), 8 < a && i.subarray)) t.set(i.subarray(o, o + a), r);
              else for (var s = 0; s < a; s++) t[r + s] = i[o + s];
              return a;
            },
            write: function (e, t, r, n, o, i) {
              if ((g(!(t instanceof ArrayBuffer)), t.buffer === h.buffer && (i = !1), !n)) return 0;
              var a = e.node;
              if (
                ((a.timestamp = Date.now()), t.subarray && (!a.contents || a.contents.subarray))
              ) {
                if (i)
                  return (
                    g(0 === o, 'canOwn must imply no weird position inside the file'),
                    (a.contents = t.subarray(r, r + n)),
                    (a.usedBytes = n)
                  );
                if (0 === a.usedBytes && 0 === o)
                  return (a.contents = t.slice(r, r + n)), (a.usedBytes = n);
                if (o + n <= a.usedBytes) return a.contents.set(t.subarray(r, r + n), o), n;
              }
              if ((D.expandFileStorage(a, o + n), a.contents.subarray && t.subarray))
                a.contents.set(t.subarray(r, r + n), o);
              else for (var s = 0; s < n; s++) a.contents[o + s] = t[r + s];
              return (a.usedBytes = Math.max(a.usedBytes, o + n)), n;
            },
            llseek: function (e, t, r) {
              if (
                (1 === r
                  ? (t += e.position)
                  : 2 === r && C.isFile(e.node.mode) && (t += e.node.usedBytes),
                t < 0)
              )
                throw new C.ErrnoError(28);
              return t;
            },
            allocate: function (e, t, r) {
              D.expandFileStorage(e.node, t + r),
                (e.node.usedBytes = Math.max(e.node.usedBytes, t + r));
            },
            mmap: function (e, t, r, n, o) {
              if (!C.isFile(e.node.mode)) throw new C.ErrnoError(43);
              var i,
                a,
                e = e.node.contents;
              if (2 & o || e.buffer !== $) {
                if (
                  ((0 < r || r + t < e.length) &&
                    (e = e.subarray
                      ? e.subarray(r, r + t)
                      : Array.prototype.slice.call(e, r, r + t)),
                  (a = !0),
                  !(i = Ce(t)))
                )
                  throw new C.ErrnoError(48);
                h.set(e, i);
              } else (a = !1), (i = e.byteOffset);
              return {
                ptr: i,
                allocated: a,
              };
            },
            msync: function (e, t, r, n, o) {
              if (C.isFile(e.node.mode)) return 2 & o || D.stream_ops.write(e, t, 0, n, r, !1), 0;
              throw new C.ErrnoError(43);
            },
          },
        };
        var Me = {
            0: 'Success',
            1: 'Arg list too long',
            2: 'Permission denied',
            3: 'Address already in use',
            4: 'Address not available',
            5: 'Address family not supported by protocol family',
            6: 'No more processes',
            7: 'Socket already connected',
            8: 'Bad file number',
            9: 'Trying to read unreadable message',
            10: 'Mount device busy',
            11: 'Operation canceled',
            12: 'No children',
            13: 'Connection aborted',
            14: 'Connection refused',
            15: 'Connection reset by peer',
            16: 'File locking deadlock error',
            17: 'Destination address required',
            18: 'Math arg out of domain of func',
            19: 'Quota exceeded',
            20: 'File exists',
            21: 'Bad address',
            22: 'File too large',
            23: 'Host is unreachable',
            24: 'Identifier removed',
            25: 'Illegal byte sequence',
            26: 'Connection already in progress',
            27: 'Interrupted system call',
            28: 'Invalid argument',
            29: 'I/O error',
            30: 'Socket is already connected',
            31: 'Is a directory',
            32: 'Too many symbolic links',
            33: 'Too many open files',
            34: 'Too many links',
            35: 'Message too long',
            36: 'Multihop attempted',
            37: 'File or path name too long',
            38: 'Network interface is not configured',
            39: 'Connection reset by network',
            40: 'Network is unreachable',
            41: 'Too many open files in system',
            42: 'No buffer space available',
            43: 'No such device',
            44: 'No such file or directory',
            45: 'Exec format error',
            46: 'No record locks available',
            47: 'The link has been severed',
            48: 'Not enough core',
            49: 'No message of desired type',
            50: 'Protocol not available',
            51: 'No space left on device',
            52: 'Function not implemented',
            53: 'Socket is not connected',
            54: 'Not a directory',
            55: 'Directory not empty',
            56: 'State not recoverable',
            57: 'Socket operation on non-socket',
            59: 'Not a typewriter',
            60: 'No such device or address',
            61: 'Value too large for defined data type',
            62: 'Previous owner died',
            63: 'Not super-user',
            64: 'Broken pipe',
            65: 'Protocol error',
            66: 'Unknown protocol',
            67: 'Protocol wrong type for socket',
            68: 'Math result not representable',
            69: 'Read only file system',
            70: 'Illegal seek',
            71: 'No such process',
            72: 'Stale file handle',
            73: 'Connection timed out',
            74: 'Text file busy',
            75: 'Cross-device link',
            100: 'Device not a stream',
            101: 'Bad font file fmt',
            102: 'Invalid slot',
            103: 'Invalid request code',
            104: 'No anode',
            105: 'Block device required',
            106: 'Channel number out of range',
            107: 'Level 3 halted',
            108: 'Level 3 reset',
            109: 'Link number out of range',
            110: 'Protocol driver not attached',
            111: 'No CSI structure available',
            112: 'Level 2 halted',
            113: 'Invalid exchange',
            114: 'Invalid request descriptor',
            115: 'Exchange full',
            116: 'No data (for no delay io)',
            117: 'Timer expired',
            118: 'Out of streams resources',
            119: 'Machine is not on the network',
            120: 'Package not installed',
            121: 'The object is remote',
            122: 'Advertise error',
            123: 'Srmount error',
            124: 'Communication error on send',
            125: 'Cross mount point (not really error)',
            126: 'Given log. name not unique',
            127: 'f.d. invalid for this operation',
            128: 'Remote address changed',
            129: 'Can   access a needed shared lib',
            130: 'Accessing a corrupted shared lib',
            131: '.lib section in a.out corrupted',
            132: 'Attempting to link in too many libs',
            133: 'Attempting to exec a shared library',
            135: 'Streams pipe error',
            136: 'Too many users',
            137: 'Socket type not supported',
            138: 'Not supported',
            139: 'Protocol family not supported',
            140: "Can't send after socket shutdown",
            141: 'Too many references',
            142: 'Host is down',
            148: 'No medium (in tape drive)',
            156: 'Level 2 not synchronized',
          },
          Ie = {},
          C = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: null,
            currentPath: '/',
            initialized: !1,
            ignorePermissions: !0,
            ErrnoError: null,
            genericErrors: {},
            filesystems: null,
            syncFSRequests: 0,
            lookupPath: (e, t = {}) => {
              if (!(e = F.resolve(C.cwd(), e)))
                return {
                  path: '',
                  node: null,
                };
              if (
                8 <
                (t = Object.assign(
                  {
                    follow_mount: !0,
                    recurse_count: 0,
                  },
                  t
                )).recurse_count
              )
                throw new C.ErrnoError(32);
              for (
                var r = T.normalizeArray(
                    e.split('/').filter(e => !!e),
                    !1
                  ),
                  n = C.root,
                  o = '/',
                  i = 0;
                i < r.length;
                i++
              ) {
                var a = i === r.length - 1;
                if (a && t.parent) break;
                if (
                  ((n = C.lookupNode(n, r[i])),
                  (o = T.join2(o, r[i])),
                  !C.isMountpoint(n) || (a && !t.follow_mount) || (n = n.mounted.root),
                  !a || t.follow)
                )
                  for (var s = 0; C.isLink(n.mode); ) {
                    var c = C.readlink(o),
                      o = F.resolve(T.dirname(o), c),
                      n = C.lookupPath(o, {
                        recurse_count: t.recurse_count + 1,
                      }).node;
                    if (40 < s++) throw new C.ErrnoError(32);
                  }
              }
              return {
                path: o,
                node: n,
              };
            },
            getPath: e => {
              for (var t, r; ; ) {
                if (C.isRoot(e))
                  return (
                    (r = e.mount.mountpoint),
                    t ? ('/' !== r[r.length - 1] ? r + '/' + t : r + t) : r
                  );
                (t = t ? e.name + '/' + t : e.name), (e = e.parent);
              }
            },
            hashName: (e, t) => {
              for (var r = 0, n = 0; n < t.length; n++) r = ((r << 5) - r + t.charCodeAt(n)) | 0;
              return ((e + r) >>> 0) % C.nameTable.length;
            },
            hashAddNode: e => {
              var t = C.hashName(e.parent.id, e.name);
              (e.name_next = C.nameTable[t]), (C.nameTable[t] = e);
            },
            hashRemoveNode: e => {
              var t = C.hashName(e.parent.id, e.name);
              if (C.nameTable[t] === e) C.nameTable[t] = e.name_next;
              else
                for (var r = C.nameTable[t]; r; ) {
                  if (r.name_next === e) {
                    r.name_next = e.name_next;
                    break;
                  }
                  r = r.name_next;
                }
            },
            lookupNode: (e, t) => {
              var r = C.mayLookup(e);
              if (r) throw new C.ErrnoError(r, e);
              for (var r = C.hashName(e.id, t), n = C.nameTable[r]; n; n = n.name_next) {
                var o = n.name;
                if (n.parent.id === e.id && o === t) return n;
              }
              return C.lookup(e, t);
            },
            createNode: (e, t, r, n) => {
              g('object' == typeof e);
              e = new C.FSNode(e, t, r, n);
              return C.hashAddNode(e), e;
            },
            destroyNode: e => {
              C.hashRemoveNode(e);
            },
            isRoot: e => e === e.parent,
            isMountpoint: e => !!e.mounted,
            isFile: e => 32768 == (61440 & e),
            isDir: e => 16384 == (61440 & e),
            isLink: e => 40960 == (61440 & e),
            isChrdev: e => 8192 == (61440 & e),
            isBlkdev: e => 24576 == (61440 & e),
            isFIFO: e => 4096 == (61440 & e),
            isSocket: e => 49152 == (49152 & e),
            flagModes: {
              r: 0,
              'r+': 2,
              w: 577,
              'w+': 578,
              a: 1089,
              'a+': 1090,
            },
            modeStringToFlags: e => {
              var t = C.flagModes[e];
              if (void 0 === t) throw new Error('Unknown file open mode: ' + e);
              return t;
            },
            flagsToPermissionString: e => {
              var t = ['r', 'w', 'rw'][3 & e];
              return 512 & e && (t += 'w'), t;
            },
            nodePermissions: (e, t) =>
              C.ignorePermissions ||
              ((!t.includes('r') || 292 & e.mode) &&
                (!t.includes('w') || 146 & e.mode) &&
                (!t.includes('x') || 73 & e.mode))
                ? 0
                : 2,
            mayLookup: e => {
              var t = C.nodePermissions(e, 'x');
              return t || (e.node_ops.lookup ? 0 : 2);
            },
            mayCreate: (e, t) => {
              try {
                C.lookupNode(e, t);
                return 20;
              } catch (e) {}
              return C.nodePermissions(e, 'wx');
            },
            mayDelete: (e, t, r) => {
              var n;
              try {
                n = C.lookupNode(e, t);
              } catch (e) {
                return e.errno;
              }
              t = C.nodePermissions(e, 'wx');
              if (t) return t;
              if (r) {
                if (!C.isDir(n.mode)) return 54;
                if (C.isRoot(n) || C.getPath(n) === C.cwd()) return 10;
              } else if (C.isDir(n.mode)) return 31;
              return 0;
            },
            mayOpen: (e, t) =>
              e
                ? C.isLink(e.mode)
                  ? 32
                  : C.isDir(e.mode) && ('r' !== C.flagsToPermissionString(t) || 512 & t)
                    ? 31
                    : C.nodePermissions(e, C.flagsToPermissionString(t))
                : 44,
            MAX_OPEN_FDS: 4096,
            nextfd: (e = 0, t = C.MAX_OPEN_FDS) => {
              for (var r = e; r <= t; r++) if (!C.streams[r]) return r;
              throw new C.ErrnoError(33);
            },
            getStream: e => C.streams[e],
            createStream: (e, t, r) => {
              C.FSStream ||
                ((C.FSStream = function () {
                  this.shared = {};
                }),
                (C.FSStream.prototype = {}),
                Object.defineProperties(C.FSStream.prototype, {
                  object: {
                    get: function () {
                      return this.node;
                    },
                    set: function (e) {
                      this.node = e;
                    },
                  },
                  isRead: {
                    get: function () {
                      return 1 != (2097155 & this.flags);
                    },
                  },
                  isWrite: {
                    get: function () {
                      return 0 != (2097155 & this.flags);
                    },
                  },
                  isAppend: {
                    get: function () {
                      return 1024 & this.flags;
                    },
                  },
                  flags: {
                    get: function () {
                      return this.shared.flags;
                    },
                    set: function (e) {
                      this.shared.flags = e;
                    },
                  },
                  position: {
                    get: function () {
                      return this.shared.position;
                    },
                    set: function (e) {
                      this.shared.position = e;
                    },
                  },
                })),
                (e = Object.assign(new C.FSStream(), e));
              t = C.nextfd(t, r);
              return (e.fd = t), (C.streams[t] = e);
            },
            closeStream: e => {
              C.streams[e] = null;
            },
            chrdev_stream_ops: {
              open: e => {
                var t = C.getDevice(e.node.rdev);
                (e.stream_ops = t.stream_ops), e.stream_ops.open && e.stream_ops.open(e);
              },
              llseek: () => {
                throw new C.ErrnoError(70);
              },
            },
            major: e => e >> 8,
            minor: e => 255 & e,
            makedev: (e, t) => (e << 8) | t,
            registerDevice: (e, t) => {
              C.devices[e] = {
                stream_ops: t,
              };
            },
            getDevice: e => C.devices[e],
            getMounts: e => {
              for (var t = [], r = [e]; r.length; ) {
                var n = r.pop();
                t.push(n), r.push.apply(r, n.mounts);
              }
              return t;
            },
            syncfs: (t, r) => {
              'function' == typeof t && ((r = t), (t = !1)),
                C.syncFSRequests++,
                1 < C.syncFSRequests &&
                  s(
                    'warning: ' +
                      C.syncFSRequests +
                      ' FS.syncfs operations in flight at once, probably just doing extra work'
                  );
              var n = C.getMounts(C.root.mount),
                o = 0;

              function i(e) {
                return g(0 < C.syncFSRequests), C.syncFSRequests--, r(e);
              }

              function a(e) {
                if (e) return a.errored ? void 0 : ((a.errored = !0), i(e));
                ++o >= n.length && i(null);
              }

              n.forEach(e => {
                if (!e.type.syncfs) return a(null);
                e.type.syncfs(e, t, a);
              });
            },
            mount: (e, t, r) => {
              if ('string' == typeof e) throw e;
              var n,
                o = '/' === r,
                i = !r;
              if (o && C.root) throw new C.ErrnoError(10);
              if (!o && !i) {
                i = C.lookupPath(r, {
                  follow_mount: !1,
                });
                if (((r = i.path), (n = i.node), C.isMountpoint(n))) throw new C.ErrnoError(10);
                if (!C.isDir(n.mode)) throw new C.ErrnoError(54);
              }
              (i = {
                type: e,
                opts: t,
                mountpoint: r,
                mounts: [],
              }),
                (t = e.mount(i));
              return (
                ((t.mount = i).root = t),
                o ? (C.root = t) : n && ((n.mounted = i), n.mount) && n.mount.mounts.push(i),
                t
              );
            },
            unmount: e => {
              e = C.lookupPath(e, {
                follow_mount: !1,
              });
              if (!C.isMountpoint(e.node)) throw new C.ErrnoError(28);
              var e = e.node,
                t = e.mounted,
                n = C.getMounts(t),
                t =
                  (Object.keys(C.nameTable).forEach(e => {
                    for (var t = C.nameTable[e]; t; ) {
                      var r = t.name_next;
                      n.includes(t.mount) && C.destroyNode(t), (t = r);
                    }
                  }),
                  (e.mounted = null),
                  e.mount.mounts.indexOf(t));
              g(-1 !== t), e.mount.mounts.splice(t, 1);
            },
            lookup: (e, t) => e.node_ops.lookup(e, t),
            mknod: (e, t, r) => {
              var n = C.lookupPath(e, {
                  parent: !0,
                }).node,
                e = T.basename(e);
              if (!e || '.' === e || '..' === e) throw new C.ErrnoError(28);
              var o = C.mayCreate(n, e);
              if (o) throw new C.ErrnoError(o);
              if (n.node_ops.mknod) return n.node_ops.mknod(n, e, t, r);
              throw new C.ErrnoError(63);
            },
            create: (e, t) => C.mknod(e, (t = ((t = void 0 !== t ? t : 438) & 4095) | 32768), 0),
            mkdir: (e, t) => C.mknod(e, (t = ((t = void 0 !== t ? t : 511) & 1023) | 16384), 0),
            mkdirTree: (e, t) => {
              for (var r = e.split('/'), n = '', o = 0; o < r.length; ++o)
                if (r[o]) {
                  n += '/' + r[o];
                  try {
                    C.mkdir(n, t);
                  } catch (e) {
                    if (20 != e.errno) throw e;
                  }
                }
            },
            mkdev: (e, t, r) => (void 0 === r && ((r = t), (t = 438)), C.mknod(e, (t |= 8192), r)),
            symlink: (e, t) => {
              if (!F.resolve(e)) throw new C.ErrnoError(44);
              var r = C.lookupPath(t, {
                parent: !0,
              }).node;
              if (!r) throw new C.ErrnoError(44);
              var t = T.basename(t),
                n = C.mayCreate(r, t);
              if (n) throw new C.ErrnoError(n);
              if (r.node_ops.symlink) return r.node_ops.symlink(r, t, e);
              throw new C.ErrnoError(63);
            },
            rename: (e, t) => {
              var r = T.dirname(e),
                n = T.dirname(t),
                o = T.basename(e),
                i = T.basename(t),
                a = C.lookupPath(e, {
                  parent: !0,
                }),
                a = a.node,
                s = C.lookupPath(t, {
                  parent: !0,
                }).node;
              if (!a || !s) throw new C.ErrnoError(44);
              if (a.mount !== s.mount) throw new C.ErrnoError(75);
              var c,
                u = C.lookupNode(a, o),
                e = F.relative(e, n);
              if ('.' !== e.charAt(0)) throw new C.ErrnoError(28);
              if ('.' !== (e = F.relative(t, r)).charAt(0)) throw new C.ErrnoError(55);
              try {
                c = C.lookupNode(s, i);
              } catch (e) {}
              if (u !== c) {
                (n = C.isDir(u.mode)), (t = C.mayDelete(a, o, n));
                if (t) throw new C.ErrnoError(t);
                if ((t = c ? C.mayDelete(s, i, n) : C.mayCreate(s, i))) throw new C.ErrnoError(t);
                if (!a.node_ops.rename) throw new C.ErrnoError(63);
                if (C.isMountpoint(u) || (c && C.isMountpoint(c))) throw new C.ErrnoError(10);
                if (s !== a && (t = C.nodePermissions(a, 'w'))) throw new C.ErrnoError(t);
                C.hashRemoveNode(u);
                try {
                  a.node_ops.rename(u, s, i);
                } catch (e) {
                  throw e;
                } finally {
                  C.hashAddNode(u);
                }
              }
            },
            rmdir: e => {
              var t = C.lookupPath(e, {
                  parent: !0,
                }).node,
                e = T.basename(e),
                r = C.lookupNode(t, e),
                n = C.mayDelete(t, e, !0);
              if (n) throw new C.ErrnoError(n);
              if (!t.node_ops.rmdir) throw new C.ErrnoError(63);
              if (C.isMountpoint(r)) throw new C.ErrnoError(10);
              t.node_ops.rmdir(t, e), C.destroyNode(r);
            },
            readdir: e => {
              e = C.lookupPath(e, {
                follow: !0,
              }).node;
              if (e.node_ops.readdir) return e.node_ops.readdir(e);
              throw new C.ErrnoError(54);
            },
            unlink: e => {
              var t = C.lookupPath(e, {
                parent: !0,
              }).node;
              if (!t) throw new C.ErrnoError(44);
              var e = T.basename(e),
                r = C.lookupNode(t, e),
                n = C.mayDelete(t, e, !1);
              if (n) throw new C.ErrnoError(n);
              if (!t.node_ops.unlink) throw new C.ErrnoError(63);
              if (C.isMountpoint(r)) throw new C.ErrnoError(10);
              t.node_ops.unlink(t, e), C.destroyNode(r);
            },
            readlink: e => {
              e = C.lookupPath(e).node;
              if (!e) throw new C.ErrnoError(44);
              if (e.node_ops.readlink)
                return F.resolve(C.getPath(e.parent), e.node_ops.readlink(e));
              throw new C.ErrnoError(28);
            },
            stat: (e, t) => {
              e = C.lookupPath(e, {
                follow: !t,
              }).node;
              if (!e) throw new C.ErrnoError(44);
              if (e.node_ops.getattr) return e.node_ops.getattr(e);
              throw new C.ErrnoError(63);
            },
            lstat: e => C.stat(e, !0),
            chmod: (e, t, r) => {
              if (
                !(r =
                  'string' == typeof e
                    ? C.lookupPath(e, {
                        follow: !r,
                      }).node
                    : e).node_ops.setattr
              )
                throw new C.ErrnoError(63);
              r.node_ops.setattr(r, {
                mode: (4095 & t) | (-4096 & r.mode),
                timestamp: Date.now(),
              });
            },
            lchmod: (e, t) => {
              C.chmod(e, t, !0);
            },
            fchmod: (e, t) => {
              e = C.getStream(e);
              if (!e) throw new C.ErrnoError(8);
              C.chmod(e.node, t);
            },
            chown: (e, t, r, n) => {
              if (
                !(n =
                  'string' == typeof e
                    ? C.lookupPath(e, {
                        follow: !n,
                      }).node
                    : e).node_ops.setattr
              )
                throw new C.ErrnoError(63);
              n.node_ops.setattr(n, {
                timestamp: Date.now(),
              });
            },
            lchown: (e, t, r) => {
              C.chown(e, t, r, !0);
            },
            fchown: (e, t, r) => {
              e = C.getStream(e);
              if (!e) throw new C.ErrnoError(8);
              C.chown(e.node, t, r);
            },
            truncate: (e, t) => {
              if (t < 0) throw new C.ErrnoError(28);
              if (
                !(e =
                  'string' == typeof e
                    ? C.lookupPath(e, {
                        follow: !0,
                      }).node
                    : e).node_ops.setattr
              )
                throw new C.ErrnoError(63);
              if (C.isDir(e.mode)) throw new C.ErrnoError(31);
              if (!C.isFile(e.mode)) throw new C.ErrnoError(28);
              var r = C.nodePermissions(e, 'w');
              if (r) throw new C.ErrnoError(r);
              e.node_ops.setattr(e, {
                size: t,
                timestamp: Date.now(),
              });
            },
            ftruncate: (e, t) => {
              e = C.getStream(e);
              if (!e) throw new C.ErrnoError(8);
              if (0 == (2097155 & e.flags)) throw new C.ErrnoError(28);
              C.truncate(e.node, t);
            },
            utime: (e, t, r) => {
              e = C.lookupPath(e, {
                follow: !0,
              }).node;
              e.node_ops.setattr(e, {
                timestamp: Math.max(t, r),
              });
            },
            open: (e, t, r) => {
              if ('' === e) throw new C.ErrnoError(44);
              if (
                ((r = void 0 === r ? 438 : r),
                (r =
                  64 & (t = 'string' == typeof t ? C.modeStringToFlags(t) : t)
                    ? (4095 & r) | 32768
                    : 0),
                'object' == typeof e)
              )
                n = e;
              else {
                e = T.normalize(e);
                try {
                  var n = C.lookupPath(e, {
                    follow: !(131072 & t),
                  }).node;
                } catch (e) {}
              }
              var o = !1;
              if (64 & t)
                if (n) {
                  if (128 & t) throw new C.ErrnoError(20);
                } else (n = C.mknod(e, r, 0)), (o = !0);
              if (!n) throw new C.ErrnoError(44);
              if ((C.isChrdev(n.mode) && (t &= -513), 65536 & t && !C.isDir(n.mode)))
                throw new C.ErrnoError(54);
              if (!o) {
                r = C.mayOpen(n, t);
                if (r) throw new C.ErrnoError(r);
              }
              512 & t && !o && C.truncate(n, 0), (t &= -131713);
              r = C.createStream({
                node: n,
                path: C.getPath(n),
                flags: t,
                seekable: !0,
                position: 0,
                stream_ops: n.stream_ops,
                ungotten: [],
                error: !1,
              });
              return (
                r.stream_ops.open && r.stream_ops.open(r),
                !d.logReadFiles ||
                  1 & t ||
                  (C.readFiles || (C.readFiles = {}), e in C.readFiles) ||
                  (C.readFiles[e] = 1),
                r
              );
            },
            close: e => {
              if (C.isClosed(e)) throw new C.ErrnoError(8);
              e.getdents && (e.getdents = null);
              try {
                e.stream_ops.close && e.stream_ops.close(e);
              } catch (e) {
                throw e;
              } finally {
                C.closeStream(e.fd);
              }
              e.fd = null;
            },
            isClosed: e => null === e.fd,
            llseek: (e, t, r) => {
              if (C.isClosed(e)) throw new C.ErrnoError(8);
              if (!e.seekable || !e.stream_ops.llseek) throw new C.ErrnoError(70);
              if (0 != r && 1 != r && 2 != r) throw new C.ErrnoError(28);
              return (e.position = e.stream_ops.llseek(e, t, r)), (e.ungotten = []), e.position;
            },
            read: (e, t, r, n, o) => {
              if (n < 0 || o < 0) throw new C.ErrnoError(28);
              if (C.isClosed(e)) throw new C.ErrnoError(8);
              if (1 == (2097155 & e.flags)) throw new C.ErrnoError(8);
              if (C.isDir(e.node.mode)) throw new C.ErrnoError(31);
              if (!e.stream_ops.read) throw new C.ErrnoError(28);
              var i = void 0 !== o;
              if (i) {
                if (!e.seekable) throw new C.ErrnoError(70);
              } else o = e.position;
              t = e.stream_ops.read(e, t, r, n, o);
              return i || (e.position += t), t;
            },
            write: (e, t, r, n, o, i) => {
              if (n < 0 || o < 0) throw new C.ErrnoError(28);
              if (C.isClosed(e)) throw new C.ErrnoError(8);
              if (0 == (2097155 & e.flags)) throw new C.ErrnoError(8);
              if (C.isDir(e.node.mode)) throw new C.ErrnoError(31);
              if (!e.stream_ops.write) throw new C.ErrnoError(28);
              e.seekable && 1024 & e.flags && C.llseek(e, 0, 2);
              var a = void 0 !== o;
              if (a) {
                if (!e.seekable) throw new C.ErrnoError(70);
              } else o = e.position;
              t = e.stream_ops.write(e, t, r, n, o, i);
              return a || (e.position += t), t;
            },
            allocate: (e, t, r) => {
              if (C.isClosed(e)) throw new C.ErrnoError(8);
              if (t < 0 || r <= 0) throw new C.ErrnoError(28);
              if (0 == (2097155 & e.flags)) throw new C.ErrnoError(8);
              if (!C.isFile(e.node.mode) && !C.isDir(e.node.mode)) throw new C.ErrnoError(43);
              if (!e.stream_ops.allocate) throw new C.ErrnoError(138);
              e.stream_ops.allocate(e, t, r);
            },
            mmap: (e, t, r, n, o) => {
              if (0 != (2 & n) && 0 == (2 & o) && 2 != (2097155 & e.flags))
                throw new C.ErrnoError(2);
              if (1 == (2097155 & e.flags)) throw new C.ErrnoError(2);
              if (e.stream_ops.mmap) return e.stream_ops.mmap(e, t, r, n, o);
              throw new C.ErrnoError(43);
            },
            msync: (e, t, r, n, o) =>
              e && e.stream_ops.msync ? e.stream_ops.msync(e, t, r, n, o) : 0,
            munmap: e => 0,
            ioctl: (e, t, r) => {
              if (e.stream_ops.ioctl) return e.stream_ops.ioctl(e, t, r);
              throw new C.ErrnoError(59);
            },
            readFile: (e, t = {}) => {
              if (
                ((t.flags = t.flags || 0),
                (t.encoding = t.encoding || 'binary'),
                'utf8' !== t.encoding && 'binary' !== t.encoding)
              )
                throw new Error('Invalid encoding type "' + t.encoding + '"');
              var r,
                n = C.open(e, t.flags),
                e = C.stat(e).size,
                o = new Uint8Array(e);
              return (
                C.read(n, o, 0, e, 0),
                'utf8' === t.encoding ? (r = ne(o, 0)) : 'binary' === t.encoding && (r = o),
                C.close(n),
                r
              );
            },
            writeFile: (e, t, r = {}) => {
              r.flags = r.flags || 577;
              e = C.open(e, r.flags, r.mode);
              if ('string' == typeof t) {
                var n = new Uint8Array(c(t) + 1),
                  o = oe(t, n, 0, n.length);
                C.write(e, n, 0, o, void 0, r.canOwn);
              } else {
                if (!ArrayBuffer.isView(t)) throw new Error('Unsupported data type');
                C.write(e, t, 0, t.byteLength, void 0, r.canOwn);
              }
              C.close(e);
            },
            cwd: () => C.currentPath,
            chdir: e => {
              e = C.lookupPath(e, {
                follow: !0,
              });
              if (null === e.node) throw new C.ErrnoError(44);
              if (!C.isDir(e.node.mode)) throw new C.ErrnoError(54);
              var t = C.nodePermissions(e.node, 'x');
              if (t) throw new C.ErrnoError(t);
              C.currentPath = e.path;
            },
            createDefaultDirectories: () => {
              C.mkdir('/tmp'), C.mkdir('/home'), C.mkdir('/home/web_user');
            },
            createDefaultDevices: () => {
              C.mkdir('/dev'),
                C.registerDevice(C.makedev(1, 3), {
                  read: () => 0,
                  write: (e, t, r, n, o) => n,
                }),
                C.mkdev('/dev/null', C.makedev(1, 3)),
                P.register(C.makedev(5, 0), P.default_tty_ops),
                P.register(C.makedev(6, 0), P.default_tty1_ops),
                C.mkdev('/dev/tty', C.makedev(5, 0)),
                C.mkdev('/dev/tty1', C.makedev(6, 0));
              var e = (function () {
                var e;
                if ('object' == typeof crypto && 'function' == typeof crypto.getRandomValues)
                  return (e = new Uint8Array(1)), () => (crypto.getRandomValues(e), e[0]);
                if (a)
                  try {
                    var t = require('crypto');
                    return () => t.randomBytes(1)[0];
                  } catch (e) {}
                return () =>
                  v(
                    'no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };'
                  );
              })();
              C.createDevice('/dev', 'random', e),
                C.createDevice('/dev', 'urandom', e),
                C.mkdir('/dev/shm'),
                C.mkdir('/dev/shm/tmp');
            },
            createSpecialDirectories: () => {
              C.mkdir('/proc');
              var t = C.mkdir('/proc/self');
              C.mkdir('/proc/self/fd'),
                C.mount(
                  {
                    mount: () => {
                      var e = C.createNode(t, 'fd', 16895, 73);
                      return (
                        (e.node_ops = {
                          lookup: (e, t) => {
                            var r = C.getStream(+t);
                            if (r)
                              return ((t = {
                                parent: null,
                                mount: {
                                  mountpoint: 'fake',
                                },
                                node_ops: {
                                  readlink: () => r.path,
                                },
                              }).parent = t);
                            throw new C.ErrnoError(8);
                          },
                        }),
                        e
                      );
                    },
                  },
                  {},
                  '/proc/self/fd'
                );
            },
            createStandardStreams: () => {
              d.stdin
                ? C.createDevice('/dev', 'stdin', d.stdin)
                : C.symlink('/dev/tty', '/dev/stdin'),
                d.stdout
                  ? C.createDevice('/dev', 'stdout', null, d.stdout)
                  : C.symlink('/dev/tty', '/dev/stdout'),
                d.stderr
                  ? C.createDevice('/dev', 'stderr', null, d.stderr)
                  : C.symlink('/dev/tty1', '/dev/stderr');
              var e = C.open('/dev/stdin', 0),
                t = C.open('/dev/stdout', 1),
                r = C.open('/dev/stderr', 1);
              g(0 === e.fd, 'invalid handle for stdin (' + e.fd + ')'),
                g(1 === t.fd, 'invalid handle for stdout (' + t.fd + ')'),
                g(2 === r.fd, 'invalid handle for stderr (' + r.fd + ')');
            },
            ensureErrnoError: () => {
              C.ErrnoError ||
                ((C.ErrnoError = function (e, t) {
                  (this.node = t),
                    (this.setErrno = function (e) {
                      for (var t in ((this.errno = e), Ie))
                        if (Ie[t] === e) {
                          this.code = t;
                          break;
                        }
                    }),
                    this.setErrno(e),
                    (this.message = Me[e]),
                    this.stack &&
                      (Object.defineProperty(this, 'stack', {
                        value: new Error().stack,
                        writable: !0,
                      }),
                      (this.stack = Te(this.stack)));
                }),
                (C.ErrnoError.prototype = new Error()),
                (C.ErrnoError.prototype.constructor = C.ErrnoError),
                [44].forEach(e => {
                  (C.genericErrors[e] = new C.ErrnoError(e)),
                    (C.genericErrors[e].stack = '<generic error, no stack>');
                }));
            },
            staticInit: () => {
              C.ensureErrnoError(),
                (C.nameTable = new Array(4096)),
                C.mount(D, {}, '/'),
                C.createDefaultDirectories(),
                C.createDefaultDevices(),
                C.createSpecialDirectories(),
                (C.filesystems = {
                  MEMFS: D,
                });
            },
            init: (e, t, r) => {
              g(
                !C.init.initialized,
                'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)'
              ),
                (C.init.initialized = !0),
                C.ensureErrnoError(),
                (d.stdin = e || d.stdin),
                (d.stdout = t || d.stdout),
                (d.stderr = r || d.stderr),
                C.createStandardStreams();
            },
            quit: () => {
              (C.init.initialized = !1), nt(0);
              for (var e = 0; e < C.streams.length; e++) {
                var t = C.streams[e];
                t && C.close(t);
              }
            },
            getMode: (e, t) => {
              var r = 0;
              return e && (r |= 365), t && (r |= 146), r;
            },
            findObject: (e, t) => {
              e = C.analyzePath(e, t);
              return e.exists ? e.object : null;
            },
            analyzePath: (e, t) => {
              try {
                e = (n = C.lookupPath(e, {
                  follow: !t,
                })).path;
              } catch (e) {}
              var r = {
                isRoot: !1,
                exists: !1,
                error: 0,
                name: null,
                path: null,
                object: null,
                parentExists: !1,
                parentPath: null,
                parentObject: null,
              };
              try {
                var n = C.lookupPath(e, {
                  parent: !0,
                });
                (r.parentExists = !0),
                  (r.parentPath = n.path),
                  (r.parentObject = n.node),
                  (r.name = T.basename(e)),
                  (n = C.lookupPath(e, {
                    follow: !t,
                  })),
                  (r.exists = !0),
                  (r.path = n.path),
                  (r.object = n.node),
                  (r.name = n.node.name),
                  (r.isRoot = '/' === n.path);
              } catch (e) {
                r.error = e.errno;
              }
              return r;
            },
            createPath: (e, t, r, n) => {
              e = 'string' == typeof e ? e : C.getPath(e);
              for (var o = t.split('/').reverse(); o.length; ) {
                var i = o.pop();
                if (i) {
                  var a = T.join2(e, i);
                  try {
                    C.mkdir(a);
                  } catch (e) {}
                  e = a;
                }
              }
              return a;
            },
            createFile: (e, t, r, n, o) => {
              (e = T.join2('string' == typeof e ? e : C.getPath(e), t)), (t = C.getMode(n, o));
              return C.create(e, t);
            },
            createDataFile: (e, t, r, n, o, i) => {
              var a = t,
                t =
                  (e &&
                    ((e = 'string' == typeof e ? e : C.getPath(e)), (a = t ? T.join2(e, t) : e)),
                  C.getMode(n, o)),
                e = C.create(a, t);
              if (r) {
                if ('string' == typeof r) {
                  for (var s = new Array(r.length), c = 0, u = r.length; c < u; ++c)
                    s[c] = r.charCodeAt(c);
                  r = s;
                }
                C.chmod(e, 146 | t);
                n = C.open(e, 577);
                C.write(n, r, 0, r.length, 0, i), C.close(n), C.chmod(e, t);
              }
              return e;
            },
            createDevice: (e, t, c, a) => {
              var e = T.join2('string' == typeof e ? e : C.getPath(e), t),
                t = C.getMode(!!c, !!a),
                r =
                  (C.createDevice.major || (C.createDevice.major = 64),
                  C.makedev(C.createDevice.major++, 0));
              return (
                C.registerDevice(r, {
                  open: e => {
                    e.seekable = !1;
                  },
                  close: e => {
                    a && a.buffer && a.buffer.length && a(10);
                  },
                  read: (e, t, r, n, o) => {
                    for (var i, a = 0, s = 0; s < n; s++) {
                      try {
                        i = c();
                      } catch (e) {
                        throw new C.ErrnoError(29);
                      }
                      if (void 0 === i && 0 === a) throw new C.ErrnoError(6);
                      if (null == i) break;
                      a++, (t[r + s] = i);
                    }
                    return a && (e.node.timestamp = Date.now()), a;
                  },
                  write: (e, t, r, n, o) => {
                    for (var i = 0; i < n; i++)
                      try {
                        a(t[r + i]);
                      } catch (e) {
                        throw new C.ErrnoError(29);
                      }
                    return n && (e.node.timestamp = Date.now()), i;
                  },
                }),
                C.mkdev(e, t, r)
              );
            },
            forceLoadFile: e => {
              if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
              if ('undefined' != typeof XMLHttpRequest)
                throw new Error(
                  'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.'
                );
              if (!G) throw new Error('Cannot load without read() or XMLHttpRequest.');
              try {
                (e.contents = De(G(e.url), !0)), (e.usedBytes = e.contents.length);
              } catch (e) {
                throw new C.ErrnoError(29);
              }
            },
            createLazyFile: (e, t, a, r, n) => {
              function o() {
                (this.lengthKnown = !1), (this.chunks = []);
              }

              if (
                ((o.prototype.get = function (e) {
                  var t;
                  if (!(e > this.length - 1 || e < 0))
                    return (
                      (t = e % this.chunkSize), (e = (e / this.chunkSize) | 0), this.getter(e)[t]
                    );
                }),
                (o.prototype.setDataGetter = function (e) {
                  this.getter = e;
                }),
                (o.prototype.cacheLength = function () {
                  var e = new XMLHttpRequest();
                  if (
                    (e.open('HEAD', a, !1),
                    e.send(null),
                    !((200 <= e.status && e.status < 300) || 304 === e.status))
                  )
                    throw new Error("Couldn't load " + a + '. Status: ' + e.status);
                  var t,
                    n = Number(e.getResponseHeader('Content-length')),
                    r = (t = e.getResponseHeader('Accept-Ranges')) && 'bytes' === t,
                    e = (t = e.getResponseHeader('Content-Encoding')) && 'gzip' === t,
                    o = 1048576,
                    i = (r || (o = n), this);
                  i.setDataGetter(e => {
                    var t = e * o,
                      r = (e + 1) * o - 1,
                      r = Math.min(r, n - 1);
                    if (
                      (void 0 === i.chunks[e] &&
                        (i.chunks[e] = ((e, t) => {
                          if (t < e)
                            throw new Error(
                              'invalid range (' + e + ', ' + t + ') or no bytes requested!'
                            );
                          if (n - 1 < t)
                            throw new Error('only ' + n + ' bytes available! programmer error!');
                          var r = new XMLHttpRequest();
                          if (
                            (r.open('GET', a, !1),
                            n !== o && r.setRequestHeader('Range', 'bytes=' + e + '-' + t),
                            (r.responseType = 'arraybuffer'),
                            r.overrideMimeType &&
                              r.overrideMimeType('text/plain; charset=x-user-defined'),
                            r.send(null),
                            (200 <= r.status && r.status < 300) || 304 === r.status)
                          )
                            return void 0 !== r.response
                              ? new Uint8Array(r.response || [])
                              : De(r.responseText || '', !0);
                          throw new Error("Couldn't load " + a + '. Status: ' + r.status);
                        })(t, r)),
                      void 0 === i.chunks[e])
                    )
                      throw new Error('doXHR failed!');
                    return i.chunks[e];
                  }),
                    (!e && n) ||
                      ((o = n = 1),
                      (n = this.getter(0).length),
                      (o = n),
                      f(
                        'LazyFiles on gzip forces download of the whole file when length is accessed'
                      )),
                    (this._length = n),
                    (this._chunkSize = o),
                    (this.lengthKnown = !0);
                }),
                'undefined' != typeof XMLHttpRequest)
              ) {
                if (!l)
                  throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
                var i = new o(),
                  i =
                    (Object.defineProperties(i, {
                      length: {
                        get: function () {
                          return this.lengthKnown || this.cacheLength(), this._length;
                        },
                      },
                      chunkSize: {
                        get: function () {
                          return this.lengthKnown || this.cacheLength(), this._chunkSize;
                        },
                      },
                    }),
                    {
                      isDevice: !1,
                      contents: i,
                    });
              } else
                i = {
                  isDevice: !1,
                  url: a,
                };
              var s = C.createFile(e, t, i, r, n),
                c =
                  (i.contents
                    ? (s.contents = i.contents)
                    : i.url && ((s.contents = null), (s.url = i.url)),
                  Object.defineProperties(s, {
                    usedBytes: {
                      get: function () {
                        return this.contents.length;
                      },
                    },
                  }),
                  {});

              function u(e, t, r, n, o) {
                var i = e.node.contents;
                if (o >= i.length) return 0;
                var a = Math.min(i.length - o, n);
                if ((g(0 <= a), i.slice)) for (var s = 0; s < a; s++) t[r + s] = i[o + s];
                else for (s = 0; s < a; s++) t[r + s] = i.get(o + s);
                return a;
              }

              return (
                Object.keys(s.stream_ops).forEach(e => {
                  var t = s.stream_ops[e];
                  c[e] = function () {
                    return C.forceLoadFile(s), t.apply(null, arguments);
                  };
                }),
                (c.read = (e, t, r, n, o) => (C.forceLoadFile(s), u(e, t, r, n, o))),
                (c.mmap = (e, t, r, n, o) => {
                  C.forceLoadFile(s);
                  var i = Ce(t);
                  if (i)
                    return (
                      u(e, h, i, t, r),
                      {
                        ptr: i,
                        allocated: !0,
                      }
                    );
                  throw new C.ErrnoError(48);
                }),
                (s.stream_ops = c),
                s
              );
            },
            createPreloadedFile: (r, n, e, o, i, a, s, c, u, l) => {
              var t,
                d,
                f,
                h,
                m,
                p = n ? F.resolve(T.join2(r, n)) : r,
                v = ve('cp ' + p);

              function y(e) {
                function t(e) {
                  l && l(), c || C.createDataFile(r, n, e, o, i, u), a && a(), ge(v);
                }

                (void 0).handledByPreloadPlugin(e, p, t, () => {
                  s && s(), ge(v);
                }) || t(e);
              }

              ye(v),
                'string' == typeof e
                  ? ((t = e),
                    (d = e => y(e)),
                    (f = s),
                    (m = h ? '' : ve('al ' + t)),
                    z(
                      t,
                      e => {
                        g(e, 'Loading data file "' + t + '" failed (no arrayBuffer).'),
                          d(new Uint8Array(e)),
                          m && ge(m);
                      },
                      e => {
                        if (!f) throw 'Loading data file "' + t + '" failed.';
                        f();
                      }
                    ),
                    m && ye(m))
                  : y(e);
            },
            indexedDB: () =>
              window.indexedDB ||
              window.mozIndexedDB ||
              window.webkitIndexedDB ||
              window.msIndexedDB,
            DB_NAME: () => 'EM_FS_' + window.location.pathname,
            DB_VERSION: 20,
            DB_STORE_NAME: 'FILE_DATA',
            saveFilesToDB: (a, s, c) => {
              (s = s || (() => {})), (c = c || (() => {}));
              var e = C.indexedDB();
              try {
                var u = e.open(C.DB_NAME(), C.DB_VERSION);
              } catch (e) {
                return c(e);
              }
              (u.onupgradeneeded = () => {
                f('creating db'), u.result.createObjectStore(C.DB_STORE_NAME);
              }),
                (u.onsuccess = () => {
                  var e = u.result.transaction([C.DB_STORE_NAME], 'readwrite'),
                    t = e.objectStore(C.DB_STORE_NAME),
                    r = 0,
                    n = 0,
                    o = a.length;

                  function i() {
                    (0 == n ? s : c)();
                  }

                  a.forEach(e => {
                    e = t.put(C.analyzePath(e).object.contents, e);
                    (e.onsuccess = () => {
                      ++r + n == o && i();
                    }),
                      (e.onerror = () => {
                        r + ++n == o && i();
                      });
                  }),
                    (e.onerror = c);
                }),
                (u.onerror = c);
            },
            loadFilesFromDB: (s, c, u) => {
              (c = c || (() => {})), (u = u || (() => {}));
              var e = C.indexedDB();
              try {
                var l = e.open(C.DB_NAME(), C.DB_VERSION);
              } catch (e) {
                return u(e);
              }
              (l.onupgradeneeded = u),
                (l.onsuccess = () => {
                  var e = l.result;
                  try {
                    var t = e.transaction([C.DB_STORE_NAME], 'readonly');
                  } catch (e) {
                    return void u(e);
                  }
                  var r = t.objectStore(C.DB_STORE_NAME),
                    n = 0,
                    o = 0,
                    i = s.length;

                  function a() {
                    (0 == o ? c : u)();
                  }

                  s.forEach(e => {
                    var t = r.get(e);
                    (t.onsuccess = () => {
                      C.analyzePath(e).exists && C.unlink(e),
                        C.createDataFile(T.dirname(e), T.basename(e), t.result, !0, !0, !0),
                        ++n + o == i && a();
                    }),
                      (t.onerror = () => {
                        n + ++o == i && a();
                      });
                  }),
                    (t.onerror = u);
                }),
                (l.onerror = u);
            },
            absolutePath: () => {
              v('FS.absolutePath has been removed; use PATH_FS.resolve instead');
            },
            createFolder: () => {
              v('FS.createFolder has been removed; use FS.mkdir instead');
            },
            createLink: () => {
              v('FS.createLink has been removed; use FS.symlink instead');
            },
            joinPath: () => {
              v('FS.joinPath has been removed; use PATH.join instead');
            },
            mmapAlloc: () => {
              v('FS.mmapAlloc has been replaced by the top level function mmapAlloc');
            },
            standardizePath: () => {
              v('FS.standardizePath has been removed; use PATH.normalize instead');
            },
          },
          M = {
            DEFAULT_POLLMASK: 5,
            calculateAt: function (e, t, r) {
              if (T.isAbs(t)) return t;
              if (((e = -100 === e ? C.cwd() : M.getStreamFromFD(e).path), 0 != t.length))
                return T.join2(e, t);
              if (r) return e;
              throw new C.ErrnoError(44);
            },
            doStat: function (e, t, r) {
              try {
                var n = e(t);
              } catch (e) {
                if (e && e.node && T.normalize(t) !== T.normalize(C.getPath(e.node))) return -54;
                throw e;
              }
              return (
                (y[r >> 2] = n.dev),
                (y[(r + 8) >> 2] = n.ino),
                (y[(r + 12) >> 2] = n.mode),
                (u[(r + 16) >> 2] = n.nlink),
                (y[(r + 20) >> 2] = n.uid),
                (y[(r + 24) >> 2] = n.gid),
                (y[(r + 28) >> 2] = n.rdev),
                (b = [
                  n.size >>> 0,
                  ((E = n.size),
                  1 <= +Math.abs(E)
                    ? 0 < E
                      ? (0 | Math.min(+Math.floor(E / 4294967296), 4294967295)) >>> 0
                      : ~~+Math.ceil((E - (~~E >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (y[(r + 40) >> 2] = b[0]),
                (y[(r + 44) >> 2] = b[1]),
                (y[(r + 48) >> 2] = 4096),
                (y[(r + 52) >> 2] = n.blocks),
                (b = [
                  Math.floor(n.atime.getTime() / 1e3) >>> 0,
                  ((E = Math.floor(n.atime.getTime() / 1e3)),
                  1 <= +Math.abs(E)
                    ? 0 < E
                      ? (0 | Math.min(+Math.floor(E / 4294967296), 4294967295)) >>> 0
                      : ~~+Math.ceil((E - (~~E >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (y[(r + 56) >> 2] = b[0]),
                (y[(r + 60) >> 2] = b[1]),
                (u[(r + 64) >> 2] = 0),
                (b = [
                  Math.floor(n.mtime.getTime() / 1e3) >>> 0,
                  ((E = Math.floor(n.mtime.getTime() / 1e3)),
                  1 <= +Math.abs(E)
                    ? 0 < E
                      ? (0 | Math.min(+Math.floor(E / 4294967296), 4294967295)) >>> 0
                      : ~~+Math.ceil((E - (~~E >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (y[(r + 72) >> 2] = b[0]),
                (y[(r + 76) >> 2] = b[1]),
                (u[(r + 80) >> 2] = 0),
                (b = [
                  Math.floor(n.ctime.getTime() / 1e3) >>> 0,
                  ((E = Math.floor(n.ctime.getTime() / 1e3)),
                  1 <= +Math.abs(E)
                    ? 0 < E
                      ? (0 | Math.min(+Math.floor(E / 4294967296), 4294967295)) >>> 0
                      : ~~+Math.ceil((E - (~~E >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (y[(r + 88) >> 2] = b[0]),
                (y[(r + 92) >> 2] = b[1]),
                (u[(r + 96) >> 2] = 0),
                (b = [
                  n.ino >>> 0,
                  ((E = n.ino),
                  1 <= +Math.abs(E)
                    ? 0 < E
                      ? (0 | Math.min(+Math.floor(E / 4294967296), 4294967295)) >>> 0
                      : ~~+Math.ceil((E - (~~E >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (y[(r + 104) >> 2] = b[0]),
                (y[(r + 108) >> 2] = b[1]),
                0
              );
            },
            doMsync: function (e, t, r, n, o) {
              e = m.slice(e, e + r);
              C.msync(t, e, o, r, n);
            },
            varargs: void 0,
            get: function () {
              return g(null != M.varargs), (M.varargs += 4), y[(M.varargs - 4) >> 2];
            },
            getStr: function (e) {
              return _(e);
            },
            getStreamFromFD: function (e) {
              e = C.getStream(e);
              if (e) return e;
              throw new C.ErrnoError(8);
            },
          };

        function Ae(e) {
          return u[e >> 2] + 4294967296 * y[(e + 4) >> 2];
        }

        function Oe(e) {
          var t = c(e) + 1,
            r = tt(t);
          return r && oe(e, h, r, t), r;
        }

        function Ne(e, t, r) {
          var n, o, i, a, s;

          function c(e) {
            e = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
            return e ? e[1] : 'GMT';
          }

          Ne.called ||
            ((Ne.called = !0),
            (e = e),
            (t = t),
            (r = r),
            (n = new Date().getFullYear()),
            (o = new Date(n, 0, 1)),
            (n = new Date(n, 6, 1)),
            (i = o.getTimezoneOffset()),
            (a = n.getTimezoneOffset()),
            (s = Math.max(i, a)),
            (y[e >> 2] = 60 * s),
            (y[t >> 2] = Number(i != a)),
            (e = c(o)),
            (s = c(n)),
            (t = Oe(e)),
            (o = Oe(s)),
            a < i
              ? ((u[r >> 2] = t), (u[(r + 4) >> 2] = o))
              : ((u[r >> 2] = o), (u[(r + 4) >> 2] = t)));
        }

        function Re() {
          return 2147483648;
        }

        var t = a
            ? () => {
                var e = process.hrtime();
                return 1e3 * e[0] + e[1] / 1e6;
              }
            : () => performance.now(),
          Le = {};

        function je() {
          if (!je.strings) {
            var e = {
              USER: 'web_user',
              LOGNAME: 'web_user',
              PATH: '/',
              PWD: '/',
              HOME: '/home/web_user',
              LANG:
                (
                  ('object' == typeof navigator && navigator.languages && navigator.languages[0]) ||
                  'C'
                ).replace('-', '_') + '.UTF-8',
              _: x || './this.program',
            };
            for (t in Le) void 0 === Le[t] ? delete e[t] : (e[t] = Le[t]);
            var t,
              r = [];
            for (t in e) r.push(t + '=' + e[t]);
            je.strings = r;
          }
          return je.strings;
        }

        function xe(e, t, r) {
          for (var n = 0; n < e.length; ++n)
            g(e.charCodeAt(n) === (255 & e.charCodeAt(n))), (h[t++ >> 0] = e.charCodeAt(n));
          r || (h[t >> 0] = 0);
        }

        function Ue(e, t) {
          var r = f,
            n = s,
            o = !1;
          f = s = e => {
            o = !0;
          };
          try {
            nt(0),
              ['stdout', 'stderr'].forEach(function (e) {
                var e = C.analyzePath('/dev/' + e);
                e &&
                  ((e = e.object.rdev), (e = P.ttys[e])) &&
                  e.output &&
                  e.output.length &&
                  (o = !0);
              });
          } catch (e) {}
          (f = r),
            (s = n),
            o &&
              S(
                'stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.'
              ),
            Q &&
              !t &&
              (j(
                (r =
                  'program exited (with status: ' +
                  e +
                  '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)')
              ),
              s(r)),
            (n = e),
            Q || (d.onExit && d.onExit(n), (Z = !0)),
            U(n, new be(n));
        }

        function Be(e) {
          return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
        }

        var Ge = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          ze = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        function He(e, t, r, n) {
          var o = y[(n + 40) >> 2],
            i = {
              tm_sec: y[n >> 2],
              tm_min: y[(n + 4) >> 2],
              tm_hour: y[(n + 8) >> 2],
              tm_mday: y[(n + 12) >> 2],
              tm_mon: y[(n + 16) >> 2],
              tm_year: y[(n + 20) >> 2],
              tm_wday: y[(n + 24) >> 2],
              tm_yday: y[(n + 28) >> 2],
              tm_isdst: y[(n + 32) >> 2],
              tm_gmtoff: y[(n + 36) >> 2],
              tm_zone: o ? _(o) : '',
            },
            a = _(r),
            s = {
              '%c': '%a %b %d %H:%M:%S %Y',
              '%D': '%m/%d/%y',
              '%F': '%Y-%m-%d',
              '%h': '%b',
              '%r': '%I:%M:%S %p',
              '%R': '%H:%M',
              '%T': '%H:%M:%S',
              '%x': '%m/%d/%y',
              '%X': '%H:%M:%S',
              '%Ec': '%c',
              '%EC': '%C',
              '%Ex': '%m/%d/%y',
              '%EX': '%H:%M:%S',
              '%Ey': '%y',
              '%EY': '%Y',
              '%Od': '%d',
              '%Oe': '%e',
              '%OH': '%H',
              '%OI': '%I',
              '%Om': '%m',
              '%OM': '%M',
              '%OS': '%S',
              '%Ou': '%u',
              '%OU': '%U',
              '%OV': '%V',
              '%Ow': '%w',
              '%OW': '%W',
              '%Oy': '%y',
            };
          for (p in s) a = a.replace(new RegExp(p, 'g'), s[p]);
          var c = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            u = [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ];

          function l(e, t, r) {
            for (var n = 'number' == typeof e ? e.toString() : e || ''; n.length < t; )
              n = r[0] + n;
            return n;
          }

          function d(e, t) {
            return l(e, t, '0');
          }

          function f(e, t) {
            function r(e) {
              return e < 0 ? -1 : 0 < e ? 1 : 0;
            }

            var n;
            return (n =
              0 === (n = r(e.getFullYear() - t.getFullYear())) &&
              0 === (n = r(e.getMonth() - t.getMonth()))
                ? r(e.getDate() - t.getDate())
                : n);
          }

          function h(e) {
            switch (e.getDay()) {
              case 0:
                return new Date(e.getFullYear() - 1, 11, 29);
              case 1:
                return e;
              case 2:
                return new Date(e.getFullYear(), 0, 3);
              case 3:
                return new Date(e.getFullYear(), 0, 2);
              case 4:
                return new Date(e.getFullYear(), 0, 1);
              case 5:
                return new Date(e.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(e.getFullYear() - 1, 11, 30);
            }
          }

          function m(e) {
            var e = (function (e, t) {
                for (var r = new Date(e.getTime()); 0 < t; ) {
                  var n = Be(r.getFullYear()),
                    o = r.getMonth(),
                    n = (n ? Ge : ze)[o];
                  if (!(t > n - r.getDate())) return r.setDate(r.getDate() + t), r;
                  (t -= n - r.getDate() + 1),
                    r.setDate(1),
                    o < 11
                      ? r.setMonth(o + 1)
                      : (r.setMonth(0), r.setFullYear(r.getFullYear() + 1));
                }
                return r;
              })(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
              t = new Date(e.getFullYear(), 0, 4),
              r = new Date(e.getFullYear() + 1, 0, 4),
              t = h(t),
              r = h(r);
            return f(t, e) <= 0
              ? f(r, e) <= 0
                ? e.getFullYear() + 1
                : e.getFullYear()
              : e.getFullYear() - 1;
          }

          var p,
            v = {
              '%a': function (e) {
                return c[e.tm_wday].substring(0, 3);
              },
              '%A': function (e) {
                return c[e.tm_wday];
              },
              '%b': function (e) {
                return u[e.tm_mon].substring(0, 3);
              },
              '%B': function (e) {
                return u[e.tm_mon];
              },
              '%C': function (e) {
                return d(((e.tm_year + 1900) / 100) | 0, 2);
              },
              '%d': function (e) {
                return d(e.tm_mday, 2);
              },
              '%e': function (e) {
                return l(e.tm_mday, 2, ' ');
              },
              '%g': function (e) {
                return m(e).toString().substring(2);
              },
              '%G': m,
              '%H': function (e) {
                return d(e.tm_hour, 2);
              },
              '%I': function (e) {
                e = e.tm_hour;
                return 0 == e ? (e = 12) : 12 < e && (e -= 12), d(e, 2);
              },
              '%j': function (e) {
                return d(
                  e.tm_mday +
                    (function (e, t) {
                      for (var r = 0, n = 0; n <= t; r += e[n++]);
                      return r;
                    })(Be(e.tm_year + 1900) ? Ge : ze, e.tm_mon - 1),
                  3
                );
              },
              '%m': function (e) {
                return d(e.tm_mon + 1, 2);
              },
              '%M': function (e) {
                return d(e.tm_min, 2);
              },
              '%n': function () {
                return '\n';
              },
              '%p': function (e) {
                return 0 <= e.tm_hour && e.tm_hour < 12 ? 'AM' : 'PM';
              },
              '%S': function (e) {
                return d(e.tm_sec, 2);
              },
              '%t': function () {
                return '\t';
              },
              '%u': function (e) {
                return e.tm_wday || 7;
              },
              '%U': function (e) {
                e = e.tm_yday + 7 - e.tm_wday;
                return d(Math.floor(e / 7), 2);
              },
              '%V': function (e) {
                var t,
                  r = Math.floor((e.tm_yday + 7 - ((e.tm_wday + 6) % 7)) / 7);
                return (
                  (e.tm_wday + 371 - e.tm_yday - 2) % 7 <= 2 && r++,
                  r
                    ? 53 != r ||
                      4 == (t = (e.tm_wday + 371 - e.tm_yday) % 7) ||
                      (3 == t && Be(e.tm_year)) ||
                      (r = 1)
                    : ((r = 52),
                      (4 == (t = (e.tm_wday + 7 - e.tm_yday - 1) % 7) ||
                        (5 == t && Be((e.tm_year % 400) - 1))) &&
                        r++),
                  d(r, 2)
                );
              },
              '%w': function (e) {
                return e.tm_wday;
              },
              '%W': function (e) {
                e = e.tm_yday + 7 - ((e.tm_wday + 6) % 7);
                return d(Math.floor(e / 7), 2);
              },
              '%y': function (e) {
                return (e.tm_year + 1900).toString().substring(2);
              },
              '%Y': function (e) {
                return e.tm_year + 1900;
              },
              '%z': function (e) {
                var t = 0 <= (e = e.tm_gmtoff),
                  e = Math.abs(e) / 60;
                return (t ? '+' : '-') + String('0000' + ((e / 60) * 100 + (e % 60))).slice(-4);
              },
              '%Z': function (e) {
                return e.tm_zone;
              },
              '%%': function () {
                return '%';
              },
            },
            a = a.replace(/%%/g, '\0\0');
          for (p in v) a.includes(p) && (a = a.replace(new RegExp(p, 'g'), v[p](i)));
          n = De((a = a.replace(/\0\0/g, '%')), !1);
          return n.length > t ? 0 : (Fe(n, e), n.length - 1);
        }

        var We = [];

        function I(e) {
          var t = We[e];
          return (
            t || (e >= We.length && (We.length = e + 1), (We[e] = t = p.get(e))),
            g(p.get(e) == t, 'JavaScript-side Wasm function table mirror is out of date!'),
            t
          );
        }

        function Ye(e, t) {
          g(e < 16384), e < 128 ? t.push(e) : t.push(e % 128 | 128, e >> 7);
        }

        function qe(e, t) {
          if ('function' == typeof WebAssembly.Function)
            return new WebAssembly.Function(
              (function (e) {
                for (
                  var t = {
                      i: 'i32',
                      j: 'i64',
                      f: 'f32',
                      d: 'f64',
                      p: 'i32',
                    },
                    r = {
                      parameters: [],
                      results: 'v' == e[0] ? [] : [t[e[0]]],
                    },
                    n = 1;
                  n < e.length;
                  ++n
                )
                  g(e[n] in t, 'invalid signature char: ' + e[n]), r.parameters.push(t[e[n]]);
                return r;
              })(t),
              e
            );
          var r = [1, 96],
            n = t.slice(0, 1),
            o = t.slice(1),
            i = {
              i: 127,
              p: 127,
              j: 126,
              f: 125,
              d: 124,
            };
          Ye(o.length, r);
          for (var a = 0; a < o.length; ++a)
            g(o[a] in i, 'invalid signature char: ' + o[a]), r.push(i[o[a]]);
          'v' == n ? r.push(0) : r.push(1, i[n]);
          (t = [0, 97, 115, 109, 1, 0, 0, 0, 1]),
            Ye(r.length, t),
            t.push.apply(t, r),
            t.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0),
            (n = new WebAssembly.Module(new Uint8Array(t)));
          return new WebAssembly.Instance(n, {
            e: {
              f: e,
            },
          }).exports.f;
        }

        var A = void 0,
          Ve = [];

        function Je(e, t) {
          p.set(e, t), (We[e] = p.get(e));
        }

        var Xe = 'undefined' != typeof TextDecoder ? new TextDecoder('utf-16le') : void 0;

        function Ke(e, t) {
          g(e % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
          for (var r, n = e >> 1, o = n + t / 2; !(o <= n) && te[n]; ) ++n;
          if (32 < (r = n << 1) - e && Xe) return Xe.decode(m.subarray(e, r));
          for (var i = '', a = 0; !(t / 2 <= a); ++a) {
            var s = ee[(e + 2 * a) >> 1];
            if (0 == s) break;
            i += String.fromCharCode(s);
          }
          return i;
        }

        function Qe(e, t, r, n, o) {
          var i = {
            string: e => {
              var t,
                r = 0;
              return null != e && 0 !== e && ((t = 1 + (e.length << 2)), ie(e, (r = ct(t)), t)), r;
            },
            array: e => {
              var t = ct(e.length);
              return Fe(e, t), t;
            },
          };
          g((l = d['_' + e]), 'Cannot call unknown function ' + e + ', make sure it is exported');
          var e = l,
            a = [],
            s = 0;
          if ((g('array' !== t, 'Return type should not be "array".'), n))
            for (var c = 0; c < n.length; c++) {
              var u = i[r[c]];
              u ? (0 === s && (s = N()), (a[c] = u(n[c]))) : (a[c] = n[c]);
            }
          var l = e.apply(null, a);
          return (
            (e = l),
            0 !== s && R(s),
            (e = e),
            'string' === t ? _(e) : 'boolean' === t ? Boolean(e) : e
          );
        }

        function Ze(e, t, r, n) {
          (this.parent = e = e || this),
            (this.mount = e.mount),
            (this.mounted = null),
            (this.id = C.nextInode++),
            (this.name = t),
            (this.mode = r),
            (this.node_ops = {}),
            (this.stream_ops = {}),
            (this.rdev = n);
        }

        Object.defineProperties(Ze.prototype, {
          read: {
            get: function () {
              return 365 == (365 & this.mode);
            },
            set: function (e) {
              e ? (this.mode |= 365) : (this.mode &= -366);
            },
          },
          write: {
            get: function () {
              return 146 == (146 & this.mode);
            },
            set: function (e) {
              e ? (this.mode |= 146) : (this.mode &= -147);
            },
          },
          isFolder: {
            get: function () {
              return C.isDir(this.mode);
            },
          },
          isDevice: {
            get: function () {
              return C.isChrdev(this.mode);
            },
          },
        }),
          (C.FSNode = Ze),
          C.staticInit(),
          (Ie = {
            EPERM: 63,
            ENOENT: 44,
            ESRCH: 71,
            EINTR: 27,
            EIO: 29,
            ENXIO: 60,
            E2BIG: 1,
            ENOEXEC: 45,
            EBADF: 8,
            ECHILD: 12,
            EAGAIN: 6,
            EWOULDBLOCK: 6,
            ENOMEM: 48,
            EACCES: 2,
            EFAULT: 21,
            ENOTBLK: 105,
            EBUSY: 10,
            EEXIST: 20,
            EXDEV: 75,
            ENODEV: 43,
            ENOTDIR: 54,
            EISDIR: 31,
            EINVAL: 28,
            ENFILE: 41,
            EMFILE: 33,
            ENOTTY: 59,
            ETXTBSY: 74,
            EFBIG: 22,
            ENOSPC: 51,
            ESPIPE: 70,
            EROFS: 69,
            EMLINK: 34,
            EPIPE: 64,
            EDOM: 18,
            ERANGE: 68,
            ENOMSG: 49,
            EIDRM: 24,
            ECHRNG: 106,
            EL2NSYNC: 156,
            EL3HLT: 107,
            EL3RST: 108,
            ELNRNG: 109,
            EUNATCH: 110,
            ENOCSI: 111,
            EL2HLT: 112,
            EDEADLK: 16,
            ENOLCK: 46,
            EBADE: 113,
            EBADR: 114,
            EXFULL: 115,
            ENOANO: 104,
            EBADRQC: 103,
            EBADSLT: 102,
            EDEADLOCK: 16,
            EBFONT: 101,
            ENOSTR: 100,
            ENODATA: 116,
            ETIME: 117,
            ENOSR: 118,
            ENONET: 119,
            ENOPKG: 120,
            EREMOTE: 121,
            ENOLINK: 47,
            EADV: 122,
            ESRMNT: 123,
            ECOMM: 124,
            EPROTO: 65,
            EMULTIHOP: 36,
            EDOTDOT: 125,
            EBADMSG: 9,
            ENOTUNIQ: 126,
            EBADFD: 127,
            EREMCHG: 128,
            ELIBACC: 129,
            ELIBBAD: 130,
            ELIBSCN: 131,
            ELIBMAX: 132,
            ELIBEXEC: 133,
            ENOSYS: 52,
            ENOTEMPTY: 55,
            ENAMETOOLONG: 37,
            ELOOP: 32,
            EOPNOTSUPP: 138,
            EPFNOSUPPORT: 139,
            ECONNRESET: 15,
            ENOBUFS: 42,
            EAFNOSUPPORT: 5,
            EPROTOTYPE: 67,
            ENOTSOCK: 57,
            ENOPROTOOPT: 50,
            ESHUTDOWN: 140,
            ECONNREFUSED: 14,
            EADDRINUSE: 3,
            ECONNABORTED: 13,
            ENETUNREACH: 40,
            ENETDOWN: 38,
            ETIMEDOUT: 73,
            EHOSTDOWN: 142,
            EHOSTUNREACH: 23,
            EINPROGRESS: 26,
            EALREADY: 7,
            EDESTADDRREQ: 17,
            EMSGSIZE: 35,
            EPROTONOSUPPORT: 66,
            ESOCKTNOSUPPORT: 137,
            EADDRNOTAVAIL: 4,
            ENETRESET: 39,
            EISCONN: 30,
            ENOTCONN: 53,
            ETOOMANYREFS: 141,
            EUSERS: 136,
            EDQUOT: 19,
            ESTALE: 72,
            ENOTSUP: 138,
            ENOMEDIUM: 148,
            EILSEQ: 25,
            EOVERFLOW: 61,
            ECANCELED: 11,
            ENOTRECOVERABLE: 56,
            EOWNERDEAD: 62,
            ESTRPIPE: 135,
          });
        var $e = {
            JS_BModeChange: function (e, t, r, n) {
              d.callback('BModeChange', e, t, r, n);
            },
            JS_BOnDrawObjectSelectArea: function (e, t) {
              d.callback('BOnDrawObjectSelectArea', e, t);
            },
            JS_BOnSetOLEFramePath: function (e, t) {
              d.callback('BOnSetOLEFramePath', e, t);
            },
            JS_BWideCharToMultiByte: function (e, t, r, n, o) {
              let i = 0;
              if (0 != t && 0 != r && 0 != n && 0 != o && (0 === e || 1200 === e)) {
                var a = [];
                for (let e = 0; e < r; e++) a.push(te[t / Uint16Array.BYTES_PER_ELEMENT + e]);
                var e = new Uint16Array(a),
                  e = String.fromCharCode.apply(null, e),
                  s = encodeURIComponent(e),
                  c = [];
                for (let e = 0; e < s.length; )
                  '%' === s[e]
                    ? (c.push(parseInt(s.substr(e + 1, 2), 16)), (e += 3))
                    : c.push(s.charCodeAt(e++));
                var u = Math.min(o, c.length);
                for (let e = 0; e < u; e++) m[n / Uint8Array.BYTES_PER_ELEMENT + e] = c[e];
                (m[n / Uint8Array.BYTES_PER_ELEMENT + u] = 0), (i = u);
              }
              return i;
            },
            JS_GetLocationHost: function () {
              var e = pohostname,
                t = c(e) + 1,
                r = tt(t);
              return ie(e, r, t), r;
            },
            JS_OnDebugTrace: function (e) {
              d.callback('OnDebugTrace', e);
            },
            JS_OnGetDefaultFontName: function (e, t, r) {
              d.callback('OnGetDefaultFontName', e, t, r);
            },
            JS_OnGetMultiByteToWideChar: function (e, t, r, n) {
              d.callback('OnGetMultiByteToWideChar', e, t, r, n);
            },
            JS_OnGetRevisionFormatElementsRes: function (e, t) {
              d.callback('OnGetRevisionFormatElementsRes', e, t);
            },
            JS_OnGetWideCharToMultiByte: function (e, t, r, n) {
              d.callback('OnGetWideCharToMultiByte', e, t, r, n);
            },
            JS_OnOutputFile: function (e, t, r, n, o, i) {
              d.callback('OnOutputFile', e, t, r, n, o, i);
            },
            JS_OnOutputString: function (e, t) {
              d.callback('OnOutputString', e, t);
            },
            JS_StringToWideChar: function (e) {
              var t = 2 * (e = _(e)).length + 1,
                r = tt(t);
              return (
                (function (e, t, r) {
                  g(t % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!'),
                    g(
                      'number' == typeof r,
                      'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!'
                    ),
                    void 0 === r && (r = 2147483647);
                  if (r < 2) return;
                  for (
                    var n = t, o = (r -= 2) < 2 * e.length ? r / 2 : e.length, i = 0;
                    i < o;
                    ++i
                  ) {
                    var a = e.charCodeAt(i);
                    (ee[t >> 1] = a), (t += 2);
                  }
                  ee[t >> 1] = 0;
                })(e, r, t),
                r
              );
            },
            JS_WideCharToString: function (e) {
              var t = c((e = Ke(e))) + 1,
                r = tt(t);
              return ie(e, r, t), r;
            },
            JS_getStringLengthUTF16: function (e) {
              return Ke(e).length;
            },
            JS_getStringLengthUTF8: function (e) {
              return _(e).length;
            },
            __assert_fail: function (e, t, r, n) {
              v(
                'Assertion failed: ' +
                  _(e) +
                  ', at: ' +
                  [t ? _(t) : 'unknown filename', r, n ? _(n) : 'unknown function']
              );
            },
            __cxa_allocate_exception: function (e) {
              return tt(e + 24) + 24;
            },
            __cxa_throw: function (e, t, r) {
              throw (
                (new Pe(e).init(t, r),
                e +
                  ' - Exception catching is disabled, this exception cannot be caught. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.')
              );
            },
            __syscall_faccessat: function (e, t, r, n) {
              try {
                var o, i;
                return ((t = M.getStr(t)), g(0 === n), (t = M.calculateAt(e, t)), -8 & r)
                  ? -28
                  : (o = C.lookupPath(t, {
                        follow: !0,
                      }).node)
                    ? ((i = ''),
                      4 & r && (i += 'r'),
                      2 & r && (i += 'w'),
                      1 & r && (i += 'x'),
                      i && C.nodePermissions(o, i) ? -2 : 0)
                    : -44;
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            __syscall_fcntl64: function (e, t, r) {
              M.varargs = r;
              try {
                var n = M.getStreamFromFD(e);
                switch (t) {
                  case 0:
                    return (o = M.get()) < 0 ? -28 : C.createStream(n, o).fd;
                  case 1:
                  case 2:
                    return 0;
                  case 3:
                    return n.flags;
                  case 4:
                    var o = M.get();
                    return (n.flags |= o), 0;
                  case 5:
                    o = M.get();
                    return (ee[(o + 0) >> 1] = 2), 0;
                  case 6:
                  case 7:
                    return 0;
                  case 16:
                  case 8:
                    return -28;
                  case 9:
                    return (i = 28), (y[rt() >> 2] = i), -1;
                  default:
                    return -28;
                }
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
              var i;
            },
            __syscall_fstat64: function (e, t) {
              try {
                var r = M.getStreamFromFD(e);
                return M.doStat(C.stat, r.path, t);
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            __syscall_ioctl: function (e, t, r) {
              M.varargs = r;
              try {
                var n = M.getStreamFromFD(e);
                switch (t) {
                  case 21509:
                  case 21505:
                    return n.tty ? 0 : -59;
                  case 21510:
                  case 21511:
                  case 21512:
                  case 21506:
                  case 21507:
                  case 21508:
                    return n.tty ? 0 : -59;
                  case 21519:
                    return n.tty ? ((o = M.get()), (y[o >> 2] = 0)) : -59;
                  case 21520:
                    return n.tty ? -28 : -59;
                  case 21531:
                    var o = M.get();
                    return C.ioctl(n, t, o);
                  case 21523:
                  case 21524:
                    return n.tty ? 0 : -59;
                  default:
                    return -28;
                }
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            __syscall_lstat64: function (e, t) {
              try {
                return (e = M.getStr(e)), M.doStat(C.lstat, e, t);
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            __syscall_mkdirat: function (e, t, r) {
              try {
                return (
                  (t = M.getStr(t)),
                  (t = M.calculateAt(e, t)),
                  '/' === (t = T.normalize(t))[t.length - 1] && (t = t.substr(0, t.length - 1)),
                  C.mkdir(t, r, 0),
                  0
                );
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            __syscall_newfstatat: function (e, t, r, n) {
              try {
                t = M.getStr(t);
                var o = 256 & n,
                  i = 4096 & n;
                return (
                  g(!(n &= -4353), n),
                  (t = M.calculateAt(e, t, i)),
                  M.doStat(o ? C.lstat : C.stat, t, r)
                );
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            __syscall_openat: function (e, t, r, n) {
              M.varargs = n;
              try {
                (t = M.getStr(t)), (t = M.calculateAt(e, t));
                var o = n ? M.get() : 0;
                return C.open(t, r, o).fd;
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            __syscall_renameat: function (e, t, r, n) {
              try {
                return (
                  (t = M.getStr(t)),
                  (n = M.getStr(n)),
                  (t = M.calculateAt(e, t)),
                  (n = M.calculateAt(r, n)),
                  C.rename(t, n),
                  0
                );
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            __syscall_rmdir: function (e) {
              try {
                return (e = M.getStr(e)), C.rmdir(e), 0;
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            __syscall_stat64: function (e, t) {
              try {
                return (e = M.getStr(e)), M.doStat(C.stat, e, t);
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            __syscall_unlinkat: function (e, t, r) {
              try {
                return (
                  (t = M.getStr(t)),
                  (t = M.calculateAt(e, t)),
                  0 === r
                    ? C.unlink(t)
                    : 512 === r
                      ? C.rmdir(t)
                      : v('Invalid flags passed to unlinkat'),
                  0
                );
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            _emscripten_date_now: function () {
              return Date.now();
            },
            _emscripten_get_now_is_monotonic: function () {
              return !0;
            },
            _emscripten_throw_longjmp: function () {
              throw 1 / 0;
            },
            _gmtime_js: function (e, t) {
              var e = new Date(1e3 * Ae(e)),
                r =
                  ((y[t >> 2] = e.getUTCSeconds()),
                  (y[(t + 4) >> 2] = e.getUTCMinutes()),
                  (y[(t + 8) >> 2] = e.getUTCHours()),
                  (y[(t + 12) >> 2] = e.getUTCDate()),
                  (y[(t + 16) >> 2] = e.getUTCMonth()),
                  (y[(t + 20) >> 2] = e.getUTCFullYear() - 1900),
                  (y[(t + 24) >> 2] = e.getUTCDay()),
                  Date.UTC(e.getUTCFullYear(), 0, 1, 0, 0, 0, 0)),
                e = ((e.getTime() - r) / 864e5) | 0;
              y[(t + 28) >> 2] = e;
            },
            _localtime_js: function (e, t) {
              var e = new Date(1e3 * Ae(e)),
                r =
                  ((y[t >> 2] = e.getSeconds()),
                  (y[(t + 4) >> 2] = e.getMinutes()),
                  (y[(t + 8) >> 2] = e.getHours()),
                  (y[(t + 12) >> 2] = e.getDate()),
                  (y[(t + 16) >> 2] = e.getMonth()),
                  (y[(t + 20) >> 2] = e.getFullYear() - 1900),
                  (y[(t + 24) >> 2] = e.getDay()),
                  new Date(e.getFullYear(), 0, 1)),
                n = ((e.getTime() - r.getTime()) / 864e5) | 0,
                n =
                  ((y[(t + 28) >> 2] = n),
                  (y[(t + 36) >> 2] = -60 * e.getTimezoneOffset()),
                  new Date(e.getFullYear(), 6, 1).getTimezoneOffset()),
                r = r.getTimezoneOffset(),
                e = 0 | (n != r && e.getTimezoneOffset() == Math.min(r, n));
              y[(t + 32) >> 2] = e;
            },
            _mktime_js: function (e) {
              var t = new Date(
                  y[(e + 20) >> 2] + 1900,
                  y[(e + 16) >> 2],
                  y[(e + 12) >> 2],
                  y[(e + 8) >> 2],
                  y[(e + 4) >> 2],
                  y[e >> 2],
                  0
                ),
                r = y[(e + 32) >> 2],
                n = t.getTimezoneOffset(),
                o = new Date(t.getFullYear(), 0, 1),
                i = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(),
                a = o.getTimezoneOffset(),
                s = Math.min(a, i),
                r =
                  (r < 0
                    ? (y[(e + 32) >> 2] = Number(i != a && s == n))
                    : 0 < r != (s == n) &&
                      ((a = Math.max(a, i)),
                      (i = 0 < r ? s : a),
                      t.setTime(t.getTime() + 6e4 * (i - n))),
                  (y[(e + 24) >> 2] = t.getDay()),
                  ((t.getTime() - o.getTime()) / 864e5) | 0);
              return (
                (y[(e + 28) >> 2] = r),
                (y[e >> 2] = t.getSeconds()),
                (y[(e + 4) >> 2] = t.getMinutes()),
                (y[(e + 8) >> 2] = t.getHours()),
                (y[(e + 12) >> 2] = t.getDate()),
                (y[(e + 16) >> 2] = t.getMonth()),
                (t.getTime() / 1e3) | 0
              );
            },
            _mmap_js: function (e, t, r, n, o, i) {
              try {
                var a = M.getStreamFromFD(n),
                  s = C.mmap(a, e, o, t, r),
                  c = s.ptr;
                return (y[i >> 2] = s.allocated), c;
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            _munmap_js: function (e, t, r, n, o, i) {
              try {
                var a = M.getStreamFromFD(o);
                2 & r && M.doMsync(e, a, t, n, i), C.munmap(a);
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return -e.errno;
                throw e;
              }
            },
            _tzset_js: Ne,
            abort: function () {
              v('native code called abort()');
            },
            emscripten_get_heap_max: Re,
            emscripten_get_now: t,
            emscripten_memcpy_big: function (e, t, r) {
              m.copyWithin(e, t, t + r);
            },
            emscripten_resize_heap: function (e) {
              var t = m.length,
                r = (g(t < (e >>>= 0)), Re());
              if (r < e)
                s(
                  'Cannot enlarge memory, asked to go up to ' +
                    e +
                    ' bytes, but the limit is ' +
                    r +
                    ' bytes!'
                );
              else {
                for (var n, o = 1; o <= 4; o *= 2) {
                  var i = t * (1 + 0.2 / o),
                    i = Math.min(i, e + 100663296),
                    a = Math.min(r, (i = Math.max(e, i)) + (((n = 65536) - (i % n)) % n));
                  if (
                    (function (t) {
                      try {
                        return K.grow((t - $.byteLength + 65535) >>> 16), ae(K.buffer), 1;
                      } catch (e) {
                        s(
                          'emscripten_realloc_buffer: Attempted to grow heap from ' +
                            $.byteLength +
                            ' bytes to ' +
                            t +
                            ' bytes, but got error: ' +
                            e
                        );
                      }
                    })(a)
                  )
                    return !0;
                }
                s(
                  'Failed to grow the heap from ' +
                    t +
                    ' bytes to ' +
                    a +
                    ' bytes, not enough memory!'
                );
              }
              return !1;
            },
            environ_get: function (n, o) {
              var i = 0;
              return (
                je().forEach(function (e, t) {
                  var r = o + i;
                  xe(e, (u[(n + 4 * t) >> 2] = r)), (i += e.length + 1);
                }),
                0
              );
            },
            environ_sizes_get: function (e, t) {
              var r = je(),
                n = ((u[e >> 2] = r.length), 0);
              return (
                r.forEach(function (e) {
                  n += e.length + 1;
                }),
                (u[t >> 2] = n),
                0
              );
            },
            exit: Ue,
            fd_close: function (e) {
              try {
                var t = M.getStreamFromFD(e);
                return C.close(t), 0;
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return e.errno;
                throw e;
              }
            },
            fd_read: function (e, t, r, n) {
              try {
                var o = (function (e, t, r, n) {
                  for (var o = 0, i = 0; i < r; i++) {
                    var a = u[t >> 2],
                      s = u[(t + 4) >> 2],
                      a = ((t += 8), C.read(e, h, a, s, n));
                    if (a < 0) return -1;
                    if (((o += a), a < s)) break;
                  }
                  return o;
                })(M.getStreamFromFD(e), t, r);
                return (u[n >> 2] = o), 0;
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return e.errno;
                throw e;
              }
            },
            fd_seek: function (e, t, r, n, o) {
              try {
                (c = r), g((s = t) == s >>> 0 || s == (0 | s)), g(c === (0 | c));
                var i,
                  a = (c + 2097152) >>> 0 < 4194305 - !!s ? (s >>> 0) + 4294967296 * c : NaN;
                return isNaN(a)
                  ? 61
                  : ((i = M.getStreamFromFD(e)),
                    C.llseek(i, a, n),
                    (b = [
                      i.position >>> 0,
                      ((E = i.position),
                      1 <= +Math.abs(E)
                        ? 0 < E
                          ? (0 | Math.min(+Math.floor(E / 4294967296), 4294967295)) >>> 0
                          : ~~+Math.ceil((E - (~~E >>> 0)) / 4294967296) >>> 0
                        : 0),
                    ]),
                    (y[o >> 2] = b[0]),
                    (y[(o + 4) >> 2] = b[1]),
                    i.getdents && 0 === a && 0 === n && (i.getdents = null),
                    0);
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return e.errno;
                throw e;
              }
              var s, c;
            },
            fd_write: function (e, t, r, n) {
              try {
                var o = (function (e, t, r, n) {
                  for (var o = 0, i = 0; i < r; i++) {
                    var a = u[t >> 2],
                      s = u[(t + 4) >> 2],
                      a = ((t += 8), C.write(e, h, a, s, n));
                    if (a < 0) return -1;
                    o += a;
                  }
                  return o;
                })(M.getStreamFromFD(e), t, r);
                return (u[n >> 2] = o), 0;
              } catch (e) {
                if (void 0 !== C && e instanceof C.ErrnoError) return e.errno;
                throw e;
              }
            },
            invoke_dd: function (e, t) {
              var r = N();
              try {
                return I(e)(t);
              } catch (e) {
                if ((R(r), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_dddd: function (e, t, r, n) {
              var o = N();
              try {
                return I(e)(t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_ddi: function (e, t, r) {
              var n = N();
              try {
                return I(e)(t, r);
              } catch (e) {
                if ((R(n), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_di: function (e, t) {
              var r = N();
              try {
                return I(e)(t);
              } catch (e) {
                if ((R(r), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_dii: function (e, t, r) {
              var n = N();
              try {
                return I(e)(t, r);
              } catch (e) {
                if ((R(n), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_ff: function (e, t) {
              var r = N();
              try {
                return I(e)(t);
              } catch (e) {
                if ((R(r), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_ffff: function (e, t, r, n) {
              var o = N();
              try {
                return I(e)(t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_fi: function (e, t) {
              var r = N();
              try {
                return I(e)(t);
              } catch (e) {
                if ((R(r), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_fii: function (e, t, r) {
              var n = N();
              try {
                return I(e)(t, r);
              } catch (e) {
                if ((R(n), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_fiii: function (e, t, r, n) {
              var o = N();
              try {
                return I(e)(t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_i: function (e) {
              var t = N();
              try {
                return I(e)();
              } catch (e) {
                if ((R(t), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_idddd: function (e, t, r, n, o) {
              var i = N();
              try {
                return I(e)(t, r, n, o);
              } catch (e) {
                if ((R(i), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_if: function (e, t) {
              var r = N();
              try {
                return I(e)(t);
              } catch (e) {
                if ((R(r), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_ii: function (e, t) {
              var r = N();
              try {
                return I(e)(t);
              } catch (e) {
                if ((R(r), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iidddd: function (e, t, r, n, o, i) {
              var a = N();
              try {
                return I(e)(t, r, n, o, i);
              } catch (e) {
                if ((R(a), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iif: function (e, t, r) {
              var n = N();
              try {
                return I(e)(t, r);
              } catch (e) {
                if ((R(n), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiff: function (e, t, r, n) {
              var o = N();
              try {
                return I(e)(t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iifff: function (e, t, r, n, o) {
              var i = N();
              try {
                return I(e)(t, r, n, o);
              } catch (e) {
                if ((R(i), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiffff: function (e, t, r, n, o, i) {
              var a = N();
              try {
                return I(e)(t, r, n, o, i);
              } catch (e) {
                if ((R(a), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiffffffiiii: function (e, t, r, n, o, i, a, s, c, u, l, d) {
              var f = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l, d);
              } catch (e) {
                if ((R(f), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiffi: function (e, t, r, n, o) {
              var i = N();
              try {
                return I(e)(t, r, n, o);
              } catch (e) {
                if ((R(i), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiffiiii: function (e, t, r, n, o, i, a, s) {
              var c = N();
              try {
                return I(e)(t, r, n, o, i, a, s);
              } catch (e) {
                if ((R(c), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iifi: function (e, t, r, n) {
              var o = N();
              try {
                return I(e)(t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iifii: function (e, t, r, n, o) {
              var i = N();
              try {
                return I(e)(t, r, n, o);
              } catch (e) {
                if ((R(i), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iii: function (e, t, r) {
              var n = N();
              try {
                return I(e)(t, r);
              } catch (e) {
                if ((R(n), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiffiiiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l, d, f, h, m, p) {
              var v = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h, m, p);
              } catch (e) {
                if ((R(v), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiii: function (e, t, r, n) {
              var o = N();
              try {
                return I(e)(t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiff: function (e, t, r, n, o, i) {
              var a = N();
              try {
                return I(e)(t, r, n, o, i);
              } catch (e) {
                if ((R(a), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiffiiiiiiiiiiiii: function (
              e,
              t,
              r,
              n,
              o,
              i,
              a,
              s,
              c,
              u,
              l,
              d,
              f,
              h,
              m,
              p,
              v,
              y,
              g
            ) {
              var _ = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h, m, p, v, y, g);
              } catch (e) {
                if ((R(_), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiifi: function (e, t, r, n, o, i) {
              var a = N();
              try {
                return I(e)(t, r, n, o, i);
              } catch (e) {
                if ((R(a), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiii: function (e, t, r, n, o) {
              var i = N();
              try {
                return I(e)(t, r, n, o);
              } catch (e) {
                if ((R(i), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiid: function (e, t, r, n, o, i) {
              var a = N();
              try {
                return I(e)(t, r, n, o, i);
              } catch (e) {
                if ((R(a), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiffif: function (e, t, r, n, o, i, a, s, c) {
              var u = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c);
              } catch (e) {
                if ((R(u), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiii: function (e, t, r, n, o, i) {
              var a = N();
              try {
                return I(e)(t, r, n, o, i);
              } catch (e) {
                if ((R(a), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiii: function (e, t, r, n, o, i, a) {
              var s = N();
              try {
                return I(e)(t, r, n, o, i, a);
              } catch (e) {
                if ((R(s), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiii: function (e, t, r, n, o, i, a, s) {
              var c = N();
              try {
                return I(e)(t, r, n, o, i, a, s);
              } catch (e) {
                if ((R(c), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiiifiiii: function (e, t, r, n, o, i, a, s, c, u, l, d, f) {
              var h = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l, d, f);
              } catch (e) {
                if ((R(h), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiiii: function (e, t, r, n, o, i, a, s, c) {
              var u = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c);
              } catch (e) {
                if ((R(u), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u) {
              var l = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u);
              } catch (e) {
                if ((R(l), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiiiiif: function (e, t, r, n, o, i, a, s, c, u, l) {
              var d = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l);
              } catch (e) {
                if ((R(d), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l) {
              var d = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l);
              } catch (e) {
                if ((R(d), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l, d) {
              var f = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l, d);
              } catch (e) {
                if ((R(f), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l, d, f) {
              var h = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l, d, f);
              } catch (e) {
                if ((R(h), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l, d, f, h) {
              var m = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h);
              } catch (e) {
                if ((R(m), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l, d, f, h, m) {
              var p = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h, m);
              } catch (e) {
                if ((R(p), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiiiiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l, d, f, h, m, p, v) {
              var y = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h, m, p, v);
              } catch (e) {
                if ((R(y), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiiiiiiiiiiiiii: function (
              e,
              t,
              r,
              n,
              o,
              i,
              a,
              s,
              c,
              u,
              l,
              d,
              f,
              h,
              m,
              p,
              v,
              y,
              g
            ) {
              var _ = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h, m, p, v, y, g);
              } catch (e) {
                if ((R(_), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiiiiiiiiiiiiiiiiiii: function (
              e,
              t,
              r,
              n,
              o,
              i,
              a,
              s,
              c,
              u,
              l,
              d,
              f,
              h,
              m,
              p,
              v,
              y,
              g,
              _
            ) {
              var w = N();
              try {
                return I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h, m, p, v, y, g, _);
              } catch (e) {
                if ((R(w), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiij: function (e, t, r, n, o) {
              var i = N();
              try {
                return vt(e, t, r, n, o);
              } catch (e) {
                if ((R(i), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iij: function (e, t, r, n) {
              var o = N();
              try {
                return yt(e, t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_iiji: function (e, t, r, n, o) {
              var i = N();
              try {
                return ft(e, t, r, n, o);
              } catch (e) {
                if ((R(i), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_j: function (e) {
              var t = N();
              try {
                return ht(e);
              } catch (e) {
                if ((R(t), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_ji: function (e, t) {
              var r = N();
              try {
                return lt(e, t);
              } catch (e) {
                if ((R(r), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_jj: function (e, t, r) {
              var n = N();
              try {
                return mt(e, t, r);
              } catch (e) {
                if ((R(n), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_v: function (e) {
              var t = N();
              try {
                I(e)();
              } catch (e) {
                if ((R(t), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_vdddddii: function (e, t, r, n, o, i, a, s) {
              var c = N();
              try {
                I(e)(t, r, n, o, i, a, s);
              } catch (e) {
                if ((R(c), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_vi: function (e, t) {
              var r = N();
              try {
                I(e)(t);
              } catch (e) {
                if ((R(r), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_vid: function (e, t, r) {
              var n = N();
              try {
                I(e)(t, r);
              } catch (e) {
                if ((R(n), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_vidd: function (e, t, r, n) {
              var o = N();
              try {
                I(e)(t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_vidddd: function (e, t, r, n, o, i) {
              var a = N();
              try {
                I(e)(t, r, n, o, i);
              } catch (e) {
                if ((R(a), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_vif: function (e, t, r) {
              var n = N();
              try {
                I(e)(t, r);
              } catch (e) {
                if ((R(n), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viff: function (e, t, r, n) {
              var o = N();
              try {
                I(e)(t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viffff: function (e, t, r, n, o, i) {
              var a = N();
              try {
                I(e)(t, r, n, o, i);
              } catch (e) {
                if ((R(a), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viffffff: function (e, t, r, n, o, i, a, s) {
              var c = N();
              try {
                I(e)(t, r, n, o, i, a, s);
              } catch (e) {
                if ((R(c), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viffiiiddddii: function (e, t, r, n, o, i, a, s, c, u, l, d, f) {
              var h = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u, l, d, f);
              } catch (e) {
                if ((R(h), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viffiiiii: function (e, t, r, n, o, i, a, s, c) {
              var u = N();
              try {
                I(e)(t, r, n, o, i, a, s, c);
              } catch (e) {
                if ((R(u), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_vifi: function (e, t, r, n) {
              var o = N();
              try {
                I(e)(t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_vifii: function (e, t, r, n, o) {
              var i = N();
              try {
                I(e)(t, r, n, o);
              } catch (e) {
                if ((R(i), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_vifiiii: function (e, t, r, n, o, i, a) {
              var s = N();
              try {
                I(e)(t, r, n, o, i, a);
              } catch (e) {
                if ((R(s), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_vii: function (e, t, r) {
              var n = N();
              try {
                I(e)(t, r);
              } catch (e) {
                if ((R(n), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viif: function (e, t, r, n) {
              var o = N();
              try {
                I(e)(t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiffi: function (e, t, r, n, o, i) {
              var a = N();
              try {
                I(e)(t, r, n, o, i);
              } catch (e) {
                if ((R(a), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiffii: function (e, t, r, n, o, i, a) {
              var s = N();
              try {
                I(e)(t, r, n, o, i, a);
              } catch (e) {
                if ((R(s), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viifi: function (e, t, r, n, o) {
              var i = N();
              try {
                I(e)(t, r, n, o);
              } catch (e) {
                if ((R(i), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viifii: function (e, t, r, n, o, i) {
              var a = N();
              try {
                I(e)(t, r, n, o, i);
              } catch (e) {
                if ((R(a), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viifiii: function (e, t, r, n, o, i, a) {
              var s = N();
              try {
                I(e)(t, r, n, o, i, a);
              } catch (e) {
                if ((R(s), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viii: function (e, t, r, n) {
              var o = N();
              try {
                I(e)(t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiif: function (e, t, r, n, o) {
              var i = N();
              try {
                I(e)(t, r, n, o);
              } catch (e) {
                if ((R(i), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiff: function (e, t, r, n, o, i) {
              var a = N();
              try {
                I(e)(t, r, n, o, i);
              } catch (e) {
                if ((R(a), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiffi: function (e, t, r, n, o, i, a) {
              var s = N();
              try {
                I(e)(t, r, n, o, i, a);
              } catch (e) {
                if ((R(s), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiffiiiiiiiiiiii: function (
              e,
              t,
              r,
              n,
              o,
              i,
              a,
              s,
              c,
              u,
              l,
              d,
              f,
              h,
              m,
              p,
              v,
              y
            ) {
              var g = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h, m, p, v, y);
              } catch (e) {
                if ((R(g), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiii: function (e, t, r, n, o) {
              var i = N();
              try {
                I(e)(t, r, n, o);
              } catch (e) {
                if ((R(i), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiffffiiiiif: function (e, t, r, n, o, i, a, s, c, u, l, d, f, h, m) {
              var p = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h, m);
              } catch (e) {
                if ((R(p), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiffii: function (e, t, r, n, o, i, a, s, c) {
              var u = N();
              try {
                I(e)(t, r, n, o, i, a, s, c);
              } catch (e) {
                if ((R(u), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiffiiii: function (e, t, r, n, o, i, a, s, c, u, l) {
              var d = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u, l);
              } catch (e) {
                if ((R(d), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiii: function (e, t, r, n, o, i) {
              var a = N();
              try {
                I(e)(t, r, n, o, i);
              } catch (e) {
                if ((R(a), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiff: function (e, t, r, n, o, i, a, s) {
              var c = N();
              try {
                I(e)(t, r, n, o, i, a, s);
              } catch (e) {
                if ((R(c), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiifi: function (e, t, r, n, o, i, a, s) {
              var c = N();
              try {
                I(e)(t, r, n, o, i, a, s);
              } catch (e) {
                if ((R(c), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiii: function (e, t, r, n, o, i, a) {
              var s = N();
              try {
                I(e)(t, r, n, o, i, a);
              } catch (e) {
                if ((R(s), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiffiiiiii: function (e, t, r, n, o, i, a, s, c, u, l, d, f, h, m) {
              var p = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h, m);
              } catch (e) {
                if ((R(p), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiii: function (e, t, r, n, o, i, a, s) {
              var c = N();
              try {
                I(e)(t, r, n, o, i, a, s);
              } catch (e) {
                if ((R(c), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiif: function (e, t, r, n, o, i, a, s, c) {
              var u = N();
              try {
                I(e)(t, r, n, o, i, a, s, c);
              } catch (e) {
                if ((R(u), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiifi: function (e, t, r, n, o, i, a, s, c, u) {
              var l = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u);
              } catch (e) {
                if ((R(l), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiii: function (e, t, r, n, o, i, a, s, c) {
              var u = N();
              try {
                I(e)(t, r, n, o, i, a, s, c);
              } catch (e) {
                if ((R(u), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiiif: function (e, t, r, n, o, i, a, s, c, u) {
              var l = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u);
              } catch (e) {
                if ((R(l), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiiifiiii: function (e, t, r, n, o, i, a, s, c, u, l, d, f, h) {
              var m = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h);
              } catch (e) {
                if ((R(m), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiiii: function (e, t, r, n, o, i, a, s, c, u) {
              var l = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u);
              } catch (e) {
                if ((R(l), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l) {
              var d = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u, l);
              } catch (e) {
                if ((R(d), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l, d) {
              var f = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u, l, d);
              } catch (e) {
                if ((R(f), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l, d, f) {
              var h = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u, l, d, f);
              } catch (e) {
                if ((R(h), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l, d, f, h) {
              var m = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h);
              } catch (e) {
                if ((R(m), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l, d, f, h, m) {
              var p = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h, m);
              } catch (e) {
                if ((R(p), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_viiiiiiiiiiiiiii: function (e, t, r, n, o, i, a, s, c, u, l, d, f, h, m, p) {
              var v = N();
              try {
                I(e)(t, r, n, o, i, a, s, c, u, l, d, f, h, m, p);
              } catch (e) {
                if ((R(v), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_vij: function (e, t, r, n) {
              var o = N();
              try {
                dt(e, t, r, n);
              } catch (e) {
                if ((R(o), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            invoke_vj: function (e, t, r) {
              var n = N();
              try {
                pt(e, t, r);
              } catch (e) {
                if ((R(n), e !== e + 0)) throw e;
                O(1, 0);
              }
            },
            js_output: function (e, t) {
              xlog(_(e) + ' ' + _(t));
            },
            strftime: He,
            strftime_l: He,
          },
          et =
            ((function () {
              var t = {
                env: $e,
                wasi_snapshot_preview1: $e,
              };

              function r(e, t) {
                var e = e.exports;
                (d.asm = e),
                  g((K = d.asm.memory), 'memory not found in wasm exports'),
                  ae(K.buffer),
                  g((p = d.asm.__indirect_function_table), 'table not found in wasm exports'),
                  (e = d.asm.__wasm_call_ctors),
                  ue.unshift(e),
                  ge('wasm-instantiate');
              }

              ye('wasm-instantiate');
              var n = d;

              function o(e) {
                g(
                  d === n,
                  'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?'
                ),
                  (n = null),
                  r(e.instance);
              }

              function i(e) {
                return (function () {
                  if (!J && (B || l)) {
                    if ('function' == typeof fetch && !we(w))
                      return fetch(w, {
                        credentials: 'same-origin',
                      })
                        .then(function (e) {
                          if (e.ok) return e.arrayBuffer();
                          throw "failed to load wasm binary file at '" + w + "'";
                        })
                        .catch(function () {
                          return Ee(w);
                        });
                    if (z)
                      return new Promise(function (t, e) {
                        z(
                          w,
                          function (e) {
                            t(new Uint8Array(e));
                          },
                          e
                        );
                      });
                  }
                  return Promise.resolve().then(function () {
                    return Ee(w);
                  });
                })()
                  .then(function (e) {
                    return WebAssembly.instantiate(e, t);
                  })
                  .then(function (e) {
                    return e;
                  })
                  .then(e, function (e) {
                    s('failed to asynchronously prepare wasm: ' + e),
                      we(w) &&
                        s(
                          'warning: Loading from a file URI (' +
                            w +
                            ') is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing'
                        ),
                      v(e);
                  });
              }

              if (d.instantiateWasm)
                try {
                  return d.instantiateWasm(t, r);
                } catch (e) {
                  return s('Module.instantiateWasm callback failed with error: ' + e);
                }
              (J ||
              'function' != typeof WebAssembly.instantiateStreaming ||
              _e(w) ||
              we(w) ||
              a ||
              'function' != typeof fetch
                ? i(o)
                : fetch(w, {
                    credentials: 'same-origin',
                  }).then(function (e) {
                    return WebAssembly.instantiateStreaming(e, t).then(o, function (e) {
                      return (
                        s('wasm streaming compile failed: ' + e),
                        s('falling back to ArrayBuffer instantiation'),
                        i(o)
                      );
                    });
                  })
              ).catch(j);
            })(),
            (d.___wasm_call_ctors = k('__wasm_call_ctors')),
            (d._free = k('free'))),
          tt =
            ((d._ISetEngineConfig = k('ISetEngineConfig')),
            (d._IGetEngineConfig = k('IGetEngineConfig')),
            (d._IPoDocumenttoImage = k('IPoDocumenttoImage')),
            (d._IPoCompressPDF = k('IPoCompressPDF')),
            (d._IPoProtectPDF = k('IPoProtectPDF')),
            (d._IPoUnlockPDF = k('IPoUnlockPDF')),
            (d._IPoAddFileForMerge = k('IPoAddFileForMerge')),
            (d._IPoMergePDF = k('IPoMergePDF')),
            (d._IPoSplitPDF = k('IPoSplitPDF')),
            (d._IPoGetFirstThumbnail = k('IPoGetFirstThumbnail')),
            (d._IPoGetThumbnail = k('IPoGetThumbnail')),
            (d._IPoGetFileInfo = k('IPoGetFileInfo')),
            (d._IPoDocumentConverter = k('IPoDocumentConverter')),
            (d._IPoAddFileForImageToPDF = k('IPoAddFileForImageToPDF')),
            (d._IPoImageToPDF = k('IPoImageToPDF')),
            (d._IPoImageConverter = k('IPoImageConverter')),
            (d._IPoShowReflowDocument = k('IPoShowReflowDocument')),
            (d._IPoExtractContents = k('IPoExtractContents')),
            (d._IPoAddFileForMakeCover = k('IPoAddFileForMakeCover')),
            (d._IPoMakeCover = k('IPoMakeCover')),
            (d._IPoCreateFileHandle = k('IPoCreateFileHandle')),
            (d._IPoReleaseFileHandle = k('IPoReleaseFileHandle')),
            (d._IPoEditPDFAnnotation = k('IPoEditPDFAnnotation')),
            (d._IPoSaveFileHandle = k('IPoSaveFileHandle')),
            (d._malloc = k('malloc'))),
          rt = (d.___errno_location = k('__errno_location')),
          nt = (d._fflush = k('fflush')),
          ot = ((d._saveSetjmp = k('saveSetjmp')), (d.___cxa_demangle = k('__cxa_demangle'))),
          it =
            ((d.___dl_seterr = k('__dl_seterr')),
            (d._emscripten_builtin_memalign = k('emscripten_builtin_memalign'))),
          O = (d._setThrew = k('setThrew')),
          at = (d._emscripten_stack_init = function () {
            return (at = d._emscripten_stack_init = d.asm.emscripten_stack_init).apply(
              null,
              arguments
            );
          }),
          st =
            ((d._emscripten_stack_get_free = function () {
              return (d._emscripten_stack_get_free = d.asm.emscripten_stack_get_free).apply(
                null,
                arguments
              );
            }),
            (d._emscripten_stack_get_base = function () {
              return (d._emscripten_stack_get_base = d.asm.emscripten_stack_get_base).apply(
                null,
                arguments
              );
            }),
            (d._emscripten_stack_get_end = function () {
              return (st = d._emscripten_stack_get_end = d.asm.emscripten_stack_get_end).apply(
                null,
                arguments
              );
            })),
          N = (d.stackSave = k('stackSave')),
          R = (d.stackRestore = k('stackRestore')),
          ct = (d.stackAlloc = k('stackAlloc')),
          ut = (d.___cxa_is_pointer_type = k('__cxa_is_pointer_type')),
          lt = (d.dynCall_ji = k('dynCall_ji')),
          dt =
            ((d.dynCall_jij = k('dynCall_jij')),
            (d.dynCall_iiiijii = k('dynCall_iiiijii')),
            (d.dynCall_vij = k('dynCall_vij'))),
          ft = (d.dynCall_iiji = k('dynCall_iiji')),
          ht = (d.dynCall_j = k('dynCall_j')),
          mt =
            ((d.dynCall_jiji = k('dynCall_jiji')),
            (d.dynCall_viij = k('dynCall_viij')),
            (d.dynCall_jj = k('dynCall_jj'))),
          pt = (d.dynCall_vj = k('dynCall_vj')),
          vt = (d.dynCall_iiij = k('dynCall_iiij')),
          yt =
            ((d.dynCall_viijiji = k('dynCall_viijiji')),
            (d.dynCall_viijii = k('dynCall_viijii')),
            (d.dynCall_jji = k('dynCall_jji')),
            (d.dynCall_iji = k('dynCall_iji')),
            (d.dynCall_viiij = k('dynCall_viiij')),
            (d.dynCall_iij = k('dynCall_iij')));
        (d.dynCall_iiiji = k('dynCall_iiiji')),
          (d.dynCall_jii = k('dynCall_jii')),
          (d.dynCall_iiiiij = k('dynCall_iiiiij')),
          (d.dynCall_iiiiijj = k('dynCall_iiiiijj')),
          (d.dynCall_iiiiiijj = k('dynCall_iiiiiijj')),
          (d.___start_em_js = 7628580),
          (d.___stop_em_js = 7630577);
        (d.UTF8ToString = _),
          (d.stringToUTF8 = ie),
          (d.lengthBytesUTF8 = c),
          (d.ccall = Qe),
          (d.cwrap = function (e, t, r, n) {
            return function () {
              return Qe(e, t, r, arguments);
            };
          }),
          (d.addFunction = function (t, r) {
            if ((g(void 0 !== t), !A)) {
              A = new WeakMap();
              var e = 0,
                n = p.length;
              if (A)
                for (var o = e; o < e + n; o++) {
                  var i = I(o);
                  i && A.set(i, o);
                }
            }
            if (A.has(t)) return A.get(t);
            var a = (function () {
              if (Ve.length) return Ve.pop();
              try {
                p.grow(1);
              } catch (e) {
                if (e instanceof RangeError)
                  throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
                throw e;
              }
              return p.length - 1;
            })();
            try {
              Je(a, t);
            } catch (e) {
              if (!(e instanceof TypeError)) throw e;
              g(void 0 !== r, 'Missing signature argument to addFunction: ' + t), Je(a, qe(t, r));
            }
            return A.set(t, a), a;
          }),
          (d.removeFunction = function (e) {
            A.delete(I(e)), Ve.push(e);
          }),
          (d.FS = C);
        var gt;
        [
          'run',
          'UTF8ArrayToString',
          'stringToUTF8Array',
          'addOnPreRun',
          'addOnInit',
          'addOnPreMain',
          'addOnExit',
          'addOnPostRun',
          'addRunDependency',
          'removeRunDependency',
          'FS_createFolder',
          'FS_createPath',
          'FS_createDataFile',
          'FS_createPreloadedFile',
          'FS_createLazyFile',
          'FS_createLink',
          'FS_createDevice',
          'FS_unlink',
          'getLEB',
          'getFunctionTables',
          'alignFunctionTables',
          'registerFunctions',
          'prettyPrint',
          'getCompilerSetting',
          'print',
          'printErr',
          'callMain',
          'abort',
          'keepRuntimeAlive',
          'wasmMemory',
          'stackAlloc',
          'stackSave',
          'stackRestore',
          'getTempRet0',
          'setTempRet0',
          'writeStackCookie',
          'checkStackCookie',
          'ptrToString',
          'zeroMemory',
          'stringToNewUTF8',
          'exitJS',
          'getHeapMax',
          'emscripten_realloc_buffer',
          'ENV',
          'ERRNO_CODES',
          'ERRNO_MESSAGES',
          'setErrNo',
          'inetPton4',
          'inetNtop4',
          'inetPton6',
          'inetNtop6',
          'readSockaddr',
          'writeSockaddr',
          'DNS',
          'getHostByName',
          'Protocols',
          'Sockets',
          'getRandomDevice',
          'warnOnce',
          'traverseStack',
          'UNWIND_CACHE',
          'convertPCtoSourceLocation',
          'readAsmConstArgsArray',
          'readAsmConstArgs',
          'mainThreadEM_ASM',
          'jstoi_q',
          'jstoi_s',
          'getExecutableName',
          'listenOnce',
          'autoResumeAudioContext',
          'dynCallLegacy',
          'getDynCaller',
          'dynCall',
          'handleException',
          'runtimeKeepalivePush',
          'runtimeKeepalivePop',
          'callUserCallback',
          'maybeExit',
          'safeSetTimeout',
          'asmjsMangle',
          'asyncLoad',
          'alignMemory',
          'mmapAlloc',
          'writeI53ToI64',
          'writeI53ToI64Clamped',
          'writeI53ToI64Signaling',
          'writeI53ToU64Clamped',
          'writeI53ToU64Signaling',
          'readI53FromI64',
          'readI53FromU64',
          'convertI32PairToI53',
          'convertI32PairToI53Checked',
          'convertU32PairToI53',
          'getCFunc',
          'uleb128Encode',
          'sigToWasmTypes',
          'convertJsFunctionToWasm',
          'freeTableIndexes',
          'functionsInTableMap',
          'getEmptyTableSlot',
          'updateTableMap',
          'reallyNegative',
          'unSign',
          'strLen',
          'reSign',
          'formatString',
          'setValue',
          'getValue',
          'PATH',
          'PATH_FS',
          'intArrayFromString',
          'intArrayToString',
          'AsciiToString',
          'stringToAscii',
          'UTF16Decoder',
          'UTF16ToString',
          'stringToUTF16',
          'lengthBytesUTF16',
          'UTF32ToString',
          'stringToUTF32',
          'lengthBytesUTF32',
          'allocateUTF8',
          'allocateUTF8OnStack',
          'writeStringToMemory',
          'writeArrayToMemory',
          'writeAsciiToMemory',
          'SYSCALLS',
          'getSocketFromFD',
          'getSocketAddress',
          'JSEvents',
          'registerKeyEventCallback',
          'specialHTMLTargets',
          'maybeCStringToJsString',
          'findEventTarget',
          'findCanvasEventTarget',
          'getBoundingClientRect',
          'fillMouseEventData',
          'registerMouseEventCallback',
          'registerWheelEventCallback',
          'registerUiEventCallback',
          'registerFocusEventCallback',
          'fillDeviceOrientationEventData',
          'registerDeviceOrientationEventCallback',
          'fillDeviceMotionEventData',
          'registerDeviceMotionEventCallback',
          'screenOrientation',
          'fillOrientationChangeEventData',
          'registerOrientationChangeEventCallback',
          'fillFullscreenChangeEventData',
          'registerFullscreenChangeEventCallback',
          'JSEvents_requestFullscreen',
          'JSEvents_resizeCanvasForFullscreen',
          'registerRestoreOldStyle',
          'hideEverythingExceptGivenElement',
          'restoreHiddenElements',
          'setLetterbox',
          'currentFullscreenStrategy',
          'restoreOldWindowedStyle',
          'softFullscreenResizeWebGLRenderTarget',
          'doRequestFullscreen',
          'fillPointerlockChangeEventData',
          'registerPointerlockChangeEventCallback',
          'registerPointerlockErrorEventCallback',
          'requestPointerLock',
          'fillVisibilityChangeEventData',
          'registerVisibilityChangeEventCallback',
          'registerTouchEventCallback',
          'fillGamepadEventData',
          'registerGamepadEventCallback',
          'registerBeforeUnloadEventCallback',
          'fillBatteryEventData',
          'battery',
          'registerBatteryEventCallback',
          'setCanvasElementSize',
          'getCanvasElementSize',
          'demangle',
          'demangleAll',
          'jsStackTrace',
          'stackTrace',
          'ExitStatus',
          'getEnvStrings',
          'checkWasiClock',
          'doReadv',
          'doWritev',
          'dlopenMissingError',
          'setImmediateWrapped',
          'clearImmediateWrapped',
          'polyfillSetImmediate',
          'uncaughtExceptionCount',
          'exceptionLast',
          'exceptionCaught',
          'ExceptionInfo',
          'exception_addRef',
          'exception_decRef',
          'Browser',
          'setMainLoop',
          'wget',
          'MEMFS',
          'TTY',
          'PIPEFS',
          'SOCKFS',
          '_setNetworkCallback',
          'tempFixedLengthArray',
          'miniTempWebGLFloatBuffers',
          'heapObjectForWebGLType',
          'heapAccessShiftForWebGLHeap',
          'GL',
          'emscriptenWebGLGet',
          'computeUnpackAlignedImageSize',
          'emscriptenWebGLGetTexPixelData',
          'emscriptenWebGLGetUniform',
          'webglGetUniformLocation',
          'webglPrepareUniformLocationsBeforeFirstUse',
          'webglGetLeftBracePos',
          'emscriptenWebGLGetVertexAttrib',
          'writeGLArray',
          'AL',
          'SDL_unicode',
          'SDL_ttfContext',
          'SDL_audio',
          'SDL',
          'SDL_gfx',
          'GLUT',
          'EGL',
          'GLFW_Window',
          'GLFW',
          'GLEW',
          'IDBStore',
          'runAndAbortIfError',
          'ALLOC_NORMAL',
          'ALLOC_STACK',
          'allocate',
        ].forEach(function (t) {
          Object.getOwnPropertyDescriptor(d, t) ||
            Object.defineProperty(d, t, {
              configurable: !0,
              get: function () {
                var e =
                  "'" + t + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
                X(t) &&
                  (e +=
                    '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you'),
                  v(e);
              },
            });
        });

        function _t() {
          var e;
          at(),
            g(0 == (3 & (e = st()))),
            (u[e >> 2] = 34821223),
            (u[(e + 4) >> 2] = 2310721022),
            (u[0] = 1668509029);
        }

        function wt() {
          function e() {
            gt ||
              ((gt = !0), (d.calledRun = !0), Z) ||
              (g(!de),
              (de = !0),
              se(),
              d.noFSInit || C.init.initialized || C.init(),
              (C.ignorePermissions = !1),
              P.init(),
              ke(ue),
              L(d),
              d.onRuntimeInitialized && d.onRuntimeInitialized(),
              g(
                !d._main,
                'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'
              ),
              he());
          }

          0 < o ||
            (_t(), fe(), 0 < o) ||
            (d.setStatus
              ? (d.setStatus('Running...'),
                setTimeout(function () {
                  setTimeout(function () {
                    d.setStatus('');
                  }, 1),
                    e();
                }, 1))
              : e(),
            se());
        }

        if (
          ([
            'ptrToString',
            'stringToNewUTF8',
            'inetPton4',
            'inetNtop4',
            'inetPton6',
            'inetNtop6',
            'readSockaddr',
            'writeSockaddr',
            'getHostByName',
            'traverseStack',
            'convertPCtoSourceLocation',
            'readAsmConstArgs',
            'mainThreadEM_ASM',
            'jstoi_q',
            'jstoi_s',
            'listenOnce',
            'autoResumeAudioContext',
            'dynCallLegacy',
            'getDynCaller',
            'dynCall',
            'runtimeKeepalivePush',
            'runtimeKeepalivePop',
            'callUserCallback',
            'maybeExit',
            'safeSetTimeout',
            'asmjsMangle',
            'writeI53ToI64',
            'writeI53ToI64Clamped',
            'writeI53ToI64Signaling',
            'writeI53ToU64Clamped',
            'writeI53ToU64Signaling',
            'readI53FromU64',
            'convertI32PairToI53',
            'convertU32PairToI53',
            'reallyNegative',
            'unSign',
            'strLen',
            'reSign',
            'formatString',
            'getSocketFromFD',
            'getSocketAddress',
            'registerKeyEventCallback',
            'maybeCStringToJsString',
            'findEventTarget',
            'findCanvasEventTarget',
            'getBoundingClientRect',
            'fillMouseEventData',
            'registerMouseEventCallback',
            'registerWheelEventCallback',
            'registerUiEventCallback',
            'registerFocusEventCallback',
            'fillDeviceOrientationEventData',
            'registerDeviceOrientationEventCallback',
            'fillDeviceMotionEventData',
            'registerDeviceMotionEventCallback',
            'screenOrientation',
            'fillOrientationChangeEventData',
            'registerOrientationChangeEventCallback',
            'fillFullscreenChangeEventData',
            'registerFullscreenChangeEventCallback',
            'JSEvents_requestFullscreen',
            'JSEvents_resizeCanvasForFullscreen',
            'registerRestoreOldStyle',
            'hideEverythingExceptGivenElement',
            'restoreHiddenElements',
            'setLetterbox',
            'softFullscreenResizeWebGLRenderTarget',
            'doRequestFullscreen',
            'fillPointerlockChangeEventData',
            'registerPointerlockChangeEventCallback',
            'registerPointerlockErrorEventCallback',
            'requestPointerLock',
            'fillVisibilityChangeEventData',
            'registerVisibilityChangeEventCallback',
            'registerTouchEventCallback',
            'fillGamepadEventData',
            'registerGamepadEventCallback',
            'registerBeforeUnloadEventCallback',
            'fillBatteryEventData',
            'battery',
            'registerBatteryEventCallback',
            'setCanvasElementSize',
            'getCanvasElementSize',
            'checkWasiClock',
            'setImmediateWrapped',
            'clearImmediateWrapped',
            'polyfillSetImmediate',
            'exception_addRef',
            'exception_decRef',
            'setMainLoop',
            '_setNetworkCallback',
            'heapObjectForWebGLType',
            'heapAccessShiftForWebGLHeap',
            'emscriptenWebGLGet',
            'computeUnpackAlignedImageSize',
            'emscriptenWebGLGetTexPixelData',
            'emscriptenWebGLGetUniform',
            'webglGetUniformLocation',
            'webglPrepareUniformLocationsBeforeFirstUse',
            'webglGetLeftBracePos',
            'emscriptenWebGLGetVertexAttrib',
            'writeGLArray',
            'SDL_unicode',
            'SDL_ttfContext',
            'SDL_audio',
            'GLFW_Window',
            'runAndAbortIfError',
          ].forEach(function (t) {
            'undefined' == typeof globalThis ||
              Object.getOwnPropertyDescriptor(globalThis, t) ||
              Object.defineProperty(globalThis, t, {
                configurable: !0,
                get: function () {
                  var e =
                    '`' +
                    t +
                    '` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line';
                  X(t) &&
                    (e +=
                      '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you'),
                    S(e);
                },
              });
          }),
          (me = function e() {
            gt || wt(), gt || (me = e);
          }),
          d.preInit)
        )
          for ('function' == typeof d.preInit && (d.preInit = [d.preInit]); 0 < d.preInit.length; )
            d.preInit.pop()();
        return wt(), d.ready;
      }
    );
  })();

  ////////////////////////////////////////

  function getMimeType(e) {
    let r = 'image/jpeg';
    return (
      'pdf' == e
        ? (r = 'application/pdf')
        : 'doc' == e
          ? (r = 'application/msword')
          : 'docx' == e
            ? (r = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
            : 'ppt' == e
              ? (r = 'application/vnd.ms-powerpoint')
              : 'pptx' == e
                ? (r = 'application/vnd.openxmlformats-officedocument.presentationml.presentation')
                : 'xls' == e
                  ? (r = 'application/vnd.ms-excel')
                  : 'xlsx' == e
                    ? (r = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                    : 'jpg' == e
                      ? (r = 'image/jpeg')
                      : 'bmp' == e
                        ? (r = 'image/bmp')
                        : 'gif' == e
                          ? (r = 'image/gif')
                          : 'png' == e
                            ? (r = 'image/png')
                            : 'emf' == e
                              ? (r = 'application/emf')
                              : 'wmf' == e
                                ? (r = 'image/wmf')
                                : 'hwp' == e
                                  ? (r = 'application/vnd.hancom.hwp')
                                  : 'hwpx' == e && (r = 'application/vnd.hancom.hwpx'),
      xlog(`OnOutputFile(${e})= ` + r),
      r
    );
  }

  const baseCallbacks = {
      OnDebugTrace(e) {
        let r = '';
        Module && (r = Module.UTF8ToString(e)),
          xlog('self.postMessage OnDebugTrace event: ' + eventName + ', message: ' + r),
          self.postMessage({
            event: eventName,
            data: {
              complete: !1,
              result: 'OnDebugTrace',
              fileName: fileName,
              message: r,
            },
          });
      },
      OnOutputFile(e, r, t, o, n, a) {
        a = Module.UTF8ToString(a);
        xlog(
          'self.postMessage OnOutputFile event: ' +
            eventName +
            ', pageNumber: ' +
            e +
            ', width: ' +
            o +
            ', height: ' +
            n +
            ', extension: ' +
            a
        );
        let l = null;
        r &&
          0 < t &&
          ((t = convertHEAPU8(Module, r, t)),
          (l = new Blob([new Uint8Array(t)], {
            type: getMimeType(a),
          })),
          destroy_buffer(Module, r),
          (r = void 0)),
          self.postMessage({
            event: eventName,
            data: {
              complete: !1,
              result: 'OnOutputFile',
              fileName: fileName,
              thumbnailBlob: l,
              bufferWidth: o,
              bufferHeight: n,
              pageNumber: e,
              extension: a,
            },
          }),
          self.emit('end', l);
      },
    },
    callbackImpls = {},
    callback_init = () => {
      Object.assign(callbackImpls, baseCallbacks);
    },
    licenseKey =
      (callback_init(),
      '0ve/dRmp14n6P7R8oy9nDMSV8FUTawUZp6SB/dvEHLO+t0jBiPrCYi0RVUbgXsh0PIcgEUXJDHIq0tMlBiUlwdbOea64UbhQzNBYK7piNbMHVyX2ohb/zcxCtPD2Vbz0on1F7K6c9SiKXzsc2vmokxVLV9YGeRhVcP0Zn/4jjQTJ8E/GBP6qK/hyuxdrsTdAeo9JIsWgiC1uFx17LpnQbsM1FCCk0SJfEInhhl45k2XP9mpHA5vwKXud04vvPE+rgrg/0t1hRHBM6WNom4DPQhUvgIfPFFtxdEpWTw=='),
    importPdfEngineWorker = async () =>
      import('./libpolarisoffice_pdf.js').then(e => new e.default()),
    importSheetEngineWorker = async () =>
      import('./libpolarisoffice_sheet.js').then(e => new e.default()),
    importWordEngineWorker = async () => new ModuleX();

  function bindCallback(e) {
    e.callback = (e, ...r) => {
      try {
        void 0 !== callbackImpls[e] && callbackImpls[e](...r);
      } catch (e) {
        xlog(e);
      }
    };
  }

  const convertHEAPU8 = (e, r, t) => e.HEAPU8.subarray(r, r + t),
    convertImageData = (e, r, t, o) => {
      (e = convertHEAPU8(e, r, t * o * 4)), (r = new Uint8ClampedArray(e));
      return new ImageData(r, t, o);
    },
    convertZipBlob = (e, r, t) => {
      e = convertHEAPU8(e, r, t);
      return new Blob([new Uint8Array(e)], {
        type: 'application/zip',
      });
    },
    convertBlob = (e, r, t) => {
      e = convertHEAPU8(e, r, t);
      return new Blob([new Uint8Array(e)]);
    },
    objToUTF8JsonStrPtrArr = (e, r) => {
      r = JSON.stringify(r, null, 0);
      return stringToNewUTF8(e, r);
    },
    stringToNewUTF8 = (e, r) => {
      var t = e.lengthBytesUTF8(r) + 1,
        o = e._malloc(t);
      return e.stringToUTF8(r, o, t), o;
    },
    convertJsonObject = (e, r, t = !0) => {
      var o = JSON.parse(e.UTF8ToString(r));
      return t && e._free(r), o;
    },
    init_pdf = async (e = 0) => {
      if ((xlog('init_pdf start: ' + Module_pdf), void 0 === Module_pdf))
        try {
          bindCallback((Module_pdf = await importPdfEngineWorker()));
          var r = convertJsonObject(
              Module_pdf,
              Module_pdf.ccall('IGetEngineConfig', 'number', null)
            ),
            t = ((r.szLicenseKey = licenseKey), objToUTF8JsonStrPtrArr(Module_pdf, r));
          Module_pdf.ccall('ISetEngineConfig', null, ['number'], [t]), xlog('init_pdf end');
        } catch (e) {
          console.error('init_pdf Exception[' + e + ']');
        }
    },
    init_word = async (e = 0) => {
      if ((xlog('init_word start: ' + Module_word), void 0 === Module_word))
        try {
          const p = await importWordEngineWorker();
          bindCallback((Module_word = await importWordEngineWorker()));
          var r = convertJsonObject(
              Module_word,
              Module_word.ccall('IGetEngineConfig', 'number', null)
            ),
            t = ((r.szLicenseKey = licenseKey), objToUTF8JsonStrPtrArr(Module_word, r));
          Module_word.ccall('ISetEngineConfig', null, ['number'], [t]), xlog('init_word end');
        } catch (e) {
          console.error(e);
          console.error('init_word Exception[' + e + ']');
        }
    },
    init_sheet = async (e = 0) => {
      if ((xlog('init_sheet start: ' + Module_sheet), void 0 === Module_sheet))
        try {
          bindCallback((Module_sheet = await importSheetEngineWorker()));
          var r = convertJsonObject(
              Module_sheet,
              Module_sheet.ccall('IGetEngineConfig', 'number', null)
            ),
            t = ((r.szLicenseKey = licenseKey), objToUTF8JsonStrPtrArr(Module_sheet, r));
          Module_sheet.ccall('ISetEngineConfig', null, ['number'], [t]), xlog('init_sheet end');
        } catch (e) {
          console.error('init_sheet Exception[' + e + ']');
        }
    },
    create_buffer = (e, r) => e._malloc(r),
    create_buffer_pair = (e, r) => [e._malloc(r), r],
    create_and_set_buffer = (e, r) => {
      var r = new Uint8Array(r),
        t = e._malloc(r.byteLength);
      return e.HEAPU8.set(r, t), [t, r.byteLength];
    },
    create_ptr_buffer = e => e._malloc(Int32Array.BYTES_PER_ELEMENT),
    create_ptr_buffers = (r, t) => {
      var o = [];
      for (let e = 0; e < t; ++e) o.push(r._malloc(Int32Array.BYTES_PER_ELEMENT));
      return o;
    },
    destroy_buffer = (e, r) => {
      e._free(r);
    },
    destroy_buffers = (r, ...e) => {
      e.forEach(e => r._free(e));
    },
    set_buffer = (e, r, t) => {
      e.HEAPU8.set(r, t);
    },
    get_buffer = (e, r) => e.HEAP32[r / Int32Array.BYTES_PER_ELEMENT],
    get_buffers = (r, ...e) => {
      let t = [];
      return e.forEach(e => t.push(r.HEAP32[e / Int32Array.BYTES_PER_ELEMENT])), t;
    },
    ResultImageProcess = (e, r, t, o) => {
      xlog(
        `ResultImageProcess data:${r.data}, bufferSize:${r.bufferSize}, count:${r.count}, outputExtension:` +
          r.outputExtension
      );
      let n;
      var a;
      r.data &&
        0 < r.bufferSize &&
        ((a = convertHEAPU8(e, r.data, r.bufferWidth * r.bufferHeight * 4)),
        (n = new Uint8ClampedArray(a)),
        destroy_buffer(e, r.data),
        (r.data = void 0)),
        xlog(
          'self.postMessage event: ' +
            t +
            ', fileName: ' +
            o.fileName +
            ', thumbnailBuffer: ' +
            typeof n +
            ', bufferWidth: ' +
            r.bufferWidth +
            ', bufferHeight: ' +
            r.bufferHeight
        ),
        self.postMessage({
          event: t,
          data: {
            complete: !0,
            result: n ? 1 : 0,
            fileName: o.fileName,
            thumbnailBuffer: n,
            bufferWidth: r.bufferWidth,
            bufferHeight: r.bufferHeight,
          },
        });
    },
    IPoGetFirstThumbnail = (e, r, t, o) => {
      var [n, a] = create_and_set_buffer(e, r.fileBuffer),
        l = (xlog('IPoGetFirstThumbnail [' + r.fileName + '],[' + n + '],[' + a + ']'), {});
      try {
        var E = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          s = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          u = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT),
          i = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          c = e._malloc(Int32Array.BYTES_PER_ELEMENT);
        (l.data = e.ccall(
          'IPoGetFirstThumbnail',
          'number',
          [
            'string',
            'number',
            'number',
            'string',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
          ],
          [r.fileName, n, a, r.userPassword, t, o, E, s, u, i, c]
        )),
          (l.bufferSize = e.HEAP32[E / Int32Array.BYTES_PER_ELEMENT]),
          (l.count = e.HEAP32[s / Int32Array.BYTES_PER_ELEMENT]),
          (l.outputExtension = e.UTF8ToString(u, 8)),
          (l.bufferWidth = e.HEAP32[i / Int32Array.BYTES_PER_ELEMENT]),
          (l.bufferHeight = e.HEAP32[c / Int32Array.BYTES_PER_ELEMENT]),
          e._free(E),
          e._free(s),
          e._free(u),
          e._free(i),
          e._free(c),
          e._free(n);
      } catch (e) {
        console.error(e);
        console.error('IPoGetFirstThumbnail Exception[' + e + ']');
      }
      return l;
    },
    ResultProcess = (e, r, t, o) => {
      xlog(
        'self.postMessage event: ' +
          t +
          ', fileName: ' +
          o.fileName +
          ', totalPage: ' +
          r.totalPage +
          ', openError: ' +
          r.openError +
          ', lockedDocument: ' +
          r.lockedDocument
      ),
        self.postMessage({
          event: t,
          data: {
            complete: !0,
            result: r ? 1 : 0,
            fileName: o.fileName,
            totalPage: r.totalPage,
            openError: r.openError,
            lockedDocument: r.lockedDocument,
          },
        });
    },
    IPoGetFileInfo = (e, r) => {
      var t = {};
      try {
        var [o, n] = create_and_set_buffer(e, r.fileBuffer),
          a =
            (xlog('IPoGetFileInfo [' + r.fileName + '],[' + o + '],[' + n + ']'),
            e._malloc(Int32Array.BYTES_PER_ELEMENT)),
          l = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          E = e._malloc(Int32Array.BYTES_PER_ELEMENT);
        (t.ret = e.ccall(
          'IPoGetFileInfo',
          'number',
          ['string', 'number', 'number', 'string', 'number', 'number', 'number'],
          [r.fileName, o, n, r.userPassword, a, l, E]
        )),
          (t.totalPage = e.HEAP32[a / Int32Array.BYTES_PER_ELEMENT]),
          (t.openError = e.HEAP32[l / Int32Array.BYTES_PER_ELEMENT]),
          (t.lockedDocument = e.HEAP32[E / Int32Array.BYTES_PER_ELEMENT]),
          e._free(a),
          e._free(l),
          e._free(E),
          e._free(o);
      } catch (e) {
        console.error('IPoGetFileInfo Exception[' + e + ']');
      }
      return t;
    },
    ResultDataProcess = (e, r, t, o) => {
      let n;
      r.data && (n = convertBlob(e, r.data, r.bufferSize)),
        xlog(
          'self.postMessage event: ' +
            t +
            ', count: ' +
            r.count +
            ', fileName: ' +
            o.fileName +
            ', resultData: ' +
            n +
            ', outputExtension: ' +
            r.outputExtension
        ),
        self.postMessage({
          event: t,
          data: {
            complete: !0,
            result: 0 < r.count ? 1 : 0,
            fileName: o.fileName,
            resultData: n,
            resultExt: r.outputExtension,
            count: r.count,
            size: r.bufferSize,
          },
        }),
        destroy_buffer(e, r.data);
    },
    IPoDocumenttoImage = (e, r, t, o) => {
      var n = {};
      try {
        var [a, l] = create_and_set_buffer(e, r.fileBuffer),
          E =
            (xlog(
              'IPoDocumenttoImage [' +
                r.fileName +
                '],[' +
                a +
                '],[' +
                l +
                '] exportOptions:' +
                t +
                ', outputLevel:' +
                o
            ),
            e._malloc(Int32Array.BYTES_PER_ELEMENT)),
          s = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          u = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (n.data = e.ccall(
          'IPoDocumenttoImage',
          'number',
          [
            'string',
            'number',
            'number',
            'string',
            'number',
            'number',
            'number',
            'number',
            'number',
          ],
          [r.fileName, a, l, r.userPassword, t, o, E, s, u]
        )),
          xlog('IPoDocumenttoImage check1'),
          (n.bufferSize = e.HEAP32[E / Int32Array.BYTES_PER_ELEMENT]),
          (n.count = e.HEAP32[s / Int32Array.BYTES_PER_ELEMENT]),
          (n.outputExtension = e.UTF8ToString(u, 8)),
          e._free(E),
          e._free(s),
          e._free(u),
          e._free(a);
      } catch (e) {
        console.error('IPoDocumenttoImage Exception[' + e + ']');
      }
      return n;
    },
    IPoCompressPDF = (e, r, t) => {
      var o = {};
      try {
        var [n, a] = create_and_set_buffer(e, r.fileBuffer),
          l =
            (xlog('IPoCompressPDF [' + r.fileName + '],[' + n + '],[' + a + ']'),
            e._malloc(Int32Array.BYTES_PER_ELEMENT)),
          E = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          s = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (o.data = e.ccall(
          'IPoCompressPDF',
          'number',
          ['string', 'number', 'number', 'string', 'number', 'number', 'number', 'number'],
          [r.fileName, n, a, r.userPassword, t, l, E, s]
        )),
          (o.bufferSize = e.HEAP32[l / Int32Array.BYTES_PER_ELEMENT]),
          (o.count = e.HEAP32[E / Int32Array.BYTES_PER_ELEMENT]),
          (o.outputExtension = e.UTF8ToString(s, 8)),
          e._free(l),
          e._free(E),
          e._free(s),
          e._free(n);
      } catch (e) {
        console.error('IPoCompressPDF Exception[' + e + ']');
      }
      return o;
    },
    IPoProtectPDF = (e, r, t, o) => {
      var [n, a] = create_and_set_buffer(e, r.fileBuffer),
        l = (xlog('IPoProtectPDF [' + r.fileName + '],[' + n + '],[' + a + ']'), {});
      try {
        var E = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          s = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          u = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (l.data = e.ccall(
          'IPoProtectPDF',
          'number',
          [
            'string',
            'number',
            'number',
            'string',
            'string',
            'string',
            'number',
            'number',
            'number',
          ],
          [r.fileName, n, a, r.userPassword, t, o, E, s, u]
        )),
          (l.bufferSize = e.HEAP32[E / Int32Array.BYTES_PER_ELEMENT]),
          (l.count = e.HEAP32[s / Int32Array.BYTES_PER_ELEMENT]),
          (l.outputExtension = e.UTF8ToString(u, 8)),
          e._free(E),
          e._free(s),
          e._free(u),
          e._free(n);
      } catch (e) {
        console.error('IPoProtectPDF Exception[' + e + ']');
      }
      return l;
    },
    IPoUnlockPDF = (e, r) => {
      var t = {};
      try {
        var [o, n] = create_and_set_buffer(e, r.fileBuffer),
          a =
            (xlog('IPoUnlockPDF [' + r.fileName + '],[' + o + '],[' + n + ']'),
            e._malloc(Int32Array.BYTES_PER_ELEMENT)),
          l = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          E = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (t.data = e.ccall(
          'IPoUnlockPDF',
          'number',
          ['string', 'number', 'number', 'string', 'number', 'number', 'number'],
          [r.fileName, o, n, r.userPassword, a, l, E]
        )),
          (t.bufferSize = e.HEAP32[a / Int32Array.BYTES_PER_ELEMENT]),
          (t.count = e.HEAP32[l / Int32Array.BYTES_PER_ELEMENT]),
          (t.outputExtension = e.UTF8ToString(E, 8)),
          e._free(a),
          e._free(l),
          e._free(E),
          e._free(o);
      } catch (e) {
        console.error('IPoUnlockPDF Exception[' + e + ']');
      }
      return t;
    },
    IPoAddFileForMerge = (e, r) => {
      let t = null;
      try {
        var [o, n] = create_and_set_buffer(e, r.fileBuffer);
        xlog('IPoAddFileForMerge [' + r.fileName + '],[' + o + '],[' + n + ']'),
          (t = e.ccall(
            'IPoAddFileForMerge',
            'number',
            ['string', 'number', 'number', 'string'],
            [r.fileName, o, n, r.userPassword]
          )),
          destroy_buffer(e, o);
      } catch (e) {
        console.error('IPoAddFileForMerge Exception[' + e + ']');
      }
      return t;
    },
    IPoMergePDF = (e, r) => {
      var t = {};
      try {
        var [o, n] = create_and_set_buffer(e, r.fileBuffer),
          a =
            (xlog('IPoMergePDF [' + r.fileName + '],[' + o + '],[' + n + ']'),
            e._malloc(Int32Array.BYTES_PER_ELEMENT)),
          l = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          E = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (t.data = e.ccall(
          'IPoMergePDF',
          'number',
          ['string', 'number', 'number', 'string', 'number', 'number', 'number'],
          [r.fileName, o, n, r.userPassword, a, l, E]
        )),
          (t.bufferSize = e.HEAP32[a / Int32Array.BYTES_PER_ELEMENT]),
          (t.count = e.HEAP32[l / Int32Array.BYTES_PER_ELEMENT]),
          (t.outputExtension = e.UTF8ToString(E, 8)),
          e._free(a),
          e._free(l),
          e._free(E),
          e._free(o);
      } catch (e) {
        console.error('IPoMergePDF Exception[' + e + ']');
      }
      return t;
    },
    IPoSplitPDF = (e, r, t) => {
      var o = {};
      try {
        var [n, a] = create_and_set_buffer(e, r.fileBuffer),
          l =
            (xlog('IPoSplitPDF [' + r.fileName + '],[' + n + '],[' + a + '],[' + t + ']'),
            e._malloc(Int32Array.BYTES_PER_ELEMENT)),
          E = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          s = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (o.data = e.ccall(
          'IPoSplitPDF',
          'number',
          ['string', 'number', 'number', 'string', 'number', 'number', 'number', 'number'],
          [r.fileName, n, a, r.userPassword, t, l, E, s]
        )),
          (o.bufferSize = e.HEAP32[l / Int32Array.BYTES_PER_ELEMENT]),
          (o.count = e.HEAP32[E / Int32Array.BYTES_PER_ELEMENT]),
          (o.outputExtension = e.UTF8ToString(s, 8)),
          e._free(l),
          e._free(E),
          e._free(s),
          e._free(n);
      } catch (e) {
        console.error('IPoSplitPDF Exception[' + e + ']');
      }
      return o;
    },
    IPoDocumentConverter = (e, r, t) => {
      var o = {};
      try {
        var [n, a] = create_and_set_buffer(e, r.fileBuffer),
          l =
            (xlog('IPoDocumentConverter [' + r.fileName + '],[' + n + '],[' + a + ']'),
            e._malloc(Int32Array.BYTES_PER_ELEMENT)),
          E = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          s = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (o.data = e.ccall(
          'IPoDocumentConverter',
          'number',
          ['string', 'number', 'number', 'string', 'string', 'number', 'number', 'number'],
          [r.fileName, n, a, r.userPassword, t, l, E, s]
        )),
          (o.bufferSize = e.HEAP32[l / Int32Array.BYTES_PER_ELEMENT]),
          (o.count = e.HEAP32[E / Int32Array.BYTES_PER_ELEMENT]),
          (o.outputExtension = e.UTF8ToString(s, 8)),
          e._free(l),
          e._free(E),
          e._free(s),
          e._free(n);
      } catch (e) {
        console.error('IPoDocumentConverter Exception[' + e + ']');
      }
      return o;
    },
    IPoShowReflowDocument = (e, r, t, o, n, a, l, E) => {
      var s = {};
      try {
        var u = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          i = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          c = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (s.data = e.ccall(
          'IPoShowReflowDocument',
          'number',
          [
            'string',
            'number',
            'number',
            'string',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
          ],
          [r, t, o, n, a, l, E, u, i, c]
        )),
          (s.bufferSize = e.HEAP32[u / Int32Array.BYTES_PER_ELEMENT]),
          (s.count = e.HEAP32[i / Int32Array.BYTES_PER_ELEMENT]),
          (s.outputExtension = e.UTF8ToString(c, 8)),
          e._free(u),
          e._free(i),
          e._free(c);
      } catch (e) {
        console.error('IPoShowReflowDocument Exception[' + e + ']');
      }
      return s;
    },
    IPoAddFileForImageToPDF = (e, r) => {
      let t = null;
      try {
        var [o, n] = create_and_set_buffer(e, r.fileBuffer);
        xlog('IPoAddFileForImageToPDF [' + r.fileName + '],[' + o + '],[' + n + ']'),
          (t = e.ccall(
            'IPoAddFileForImageToPDF',
            'number',
            ['string', 'number', 'number', 'string'],
            [r.fileName, o, n, r.userPassword]
          )),
          e._free(o);
      } catch (e) {
        console.error('IPoAddFileForImageToPDF Exception[' + e + ']');
      }
      return t;
    },
    IPoImageToPDF = (e, r, t, o) => {
      var n = {};
      try {
        xlog(`IPoImageToPDF fileName:${r.fileName}, papersize:${t}, papermargin:` + o);
        var a = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          l = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          E = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (n.data = e.ccall(
          'IPoImageToPDF',
          'number',
          ['string', 'number', 'number', 'number', 'number', 'number'],
          [r.fileName, t, o, a, l, E]
        )),
          (n.bufferSize = e.HEAP32[a / Int32Array.BYTES_PER_ELEMENT]),
          (n.count = e.HEAP32[l / Int32Array.BYTES_PER_ELEMENT]),
          (n.outputExtension = e.UTF8ToString(E, 8)),
          e._free(a),
          e._free(l),
          e._free(E);
      } catch (e) {
        console.error('IPoImageToPDF Exception[' + e + ']');
      }
      return n;
    },
    IPoImageConverter = (e, r, t, o) => {
      var n = {};
      try {
        var [a, l] = create_and_set_buffer(e, r.fileBuffer),
          E =
            (xlog('IPoImageConverter [' + r.fileName + '],[' + a + '],[' + l + ']'),
            e._malloc(Int32Array.BYTES_PER_ELEMENT)),
          s = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          u = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (n.data = e.ccall(
          'IPoImageConverter',
          'number',
          [
            'string',
            'number',
            'number',
            'string',
            'string',
            'number',
            'number',
            'number',
            'number',
          ],
          [r.fileName, a, l, r.userPassword, t, o, E, s, u]
        )),
          (n.bufferSize = e.HEAP32[E / Int32Array.BYTES_PER_ELEMENT]),
          (n.count = e.HEAP32[s / Int32Array.BYTES_PER_ELEMENT]),
          (n.outputExtension = e.UTF8ToString(u, 8)),
          e._free(E),
          e._free(s),
          e._free(u),
          e._free(a);
      } catch (e) {
        console.error('IPoImageConverter Exception[' + e + ']');
      }
      return n;
    },
    ResultThumbnailProcess = (e, r, t, o) => {
      r = void 0 !== r.count ? r.count : 0;
      xlog('self.postMessage event: ' + t + ', fileName: ' + o.fileName + ', count: ' + r),
        self.postMessage({
          event: t,
          data: {
            complete: !0,
            result: 0 < r ? 1 : 0,
            fileName: o.fileName,
            count: r,
          },
        });
    },
    IPoGetThumbnail = (e, r, t, o, n, a, l) => {
      var E = {};
      try {
        var [s, u] = create_and_set_buffer(e, r.fileBuffer),
          i =
            (xlog('IPoGetThumbnail [' + r.fileName + '],[' + s + '],[' + u + ']'),
            e._malloc(Int32Array.BYTES_PER_ELEMENT)),
          c = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          f = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (E.data = e.ccall(
          'IPoGetThumbnail',
          'number',
          [
            'string',
            'number',
            'number',
            'string',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
          ],
          [r.fileName, s, u, r.userPassword, t, o, n, a, l, i, c, f]
        )),
          (E.bufferSize = e.HEAP32[i / Int32Array.BYTES_PER_ELEMENT]),
          (E.count = e.HEAP32[c / Int32Array.BYTES_PER_ELEMENT]),
          (E.outputExtension = e.UTF8ToString(f, 8)),
          e._free(i),
          e._free(c),
          e._free(f),
          e._free(s);
      } catch (e) {
        console.error('IPoGetThumbnail Exception[' + e + ']');
      }
      return E;
    },
    IPoExtractContents = (e, r, t) => {
      var o = {};
      try {
        var [n, a] = create_and_set_buffer(e, r.fileBuffer),
          l =
            (xlog('IPoExtractContents [' + r.fileName + '],[' + n + '],[' + a + '],[' + t + ']'),
            e._malloc(Int32Array.BYTES_PER_ELEMENT)),
          E = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          s = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (o.data = e.ccall(
          'IPoExtractContents',
          'number',
          ['string', 'number', 'number', 'string', 'number', 'number', 'number', 'number'],
          [r.fileName, n, a, r.userPassword, t, l, E, s]
        )),
          xlog('IPoExtractContents check1'),
          (o.bufferSize = e.HEAP32[l / Int32Array.BYTES_PER_ELEMENT]),
          (o.count = e.HEAP32[E / Int32Array.BYTES_PER_ELEMENT]),
          (o.outputExtension = e.UTF8ToString(s, 8)),
          e._free(l),
          e._free(E),
          e._free(s),
          e._free(n);
      } catch (e) {
        console.error('IPoExtractContents Exception[' + e + ']');
      }
      return o;
    },
    IPoAddFileForMakeCover = (e, r, t) => {
      var o, n;
      try {
        null !== r &&
          (([o, n] = create_and_set_buffer(e, r)),
          xlog('IPoAddFileForMakeCover [' + o + '],[' + n + ']'),
          e.ccall(
            'IPoAddFileForMakeCover',
            '',
            ['string', 'number', 'number', 'number'],
            [null, o, n, t]
          ),
          e._free(o));
      } catch (e) {
        console.error('IPoAddFileForMakeCover Exception[' + e + ']');
      }
      return null;
    },
    IPoMakeCover = (e, r, t, o, n, a) => {
      var l = {};
      try {
        var [E, s] = create_and_set_buffer(e, r.fileBuffer),
          u =
            (xlog(
              `IPoMakeCover fileName:${r.fileName}, firstPageEditMode:${t}, firstCoverFitOption:${o}, lastPageEditMode:${n}, lastCoverFitOption:` +
                a
            ),
            e._malloc(Int32Array.BYTES_PER_ELEMENT)),
          i = e._malloc(Int32Array.BYTES_PER_ELEMENT),
          c = e._malloc(8 * Int8Array.BYTES_PER_ELEMENT);
        (l.data = e.ccall(
          'IPoMakeCover',
          'number',
          [
            'string',
            'number',
            'number',
            'string',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
          ],
          ['.pdf', E, s, r.userPassword, t, o, n, a, u, i, c]
        )),
          (l.bufferSize = e.HEAP32[u / Int32Array.BYTES_PER_ELEMENT]),
          (l.count = e.HEAP32[i / Int32Array.BYTES_PER_ELEMENT]),
          (l.outputExtension = e.UTF8ToString(c, 8)),
          e._free(u),
          e._free(i),
          e._free(c),
          e._free(E);
      } catch (e) {
        console.error('IPoMakeCover Exception[' + e + ']');
      }
      return l;
    };
  self.addEventListener(
    'message',
    async function (e) {
      eventName = e.eventName;
      let args = e.data;
      switch (
        (xlog('MessageEvent eventName: ' + eventName),
        args.file && (fileName = args.file.fileName),
        eventName)
      ) {
        case 'Start_pdf':
          (pohostname = args.hostname),
            await init_pdf(),
            (Module = Module_pdf)
              ? self.postMessage({
                  event: eventName,
                  data: {
                    complete: !0,
                    result: args.number,
                  },
                })
              : self.postMessage({
                  event: 'error',
                  data: {
                    result: args.number,
                  },
                });
          break;
        case 'Start_word':
          (pohostname = args.hostname),
            await init_word(),
            (Module = Module_word)
              ? self.postMessage({
                  event: eventName,
                  data: {
                    complete: !0,
                    result: args.number,
                  },
                })
              : self.postMessage({
                  event: 'error',
                  data: {
                    result: args.number,
                  },
                });
          self.emit('word_end');
          break;
        case 'Start_sheet':
          (pohostname = args.hostname),
            await init_sheet(),
            (Module = Module_sheet)
              ? self.postMessage({
                  event: eventName,
                  data: {
                    complete: !0,
                    result: args.number,
                  },
                })
              : self.postMessage({
                  event: 'error',
                  data: {
                    result: args.number,
                  },
                });
          break;
        case 'IPoGetFileInfo':
          var r = IPoGetFileInfo(Module, args.file);
          ResultProcess(Module, r, eventName, args.file);
          break;
        case 'IPoGetFirstThumbnail':
          r = IPoGetFirstThumbnail(Module, args.file, args.width, args.height);
          ResultImageProcess(Module, r, eventName, args.file);
          break;
        case 'IPoCompressPDF':
          r = IPoCompressPDF(Module, args.file, args.compressOptions);
          ResultDataProcess(Module, r, eventName, args.file);
          break;
        case 'IPoProtectPDF':
          r = IPoProtectPDF(Module, args.file, args.userPassword, args.ownerPassword);
          ResultDataProcess(Module, r, eventName, args.file);
          break;
        case 'IPoUnlockPDF':
          r = IPoUnlockPDF(Module, args.file);
          ResultDataProcess(Module, r, eventName, args.file);
          break;
        case 'IPoMergePDF':
          for (var t = 0; t < args.files.length; ++t) IPoAddFileForMerge(Module, args.files[t]);
          r = IPoMergePDF(Module, args.file);
          ResultDataProcess(Module, r, eventName, args.file);
          break;
        case 'IPoSplitPDF':
          r = IPoSplitPDF(Module, args.file, args.splitPageNum);
          ResultDataProcess(Module, r, eventName, args.file);
          break;
        case 'IPoDocumenttoImage':
          r = IPoDocumenttoImage(Module, args.file, args.exportOptions, args.outputLevel);
          ResultDataProcess(Module, r, eventName, args.file);
          break;
        case 'IPoImageConverter':
          r = IPoImageConverter(Module, args.file, args.extension, args.effectType);
          ResultDataProcess(Module, r, eventName, args.file);
          break;
        case 'IPoDocumentConverter':
          r = IPoDocumentConverter(Module, args.file, args.extension);
          ResultDataProcess(Module, r, eventName, args.file);
          break;
        case 'IPoImageToPDF':
          for (let e = 0; e < args.files.length; ++e)
            IPoAddFileForImageToPDF(Module, args.files[e]);
          r = IPoImageToPDF(Module, args.file, args.papersize, args.papermargin);
          ResultDataProcess(Module, r, eventName, args.file);
          break;
        case 'IPoGetThumbnail':
          r = IPoGetThumbnail(
            Module,
            args.file,
            args.thumbnailWidth,
            args.thumbnailHeight,
            args.allPages,
            args.thumbnailPage,
            args.pdfCoverMode
          );
          ResultThumbnailProcess(Module, r, eventName, args.file);
          break;
        case 'IPoExtractContents':
          r = IPoExtractContents(Module, args.file, args.extractionType);
          ResultDataProcess(Module, r, eventName, args.file);
          break;
        case 'IPoMakeCover':
          IPoAddFileForMakeCover(Module, args.firstCoverFile, !0),
            IPoAddFileForMakeCover(Module, args.lastCoverFile, !1);
          r = IPoMakeCover(
            Module,
            args.file,
            args.firstPageEditMode,
            args.firstCoverFitOption,
            args.lastPageEditMode,
            args.lastCoverFitOption
          );
          ResultDataProcess(Module, r, eventName, args.file);
      }
    },
    !1
  );

  /////////

  function start() {}

  class HwpX {
    static init() {
      return new Promise(resolve => {
        self.once('word_end', () => resolve());
        self.emit('message', {
          eventName: 'Start_word',
          data: { hostname: 'http://www.polarisofficetools.com' },
        });
      });
    }

    static toImage(buffer) {
      return new Promise(resolve => {
        self.once('end', async t => {
          const buffer = await t.arrayBuffer();
          return t;
        });
        const arg = {
          fileBuffer: buffer,
          fileName: 'hwp.hwp',
          functionComplete: false,
          hasPassword: false,
          lastModified: new Date(),
          lockedDocument: 0,
          openError: 1,
          outputCount: 0,
          outputExt: '',
          outputResult: -1,
          outputSize: 0,
          progressMessage: '',
          resultData: [],
          thumbnail: null,
          totalPage: 1,
          userPassword: '',
        };
        self.emit('message', {
          eventName: 'IPoDocumenttoImage',
          data: { file: arg, exportOptions: 16777221, outputLevel: 2 },
        });
      });
    }
  }

  module.exports = HwpX;
})();
