// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
            ? global
            : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})(
  {
    ldd0D: [
      function (require, module, exports, __globalThis) {
        var global = arguments[3];
        var HMR_HOST = null;
        var HMR_PORT = 1234;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = '42036d7a98ade5a7';
        var HMR_USE_SSE = false;
        module.bundle.HMR_BUNDLE_ID = '7f9075e73a2e9256';
        ('use strict');
        /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
        var OldModule = module.bundle.Module;
        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData[moduleName],
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function (fn) {
              this._acceptCallbacks.push(fn || function () {});
            },
            dispose: function (fn) {
              this._disposeCallbacks.push(fn);
            },
          };
          module.bundle.hotData[moduleName] = undefined;
        }
        module.bundle.Module = Module;
        module.bundle.hotData = {};
        var checkedAssets /*: {|[string]: boolean|} */,
          disposedAssets /*: {|[string]: boolean|} */,
          assetsToDispose /*: Array<[ParcelRequire, string]> */,
          assetsToAccept /*: Array<[ParcelRequire, string]> */;
        function getHostname() {
          return (
            HMR_HOST ||
            (location.protocol.indexOf('http') === 0
              ? location.hostname
              : 'localhost')
          );
        }
        function getPort() {
          return HMR_PORT || location.port;
        }
        // eslint-disable-next-line no-redeclare
        var parent = module.bundle.parent;
        if (
          (!parent || !parent.isParcelRequire) &&
          typeof WebSocket !== 'undefined'
        ) {
          var hostname = getHostname();
          var port = getPort();
          var protocol =
            HMR_SECURE ||
            (location.protocol == 'https:' &&
              !['localhost', '127.0.0.1', '0.0.0.0'].includes(hostname))
              ? 'wss'
              : 'ws';
          var ws;
          if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
          else
            try {
              ws = new WebSocket(
                protocol + '://' + hostname + (port ? ':' + port : '') + '/'
              );
            } catch (err) {
              if (err.message) console.error(err.message);
              ws = {};
            }
          // Web extension context
          var extCtx =
            typeof browser === 'undefined'
              ? typeof chrome === 'undefined'
                ? null
                : chrome
              : browser;
          // Safari doesn't support sourceURL in error stacks.
          // eval may also be disabled via CSP, so do a quick check.
          var supportsSourceURL = false;
          try {
            (0, eval)('throw new Error("test"); //# sourceURL=test.js');
          } catch (err) {
            supportsSourceURL = err.stack.includes('test.js');
          }
          // $FlowFixMe
          ws.onmessage = async function (event /*: {data: string, ...} */) {
            checkedAssets = {} /*: {|[string]: boolean|} */;
            disposedAssets = {} /*: {|[string]: boolean|} */;
            assetsToAccept = [];
            assetsToDispose = [];
            var data /*: HMRMessage */ = JSON.parse(event.data);
            if (data.type === 'reload') fullReload();
            else if (data.type === 'update') {
              // Remove error overlay if there is one
              if (typeof document !== 'undefined') removeErrorOverlay();
              let assets = data.assets.filter(
                (asset) => asset.envHash === HMR_ENV_HASH
              );
              // Handle HMR Update
              let handled = assets.every((asset) => {
                return (
                  asset.type === 'css' ||
                  (asset.type === 'js' &&
                    hmrAcceptCheck(
                      module.bundle.root,
                      asset.id,
                      asset.depsByBundle
                    ))
                );
              });
              if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (
                  typeof window !== 'undefined' &&
                  typeof CustomEvent !== 'undefined'
                )
                  window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for (let i = 0; i < assetsToAccept.length; i++) {
                  let id = assetsToAccept[i][1];
                  if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                  }
                }
              } else fullReload();
            }
            if (data.type === 'error') {
              // Log parcel errors to console
              for (let ansiDiagnostic of data.diagnostics.ansi) {
                let stack = ansiDiagnostic.codeframe
                  ? ansiDiagnostic.codeframe
                  : ansiDiagnostic.stack;
                console.error(
                  '\uD83D\uDEA8 [parcel]: ' +
                    ansiDiagnostic.message +
                    '\n' +
                    stack +
                    '\n\n' +
                    ansiDiagnostic.hints.join('\n')
                );
              }
              if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
              }
            }
          };
          if (ws instanceof WebSocket) {
            ws.onerror = function (e) {
              if (e.message) console.error(e.message);
            };
            ws.onclose = function () {
              console.warn(
                '[parcel] \uD83D\uDEA8 Connection to the HMR server was lost'
              );
            };
          }
        }
        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);
          if (overlay) {
            overlay.remove();
            console.log('[parcel] \u2728 Error resolved');
          }
        }
        function createErrorOverlay(diagnostics) {
          var overlay = document.createElement('div');
          overlay.id = OVERLAY_ID;
          let errorHTML =
            '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
          for (let diagnostic of diagnostics) {
            let stack = diagnostic.frames.length
              ? diagnostic.frames.reduce((p, frame) => {
                  return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
                }, '')
              : diagnostic.stack;
            errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint) => '<div>\uD83D\uDCA1 ' + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
          }
          errorHTML += '</div>';
          overlay.innerHTML = errorHTML;
          return overlay;
        }
        function fullReload() {
          if ('reload' in location) location.reload();
          else if (extCtx && extCtx.runtime && extCtx.runtime.reload)
            extCtx.runtime.reload();
        }
        function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
          var modules = bundle.modules;
          if (!modules) return [];
          var parents = [];
          var k, d, dep;
          for (k in modules)
            for (d in modules[k][1]) {
              dep = modules[k][1][d];
              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              )
                parents.push([bundle, k]);
            }
          if (bundle.parent)
            parents = parents.concat(getParents(bundle.parent, id));
          return parents;
        }
        function updateLink(link) {
          var href = link.getAttribute('href');
          if (!href) return;
          var newLink = link.cloneNode();
          newLink.onload = function () {
            if (link.parentNode !== null)
              // $FlowFixMe
              link.parentNode.removeChild(link);
          };
          newLink.setAttribute(
            'href', // $FlowFixMe
            href.split('?')[0] + '?' + Date.now()
          );
          // $FlowFixMe
          link.parentNode.insertBefore(newLink, link.nextSibling);
        }
        var cssTimeout = null;
        function reloadCSS() {
          if (cssTimeout) return;
          cssTimeout = setTimeout(function () {
            var links = document.querySelectorAll('link[rel="stylesheet"]');
            for (var i = 0; i < links.length; i++) {
              // $FlowFixMe[incompatible-type]
              var href /*: string */ = links[i].getAttribute('href');
              var hostname = getHostname();
              var servedFromHMRServer =
                hostname === 'localhost'
                  ? new RegExp(
                      '^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' +
                        getPort()
                    ).test(href)
                  : href.indexOf(hostname + ':' + getPort());
              var absolute =
                /^https?:\/\//i.test(href) &&
                href.indexOf(location.origin) !== 0 &&
                !servedFromHMRServer;
              if (!absolute) updateLink(links[i]);
            }
            cssTimeout = null;
          }, 50);
        }
        function hmrDownload(asset) {
          if (asset.type === 'js') {
            if (typeof document !== 'undefined') {
              let script = document.createElement('script');
              script.src = asset.url + '?t=' + Date.now();
              if (asset.outputFormat === 'esmodule') script.type = 'module';
              return new Promise((resolve, reject) => {
                var _document$head;
                script.onload = () => resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null ||
                  _document$head === void 0 ||
                  _document$head.appendChild(script);
              });
            } else if (typeof importScripts === 'function') {
              // Worker scripts
              if (asset.outputFormat === 'esmodule')
                return import(asset.url + '?t=' + Date.now());
              else
                return new Promise((resolve, reject) => {
                  try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                  } catch (err) {
                    reject(err);
                  }
                });
            }
          }
        }
        async function hmrApplyUpdates(assets) {
          global.parcelHotUpdate = Object.create(null);
          let scriptsToRemove;
          try {
            // If sourceURL comments aren't supported in eval, we need to load
            // the update from the dev server over HTTP so that stack traces
            // are correct in errors/logs. This is much slower than eval, so
            // we only do it if needed (currently just Safari).
            // https://bugs.webkit.org/show_bug.cgi?id=137297
            // This path is also taken if a CSP disallows eval.
            if (!supportsSourceURL) {
              let promises = assets.map((asset) => {
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null ||
                  _hmrDownload === void 0
                  ? void 0
                  : _hmrDownload.catch((err) => {
                      // Web extension fix
                      if (
                        extCtx &&
                        extCtx.runtime &&
                        extCtx.runtime.getManifest().manifest_version == 3 &&
                        typeof ServiceWorkerGlobalScope != 'undefined' &&
                        global instanceof ServiceWorkerGlobalScope
                      ) {
                        extCtx.runtime.reload();
                        return;
                      }
                      throw err;
                    });
              });
              scriptsToRemove = await Promise.all(promises);
            }
            assets.forEach(function (asset) {
              hmrApply(module.bundle.root, asset);
            });
          } finally {
            delete global.parcelHotUpdate;
            if (scriptsToRemove)
              scriptsToRemove.forEach((script) => {
                if (script) {
                  var _document$head2;
                  (_document$head2 = document.head) === null ||
                    _document$head2 === void 0 ||
                    _document$head2.removeChild(script);
                }
              });
          }
        }
        function hmrApply(bundle /*: ParcelRequire */, asset /*:  HMRAsset */) {
          var modules = bundle.modules;
          if (!modules) return;
          if (asset.type === 'css') reloadCSS();
          else if (asset.type === 'js') {
            let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
            if (deps) {
              if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for (let dep in oldDeps)
                  if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                  }
              }
              if (supportsSourceURL)
                // Global eval. We would use `new Function` here but browser
                // support for source maps is better with eval.
                (0, eval)(asset.output);
              // $FlowFixMe
              let fn = global.parcelHotUpdate[asset.id];
              modules[asset.id] = [fn, deps];
            }
            // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
            // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
            if (bundle.parent) hmrApply(bundle.parent, asset);
          }
        }
        function hmrDelete(bundle, id) {
          let modules = bundle.modules;
          if (!modules) return;
          if (modules[id]) {
            // Collect dependencies that will become orphaned when this module is deleted.
            let deps = modules[id][1];
            let orphans = [];
            for (let dep in deps) {
              let parents = getParents(module.bundle.root, deps[dep]);
              if (parents.length === 1) orphans.push(deps[dep]);
            }
            // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
            delete modules[id];
            delete bundle.cache[id];
            // Now delete the orphans.
            orphans.forEach((id) => {
              hmrDelete(module.bundle.root, id);
            });
          } else if (bundle.parent) hmrDelete(bundle.parent, id);
        }
        function hmrAcceptCheck(
          bundle /*: ParcelRequire */,
          id /*: string */,
          depsByBundle /*: ?{ [string]: { [string]: string } }*/
        ) {
          if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
          // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
          let parents = getParents(module.bundle.root, id);
          let accepted = false;
          while (parents.length > 0) {
            let v = parents.shift();
            let a = hmrAcceptCheckOne(v[0], v[1], null);
            if (a)
              // If this parent accepts, stop traversing upward, but still consider siblings.
              accepted = true;
            else {
              // Otherwise, queue the parents in the next level upward.
              let p = getParents(module.bundle.root, v[1]);
              if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
              }
              parents.push(...p);
            }
          }
          return accepted;
        }
        function hmrAcceptCheckOne(
          bundle /*: ParcelRequire */,
          id /*: string */,
          depsByBundle /*: ?{ [string]: { [string]: string } }*/
        ) {
          var modules = bundle.modules;
          if (!modules) return;
          if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
            // If we reached the root bundle without finding where the asset should go,
            // there's nothing to do. Mark as "accepted" so we don't reload the page.
            if (!bundle.parent) return true;
            return hmrAcceptCheck(bundle.parent, id, depsByBundle);
          }
          if (checkedAssets[id]) return true;
          checkedAssets[id] = true;
          var cached = bundle.cache[id];
          assetsToDispose.push([bundle, id]);
          if (!cached || (cached.hot && cached.hot._acceptCallbacks.length)) {
            assetsToAccept.push([bundle, id]);
            return true;
          }
        }
        function hmrDisposeQueue() {
          // Dispose all old assets.
          for (let i = 0; i < assetsToDispose.length; i++) {
            let id = assetsToDispose[i][1];
            if (!disposedAssets[id]) {
              hmrDispose(assetsToDispose[i][0], id);
              disposedAssets[id] = true;
            }
          }
          assetsToDispose = [];
        }
        function hmrDispose(bundle /*: ParcelRequire */, id /*: string */) {
          var cached = bundle.cache[id];
          bundle.hotData[id] = {};
          if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
          if (cached && cached.hot && cached.hot._disposeCallbacks.length)
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData[id]);
            });
          delete bundle.cache[id];
        }
        function hmrAccept(bundle /*: ParcelRequire */, id /*: string */) {
          // Execute the module.
          bundle(id);
          // Run the accept callbacks in the new version of the module.
          var cached = bundle.cache[id];
          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            let assetsToAlsoAccept = [];
            cached.hot._acceptCallbacks.forEach(function (cb) {
              let additionalAssets = cb(function () {
                return getParents(module.bundle.root, id);
              });
              if (Array.isArray(additionalAssets) && additionalAssets.length)
                assetsToAlsoAccept.push(...additionalAssets);
            });
            if (assetsToAlsoAccept.length) {
              let handled = assetsToAlsoAccept.every(function (a) {
                return hmrAcceptCheck(a[0], a[1]);
              });
              if (!handled) return fullReload();
              hmrDisposeQueue();
            }
          }
        }
      },
      {},
    ],
    jrZjr: [
      function (require, module, exports, __globalThis) {
        var _webImmediateJs = require('core-js/modules/web.immediate.js');
        var _runtime = require('regenerator-runtime/runtime');
        var _alert = require('./alert');
        var _login = require('./login');
        var _settings = require('./settings');
        var _payment = require('./payment');
        var _firebaseClient = require('./firebase-client');
        var _booking = require('./booking');
        console.log(
          'hello from parcel, this is only a test, we will remove soodn'
        );
        // Notification
        (0, _firebaseClient.requestPermission)();
        // Others
        document.addEventListener('DOMContentLoaded', () => {
          // Login
          const loginForm = document.querySelector('.form');
          if (loginForm)
            loginForm.addEventListener('submit', (e) => {
              e.preventDefault();
              const email = document.getElementById('email').value;
              const password = document.getElementById('password').value;
              (0, _login.login)(email, password);
            });
          // Logout
          const logoutBtn = document.querySelector('.sidebar-link-logout');
          if (logoutBtn)
            logoutBtn.addEventListener('click', (0, _login.logout));
          // Update information
          const formUpdate = document.querySelector('.user-form');
          if (formUpdate)
            formUpdate.addEventListener('submit', (e) => {
              e.preventDefault();
              const name = document.getElementById('user_name').value;
              const email = document.getElementById('user_email').value;
              const phone = document.getElementById('user_phone').value;
              const date = document.getElementById('user_date').value;
              const new_date = new Date(date);
              const timestamp = new_date.toISOString();
              const userInfoElement = document.getElementById('user-info');
              const userId = userInfoElement.dataset.userId;
              (0, _settings.updateInfo)(userId, name, timestamp, email, phone);
            });
          // Booking_Summary
          const summarySelector = document.querySelector('.btn-warning');
          if (summarySelector)
            document
              .querySelector('.btn-warning')
              .addEventListener('click', async () => {
                // Check if user logged in or not
                const userInfoElement =
                  document.getElementById('user-information');
                const userId = userInfoElement.dataset.userId;
                // Validate check-in check-out
                const checkInDate = document.getElementById('checkIn').value;
                const checkOutDate = document.getElementById('checkOut').value;
                if (!userId)
                  (0, _alert.showAlert)(
                    'error',
                    'You must log in to make booking'
                  );
                else if (!checkInDate || !checkOutDate)
                  (0, _alert.showAlert)(
                    'error',
                    'Enter your check-in check-out date'
                  );
                else {
                  const pathSegments = window.location.pathname.split('/');
                  const roomId = pathSegments[pathSegments.length - 1];
                  const numberOfGuests =
                    document.querySelector('select.form-select').value;
                  const serviceCheckboxes = document.querySelectorAll(
                    '.service-checkbox:checked'
                  );
                  const serviceIds = Array.from(serviceCheckboxes).map(
                    (checkbox) => checkbox.dataset.serviceId
                  );
                  (0, _booking.createBooking)(
                    roomId,
                    userId,
                    checkInDate,
                    checkOutDate,
                    numberOfGuests,
                    serviceIds
                  );
                }
              });
          // Update Info On Summary
          const urlParams = new URLSearchParams(window.location.search);
          const bookingId = urlParams.get('bookingId');
          if (bookingId) (0, _booking.updateBookingSummary)(bookingId);
          // Payment
          const bookingSummary = document.querySelector('.booking-summary');
          if (bookingSummary)
            document
              .querySelector('.btn-book')
              .addEventListener('click', async () => {
                if (bookingId) {
                  const total_amount_text =
                    document.getElementById('total-price').textContent;
                  const total_amount =
                    parseFloat(total_amount_text.replace('$', '')) || 0;
                  (0, _payment.createPayment)(bookingId, total_amount);
                }
              });
          // Apply discount
          const discountInput = document.querySelector('.discount-field input');
          const applyButton = document.querySelector('.discount-field button');
          if (discountInput && applyButton)
            applyButton.addEventListener('click', () => {
              const discountCode = discountInput.value.trim();
              if (discountCode === '') {
                (0, _alert.showAlert)('error', 'Please enter a discount code.');
                return;
              }
              (0, _booking.getDiscount)(discountCode);
            });
        });
      },
      {
        'core-js/modules/web.immediate.js': 'gk4Ce',
        'regenerator-runtime/runtime': '3NN7Q',
        './login': 'b0yho',
        './settings': 'lj9xh',
        './alert': 'cixZ4',
        './booking': '52Ktj',
        './payment': 'gd1cm',
        './firebase-client': '2W2Tb',
      },
    ],
    gk4Ce: [
      function (require, module, exports, __globalThis) {
        'use strict';
        // TODO: Remove this module from `core-js@4` since it's split to modules listed below
        require('52e9b3eefbbce1ed');
        require('292fa64716f5b39e');
      },
      { '52e9b3eefbbce1ed': 'C7Nrh', '292fa64716f5b39e': 'alanE' },
    ],
    C7Nrh: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var $ = require('79389288a80b279c');
        var globalThis = require('e4d64249a0133d14');
        var clearImmediate = require('84ba5ca62b8b14c9').clear;
        // `clearImmediate` method
        // http://w3c.github.io/setImmediate/#si-clearImmediate
        $(
          {
            global: true,
            bind: true,
            enumerable: true,
            forced: globalThis.clearImmediate !== clearImmediate,
          },
          {
            clearImmediate: clearImmediate,
          }
        );
      },
      {
        '79389288a80b279c': 'cGglx',
        e4d64249a0133d14: 'LtKuC',
        '84ba5ca62b8b14c9': 'kmXjo',
      },
    ],
    cGglx: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var globalThis = require('23dea28abc8414d1');
        var getOwnPropertyDescriptor = require('2ec751f39e500b85').f;
        var createNonEnumerableProperty = require('b4567636b28a3b3a');
        var defineBuiltIn = require('50460aa43dd4048a');
        var defineGlobalProperty = require('581238c99f8c2c30');
        var copyConstructorProperties = require('566a383894c688bc');
        var isForced = require('f0e2e697f04e8ad9');
        /*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function (options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key, targetProperty, sourceProperty, descriptor;
          if (GLOBAL) target = globalThis;
          else if (STATIC)
            target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
          else target = globalThis[TARGET] && globalThis[TARGET].prototype;
          if (target)
            for (key in source) {
              sourceProperty = source[key];
              if (options.dontCallGetSet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
              } else targetProperty = target[key];
              FORCED = isForced(
                GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key,
                options.forced
              );
              // contained in target
              if (!FORCED && targetProperty !== undefined) {
                if (typeof sourceProperty == typeof targetProperty) continue;
                copyConstructorProperties(sourceProperty, targetProperty);
              }
              // add a flag to not completely full polyfills
              if (options.sham || (targetProperty && targetProperty.sham))
                createNonEnumerableProperty(sourceProperty, 'sham', true);
              defineBuiltIn(target, key, sourceProperty, options);
            }
        };
      },
      {
        '23dea28abc8414d1': 'LtKuC',
        '2ec751f39e500b85': 'jJXqI',
        b4567636b28a3b3a: 'h2rVd',
        '50460aa43dd4048a': '8DeCa',
        '581238c99f8c2c30': '4JVya',
        '566a383894c688bc': 'gv8Ye',
        f0e2e697f04e8ad9: '11yHu',
      },
    ],
    LtKuC: [
      function (require, module, exports, __globalThis) {
        var global = arguments[3];
        ('use strict');
        var check = function (it) {
          return it && it.Math === Math && it;
        };
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports = // eslint-disable-next-line es/no-global-this -- safe
          check(typeof globalThis == 'object' && globalThis) ||
          check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
          check(typeof self == 'object' && self) ||
          check(typeof global == 'object' && global) ||
          check(typeof this == 'object' && this) || // eslint-disable-next-line no-new-func -- fallback
          (function () {
            return this;
          })() ||
          Function('return this')();
      },
      {},
    ],
    jJXqI: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var DESCRIPTORS = require('c04e6fb248689dba');
        var call = require('553ec943aa2a4554');
        var propertyIsEnumerableModule = require('bbc5e69071aa2fbd');
        var createPropertyDescriptor = require('1d2ffbfd99e01f41');
        var toIndexedObject = require('c4ea69a78a643d87');
        var toPropertyKey = require('8ab18ff766aa2ab9');
        var hasOwn = require('3761c5d34b7aa48f');
        var IE8_DOM_DEFINE = require('c4dfcc26308f1b4a');
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
        exports.f = DESCRIPTORS
          ? $getOwnPropertyDescriptor
          : function getOwnPropertyDescriptor(O, P) {
              O = toIndexedObject(O);
              P = toPropertyKey(P);
              if (IE8_DOM_DEFINE)
                try {
                  return $getOwnPropertyDescriptor(O, P);
                } catch (error) {}
              if (hasOwn(O, P))
                return createPropertyDescriptor(
                  !call(propertyIsEnumerableModule.f, O, P),
                  O[P]
                );
            };
      },
      {
        c04e6fb248689dba: '5CwDw',
        '553ec943aa2a4554': 'bPpgF',
        bbc5e69071aa2fbd: 'cE23g',
        '1d2ffbfd99e01f41': 'joCN1',
        c4ea69a78a643d87: 'jp6pl',
        '8ab18ff766aa2ab9': '4hClg',
        '3761c5d34b7aa48f': '8W3U6',
        c4dfcc26308f1b4a: 'if9hw',
      },
    ],
    '5CwDw': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var fails = require('735b783268fd06c0');
        // Detect IE8's incomplete defineProperty implementation
        module.exports = !fails(function () {
          // eslint-disable-next-line es/no-object-defineproperty -- required for testing
          return (
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1] !== 7
          );
        });
      },
      { '735b783268fd06c0': '14S5e' },
    ],
    '14S5e': [
      function (require, module, exports, __globalThis) {
        'use strict';
        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };
      },
      {},
    ],
    bPpgF: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var NATIVE_BIND = require('44e025d030d66023');
        var call = Function.prototype.call;
        // eslint-disable-next-line es/no-function-prototype-bind -- safe
        module.exports = NATIVE_BIND
          ? call.bind(call)
          : function () {
              return call.apply(call, arguments);
            };
      },
      { '44e025d030d66023': '7Wv4Q' },
    ],
    '7Wv4Q': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var fails = require('2642aa7619056f20');
        module.exports = !fails(function () {
          // eslint-disable-next-line es/no-function-prototype-bind -- safe
          var test = function () {}.bind();
          // eslint-disable-next-line no-prototype-builtins -- safe
          return typeof test != 'function' || test.hasOwnProperty('prototype');
        });
      },
      { '2642aa7619056f20': '14S5e' },
    ],
    cE23g: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var $propertyIsEnumerable = {}.propertyIsEnumerable;
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        // Nashorn ~ JDK8 bug
        var NASHORN_BUG =
          getOwnPropertyDescriptor &&
          !$propertyIsEnumerable.call(
            {
              1: 2,
            },
            1
          );
        // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
        exports.f = NASHORN_BUG
          ? function propertyIsEnumerable(V) {
              var descriptor = getOwnPropertyDescriptor(this, V);
              return !!descriptor && descriptor.enumerable;
            }
          : $propertyIsEnumerable;
      },
      {},
    ],
    joCN1: [
      function (require, module, exports, __globalThis) {
        'use strict';
        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value,
          };
        };
      },
      {},
    ],
    jp6pl: [
      function (require, module, exports, __globalThis) {
        'use strict';
        // toObject with fallback for non-array-like ES3 strings
        var IndexedObject = require('9d8f8f50ac9468eb');
        var requireObjectCoercible = require('f7224aed72953ac4');
        module.exports = function (it) {
          return IndexedObject(requireObjectCoercible(it));
        };
      },
      { '9d8f8f50ac9468eb': '9pOPs', f7224aed72953ac4: '47173' },
    ],
    '9pOPs': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var uncurryThis = require('7ba7e65983d7b662');
        var fails = require('df551e12a7c872dd');
        var classof = require('1d34ea813cebff9c');
        var $Object = Object;
        var split = uncurryThis(''.split);
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        module.exports = fails(function () {
          // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
          // eslint-disable-next-line no-prototype-builtins -- safe
          return !$Object('z').propertyIsEnumerable(0);
        })
          ? function (it) {
              return classof(it) === 'String' ? split(it, '') : $Object(it);
            }
          : $Object;
      },
      {
        '7ba7e65983d7b662': '52pkE',
        df551e12a7c872dd: '14S5e',
        '1d34ea813cebff9c': 'lOVSf',
      },
    ],
    '52pkE': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var NATIVE_BIND = require('829dd7a4e960cf9e');
        var FunctionPrototype = Function.prototype;
        var call = FunctionPrototype.call;
        // eslint-disable-next-line es/no-function-prototype-bind -- safe
        var uncurryThisWithBind =
          NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
        module.exports = NATIVE_BIND
          ? uncurryThisWithBind
          : function (fn) {
              return function () {
                return call.apply(fn, arguments);
              };
            };
      },
      { '829dd7a4e960cf9e': '7Wv4Q' },
    ],
    lOVSf: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var uncurryThis = require('1c71c3f6daac476c');
        var toString = uncurryThis({}.toString);
        var stringSlice = uncurryThis(''.slice);
        module.exports = function (it) {
          return stringSlice(toString(it), 8, -1);
        };
      },
      { '1c71c3f6daac476c': '52pkE' },
    ],
    47173: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var isNullOrUndefined = require('74607922ed30019f');
        var $TypeError = TypeError;
        // `RequireObjectCoercible` abstract operation
        // https://tc39.es/ecma262/#sec-requireobjectcoercible
        module.exports = function (it) {
          if (isNullOrUndefined(it))
            throw new $TypeError("Can't call method on " + it);
          return it;
        };
      },
      { '74607922ed30019f': '9gDaT' },
    ],
    '9gDaT': [
      function (require, module, exports, __globalThis) {
        'use strict';
        // we can't use just `it == null` since of `document.all` special case
        // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
        module.exports = function (it) {
          return it === null || it === undefined;
        };
      },
      {},
    ],
    '4hClg': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var toPrimitive = require('53a3a67ac381c4e8');
        var isSymbol = require('b992ca9cdcf7937b');
        // `ToPropertyKey` abstract operation
        // https://tc39.es/ecma262/#sec-topropertykey
        module.exports = function (argument) {
          var key = toPrimitive(argument, 'string');
          return isSymbol(key) ? key : key + '';
        };
      },
      { '53a3a67ac381c4e8': 'jZGNg', b992ca9cdcf7937b: 'cRVWa' },
    ],
    jZGNg: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var call = require('70235907dc93b4b0');
        var isObject = require('46fb53dace408c8e');
        var isSymbol = require('677bdc4d74d2f983');
        var getMethod = require('80395bcde336a28b');
        var ordinaryToPrimitive = require('49552a7324952190');
        var wellKnownSymbol = require('aea01c71276624bf');
        var $TypeError = TypeError;
        var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
        // `ToPrimitive` abstract operation
        // https://tc39.es/ecma262/#sec-toprimitive
        module.exports = function (input, pref) {
          if (!isObject(input) || isSymbol(input)) return input;
          var exoticToPrim = getMethod(input, TO_PRIMITIVE);
          var result;
          if (exoticToPrim) {
            if (pref === undefined) pref = 'default';
            result = call(exoticToPrim, input, pref);
            if (!isObject(result) || isSymbol(result)) return result;
            throw new $TypeError("Can't convert object to primitive value");
          }
          if (pref === undefined) pref = 'number';
          return ordinaryToPrimitive(input, pref);
        };
      },
      {
        '70235907dc93b4b0': 'bPpgF',
        '46fb53dace408c8e': '2ojj0',
        '677bdc4d74d2f983': 'cRVWa',
        '80395bcde336a28b': 'gkcLL',
        '49552a7324952190': '5KiHA',
        aea01c71276624bf: 'a4guT',
      },
    ],
    '2ojj0': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var isCallable = require('f87cee1cb79cbcca');
        module.exports = function (it) {
          return typeof it == 'object' ? it !== null : isCallable(it);
        };
      },
      { f87cee1cb79cbcca: 'e7WAC' },
    ],
    e7WAC: [
      function (require, module, exports, __globalThis) {
        'use strict';
        // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
        var documentAll = typeof document == 'object' && document.all;
        // `IsCallable` abstract operation
        // https://tc39.es/ecma262/#sec-iscallable
        // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
        module.exports =
          typeof documentAll == 'undefined' && documentAll !== undefined
            ? function (argument) {
                return (
                  typeof argument == 'function' || argument === documentAll
                );
              }
            : function (argument) {
                return typeof argument == 'function';
              };
      },
      {},
    ],
    cRVWa: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var getBuiltIn = require('6b6c481cdfb7df35');
        var isCallable = require('2af44fcbdbf14c83');
        var isPrototypeOf = require('76e903e830c40e7c');
        var USE_SYMBOL_AS_UID = require('7e2fe930b3598e22');
        var $Object = Object;
        module.exports = USE_SYMBOL_AS_UID
          ? function (it) {
              return typeof it == 'symbol';
            }
          : function (it) {
              var $Symbol = getBuiltIn('Symbol');
              return (
                isCallable($Symbol) &&
                isPrototypeOf($Symbol.prototype, $Object(it))
              );
            };
      },
      {
        '6b6c481cdfb7df35': '1MXOC',
        '2af44fcbdbf14c83': 'e7WAC',
        '76e903e830c40e7c': '3xyiH',
        '7e2fe930b3598e22': '2M6uh',
      },
    ],
    '1MXOC': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var globalThis = require('e057fc33d60763c1');
        var isCallable = require('f1d62079325906cb');
        var aFunction = function (argument) {
          return isCallable(argument) ? argument : undefined;
        };
        module.exports = function (namespace, method) {
          return arguments.length < 2
            ? aFunction(globalThis[namespace])
            : globalThis[namespace] && globalThis[namespace][method];
        };
      },
      { e057fc33d60763c1: 'LtKuC', f1d62079325906cb: 'e7WAC' },
    ],
    '3xyiH': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var uncurryThis = require('83f14842ef67e16a');
        module.exports = uncurryThis({}.isPrototypeOf);
      },
      { '83f14842ef67e16a': '52pkE' },
    ],
    '2M6uh': [
      function (require, module, exports, __globalThis) {
        'use strict';
        /* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require('da4a972af0214ea0');
        module.exports =
          NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';
      },
      { da4a972af0214ea0: 'g3crD' },
    ],
    g3crD: [
      function (require, module, exports, __globalThis) {
        'use strict';
        /* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require('53b951dfb9de4d22');
        var fails = require('b37df495bcdc1d99');
        var globalThis = require('e5929e9affd2affc');
        var $String = globalThis.String;
        // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
        module.exports =
          !!Object.getOwnPropertySymbols &&
          !fails(function () {
            var symbol = Symbol('symbol detection');
            // Chrome 38 Symbol has incorrect toString conversion
            // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
            // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
            // of course, fail.
            return (
              !$String(symbol) ||
              !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
              (!Symbol.sham && V8_VERSION && V8_VERSION < 41)
            );
          });
      },
      {
        '53b951dfb9de4d22': 'hVwIp',
        b37df495bcdc1d99: '14S5e',
        e5929e9affd2affc: 'LtKuC',
      },
    ],
    hVwIp: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var globalThis = require('d049c1c2aa0eee5b');
        var userAgent = require('4eb5796bbafe334d');
        var process = globalThis.process;
        var Deno = globalThis.Deno;
        var versions = (process && process.versions) || (Deno && Deno.version);
        var v8 = versions && versions.v8;
        var match, version;
        if (v8) {
          match = v8.split('.');
          // in old Chrome, versions of V8 isn't V8 = Chrome / 10
          // but their correct versions are not interesting for us
          version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
        }
        // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
        // so check `userAgent` even if `.v8` exists, but 0
        if (!version && userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match) version = +match[1];
          }
        }
        module.exports = version;
      },
      { d049c1c2aa0eee5b: 'LtKuC', '4eb5796bbafe334d': 'leSSW' },
    ],
    leSSW: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var globalThis = require('888bcb4c75dc4ad');
        var navigator = globalThis.navigator;
        var userAgent = navigator && navigator.userAgent;
        module.exports = userAgent ? String(userAgent) : '';
      },
      { '888bcb4c75dc4ad': 'LtKuC' },
    ],
    gkcLL: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var aCallable = require('bbfed17b24e215f4');
        var isNullOrUndefined = require('492a86e2970f6a26');
        // `GetMethod` abstract operation
        // https://tc39.es/ecma262/#sec-getmethod
        module.exports = function (V, P) {
          var func = V[P];
          return isNullOrUndefined(func) ? undefined : aCallable(func);
        };
      },
      { bbfed17b24e215f4: 'e9LFe', '492a86e2970f6a26': '9gDaT' },
    ],
    e9LFe: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var isCallable = require('4094667126ecac05');
        var tryToString = require('fce2a7573db493fa');
        var $TypeError = TypeError;
        // `Assert: IsCallable(argument) is true`
        module.exports = function (argument) {
          if (isCallable(argument)) return argument;
          throw new $TypeError(tryToString(argument) + ' is not a function');
        };
      },
      { '4094667126ecac05': 'e7WAC', fce2a7573db493fa: '5PEIq' },
    ],
    '5PEIq': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var $String = String;
        module.exports = function (argument) {
          try {
            return $String(argument);
          } catch (error) {
            return 'Object';
          }
        };
      },
      {},
    ],
    '5KiHA': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var call = require('abe9ca006f56626e');
        var isCallable = require('c96b3a89fec6248a');
        var isObject = require('551615fda0214f1b');
        var $TypeError = TypeError;
        // `OrdinaryToPrimitive` abstract operation
        // https://tc39.es/ecma262/#sec-ordinarytoprimitive
        module.exports = function (input, pref) {
          var fn, val;
          if (
            pref === 'string' &&
            isCallable((fn = input.toString)) &&
            !isObject((val = call(fn, input)))
          )
            return val;
          if (
            isCallable((fn = input.valueOf)) &&
            !isObject((val = call(fn, input)))
          )
            return val;
          if (
            pref !== 'string' &&
            isCallable((fn = input.toString)) &&
            !isObject((val = call(fn, input)))
          )
            return val;
          throw new $TypeError("Can't convert object to primitive value");
        };
      },
      {
        abe9ca006f56626e: 'bPpgF',
        c96b3a89fec6248a: 'e7WAC',
        '551615fda0214f1b': '2ojj0',
      },
    ],
    a4guT: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var globalThis = require('ad5ef4474219c101');
        var shared = require('6a2cda01df6b4c79');
        var hasOwn = require('dccc28ffa5beeb54');
        var uid = require('48d6af1225853d44');
        var NATIVE_SYMBOL = require('9f762329148684');
        var USE_SYMBOL_AS_UID = require('1ce268781e409df2');
        var Symbol = globalThis.Symbol;
        var WellKnownSymbolsStore = shared('wks');
        var createWellKnownSymbol = USE_SYMBOL_AS_UID
          ? Symbol['for'] || Symbol
          : (Symbol && Symbol.withoutSetter) || uid;
        module.exports = function (name) {
          if (!hasOwn(WellKnownSymbolsStore, name))
            WellKnownSymbolsStore[name] =
              NATIVE_SYMBOL && hasOwn(Symbol, name)
                ? Symbol[name]
                : createWellKnownSymbol('Symbol.' + name);
          return WellKnownSymbolsStore[name];
        };
      },
      {
        ad5ef4474219c101: 'LtKuC',
        '6a2cda01df6b4c79': '9kVDz',
        dccc28ffa5beeb54: '8W3U6',
        '48d6af1225853d44': '9dyVP',
        '9f762329148684': 'g3crD',
        '1ce268781e409df2': '2M6uh',
      },
    ],
    '9kVDz': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var store = require('84eeed9891aafe14');
        module.exports = function (key, value) {
          return store[key] || (store[key] = value || {});
        };
      },
      { '84eeed9891aafe14': '497b6' },
    ],
    '497b6': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var IS_PURE = require('7b43004672b1879f');
        var globalThis = require('bc8329e77dc2c1cc');
        var defineGlobalProperty = require('dfb72a1d809f7b02');
        var SHARED = '__core-js_shared__';
        var store = (module.exports =
          globalThis[SHARED] || defineGlobalProperty(SHARED, {}));
        (store.versions || (store.versions = [])).push({
          version: '3.40.0',
          mode: IS_PURE ? 'pure' : 'global',
          copyright: '\xa9 2014-2025 Denis Pushkarev (zloirock.ru)',
          license: 'https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE',
          source: 'https://github.com/zloirock/core-js',
        });
      },
      {
        '7b43004672b1879f': 'lsmF7',
        bc8329e77dc2c1cc: 'LtKuC',
        dfb72a1d809f7b02: '4JVya',
      },
    ],
    lsmF7: [
      function (require, module, exports, __globalThis) {
        'use strict';
        module.exports = false;
      },
      {},
    ],
    '4JVya': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var globalThis = require('2d1c29655635b9ea');
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var defineProperty = Object.defineProperty;
        module.exports = function (key, value) {
          try {
            defineProperty(globalThis, key, {
              value: value,
              configurable: true,
              writable: true,
            });
          } catch (error) {
            globalThis[key] = value;
          }
          return value;
        };
      },
      { '2d1c29655635b9ea': 'LtKuC' },
    ],
    '8W3U6': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var uncurryThis = require('f5dcaa60a713971f');
        var toObject = require('ab17c4f45fcf0841');
        var hasOwnProperty = uncurryThis({}.hasOwnProperty);
        // `HasOwnProperty` abstract operation
        // https://tc39.es/ecma262/#sec-hasownproperty
        // eslint-disable-next-line es/no-object-hasown -- safe
        module.exports =
          Object.hasOwn ||
          function hasOwn(it, key) {
            return hasOwnProperty(toObject(it), key);
          };
      },
      { f5dcaa60a713971f: '52pkE', ab17c4f45fcf0841: 'iHtaV' },
    ],
    iHtaV: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var requireObjectCoercible = require('f45a7b5dcdc4a410');
        var $Object = Object;
        // `ToObject` abstract operation
        // https://tc39.es/ecma262/#sec-toobject
        module.exports = function (argument) {
          return $Object(requireObjectCoercible(argument));
        };
      },
      { f45a7b5dcdc4a410: '47173' },
    ],
    '9dyVP': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var uncurryThis = require('5da0fe4507da20a3');
        var id = 0;
        var postfix = Math.random();
        var toString = uncurryThis((1.0).toString);
        module.exports = function (key) {
          return (
            'Symbol(' +
            (key === undefined ? '' : key) +
            ')_' +
            toString(++id + postfix, 36)
          );
        };
      },
      { '5da0fe4507da20a3': '52pkE' },
    ],
    if9hw: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var DESCRIPTORS = require('9b4278b13c076bf');
        var fails = require('8aee5d88a5f9b6b5');
        var createElement = require('1db4d60148afcf21');
        // Thanks to IE8 for its funny defineProperty
        module.exports =
          !DESCRIPTORS &&
          !fails(function () {
            // eslint-disable-next-line es/no-object-defineproperty -- required for testing
            return (
              Object.defineProperty(createElement('div'), 'a', {
                get: function () {
                  return 7;
                },
              }).a !== 7
            );
          });
      },
      {
        '9b4278b13c076bf': '5CwDw',
        '8aee5d88a5f9b6b5': '14S5e',
        '1db4d60148afcf21': '56hI2',
      },
    ],
    '56hI2': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var globalThis = require('845bcece0e6d354');
        var isObject = require('824df78b2e007250');
        var document = globalThis.document;
        // typeof document.createElement is 'object' in old IE
        var EXISTS = isObject(document) && isObject(document.createElement);
        module.exports = function (it) {
          return EXISTS ? document.createElement(it) : {};
        };
      },
      { '845bcece0e6d354': 'LtKuC', '824df78b2e007250': '2ojj0' },
    ],
    h2rVd: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var DESCRIPTORS = require('a8753383ef98ee18');
        var definePropertyModule = require('189ab650b8f71085');
        var createPropertyDescriptor = require('1168c8162aa30435');
        module.exports = DESCRIPTORS
          ? function (object, key, value) {
              return definePropertyModule.f(
                object,
                key,
                createPropertyDescriptor(1, value)
              );
            }
          : function (object, key, value) {
              object[key] = value;
              return object;
            };
      },
      {
        a8753383ef98ee18: '5CwDw',
        '189ab650b8f71085': '4UcjI',
        '1168c8162aa30435': 'joCN1',
      },
    ],
    '4UcjI': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var DESCRIPTORS = require('ca50eb9163928400');
        var IE8_DOM_DEFINE = require('d482f9e5478795e8');
        var V8_PROTOTYPE_DEFINE_BUG = require('b6ad7537efb06f4b');
        var anObject = require('16365a73399e7fe7');
        var toPropertyKey = require('fab1d366c47796d9');
        var $TypeError = TypeError;
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var $defineProperty = Object.defineProperty;
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ENUMERABLE = 'enumerable';
        var CONFIGURABLE = 'configurable';
        var WRITABLE = 'writable';
        // `Object.defineProperty` method
        // https://tc39.es/ecma262/#sec-object.defineproperty
        exports.f = DESCRIPTORS
          ? V8_PROTOTYPE_DEFINE_BUG
            ? function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPropertyKey(P);
                anObject(Attributes);
                if (
                  typeof O === 'function' &&
                  P === 'prototype' &&
                  'value' in Attributes &&
                  WRITABLE in Attributes &&
                  !Attributes[WRITABLE]
                ) {
                  var current = $getOwnPropertyDescriptor(O, P);
                  if (current && current[WRITABLE]) {
                    O[P] = Attributes.value;
                    Attributes = {
                      configurable:
                        CONFIGURABLE in Attributes
                          ? Attributes[CONFIGURABLE]
                          : current[CONFIGURABLE],
                      enumerable:
                        ENUMERABLE in Attributes
                          ? Attributes[ENUMERABLE]
                          : current[ENUMERABLE],
                      writable: false,
                    };
                  }
                }
                return $defineProperty(O, P, Attributes);
              }
            : $defineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPropertyKey(P);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return $defineProperty(O, P, Attributes);
                } catch (error) {}
              if ('get' in Attributes || 'set' in Attributes)
                throw new $TypeError('Accessors not supported');
              if ('value' in Attributes) O[P] = Attributes.value;
              return O;
            };
      },
      {
        ca50eb9163928400: '5CwDw',
        d482f9e5478795e8: 'if9hw',
        b6ad7537efb06f4b: '6iMfY',
        '16365a73399e7fe7': 'aNKUg',
        fab1d366c47796d9: '4hClg',
      },
    ],
    '6iMfY': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var DESCRIPTORS = require('b22a5a2de93e3ad2');
        var fails = require('249a5b857c2dfccd');
        // V8 ~ Chrome 36-
        // https://bugs.chromium.org/p/v8/issues/detail?id=3334
        module.exports =
          DESCRIPTORS &&
          fails(function () {
            // eslint-disable-next-line es/no-object-defineproperty -- required for testing
            return (
              Object.defineProperty(function () {}, 'prototype', {
                value: 42,
                writable: false,
              }).prototype !== 42
            );
          });
      },
      { b22a5a2de93e3ad2: '5CwDw', '249a5b857c2dfccd': '14S5e' },
    ],
    aNKUg: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var isObject = require('2b6c6258a0a6082f');
        var $String = String;
        var $TypeError = TypeError;
        // `Assert: Type(argument) is Object`
        module.exports = function (argument) {
          if (isObject(argument)) return argument;
          throw new $TypeError($String(argument) + ' is not an object');
        };
      },
      { '2b6c6258a0a6082f': '2ojj0' },
    ],
    '8DeCa': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var isCallable = require('99ee13632b3fa68');
        var definePropertyModule = require('9ebb3e3004fccc0a');
        var makeBuiltIn = require('f10cc812a3094053');
        var defineGlobalProperty = require('d354802d852d9c2b');
        module.exports = function (O, key, value, options) {
          if (!options) options = {};
          var simple = options.enumerable;
          var name = options.name !== undefined ? options.name : key;
          if (isCallable(value)) makeBuiltIn(value, name, options);
          if (options.global) {
            if (simple) O[key] = value;
            else defineGlobalProperty(key, value);
          } else {
            try {
              if (!options.unsafe) delete O[key];
              else if (O[key]) simple = true;
            } catch (error) {}
            if (simple) O[key] = value;
            else
              definePropertyModule.f(O, key, {
                value: value,
                enumerable: false,
                configurable: !options.nonConfigurable,
                writable: !options.nonWritable,
              });
          }
          return O;
        };
      },
      {
        '99ee13632b3fa68': 'e7WAC',
        '9ebb3e3004fccc0a': '4UcjI',
        f10cc812a3094053: 'ceUVn',
        d354802d852d9c2b: '4JVya',
      },
    ],
    ceUVn: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var uncurryThis = require('ca84677f1ebd1804');
        var fails = require('13360f2842eba261');
        var isCallable = require('103e488c0928755a');
        var hasOwn = require('cbf9b0e0779cc368');
        var DESCRIPTORS = require('3f2eb7efeae2f72b');
        var CONFIGURABLE_FUNCTION_NAME =
          require('548b10f284264c72').CONFIGURABLE;
        var inspectSource = require('358f00f3103bd55b');
        var InternalStateModule = require('9b2ce14119fd2412');
        var enforceInternalState = InternalStateModule.enforce;
        var getInternalState = InternalStateModule.get;
        var $String = String;
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var defineProperty = Object.defineProperty;
        var stringSlice = uncurryThis(''.slice);
        var replace = uncurryThis(''.replace);
        var join = uncurryThis([].join);
        var CONFIGURABLE_LENGTH =
          DESCRIPTORS &&
          !fails(function () {
            return (
              defineProperty(function () {}, 'length', {
                value: 8,
              }).length !== 8
            );
          });
        var TEMPLATE = String(String).split('String');
        var makeBuiltIn = (module.exports = function (value, name, options) {
          if (stringSlice($String(name), 0, 7) === 'Symbol(')
            name =
              '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
          if (options && options.getter) name = 'get ' + name;
          if (options && options.setter) name = 'set ' + name;
          if (
            !hasOwn(value, 'name') ||
            (CONFIGURABLE_FUNCTION_NAME && value.name !== name)
          ) {
            if (DESCRIPTORS)
              defineProperty(value, 'name', {
                value: name,
                configurable: true,
              });
            else value.name = name;
          }
          if (
            CONFIGURABLE_LENGTH &&
            options &&
            hasOwn(options, 'arity') &&
            value.length !== options.arity
          )
            defineProperty(value, 'length', {
              value: options.arity,
            });
          try {
            if (
              options &&
              hasOwn(options, 'constructor') &&
              options.constructor
            ) {
              if (DESCRIPTORS)
                defineProperty(value, 'prototype', {
                  writable: false,
                });
            } else if (value.prototype) value.prototype = undefined;
          } catch (error) {}
          var state = enforceInternalState(value);
          if (!hasOwn(state, 'source'))
            state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
          return value;
        });
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        // eslint-disable-next-line no-extend-native -- required
        Function.prototype.toString = makeBuiltIn(function toString() {
          return (
            (isCallable(this) && getInternalState(this).source) ||
            inspectSource(this)
          );
        }, 'toString');
      },
      {
        ca84677f1ebd1804: '52pkE',
        '13360f2842eba261': '14S5e',
        '103e488c0928755a': 'e7WAC',
        cbf9b0e0779cc368: '8W3U6',
        '3f2eb7efeae2f72b': '5CwDw',
        '548b10f284264c72': 'cRNG5',
        '358f00f3103bd55b': '99icF',
        '9b2ce14119fd2412': 'N05sf',
      },
    ],
    cRNG5: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var DESCRIPTORS = require('8ad2bacb0e20b95c');
        var hasOwn = require('4eabfd8f83afc9d5');
        var FunctionPrototype = Function.prototype;
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
        var EXISTS = hasOwn(FunctionPrototype, 'name');
        // additional protection from minified / mangled / dropped function names
        var PROPER = EXISTS && function something() {}.name === 'something';
        var CONFIGURABLE =
          EXISTS &&
          (!DESCRIPTORS ||
            (DESCRIPTORS &&
              getDescriptor(FunctionPrototype, 'name').configurable));
        module.exports = {
          EXISTS: EXISTS,
          PROPER: PROPER,
          CONFIGURABLE: CONFIGURABLE,
        };
      },
      { '8ad2bacb0e20b95c': '5CwDw', '4eabfd8f83afc9d5': '8W3U6' },
    ],
    '99icF': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var uncurryThis = require('26e26db98367212e');
        var isCallable = require('40ed9a4f6ae66648');
        var store = require('485d48d6f4c6739e');
        var functionToString = uncurryThis(Function.toString);
        // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
        if (!isCallable(store.inspectSource))
          store.inspectSource = function (it) {
            return functionToString(it);
          };
        module.exports = store.inspectSource;
      },
      {
        '26e26db98367212e': '52pkE',
        '40ed9a4f6ae66648': 'e7WAC',
        '485d48d6f4c6739e': '497b6',
      },
    ],
    N05sf: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var NATIVE_WEAK_MAP = require('d3f0c9f3327b2fd6');
        var globalThis = require('28c3574d0c39fe7e');
        var isObject = require('f82e6cc0ac249fa5');
        var createNonEnumerableProperty = require('c0ae163eea4ef97');
        var hasOwn = require('6dea7358344877bb');
        var shared = require('3e035a1241da2f0');
        var sharedKey = require('88d6ccc27e779e5a');
        var hiddenKeys = require('d40b9b3abdbb956e');
        var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
        var TypeError = globalThis.TypeError;
        var WeakMap = globalThis.WeakMap;
        var set, get, has;
        var enforce = function (it) {
          return has(it) ? get(it) : set(it, {});
        };
        var getterFor = function (TYPE) {
          return function (it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE)
              throw new TypeError(
                'Incompatible receiver, ' + TYPE + ' required'
              );
            return state;
          };
        };
        if (NATIVE_WEAK_MAP || shared.state) {
          var store = shared.state || (shared.state = new WeakMap());
          /* eslint-disable no-self-assign -- prototype methods protection */ store.get =
            store.get;
          store.has = store.has;
          store.set = store.set;
          /* eslint-enable no-self-assign -- prototype methods protection */ set =
            function (it, metadata) {
              if (store.has(it))
                throw new TypeError(OBJECT_ALREADY_INITIALIZED);
              metadata.facade = it;
              store.set(it, metadata);
              return metadata;
            };
          get = function (it) {
            return store.get(it) || {};
          };
          has = function (it) {
            return store.has(it);
          };
        } else {
          var STATE = sharedKey('state');
          hiddenKeys[STATE] = true;
          set = function (it, metadata) {
            if (hasOwn(it, STATE))
              throw new TypeError(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function (it) {
            return hasOwn(it, STATE) ? it[STATE] : {};
          };
          has = function (it) {
            return hasOwn(it, STATE);
          };
        }
        module.exports = {
          set: set,
          get: get,
          has: has,
          enforce: enforce,
          getterFor: getterFor,
        };
      },
      {
        d3f0c9f3327b2fd6: 'fnsNs',
        '28c3574d0c39fe7e': 'LtKuC',
        f82e6cc0ac249fa5: '2ojj0',
        c0ae163eea4ef97: 'h2rVd',
        '6dea7358344877bb': '8W3U6',
        '3e035a1241da2f0': '497b6',
        '88d6ccc27e779e5a': 'bSUR5',
        d40b9b3abdbb956e: 'b057N',
      },
    ],
    fnsNs: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var globalThis = require('8b1a8c1dbfd18eb5');
        var isCallable = require('aa77fff8d5ef0565');
        var WeakMap = globalThis.WeakMap;
        module.exports =
          isCallable(WeakMap) && /native code/.test(String(WeakMap));
      },
      { '8b1a8c1dbfd18eb5': 'LtKuC', aa77fff8d5ef0565: 'e7WAC' },
    ],
    bSUR5: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var shared = require('dbc8182adeb8c92f');
        var uid = require('90b4ffb58508a6e5');
        var keys = shared('keys');
        module.exports = function (key) {
          return keys[key] || (keys[key] = uid(key));
        };
      },
      { dbc8182adeb8c92f: '9kVDz', '90b4ffb58508a6e5': '9dyVP' },
    ],
    b057N: [
      function (require, module, exports, __globalThis) {
        'use strict';
        module.exports = {};
      },
      {},
    ],
    gv8Ye: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var hasOwn = require('d91d786cc71453ce');
        var ownKeys = require('88cb809f98beddc6');
        var getOwnPropertyDescriptorModule = require('10ea642aad5f7c21');
        var definePropertyModule = require('39ff598ce822187e');
        module.exports = function (target, source, exceptions) {
          var keys = ownKeys(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (
              !hasOwn(target, key) &&
              !(exceptions && hasOwn(exceptions, key))
            )
              defineProperty(
                target,
                key,
                getOwnPropertyDescriptor(source, key)
              );
          }
        };
      },
      {
        d91d786cc71453ce: '8W3U6',
        '88cb809f98beddc6': '83Ard',
        '10ea642aad5f7c21': 'jJXqI',
        '39ff598ce822187e': '4UcjI',
      },
    ],
    '83Ard': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var getBuiltIn = require('3cc1e4329d869e34');
        var uncurryThis = require('2b8e77cbdbe3db7a');
        var getOwnPropertyNamesModule = require('d703bcb62fcda216');
        var getOwnPropertySymbolsModule = require('157674bad2772c6d');
        var anObject = require('a09e060b9cae3c6c');
        var concat = uncurryThis([].concat);
        // all object keys, includes non-enumerable and symbols
        module.exports =
          getBuiltIn('Reflect', 'ownKeys') ||
          function ownKeys(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it));
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols
              ? concat(keys, getOwnPropertySymbols(it))
              : keys;
          };
      },
      {
        '3cc1e4329d869e34': '1MXOC',
        '2b8e77cbdbe3db7a': '52pkE',
        d703bcb62fcda216: 'ifdNq',
        '157674bad2772c6d': 'kFbMA',
        a09e060b9cae3c6c: 'aNKUg',
      },
    ],
    ifdNq: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var internalObjectKeys = require('6d8591e17a49376c');
        var enumBugKeys = require('2c933f93dd98f385');
        var hiddenKeys = enumBugKeys.concat('length', 'prototype');
        // `Object.getOwnPropertyNames` method
        // https://tc39.es/ecma262/#sec-object.getownpropertynames
        // eslint-disable-next-line es/no-object-getownpropertynames -- safe
        exports.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
          };
      },
      { '6d8591e17a49376c': '8FRZB', '2c933f93dd98f385': 'e0LXZ' },
    ],
    '8FRZB': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var uncurryThis = require('363ee0e6bb4f46a7');
        var hasOwn = require('3183fe0b0bf6f6ac');
        var toIndexedObject = require('28192ac12e934672');
        var indexOf = require('a5f9c5d8e993ccd6').indexOf;
        var hiddenKeys = require('57775908f1581bc6');
        var push = uncurryThis([].push);
        module.exports = function (object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
          // Don't enum bug & hidden keys
          while (names.length > i)
            if (hasOwn(O, (key = names[i++])))
              ~indexOf(result, key) || push(result, key);
          return result;
        };
      },
      {
        '363ee0e6bb4f46a7': '52pkE',
        '3183fe0b0bf6f6ac': '8W3U6',
        '28192ac12e934672': 'jp6pl',
        a5f9c5d8e993ccd6: '7UlK7',
        '57775908f1581bc6': 'b057N',
      },
    ],
    '7UlK7': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var toIndexedObject = require('d5dcbcd68ac5acd0');
        var toAbsoluteIndex = require('212b13aecfa48226');
        var lengthOfArrayLike = require('e5a8b3e1da4c5637');
        // `Array.prototype.{ indexOf, includes }` methods implementation
        var createMethod = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = lengthOfArrayLike(O);
            if (length === 0) return !IS_INCLUDES && -1;
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare -- NaN check
            if (IS_INCLUDES && el !== el)
              while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare -- NaN check
                if (value !== value) return true;
                // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el)
                  return IS_INCLUDES || index || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };
        module.exports = {
          // `Array.prototype.includes` method
          // https://tc39.es/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false),
        };
      },
      {
        d5dcbcd68ac5acd0: 'jp6pl',
        '212b13aecfa48226': '3ZvJK',
        e5a8b3e1da4c5637: '7OX7h',
      },
    ],
    '3ZvJK': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var toIntegerOrInfinity = require('72fe0a53ad43912c');
        var max = Math.max;
        var min = Math.min;
        // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
        module.exports = function (index, length) {
          var integer = toIntegerOrInfinity(index);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };
      },
      { '72fe0a53ad43912c': 'jBbH6' },
    ],
    jBbH6: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var trunc = require('3403cba02b5f61d8');
        // `ToIntegerOrInfinity` abstract operation
        // https://tc39.es/ecma262/#sec-tointegerorinfinity
        module.exports = function (argument) {
          var number = +argument;
          // eslint-disable-next-line no-self-compare -- NaN check
          return number !== number || number === 0 ? 0 : trunc(number);
        };
      },
      { '3403cba02b5f61d8': '4ow0c' },
    ],
    '4ow0c': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var ceil = Math.ceil;
        var floor = Math.floor;
        // `Math.trunc` method
        // https://tc39.es/ecma262/#sec-math.trunc
        // eslint-disable-next-line es/no-math-trunc -- safe
        module.exports =
          Math.trunc ||
          function trunc(x) {
            var n = +x;
            return (n > 0 ? floor : ceil)(n);
          };
      },
      {},
    ],
    '7OX7h': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var toLength = require('23d9716c54a2ab90');
        // `LengthOfArrayLike` abstract operation
        // https://tc39.es/ecma262/#sec-lengthofarraylike
        module.exports = function (obj) {
          return toLength(obj.length);
        };
      },
      { '23d9716c54a2ab90': 'bjAaT' },
    ],
    bjAaT: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var toIntegerOrInfinity = require('c48d3a8b8ac52b0b');
        var min = Math.min;
        // `ToLength` abstract operation
        // https://tc39.es/ecma262/#sec-tolength
        module.exports = function (argument) {
          var len = toIntegerOrInfinity(argument);
          return len > 0 ? min(len, 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
        };
      },
      { c48d3a8b8ac52b0b: 'jBbH6' },
    ],
    e0LXZ: [
      function (require, module, exports, __globalThis) {
        'use strict';
        // IE8- don't enum bug keys
        module.exports = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ];
      },
      {},
    ],
    kFbMA: [
      function (require, module, exports, __globalThis) {
        'use strict';
        // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
        exports.f = Object.getOwnPropertySymbols;
      },
      {},
    ],
    '11yHu': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var fails = require('10299561ea0c7870');
        var isCallable = require('8b1ecdaf59f07210');
        var replacement = /#|\.prototype\./;
        var isForced = function (feature, detection) {
          var value = data[normalize(feature)];
          return value === POLYFILL
            ? true
            : value === NATIVE
              ? false
              : isCallable(detection)
                ? fails(detection)
                : !!detection;
        };
        var normalize = (isForced.normalize = function (string) {
          return String(string).replace(replacement, '.').toLowerCase();
        });
        var data = (isForced.data = {});
        var NATIVE = (isForced.NATIVE = 'N');
        var POLYFILL = (isForced.POLYFILL = 'P');
        module.exports = isForced;
      },
      { '10299561ea0c7870': '14S5e', '8b1ecdaf59f07210': 'e7WAC' },
    ],
    kmXjo: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var globalThis = require('629a4d99f4fe5b2e');
        var apply = require('e574be68c288c7c8');
        var bind = require('df212787338802d3');
        var isCallable = require('afdf018c2d01bbc6');
        var hasOwn = require('35a3e849940fd612');
        var fails = require('b8bf5434d2248ca7');
        var html = require('731f9370cc21fc3b');
        var arraySlice = require('ec358060964e4bde');
        var createElement = require('907adb6d219da7a3');
        var validateArgumentsLength = require('f398561ebd49a798');
        var IS_IOS = require('8a8e342aaad83bb');
        var IS_NODE = require('6eef8b4e43dd6731');
        var set = globalThis.setImmediate;
        var clear = globalThis.clearImmediate;
        var process = globalThis.process;
        var Dispatch = globalThis.Dispatch;
        var Function = globalThis.Function;
        var MessageChannel = globalThis.MessageChannel;
        var String = globalThis.String;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = 'onreadystatechange';
        var $location, defer, channel, port;
        fails(function () {
          // Deno throws a ReferenceError on `location` access without `--location` flag
          $location = globalThis.location;
        });
        var run = function (id) {
          if (hasOwn(queue, id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };
        var runner = function (id) {
          return function () {
            run(id);
          };
        };
        var eventListener = function (event) {
          run(event.data);
        };
        var globalPostMessageDefer = function (id) {
          // old engines have not location.origin
          globalThis.postMessage(
            String(id),
            $location.protocol + '//' + $location.host
          );
        };
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!set || !clear) {
          set = function setImmediate(handler) {
            validateArgumentsLength(arguments.length, 1);
            var fn = isCallable(handler) ? handler : Function(handler);
            var args = arraySlice(arguments, 1);
            queue[++counter] = function () {
              apply(fn, undefined, args);
            };
            defer(counter);
            return counter;
          };
          clear = function clearImmediate(id) {
            delete queue[id];
          };
          // Node.js 0.8-
          if (IS_NODE)
            defer = function (id) {
              process.nextTick(runner(id));
            };
          else if (Dispatch && Dispatch.now)
            defer = function (id) {
              Dispatch.now(runner(id));
            };
          else if (MessageChannel && !IS_IOS) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = eventListener;
            defer = bind(port.postMessage, port);
            // Browsers with postMessage, skip WebWorkers
            // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
          } else if (
            globalThis.addEventListener &&
            isCallable(globalThis.postMessage) &&
            !globalThis.importScripts &&
            $location &&
            $location.protocol !== 'file:' &&
            !fails(globalPostMessageDefer)
          ) {
            defer = globalPostMessageDefer;
            globalThis.addEventListener('message', eventListener, false);
            // IE8-
          } else if (ONREADYSTATECHANGE in createElement('script'))
            defer = function (id) {
              html.appendChild(createElement('script'))[ONREADYSTATECHANGE] =
                function () {
                  html.removeChild(this);
                  run(id);
                };
            };
          else
            defer = function (id) {
              setTimeout(runner(id), 0);
            };
        }
        module.exports = {
          set: set,
          clear: clear,
        };
      },
      {
        '629a4d99f4fe5b2e': 'LtKuC',
        e574be68c288c7c8: '5GzUa',
        df212787338802d3: '9PIQ1',
        afdf018c2d01bbc6: 'e7WAC',
        '35a3e849940fd612': '8W3U6',
        b8bf5434d2248ca7: '14S5e',
        '731f9370cc21fc3b': 'iIWHc',
        ec358060964e4bde: '7uxb1',
        '907adb6d219da7a3': '56hI2',
        f398561ebd49a798: 'eNBvD',
        '8a8e342aaad83bb': '2p7uo',
        '6eef8b4e43dd6731': 'tilwh',
      },
    ],
    '5GzUa': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var NATIVE_BIND = require('d07466971ded2aca');
        var FunctionPrototype = Function.prototype;
        var apply = FunctionPrototype.apply;
        var call = FunctionPrototype.call;
        // eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
        module.exports =
          (typeof Reflect == 'object' && Reflect.apply) ||
          (NATIVE_BIND
            ? call.bind(apply)
            : function () {
                return call.apply(apply, arguments);
              });
      },
      { d07466971ded2aca: '7Wv4Q' },
    ],
    '9PIQ1': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var uncurryThis = require('92f6f475baa85665');
        var aCallable = require('547ee4f9dab0cc76');
        var NATIVE_BIND = require('5acd31cba656d393');
        var bind = uncurryThis(uncurryThis.bind);
        // optional / simple context binding
        module.exports = function (fn, that) {
          aCallable(fn);
          return that === undefined
            ? fn
            : NATIVE_BIND
              ? bind(fn, that)
              : function () {
                  return fn.apply(that, arguments);
                };
        };
      },
      {
        '92f6f475baa85665': 'dnVzn',
        '547ee4f9dab0cc76': 'e9LFe',
        '5acd31cba656d393': '7Wv4Q',
      },
    ],
    dnVzn: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var classofRaw = require('8e77093015e1e67f');
        var uncurryThis = require('9daa4dbbca634c9e');
        module.exports = function (fn) {
          // Nashorn bug:
          //   https://github.com/zloirock/core-js/issues/1128
          //   https://github.com/zloirock/core-js/issues/1130
          if (classofRaw(fn) === 'Function') return uncurryThis(fn);
        };
      },
      { '8e77093015e1e67f': 'lOVSf', '9daa4dbbca634c9e': '52pkE' },
    ],
    iIWHc: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var getBuiltIn = require('14cb391fa4a0dda8');
        module.exports = getBuiltIn('document', 'documentElement');
      },
      { '14cb391fa4a0dda8': '1MXOC' },
    ],
    '7uxb1': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var uncurryThis = require('5250b5c9324ccbe');
        module.exports = uncurryThis([].slice);
      },
      { '5250b5c9324ccbe': '52pkE' },
    ],
    eNBvD: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var $TypeError = TypeError;
        module.exports = function (passed, required) {
          if (passed < required) throw new $TypeError('Not enough arguments');
          return passed;
        };
      },
      {},
    ],
    '2p7uo': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var userAgent = require('88313d0d5d3e28c');
        // eslint-disable-next-line redos/no-vulnerable -- safe
        module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
      },
      { '88313d0d5d3e28c': 'leSSW' },
    ],
    tilwh: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var ENVIRONMENT = require('5fac34e3c4c0e043');
        module.exports = ENVIRONMENT === 'NODE';
      },
      { '5fac34e3c4c0e043': 'c2KPe' },
    ],
    c2KPe: [
      function (require, module, exports, __globalThis) {
        'use strict';
        /* global Bun, Deno -- detection */ var globalThis = require('7dc361f46ecde901');
        var userAgent = require('9f6e24ecbba66a9e');
        var classof = require('a008a59fdc341842');
        var userAgentStartsWith = function (string) {
          return userAgent.slice(0, string.length) === string;
        };
        module.exports = (function () {
          if (userAgentStartsWith('Bun/')) return 'BUN';
          if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
          if (userAgentStartsWith('Deno/')) return 'DENO';
          if (userAgentStartsWith('Node.js/')) return 'NODE';
          if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
          if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
          if (classof(globalThis.process) === 'process') return 'NODE';
          if (globalThis.window && globalThis.document) return 'BROWSER';
          return 'REST';
        })();
      },
      {
        '7dc361f46ecde901': 'LtKuC',
        '9f6e24ecbba66a9e': 'leSSW',
        a008a59fdc341842: 'lOVSf',
      },
    ],
    alanE: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var $ = require('33581c362196ed1f');
        var globalThis = require('503bb555249cad41');
        var setTask = require('4219ce460223bd08').set;
        var schedulersFix = require('738dc378e6a94c64');
        // https://github.com/oven-sh/bun/issues/1633
        var setImmediate = globalThis.setImmediate
          ? schedulersFix(setTask, false)
          : setTask;
        // `setImmediate` method
        // http://w3c.github.io/setImmediate/#si-setImmediate
        $(
          {
            global: true,
            bind: true,
            enumerable: true,
            forced: globalThis.setImmediate !== setImmediate,
          },
          {
            setImmediate: setImmediate,
          }
        );
      },
      {
        '33581c362196ed1f': 'cGglx',
        '503bb555249cad41': 'LtKuC',
        '4219ce460223bd08': 'kmXjo',
        '738dc378e6a94c64': '1ohxz',
      },
    ],
    '1ohxz': [
      function (require, module, exports, __globalThis) {
        'use strict';
        var globalThis = require('aa6765693e58a0fe');
        var apply = require('a68ecfcbf29c46f6');
        var isCallable = require('7087588d33667af2');
        var ENVIRONMENT = require('864edee099e8affb');
        var USER_AGENT = require('3a3a5a2cfab86f21');
        var arraySlice = require('cff2c830bdea4f24');
        var validateArgumentsLength = require('58a74f00cee1ac64');
        var Function = globalThis.Function;
        // dirty IE9- and Bun 0.3.0- checks
        var WRAP =
          /MSIE .\./.test(USER_AGENT) ||
          (ENVIRONMENT === 'BUN' &&
            (function () {
              var version = globalThis.Bun.version.split('.');
              return (
                version.length < 3 ||
                (version[0] === '0' &&
                  (version[1] < 3 ||
                    (version[1] === '3' && version[2] === '0')))
              );
            })());
        // IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
        // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
        // https://github.com/oven-sh/bun/issues/1633
        module.exports = function (scheduler, hasTimeArg) {
          var firstParamIndex = hasTimeArg ? 2 : 1;
          return WRAP
            ? function (handler, timeout /* , ...arguments */) {
                var boundArgs =
                  validateArgumentsLength(arguments.length, 1) >
                  firstParamIndex;
                var fn = isCallable(handler) ? handler : Function(handler);
                var params = boundArgs
                  ? arraySlice(arguments, firstParamIndex)
                  : [];
                var callback = boundArgs
                  ? function () {
                      apply(fn, this, params);
                    }
                  : fn;
                return hasTimeArg
                  ? scheduler(callback, timeout)
                  : scheduler(callback);
              }
            : scheduler;
        };
      },
      {
        aa6765693e58a0fe: 'LtKuC',
        a68ecfcbf29c46f6: '5GzUa',
        '7087588d33667af2': 'e7WAC',
        '864edee099e8affb': 'c2KPe',
        '3a3a5a2cfab86f21': 'leSSW',
        cff2c830bdea4f24: '7uxb1',
        '58a74f00cee1ac64': 'eNBvD',
      },
    ],
    '3NN7Q': [
      function (require, module, exports, __globalThis) {
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var runtime = (function (exports) {
          'use strict';
          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value;
            };
          var undefined; // More compressible than void 0.
          var $Symbol = typeof Symbol === 'function' ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || '@@iterator';
          var asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
          var toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
          function define(obj, key, value) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
            return obj[key];
          }
          try {
            // IE 8 has a broken Object.defineProperty that only works on DOM objects.
            define({}, '');
          } catch (err) {
            define = function (obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);
            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            defineProperty(generator, '_invoke', {
              value: makeInvokeMethod(innerFn, self, context),
            });
            return generator;
          }
          exports.wrap = wrap;
          // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: 'normal',
                arg: fn.call(obj, arg),
              };
            } catch (err) {
              return {
                type: 'throw',
                arg: err,
              };
            }
          }
          var GenStateSuspendedStart = 'suspendedStart';
          var GenStateSuspendedYield = 'suspendedYield';
          var GenStateExecuting = 'executing';
          var GenStateCompleted = 'completed';
          // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.
          var ContinueSentinel = {};
          // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype =
            getProto && getProto(getProto(values([])));
          if (
            NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
          )
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          GeneratorFunction.prototype = GeneratorFunctionPrototype;
          defineProperty(Gp, 'constructor', {
            value: GeneratorFunctionPrototype,
            configurable: true,
          });
          defineProperty(GeneratorFunctionPrototype, 'constructor', {
            value: GeneratorFunction,
            configurable: true,
          });
          GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            toStringTagSymbol,
            'GeneratorFunction'
          );
          // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.
          function defineIteratorMethods(prototype) {
            ['next', 'throw', 'return'].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          exports.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === 'function' && genFun.constructor;
            return ctor
              ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
                  // do is to check its .name property.
                  (ctor.displayName || ctor.name) === 'GeneratorFunction'
              : false;
          };
          exports.mark = function (genFun) {
            if (Object.setPrototypeOf)
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              define(genFun, toStringTagSymbol, 'GeneratorFunction');
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };
          // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.
          exports.awrap = function (arg) {
            return {
              __await: arg,
            };
          };
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === 'throw') reject(record.arg);
              else {
                var result = record.arg;
                var value = result.value;
                if (
                  value &&
                  typeof value === 'object' &&
                  hasOwn.call(value, '__await')
                )
                  return PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke('next', value, resolve, reject);
                    },
                    function (err) {
                      invoke('throw', err, resolve, reject);
                    }
                  );
                return PromiseImpl.resolve(value).then(
                  function (unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                  },
                  function (error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke('throw', error, resolve, reject);
                  }
                );
              }
            }
            var previousPromise;
            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return (previousPromise = // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                      // invocations of the iterator.
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
            }
            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            defineProperty(this, '_invoke', {
              value: enqueue,
            });
          }
          defineIteratorMethods(AsyncIterator.prototype);
          define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          });
          exports.AsyncIterator = AsyncIterator;
          // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.
          exports.async = function (
            innerFn,
            outerFn,
            self,
            tryLocsList,
            PromiseImpl
          ) {
            if (PromiseImpl === void 0) PromiseImpl = Promise;
            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList),
              PromiseImpl
            );
            return exports.isGeneratorFunction(outerFn)
              ? iter // If outerFn is a generator, return the full iterator.
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          };
          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
              if (state === GenStateExecuting)
                throw new Error('Generator is already running');
              if (state === GenStateCompleted) {
                if (method === 'throw') throw arg;
                // Be forgiving, per GeneratorResume behavior specified since ES2015:
                // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
                // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
                return doneResult();
              }
              context.method = method;
              context.arg = arg;
              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if (context.method === 'next')
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;
                else if (context.method === 'throw') {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }
                  context.dispatchException(context.arg);
                } else if (context.method === 'return')
                  context.abrupt('return', context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === 'normal') {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done
                    ? GenStateCompleted
                    : GenStateSuspendedYield;
                  if (record.arg === ContinueSentinel) continue;
                  return {
                    value: record.arg,
                    done: context.done,
                  };
                } else if (record.type === 'throw') {
                  state = GenStateCompleted;
                  // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.
                  context.method = 'throw';
                  context.arg = record.arg;
                }
              }
            };
          }
          // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.
          function maybeInvokeDelegate(delegate, context) {
            var methodName = context.method;
            var method = delegate.iterator[methodName];
            if (method === undefined) {
              // A .throw or .return when the delegate iterator has no .throw
              // method, or a missing .next method, always terminate the
              // yield* loop.
              context.delegate = null;
              // Note: ["return"] must be used for ES3 parsing compatibility.
              if (methodName === 'throw' && delegate.iterator['return']) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = 'return';
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === 'throw')
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
              }
              if (methodName !== 'return') {
                context.method = 'throw';
                context.arg = new TypeError(
                  "The iterator does not provide a '" + methodName + "' method"
                );
              }
              return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === 'throw') {
              context.method = 'throw';
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }
            var info = record.arg;
            if (!info) {
              context.method = 'throw';
              context.arg = new TypeError('iterator result is not an object');
              context.delegate = null;
              return ContinueSentinel;
            }
            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value;
              // Resume execution at the desired location (see delegateYield).
              context.next = delegate.nextLoc;
              // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.
              if (context.method !== 'return') {
                context.method = 'next';
                context.arg = undefined;
              }
            } // Re-yield the result returned by the delegate method.
            else return info;
            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
          }
          // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.
          defineIteratorMethods(Gp);
          define(Gp, toStringTagSymbol, 'Generator');
          // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.
          define(Gp, iteratorSymbol, function () {
            return this;
          });
          define(Gp, 'toString', function () {
            return '[object Generator]';
          });
          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0],
            };
            if (1 in locs) entry.catchLoc = locs[1];
            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }
            this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = 'normal';
            delete record.arg;
            entry.completion = record;
          }
          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [
              {
                tryLoc: 'root',
              },
            ];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }
          exports.keys = function (val) {
            var object = Object(val);
            var keys = [];
            for (var key in object) keys.push(key);
            keys.reverse();
            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
              while (keys.length) {
                var key = keys.pop();
                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }
              // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.
              next.done = true;
              return next;
            };
          };
          function values(iterable) {
            if (iterable != null) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if (typeof iterable.next === 'function') return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    while (++i < iterable.length)
                      if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                      }
                    next.value = undefined;
                    next.done = true;
                    return next;
                  };
                return (next.next = next);
              }
            }
            throw new TypeError(typeof iterable + ' is not iterable');
          }
          exports.values = values;
          function doneResult() {
            return {
              value: undefined,
              done: true,
            };
          }
          Context.prototype = {
            constructor: Context,
            reset: function (skipTempReset) {
              this.prev = 0;
              this.next = 0;
              // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;
              this.method = 'next';
              this.arg = undefined;
              this.tryEntries.forEach(resetTryEntry);
              if (!skipTempReset) {
                for (var name in this) // Not sure about the optimal order of these conditions:
                  if (
                    name.charAt(0) === 't' &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1))
                  )
                    this[name] = undefined;
              }
            },
            stop: function () {
              this.done = true;
              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === 'throw') throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function (exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                record.type = 'throw';
                record.arg = exception;
                context.next = loc;
                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = 'next';
                  context.arg = undefined;
                }
                return !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === 'root')
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle('end');
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, 'catchLoc');
                  var hasFinally = hasOwn.call(entry, 'finallyLoc');
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, true);
                    else if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, true);
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc);
                  } else
                    throw new Error('try statement without catch or finally');
                }
              }
            },
            abrupt: function (type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, 'finallyLoc') &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry;
                  break;
                }
              }
              if (
                finallyEntry &&
                (type === 'break' || type === 'continue') &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc
              )
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;
              if (finallyEntry) {
                this.method = 'next';
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }
              return this.complete(record);
            },
            complete: function (record, afterLoc) {
              if (record.type === 'throw') throw record.arg;
              if (record.type === 'break' || record.type === 'continue')
                this.next = record.arg;
              else if (record.type === 'return') {
                this.rval = this.arg = record.arg;
                this.method = 'return';
                this.next = 'end';
              } else if (record.type === 'normal' && afterLoc)
                this.next = afterLoc;
              return ContinueSentinel;
            },
            finish: function (finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },
            catch: function (tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === 'throw') {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc,
              };
              if (this.method === 'next')
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined;
              return ContinueSentinel;
            },
          };
          // Regardless of whether this script is executing as a CommonJS module
          // or not, return the runtime object so that we can declare the variable
          // regeneratorRuntime in the outer scope, which allows this module to be
          // injected easily by `bin/regenerator --include-runtime script.js`.
          return exports;
        })(
          // If this script is executing as a CommonJS module, use module.exports
          // as the regeneratorRuntime namespace. Otherwise create a new empty
          // object. Either way, the resulting object will be used to initialize
          // the regeneratorRuntime variable at the top of this file.
          (0, module.exports)
        );
        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          // This module should not be running in strict mode, so the above
          // assignment should always work unless something is misconfigured. Just
          // in case runtime.js accidentally runs in strict mode, in modern engines
          // we can explicitly access globalThis. In older engines we can escape
          // strict mode using a global Function call. This could conceivably fail
          // if a Content Security Policy forbids using Function, but in that case
          // the proper solution is to fix the accidental strict mode problem. If
          // you've misconfigured your bundler to force strict mode and applied a
          // CSP to forbid Function, and you're not willing to fix either of those
          // problems, please detail your unique predicament in a GitHub issue.
          if (typeof globalThis === 'object')
            globalThis.regeneratorRuntime = runtime;
          else Function('r', 'regeneratorRuntime = r')(runtime);
        }
      },
      {},
    ],
    b0yho: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'login', () => login);
        parcelHelpers.export(exports, 'logout', () => logout);
        var _axios = require('axios');
        var _axiosDefault = parcelHelpers.interopDefault(_axios);
        var _alert = require('./alert');
        const login = async (email, password) => {
          try {
            const res = await (0, _axiosDefault.default)({
              method: 'POST',
              url: 'api/v1/auth/login',
              data: {
                email,
                password,
              },
            });
            if (res.data.status === 'success') {
              (0, _alert.showAlert)('success', 'Logged in successfully!');
              window.setTimeout(() => {
                location.assign('/');
              }, 1500);
            }
          } catch (err) {
            (0, _alert.showAlert)('error', err.response.data.message);
          }
        };
        // Log out
        const logout = async () => {
          try {
            const res = await (0, _axiosDefault.default)({
              method: 'POST',
              url: 'api/v1/auth/logout',
            });
            if (res.data.status === 'success') {
              (0, _alert.showAlert)('success', 'Logged out successfully!');
              window.setTimeout(() => {
                location.assign('/');
              }, 1500);
            }
          } catch (err) {
            (0, _alert.showAlert)('error', 'Unexpected error, try later.');
          }
        };
      },
      {
        axios: 'gIwns',
        './alert': 'cixZ4',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    gIwns: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(
          exports,
          'default',
          () => (0, _axiosJsDefault.default)
        );
        parcelHelpers.export(exports, 'Axios', () => Axios);
        parcelHelpers.export(exports, 'AxiosError', () => AxiosError);
        parcelHelpers.export(exports, 'CanceledError', () => CanceledError);
        parcelHelpers.export(exports, 'isCancel', () => isCancel);
        parcelHelpers.export(exports, 'CancelToken', () => CancelToken);
        parcelHelpers.export(exports, 'VERSION', () => VERSION);
        parcelHelpers.export(exports, 'all', () => all);
        parcelHelpers.export(exports, 'Cancel', () => Cancel);
        parcelHelpers.export(exports, 'isAxiosError', () => isAxiosError);
        parcelHelpers.export(exports, 'spread', () => spread);
        parcelHelpers.export(exports, 'toFormData', () => toFormData);
        parcelHelpers.export(exports, 'AxiosHeaders', () => AxiosHeaders);
        parcelHelpers.export(exports, 'HttpStatusCode', () => HttpStatusCode);
        parcelHelpers.export(exports, 'formToJSON', () => formToJSON);
        parcelHelpers.export(exports, 'getAdapter', () => getAdapter);
        parcelHelpers.export(exports, 'mergeConfig', () => mergeConfig);
        var _axiosJs = require('./lib/axios.js');
        var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
        // This module is intended to unwrap Axios default export as named.
        // Keep top-level export same with static properties
        // so that it can keep same with es module or cjs
        const {
          Axios,
          AxiosError,
          CanceledError,
          isCancel,
          CancelToken,
          VERSION,
          all,
          Cancel,
          isAxiosError,
          spread,
          toFormData,
          AxiosHeaders,
          HttpStatusCode,
          formToJSON,
          getAdapter,
          mergeConfig,
        } = (0, _axiosJsDefault.default);
      },
      {
        './lib/axios.js': 'lNH3U',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    lNH3U: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _utilsJs = require('./utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _bindJs = require('./helpers/bind.js');
        var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
        var _axiosJs = require('./core/Axios.js');
        var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
        var _mergeConfigJs = require('./core/mergeConfig.js');
        var _mergeConfigJsDefault =
          parcelHelpers.interopDefault(_mergeConfigJs);
        var _indexJs = require('./defaults/index.js');
        var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
        var _formDataToJSONJs = require('./helpers/formDataToJSON.js');
        var _formDataToJSONJsDefault =
          parcelHelpers.interopDefault(_formDataToJSONJs);
        var _canceledErrorJs = require('./cancel/CanceledError.js');
        var _canceledErrorJsDefault =
          parcelHelpers.interopDefault(_canceledErrorJs);
        var _cancelTokenJs = require('./cancel/CancelToken.js');
        var _cancelTokenJsDefault =
          parcelHelpers.interopDefault(_cancelTokenJs);
        var _isCancelJs = require('./cancel/isCancel.js');
        var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
        var _dataJs = require('./env/data.js');
        var _toFormDataJs = require('./helpers/toFormData.js');
        var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
        var _axiosErrorJs = require('./core/AxiosError.js');
        var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
        var _spreadJs = require('./helpers/spread.js');
        var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
        var _isAxiosErrorJs = require('./helpers/isAxiosError.js');
        var _isAxiosErrorJsDefault =
          parcelHelpers.interopDefault(_isAxiosErrorJs);
        var _axiosHeadersJs = require('./core/AxiosHeaders.js');
        var _axiosHeadersJsDefault =
          parcelHelpers.interopDefault(_axiosHeadersJs);
        var _adaptersJs = require('./adapters/adapters.js');
        var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
        var _httpStatusCodeJs = require('./helpers/HttpStatusCode.js');
        var _httpStatusCodeJsDefault =
          parcelHelpers.interopDefault(_httpStatusCodeJs);
        ('use strict');
        /**
         * Create an instance of Axios
         *
         * @param {Object} defaultConfig The default config for the instance
         *
         * @returns {Axios} A new instance of Axios
         */ function createInstance(defaultConfig) {
          const context = new (0, _axiosJsDefault.default)(defaultConfig);
          const instance = (0, _bindJsDefault.default)(
            (0, _axiosJsDefault.default).prototype.request,
            context
          );
          // Copy axios.prototype to instance
          (0, _utilsJsDefault.default).extend(
            instance,
            (0, _axiosJsDefault.default).prototype,
            context,
            {
              allOwnKeys: true,
            }
          );
          // Copy context to instance
          (0, _utilsJsDefault.default).extend(instance, context, null, {
            allOwnKeys: true,
          });
          // Factory for creating new instances
          instance.create = function create(instanceConfig) {
            return createInstance(
              (0, _mergeConfigJsDefault.default)(defaultConfig, instanceConfig)
            );
          };
          return instance;
        }
        // Create the default instance to be exported
        const axios = createInstance((0, _indexJsDefault.default));
        // Expose Axios class to allow class inheritance
        axios.Axios = (0, _axiosJsDefault.default);
        // Expose Cancel & CancelToken
        axios.CanceledError = (0, _canceledErrorJsDefault.default);
        axios.CancelToken = (0, _cancelTokenJsDefault.default);
        axios.isCancel = (0, _isCancelJsDefault.default);
        axios.VERSION = (0, _dataJs.VERSION);
        axios.toFormData = (0, _toFormDataJsDefault.default);
        // Expose AxiosError class
        axios.AxiosError = (0, _axiosErrorJsDefault.default);
        // alias for CanceledError for backward compatibility
        axios.Cancel = axios.CanceledError;
        // Expose all/spread
        axios.all = function all(promises) {
          return Promise.all(promises);
        };
        axios.spread = (0, _spreadJsDefault.default);
        // Expose isAxiosError
        axios.isAxiosError = (0, _isAxiosErrorJsDefault.default);
        // Expose mergeConfig
        axios.mergeConfig = (0, _mergeConfigJsDefault.default);
        axios.AxiosHeaders = (0, _axiosHeadersJsDefault.default);
        axios.formToJSON = (thing) =>
          (0, _formDataToJSONJsDefault.default)(
            (0, _utilsJsDefault.default).isHTMLForm(thing)
              ? new FormData(thing)
              : thing
          );
        axios.getAdapter = (0, _adaptersJsDefault.default).getAdapter;
        axios.HttpStatusCode = (0, _httpStatusCodeJsDefault.default);
        axios.default = axios;
        // this module should only have a default export
        exports.default = axios;
      },
      {
        './utils.js': 'lbtnr',
        './helpers/bind.js': 'cVXCT',
        './core/Axios.js': 'gwL4I',
        './core/mergeConfig.js': '1ogTa',
        './defaults/index.js': 'kgCsl',
        './helpers/formDataToJSON.js': 'cuPdu',
        './cancel/CanceledError.js': '6k8Ga',
        './cancel/CancelToken.js': 'fsLds',
        './cancel/isCancel.js': 'gz0Pv',
        './env/data.js': '4oEjm',
        './helpers/toFormData.js': 'jJQ5Z',
        './core/AxiosError.js': 'fxYQp',
        './helpers/spread.js': 'cwX15',
        './helpers/isAxiosError.js': 'bsdyt',
        './core/AxiosHeaders.js': 'eHpg9',
        './adapters/adapters.js': 'iRRaw',
        './helpers/HttpStatusCode.js': 'dTE2h',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    lbtnr: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _bindJs = require('./helpers/bind.js');
        var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
        var global = arguments[3];
        var process = require('a8d2c3349c87a903');
        ('use strict');
        // utils is a library of generic helper functions non-specific to axios
        const { toString } = Object.prototype;
        const { getPrototypeOf } = Object;
        const kindOf = ((cache) => (thing) => {
          const str = toString.call(thing);
          return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
        })(Object.create(null));
        const kindOfTest = (type) => {
          type = type.toLowerCase();
          return (thing) => kindOf(thing) === type;
        };
        const typeOfTest = (type) => (thing) => typeof thing === type;
        /**
         * Determine if a value is an Array
         *
         * @param {Object} val The value to test
         *
         * @returns {boolean} True if value is an Array, otherwise false
         */ const { isArray } = Array;
        /**
         * Determine if a value is undefined
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if the value is undefined, otherwise false
         */ const isUndefined = typeOfTest('undefined');
        /**
         * Determine if a value is a Buffer
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Buffer, otherwise false
         */ function isBuffer(val) {
          return (
            val !== null &&
            !isUndefined(val) &&
            val.constructor !== null &&
            !isUndefined(val.constructor) &&
            isFunction(val.constructor.isBuffer) &&
            val.constructor.isBuffer(val)
          );
        }
        /**
         * Determine if a value is an ArrayBuffer
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is an ArrayBuffer, otherwise false
         */ const isArrayBuffer = kindOfTest('ArrayBuffer');
        /**
         * Determine if a value is a view on an ArrayBuffer
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
         */ function isArrayBufferView(val) {
          let result;
          if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView)
            result = ArrayBuffer.isView(val);
          else result = val && val.buffer && isArrayBuffer(val.buffer);
          return result;
        }
        /**
         * Determine if a value is a String
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a String, otherwise false
         */ const isString = typeOfTest('string');
        /**
         * Determine if a value is a Function
         *
         * @param {*} val The value to test
         * @returns {boolean} True if value is a Function, otherwise false
         */ const isFunction = typeOfTest('function');
        /**
         * Determine if a value is a Number
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Number, otherwise false
         */ const isNumber = typeOfTest('number');
        /**
         * Determine if a value is an Object
         *
         * @param {*} thing The value to test
         *
         * @returns {boolean} True if value is an Object, otherwise false
         */ const isObject = (thing) =>
          thing !== null && typeof thing === 'object';
        /**
         * Determine if a value is a Boolean
         *
         * @param {*} thing The value to test
         * @returns {boolean} True if value is a Boolean, otherwise false
         */ const isBoolean = (thing) => thing === true || thing === false;
        /**
         * Determine if a value is a plain Object
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a plain Object, otherwise false
         */ const isPlainObject = (val) => {
          if (kindOf(val) !== 'object') return false;
          const prototype = getPrototypeOf(val);
          return (
            (prototype === null ||
              prototype === Object.prototype ||
              Object.getPrototypeOf(prototype) === null) &&
            !(Symbol.toStringTag in val) &&
            !(Symbol.iterator in val)
          );
        };
        /**
         * Determine if a value is a Date
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Date, otherwise false
         */ const isDate = kindOfTest('Date');
        /**
         * Determine if a value is a File
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a File, otherwise false
         */ const isFile = kindOfTest('File');
        /**
         * Determine if a value is a Blob
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Blob, otherwise false
         */ const isBlob = kindOfTest('Blob');
        /**
         * Determine if a value is a FileList
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a File, otherwise false
         */ const isFileList = kindOfTest('FileList');
        /**
         * Determine if a value is a Stream
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Stream, otherwise false
         */ const isStream = (val) => isObject(val) && isFunction(val.pipe);
        /**
         * Determine if a value is a FormData
         *
         * @param {*} thing The value to test
         *
         * @returns {boolean} True if value is an FormData, otherwise false
         */ const isFormData = (thing) => {
          let kind;
          return (
            thing &&
            ((typeof FormData === 'function' && thing instanceof FormData) ||
              (isFunction(thing.append) &&
                ((kind = kindOf(thing)) === 'formdata' || // detect form-data instance
                  (kind === 'object' &&
                    isFunction(thing.toString) &&
                    thing.toString() === '[object FormData]'))))
          );
        };
        /**
         * Determine if a value is a URLSearchParams object
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a URLSearchParams object, otherwise false
         */ const isURLSearchParams = kindOfTest('URLSearchParams');
        const [isReadableStream, isRequest, isResponse, isHeaders] = [
          'ReadableStream',
          'Request',
          'Response',
          'Headers',
        ].map(kindOfTest);
        /**
         * Trim excess whitespace off the beginning and end of a string
         *
         * @param {String} str The String to trim
         *
         * @returns {String} The String freed of excess whitespace
         */ const trim = (str) =>
          str.trim
            ? str.trim()
            : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
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
         *
         * @param {Boolean} [allOwnKeys = false]
         * @returns {any}
         */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
          // Don't bother if no value provided
          if (obj === null || typeof obj === 'undefined') return;
          let i;
          let l;
          // Force an array if not already something iterable
          if (typeof obj !== 'object')
            /*eslint no-param-reassign:0*/ obj = [obj];
          if (isArray(obj))
            // Iterate over array values
            for (i = 0, l = obj.length; i < l; i++)
              fn.call(null, obj[i], i, obj);
          else {
            // Iterate over object keys
            const keys = allOwnKeys
              ? Object.getOwnPropertyNames(obj)
              : Object.keys(obj);
            const len = keys.length;
            let key;
            for (i = 0; i < len; i++) {
              key = keys[i];
              fn.call(null, obj[key], key, obj);
            }
          }
        }
        function findKey(obj, key) {
          key = key.toLowerCase();
          const keys = Object.keys(obj);
          let i = keys.length;
          let _key;
          while (i-- > 0) {
            _key = keys[i];
            if (key === _key.toLowerCase()) return _key;
          }
          return null;
        }
        const _global = (() => {
          /*eslint no-undef:0*/ if (typeof globalThis !== 'undefined')
            return globalThis;
          return typeof self !== 'undefined'
            ? self
            : typeof window !== 'undefined'
              ? window
              : global;
        })();
        const isContextDefined = (context) =>
          !isUndefined(context) && context !== _global;
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
         *
         * @returns {Object} Result of all merge properties
         */ function merge() {
          const { caseless } = (isContextDefined(this) && this) || {};
          const result = {};
          const assignValue = (val, key) => {
            const targetKey = (caseless && findKey(result, key)) || key;
            if (isPlainObject(result[targetKey]) && isPlainObject(val))
              result[targetKey] = merge(result[targetKey], val);
            else if (isPlainObject(val)) result[targetKey] = merge({}, val);
            else if (isArray(val)) result[targetKey] = val.slice();
            else result[targetKey] = val;
          };
          for (let i = 0, l = arguments.length; i < l; i++)
            arguments[i] && forEach(arguments[i], assignValue);
          return result;
        }
        /**
         * Extends object a by mutably adding to it the properties of object b.
         *
         * @param {Object} a The object to be extended
         * @param {Object} b The object to copy properties from
         * @param {Object} thisArg The object to bind function to
         *
         * @param {Boolean} [allOwnKeys]
         * @returns {Object} The resulting value of object a
         */ const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
          forEach(
            b,
            (val, key) => {
              if (thisArg && isFunction(val))
                a[key] = (0, _bindJsDefault.default)(val, thisArg);
              else a[key] = val;
            },
            {
              allOwnKeys,
            }
          );
          return a;
        };
        /**
         * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
         *
         * @param {string} content with BOM
         *
         * @returns {string} content value without BOM
         */ const stripBOM = (content) => {
          if (content.charCodeAt(0) === 0xfeff) content = content.slice(1);
          return content;
        };
        /**
         * Inherit the prototype methods from one constructor into another
         * @param {function} constructor
         * @param {function} superConstructor
         * @param {object} [props]
         * @param {object} [descriptors]
         *
         * @returns {void}
         */ const inherits = (
          constructor,
          superConstructor,
          props,
          descriptors
        ) => {
          constructor.prototype = Object.create(
            superConstructor.prototype,
            descriptors
          );
          constructor.prototype.constructor = constructor;
          Object.defineProperty(constructor, 'super', {
            value: superConstructor.prototype,
          });
          props && Object.assign(constructor.prototype, props);
        };
        /**
         * Resolve object with deep prototype chain to a flat object
         * @param {Object} sourceObj source object
         * @param {Object} [destObj]
         * @param {Function|Boolean} [filter]
         * @param {Function} [propFilter]
         *
         * @returns {Object}
         */ const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
          let props;
          let i;
          let prop;
          const merged = {};
          destObj = destObj || {};
          // eslint-disable-next-line no-eq-null,eqeqeq
          if (sourceObj == null) return destObj;
          do {
            props = Object.getOwnPropertyNames(sourceObj);
            i = props.length;
            while (i-- > 0) {
              prop = props[i];
              if (
                (!propFilter || propFilter(prop, sourceObj, destObj)) &&
                !merged[prop]
              ) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
              }
            }
            sourceObj = filter !== false && getPrototypeOf(sourceObj);
          } while (
            sourceObj &&
            (!filter || filter(sourceObj, destObj)) &&
            sourceObj !== Object.prototype
          );
          return destObj;
        };
        /**
         * Determines whether a string ends with the characters of a specified string
         *
         * @param {String} str
         * @param {String} searchString
         * @param {Number} [position= 0]
         *
         * @returns {boolean}
         */ const endsWith = (str, searchString, position) => {
          str = String(str);
          if (position === undefined || position > str.length)
            position = str.length;
          position -= searchString.length;
          const lastIndex = str.indexOf(searchString, position);
          return lastIndex !== -1 && lastIndex === position;
        };
        /**
         * Returns new array from array like object or null if failed
         *
         * @param {*} [thing]
         *
         * @returns {?Array}
         */ const toArray = (thing) => {
          if (!thing) return null;
          if (isArray(thing)) return thing;
          let i = thing.length;
          if (!isNumber(i)) return null;
          const arr = new Array(i);
          while (i-- > 0) arr[i] = thing[i];
          return arr;
        };
        /**
         * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
         * thing passed in is an instance of Uint8Array
         *
         * @param {TypedArray}
         *
         * @returns {Array}
         */ // eslint-disable-next-line func-names
        const isTypedArray = ((TypedArray) => {
          // eslint-disable-next-line func-names
          return (thing) => {
            return TypedArray && thing instanceof TypedArray;
          };
        })(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));
        /**
         * For each entry in the object, call the function with the key and value.
         *
         * @param {Object<any, any>} obj - The object to iterate over.
         * @param {Function} fn - The function to call for each entry.
         *
         * @returns {void}
         */ const forEachEntry = (obj, fn) => {
          const generator = obj && obj[Symbol.iterator];
          const iterator = generator.call(obj);
          let result;
          while ((result = iterator.next()) && !result.done) {
            const pair = result.value;
            fn.call(obj, pair[0], pair[1]);
          }
        };
        /**
         * It takes a regular expression and a string, and returns an array of all the matches
         *
         * @param {string} regExp - The regular expression to match against.
         * @param {string} str - The string to search.
         *
         * @returns {Array<boolean>}
         */ const matchAll = (regExp, str) => {
          let matches;
          const arr = [];
          while ((matches = regExp.exec(str)) !== null) arr.push(matches);
          return arr;
        };
        /* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm =
          kindOfTest('HTMLFormElement');
        const toCamelCase = (str) => {
          return str
            .toLowerCase()
            .replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
              return p1.toUpperCase() + p2;
            });
        };
        /* Creating a function that will check if an object has a property. */ const hasOwnProperty =
          (
            ({ hasOwnProperty }) =>
            (obj, prop) =>
              hasOwnProperty.call(obj, prop)
          )(Object.prototype);
        /**
         * Determine if a value is a RegExp object
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a RegExp object, otherwise false
         */ const isRegExp = kindOfTest('RegExp');
        const reduceDescriptors = (obj, reducer) => {
          const descriptors = Object.getOwnPropertyDescriptors(obj);
          const reducedDescriptors = {};
          forEach(descriptors, (descriptor, name) => {
            let ret;
            if ((ret = reducer(descriptor, name, obj)) !== false)
              reducedDescriptors[name] = ret || descriptor;
          });
          Object.defineProperties(obj, reducedDescriptors);
        };
        /**
         * Makes all methods read-only
         * @param {Object} obj
         */ const freezeMethods = (obj) => {
          reduceDescriptors(obj, (descriptor, name) => {
            // skip restricted props in strict mode
            if (
              isFunction(obj) &&
              ['arguments', 'caller', 'callee'].indexOf(name) !== -1
            )
              return false;
            const value = obj[name];
            if (!isFunction(value)) return;
            descriptor.enumerable = false;
            if ('writable' in descriptor) {
              descriptor.writable = false;
              return;
            }
            if (!descriptor.set)
              descriptor.set = () => {
                throw Error("Can not rewrite read-only method '" + name + "'");
              };
          });
        };
        const toObjectSet = (arrayOrString, delimiter) => {
          const obj = {};
          const define = (arr) => {
            arr.forEach((value) => {
              obj[value] = true;
            });
          };
          isArray(arrayOrString)
            ? define(arrayOrString)
            : define(String(arrayOrString).split(delimiter));
          return obj;
        };
        const noop = () => {};
        const toFiniteNumber = (value, defaultValue) => {
          return value != null && Number.isFinite((value = +value))
            ? value
            : defaultValue;
        };
        /**
         * If the thing is a FormData object, return true, otherwise return false.
         *
         * @param {unknown} thing - The thing to check.
         *
         * @returns {boolean}
         */ function isSpecCompliantForm(thing) {
          return !!(
            thing &&
            isFunction(thing.append) &&
            thing[Symbol.toStringTag] === 'FormData' &&
            thing[Symbol.iterator]
          );
        }
        const toJSONObject = (obj) => {
          const stack = new Array(10);
          const visit = (source, i) => {
            if (isObject(source)) {
              if (stack.indexOf(source) >= 0) return;
              if (!('toJSON' in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key) => {
                  const reducedValue = visit(value, i + 1);
                  !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
              }
            }
            return source;
          };
          return visit(obj, 0);
        };
        const isAsyncFn = kindOfTest('AsyncFunction');
        const isThenable = (thing) =>
          thing &&
          (isObject(thing) || isFunction(thing)) &&
          isFunction(thing.then) &&
          isFunction(thing.catch);
        // original code
        // https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34
        const _setImmediate = ((
          setImmediateSupported,
          postMessageSupported
        ) => {
          if (setImmediateSupported) return setImmediate;
          return postMessageSupported
            ? ((token, callbacks) => {
                _global.addEventListener(
                  'message',
                  ({ source, data }) => {
                    if (source === _global && data === token)
                      callbacks.length && callbacks.shift()();
                  },
                  false
                );
                return (cb) => {
                  callbacks.push(cb);
                  _global.postMessage(token, '*');
                };
              })(`axios@${Math.random()}`, [])
            : (cb) => setTimeout(cb);
        })(typeof setImmediate === 'function', isFunction(_global.postMessage));
        const asap =
          typeof queueMicrotask !== 'undefined'
            ? queueMicrotask.bind(_global)
            : (typeof process !== 'undefined' && process.nextTick) ||
              _setImmediate;
        // *********************
        exports.default = {
          isArray,
          isArrayBuffer,
          isBuffer,
          isFormData,
          isArrayBufferView,
          isString,
          isNumber,
          isBoolean,
          isObject,
          isPlainObject,
          isReadableStream,
          isRequest,
          isResponse,
          isHeaders,
          isUndefined,
          isDate,
          isFile,
          isBlob,
          isRegExp,
          isFunction,
          isStream,
          isURLSearchParams,
          isTypedArray,
          isFileList,
          forEach,
          merge,
          extend,
          trim,
          stripBOM,
          inherits,
          toFlatObject,
          kindOf,
          kindOfTest,
          endsWith,
          toArray,
          forEachEntry,
          matchAll,
          isHTMLForm,
          hasOwnProperty,
          hasOwnProp: hasOwnProperty,
          reduceDescriptors,
          freezeMethods,
          toObjectSet,
          toCamelCase,
          noop,
          toFiniteNumber,
          findKey,
          global: _global,
          isContextDefined,
          isSpecCompliantForm,
          toJSONObject,
          isAsyncFn,
          isThenable,
          setImmediate: _setImmediate,
          asap,
        };
      },
      {
        a8d2c3349c87a903: 'gq3cc',
        './helpers/bind.js': 'cVXCT',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    gq3cc: [
      function (require, module, exports, __globalThis) {
        // shim for using process in browser
        var process = (module.exports = {});
        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.
        var cachedSetTimeout;
        var cachedClearTimeout;
        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined');
        }
        function defaultClearTimeout() {
          throw new Error('clearTimeout has not been defined');
        }
        (function () {
          try {
            if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
            else cachedSetTimeout = defaultSetTimout;
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === 'function')
              cachedClearTimeout = clearTimeout;
            else cachedClearTimeout = defaultClearTimeout;
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        })();
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout)
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          // if setTimeout wasn't available but was latter defined
          if (
            (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
            setTimeout
          ) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout)
            //normal enviroments in sane situations
            return clearTimeout(marker);
          // if clearTimeout wasn't available but was latter defined
          if (
            (cachedClearTimeout === defaultClearTimeout ||
              !cachedClearTimeout) &&
            clearTimeout
          ) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
            }
          }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;
        function cleanUpNextTick() {
          if (!draining || !currentQueue) return;
          draining = false;
          if (currentQueue.length) queue = currentQueue.concat(queue);
          else queueIndex = -1;
          if (queue.length) drainQueue();
        }
        function drainQueue() {
          if (draining) return;
          var timeout = runTimeout(cleanUpNextTick);
          draining = true;
          var len = queue.length;
          while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len)
              if (currentQueue) currentQueue[queueIndex].run();
            queueIndex = -1;
            len = queue.length;
          }
          currentQueue = null;
          draining = false;
          runClearTimeout(timeout);
        }
        process.nextTick = function (fun) {
          var args = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++)
              args[i - 1] = arguments[i];
          queue.push(new Item(fun, args));
          if (queue.length === 1 && !draining) runTimeout(drainQueue);
        };
        // v8 likes predictible objects
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item.prototype.run = function () {
          this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};
        function noop() {}
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;
        process.listeners = function (name) {
          return [];
        };
        process.binding = function (name) {
          throw new Error('process.binding is not supported');
        };
        process.cwd = function () {
          return '/';
        };
        process.chdir = function (dir) {
          throw new Error('process.chdir is not supported');
        };
        process.umask = function () {
          return 0;
        };
      },
      {},
    ],
    cVXCT: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => bind);
        ('use strict');
        function bind(fn, thisArg) {
          return function wrap() {
            return fn.apply(thisArg, arguments);
          };
        }
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    j7FRh: [
      function (require, module, exports, __globalThis) {
        exports.interopDefault = function (a) {
          return a && a.__esModule
            ? a
            : {
                default: a,
              };
        };
        exports.defineInteropFlag = function (a) {
          Object.defineProperty(a, '__esModule', {
            value: true,
          });
        };
        exports.exportAll = function (source, dest) {
          Object.keys(source).forEach(function (key) {
            if (
              key === 'default' ||
              key === '__esModule' ||
              Object.prototype.hasOwnProperty.call(dest, key)
            )
              return;
            Object.defineProperty(dest, key, {
              enumerable: true,
              get: function () {
                return source[key];
              },
            });
          });
          return dest;
        };
        exports.export = function (dest, destName, get) {
          Object.defineProperty(dest, destName, {
            enumerable: true,
            get: get,
          });
        };
      },
      {},
    ],
    gwL4I: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _utilsJs = require('./../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _buildURLJs = require('../helpers/buildURL.js');
        var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
        var _interceptorManagerJs = require('./InterceptorManager.js');
        var _interceptorManagerJsDefault = parcelHelpers.interopDefault(
          _interceptorManagerJs
        );
        var _dispatchRequestJs = require('./dispatchRequest.js');
        var _dispatchRequestJsDefault =
          parcelHelpers.interopDefault(_dispatchRequestJs);
        var _mergeConfigJs = require('./mergeConfig.js');
        var _mergeConfigJsDefault =
          parcelHelpers.interopDefault(_mergeConfigJs);
        var _buildFullPathJs = require('./buildFullPath.js');
        var _buildFullPathJsDefault =
          parcelHelpers.interopDefault(_buildFullPathJs);
        var _validatorJs = require('../helpers/validator.js');
        var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
        var _axiosHeadersJs = require('./AxiosHeaders.js');
        var _axiosHeadersJsDefault =
          parcelHelpers.interopDefault(_axiosHeadersJs);
        ('use strict');
        const validators = (0, _validatorJsDefault.default).validators;
        /**
         * Create a new instance of Axios
         *
         * @param {Object} instanceConfig The default config for the instance
         *
         * @return {Axios} A new instance of Axios
         */ class Axios {
          constructor(instanceConfig) {
            this.defaults = instanceConfig;
            this.interceptors = {
              request: new (0, _interceptorManagerJsDefault.default)(),
              response: new (0, _interceptorManagerJsDefault.default)(),
            };
          }
          /**
           * Dispatch a request
           *
           * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
           * @param {?Object} config
           *
           * @returns {Promise} The Promise to be fulfilled
           */ async request(configOrUrl, config) {
            try {
              return await this._request(configOrUrl, config);
            } catch (err) {
              if (err instanceof Error) {
                let dummy = {};
                Error.captureStackTrace
                  ? Error.captureStackTrace(dummy)
                  : (dummy = new Error());
                // slice off the Error: ... line
                const stack = dummy.stack
                  ? dummy.stack.replace(/^.+\n/, '')
                  : '';
                try {
                  if (!err.stack) err.stack = stack;
                  else if (
                    stack &&
                    !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))
                  )
                    err.stack += '\n' + stack;
                } catch (e) {
                  // ignore the case where "stack" is an un-writable property
                }
              }
              throw err;
            }
          }
          _request(configOrUrl, config) {
            /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
            if (typeof configOrUrl === 'string') {
              config = config || {};
              config.url = configOrUrl;
            } else config = configOrUrl || {};
            config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
            const { transitional, paramsSerializer, headers } = config;
            if (transitional !== undefined)
              (0, _validatorJsDefault.default).assertOptions(
                transitional,
                {
                  silentJSONParsing: validators.transitional(
                    validators.boolean
                  ),
                  forcedJSONParsing: validators.transitional(
                    validators.boolean
                  ),
                  clarifyTimeoutError: validators.transitional(
                    validators.boolean
                  ),
                },
                false
              );
            if (paramsSerializer != null) {
              if ((0, _utilsJsDefault.default).isFunction(paramsSerializer))
                config.paramsSerializer = {
                  serialize: paramsSerializer,
                };
              else
                (0, _validatorJsDefault.default).assertOptions(
                  paramsSerializer,
                  {
                    encode: validators.function,
                    serialize: validators.function,
                  },
                  true
                );
            }
            // Set config.allowAbsoluteUrls
            if (config.allowAbsoluteUrls !== undefined);
            else if (this.defaults.allowAbsoluteUrls !== undefined)
              config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
            else config.allowAbsoluteUrls = true;
            (0, _validatorJsDefault.default).assertOptions(
              config,
              {
                baseUrl: validators.spelling('baseURL'),
                withXsrfToken: validators.spelling('withXSRFToken'),
              },
              true
            );
            // Set config.method
            config.method = (
              config.method ||
              this.defaults.method ||
              'get'
            ).toLowerCase();
            // Flatten headers
            let contextHeaders =
              headers &&
              (0, _utilsJsDefault.default).merge(
                headers.common,
                headers[config.method]
              );
            headers &&
              (0, _utilsJsDefault.default).forEach(
                ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                (method) => {
                  delete headers[method];
                }
              );
            config.headers = (0, _axiosHeadersJsDefault.default).concat(
              contextHeaders,
              headers
            );
            // filter out skipped interceptors
            const requestInterceptorChain = [];
            let synchronousRequestInterceptors = true;
            this.interceptors.request.forEach(
              function unshiftRequestInterceptors(interceptor) {
                if (
                  typeof interceptor.runWhen === 'function' &&
                  interceptor.runWhen(config) === false
                )
                  return;
                synchronousRequestInterceptors =
                  synchronousRequestInterceptors && interceptor.synchronous;
                requestInterceptorChain.unshift(
                  interceptor.fulfilled,
                  interceptor.rejected
                );
              }
            );
            const responseInterceptorChain = [];
            this.interceptors.response.forEach(
              function pushResponseInterceptors(interceptor) {
                responseInterceptorChain.push(
                  interceptor.fulfilled,
                  interceptor.rejected
                );
              }
            );
            let promise;
            let i = 0;
            let len;
            if (!synchronousRequestInterceptors) {
              const chain = [
                (0, _dispatchRequestJsDefault.default).bind(this),
                undefined,
              ];
              chain.unshift.apply(chain, requestInterceptorChain);
              chain.push.apply(chain, responseInterceptorChain);
              len = chain.length;
              promise = Promise.resolve(config);
              while (i < len) promise = promise.then(chain[i++], chain[i++]);
              return promise;
            }
            len = requestInterceptorChain.length;
            let newConfig = config;
            i = 0;
            while (i < len) {
              const onFulfilled = requestInterceptorChain[i++];
              const onRejected = requestInterceptorChain[i++];
              try {
                newConfig = onFulfilled(newConfig);
              } catch (error) {
                onRejected.call(this, error);
                break;
              }
            }
            try {
              promise = (0, _dispatchRequestJsDefault.default).call(
                this,
                newConfig
              );
            } catch (error) {
              return Promise.reject(error);
            }
            i = 0;
            len = responseInterceptorChain.length;
            while (i < len)
              promise = promise.then(
                responseInterceptorChain[i++],
                responseInterceptorChain[i++]
              );
            return promise;
          }
          getUri(config) {
            config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
            const fullPath = (0, _buildFullPathJsDefault.default)(
              config.baseURL,
              config.url,
              config.allowAbsoluteUrls
            );
            return (0, _buildURLJsDefault.default)(
              fullPath,
              config.params,
              config.paramsSerializer
            );
          }
        }
        // Provide aliases for supported request methods
        (0, _utilsJsDefault.default).forEach(
          ['delete', 'get', 'head', 'options'],
          function forEachMethodNoData(method) {
            /*eslint func-names:0*/ Axios.prototype[method] = function (
              url,
              config
            ) {
              return this.request(
                (0, _mergeConfigJsDefault.default)(config || {}, {
                  method,
                  url,
                  data: (config || {}).data,
                })
              );
            };
          }
        );
        (0, _utilsJsDefault.default).forEach(
          ['post', 'put', 'patch'],
          function forEachMethodWithData(method) {
            /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
              return function httpMethod(url, data, config) {
                return this.request(
                  (0, _mergeConfigJsDefault.default)(config || {}, {
                    method,
                    headers: isForm
                      ? {
                          'Content-Type': 'multipart/form-data',
                        }
                      : {},
                    url,
                    data,
                  })
                );
              };
            }
            Axios.prototype[method] = generateHTTPMethod();
            Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
          }
        );
        exports.default = Axios;
      },
      {
        './../utils.js': 'lbtnr',
        '../helpers/buildURL.js': 'adWtE',
        './InterceptorManager.js': 'gGizQ',
        './dispatchRequest.js': '8uQRh',
        './mergeConfig.js': '1ogTa',
        './buildFullPath.js': 'bxNKA',
        '../helpers/validator.js': 'isK1r',
        './AxiosHeaders.js': 'eHpg9',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    adWtE: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => buildURL);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _axiosURLSearchParamsJs = require('../helpers/AxiosURLSearchParams.js');
        var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(
          _axiosURLSearchParamsJs
        );
        ('use strict');
        /**
         * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
         * URI encoded counterparts
         *
         * @param {string} val The value to be encoded.
         *
         * @returns {string} The encoded value.
         */ function encode(val) {
          return encodeURIComponent(val)
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',')
            .replace(/%20/g, '+')
            .replace(/%5B/gi, '[')
            .replace(/%5D/gi, ']');
        }
        function buildURL(url, params, options) {
          /*eslint no-param-reassign:0*/ if (!params) return url;
          const _encode = (options && options.encode) || encode;
          if ((0, _utilsJsDefault.default).isFunction(options))
            options = {
              serialize: options,
            };
          const serializeFn = options && options.serialize;
          let serializedParams;
          if (serializeFn) serializedParams = serializeFn(params, options);
          else
            serializedParams = (0, _utilsJsDefault.default).isURLSearchParams(
              params
            )
              ? params.toString()
              : new (0, _axiosURLSearchParamsJsDefault.default)(
                  params,
                  options
                ).toString(_encode);
          if (serializedParams) {
            const hashmarkIndex = url.indexOf('#');
            if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
            url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
          }
          return url;
        }
      },
      {
        '../utils.js': 'lbtnr',
        '../helpers/AxiosURLSearchParams.js': '8JlJO',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '8JlJO': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _toFormDataJs = require('./toFormData.js');
        var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
        ('use strict');
        /**
         * It encodes a string by replacing all characters that are not in the unreserved set with
         * their percent-encoded equivalents
         *
         * @param {string} str - The string to encode.
         *
         * @returns {string} The encoded string.
         */ function encode(str) {
          const charMap = {
            '!': '%21',
            "'": '%27',
            '(': '%28',
            ')': '%29',
            '~': '%7E',
            '%20': '+',
            '%00': '\x00',
          };
          return encodeURIComponent(str).replace(
            /[!'()~]|%20|%00/g,
            function replacer(match) {
              return charMap[match];
            }
          );
        }
        /**
         * It takes a params object and converts it to a FormData object
         *
         * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
         * @param {Object<string, any>} options - The options object passed to the Axios constructor.
         *
         * @returns {void}
         */ function AxiosURLSearchParams(params, options) {
          this._pairs = [];
          params && (0, _toFormDataJsDefault.default)(params, this, options);
        }
        const prototype = AxiosURLSearchParams.prototype;
        prototype.append = function append(name, value) {
          this._pairs.push([name, value]);
        };
        prototype.toString = function toString(encoder) {
          const _encode = encoder
            ? function (value) {
                return encoder.call(this, value, encode);
              }
            : encode;
          return this._pairs
            .map(function each(pair) {
              return _encode(pair[0]) + '=' + _encode(pair[1]);
            }, '')
            .join('&');
        };
        exports.default = AxiosURLSearchParams;
      },
      {
        './toFormData.js': 'jJQ5Z',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    jJQ5Z: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _axiosErrorJs = require('../core/AxiosError.js');
        var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
        // temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
        var _formDataJs = require('../platform/node/classes/FormData.js');
        var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
        var Buffer = require('adfd9b103875c2dd').Buffer;
        ('use strict');
        /**
         * Determines if the given thing is a array or js object.
         *
         * @param {string} thing - The object or array to be visited.
         *
         * @returns {boolean}
         */ function isVisitable(thing) {
          return (
            (0, _utilsJsDefault.default).isPlainObject(thing) ||
            (0, _utilsJsDefault.default).isArray(thing)
          );
        }
        /**
         * It removes the brackets from the end of a string
         *
         * @param {string} key - The key of the parameter.
         *
         * @returns {string} the key without the brackets.
         */ function removeBrackets(key) {
          return (0, _utilsJsDefault.default).endsWith(key, '[]')
            ? key.slice(0, -2)
            : key;
        }
        /**
         * It takes a path, a key, and a boolean, and returns a string
         *
         * @param {string} path - The path to the current key.
         * @param {string} key - The key of the current object being iterated over.
         * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
         *
         * @returns {string} The path to the current key.
         */ function renderKey(path, key, dots) {
          if (!path) return key;
          return path
            .concat(key)
            .map(function each(token, i) {
              // eslint-disable-next-line no-param-reassign
              token = removeBrackets(token);
              return !dots && i ? '[' + token + ']' : token;
            })
            .join(dots ? '.' : '');
        }
        /**
         * If the array is an array and none of its elements are visitable, then it's a flat array.
         *
         * @param {Array<any>} arr - The array to check
         *
         * @returns {boolean}
         */ function isFlatArray(arr) {
          return (
            (0, _utilsJsDefault.default).isArray(arr) && !arr.some(isVisitable)
          );
        }
        const predicates = (0, _utilsJsDefault.default).toFlatObject(
          (0, _utilsJsDefault.default),
          {},
          null,
          function filter(prop) {
            return /^is[A-Z]/.test(prop);
          }
        );
        /**
         * Convert a data object to FormData
         *
         * @param {Object} obj
         * @param {?Object} [formData]
         * @param {?Object} [options]
         * @param {Function} [options.visitor]
         * @param {Boolean} [options.metaTokens = true]
         * @param {Boolean} [options.dots = false]
         * @param {?Boolean} [options.indexes = false]
         *
         * @returns {Object}
         **/ /**
         * It converts an object into a FormData object
         *
         * @param {Object<any, any>} obj - The object to convert to form data.
         * @param {string} formData - The FormData object to append to.
         * @param {Object<string, any>} options
         *
         * @returns
         */ function toFormData(obj, formData, options) {
          if (!(0, _utilsJsDefault.default).isObject(obj))
            throw new TypeError('target must be an object');
          // eslint-disable-next-line no-param-reassign
          formData =
            formData || new ((0, _formDataJsDefault.default) || FormData)();
          // eslint-disable-next-line no-param-reassign
          options = (0, _utilsJsDefault.default).toFlatObject(
            options,
            {
              metaTokens: true,
              dots: false,
              indexes: false,
            },
            false,
            function defined(option, source) {
              // eslint-disable-next-line no-eq-null,eqeqeq
              return !(0, _utilsJsDefault.default).isUndefined(source[option]);
            }
          );
          const metaTokens = options.metaTokens;
          // eslint-disable-next-line no-use-before-define
          const visitor = options.visitor || defaultVisitor;
          const dots = options.dots;
          const indexes = options.indexes;
          const _Blob = options.Blob || (typeof Blob !== 'undefined' && Blob);
          const useBlob =
            _Blob && (0, _utilsJsDefault.default).isSpecCompliantForm(formData);
          if (!(0, _utilsJsDefault.default).isFunction(visitor))
            throw new TypeError('visitor must be a function');
          function convertValue(value) {
            if (value === null) return '';
            if ((0, _utilsJsDefault.default).isDate(value))
              return value.toISOString();
            if (!useBlob && (0, _utilsJsDefault.default).isBlob(value))
              throw new (0, _axiosErrorJsDefault.default)(
                'Blob is not supported. Use a Buffer instead.'
              );
            if (
              (0, _utilsJsDefault.default).isArrayBuffer(value) ||
              (0, _utilsJsDefault.default).isTypedArray(value)
            )
              return useBlob && typeof Blob === 'function'
                ? new Blob([value])
                : Buffer.from(value);
            return value;
          }
          /**
           * Default visitor.
           *
           * @param {*} value
           * @param {String|Number} key
           * @param {Array<String|Number>} path
           * @this {FormData}
           *
           * @returns {boolean} return true to visit the each prop of the value recursively
           */ function defaultVisitor(value, key, path) {
            let arr = value;
            if (value && !path && typeof value === 'object') {
              if ((0, _utilsJsDefault.default).endsWith(key, '{}')) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
              } else if (
                ((0, _utilsJsDefault.default).isArray(value) &&
                  isFlatArray(value)) ||
                (((0, _utilsJsDefault.default).isFileList(value) ||
                  (0, _utilsJsDefault.default).endsWith(key, '[]')) &&
                  (arr = (0, _utilsJsDefault.default).toArray(value)))
              ) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                  !(
                    (0, _utilsJsDefault.default).isUndefined(el) || el === null
                  ) &&
                    formData.append(
                      // eslint-disable-next-line no-nested-ternary
                      indexes === true
                        ? renderKey([key], index, dots)
                        : indexes === null
                          ? key
                          : key + '[]',
                      convertValue(el)
                    );
                });
                return false;
              }
            }
            if (isVisitable(value)) return true;
            formData.append(renderKey(path, key, dots), convertValue(value));
            return false;
          }
          const stack = [];
          const exposedHelpers = Object.assign(predicates, {
            defaultVisitor,
            convertValue,
            isVisitable,
          });
          function build(value, path) {
            if ((0, _utilsJsDefault.default).isUndefined(value)) return;
            if (stack.indexOf(value) !== -1)
              throw Error('Circular reference detected in ' + path.join('.'));
            stack.push(value);
            (0, _utilsJsDefault.default).forEach(value, function each(el, key) {
              const result =
                !(
                  (0, _utilsJsDefault.default).isUndefined(el) || el === null
                ) &&
                visitor.call(
                  formData,
                  el,
                  (0, _utilsJsDefault.default).isString(key) ? key.trim() : key,
                  path,
                  exposedHelpers
                );
              if (result === true) build(el, path ? path.concat(key) : [key]);
            });
            stack.pop();
          }
          if (!(0, _utilsJsDefault.default).isObject(obj))
            throw new TypeError('data must be an object');
          build(obj);
          return formData;
        }
        exports.default = toFormData;
      },
      {
        adfd9b103875c2dd: '6tQNr',
        '../utils.js': 'lbtnr',
        '../core/AxiosError.js': 'fxYQp',
        '../platform/node/classes/FormData.js': 'eDh7d',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '6tQNr': [
      function (require, module, exports, __globalThis) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */ /* eslint-disable no-proto */ 'use strict';
        const base64 = require('9c62938f1dccc73c');
        const ieee754 = require('aceacb6a4531a9d2');
        const customInspectSymbol =
          typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
            ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
            : null;
        exports.Buffer = Buffer;
        exports.SlowBuffer = SlowBuffer;
        exports.INSPECT_MAX_BYTES = 50;
        const K_MAX_LENGTH = 0x7fffffff;
        exports.kMaxLength = K_MAX_LENGTH;
        /**
         * If `Buffer.TYPED_ARRAY_SUPPORT`:
         *   === true    Use Uint8Array implementation (fastest)
         *   === false   Print warning and recommend using `buffer` v4.x which has an Object
         *               implementation (most compatible, even IE6)
         *
         * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
         * Opera 11.6+, iOS 4.2+.
         *
         * We report that the browser does not support typed arrays if the are not subclassable
         * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
         * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
         * for __proto__ and has a buggy typed array implementation.
         */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
        if (
          !Buffer.TYPED_ARRAY_SUPPORT &&
          typeof console !== 'undefined' &&
          typeof console.error === 'function'
        )
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          );
        function typedArraySupport() {
          // Can typed array instances can be augmented?
          try {
            const arr = new Uint8Array(1);
            const proto = {
              foo: function () {
                return 42;
              },
            };
            Object.setPrototypeOf(proto, Uint8Array.prototype);
            Object.setPrototypeOf(arr, proto);
            return arr.foo() === 42;
          } catch (e) {
            return false;
          }
        }
        Object.defineProperty(Buffer.prototype, 'parent', {
          enumerable: true,
          get: function () {
            if (!Buffer.isBuffer(this)) return undefined;
            return this.buffer;
          },
        });
        Object.defineProperty(Buffer.prototype, 'offset', {
          enumerable: true,
          get: function () {
            if (!Buffer.isBuffer(this)) return undefined;
            return this.byteOffset;
          },
        });
        function createBuffer(length) {
          if (length > K_MAX_LENGTH)
            throw new RangeError(
              'The value "' + length + '" is invalid for option "size"'
            );
          // Return an augmented `Uint8Array` instance
          const buf = new Uint8Array(length);
          Object.setPrototypeOf(buf, Buffer.prototype);
          return buf;
        }
        /**
         * The Buffer constructor returns instances of `Uint8Array` that have their
         * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
         * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
         * and the `Uint8Array` methods. Square bracket notation works as expected -- it
         * returns a single octet.
         *
         * The `Uint8Array` prototype remains unmodified.
         */ function Buffer(arg, encodingOrOffset, length) {
          // Common case.
          if (typeof arg === 'number') {
            if (typeof encodingOrOffset === 'string')
              throw new TypeError(
                'The "string" argument must be of type string. Received type number'
              );
            return allocUnsafe(arg);
          }
          return from(arg, encodingOrOffset, length);
        }
        Buffer.poolSize = 8192; // not used by this implementation
        function from(value, encodingOrOffset, length) {
          if (typeof value === 'string')
            return fromString(value, encodingOrOffset);
          if (ArrayBuffer.isView(value)) return fromArrayView(value);
          if (value == null)
            throw new TypeError(
              'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                typeof value
            );
          if (
            isInstance(value, ArrayBuffer) ||
            (value && isInstance(value.buffer, ArrayBuffer))
          )
            return fromArrayBuffer(value, encodingOrOffset, length);
          if (
            typeof SharedArrayBuffer !== 'undefined' &&
            (isInstance(value, SharedArrayBuffer) ||
              (value && isInstance(value.buffer, SharedArrayBuffer)))
          )
            return fromArrayBuffer(value, encodingOrOffset, length);
          if (typeof value === 'number')
            throw new TypeError(
              'The "value" argument must not be of type number. Received type number'
            );
          const valueOf = value.valueOf && value.valueOf();
          if (valueOf != null && valueOf !== value)
            return Buffer.from(valueOf, encodingOrOffset, length);
          const b = fromObject(value);
          if (b) return b;
          if (
            typeof Symbol !== 'undefined' &&
            Symbol.toPrimitive != null &&
            typeof value[Symbol.toPrimitive] === 'function'
          )
            return Buffer.from(
              value[Symbol.toPrimitive]('string'),
              encodingOrOffset,
              length
            );
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof value
          );
        }
        /**
         * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
         * if value is a number.
         * Buffer.from(str[, encoding])
         * Buffer.from(array)
         * Buffer.from(buffer)
         * Buffer.from(arrayBuffer[, byteOffset[, length]])
         **/ Buffer.from = function (value, encodingOrOffset, length) {
          return from(value, encodingOrOffset, length);
        };
        // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
        // https://github.com/feross/buffer/pull/148
        Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
        Object.setPrototypeOf(Buffer, Uint8Array);
        function assertSize(size) {
          if (typeof size !== 'number')
            throw new TypeError('"size" argument must be of type number');
          else if (size < 0)
            throw new RangeError(
              'The value "' + size + '" is invalid for option "size"'
            );
        }
        function alloc(size, fill, encoding) {
          assertSize(size);
          if (size <= 0) return createBuffer(size);
          if (fill !== undefined)
            // Only pay attention to encoding if it's a string. This
            // prevents accidentally sending in a number that would
            // be interpreted as a start offset.
            return typeof encoding === 'string'
              ? createBuffer(size).fill(fill, encoding)
              : createBuffer(size).fill(fill);
          return createBuffer(size);
        }
        /**
         * Creates a new filled Buffer instance.
         * alloc(size[, fill[, encoding]])
         **/ Buffer.alloc = function (size, fill, encoding) {
          return alloc(size, fill, encoding);
        };
        function allocUnsafe(size) {
          assertSize(size);
          return createBuffer(size < 0 ? 0 : checked(size) | 0);
        }
        /**
         * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
         * */ Buffer.allocUnsafe = function (size) {
          return allocUnsafe(size);
        };
        /**
         * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
         */ Buffer.allocUnsafeSlow = function (size) {
          return allocUnsafe(size);
        };
        function fromString(string, encoding) {
          if (typeof encoding !== 'string' || encoding === '')
            encoding = 'utf8';
          if (!Buffer.isEncoding(encoding))
            throw new TypeError('Unknown encoding: ' + encoding);
          const length = byteLength(string, encoding) | 0;
          let buf = createBuffer(length);
          const actual = buf.write(string, encoding);
          if (actual !== length)
            // Writing a hex string, for example, that contains invalid characters will
            // cause everything after the first invalid character to be ignored. (e.g.
            // 'abxxcd' will be treated as 'ab')
            buf = buf.slice(0, actual);
          return buf;
        }
        function fromArrayLike(array) {
          const length = array.length < 0 ? 0 : checked(array.length) | 0;
          const buf = createBuffer(length);
          for (let i = 0; i < length; i += 1) buf[i] = array[i] & 255;
          return buf;
        }
        function fromArrayView(arrayView) {
          if (isInstance(arrayView, Uint8Array)) {
            const copy = new Uint8Array(arrayView);
            return fromArrayBuffer(
              copy.buffer,
              copy.byteOffset,
              copy.byteLength
            );
          }
          return fromArrayLike(arrayView);
        }
        function fromArrayBuffer(array, byteOffset, length) {
          if (byteOffset < 0 || array.byteLength < byteOffset)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (array.byteLength < byteOffset + (length || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          let buf;
          if (byteOffset === undefined && length === undefined)
            buf = new Uint8Array(array);
          else if (length === undefined)
            buf = new Uint8Array(array, byteOffset);
          else buf = new Uint8Array(array, byteOffset, length);
          // Return an augmented `Uint8Array` instance
          Object.setPrototypeOf(buf, Buffer.prototype);
          return buf;
        }
        function fromObject(obj) {
          if (Buffer.isBuffer(obj)) {
            const len = checked(obj.length) | 0;
            const buf = createBuffer(len);
            if (buf.length === 0) return buf;
            obj.copy(buf, 0, 0, len);
            return buf;
          }
          if (obj.length !== undefined) {
            if (typeof obj.length !== 'number' || numberIsNaN(obj.length))
              return createBuffer(0);
            return fromArrayLike(obj);
          }
          if (obj.type === 'Buffer' && Array.isArray(obj.data))
            return fromArrayLike(obj.data);
        }
        function checked(length) {
          // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
          // length is NaN (which is otherwise coerced to zero.)
          if (length >= K_MAX_LENGTH)
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' +
                K_MAX_LENGTH.toString(16) +
                ' bytes'
            );
          return length | 0;
        }
        function SlowBuffer(length) {
          if (+length != length) length = 0;
          return Buffer.alloc(+length);
        }
        Buffer.isBuffer = function isBuffer(b) {
          return (
            b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
          );
        };
        Buffer.compare = function compare(a, b) {
          if (isInstance(a, Uint8Array))
            a = Buffer.from(a, a.offset, a.byteLength);
          if (isInstance(b, Uint8Array))
            b = Buffer.from(b, b.offset, b.byteLength);
          if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (a === b) return 0;
          let x = a.length;
          let y = b.length;
          for (let i = 0, len = Math.min(x, y); i < len; ++i)
            if (a[i] !== b[i]) {
              x = a[i];
              y = b[i];
              break;
            }
          if (x < y) return -1;
          if (y < x) return 1;
          return 0;
        };
        Buffer.isEncoding = function isEncoding(encoding) {
          switch (String(encoding).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return true;
            default:
              return false;
          }
        };
        Buffer.concat = function concat(list, length) {
          if (!Array.isArray(list))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (list.length === 0) return Buffer.alloc(0);
          let i;
          if (length === undefined) {
            length = 0;
            for (i = 0; i < list.length; ++i) length += list[i].length;
          }
          const buffer = Buffer.allocUnsafe(length);
          let pos = 0;
          for (i = 0; i < list.length; ++i) {
            let buf = list[i];
            if (isInstance(buf, Uint8Array)) {
              if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
              } else Uint8Array.prototype.set.call(buffer, buf, pos);
            } else if (!Buffer.isBuffer(buf))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            else buf.copy(buffer, pos);
            pos += buf.length;
          }
          return buffer;
        };
        function byteLength(string, encoding) {
          if (Buffer.isBuffer(string)) return string.length;
          if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer))
            return string.byteLength;
          if (typeof string !== 'string')
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof string
            );
          const len = string.length;
          const mustMatch = arguments.length > 2 && arguments[2] === true;
          if (!mustMatch && len === 0) return 0;
          // Use a for loop to avoid recursion
          let loweredCase = false;
          for (;;)
            switch (encoding) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return len;
              case 'utf8':
              case 'utf-8':
                return utf8ToBytes(string).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return len * 2;
              case 'hex':
                return len >>> 1;
              case 'base64':
                return base64ToBytes(string).length;
              default:
                if (loweredCase)
                  return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
            }
        }
        Buffer.byteLength = byteLength;
        function slowToString(encoding, start, end) {
          let loweredCase = false;
          // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
          // property of a typed array.
          // This behaves neither like String nor Uint8Array in that we set start/end
          // to their upper/lower bounds if the value passed is out of range.
          // undefined is handled specially as per ECMA-262 6th Edition,
          // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
          if (start === undefined || start < 0) start = 0;
          // Return early if start > this.length. Done here to prevent potential uint32
          // coercion fail below.
          if (start > this.length) return '';
          if (end === undefined || end > this.length) end = this.length;
          if (end <= 0) return '';
          // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
          end >>>= 0;
          start >>>= 0;
          if (end <= start) return '';
          if (!encoding) encoding = 'utf8';
          while (true)
            switch (encoding) {
              case 'hex':
                return hexSlice(this, start, end);
              case 'utf8':
              case 'utf-8':
                return utf8Slice(this, start, end);
              case 'ascii':
                return asciiSlice(this, start, end);
              case 'latin1':
              case 'binary':
                return latin1Slice(this, start, end);
              case 'base64':
                return base64Slice(this, start, end);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return utf16leSlice(this, start, end);
              default:
                if (loweredCase)
                  throw new TypeError('Unknown encoding: ' + encoding);
                encoding = (encoding + '').toLowerCase();
                loweredCase = true;
            }
        }
        // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
        // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
        // reliably in a browserify context because there could be multiple different
        // copies of the 'buffer' package in use. This method works even for Buffer
        // instances that were created from another copy of the `buffer` package.
        // See: https://github.com/feross/buffer/issues/154
        Buffer.prototype._isBuffer = true;
        function swap(b, n, m) {
          const i = b[n];
          b[n] = b[m];
          b[m] = i;
        }
        Buffer.prototype.swap16 = function swap16() {
          const len = this.length;
          if (len % 2 !== 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (let i = 0; i < len; i += 2) swap(this, i, i + 1);
          return this;
        };
        Buffer.prototype.swap32 = function swap32() {
          const len = this.length;
          if (len % 4 !== 0)
            throw new RangeError('Buffer size must be a multiple of 32-bits');
          for (let i = 0; i < len; i += 4) {
            swap(this, i, i + 3);
            swap(this, i + 1, i + 2);
          }
          return this;
        };
        Buffer.prototype.swap64 = function swap64() {
          const len = this.length;
          if (len % 8 !== 0)
            throw new RangeError('Buffer size must be a multiple of 64-bits');
          for (let i = 0; i < len; i += 8) {
            swap(this, i, i + 7);
            swap(this, i + 1, i + 6);
            swap(this, i + 2, i + 5);
            swap(this, i + 3, i + 4);
          }
          return this;
        };
        Buffer.prototype.toString = function toString() {
          const length = this.length;
          if (length === 0) return '';
          if (arguments.length === 0) return utf8Slice(this, 0, length);
          return slowToString.apply(this, arguments);
        };
        Buffer.prototype.toLocaleString = Buffer.prototype.toString;
        Buffer.prototype.equals = function equals(b) {
          if (!Buffer.isBuffer(b))
            throw new TypeError('Argument must be a Buffer');
          if (this === b) return true;
          return Buffer.compare(this, b) === 0;
        };
        Buffer.prototype.inspect = function inspect() {
          let str = '';
          const max = exports.INSPECT_MAX_BYTES;
          str = this.toString('hex', 0, max)
            .replace(/(.{2})/g, '$1 ')
            .trim();
          if (this.length > max) str += ' ... ';
          return '<Buffer ' + str + '>';
        };
        if (customInspectSymbol)
          Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
        Buffer.prototype.compare = function compare(
          target,
          start,
          end,
          thisStart,
          thisEnd
        ) {
          if (isInstance(target, Uint8Array))
            target = Buffer.from(target, target.offset, target.byteLength);
          if (!Buffer.isBuffer(target))
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof target
            );
          if (start === undefined) start = 0;
          if (end === undefined) end = target ? target.length : 0;
          if (thisStart === undefined) thisStart = 0;
          if (thisEnd === undefined) thisEnd = this.length;
          if (
            start < 0 ||
            end > target.length ||
            thisStart < 0 ||
            thisEnd > this.length
          )
            throw new RangeError('out of range index');
          if (thisStart >= thisEnd && start >= end) return 0;
          if (thisStart >= thisEnd) return -1;
          if (start >= end) return 1;
          start >>>= 0;
          end >>>= 0;
          thisStart >>>= 0;
          thisEnd >>>= 0;
          if (this === target) return 0;
          let x = thisEnd - thisStart;
          let y = end - start;
          const len = Math.min(x, y);
          const thisCopy = this.slice(thisStart, thisEnd);
          const targetCopy = target.slice(start, end);
          for (let i = 0; i < len; ++i)
            if (thisCopy[i] !== targetCopy[i]) {
              x = thisCopy[i];
              y = targetCopy[i];
              break;
            }
          if (x < y) return -1;
          if (y < x) return 1;
          return 0;
        };
        // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
        // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
        //
        // Arguments:
        // - buffer - a Buffer to search
        // - val - a string, Buffer, or number
        // - byteOffset - an index into `buffer`; will be clamped to an int32
        // - encoding - an optional encoding, relevant is val is a string
        // - dir - true for indexOf, false for lastIndexOf
        function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
          // Empty buffer means no match
          if (buffer.length === 0) return -1;
          // Normalize byteOffset
          if (typeof byteOffset === 'string') {
            encoding = byteOffset;
            byteOffset = 0;
          } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
          else if (byteOffset < -2147483648) byteOffset = -2147483648;
          byteOffset = +byteOffset; // Coerce to Number.
          if (numberIsNaN(byteOffset))
            // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
            byteOffset = dir ? 0 : buffer.length - 1;
          // Normalize byteOffset: negative offsets start from the end of the buffer
          if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
          if (byteOffset >= buffer.length) {
            if (dir) return -1;
            else byteOffset = buffer.length - 1;
          } else if (byteOffset < 0) {
            if (dir) byteOffset = 0;
            else return -1;
          }
          // Normalize val
          if (typeof val === 'string') val = Buffer.from(val, encoding);
          // Finally, search either indexOf (if dir is true) or lastIndexOf
          if (Buffer.isBuffer(val)) {
            // Special case: looking for empty string/buffer always fails
            if (val.length === 0) return -1;
            return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
          } else if (typeof val === 'number') {
            val = val & 0xff; // Search for a byte value [0-255]
            if (typeof Uint8Array.prototype.indexOf === 'function') {
              if (dir)
                return Uint8Array.prototype.indexOf.call(
                  buffer,
                  val,
                  byteOffset
                );
              else
                return Uint8Array.prototype.lastIndexOf.call(
                  buffer,
                  val,
                  byteOffset
                );
            }
            return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
          }
          throw new TypeError('val must be string, number or Buffer');
        }
        function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
          let indexSize = 1;
          let arrLength = arr.length;
          let valLength = val.length;
          if (encoding !== undefined) {
            encoding = String(encoding).toLowerCase();
            if (
              encoding === 'ucs2' ||
              encoding === 'ucs-2' ||
              encoding === 'utf16le' ||
              encoding === 'utf-16le'
            ) {
              if (arr.length < 2 || val.length < 2) return -1;
              indexSize = 2;
              arrLength /= 2;
              valLength /= 2;
              byteOffset /= 2;
            }
          }
          function read(buf, i) {
            if (indexSize === 1) return buf[i];
            else return buf.readUInt16BE(i * indexSize);
          }
          let i;
          if (dir) {
            let foundIndex = -1;
            for (i = byteOffset; i < arrLength; i++)
              if (
                read(arr, i) ===
                read(val, foundIndex === -1 ? 0 : i - foundIndex)
              ) {
                if (foundIndex === -1) foundIndex = i;
                if (i - foundIndex + 1 === valLength)
                  return foundIndex * indexSize;
              } else {
                if (foundIndex !== -1) i -= i - foundIndex;
                foundIndex = -1;
              }
          } else {
            if (byteOffset + valLength > arrLength)
              byteOffset = arrLength - valLength;
            for (i = byteOffset; i >= 0; i--) {
              let found = true;
              for (let j = 0; j < valLength; j++)
                if (read(arr, i + j) !== read(val, j)) {
                  found = false;
                  break;
                }
              if (found) return i;
            }
          }
          return -1;
        }
        Buffer.prototype.includes = function includes(
          val,
          byteOffset,
          encoding
        ) {
          return this.indexOf(val, byteOffset, encoding) !== -1;
        };
        Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
          return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
        };
        Buffer.prototype.lastIndexOf = function lastIndexOf(
          val,
          byteOffset,
          encoding
        ) {
          return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
        };
        function hexWrite(buf, string, offset, length) {
          offset = Number(offset) || 0;
          const remaining = buf.length - offset;
          if (!length) length = remaining;
          else {
            length = Number(length);
            if (length > remaining) length = remaining;
          }
          const strLen = string.length;
          if (length > strLen / 2) length = strLen / 2;
          let i;
          for (i = 0; i < length; ++i) {
            const parsed = parseInt(string.substr(i * 2, 2), 16);
            if (numberIsNaN(parsed)) return i;
            buf[offset + i] = parsed;
          }
          return i;
        }
        function utf8Write(buf, string, offset, length) {
          return blitBuffer(
            utf8ToBytes(string, buf.length - offset),
            buf,
            offset,
            length
          );
        }
        function asciiWrite(buf, string, offset, length) {
          return blitBuffer(asciiToBytes(string), buf, offset, length);
        }
        function base64Write(buf, string, offset, length) {
          return blitBuffer(base64ToBytes(string), buf, offset, length);
        }
        function ucs2Write(buf, string, offset, length) {
          return blitBuffer(
            utf16leToBytes(string, buf.length - offset),
            buf,
            offset,
            length
          );
        }
        Buffer.prototype.write = function write(
          string,
          offset,
          length,
          encoding
        ) {
          // Buffer#write(string)
          if (offset === undefined) {
            encoding = 'utf8';
            length = this.length;
            offset = 0;
            // Buffer#write(string, encoding)
          } else if (length === undefined && typeof offset === 'string') {
            encoding = offset;
            length = this.length;
            offset = 0;
            // Buffer#write(string, offset[, length][, encoding])
          } else if (isFinite(offset)) {
            offset = offset >>> 0;
            if (isFinite(length)) {
              length = length >>> 0;
              if (encoding === undefined) encoding = 'utf8';
            } else {
              encoding = length;
              length = undefined;
            }
          } else
            throw new Error(
              'Buffer.write(string, encoding, offset[, length]) is no longer supported'
            );
          const remaining = this.length - offset;
          if (length === undefined || length > remaining) length = remaining;
          if (
            (string.length > 0 && (length < 0 || offset < 0)) ||
            offset > this.length
          )
            throw new RangeError('Attempt to write outside buffer bounds');
          if (!encoding) encoding = 'utf8';
          let loweredCase = false;
          for (;;)
            switch (encoding) {
              case 'hex':
                return hexWrite(this, string, offset, length);
              case 'utf8':
              case 'utf-8':
                return utf8Write(this, string, offset, length);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return asciiWrite(this, string, offset, length);
              case 'base64':
                // Warning: maxLength not taken into account in base64Write
                return base64Write(this, string, offset, length);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return ucs2Write(this, string, offset, length);
              default:
                if (loweredCase)
                  throw new TypeError('Unknown encoding: ' + encoding);
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
            }
        };
        Buffer.prototype.toJSON = function toJSON() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        };
        function base64Slice(buf, start, end) {
          if (start === 0 && end === buf.length)
            return base64.fromByteArray(buf);
          else return base64.fromByteArray(buf.slice(start, end));
        }
        function utf8Slice(buf, start, end) {
          end = Math.min(buf.length, end);
          const res = [];
          let i = start;
          while (i < end) {
            const firstByte = buf[i];
            let codePoint = null;
            let bytesPerSequence =
              firstByte > 0xef
                ? 4
                : firstByte > 0xdf
                  ? 3
                  : firstByte > 0xbf
                    ? 2
                    : 1;
            if (i + bytesPerSequence <= end) {
              let secondByte, thirdByte, fourthByte, tempCodePoint;
              switch (bytesPerSequence) {
                case 1:
                  if (firstByte < 0x80) codePoint = firstByte;
                  break;
                case 2:
                  secondByte = buf[i + 1];
                  if ((secondByte & 0xc0) === 0x80) {
                    tempCodePoint =
                      ((firstByte & 0x1f) << 0x6) | (secondByte & 0x3f);
                    if (tempCodePoint > 0x7f) codePoint = tempCodePoint;
                  }
                  break;
                case 3:
                  secondByte = buf[i + 1];
                  thirdByte = buf[i + 2];
                  if (
                    (secondByte & 0xc0) === 0x80 &&
                    (thirdByte & 0xc0) === 0x80
                  ) {
                    tempCodePoint =
                      ((firstByte & 0xf) << 0xc) |
                      ((secondByte & 0x3f) << 0x6) |
                      (thirdByte & 0x3f);
                    if (
                      tempCodePoint > 0x7ff &&
                      (tempCodePoint < 0xd800 || tempCodePoint > 0xdfff)
                    )
                      codePoint = tempCodePoint;
                  }
                  break;
                case 4:
                  secondByte = buf[i + 1];
                  thirdByte = buf[i + 2];
                  fourthByte = buf[i + 3];
                  if (
                    (secondByte & 0xc0) === 0x80 &&
                    (thirdByte & 0xc0) === 0x80 &&
                    (fourthByte & 0xc0) === 0x80
                  ) {
                    tempCodePoint =
                      ((firstByte & 0xf) << 0x12) |
                      ((secondByte & 0x3f) << 0xc) |
                      ((thirdByte & 0x3f) << 0x6) |
                      (fourthByte & 0x3f);
                    if (tempCodePoint > 0xffff && tempCodePoint < 0x110000)
                      codePoint = tempCodePoint;
                  }
              }
            }
            if (codePoint === null) {
              // we did not generate a valid codePoint so insert a
              // replacement char (U+FFFD) and advance only 1 byte
              codePoint = 0xfffd;
              bytesPerSequence = 1;
            } else if (codePoint > 0xffff) {
              // encode to utf16 (surrogate pair dance)
              codePoint -= 0x10000;
              res.push(((codePoint >>> 10) & 0x3ff) | 0xd800);
              codePoint = 0xdc00 | (codePoint & 0x3ff);
            }
            res.push(codePoint);
            i += bytesPerSequence;
          }
          return decodeCodePointsArray(res);
        }
        // Based on http://stackoverflow.com/a/22747272/680742, the browser with
        // the lowest limit is Chrome, with 0x10000 args.
        // We go 1 magnitude less, for safety
        const MAX_ARGUMENTS_LENGTH = 0x1000;
        function decodeCodePointsArray(codePoints) {
          const len = codePoints.length;
          if (len <= MAX_ARGUMENTS_LENGTH)
            return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
          // Decode in chunks to avoid "call stack size exceeded".
          let res = '';
          let i = 0;
          while (i < len)
            res += String.fromCharCode.apply(
              String,
              codePoints.slice(i, (i += MAX_ARGUMENTS_LENGTH))
            );
          return res;
        }
        function asciiSlice(buf, start, end) {
          let ret = '';
          end = Math.min(buf.length, end);
          for (let i = start; i < end; ++i)
            ret += String.fromCharCode(buf[i] & 0x7f);
          return ret;
        }
        function latin1Slice(buf, start, end) {
          let ret = '';
          end = Math.min(buf.length, end);
          for (let i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
          return ret;
        }
        function hexSlice(buf, start, end) {
          const len = buf.length;
          if (!start || start < 0) start = 0;
          if (!end || end < 0 || end > len) end = len;
          let out = '';
          for (let i = start; i < end; ++i) out += hexSliceLookupTable[buf[i]];
          return out;
        }
        function utf16leSlice(buf, start, end) {
          const bytes = buf.slice(start, end);
          let res = '';
          // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
          for (let i = 0; i < bytes.length - 1; i += 2)
            res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
          return res;
        }
        Buffer.prototype.slice = function slice(start, end) {
          const len = this.length;
          start = ~~start;
          end = end === undefined ? len : ~~end;
          if (start < 0) {
            start += len;
            if (start < 0) start = 0;
          } else if (start > len) start = len;
          if (end < 0) {
            end += len;
            if (end < 0) end = 0;
          } else if (end > len) end = len;
          if (end < start) end = start;
          const newBuf = this.subarray(start, end);
          // Return an augmented `Uint8Array` instance
          Object.setPrototypeOf(newBuf, Buffer.prototype);
          return newBuf;
        };
        /*
         * Need to make sure that buffer isn't trying to write out of bounds.
         */ function checkOffset(offset, ext, length) {
          if (offset % 1 !== 0 || offset < 0)
            throw new RangeError('offset is not uint');
          if (offset + ext > length)
            throw new RangeError('Trying to access beyond buffer length');
        }
        Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE =
          function readUIntLE(offset, byteLength, noAssert) {
            offset = offset >>> 0;
            byteLength = byteLength >>> 0;
            if (!noAssert) checkOffset(offset, byteLength, this.length);
            let val = this[offset];
            let mul = 1;
            let i = 0;
            while (++i < byteLength && (mul *= 0x100))
              val += this[offset + i] * mul;
            return val;
          };
        Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE =
          function readUIntBE(offset, byteLength, noAssert) {
            offset = offset >>> 0;
            byteLength = byteLength >>> 0;
            if (!noAssert) checkOffset(offset, byteLength, this.length);
            let val = this[offset + --byteLength];
            let mul = 1;
            while (byteLength > 0 && (mul *= 0x100))
              val += this[offset + --byteLength] * mul;
            return val;
          };
        Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 =
          function readUInt8(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) checkOffset(offset, 1, this.length);
            return this[offset];
          };
        Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE =
          function readUInt16LE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) checkOffset(offset, 2, this.length);
            return this[offset] | (this[offset + 1] << 8);
          };
        Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE =
          function readUInt16BE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) checkOffset(offset, 2, this.length);
            return (this[offset] << 8) | this[offset + 1];
          };
        Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE =
          function readUInt32LE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) checkOffset(offset, 4, this.length);
            return (
              (this[offset] |
                (this[offset + 1] << 8) |
                (this[offset + 2] << 16)) +
              this[offset + 3] * 0x1000000
            );
          };
        Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE =
          function readUInt32BE(offset, noAssert) {
            offset = offset >>> 0;
            if (!noAssert) checkOffset(offset, 4, this.length);
            return (
              this[offset] * 0x1000000 +
              ((this[offset + 1] << 16) |
                (this[offset + 2] << 8) |
                this[offset + 3])
            );
          };
        Buffer.prototype.readBigUInt64LE = defineBigIntMethod(
          function readBigUInt64LE(offset) {
            offset = offset >>> 0;
            validateNumber(offset, 'offset');
            const first = this[offset];
            const last = this[offset + 7];
            if (first === undefined || last === undefined)
              boundsError(offset, this.length - 8);
            const lo =
              first +
              this[++offset] * 256 +
              this[++offset] * 2 ** 16 +
              this[++offset] * 2 ** 24;
            const hi =
              this[++offset] +
              this[++offset] * 256 +
              this[++offset] * 2 ** 16 +
              last * 2 ** 24;
            return BigInt(lo) + (BigInt(hi) << BigInt(32));
          }
        );
        Buffer.prototype.readBigUInt64BE = defineBigIntMethod(
          function readBigUInt64BE(offset) {
            offset = offset >>> 0;
            validateNumber(offset, 'offset');
            const first = this[offset];
            const last = this[offset + 7];
            if (first === undefined || last === undefined)
              boundsError(offset, this.length - 8);
            const hi =
              first * 2 ** 24 +
              this[++offset] * 2 ** 16 +
              this[++offset] * 256 +
              this[++offset];
            const lo =
              this[++offset] * 2 ** 24 +
              this[++offset] * 2 ** 16 +
              this[++offset] * 256 +
              last;
            return (BigInt(hi) << BigInt(32)) + BigInt(lo);
          }
        );
        Buffer.prototype.readIntLE = function readIntLE(
          offset,
          byteLength,
          noAssert
        ) {
          offset = offset >>> 0;
          byteLength = byteLength >>> 0;
          if (!noAssert) checkOffset(offset, byteLength, this.length);
          let val = this[offset];
          let mul = 1;
          let i = 0;
          while (++i < byteLength && (mul *= 0x100))
            val += this[offset + i] * mul;
          mul *= 0x80;
          if (val >= mul) val -= Math.pow(2, 8 * byteLength);
          return val;
        };
        Buffer.prototype.readIntBE = function readIntBE(
          offset,
          byteLength,
          noAssert
        ) {
          offset = offset >>> 0;
          byteLength = byteLength >>> 0;
          if (!noAssert) checkOffset(offset, byteLength, this.length);
          let i = byteLength;
          let mul = 1;
          let val = this[offset + --i];
          while (i > 0 && (mul *= 0x100)) val += this[offset + --i] * mul;
          mul *= 0x80;
          if (val >= mul) val -= Math.pow(2, 8 * byteLength);
          return val;
        };
        Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 1, this.length);
          if (!(this[offset] & 0x80)) return this[offset];
          return (0xff - this[offset] + 1) * -1;
        };
        Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 2, this.length);
          const val = this[offset] | (this[offset + 1] << 8);
          return val & 0x8000 ? val | 0xffff0000 : val;
        };
        Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 2, this.length);
          const val = this[offset + 1] | (this[offset] << 8);
          return val & 0x8000 ? val | 0xffff0000 : val;
        };
        Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 4, this.length);
          return (
            this[offset] |
            (this[offset + 1] << 8) |
            (this[offset + 2] << 16) |
            (this[offset + 3] << 24)
          );
        };
        Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 4, this.length);
          return (
            (this[offset] << 24) |
            (this[offset + 1] << 16) |
            (this[offset + 2] << 8) |
            this[offset + 3]
          );
        };
        Buffer.prototype.readBigInt64LE = defineBigIntMethod(
          function readBigInt64LE(offset) {
            offset = offset >>> 0;
            validateNumber(offset, 'offset');
            const first = this[offset];
            const last = this[offset + 7];
            if (first === undefined || last === undefined)
              boundsError(offset, this.length - 8);
            const val =
              this[offset + 4] +
              this[offset + 5] * 256 +
              this[offset + 6] * 2 ** 16 +
              (last << 24); // Overflow
            return (
              (BigInt(val) << BigInt(32)) +
              BigInt(
                first +
                  this[++offset] * 256 +
                  this[++offset] * 2 ** 16 +
                  this[++offset] * 2 ** 24
              )
            );
          }
        );
        Buffer.prototype.readBigInt64BE = defineBigIntMethod(
          function readBigInt64BE(offset) {
            offset = offset >>> 0;
            validateNumber(offset, 'offset');
            const first = this[offset];
            const last = this[offset + 7];
            if (first === undefined || last === undefined)
              boundsError(offset, this.length - 8);
            const val =
              (first << 24) + // Overflow
              this[++offset] * 2 ** 16 +
              this[++offset] * 256 +
              this[++offset];
            return (
              (BigInt(val) << BigInt(32)) +
              BigInt(
                this[++offset] * 2 ** 24 +
                  this[++offset] * 2 ** 16 +
                  this[++offset] * 256 +
                  last
              )
            );
          }
        );
        Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 4, this.length);
          return ieee754.read(this, offset, true, 23, 4);
        };
        Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 4, this.length);
          return ieee754.read(this, offset, false, 23, 4);
        };
        Buffer.prototype.readDoubleLE = function readDoubleLE(
          offset,
          noAssert
        ) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 8, this.length);
          return ieee754.read(this, offset, true, 52, 8);
        };
        Buffer.prototype.readDoubleBE = function readDoubleBE(
          offset,
          noAssert
        ) {
          offset = offset >>> 0;
          if (!noAssert) checkOffset(offset, 8, this.length);
          return ieee754.read(this, offset, false, 52, 8);
        };
        function checkInt(buf, value, offset, ext, max, min) {
          if (!Buffer.isBuffer(buf))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (value > max || value < min)
            throw new RangeError('"value" argument is out of bounds');
          if (offset + ext > buf.length)
            throw new RangeError('Index out of range');
        }
        Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE =
          function writeUIntLE(value, offset, byteLength, noAssert) {
            value = +value;
            offset = offset >>> 0;
            byteLength = byteLength >>> 0;
            if (!noAssert) {
              const maxBytes = Math.pow(2, 8 * byteLength) - 1;
              checkInt(this, value, offset, byteLength, maxBytes, 0);
            }
            let mul = 1;
            let i = 0;
            this[offset] = value & 0xff;
            while (++i < byteLength && (mul *= 0x100))
              this[offset + i] = (value / mul) & 0xff;
            return offset + byteLength;
          };
        Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE =
          function writeUIntBE(value, offset, byteLength, noAssert) {
            value = +value;
            offset = offset >>> 0;
            byteLength = byteLength >>> 0;
            if (!noAssert) {
              const maxBytes = Math.pow(2, 8 * byteLength) - 1;
              checkInt(this, value, offset, byteLength, maxBytes, 0);
            }
            let i = byteLength - 1;
            let mul = 1;
            this[offset + i] = value & 0xff;
            while (--i >= 0 && (mul *= 0x100))
              this[offset + i] = (value / mul) & 0xff;
            return offset + byteLength;
          };
        Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 =
          function writeUInt8(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
            this[offset] = value & 0xff;
            return offset + 1;
          };
        Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE =
          function writeUInt16LE(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
            this[offset] = value & 0xff;
            this[offset + 1] = value >>> 8;
            return offset + 2;
          };
        Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE =
          function writeUInt16BE(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
            this[offset] = value >>> 8;
            this[offset + 1] = value & 0xff;
            return offset + 2;
          };
        Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE =
          function writeUInt32LE(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
            this[offset + 3] = value >>> 24;
            this[offset + 2] = value >>> 16;
            this[offset + 1] = value >>> 8;
            this[offset] = value & 0xff;
            return offset + 4;
          };
        Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE =
          function writeUInt32BE(value, offset, noAssert) {
            value = +value;
            offset = offset >>> 0;
            if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
            this[offset] = value >>> 24;
            this[offset + 1] = value >>> 16;
            this[offset + 2] = value >>> 8;
            this[offset + 3] = value & 0xff;
            return offset + 4;
          };
        function wrtBigUInt64LE(buf, value, offset, min, max) {
          checkIntBI(value, min, max, buf, offset, 7);
          let lo = Number(value & BigInt(0xffffffff));
          buf[offset++] = lo;
          lo = lo >> 8;
          buf[offset++] = lo;
          lo = lo >> 8;
          buf[offset++] = lo;
          lo = lo >> 8;
          buf[offset++] = lo;
          let hi = Number((value >> BigInt(32)) & BigInt(0xffffffff));
          buf[offset++] = hi;
          hi = hi >> 8;
          buf[offset++] = hi;
          hi = hi >> 8;
          buf[offset++] = hi;
          hi = hi >> 8;
          buf[offset++] = hi;
          return offset;
        }
        function wrtBigUInt64BE(buf, value, offset, min, max) {
          checkIntBI(value, min, max, buf, offset, 7);
          let lo = Number(value & BigInt(0xffffffff));
          buf[offset + 7] = lo;
          lo = lo >> 8;
          buf[offset + 6] = lo;
          lo = lo >> 8;
          buf[offset + 5] = lo;
          lo = lo >> 8;
          buf[offset + 4] = lo;
          let hi = Number((value >> BigInt(32)) & BigInt(0xffffffff));
          buf[offset + 3] = hi;
          hi = hi >> 8;
          buf[offset + 2] = hi;
          hi = hi >> 8;
          buf[offset + 1] = hi;
          hi = hi >> 8;
          buf[offset] = hi;
          return offset + 8;
        }
        Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(
          function writeBigUInt64LE(value, offset = 0) {
            return wrtBigUInt64LE(
              this,
              value,
              offset,
              BigInt(0),
              BigInt('0xffffffffffffffff')
            );
          }
        );
        Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(
          function writeBigUInt64BE(value, offset = 0) {
            return wrtBigUInt64BE(
              this,
              value,
              offset,
              BigInt(0),
              BigInt('0xffffffffffffffff')
            );
          }
        );
        Buffer.prototype.writeIntLE = function writeIntLE(
          value,
          offset,
          byteLength,
          noAssert
        ) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) {
            const limit = Math.pow(2, 8 * byteLength - 1);
            checkInt(this, value, offset, byteLength, limit - 1, -limit);
          }
          let i = 0;
          let mul = 1;
          let sub = 0;
          this[offset] = value & 0xff;
          while (++i < byteLength && (mul *= 0x100)) {
            if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
            this[offset + i] = (((value / mul) >> 0) - sub) & 0xff;
          }
          return offset + byteLength;
        };
        Buffer.prototype.writeIntBE = function writeIntBE(
          value,
          offset,
          byteLength,
          noAssert
        ) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) {
            const limit = Math.pow(2, 8 * byteLength - 1);
            checkInt(this, value, offset, byteLength, limit - 1, -limit);
          }
          let i = byteLength - 1;
          let mul = 1;
          let sub = 0;
          this[offset + i] = value & 0xff;
          while (--i >= 0 && (mul *= 0x100)) {
            if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
            this[offset + i] = (((value / mul) >> 0) - sub) & 0xff;
          }
          return offset + byteLength;
        };
        Buffer.prototype.writeInt8 = function writeInt8(
          value,
          offset,
          noAssert
        ) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
          if (value < 0) value = 0xff + value + 1;
          this[offset] = value & 0xff;
          return offset + 1;
        };
        Buffer.prototype.writeInt16LE = function writeInt16LE(
          value,
          offset,
          noAssert
        ) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
          this[offset] = value & 0xff;
          this[offset + 1] = value >>> 8;
          return offset + 2;
        };
        Buffer.prototype.writeInt16BE = function writeInt16BE(
          value,
          offset,
          noAssert
        ) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
          this[offset] = value >>> 8;
          this[offset + 1] = value & 0xff;
          return offset + 2;
        };
        Buffer.prototype.writeInt32LE = function writeInt32LE(
          value,
          offset,
          noAssert
        ) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert)
            checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
          this[offset] = value & 0xff;
          this[offset + 1] = value >>> 8;
          this[offset + 2] = value >>> 16;
          this[offset + 3] = value >>> 24;
          return offset + 4;
        };
        Buffer.prototype.writeInt32BE = function writeInt32BE(
          value,
          offset,
          noAssert
        ) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert)
            checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
          if (value < 0) value = 0xffffffff + value + 1;
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = value & 0xff;
          return offset + 4;
        };
        Buffer.prototype.writeBigInt64LE = defineBigIntMethod(
          function writeBigInt64LE(value, offset = 0) {
            return wrtBigUInt64LE(
              this,
              value,
              offset,
              -BigInt('0x8000000000000000'),
              BigInt('0x7fffffffffffffff')
            );
          }
        );
        Buffer.prototype.writeBigInt64BE = defineBigIntMethod(
          function writeBigInt64BE(value, offset = 0) {
            return wrtBigUInt64BE(
              this,
              value,
              offset,
              -BigInt('0x8000000000000000'),
              BigInt('0x7fffffffffffffff')
            );
          }
        );
        function checkIEEE754(buf, value, offset, ext, max, min) {
          if (offset + ext > buf.length)
            throw new RangeError('Index out of range');
          if (offset < 0) throw new RangeError('Index out of range');
        }
        function writeFloat(buf, value, offset, littleEndian, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert)
            checkIEEE754(
              buf,
              value,
              offset,
              4,
              3.4028234663852886e38,
              -340282346638528860000000000000000000000
            );
          ieee754.write(buf, value, offset, littleEndian, 23, 4);
          return offset + 4;
        }
        Buffer.prototype.writeFloatLE = function writeFloatLE(
          value,
          offset,
          noAssert
        ) {
          return writeFloat(this, value, offset, true, noAssert);
        };
        Buffer.prototype.writeFloatBE = function writeFloatBE(
          value,
          offset,
          noAssert
        ) {
          return writeFloat(this, value, offset, false, noAssert);
        };
        function writeDouble(buf, value, offset, littleEndian, noAssert) {
          value = +value;
          offset = offset >>> 0;
          if (!noAssert)
            checkIEEE754(
              buf,
              value,
              offset,
              8,
              1.7976931348623157e308,
              -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
            );
          ieee754.write(buf, value, offset, littleEndian, 52, 8);
          return offset + 8;
        }
        Buffer.prototype.writeDoubleLE = function writeDoubleLE(
          value,
          offset,
          noAssert
        ) {
          return writeDouble(this, value, offset, true, noAssert);
        };
        Buffer.prototype.writeDoubleBE = function writeDoubleBE(
          value,
          offset,
          noAssert
        ) {
          return writeDouble(this, value, offset, false, noAssert);
        };
        // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
        Buffer.prototype.copy = function copy(target, targetStart, start, end) {
          if (!Buffer.isBuffer(target))
            throw new TypeError('argument should be a Buffer');
          if (!start) start = 0;
          if (!end && end !== 0) end = this.length;
          if (targetStart >= target.length) targetStart = target.length;
          if (!targetStart) targetStart = 0;
          if (end > 0 && end < start) end = start;
          // Copy 0 bytes; we're done
          if (end === start) return 0;
          if (target.length === 0 || this.length === 0) return 0;
          // Fatal error conditions
          if (targetStart < 0)
            throw new RangeError('targetStart out of bounds');
          if (start < 0 || start >= this.length)
            throw new RangeError('Index out of range');
          if (end < 0) throw new RangeError('sourceEnd out of bounds');
          // Are we oob?
          if (end > this.length) end = this.length;
          if (target.length - targetStart < end - start)
            end = target.length - targetStart + start;
          const len = end - start;
          if (
            this === target &&
            typeof Uint8Array.prototype.copyWithin === 'function'
          )
            // Use built-in when available, missing from IE11
            this.copyWithin(targetStart, start, end);
          else
            Uint8Array.prototype.set.call(
              target,
              this.subarray(start, end),
              targetStart
            );
          return len;
        };
        // Usage:
        //    buffer.fill(number[, offset[, end]])
        //    buffer.fill(buffer[, offset[, end]])
        //    buffer.fill(string[, offset[, end]][, encoding])
        Buffer.prototype.fill = function fill(val, start, end, encoding) {
          // Handle string cases:
          if (typeof val === 'string') {
            if (typeof start === 'string') {
              encoding = start;
              start = 0;
              end = this.length;
            } else if (typeof end === 'string') {
              encoding = end;
              end = this.length;
            }
            if (encoding !== undefined && typeof encoding !== 'string')
              throw new TypeError('encoding must be a string');
            if (typeof encoding === 'string' && !Buffer.isEncoding(encoding))
              throw new TypeError('Unknown encoding: ' + encoding);
            if (val.length === 1) {
              const code = val.charCodeAt(0);
              if ((encoding === 'utf8' && code < 128) || encoding === 'latin1')
                // Fast path: If `val` fits into a single byte, use that numeric value.
                val = code;
            }
          } else if (typeof val === 'number') val = val & 255;
          else if (typeof val === 'boolean') val = Number(val);
          // Invalid ranges are not set to a default, so can range check early.
          if (start < 0 || this.length < start || this.length < end)
            throw new RangeError('Out of range index');
          if (end <= start) return this;
          start = start >>> 0;
          end = end === undefined ? this.length : end >>> 0;
          if (!val) val = 0;
          let i;
          if (typeof val === 'number')
            for (i = start; i < end; ++i) this[i] = val;
          else {
            const bytes = Buffer.isBuffer(val)
              ? val
              : Buffer.from(val, encoding);
            const len = bytes.length;
            if (len === 0)
              throw new TypeError(
                'The value "' + val + '" is invalid for argument "value"'
              );
            for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
          }
          return this;
        };
        // CUSTOM ERRORS
        // =============
        // Simplified versions from Node, changed for Buffer-only usage
        const errors = {};
        function E(sym, getMessage, Base) {
          errors[sym] = class NodeError extends Base {
            constructor() {
              super();
              Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true,
              });
              // Add the error code to the name to include it in the stack trace.
              this.name = `${this.name} [${sym}]`;
              // Access the stack to generate the error message including the error code
              // from the name.
              this.stack; // eslint-disable-line no-unused-expressions
              // Reset the name to the actual name.
              delete this.name;
            }
            get code() {
              return sym;
            }
            set code(value) {
              Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true,
              });
            }
            toString() {
              return `${this.name} [${sym}]: ${this.message}`;
            }
          };
        }
        E(
          'ERR_BUFFER_OUT_OF_BOUNDS',
          function (name) {
            if (name) return `${name} is outside of buffer bounds`;
            return 'Attempt to access memory outside buffer bounds';
          },
          RangeError
        );
        E(
          'ERR_INVALID_ARG_TYPE',
          function (name, actual) {
            return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
          },
          TypeError
        );
        E(
          'ERR_OUT_OF_RANGE',
          function (str, range, input) {
            let msg = `The value of "${str}" is out of range.`;
            let received = input;
            if (Number.isInteger(input) && Math.abs(input) > 2 ** 32)
              received = addNumericalSeparator(String(input));
            else if (typeof input === 'bigint') {
              received = String(input);
              if (
                input > BigInt(2) ** BigInt(32) ||
                input < -(BigInt(2) ** BigInt(32))
              )
                received = addNumericalSeparator(received);
              received += 'n';
            }
            msg += ` It must be ${range}. Received ${received}`;
            return msg;
          },
          RangeError
        );
        function addNumericalSeparator(val) {
          let res = '';
          let i = val.length;
          const start = val[0] === '-' ? 1 : 0;
          for (; i >= start + 4; i -= 3) res = `_${val.slice(i - 3, i)}${res}`;
          return `${val.slice(0, i)}${res}`;
        }
        // CHECK FUNCTIONS
        // ===============
        function checkBounds(buf, offset, byteLength) {
          validateNumber(offset, 'offset');
          if (
            buf[offset] === undefined ||
            buf[offset + byteLength] === undefined
          )
            boundsError(offset, buf.length - (byteLength + 1));
        }
        function checkIntBI(value, min, max, buf, offset, byteLength) {
          if (value > max || value < min) {
            const n = typeof min === 'bigint' ? 'n' : '';
            let range;
            if (byteLength > 3) {
              if (min === 0 || min === BigInt(0))
                range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
              else
                range =
                  `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                  `${(byteLength + 1) * 8 - 1}${n}`;
            } else range = `>= ${min}${n} and <= ${max}${n}`;
            throw new errors.ERR_OUT_OF_RANGE('value', range, value);
          }
          checkBounds(buf, offset, byteLength);
        }
        function validateNumber(value, name) {
          if (typeof value !== 'number')
            throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
        }
        function boundsError(value, length, type) {
          if (Math.floor(value) !== value) {
            validateNumber(value, type);
            throw new errors.ERR_OUT_OF_RANGE(
              type || 'offset',
              'an integer',
              value
            );
          }
          if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new errors.ERR_OUT_OF_RANGE(
            type || 'offset',
            `>= ${type ? 1 : 0} and <= ${length}`,
            value
          );
        }
        // HELPER FUNCTIONS
        // ================
        const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
        function base64clean(str) {
          // Node takes equal signs as end of the Base64 encoding
          str = str.split('=')[0];
          // Node strips out invalid characters like \n and \t from the string, base64-js does not
          str = str.trim().replace(INVALID_BASE64_RE, '');
          // Node converts strings with length < 2 to ''
          if (str.length < 2) return '';
          // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
          while (str.length % 4 !== 0) str = str + '=';
          return str;
        }
        function utf8ToBytes(string, units) {
          units = units || Infinity;
          let codePoint;
          const length = string.length;
          let leadSurrogate = null;
          const bytes = [];
          for (let i = 0; i < length; ++i) {
            codePoint = string.charCodeAt(i);
            // is surrogate component
            if (codePoint > 0xd7ff && codePoint < 0xe000) {
              // last char was a lead
              if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xdbff) {
                  // unexpected trail
                  if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                  continue;
                } else if (i + 1 === length) {
                  // unpaired lead
                  if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                  continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
              }
              // 2 leads in a row
              if (codePoint < 0xdc00) {
                if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                leadSurrogate = codePoint;
                continue;
              }
              // valid surrogate pair
              codePoint =
                (((leadSurrogate - 0xd800) << 10) | (codePoint - 0xdc00)) +
                0x10000;
            } else if (leadSurrogate) {
              // valid bmp char, but last char was a lead
              if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
            }
            leadSurrogate = null;
            // encode utf8
            if (codePoint < 0x80) {
              if ((units -= 1) < 0) break;
              bytes.push(codePoint);
            } else if (codePoint < 0x800) {
              if ((units -= 2) < 0) break;
              bytes.push((codePoint >> 0x6) | 0xc0, (codePoint & 0x3f) | 0x80);
            } else if (codePoint < 0x10000) {
              if ((units -= 3) < 0) break;
              bytes.push(
                (codePoint >> 0xc) | 0xe0,
                ((codePoint >> 0x6) & 0x3f) | 0x80,
                (codePoint & 0x3f) | 0x80
              );
            } else if (codePoint < 0x110000) {
              if ((units -= 4) < 0) break;
              bytes.push(
                (codePoint >> 0x12) | 0xf0,
                ((codePoint >> 0xc) & 0x3f) | 0x80,
                ((codePoint >> 0x6) & 0x3f) | 0x80,
                (codePoint & 0x3f) | 0x80
              );
            } else throw new Error('Invalid code point');
          }
          return bytes;
        }
        function asciiToBytes(str) {
          const byteArray = [];
          for (
            let i = 0;
            i < str.length;
            ++i // Node's code seems to be doing this and not & 0x7F..
          )
            byteArray.push(str.charCodeAt(i) & 0xff);
          return byteArray;
        }
        function utf16leToBytes(str, units) {
          let c, hi, lo;
          const byteArray = [];
          for (let i = 0; i < str.length; ++i) {
            if ((units -= 2) < 0) break;
            c = str.charCodeAt(i);
            hi = c >> 8;
            lo = c % 256;
            byteArray.push(lo);
            byteArray.push(hi);
          }
          return byteArray;
        }
        function base64ToBytes(str) {
          return base64.toByteArray(base64clean(str));
        }
        function blitBuffer(src, dst, offset, length) {
          let i;
          for (i = 0; i < length; ++i) {
            if (i + offset >= dst.length || i >= src.length) break;
            dst[i + offset] = src[i];
          }
          return i;
        }
        // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
        // the `instanceof` check but they should be treated as of that type.
        // See: https://github.com/feross/buffer/issues/166
        function isInstance(obj, type) {
          return (
            obj instanceof type ||
            (obj != null &&
              obj.constructor != null &&
              obj.constructor.name != null &&
              obj.constructor.name === type.name)
          );
        }
        function numberIsNaN(obj) {
          // For IE11 support
          return (
            obj !== obj // eslint-disable-line no-self-compare
          );
        }
        // Create lookup table for `toString('hex')`
        // See: https://github.com/feross/buffer/issues/219
        const hexSliceLookupTable = (function () {
          const alphabet = '0123456789abcdef';
          const table = new Array(256);
          for (let i = 0; i < 16; ++i) {
            const i16 = i * 16;
            for (let j = 0; j < 16; ++j)
              table[i16 + j] = alphabet[i] + alphabet[j];
          }
          return table;
        })();
        // Return not function with Error if BigInt not supported
        function defineBigIntMethod(fn) {
          return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
        }
        function BufferBigIntNotDefined() {
          throw new Error('BigInt not supported');
        }
      },
      { '9c62938f1dccc73c': '7jAMi', aceacb6a4531a9d2: 'hITcF' },
    ],
    '7jAMi': [
      function (require, module, exports, __globalThis) {
        'use strict';
        exports.byteLength = byteLength;
        exports.toByteArray = toByteArray;
        exports.fromByteArray = fromByteArray;
        var lookup = [];
        var revLookup = [];
        var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
        var code =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        for (var i = 0, len = code.length; i < len; ++i) {
          lookup[i] = code[i];
          revLookup[code.charCodeAt(i)] = i;
        }
        // Support decoding URL-safe base64 strings, as Node.js does.
        // See: https://en.wikipedia.org/wiki/Base64#URL_applications
        revLookup['-'.charCodeAt(0)] = 62;
        revLookup['_'.charCodeAt(0)] = 63;
        function getLens(b64) {
          var len = b64.length;
          if (len % 4 > 0)
            throw new Error('Invalid string. Length must be a multiple of 4');
          // Trim off extra bytes after placeholder bytes are found
          // See: https://github.com/beatgammit/base64-js/issues/42
          var validLen = b64.indexOf('=');
          if (validLen === -1) validLen = len;
          var placeHoldersLen = validLen === len ? 0 : 4 - (validLen % 4);
          return [validLen, placeHoldersLen];
        }
        // base64 is 4/3 + up to two characters of the original data
        function byteLength(b64) {
          var lens = getLens(b64);
          var validLen = lens[0];
          var placeHoldersLen = lens[1];
          return ((validLen + placeHoldersLen) * 3) / 4 - placeHoldersLen;
        }
        function _byteLength(b64, validLen, placeHoldersLen) {
          return ((validLen + placeHoldersLen) * 3) / 4 - placeHoldersLen;
        }
        function toByteArray(b64) {
          var tmp;
          var lens = getLens(b64);
          var validLen = lens[0];
          var placeHoldersLen = lens[1];
          var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
          var curByte = 0;
          // if there are placeholders, only get up to the last complete 4 chars
          var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
          var i;
          for (i = 0; i < len; i += 4) {
            tmp =
              (revLookup[b64.charCodeAt(i)] << 18) |
              (revLookup[b64.charCodeAt(i + 1)] << 12) |
              (revLookup[b64.charCodeAt(i + 2)] << 6) |
              revLookup[b64.charCodeAt(i + 3)];
            arr[curByte++] = (tmp >> 16) & 0xff;
            arr[curByte++] = (tmp >> 8) & 0xff;
            arr[curByte++] = tmp & 0xff;
          }
          if (placeHoldersLen === 2) {
            tmp =
              (revLookup[b64.charCodeAt(i)] << 2) |
              (revLookup[b64.charCodeAt(i + 1)] >> 4);
            arr[curByte++] = tmp & 0xff;
          }
          if (placeHoldersLen === 1) {
            tmp =
              (revLookup[b64.charCodeAt(i)] << 10) |
              (revLookup[b64.charCodeAt(i + 1)] << 4) |
              (revLookup[b64.charCodeAt(i + 2)] >> 2);
            arr[curByte++] = (tmp >> 8) & 0xff;
            arr[curByte++] = tmp & 0xff;
          }
          return arr;
        }
        function tripletToBase64(num) {
          return (
            lookup[(num >> 18) & 0x3f] +
            lookup[(num >> 12) & 0x3f] +
            lookup[(num >> 6) & 0x3f] +
            lookup[num & 0x3f]
          );
        }
        function encodeChunk(uint8, start, end) {
          var tmp;
          var output = [];
          for (var i = start; i < end; i += 3) {
            tmp =
              ((uint8[i] << 16) & 0xff0000) +
              ((uint8[i + 1] << 8) & 0xff00) +
              (uint8[i + 2] & 0xff);
            output.push(tripletToBase64(tmp));
          }
          return output.join('');
        }
        function fromByteArray(uint8) {
          var tmp;
          var len = uint8.length;
          var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
          var parts = [];
          var maxChunkLength = 16383; // must be multiple of 3
          // go through the array every three bytes, we'll deal with trailing stuff later
          for (
            var i = 0, len2 = len - extraBytes;
            i < len2;
            i += maxChunkLength
          )
            parts.push(
              encodeChunk(
                uint8,
                i,
                i + maxChunkLength > len2 ? len2 : i + maxChunkLength
              )
            );
          // pad the end with zeros, but make sure to not forget the extra bytes
          if (extraBytes === 1) {
            tmp = uint8[len - 1];
            parts.push(lookup[tmp >> 2] + lookup[(tmp << 4) & 0x3f] + '==');
          } else if (extraBytes === 2) {
            tmp = (uint8[len - 2] << 8) + uint8[len - 1];
            parts.push(
              lookup[tmp >> 10] +
                lookup[(tmp >> 4) & 0x3f] +
                lookup[(tmp << 2) & 0x3f] +
                '='
            );
          }
          return parts.join('');
        }
      },
      {},
    ],
    hITcF: [
      function (require, module, exports, __globalThis) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read =
          function (buffer, offset, isLE, mLen, nBytes) {
            var e, m;
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var nBits = -7;
            var i = isLE ? nBytes - 1 : 0;
            var d = isLE ? -1 : 1;
            var s = buffer[offset + i];
            i += d;
            e = s & ((1 << -nBits) - 1);
            s >>= -nBits;
            nBits += eLen;
            for (
              ;
              nBits > 0;
              e = e * 256 + buffer[offset + i], i += d, nBits -= 8
            );
            m = e & ((1 << -nBits) - 1);
            e >>= -nBits;
            nBits += mLen;
            for (
              ;
              nBits > 0;
              m = m * 256 + buffer[offset + i], i += d, nBits -= 8
            );
            if (e === 0) e = 1 - eBias;
            else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
            else {
              m = m + Math.pow(2, mLen);
              e = e - eBias;
            }
            return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
          };
        exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
          var e, m, c;
          var eLen = nBytes * 8 - mLen - 1;
          var eMax = (1 << eLen) - 1;
          var eBias = eMax >> 1;
          var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
          var i = isLE ? 0 : nBytes - 1;
          var d = isLE ? 1 : -1;
          var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
          value = Math.abs(value);
          if (isNaN(value) || value === Infinity) {
            m = isNaN(value) ? 1 : 0;
            e = eMax;
          } else {
            e = Math.floor(Math.log(value) / Math.LN2);
            if (value * (c = Math.pow(2, -e)) < 1) {
              e--;
              c *= 2;
            }
            if (e + eBias >= 1) value += rt / c;
            else value += rt * Math.pow(2, 1 - eBias);
            if (value * c >= 2) {
              e++;
              c /= 2;
            }
            if (e + eBias >= eMax) {
              m = 0;
              e = eMax;
            } else if (e + eBias >= 1) {
              m = (value * c - 1) * Math.pow(2, mLen);
              e = e + eBias;
            } else {
              m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
              e = 0;
            }
          }
          for (
            ;
            mLen >= 8;
            buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8
          );
          e = (e << mLen) | m;
          eLen += mLen;
          for (
            ;
            eLen > 0;
            buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8
          );
          buffer[offset + i - d] |= s * 128;
        };
      },
      {},
    ],
    fxYQp: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        ('use strict');
        /**
         * Create an Error with the specified message, config, error code, request and response.
         *
         * @param {string} message The error message.
         * @param {string} [code] The error code (for example, 'ECONNABORTED').
         * @param {Object} [config] The config.
         * @param {Object} [request] The request.
         * @param {Object} [response] The response.
         *
         * @returns {Error} The created error.
         */ function AxiosError(message, code, config, request, response) {
          Error.call(this);
          if (Error.captureStackTrace)
            Error.captureStackTrace(this, this.constructor);
          else this.stack = new Error().stack;
          this.message = message;
          this.name = 'AxiosError';
          code && (this.code = code);
          config && (this.config = config);
          request && (this.request = request);
          if (response) {
            this.response = response;
            this.status = response.status ? response.status : null;
          }
        }
        (0, _utilsJsDefault.default).inherits(AxiosError, Error, {
          toJSON: function toJSON() {
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
              config: (0, _utilsJsDefault.default).toJSONObject(this.config),
              code: this.code,
              status: this.status,
            };
          },
        });
        const prototype = AxiosError.prototype;
        const descriptors = {};
        [
          'ERR_BAD_OPTION_VALUE',
          'ERR_BAD_OPTION',
          'ECONNABORTED',
          'ETIMEDOUT',
          'ERR_NETWORK',
          'ERR_FR_TOO_MANY_REDIRECTS',
          'ERR_DEPRECATED',
          'ERR_BAD_RESPONSE',
          'ERR_BAD_REQUEST',
          'ERR_CANCELED',
          'ERR_NOT_SUPPORT',
          'ERR_INVALID_URL',
        ].forEach((code) => {
          descriptors[code] = {
            value: code,
          };
        });
        Object.defineProperties(AxiosError, descriptors);
        Object.defineProperty(prototype, 'isAxiosError', {
          value: true,
        });
        // eslint-disable-next-line func-names
        AxiosError.from = (
          error,
          code,
          config,
          request,
          response,
          customProps
        ) => {
          const axiosError = Object.create(prototype);
          (0, _utilsJsDefault.default).toFlatObject(
            error,
            axiosError,
            function filter(obj) {
              return obj !== Error.prototype;
            },
            (prop) => {
              return prop !== 'isAxiosError';
            }
          );
          AxiosError.call(
            axiosError,
            error.message,
            code,
            config,
            request,
            response
          );
          axiosError.cause = error;
          axiosError.name = error.name;
          customProps && Object.assign(axiosError, customProps);
          return axiosError;
        };
        exports.default = AxiosError;
      },
      {
        '../utils.js': 'lbtnr',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    eDh7d: [
      function (require, module, exports, __globalThis) {
        // eslint-disable-next-line strict
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        exports.default = null;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    gGizQ: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _utilsJs = require('./../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        ('use strict');
        class InterceptorManager {
          constructor() {
            this.handlers = [];
          }
          /**
           * Add a new interceptor to the stack
           *
           * @param {Function} fulfilled The function to handle `then` for a `Promise`
           * @param {Function} rejected The function to handle `reject` for a `Promise`
           *
           * @return {Number} An ID used to remove interceptor later
           */ use(fulfilled, rejected, options) {
            this.handlers.push({
              fulfilled,
              rejected,
              synchronous: options ? options.synchronous : false,
              runWhen: options ? options.runWhen : null,
            });
            return this.handlers.length - 1;
          }
          /**
           * Remove an interceptor from the stack
           *
           * @param {Number} id The ID that was returned by `use`
           *
           * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
           */ eject(id) {
            if (this.handlers[id]) this.handlers[id] = null;
          }
          /**
           * Clear all interceptors from the stack
           *
           * @returns {void}
           */ clear() {
            if (this.handlers) this.handlers = [];
          }
          /**
           * Iterate over all the registered interceptors
           *
           * This method is particularly useful for skipping over any
           * interceptors that may have become `null` calling `eject`.
           *
           * @param {Function} fn The function to call for each interceptor
           *
           * @returns {void}
           */ forEach(fn) {
            (0, _utilsJsDefault.default).forEach(
              this.handlers,
              function forEachHandler(h) {
                if (h !== null) fn(h);
              }
            );
          }
        }
        exports.default = InterceptorManager;
      },
      {
        './../utils.js': 'lbtnr',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '8uQRh': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => dispatchRequest);
        var _transformDataJs = require('./transformData.js');
        var _transformDataJsDefault =
          parcelHelpers.interopDefault(_transformDataJs);
        var _isCancelJs = require('../cancel/isCancel.js');
        var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
        var _indexJs = require('../defaults/index.js');
        var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
        var _canceledErrorJs = require('../cancel/CanceledError.js');
        var _canceledErrorJsDefault =
          parcelHelpers.interopDefault(_canceledErrorJs);
        var _axiosHeadersJs = require('../core/AxiosHeaders.js');
        var _axiosHeadersJsDefault =
          parcelHelpers.interopDefault(_axiosHeadersJs);
        var _adaptersJs = require('../adapters/adapters.js');
        var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
        ('use strict');
        /**
         * Throws a `CanceledError` if cancellation has been requested.
         *
         * @param {Object} config The config that is to be used for the request
         *
         * @returns {void}
         */ function throwIfCancellationRequested(config) {
          if (config.cancelToken) config.cancelToken.throwIfRequested();
          if (config.signal && config.signal.aborted)
            throw new (0, _canceledErrorJsDefault.default)(null, config);
        }
        function dispatchRequest(config) {
          throwIfCancellationRequested(config);
          config.headers = (0, _axiosHeadersJsDefault.default).from(
            config.headers
          );
          // Transform request data
          config.data = (0, _transformDataJsDefault.default).call(
            config,
            config.transformRequest
          );
          if (['post', 'put', 'patch'].indexOf(config.method) !== -1)
            config.headers.setContentType(
              'application/x-www-form-urlencoded',
              false
            );
          const adapter = (0, _adaptersJsDefault.default).getAdapter(
            config.adapter || (0, _indexJsDefault.default).adapter
          );
          return adapter(config).then(
            function onAdapterResolution(response) {
              throwIfCancellationRequested(config);
              // Transform response data
              response.data = (0, _transformDataJsDefault.default).call(
                config,
                config.transformResponse,
                response
              );
              response.headers = (0, _axiosHeadersJsDefault.default).from(
                response.headers
              );
              return response;
            },
            function onAdapterRejection(reason) {
              if (!(0, _isCancelJsDefault.default)(reason)) {
                throwIfCancellationRequested(config);
                // Transform response data
                if (reason && reason.response) {
                  reason.response.data = (0,
                  _transformDataJsDefault.default).call(
                    config,
                    config.transformResponse,
                    reason.response
                  );
                  reason.response.headers = (0,
                  _axiosHeadersJsDefault.default).from(reason.response.headers);
                }
              }
              return Promise.reject(reason);
            }
          );
        }
      },
      {
        './transformData.js': 'fQ8XG',
        '../cancel/isCancel.js': 'gz0Pv',
        '../defaults/index.js': 'kgCsl',
        '../cancel/CanceledError.js': '6k8Ga',
        '../core/AxiosHeaders.js': 'eHpg9',
        '../adapters/adapters.js': 'iRRaw',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    fQ8XG: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => transformData);
        var _utilsJs = require('./../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _indexJs = require('../defaults/index.js');
        var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
        var _axiosHeadersJs = require('../core/AxiosHeaders.js');
        var _axiosHeadersJsDefault =
          parcelHelpers.interopDefault(_axiosHeadersJs);
        ('use strict');
        function transformData(fns, response) {
          const config = this || (0, _indexJsDefault.default);
          const context = response || config;
          const headers = (0, _axiosHeadersJsDefault.default).from(
            context.headers
          );
          let data = context.data;
          (0, _utilsJsDefault.default).forEach(fns, function transform(fn) {
            data = fn.call(
              config,
              data,
              headers.normalize(),
              response ? response.status : undefined
            );
          });
          headers.normalize();
          return data;
        }
      },
      {
        './../utils.js': 'lbtnr',
        '../defaults/index.js': 'kgCsl',
        '../core/AxiosHeaders.js': 'eHpg9',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    kgCsl: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _axiosErrorJs = require('../core/AxiosError.js');
        var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
        var _transitionalJs = require('./transitional.js');
        var _transitionalJsDefault =
          parcelHelpers.interopDefault(_transitionalJs);
        var _toFormDataJs = require('../helpers/toFormData.js');
        var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
        var _toURLEncodedFormJs = require('../helpers/toURLEncodedForm.js');
        var _toURLEncodedFormJsDefault =
          parcelHelpers.interopDefault(_toURLEncodedFormJs);
        var _indexJs = require('../platform/index.js');
        var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
        var _formDataToJSONJs = require('../helpers/formDataToJSON.js');
        var _formDataToJSONJsDefault =
          parcelHelpers.interopDefault(_formDataToJSONJs);
        ('use strict');
        /**
         * It takes a string, tries to parse it, and if it fails, it returns the stringified version
         * of the input
         *
         * @param {any} rawValue - The value to be stringified.
         * @param {Function} parser - A function that parses a string into a JavaScript object.
         * @param {Function} encoder - A function that takes a value and returns a string.
         *
         * @returns {string} A stringified version of the rawValue.
         */ function stringifySafely(rawValue, parser, encoder) {
          if ((0, _utilsJsDefault.default).isString(rawValue))
            try {
              (parser || JSON.parse)(rawValue);
              return (0, _utilsJsDefault.default).trim(rawValue);
            } catch (e) {
              if (e.name !== 'SyntaxError') throw e;
            }
          return (encoder || JSON.stringify)(rawValue);
        }
        const defaults = {
          transitional: (0, _transitionalJsDefault.default),
          adapter: ['xhr', 'http', 'fetch'],
          transformRequest: [
            function transformRequest(data, headers) {
              const contentType = headers.getContentType() || '';
              const hasJSONContentType =
                contentType.indexOf('application/json') > -1;
              const isObjectPayload = (0, _utilsJsDefault.default).isObject(
                data
              );
              if (
                isObjectPayload &&
                (0, _utilsJsDefault.default).isHTMLForm(data)
              )
                data = new FormData(data);
              const isFormData = (0, _utilsJsDefault.default).isFormData(data);
              if (isFormData)
                return hasJSONContentType
                  ? JSON.stringify((0, _formDataToJSONJsDefault.default)(data))
                  : data;
              if (
                (0, _utilsJsDefault.default).isArrayBuffer(data) ||
                (0, _utilsJsDefault.default).isBuffer(data) ||
                (0, _utilsJsDefault.default).isStream(data) ||
                (0, _utilsJsDefault.default).isFile(data) ||
                (0, _utilsJsDefault.default).isBlob(data) ||
                (0, _utilsJsDefault.default).isReadableStream(data)
              )
                return data;
              if ((0, _utilsJsDefault.default).isArrayBufferView(data))
                return data.buffer;
              if ((0, _utilsJsDefault.default).isURLSearchParams(data)) {
                headers.setContentType(
                  'application/x-www-form-urlencoded;charset=utf-8',
                  false
                );
                return data.toString();
              }
              let isFileList;
              if (isObjectPayload) {
                if (
                  contentType.indexOf('application/x-www-form-urlencoded') > -1
                )
                  return (0, _toURLEncodedFormJsDefault.default)(
                    data,
                    this.formSerializer
                  ).toString();
                if (
                  (isFileList = (0, _utilsJsDefault.default).isFileList(
                    data
                  )) ||
                  contentType.indexOf('multipart/form-data') > -1
                ) {
                  const _FormData = this.env && this.env.FormData;
                  return (0, _toFormDataJsDefault.default)(
                    isFileList
                      ? {
                          'files[]': data,
                        }
                      : data,
                    _FormData && new _FormData(),
                    this.formSerializer
                  );
                }
              }
              if (isObjectPayload || hasJSONContentType) {
                headers.setContentType('application/json', false);
                return stringifySafely(data);
              }
              return data;
            },
          ],
          transformResponse: [
            function transformResponse(data) {
              const transitional = this.transitional || defaults.transitional;
              const forcedJSONParsing =
                transitional && transitional.forcedJSONParsing;
              const JSONRequested = this.responseType === 'json';
              if (
                (0, _utilsJsDefault.default).isResponse(data) ||
                (0, _utilsJsDefault.default).isReadableStream(data)
              )
                return data;
              if (
                data &&
                (0, _utilsJsDefault.default).isString(data) &&
                ((forcedJSONParsing && !this.responseType) || JSONRequested)
              ) {
                const silentJSONParsing =
                  transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                  return JSON.parse(data);
                } catch (e) {
                  if (strictJSONParsing) {
                    if (e.name === 'SyntaxError')
                      throw (0, _axiosErrorJsDefault.default).from(
                        e,
                        (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response
                      );
                    throw e;
                  }
                }
              }
              return data;
            },
          ],
          /**
           * A timeout in milliseconds to abort a request. If set to 0 (default) a
           * timeout is not created.
           */ timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          env: {
            FormData: (0, _indexJsDefault.default).classes.FormData,
            Blob: (0, _indexJsDefault.default).classes.Blob,
          },
          validateStatus: function validateStatus(status) {
            return status >= 200 && status < 300;
          },
          headers: {
            common: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': undefined,
            },
          },
        };
        (0, _utilsJsDefault.default).forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch'],
          (method) => {
            defaults.headers[method] = {};
          }
        );
        exports.default = defaults;
      },
      {
        '../utils.js': 'lbtnr',
        '../core/AxiosError.js': 'fxYQp',
        './transitional.js': '5audw',
        '../helpers/toFormData.js': 'jJQ5Z',
        '../helpers/toURLEncodedForm.js': 'ambZE',
        '../platform/index.js': '6yQYc',
        '../helpers/formDataToJSON.js': 'cuPdu',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '5audw': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        ('use strict');
        exports.default = {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false,
        };
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    ambZE: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => toURLEncodedForm);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _toFormDataJs = require('./toFormData.js');
        var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
        var _indexJs = require('../platform/index.js');
        var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
        ('use strict');
        function toURLEncodedForm(data, options) {
          return (0, _toFormDataJsDefault.default)(
            data,
            new (0, _indexJsDefault.default).classes.URLSearchParams(),
            Object.assign(
              {
                visitor: function (value, key, path, helpers) {
                  if (
                    (0, _indexJsDefault.default).isNode &&
                    (0, _utilsJsDefault.default).isBuffer(value)
                  ) {
                    this.append(key, value.toString('base64'));
                    return false;
                  }
                  return helpers.defaultVisitor.apply(this, arguments);
                },
              },
              options
            )
          );
        }
      },
      {
        '../utils.js': 'lbtnr',
        './toFormData.js': 'jJQ5Z',
        '../platform/index.js': '6yQYc',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '6yQYc': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _indexJs = require('./node/index.js');
        var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
        var _utilsJs = require('./common/utils.js');
        exports.default = {
          ..._utilsJs,
          ...(0, _indexJsDefault.default),
        };
      },
      {
        './node/index.js': 'AaL2L',
        './common/utils.js': 'a3AWC',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    AaL2L: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _urlsearchParamsJs = require('./classes/URLSearchParams.js');
        var _urlsearchParamsJsDefault =
          parcelHelpers.interopDefault(_urlsearchParamsJs);
        var _formDataJs = require('./classes/FormData.js');
        var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
        var _blobJs = require('./classes/Blob.js');
        var _blobJsDefault = parcelHelpers.interopDefault(_blobJs);
        exports.default = {
          isBrowser: true,
          classes: {
            URLSearchParams: (0, _urlsearchParamsJsDefault.default),
            FormData: (0, _formDataJsDefault.default),
            Blob: (0, _blobJsDefault.default),
          },
          protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
        };
      },
      {
        './classes/URLSearchParams.js': '5FSzi',
        './classes/FormData.js': 'hMGbY',
        './classes/Blob.js': 'e1vHQ',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '5FSzi': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _axiosURLSearchParamsJs = require('../../../helpers/AxiosURLSearchParams.js');
        var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(
          _axiosURLSearchParamsJs
        );
        ('use strict');
        exports.default =
          typeof URLSearchParams !== 'undefined'
            ? URLSearchParams
            : (0, _axiosURLSearchParamsJsDefault.default);
      },
      {
        '../../../helpers/AxiosURLSearchParams.js': '8JlJO',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    hMGbY: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        ('use strict');
        exports.default = typeof FormData !== 'undefined' ? FormData : null;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    e1vHQ: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        ('use strict');
        exports.default = typeof Blob !== 'undefined' ? Blob : null;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    a3AWC: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'hasBrowserEnv', () => hasBrowserEnv);
        parcelHelpers.export(
          exports,
          'hasStandardBrowserWebWorkerEnv',
          () => hasStandardBrowserWebWorkerEnv
        );
        parcelHelpers.export(
          exports,
          'hasStandardBrowserEnv',
          () => hasStandardBrowserEnv
        );
        parcelHelpers.export(exports, 'navigator', () => _navigator);
        parcelHelpers.export(exports, 'origin', () => origin);
        const hasBrowserEnv =
          typeof window !== 'undefined' && typeof document !== 'undefined';
        const _navigator =
          (typeof navigator === 'object' && navigator) || undefined;
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
         *
         * @returns {boolean}
         */ const hasStandardBrowserEnv =
          hasBrowserEnv &&
          (!_navigator ||
            ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) <
              0);
        /**
         * Determine if we're running in a standard browser webWorker environment
         *
         * Although the `isStandardBrowserEnv` method indicates that
         * `allows axios to run in a web worker`, the WebWorker will still be
         * filtered out due to its judgment standard
         * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
         * This leads to a problem when axios post `FormData` in webWorker
         */ const hasStandardBrowserWebWorkerEnv = (() => {
          return (
            typeof WorkerGlobalScope !== 'undefined' && // eslint-disable-next-line no-undef
            self instanceof WorkerGlobalScope &&
            typeof self.importScripts === 'function'
          );
        })();
        const origin =
          (hasBrowserEnv && window.location.href) || 'http://localhost';
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    cuPdu: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        ('use strict');
        /**
         * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
         *
         * @param {string} name - The name of the property to get.
         *
         * @returns An array of strings.
         */ function parsePropPath(name) {
          // foo[x][y][z]
          // foo.x.y.z
          // foo-x-y-z
          // foo x y z
          return (0, _utilsJsDefault.default)
            .matchAll(/\w+|\[(\w*)]/g, name)
            .map((match) => {
              return match[0] === '[]' ? '' : match[1] || match[0];
            });
        }
        /**
         * Convert an array to an object.
         *
         * @param {Array<any>} arr - The array to convert to an object.
         *
         * @returns An object with the same keys and values as the array.
         */ function arrayToObject(arr) {
          const obj = {};
          const keys = Object.keys(arr);
          let i;
          const len = keys.length;
          let key;
          for (i = 0; i < len; i++) {
            key = keys[i];
            obj[key] = arr[key];
          }
          return obj;
        }
        /**
         * It takes a FormData object and returns a JavaScript object
         *
         * @param {string} formData The FormData object to convert to JSON.
         *
         * @returns {Object<string, any> | null} The converted object.
         */ function formDataToJSON(formData) {
          function buildPath(path, value, target, index) {
            let name = path[index++];
            if (name === '__proto__') return true;
            const isNumericKey = Number.isFinite(+name);
            const isLast = index >= path.length;
            name =
              !name && (0, _utilsJsDefault.default).isArray(target)
                ? target.length
                : name;
            if (isLast) {
              if ((0, _utilsJsDefault.default).hasOwnProp(target, name))
                target[name] = [target[name], value];
              else target[name] = value;
              return !isNumericKey;
            }
            if (
              !target[name] ||
              !(0, _utilsJsDefault.default).isObject(target[name])
            )
              target[name] = [];
            const result = buildPath(path, value, target[name], index);
            if (result && (0, _utilsJsDefault.default).isArray(target[name]))
              target[name] = arrayToObject(target[name]);
            return !isNumericKey;
          }
          if (
            (0, _utilsJsDefault.default).isFormData(formData) &&
            (0, _utilsJsDefault.default).isFunction(formData.entries)
          ) {
            const obj = {};
            (0, _utilsJsDefault.default).forEachEntry(
              formData,
              (name, value) => {
                buildPath(parsePropPath(name), value, obj, 0);
              }
            );
            return obj;
          }
          return null;
        }
        exports.default = formDataToJSON;
      },
      {
        '../utils.js': 'lbtnr',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    eHpg9: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _parseHeadersJs = require('../helpers/parseHeaders.js');
        var _parseHeadersJsDefault =
          parcelHelpers.interopDefault(_parseHeadersJs);
        ('use strict');
        const $internals = Symbol('internals');
        function normalizeHeader(header) {
          return header && String(header).trim().toLowerCase();
        }
        function normalizeValue(value) {
          if (value === false || value == null) return value;
          return (0, _utilsJsDefault.default).isArray(value)
            ? value.map(normalizeValue)
            : String(value);
        }
        function parseTokens(str) {
          const tokens = Object.create(null);
          const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
          let match;
          while ((match = tokensRE.exec(str))) tokens[match[1]] = match[2];
          return tokens;
        }
        const isValidHeaderName = (str) =>
          /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
        function matchHeaderValue(
          context,
          value,
          header,
          filter,
          isHeaderNameFilter
        ) {
          if ((0, _utilsJsDefault.default).isFunction(filter))
            return filter.call(this, value, header);
          if (isHeaderNameFilter) value = header;
          if (!(0, _utilsJsDefault.default).isString(value)) return;
          if ((0, _utilsJsDefault.default).isString(filter))
            return value.indexOf(filter) !== -1;
          if ((0, _utilsJsDefault.default).isRegExp(filter))
            return filter.test(value);
        }
        function formatHeader(header) {
          return header
            .trim()
            .toLowerCase()
            .replace(/([a-z\d])(\w*)/g, (w, char, str) => {
              return char.toUpperCase() + str;
            });
        }
        function buildAccessors(obj, header) {
          const accessorName = (0, _utilsJsDefault.default).toCamelCase(
            ' ' + header
          );
          ['get', 'set', 'has'].forEach((methodName) => {
            Object.defineProperty(obj, methodName + accessorName, {
              value: function (arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
              },
              configurable: true,
            });
          });
        }
        class AxiosHeaders {
          constructor(headers) {
            headers && this.set(headers);
          }
          set(header, valueOrRewrite, rewrite) {
            const self = this;
            function setHeader(_value, _header, _rewrite) {
              const lHeader = normalizeHeader(_header);
              if (!lHeader)
                throw new Error('header name must be a non-empty string');
              const key = (0, _utilsJsDefault.default).findKey(self, lHeader);
              if (
                !key ||
                self[key] === undefined ||
                _rewrite === true ||
                (_rewrite === undefined && self[key] !== false)
              )
                self[key || _header] = normalizeValue(_value);
            }
            const setHeaders = (headers, _rewrite) =>
              (0, _utilsJsDefault.default).forEach(headers, (_value, _header) =>
                setHeader(_value, _header, _rewrite)
              );
            if (
              (0, _utilsJsDefault.default).isPlainObject(header) ||
              header instanceof this.constructor
            )
              setHeaders(header, valueOrRewrite);
            else if (
              (0, _utilsJsDefault.default).isString(header) &&
              (header = header.trim()) &&
              !isValidHeaderName(header)
            )
              setHeaders(
                (0, _parseHeadersJsDefault.default)(header),
                valueOrRewrite
              );
            else if ((0, _utilsJsDefault.default).isHeaders(header))
              for (const [key, value] of header.entries())
                setHeader(value, key, rewrite);
            else header != null && setHeader(valueOrRewrite, header, rewrite);
            return this;
          }
          get(header, parser) {
            header = normalizeHeader(header);
            if (header) {
              const key = (0, _utilsJsDefault.default).findKey(this, header);
              if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return parseTokens(value);
                if ((0, _utilsJsDefault.default).isFunction(parser))
                  return parser.call(this, value, key);
                if ((0, _utilsJsDefault.default).isRegExp(parser))
                  return parser.exec(value);
                throw new TypeError('parser must be boolean|regexp|function');
              }
            }
          }
          has(header, matcher) {
            header = normalizeHeader(header);
            if (header) {
              const key = (0, _utilsJsDefault.default).findKey(this, header);
              return !!(
                key &&
                this[key] !== undefined &&
                (!matcher || matchHeaderValue(this, this[key], key, matcher))
              );
            }
            return false;
          }
          delete(header, matcher) {
            const self = this;
            let deleted = false;
            function deleteHeader(_header) {
              _header = normalizeHeader(_header);
              if (_header) {
                const key = (0, _utilsJsDefault.default).findKey(self, _header);
                if (
                  key &&
                  (!matcher || matchHeaderValue(self, self[key], key, matcher))
                ) {
                  delete self[key];
                  deleted = true;
                }
              }
            }
            if ((0, _utilsJsDefault.default).isArray(header))
              header.forEach(deleteHeader);
            else deleteHeader(header);
            return deleted;
          }
          clear(matcher) {
            const keys = Object.keys(this);
            let i = keys.length;
            let deleted = false;
            while (i--) {
              const key = keys[i];
              if (
                !matcher ||
                matchHeaderValue(this, this[key], key, matcher, true)
              ) {
                delete this[key];
                deleted = true;
              }
            }
            return deleted;
          }
          normalize(format) {
            const self = this;
            const headers = {};
            (0, _utilsJsDefault.default).forEach(this, (value, header) => {
              const key = (0, _utilsJsDefault.default).findKey(headers, header);
              if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
              }
              const normalized = format
                ? formatHeader(header)
                : String(header).trim();
              if (normalized !== header) delete self[header];
              self[normalized] = normalizeValue(value);
              headers[normalized] = true;
            });
            return this;
          }
          concat(...targets) {
            return this.constructor.concat(this, ...targets);
          }
          toJSON(asStrings) {
            const obj = Object.create(null);
            (0, _utilsJsDefault.default).forEach(this, (value, header) => {
              value != null &&
                value !== false &&
                (obj[header] =
                  asStrings && (0, _utilsJsDefault.default).isArray(value)
                    ? value.join(', ')
                    : value);
            });
            return obj;
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON())
              .map(([header, value]) => header + ': ' + value)
              .join('\n');
          }
          get [Symbol.toStringTag]() {
            return 'AxiosHeaders';
          }
          static from(thing) {
            return thing instanceof this ? thing : new this(thing);
          }
          static concat(first, ...targets) {
            const computed = new this(first);
            targets.forEach((target) => computed.set(target));
            return computed;
          }
          static accessor(header) {
            const internals =
              (this[$internals] =
              this[$internals] =
                {
                  accessors: {},
                });
            const accessors = internals.accessors;
            const prototype = this.prototype;
            function defineAccessor(_header) {
              const lHeader = normalizeHeader(_header);
              if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
              }
            }
            (0, _utilsJsDefault.default).isArray(header)
              ? header.forEach(defineAccessor)
              : defineAccessor(header);
            return this;
          }
        }
        AxiosHeaders.accessor([
          'Content-Type',
          'Content-Length',
          'Accept',
          'Accept-Encoding',
          'User-Agent',
          'Authorization',
        ]);
        // reserved names hotfix
        (0, _utilsJsDefault.default).reduceDescriptors(
          AxiosHeaders.prototype,
          ({ value }, key) => {
            let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
            return {
              get: () => value,
              set(headerValue) {
                this[mapped] = headerValue;
              },
            };
          }
        );
        (0, _utilsJsDefault.default).freezeMethods(AxiosHeaders);
        exports.default = AxiosHeaders;
      },
      {
        '../utils.js': 'lbtnr',
        '../helpers/parseHeaders.js': 'iWnAZ',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    iWnAZ: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _utilsJs = require('./../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        ('use strict');
        // RawAxiosHeaders whose duplicates are ignored by node
        // c.f. https://nodejs.org/api/http.html#http_message_headers
        const ignoreDuplicateOf = (0, _utilsJsDefault.default).toObjectSet([
          'age',
          'authorization',
          'content-length',
          'content-type',
          'etag',
          'expires',
          'from',
          'host',
          'if-modified-since',
          'if-unmodified-since',
          'last-modified',
          'location',
          'max-forwards',
          'proxy-authorization',
          'referer',
          'retry-after',
          'user-agent',
        ]);
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
         * @param {String} rawHeaders Headers needing to be parsed
         *
         * @returns {Object} Headers parsed into an object
         */ exports.default = (rawHeaders) => {
          const parsed = {};
          let key;
          let val;
          let i;
          rawHeaders &&
            rawHeaders.split('\n').forEach(function parser(line) {
              i = line.indexOf(':');
              key = line.substring(0, i).trim().toLowerCase();
              val = line.substring(i + 1).trim();
              if (!key || (parsed[key] && ignoreDuplicateOf[key])) return;
              if (key === 'set-cookie') {
                if (parsed[key]) parsed[key].push(val);
                else parsed[key] = [val];
              } else parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            });
          return parsed;
        };
      },
      {
        './../utils.js': 'lbtnr',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    gz0Pv: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => isCancel);
        ('use strict');
        function isCancel(value) {
          return !!(value && value.__CANCEL__);
        }
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    '6k8Ga': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _axiosErrorJs = require('../core/AxiosError.js');
        var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        ('use strict');
        /**
         * A `CanceledError` is an object that is thrown when an operation is canceled.
         *
         * @param {string=} message The message.
         * @param {Object=} config The config.
         * @param {Object=} request The request.
         *
         * @returns {CanceledError} The created error.
         */ function CanceledError(message, config, request) {
          // eslint-disable-next-line no-eq-null,eqeqeq
          (0, _axiosErrorJsDefault.default).call(
            this,
            message == null ? 'canceled' : message,
            (0, _axiosErrorJsDefault.default).ERR_CANCELED,
            config,
            request
          );
          this.name = 'CanceledError';
        }
        (0, _utilsJsDefault.default).inherits(
          CanceledError,
          (0, _axiosErrorJsDefault.default),
          {
            __CANCEL__: true,
          }
        );
        exports.default = CanceledError;
      },
      {
        '../core/AxiosError.js': 'fxYQp',
        '../utils.js': 'lbtnr',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    iRRaw: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _httpJs = require('./http.js');
        var _httpJsDefault = parcelHelpers.interopDefault(_httpJs);
        var _xhrJs = require('./xhr.js');
        var _xhrJsDefault = parcelHelpers.interopDefault(_xhrJs);
        var _fetchJs = require('./fetch.js');
        var _fetchJsDefault = parcelHelpers.interopDefault(_fetchJs);
        var _axiosErrorJs = require('../core/AxiosError.js');
        var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
        const knownAdapters = {
          http: (0, _httpJsDefault.default),
          xhr: (0, _xhrJsDefault.default),
          fetch: (0, _fetchJsDefault.default),
        };
        (0, _utilsJsDefault.default).forEach(knownAdapters, (fn, value) => {
          if (fn) {
            try {
              Object.defineProperty(fn, 'name', {
                value,
              });
            } catch (e) {
              // eslint-disable-next-line no-empty
            }
            Object.defineProperty(fn, 'adapterName', {
              value,
            });
          }
        });
        const renderReason = (reason) => `- ${reason}`;
        const isResolvedHandle = (adapter) =>
          (0, _utilsJsDefault.default).isFunction(adapter) ||
          adapter === null ||
          adapter === false;
        exports.default = {
          getAdapter: (adapters) => {
            adapters = (0, _utilsJsDefault.default).isArray(adapters)
              ? adapters
              : [adapters];
            const { length } = adapters;
            let nameOrAdapter;
            let adapter;
            const rejectedReasons = {};
            for (let i = 0; i < length; i++) {
              nameOrAdapter = adapters[i];
              let id;
              adapter = nameOrAdapter;
              if (!isResolvedHandle(nameOrAdapter)) {
                adapter =
                  knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
                if (adapter === undefined)
                  throw new (0, _axiosErrorJsDefault.default)(
                    `Unknown adapter '${id}'`
                  );
              }
              if (adapter) break;
              rejectedReasons[id || '#' + i] = adapter;
            }
            if (!adapter) {
              const reasons = Object.entries(rejectedReasons).map(
                ([id, state]) =>
                  `adapter ${id} ` +
                  (state === false
                    ? 'is not supported by the environment'
                    : 'is not available in the build')
              );
              let s = length
                ? reasons.length > 1
                  ? 'since :\n' + reasons.map(renderReason).join('\n')
                  : ' ' + renderReason(reasons[0])
                : 'as no adapter specified';
              throw new (0, _axiosErrorJsDefault.default)(
                `There is no suitable adapter to dispatch the request ` + s,
                'ERR_NOT_SUPPORT'
              );
            }
            return adapter;
          },
          adapters: knownAdapters,
        };
      },
      {
        '../utils.js': 'lbtnr',
        './http.js': 'eDh7d',
        './xhr.js': 'csj5T',
        './fetch.js': 'hFAwY',
        '../core/AxiosError.js': 'fxYQp',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    csj5T: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _utilsJs = require('./../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _settleJs = require('./../core/settle.js');
        var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
        var _transitionalJs = require('../defaults/transitional.js');
        var _transitionalJsDefault =
          parcelHelpers.interopDefault(_transitionalJs);
        var _axiosErrorJs = require('../core/AxiosError.js');
        var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
        var _canceledErrorJs = require('../cancel/CanceledError.js');
        var _canceledErrorJsDefault =
          parcelHelpers.interopDefault(_canceledErrorJs);
        var _parseProtocolJs = require('../helpers/parseProtocol.js');
        var _parseProtocolJsDefault =
          parcelHelpers.interopDefault(_parseProtocolJs);
        var _indexJs = require('../platform/index.js');
        var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
        var _axiosHeadersJs = require('../core/AxiosHeaders.js');
        var _axiosHeadersJsDefault =
          parcelHelpers.interopDefault(_axiosHeadersJs);
        var _progressEventReducerJs = require('../helpers/progressEventReducer.js');
        var _resolveConfigJs = require('../helpers/resolveConfig.js');
        var _resolveConfigJsDefault =
          parcelHelpers.interopDefault(_resolveConfigJs);
        const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
        exports.default =
          isXHRAdapterSupported &&
          function (config) {
            return new Promise(function dispatchXhrRequest(resolve, reject) {
              const _config = (0, _resolveConfigJsDefault.default)(config);
              let requestData = _config.data;
              const requestHeaders = (0, _axiosHeadersJsDefault.default)
                .from(_config.headers)
                .normalize();
              let { responseType, onUploadProgress, onDownloadProgress } =
                _config;
              let onCanceled;
              let uploadThrottled, downloadThrottled;
              let flushUpload, flushDownload;
              function done() {
                flushUpload && flushUpload(); // flush events
                flushDownload && flushDownload(); // flush events
                _config.cancelToken &&
                  _config.cancelToken.unsubscribe(onCanceled);
                _config.signal &&
                  _config.signal.removeEventListener('abort', onCanceled);
              }
              let request = new XMLHttpRequest();
              request.open(_config.method.toUpperCase(), _config.url, true);
              // Set the request timeout in MS
              request.timeout = _config.timeout;
              function onloadend() {
                if (!request) return;
                // Prepare the response
                const responseHeaders = (0,
                _axiosHeadersJsDefault.default).from(
                  'getAllResponseHeaders' in request &&
                    request.getAllResponseHeaders()
                );
                const responseData =
                  !responseType ||
                  responseType === 'text' ||
                  responseType === 'json'
                    ? request.responseText
                    : request.response;
                const response = {
                  data: responseData,
                  status: request.status,
                  statusText: request.statusText,
                  headers: responseHeaders,
                  config,
                  request,
                };
                (0, _settleJsDefault.default)(
                  function _resolve(value) {
                    resolve(value);
                    done();
                  },
                  function _reject(err) {
                    reject(err);
                    done();
                  },
                  response
                );
                // Clean up request
                request = null;
              }
              if ('onloadend' in request)
                // Use onloadend if available
                request.onloadend = onloadend; // Listen for ready state to emulate onloadend
              else
                request.onreadystatechange = function handleLoad() {
                  if (!request || request.readyState !== 4) return;
                  // The request errored out and we didn't get a response, this will be
                  // handled by onerror instead
                  // With one exception: request that using file: protocol, most browsers
                  // will return status as 0 even though it's a successful request
                  if (
                    request.status === 0 &&
                    !(
                      request.responseURL &&
                      request.responseURL.indexOf('file:') === 0
                    )
                  )
                    return;
                  // readystate handler is calling before onerror or ontimeout handlers,
                  // so we should call onloadend on the next 'tick'
                  setTimeout(onloadend);
                };
              // Handle browser request cancellation (as opposed to a manual cancellation)
              request.onabort = function handleAbort() {
                if (!request) return;
                reject(
                  new (0, _axiosErrorJsDefault.default)(
                    'Request aborted',
                    (0, _axiosErrorJsDefault.default).ECONNABORTED,
                    config,
                    request
                  )
                );
                // Clean up request
                request = null;
              };
              // Handle low level network errors
              request.onerror = function handleError() {
                // Real errors are hidden from us by the browser
                // onerror should only fire if it's a network error
                reject(
                  new (0, _axiosErrorJsDefault.default)(
                    'Network Error',
                    (0, _axiosErrorJsDefault.default).ERR_NETWORK,
                    config,
                    request
                  )
                );
                // Clean up request
                request = null;
              };
              // Handle timeout
              request.ontimeout = function handleTimeout() {
                let timeoutErrorMessage = _config.timeout
                  ? 'timeout of ' + _config.timeout + 'ms exceeded'
                  : 'timeout exceeded';
                const transitional =
                  _config.transitional || (0, _transitionalJsDefault.default);
                if (_config.timeoutErrorMessage)
                  timeoutErrorMessage = _config.timeoutErrorMessage;
                reject(
                  new (0, _axiosErrorJsDefault.default)(
                    timeoutErrorMessage,
                    transitional.clarifyTimeoutError
                      ? (0, _axiosErrorJsDefault.default).ETIMEDOUT
                      : (0, _axiosErrorJsDefault.default).ECONNABORTED,
                    config,
                    request
                  )
                );
                // Clean up request
                request = null;
              };
              // Remove Content-Type if data is undefined
              requestData === undefined && requestHeaders.setContentType(null);
              // Add headers to the request
              if ('setRequestHeader' in request)
                (0, _utilsJsDefault.default).forEach(
                  requestHeaders.toJSON(),
                  function setRequestHeader(val, key) {
                    request.setRequestHeader(key, val);
                  }
                );
              // Add withCredentials to request if needed
              if (
                !(0, _utilsJsDefault.default).isUndefined(
                  _config.withCredentials
                )
              )
                request.withCredentials = !!_config.withCredentials;
              // Add responseType to request if needed
              if (responseType && responseType !== 'json')
                request.responseType = _config.responseType;
              // Handle progress if needed
              if (onDownloadProgress) {
                [downloadThrottled, flushDownload] = (0,
                _progressEventReducerJs.progressEventReducer)(
                  onDownloadProgress,
                  true
                );
                request.addEventListener('progress', downloadThrottled);
              }
              // Not all browsers support upload events
              if (onUploadProgress && request.upload) {
                [uploadThrottled, flushUpload] = (0,
                _progressEventReducerJs.progressEventReducer)(onUploadProgress);
                request.upload.addEventListener('progress', uploadThrottled);
                request.upload.addEventListener('loadend', flushUpload);
              }
              if (_config.cancelToken || _config.signal) {
                // Handle cancellation
                // eslint-disable-next-line func-names
                onCanceled = (cancel) => {
                  if (!request) return;
                  reject(
                    !cancel || cancel.type
                      ? new (0, _canceledErrorJsDefault.default)(
                          null,
                          config,
                          request
                        )
                      : cancel
                  );
                  request.abort();
                  request = null;
                };
                _config.cancelToken &&
                  _config.cancelToken.subscribe(onCanceled);
                if (_config.signal)
                  _config.signal.aborted
                    ? onCanceled()
                    : _config.signal.addEventListener('abort', onCanceled);
              }
              const protocol = (0, _parseProtocolJsDefault.default)(
                _config.url
              );
              if (
                protocol &&
                (0, _indexJsDefault.default).protocols.indexOf(protocol) === -1
              ) {
                reject(
                  new (0, _axiosErrorJsDefault.default)(
                    'Unsupported protocol ' + protocol + ':',
                    (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST,
                    config
                  )
                );
                return;
              }
              // Send the request
              request.send(requestData || null);
            });
          };
      },
      {
        './../utils.js': 'lbtnr',
        './../core/settle.js': 'kjUFy',
        '../defaults/transitional.js': '5audw',
        '../core/AxiosError.js': 'fxYQp',
        '../cancel/CanceledError.js': '6k8Ga',
        '../helpers/parseProtocol.js': 'jdRXE',
        '../platform/index.js': '6yQYc',
        '../core/AxiosHeaders.js': 'eHpg9',
        '../helpers/progressEventReducer.js': 'hBGtj',
        '../helpers/resolveConfig.js': 'f6fWB',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    kjUFy: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => settle);
        var _axiosErrorJs = require('./AxiosError.js');
        var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
        ('use strict');
        function settle(resolve, reject, response) {
          const validateStatus = response.config.validateStatus;
          if (
            !response.status ||
            !validateStatus ||
            validateStatus(response.status)
          )
            resolve(response);
          else
            reject(
              new (0, _axiosErrorJsDefault.default)(
                'Request failed with status code ' + response.status,
                [
                  (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST,
                  (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE,
                ][Math.floor(response.status / 100) - 4],
                response.config,
                response.request,
                response
              )
            );
        }
      },
      {
        './AxiosError.js': 'fxYQp',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    jdRXE: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => parseProtocol);
        ('use strict');
        function parseProtocol(url) {
          const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
          return (match && match[1]) || '';
        }
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    hBGtj: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(
          exports,
          'progressEventReducer',
          () => progressEventReducer
        );
        parcelHelpers.export(
          exports,
          'progressEventDecorator',
          () => progressEventDecorator
        );
        parcelHelpers.export(exports, 'asyncDecorator', () => asyncDecorator);
        var _speedometerJs = require('./speedometer.js');
        var _speedometerJsDefault =
          parcelHelpers.interopDefault(_speedometerJs);
        var _throttleJs = require('./throttle.js');
        var _throttleJsDefault = parcelHelpers.interopDefault(_throttleJs);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
          let bytesNotified = 0;
          const _speedometer = (0, _speedometerJsDefault.default)(50, 250);
          return (0, _throttleJsDefault.default)((e) => {
            const loaded = e.loaded;
            const total = e.lengthComputable ? e.total : undefined;
            const progressBytes = loaded - bytesNotified;
            const rate = _speedometer(progressBytes);
            const inRange = loaded <= total;
            bytesNotified = loaded;
            const data = {
              loaded,
              total,
              progress: total ? loaded / total : undefined,
              bytes: progressBytes,
              rate: rate ? rate : undefined,
              estimated:
                rate && total && inRange ? (total - loaded) / rate : undefined,
              event: e,
              lengthComputable: total != null,
              [isDownloadStream ? 'download' : 'upload']: true,
            };
            listener(data);
          }, freq);
        };
        const progressEventDecorator = (total, throttled) => {
          const lengthComputable = total != null;
          return [
            (loaded) =>
              throttled[0]({
                lengthComputable,
                total,
                loaded,
              }),
            throttled[1],
          ];
        };
        const asyncDecorator =
          (fn) =>
          (...args) =>
            (0, _utilsJsDefault.default).asap(() => fn(...args));
      },
      {
        './speedometer.js': 'jWByC',
        './throttle.js': 'auTrz',
        '../utils.js': 'lbtnr',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    jWByC: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        ('use strict');
        /**
         * Calculate data maxRate
         * @param {Number} [samplesCount= 10]
         * @param {Number} [min= 1000]
         * @returns {Function}
         */ function speedometer(samplesCount, min) {
          samplesCount = samplesCount || 10;
          const bytes = new Array(samplesCount);
          const timestamps = new Array(samplesCount);
          let head = 0;
          let tail = 0;
          let firstSampleTS;
          min = min !== undefined ? min : 1000;
          return function push(chunkLength) {
            const now = Date.now();
            const startedAt = timestamps[tail];
            if (!firstSampleTS) firstSampleTS = now;
            bytes[head] = chunkLength;
            timestamps[head] = now;
            let i = tail;
            let bytesCount = 0;
            while (i !== head) {
              bytesCount += bytes[i++];
              i = i % samplesCount;
            }
            head = (head + 1) % samplesCount;
            if (head === tail) tail = (tail + 1) % samplesCount;
            if (now - firstSampleTS < min) return;
            const passed = startedAt && now - startedAt;
            return passed
              ? Math.round((bytesCount * 1000) / passed)
              : undefined;
          };
        }
        exports.default = speedometer;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    auTrz: [
      function (require, module, exports, __globalThis) {
        /**
         * Throttle decorator
         * @param {Function} fn
         * @param {Number} freq
         * @return {Function}
         */ var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function throttle(fn, freq) {
          let timestamp = 0;
          let threshold = 1000 / freq;
          let lastArgs;
          let timer;
          const invoke = (args, now = Date.now()) => {
            timestamp = now;
            lastArgs = null;
            if (timer) {
              clearTimeout(timer);
              timer = null;
            }
            fn.apply(null, args);
          };
          const throttled = (...args) => {
            const now = Date.now();
            const passed = now - timestamp;
            if (passed >= threshold) invoke(args, now);
            else {
              lastArgs = args;
              if (!timer)
                timer = setTimeout(() => {
                  timer = null;
                  invoke(lastArgs);
                }, threshold - passed);
            }
          };
          const flush = () => lastArgs && invoke(lastArgs);
          return [throttled, flush];
        }
        exports.default = throttle;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    f6fWB: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _indexJs = require('../platform/index.js');
        var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _isURLSameOriginJs = require('./isURLSameOrigin.js');
        var _isURLSameOriginJsDefault =
          parcelHelpers.interopDefault(_isURLSameOriginJs);
        var _cookiesJs = require('./cookies.js');
        var _cookiesJsDefault = parcelHelpers.interopDefault(_cookiesJs);
        var _buildFullPathJs = require('../core/buildFullPath.js');
        var _buildFullPathJsDefault =
          parcelHelpers.interopDefault(_buildFullPathJs);
        var _mergeConfigJs = require('../core/mergeConfig.js');
        var _mergeConfigJsDefault =
          parcelHelpers.interopDefault(_mergeConfigJs);
        var _axiosHeadersJs = require('../core/AxiosHeaders.js');
        var _axiosHeadersJsDefault =
          parcelHelpers.interopDefault(_axiosHeadersJs);
        var _buildURLJs = require('./buildURL.js');
        var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
        exports.default = (config) => {
          const newConfig = (0, _mergeConfigJsDefault.default)({}, config);
          let {
            data,
            withXSRFToken,
            xsrfHeaderName,
            xsrfCookieName,
            headers,
            auth,
          } = newConfig;
          newConfig.headers = headers = (0,
          _axiosHeadersJsDefault.default).from(headers);
          newConfig.url = (0, _buildURLJsDefault.default)(
            (0, _buildFullPathJsDefault.default)(
              newConfig.baseURL,
              newConfig.url
            ),
            config.params,
            config.paramsSerializer
          );
          // HTTP basic authentication
          if (auth)
            headers.set(
              'Authorization',
              'Basic ' +
                btoa(
                  (auth.username || '') +
                    ':' +
                    (auth.password
                      ? unescape(encodeURIComponent(auth.password))
                      : '')
                )
            );
          let contentType;
          if ((0, _utilsJsDefault.default).isFormData(data)) {
            if (
              (0, _indexJsDefault.default).hasStandardBrowserEnv ||
              (0, _indexJsDefault.default).hasStandardBrowserWebWorkerEnv
            )
              headers.setContentType(undefined); // Let the browser set it
            else if ((contentType = headers.getContentType()) !== false) {
              // fix semicolon duplication issue for ReactNative FormData implementation
              const [type, ...tokens] = contentType
                ? contentType
                    .split(';')
                    .map((token) => token.trim())
                    .filter(Boolean)
                : [];
              headers.setContentType(
                [type || 'multipart/form-data', ...tokens].join('; ')
              );
            }
          }
          // Add xsrf header
          // This is only done if running in a standard browser environment.
          // Specifically not if we're in a web worker, or react-native.
          if ((0, _indexJsDefault.default).hasStandardBrowserEnv) {
            withXSRFToken &&
              (0, _utilsJsDefault.default).isFunction(withXSRFToken) &&
              (withXSRFToken = withXSRFToken(newConfig));
            if (
              withXSRFToken ||
              (withXSRFToken !== false &&
                (0, _isURLSameOriginJsDefault.default)(newConfig.url))
            ) {
              // Add xsrf header
              const xsrfValue =
                xsrfHeaderName &&
                xsrfCookieName &&
                (0, _cookiesJsDefault.default).read(xsrfCookieName);
              if (xsrfValue) headers.set(xsrfHeaderName, xsrfValue);
            }
          }
          return newConfig;
        };
      },
      {
        '../platform/index.js': '6yQYc',
        '../utils.js': 'lbtnr',
        './isURLSameOrigin.js': 'f8WRp',
        './cookies.js': '1yi5d',
        '../core/buildFullPath.js': 'bxNKA',
        '../core/mergeConfig.js': '1ogTa',
        '../core/AxiosHeaders.js': 'eHpg9',
        './buildURL.js': 'adWtE',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    f8WRp: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _indexJs = require('../platform/index.js');
        var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
        exports.default = (0, _indexJsDefault.default).hasStandardBrowserEnv
          ? ((origin, isMSIE) => (url) => {
              url = new URL(url, (0, _indexJsDefault.default).origin);
              return (
                origin.protocol === url.protocol &&
                origin.host === url.host &&
                (isMSIE || origin.port === url.port)
              );
            })(
              new URL((0, _indexJsDefault.default).origin),
              (0, _indexJsDefault.default).navigator &&
                /(msie|trident)/i.test(
                  (0, _indexJsDefault.default).navigator.userAgent
                )
            )
          : () => true;
      },
      {
        '../platform/index.js': '6yQYc',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '1yi5d': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _utilsJs = require('./../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _indexJs = require('../platform/index.js');
        var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
        exports.default = (0, _indexJsDefault.default).hasStandardBrowserEnv // Standard browser envs support document.cookie
          ? {
              write(name, value, expires, path, domain, secure) {
                const cookie = [name + '=' + encodeURIComponent(value)];
                (0, _utilsJsDefault.default).isNumber(expires) &&
                  cookie.push('expires=' + new Date(expires).toGMTString());
                (0, _utilsJsDefault.default).isString(path) &&
                  cookie.push('path=' + path);
                (0, _utilsJsDefault.default).isString(domain) &&
                  cookie.push('domain=' + domain);
                secure === true && cookie.push('secure');
                document.cookie = cookie.join('; ');
              },
              read(name) {
                const match = document.cookie.match(
                  new RegExp('(^|;\\s*)(' + name + ')=([^;]*)')
                );
                return match ? decodeURIComponent(match[3]) : null;
              },
              remove(name) {
                this.write(name, '', Date.now() - 86400000);
              },
            } // Non-standard browser env (web workers, react-native) lack needed support.
          : {
              write() {},
              read() {
                return null;
              },
              remove() {},
            };
      },
      {
        './../utils.js': 'lbtnr',
        '../platform/index.js': '6yQYc',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    bxNKA: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => buildFullPath);
        var _isAbsoluteURLJs = require('../helpers/isAbsoluteURL.js');
        var _isAbsoluteURLJsDefault =
          parcelHelpers.interopDefault(_isAbsoluteURLJs);
        var _combineURLsJs = require('../helpers/combineURLs.js');
        var _combineURLsJsDefault =
          parcelHelpers.interopDefault(_combineURLsJs);
        ('use strict');
        function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
          let isRelativeUrl = !(0, _isAbsoluteURLJsDefault.default)(
            requestedURL
          );
          if ((baseURL && isRelativeUrl) || allowAbsoluteUrls == false)
            return (0, _combineURLsJsDefault.default)(baseURL, requestedURL);
          return requestedURL;
        }
      },
      {
        '../helpers/isAbsoluteURL.js': 'caZL3',
        '../helpers/combineURLs.js': 'gHjEZ',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    caZL3: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => isAbsoluteURL);
        ('use strict');
        function isAbsoluteURL(url) {
          // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
          // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
          // by any combination of letters, digits, plus, period, or hyphen.
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
        }
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    gHjEZ: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => combineURLs);
        ('use strict');
        function combineURLs(baseURL, relativeURL) {
          return relativeURL
            ? baseURL.replace(/\/?\/$/, '') +
                '/' +
                relativeURL.replace(/^\/+/, '')
            : baseURL;
        }
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    '1ogTa': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => mergeConfig);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _axiosHeadersJs = require('./AxiosHeaders.js');
        var _axiosHeadersJsDefault =
          parcelHelpers.interopDefault(_axiosHeadersJs);
        ('use strict');
        const headersToObject = (thing) =>
          thing instanceof (0, _axiosHeadersJsDefault.default)
            ? {
                ...thing,
              }
            : thing;
        function mergeConfig(config1, config2) {
          // eslint-disable-next-line no-param-reassign
          config2 = config2 || {};
          const config = {};
          function getMergedValue(target, source, prop, caseless) {
            if (
              (0, _utilsJsDefault.default).isPlainObject(target) &&
              (0, _utilsJsDefault.default).isPlainObject(source)
            )
              return (0, _utilsJsDefault.default).merge.call(
                {
                  caseless,
                },
                target,
                source
              );
            else if ((0, _utilsJsDefault.default).isPlainObject(source))
              return (0, _utilsJsDefault.default).merge({}, source);
            else if ((0, _utilsJsDefault.default).isArray(source))
              return source.slice();
            return source;
          }
          // eslint-disable-next-line consistent-return
          function mergeDeepProperties(a, b, prop, caseless) {
            if (!(0, _utilsJsDefault.default).isUndefined(b))
              return getMergedValue(a, b, prop, caseless);
            else if (!(0, _utilsJsDefault.default).isUndefined(a))
              return getMergedValue(undefined, a, prop, caseless);
          }
          // eslint-disable-next-line consistent-return
          function valueFromConfig2(a, b) {
            if (!(0, _utilsJsDefault.default).isUndefined(b))
              return getMergedValue(undefined, b);
          }
          // eslint-disable-next-line consistent-return
          function defaultToConfig2(a, b) {
            if (!(0, _utilsJsDefault.default).isUndefined(b))
              return getMergedValue(undefined, b);
            else if (!(0, _utilsJsDefault.default).isUndefined(a))
              return getMergedValue(undefined, a);
          }
          // eslint-disable-next-line consistent-return
          function mergeDirectKeys(a, b, prop) {
            if (prop in config2) return getMergedValue(a, b);
            else if (prop in config1) return getMergedValue(undefined, a);
          }
          const mergeMap = {
            url: valueFromConfig2,
            method: valueFromConfig2,
            data: valueFromConfig2,
            baseURL: defaultToConfig2,
            transformRequest: defaultToConfig2,
            transformResponse: defaultToConfig2,
            paramsSerializer: defaultToConfig2,
            timeout: defaultToConfig2,
            timeoutMessage: defaultToConfig2,
            withCredentials: defaultToConfig2,
            withXSRFToken: defaultToConfig2,
            adapter: defaultToConfig2,
            responseType: defaultToConfig2,
            xsrfCookieName: defaultToConfig2,
            xsrfHeaderName: defaultToConfig2,
            onUploadProgress: defaultToConfig2,
            onDownloadProgress: defaultToConfig2,
            decompress: defaultToConfig2,
            maxContentLength: defaultToConfig2,
            maxBodyLength: defaultToConfig2,
            beforeRedirect: defaultToConfig2,
            transport: defaultToConfig2,
            httpAgent: defaultToConfig2,
            httpsAgent: defaultToConfig2,
            cancelToken: defaultToConfig2,
            socketPath: defaultToConfig2,
            responseEncoding: defaultToConfig2,
            validateStatus: mergeDirectKeys,
            headers: (a, b, prop) =>
              mergeDeepProperties(
                headersToObject(a),
                headersToObject(b),
                prop,
                true
              ),
          };
          (0, _utilsJsDefault.default).forEach(
            Object.keys(Object.assign({}, config1, config2)),
            function computeConfigValue(prop) {
              const merge = mergeMap[prop] || mergeDeepProperties;
              const configValue = merge(config1[prop], config2[prop], prop);
              ((0, _utilsJsDefault.default).isUndefined(configValue) &&
                merge !== mergeDirectKeys) ||
                (config[prop] = configValue);
            }
          );
          return config;
        }
      },
      {
        '../utils.js': 'lbtnr',
        './AxiosHeaders.js': 'eHpg9',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    hFAwY: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _indexJs = require('../platform/index.js');
        var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        var _axiosErrorJs = require('../core/AxiosError.js');
        var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
        var _composeSignalsJs = require('../helpers/composeSignals.js');
        var _composeSignalsJsDefault =
          parcelHelpers.interopDefault(_composeSignalsJs);
        var _trackStreamJs = require('../helpers/trackStream.js');
        var _axiosHeadersJs = require('../core/AxiosHeaders.js');
        var _axiosHeadersJsDefault =
          parcelHelpers.interopDefault(_axiosHeadersJs);
        var _progressEventReducerJs = require('../helpers/progressEventReducer.js');
        var _resolveConfigJs = require('../helpers/resolveConfig.js');
        var _resolveConfigJsDefault =
          parcelHelpers.interopDefault(_resolveConfigJs);
        var _settleJs = require('../core/settle.js');
        var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
        const isFetchSupported =
          typeof fetch === 'function' &&
          typeof Request === 'function' &&
          typeof Response === 'function';
        const isReadableStreamSupported =
          isFetchSupported && typeof ReadableStream === 'function';
        // used only inside the fetch adapter
        const encodeText =
          isFetchSupported &&
          (typeof TextEncoder === 'function'
            ? (
                (encoder) => (str) =>
                  encoder.encode(str)
              )(new TextEncoder())
            : async (str) =>
                new Uint8Array(await new Response(str).arrayBuffer()));
        const test = (fn, ...args) => {
          try {
            return !!fn(...args);
          } catch (e) {
            return false;
          }
        };
        const supportsRequestStream =
          isReadableStreamSupported &&
          test(() => {
            let duplexAccessed = false;
            const hasContentType = new Request(
              (0, _indexJsDefault.default).origin,
              {
                body: new ReadableStream(),
                method: 'POST',
                get duplex() {
                  duplexAccessed = true;
                  return 'half';
                },
              }
            ).headers.has('Content-Type');
            return duplexAccessed && !hasContentType;
          });
        const DEFAULT_CHUNK_SIZE = 65536;
        const supportsResponseStream =
          isReadableStreamSupported &&
          test(() =>
            (0, _utilsJsDefault.default).isReadableStream(new Response('').body)
          );
        const resolvers = {
          stream: supportsResponseStream && ((res) => res.body),
        };
        isFetchSupported &&
          ((res) => {
            ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(
              (type) => {
                !resolvers[type] &&
                  (resolvers[type] = (0, _utilsJsDefault.default).isFunction(
                    res[type]
                  )
                    ? (res) => res[type]()
                    : (_, config) => {
                        throw new (0, _axiosErrorJsDefault.default)(
                          `Response type '${type}' is not supported`,
                          (0, _axiosErrorJsDefault.default).ERR_NOT_SUPPORT,
                          config
                        );
                      });
              }
            );
          })(new Response());
        const getBodyLength = async (body) => {
          if (body == null) return 0;
          if ((0, _utilsJsDefault.default).isBlob(body)) return body.size;
          if ((0, _utilsJsDefault.default).isSpecCompliantForm(body)) {
            const _request = new Request((0, _indexJsDefault.default).origin, {
              method: 'POST',
              body,
            });
            return (await _request.arrayBuffer()).byteLength;
          }
          if (
            (0, _utilsJsDefault.default).isArrayBufferView(body) ||
            (0, _utilsJsDefault.default).isArrayBuffer(body)
          )
            return body.byteLength;
          if ((0, _utilsJsDefault.default).isURLSearchParams(body))
            body = body + '';
          if ((0, _utilsJsDefault.default).isString(body))
            return (await encodeText(body)).byteLength;
        };
        const resolveBodyLength = async (headers, body) => {
          const length = (0, _utilsJsDefault.default).toFiniteNumber(
            headers.getContentLength()
          );
          return length == null ? getBodyLength(body) : length;
        };
        exports.default =
          isFetchSupported &&
          (async (config) => {
            let {
              url,
              method,
              data,
              signal,
              cancelToken,
              timeout,
              onDownloadProgress,
              onUploadProgress,
              responseType,
              headers,
              withCredentials = 'same-origin',
              fetchOptions,
            } = (0, _resolveConfigJsDefault.default)(config);
            responseType = responseType
              ? (responseType + '').toLowerCase()
              : 'text';
            let composedSignal = (0, _composeSignalsJsDefault.default)(
              [signal, cancelToken && cancelToken.toAbortSignal()],
              timeout
            );
            let request;
            const unsubscribe =
              composedSignal &&
              composedSignal.unsubscribe &&
              (() => {
                composedSignal.unsubscribe();
              });
            let requestContentLength;
            try {
              if (
                onUploadProgress &&
                supportsRequestStream &&
                method !== 'get' &&
                method !== 'head' &&
                (requestContentLength = await resolveBodyLength(
                  headers,
                  data
                )) !== 0
              ) {
                let _request = new Request(url, {
                  method: 'POST',
                  body: data,
                  duplex: 'half',
                });
                let contentTypeHeader;
                if (
                  (0, _utilsJsDefault.default).isFormData(data) &&
                  (contentTypeHeader = _request.headers.get('content-type'))
                )
                  headers.setContentType(contentTypeHeader);
                if (_request.body) {
                  const [onProgress, flush] = (0,
                  _progressEventReducerJs.progressEventDecorator)(
                    requestContentLength,
                    (0, _progressEventReducerJs.progressEventReducer)(
                      (0, _progressEventReducerJs.asyncDecorator)(
                        onUploadProgress
                      )
                    )
                  );
                  data = (0, _trackStreamJs.trackStream)(
                    _request.body,
                    DEFAULT_CHUNK_SIZE,
                    onProgress,
                    flush
                  );
                }
              }
              if (!(0, _utilsJsDefault.default).isString(withCredentials))
                withCredentials = withCredentials ? 'include' : 'omit';
              // Cloudflare Workers throws when credentials are defined
              // see https://github.com/cloudflare/workerd/issues/902
              const isCredentialsSupported = 'credentials' in Request.prototype;
              request = new Request(url, {
                ...fetchOptions,
                signal: composedSignal,
                method: method.toUpperCase(),
                headers: headers.normalize().toJSON(),
                body: data,
                duplex: 'half',
                credentials: isCredentialsSupported
                  ? withCredentials
                  : undefined,
              });
              let response = await fetch(request);
              const isStreamResponse =
                supportsResponseStream &&
                (responseType === 'stream' || responseType === 'response');
              if (
                supportsResponseStream &&
                (onDownloadProgress || (isStreamResponse && unsubscribe))
              ) {
                const options = {};
                ['status', 'statusText', 'headers'].forEach((prop) => {
                  options[prop] = response[prop];
                });
                const responseContentLength = (0,
                _utilsJsDefault.default).toFiniteNumber(
                  response.headers.get('content-length')
                );
                const [onProgress, flush] =
                  (onDownloadProgress &&
                    (0, _progressEventReducerJs.progressEventDecorator)(
                      responseContentLength,
                      (0, _progressEventReducerJs.progressEventReducer)(
                        (0, _progressEventReducerJs.asyncDecorator)(
                          onDownloadProgress
                        ),
                        true
                      )
                    )) ||
                  [];
                response = new Response(
                  (0, _trackStreamJs.trackStream)(
                    response.body,
                    DEFAULT_CHUNK_SIZE,
                    onProgress,
                    () => {
                      flush && flush();
                      unsubscribe && unsubscribe();
                    }
                  ),
                  options
                );
              }
              responseType = responseType || 'text';
              let responseData = await resolvers[
                (0, _utilsJsDefault.default).findKey(resolvers, responseType) ||
                  'text'
              ](response, config);
              !isStreamResponse && unsubscribe && unsubscribe();
              return await new Promise((resolve, reject) => {
                (0, _settleJsDefault.default)(resolve, reject, {
                  data: responseData,
                  headers: (0, _axiosHeadersJsDefault.default).from(
                    response.headers
                  ),
                  status: response.status,
                  statusText: response.statusText,
                  config,
                  request,
                });
              });
            } catch (err) {
              unsubscribe && unsubscribe();
              if (err && err.name === 'TypeError' && /fetch/i.test(err.message))
                throw Object.assign(
                  new (0, _axiosErrorJsDefault.default)(
                    'Network Error',
                    (0, _axiosErrorJsDefault.default).ERR_NETWORK,
                    config,
                    request
                  ),
                  {
                    cause: err.cause || err,
                  }
                );
              throw (0, _axiosErrorJsDefault.default).from(
                err,
                err && err.code,
                config,
                request
              );
            }
          });
      },
      {
        '../platform/index.js': '6yQYc',
        '../utils.js': 'lbtnr',
        '../core/AxiosError.js': 'fxYQp',
        '../helpers/composeSignals.js': 'kwGoC',
        '../helpers/trackStream.js': '6wW0N',
        '../core/AxiosHeaders.js': 'eHpg9',
        '../helpers/progressEventReducer.js': 'hBGtj',
        '../helpers/resolveConfig.js': 'f6fWB',
        '../core/settle.js': 'kjUFy',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    kwGoC: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _canceledErrorJs = require('../cancel/CanceledError.js');
        var _canceledErrorJsDefault =
          parcelHelpers.interopDefault(_canceledErrorJs);
        var _axiosErrorJs = require('../core/AxiosError.js');
        var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
        var _utilsJs = require('../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        const composeSignals = (signals, timeout) => {
          const { length } = (signals = signals ? signals.filter(Boolean) : []);
          if (timeout || length) {
            let controller = new AbortController();
            let aborted;
            const onabort = function (reason) {
              if (!aborted) {
                aborted = true;
                unsubscribe();
                const err = reason instanceof Error ? reason : this.reason;
                controller.abort(
                  err instanceof (0, _axiosErrorJsDefault.default)
                    ? err
                    : new (0, _canceledErrorJsDefault.default)(
                        err instanceof Error ? err.message : err
                      )
                );
              }
            };
            let timer =
              timeout &&
              setTimeout(() => {
                timer = null;
                onabort(
                  new (0, _axiosErrorJsDefault.default)(
                    `timeout ${timeout} of ms exceeded`,
                    (0, _axiosErrorJsDefault.default).ETIMEDOUT
                  )
                );
              }, timeout);
            const unsubscribe = () => {
              if (signals) {
                timer && clearTimeout(timer);
                timer = null;
                signals.forEach((signal) => {
                  signal.unsubscribe
                    ? signal.unsubscribe(onabort)
                    : signal.removeEventListener('abort', onabort);
                });
                signals = null;
              }
            };
            signals.forEach((signal) =>
              signal.addEventListener('abort', onabort)
            );
            const { signal } = controller;
            signal.unsubscribe = () =>
              (0, _utilsJsDefault.default).asap(unsubscribe);
            return signal;
          }
        };
        exports.default = composeSignals;
      },
      {
        '../cancel/CanceledError.js': '6k8Ga',
        '../core/AxiosError.js': 'fxYQp',
        '../utils.js': 'lbtnr',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '6wW0N': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'streamChunk', () => streamChunk);
        parcelHelpers.export(exports, 'readBytes', () => readBytes);
        parcelHelpers.export(exports, 'trackStream', () => trackStream);
        const streamChunk = function* (chunk, chunkSize) {
          let len = chunk.byteLength;
          if (!chunkSize || len < chunkSize) {
            yield chunk;
            return;
          }
          let pos = 0;
          let end;
          while (pos < len) {
            end = pos + chunkSize;
            yield chunk.slice(pos, end);
            pos = end;
          }
        };
        const readBytes = async function* (iterable, chunkSize) {
          for await (const chunk of readStream(iterable))
            yield* streamChunk(chunk, chunkSize);
        };
        const readStream = async function* (stream) {
          if (stream[Symbol.asyncIterator]) {
            yield* stream;
            return;
          }
          const reader = stream.getReader();
          try {
            for (;;) {
              const { done, value } = await reader.read();
              if (done) break;
              yield value;
            }
          } finally {
            await reader.cancel();
          }
        };
        const trackStream = (stream, chunkSize, onProgress, onFinish) => {
          const iterator = readBytes(stream, chunkSize);
          let bytes = 0;
          let done;
          let _onFinish = (e) => {
            if (!done) {
              done = true;
              onFinish && onFinish(e);
            }
          };
          return new ReadableStream(
            {
              async pull(controller) {
                try {
                  const { done, value } = await iterator.next();
                  if (done) {
                    _onFinish();
                    controller.close();
                    return;
                  }
                  let len = value.byteLength;
                  if (onProgress) {
                    let loadedBytes = (bytes += len);
                    onProgress(loadedBytes);
                  }
                  controller.enqueue(new Uint8Array(value));
                } catch (err) {
                  _onFinish(err);
                  throw err;
                }
              },
              cancel(reason) {
                _onFinish(reason);
                return iterator.return();
              },
            },
            {
              highWaterMark: 2,
            }
          );
        };
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    isK1r: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _dataJs = require('../env/data.js');
        var _axiosErrorJs = require('../core/AxiosError.js');
        var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
        ('use strict');
        const validators = {};
        // eslint-disable-next-line func-names
        ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
          (type, i) => {
            validators[type] = function validator(thing) {
              return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
            };
          }
        );
        const deprecatedWarnings = {};
        /**
         * Transitional option validator
         *
         * @param {function|boolean?} validator - set to false if the transitional option has been removed
         * @param {string?} version - deprecated version / removed since version
         * @param {string?} message - some message with additional info
         *
         * @returns {function}
         */ validators.transitional = function transitional(
          validator,
          version,
          message
        ) {
          function formatMessage(opt, desc) {
            return (
              '[Axios v' +
              (0, _dataJs.VERSION) +
              "] Transitional option '" +
              opt +
              "'" +
              desc +
              (message ? '. ' + message : '')
            );
          }
          // eslint-disable-next-line func-names
          return (value, opt, opts) => {
            if (validator === false)
              throw new (0, _axiosErrorJsDefault.default)(
                formatMessage(
                  opt,
                  ' has been removed' + (version ? ' in ' + version : '')
                ),
                (0, _axiosErrorJsDefault.default).ERR_DEPRECATED
              );
            if (version && !deprecatedWarnings[opt]) {
              deprecatedWarnings[opt] = true;
              // eslint-disable-next-line no-console
              console.warn(
                formatMessage(
                  opt,
                  ' has been deprecated since v' +
                    version +
                    ' and will be removed in the near future'
                )
              );
            }
            return validator ? validator(value, opt, opts) : true;
          };
        };
        validators.spelling = function spelling(correctSpelling) {
          return (value, opt) => {
            // eslint-disable-next-line no-console
            console.warn(
              `${opt} is likely a misspelling of ${correctSpelling}`
            );
            return true;
          };
        };
        /**
         * Assert object's properties type
         *
         * @param {object} options
         * @param {object} schema
         * @param {boolean?} allowUnknown
         *
         * @returns {object}
         */ function assertOptions(options, schema, allowUnknown) {
          if (typeof options !== 'object')
            throw new (0, _axiosErrorJsDefault.default)(
              'options must be an object',
              (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE
            );
          const keys = Object.keys(options);
          let i = keys.length;
          while (i-- > 0) {
            const opt = keys[i];
            const validator = schema[opt];
            if (validator) {
              const value = options[opt];
              const result =
                value === undefined || validator(value, opt, options);
              if (result !== true)
                throw new (0, _axiosErrorJsDefault.default)(
                  'option ' + opt + ' must be ' + result,
                  (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE
                );
              continue;
            }
            if (allowUnknown !== true)
              throw new (0, _axiosErrorJsDefault.default)(
                'Unknown option ' + opt,
                (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION
              );
          }
        }
        exports.default = {
          assertOptions,
          validators,
        };
      },
      {
        '../env/data.js': '4oEjm',
        '../core/AxiosError.js': 'fxYQp',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '4oEjm': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'VERSION', () => VERSION);
        const VERSION = '1.8.1';
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    fsLds: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _canceledErrorJs = require('./CanceledError.js');
        var _canceledErrorJsDefault =
          parcelHelpers.interopDefault(_canceledErrorJs);
        ('use strict');
        /**
         * A `CancelToken` is an object that can be used to request cancellation of an operation.
         *
         * @param {Function} executor The executor function.
         *
         * @returns {CancelToken}
         */ class CancelToken {
          constructor(executor) {
            if (typeof executor !== 'function')
              throw new TypeError('executor must be a function.');
            let resolvePromise;
            this.promise = new Promise(function promiseExecutor(resolve) {
              resolvePromise = resolve;
            });
            const token = this;
            // eslint-disable-next-line func-names
            this.promise.then((cancel) => {
              if (!token._listeners) return;
              let i = token._listeners.length;
              while (i-- > 0) token._listeners[i](cancel);
              token._listeners = null;
            });
            // eslint-disable-next-line func-names
            this.promise.then = (onfulfilled) => {
              let _resolve;
              // eslint-disable-next-line func-names
              const promise = new Promise((resolve) => {
                token.subscribe(resolve);
                _resolve = resolve;
              }).then(onfulfilled);
              promise.cancel = function reject() {
                token.unsubscribe(_resolve);
              };
              return promise;
            };
            executor(function cancel(message, config, request) {
              if (token.reason)
                // Cancellation has already been requested
                return;
              token.reason = new (0, _canceledErrorJsDefault.default)(
                message,
                config,
                request
              );
              resolvePromise(token.reason);
            });
          }
          /**
           * Throws a `CanceledError` if cancellation has been requested.
           */ throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          /**
           * Subscribe to the cancel signal
           */ subscribe(listener) {
            if (this.reason) {
              listener(this.reason);
              return;
            }
            if (this._listeners) this._listeners.push(listener);
            else this._listeners = [listener];
          }
          /**
           * Unsubscribe from the cancel signal
           */ unsubscribe(listener) {
            if (!this._listeners) return;
            const index = this._listeners.indexOf(listener);
            if (index !== -1) this._listeners.splice(index, 1);
          }
          toAbortSignal() {
            const controller = new AbortController();
            const abort = (err) => {
              controller.abort(err);
            };
            this.subscribe(abort);
            controller.signal.unsubscribe = () => this.unsubscribe(abort);
            return controller.signal;
          }
          /**
           * Returns an object that contains a new `CancelToken` and a function that, when called,
           * cancels the `CancelToken`.
           */ static source() {
            let cancel;
            const token = new CancelToken(function executor(c) {
              cancel = c;
            });
            return {
              token,
              cancel,
            };
          }
        }
        exports.default = CancelToken;
      },
      {
        './CanceledError.js': '6k8Ga',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    cwX15: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => spread);
        ('use strict');
        function spread(callback) {
          return function wrap(arr) {
            return callback.apply(null, arr);
          };
        }
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    bsdyt: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'default', () => isAxiosError);
        var _utilsJs = require('./../utils.js');
        var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
        ('use strict');
        function isAxiosError(payload) {
          return (
            (0, _utilsJsDefault.default).isObject(payload) &&
            payload.isAxiosError === true
          );
        }
      },
      {
        './../utils.js': 'lbtnr',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    dTE2h: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        const HttpStatusCode = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511,
        };
        Object.entries(HttpStatusCode).forEach(([key, value]) => {
          HttpStatusCode[value] = key;
        });
        exports.default = HttpStatusCode;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    cixZ4: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'hideAlert', () => hideAlert);
        parcelHelpers.export(exports, 'showAlert', () => showAlert);
        const hideAlert = () => {
          const el = document.querySelector('.alert');
          if (el) el.parentElement.removeChild(el);
        };
        const showAlert = (type, msg) => {
          hideAlert();
          const markup = `<div class="alert alert--${type}">${msg}</div>`;
          document
            .querySelector('body')
            .insertAdjacentHTML('afterbegin', markup);
          window.setTimeout(() => {
            document.querySelector('.alert').remove();
          }, 3000);
        };
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    lj9xh: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'updateInfo', () => updateInfo);
        var _axios = require('axios');
        var _axiosDefault = parcelHelpers.interopDefault(_axios);
        var _alert = require('./alert');
        const updateInfo = async (
          user_id,
          name,
          date_of_birth,
          email,
          phone_number
        ) => {
          try {
            const res = await (0, _axiosDefault.default)({
              method: 'PATCH',
              url: `api/v1/users/${user_id}`,
              data: {
                name,
                date_of_birth,
                email,
                phone_number,
              },
            });
            if (res.data.status === 'success') {
              (0, _alert.showAlert)('success', 'Update info successfully!');
              document.getElementById('user_name').value = name;
              document.getElementById('user_email').value = email;
              document.getElementById('user_phone').value = phone_number;
              document.getElementById('user_date').value =
                date_of_birth.split('T')[0]; // Take from timestamp
            }
          } catch (err) {
            if (err.response)
              // Check err.response
              (0, _alert.showAlert)('error', err.response.data.message);
            else {
              // Response untracked
              (0, _alert.showAlert)(
                'error',
                'An unexpected error occurred. Please try again.'
              );
              console.error('Error without response:', err); // Log to debug
            }
          }
        };
      },
      {
        axios: 'gIwns',
        './alert': 'cixZ4',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '52Ktj': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'createBooking', () => createBooking);
        parcelHelpers.export(
          exports,
          'updateBookingSummary',
          () => updateBookingSummary
        );
        parcelHelpers.export(exports, 'getDiscount', () => getDiscount);
        var _axios = require('axios');
        var _axiosDefault = parcelHelpers.interopDefault(_axios);
        var _alert = require('./alert');
        var _moment = require('moment');
        var _momentDefault = parcelHelpers.interopDefault(_moment);
        // Create summary
        const createBooking = async (
          room_id,
          user_id,
          check_in,
          check_out,
          number_of_guest,
          service_id
        ) => {
          try {
            const res = await (0, _axiosDefault.default)({
              method: 'POST',
              url: '/api/v1/bookings',
              data: {
                room_id,
                user_id,
                check_in,
                check_out,
                number_of_guest,
                service_id,
              },
            });
            // Take bookingId from response
            const bookingId = res.data.data.bookingId;
            if (res.data.status === 'success') {
              (0, _alert.showAlert)('success', 'Create booking successfully!');
              window.setTimeout(() => {
                location.assign(`/summary?bookingId=${bookingId}`);
              }, 1500);
            }
          } catch (err) {
            if (err.response)
              // Check err.response
              (0, _alert.showAlert)('error', err.response.data.message);
            else {
              // Response untracked
              (0, _alert.showAlert)(
                'error',
                'An unexpected error occurred. Please try again.'
              );
              console.error('Error without response:', err); // Log to debug
            }
          }
        };
        //Get Booking
        const getBooking = async (bookingId) => {
          try {
            const res = await (0, _axiosDefault.default)({
              method: 'GET',
              url: `api/v1/bookings/${bookingId}`,
            });
            if (res.data.status === 'success') return res.data.data;
          } catch (err) {
            if (err.response)
              // Check err.response
              (0, _alert.showAlert)('error', err.response.data.message);
            else {
              // Response untracked
              (0, _alert.showAlert)(
                'error',
                'An unexpected error occurred. Please try again.'
              );
              console.error('Error without response:', err); // Log to debug
            }
          }
        };
        // Update Summary FE
        const updateBookingSummary = async (bookingId) => {
          try {
            const bookingData = await getBooking(bookingId);
            if (bookingData) {
              // Update room name
              document.getElementById('room-name').textContent =
                bookingData.booking.room.name || 'N/A';
              // Update check-in check-out dates
              document.getElementById('check-in-date').textContent =
                (0, _momentDefault.default)(
                  bookingData.booking.arrival_date
                ).format('DD/MM/YYYY') || 'N/A';
              document.getElementById('check-out-date').textContent =
                (0, _momentDefault.default)(
                  bookingData.booking.departure_date
                ).format('DD/MM/YYYY') || 'N/A';
              // Update info of user
              document.getElementById('guest-name').textContent =
                bookingData.booking.user.full_name || 'N/A';
              document.getElementById('user-email').textContent =
                bookingData.booking.user.email || 'N/A';
              // Update room info
              document.getElementById('room-type').textContent =
                bookingData.booking.room.category.name || 'N/A';
              // Update dropdown
              const serviceDropdown =
                document.getElementById('service-dropdown');
              const services = bookingData.booking?.booking_services || [];
              if (services.length > 0)
                services.forEach((service) => {
                  const option = document.createElement('option');
                  option.value = service.serviceId;
                  option.textContent = service.service.name;
                  serviceDropdown.appendChild(option);
                });
              else {
                const option = document.createElement('option');
                option.value = '';
                option.textContent = 'No services available';
                serviceDropdown.appendChild(option);
              }
              // Update room price & services price
              const room_price = bookingData.booking.room.price.amount;
              document.getElementById('room-charge').textContent =
                `$${room_price}` || 'N/A';
              const serviceChargeElement =
                document.getElementById('service-charge');
              const services_price =
                bookingData.booking?.booking_services || [];
              let totalServiceCharge = 0;
              if (services_price.length > 0)
                services_price.forEach((service) => {
                  const serviceName = service.service.name || 'Unknown Service';
                  const servicePrice =
                    service.service?.prices?.length > 0
                      ? service.service.prices[0].amount
                      : 0;
                  totalServiceCharge += servicePrice;
                  // Create row to store name and price
                  const serviceRow = document.createElement('div');
                  serviceRow.classList.add('price-row'); // CSS
                  // Create span for name of services
                  const nameSpan = document.createElement('span');
                  nameSpan.textContent = `${serviceName}`;
                  // Create span for prices of services
                  const priceSpan = document.createElement('span');
                  priceSpan.textContent = `$${servicePrice.toFixed(2)}`;
                  // Add to row
                  serviceRow.appendChild(nameSpan);
                  serviceRow.appendChild(priceSpan);
                  // Add to main container
                  serviceChargeElement.appendChild(serviceRow);
                });
              else serviceChargeElement.textContent = 'No services available';
              // Update total price
              const total_price = totalServiceCharge + room_price;
              document.getElementById('total-price').textContent =
                `$${total_price.toFixed(2)}` || 'N/A';
            }
          } catch (err) {
            console.error('Error:', err);
            (0, _alert.showAlert)(
              'error',
              'Error while fetching data. Try again'
            );
          }
        };
        // Apply coupon
        const getDiscount = async (discount) => {
          try {
            const res = await (0, _axiosDefault.default)({
              method: 'GET',
              url: '/api/v1/bookings/discount',
              data: {
                discount_code: discount,
              },
            });
            if (res.data.status === 'success')
              (0, _alert.showAlert)('success', 'Coupon applied');
            else (0, _alert.showAlert)('error', 'Invalid coupon');
          } catch (err) {
            console.error('Error:', err);
            (0, _alert.showAlert)(
              'error',
              'Error while fetching data. Try again'
            );
          }
        };
      },
      {
        axios: 'gIwns',
        './alert': 'cixZ4',
        moment: '28SLz',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '28SLz': [
      function (require, module, exports, __globalThis) {
        //! moment.js
        //! version : 2.30.1
        //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
        //! license : MIT
        //! momentjs.com
        (function (global, factory) {
          module.exports = factory();
        })(this, function () {
          'use strict';
          var hookCallback;
          function hooks() {
            return hookCallback.apply(null, arguments);
          }
          // This is done to register the method called with moment()
          // without creating circular dependencies.
          function setHookCallback(callback) {
            hookCallback = callback;
          }
          function isArray(input) {
            return (
              input instanceof Array ||
              Object.prototype.toString.call(input) === '[object Array]'
            );
          }
          function isObject(input) {
            // IE8 will treat undefined and null as object if it wasn't for
            // input != null
            return (
              input != null &&
              Object.prototype.toString.call(input) === '[object Object]'
            );
          }
          function hasOwnProp(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
          }
          function isObjectEmpty(obj) {
            if (Object.getOwnPropertyNames)
              return Object.getOwnPropertyNames(obj).length === 0;
            else {
              var k;
              for (k in obj) {
                if (hasOwnProp(obj, k)) return false;
              }
              return true;
            }
          }
          function isUndefined(input) {
            return input === void 0;
          }
          function isNumber(input) {
            return (
              typeof input === 'number' ||
              Object.prototype.toString.call(input) === '[object Number]'
            );
          }
          function isDate(input) {
            return (
              input instanceof Date ||
              Object.prototype.toString.call(input) === '[object Date]'
            );
          }
          function map(arr, fn) {
            var res = [],
              i,
              arrLen = arr.length;
            for (i = 0; i < arrLen; ++i) res.push(fn(arr[i], i));
            return res;
          }
          function extend(a, b) {
            for (var i in b) if (hasOwnProp(b, i)) a[i] = b[i];
            if (hasOwnProp(b, 'toString')) a.toString = b.toString;
            if (hasOwnProp(b, 'valueOf')) a.valueOf = b.valueOf;
            return a;
          }
          function createUTC(input, format, locale, strict) {
            return createLocalOrUTC(input, format, locale, strict, true).utc();
          }
          function defaultParsingFlags() {
            // We need to deep clone this object.
            return {
              empty: false,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: false,
              invalidEra: null,
              invalidMonth: null,
              invalidFormat: false,
              userInvalidated: false,
              iso: false,
              parsedDateParts: [],
              era: null,
              meridiem: null,
              rfc2822: false,
              weekdayMismatch: false,
            };
          }
          function getParsingFlags(m) {
            if (m._pf == null) m._pf = defaultParsingFlags();
            return m._pf;
          }
          var some;
          if (Array.prototype.some) some = Array.prototype.some;
          else
            some = function (fun) {
              var t = Object(this),
                len = t.length >>> 0,
                i;
              for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) return true;
              }
              return false;
            };
          function isValid(m) {
            var flags = null,
              parsedParts = false,
              isNowValid = m._d && !isNaN(m._d.getTime());
            if (isNowValid) {
              flags = getParsingFlags(m);
              parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
              });
              isNowValid =
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidEra &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));
              if (m._strict)
                isNowValid =
                  isNowValid &&
                  flags.charsLeftOver === 0 &&
                  flags.unusedTokens.length === 0 &&
                  flags.bigHour === undefined;
            }
            if (Object.isFrozen == null || !Object.isFrozen(m))
              m._isValid = isNowValid;
            else return isNowValid;
            return m._isValid;
          }
          function createInvalid(flags) {
            var m = createUTC(NaN);
            if (flags != null) extend(getParsingFlags(m), flags);
            else getParsingFlags(m).userInvalidated = true;
            return m;
          }
          // Plugins that add properties should also add the key here (null value),
          // so we can properly clone ourselves.
          var momentProperties = (hooks.momentProperties = []),
            updateInProgress = false;
          function copyConfig(to, from) {
            var i,
              prop,
              val,
              momentPropertiesLen = momentProperties.length;
            if (!isUndefined(from._isAMomentObject))
              to._isAMomentObject = from._isAMomentObject;
            if (!isUndefined(from._i)) to._i = from._i;
            if (!isUndefined(from._f)) to._f = from._f;
            if (!isUndefined(from._l)) to._l = from._l;
            if (!isUndefined(from._strict)) to._strict = from._strict;
            if (!isUndefined(from._tzm)) to._tzm = from._tzm;
            if (!isUndefined(from._isUTC)) to._isUTC = from._isUTC;
            if (!isUndefined(from._offset)) to._offset = from._offset;
            if (!isUndefined(from._pf)) to._pf = getParsingFlags(from);
            if (!isUndefined(from._locale)) to._locale = from._locale;
            if (momentPropertiesLen > 0)
              for (i = 0; i < momentPropertiesLen; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) to[prop] = val;
              }
            return to;
          }
          // Moment prototype object
          function Moment(config) {
            copyConfig(this, config);
            this._d = new Date(config._d != null ? config._d.getTime() : NaN);
            if (!this.isValid()) this._d = new Date(NaN);
            // Prevent infinite loop in case updateOffset creates new moment
            // objects.
            if (updateInProgress === false) {
              updateInProgress = true;
              hooks.updateOffset(this);
              updateInProgress = false;
            }
          }
          function isMoment(obj) {
            return (
              obj instanceof Moment ||
              (obj != null && obj._isAMomentObject != null)
            );
          }
          function warn(msg) {
            if (
              hooks.suppressDeprecationWarnings === false &&
              typeof console !== 'undefined' &&
              console.warn
            )
              console.warn('Deprecation warning: ' + msg);
          }
          function deprecate(msg, fn) {
            var firstTime = true;
            return extend(function () {
              if (hooks.deprecationHandler != null)
                hooks.deprecationHandler(null, msg);
              if (firstTime) {
                var args = [],
                  arg,
                  i,
                  key,
                  argLen = arguments.length;
                for (i = 0; i < argLen; i++) {
                  arg = '';
                  if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (key in arguments[0])
                      if (hasOwnProp(arguments[0], key))
                        arg += key + ': ' + arguments[0][key] + ', ';
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                  } else arg = arguments[i];
                  args.push(arg);
                }
                warn(
                  msg +
                    '\nArguments: ' +
                    Array.prototype.slice.call(args).join('') +
                    '\n' +
                    new Error().stack
                );
                firstTime = false;
              }
              return fn.apply(this, arguments);
            }, fn);
          }
          var deprecations = {};
          function deprecateSimple(name, msg) {
            if (hooks.deprecationHandler != null)
              hooks.deprecationHandler(name, msg);
            if (!deprecations[name]) {
              warn(msg);
              deprecations[name] = true;
            }
          }
          hooks.suppressDeprecationWarnings = false;
          hooks.deprecationHandler = null;
          function isFunction(input) {
            return (
              (typeof Function !== 'undefined' && input instanceof Function) ||
              Object.prototype.toString.call(input) === '[object Function]'
            );
          }
          function set(config) {
            var prop, i;
            for (i in config)
              if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) this[i] = prop;
                else this['_' + i] = prop;
              }
            this._config = config;
            // Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
            // TODO: Remove "ordinalParse" fallback in next major release.
            this._dayOfMonthOrdinalParseLenient = new RegExp(
              (this._dayOfMonthOrdinalParse.source ||
                this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
            );
          }
          function mergeConfigs(parentConfig, childConfig) {
            var res = extend({}, parentConfig),
              prop;
            for (prop in childConfig)
              if (hasOwnProp(childConfig, prop)) {
                if (
                  isObject(parentConfig[prop]) &&
                  isObject(childConfig[prop])
                ) {
                  res[prop] = {};
                  extend(res[prop], parentConfig[prop]);
                  extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null)
                  res[prop] = childConfig[prop];
                else delete res[prop];
              }
            for (prop in parentConfig)
              if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
              )
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            return res;
          }
          function Locale(config) {
            if (config != null) this.set(config);
          }
          var keys;
          if (Object.keys) keys = Object.keys;
          else
            keys = function (obj) {
              var i,
                res = [];
              for (i in obj) if (hasOwnProp(obj, i)) res.push(i);
              return res;
            };
          var defaultCalendar = {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          };
          function calendar(key, mom, now) {
            var output = this._calendar[key] || this._calendar['sameElse'];
            return isFunction(output) ? output.call(mom, now) : output;
          }
          function zeroFill(number, targetLength, forceSign) {
            var absNumber = '' + Math.abs(number),
              zerosToFill = targetLength - absNumber.length,
              sign = number >= 0;
            return (
              (sign ? (forceSign ? '+' : '') : '-') +
              Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
              absNumber
            );
          }
          var formattingTokens =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            localFormattingTokens =
              /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            formatFunctions = {},
            formatTokenFunctions = {};
          // token:    'M'
          // padded:   ['MM', 2]
          // ordinal:  'Mo'
          // callback: function () { this.month() + 1 }
          function addFormatToken(token, padded, ordinal, callback) {
            var func = callback;
            if (typeof callback === 'string')
              func = function () {
                return this[callback]();
              };
            if (token) formatTokenFunctions[token] = func;
            if (padded)
              formatTokenFunctions[padded[0]] = function () {
                return zeroFill(
                  func.apply(this, arguments),
                  padded[1],
                  padded[2]
                );
              };
            if (ordinal)
              formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                  func.apply(this, arguments),
                  token
                );
              };
          }
          function removeFormattingTokens(input) {
            if (input.match(/\[[\s\S]/)) return input.replace(/^\[|\]$/g, '');
            return input.replace(/\\/g, '');
          }
          function makeFormatFunction(format) {
            var array = format.match(formattingTokens),
              i,
              length;
            for (i = 0, length = array.length; i < length; i++)
              if (formatTokenFunctions[array[i]])
                array[i] = formatTokenFunctions[array[i]];
              else array[i] = removeFormattingTokens(array[i]);
            return function (mom) {
              var output = '',
                i;
              for (i = 0; i < length; i++)
                output += isFunction(array[i])
                  ? array[i].call(mom, format)
                  : array[i];
              return output;
            };
          }
          // format date using native date object
          function formatMoment(m, format) {
            if (!m.isValid()) return m.localeData().invalidDate();
            format = expandFormat(format, m.localeData());
            formatFunctions[format] =
              formatFunctions[format] || makeFormatFunction(format);
            return formatFunctions[format](m);
          }
          function expandFormat(format, locale) {
            var i = 5;
            function replaceLongDateFormatTokens(input) {
              return locale.longDateFormat(input) || input;
            }
            localFormattingTokens.lastIndex = 0;
            while (i >= 0 && localFormattingTokens.test(format)) {
              format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
              );
              localFormattingTokens.lastIndex = 0;
              i -= 1;
            }
            return format;
          }
          var defaultLongDateFormat = {
            LTS: 'h:mm:ss A',
            LT: 'h:mm A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY h:mm A',
            LLLL: 'dddd, MMMM D, YYYY h:mm A',
          };
          function longDateFormat(key) {
            var format = this._longDateFormat[key],
              formatUpper = this._longDateFormat[key.toUpperCase()];
            if (format || !formatUpper) return format;
            this._longDateFormat[key] = formatUpper
              .match(formattingTokens)
              .map(function (tok) {
                if (
                  tok === 'MMMM' ||
                  tok === 'MM' ||
                  tok === 'DD' ||
                  tok === 'dddd'
                )
                  return tok.slice(1);
                return tok;
              })
              .join('');
            return this._longDateFormat[key];
          }
          var defaultInvalidDate = 'Invalid date';
          function invalidDate() {
            return this._invalidDate;
          }
          var defaultOrdinal = '%d',
            defaultDayOfMonthOrdinalParse = /\d{1,2}/;
          function ordinal(number) {
            return this._ordinal.replace('%d', number);
          }
          var defaultRelativeTime = {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            w: 'a week',
            ww: '%d weeks',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          };
          function relativeTime(number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return isFunction(output)
              ? output(number, withoutSuffix, string, isFuture)
              : output.replace(/%d/i, number);
          }
          function pastFuture(diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return isFunction(format)
              ? format(output)
              : format.replace(/%s/i, output);
          }
          var aliases = {
            D: 'date',
            dates: 'date',
            date: 'date',
            d: 'day',
            days: 'day',
            day: 'day',
            e: 'weekday',
            weekdays: 'weekday',
            weekday: 'weekday',
            E: 'isoWeekday',
            isoweekdays: 'isoWeekday',
            isoweekday: 'isoWeekday',
            DDD: 'dayOfYear',
            dayofyears: 'dayOfYear',
            dayofyear: 'dayOfYear',
            h: 'hour',
            hours: 'hour',
            hour: 'hour',
            ms: 'millisecond',
            milliseconds: 'millisecond',
            millisecond: 'millisecond',
            m: 'minute',
            minutes: 'minute',
            minute: 'minute',
            M: 'month',
            months: 'month',
            month: 'month',
            Q: 'quarter',
            quarters: 'quarter',
            quarter: 'quarter',
            s: 'second',
            seconds: 'second',
            second: 'second',
            gg: 'weekYear',
            weekyears: 'weekYear',
            weekyear: 'weekYear',
            GG: 'isoWeekYear',
            isoweekyears: 'isoWeekYear',
            isoweekyear: 'isoWeekYear',
            w: 'week',
            weeks: 'week',
            week: 'week',
            W: 'isoWeek',
            isoweeks: 'isoWeek',
            isoweek: 'isoWeek',
            y: 'year',
            years: 'year',
            year: 'year',
          };
          function normalizeUnits(units) {
            return typeof units === 'string'
              ? aliases[units] || aliases[units.toLowerCase()]
              : undefined;
          }
          function normalizeObjectUnits(inputObject) {
            var normalizedInput = {},
              normalizedProp,
              prop;
            for (prop in inputObject)
              if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp)
                  normalizedInput[normalizedProp] = inputObject[prop];
              }
            return normalizedInput;
          }
          var priorities = {
            date: 9,
            day: 11,
            weekday: 11,
            isoWeekday: 11,
            dayOfYear: 4,
            hour: 13,
            millisecond: 16,
            minute: 14,
            month: 8,
            quarter: 7,
            second: 15,
            weekYear: 1,
            isoWeekYear: 1,
            week: 5,
            isoWeek: 5,
            year: 1,
          };
          function getPrioritizedUnits(unitsObj) {
            var units = [],
              u;
            for (u in unitsObj)
              if (hasOwnProp(unitsObj, u))
                units.push({
                  unit: u,
                  priority: priorities[u],
                });
            units.sort(function (a, b) {
              return a.priority - b.priority;
            });
            return units;
          }
          var match1 = /\d/,
            match2 = /\d\d/,
            match3 = /\d{3}/,
            match4 = /\d{4}/,
            match6 = /[+-]?\d{6}/,
            match1to2 = /\d\d?/,
            match3to4 = /\d\d\d\d?/,
            match5to6 = /\d\d\d\d\d\d?/,
            match1to3 = /\d{1,3}/,
            match1to4 = /\d{1,4}/,
            match1to6 = /[+-]?\d{1,6}/,
            matchUnsigned = /\d+/,
            matchSigned = /[+-]?\d+/,
            matchOffset = /Z|[+-]\d\d:?\d\d/gi,
            matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi,
            matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // any word (or two) characters or numbers including two/three word month in arabic.
            // includes scottish gaelic two word and hyphenated months
            matchWord =
              /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            match1to2NoLeadingZero = /^[1-9]\d?/,
            match1to2HasZero = /^([1-9]\d|\d)/,
            regexes;
          regexes = {};
          function addRegexToken(token, regex, strictRegex) {
            regexes[token] = isFunction(regex)
              ? regex
              : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
                };
          }
          function getParseRegexForToken(token, config) {
            if (!hasOwnProp(regexes, token))
              return new RegExp(unescapeFormat(token));
            return regexes[token](config._strict, config._locale);
          }
          // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
          function unescapeFormat(s) {
            return regexEscape(
              s
                .replace('\\', '')
                .replace(
                  /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                  function (matched, p1, p2, p3, p4) {
                    return p1 || p2 || p3 || p4;
                  }
                )
            );
          }
          function regexEscape(s) {
            return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          }
          function absFloor(number) {
            if (number < 0)
              // -0 -> 0
              return Math.ceil(number) || 0;
            else return Math.floor(number);
          }
          function toInt(argumentForCoercion) {
            var coercedNumber = +argumentForCoercion,
              value = 0;
            if (coercedNumber !== 0 && isFinite(coercedNumber))
              value = absFloor(coercedNumber);
            return value;
          }
          var tokens = {};
          function addParseToken(token, callback) {
            var i,
              func = callback,
              tokenLen;
            if (typeof token === 'string') token = [token];
            if (isNumber(callback))
              func = function (input, array) {
                array[callback] = toInt(input);
              };
            tokenLen = token.length;
            for (i = 0; i < tokenLen; i++) tokens[token[i]] = func;
          }
          function addWeekParseToken(token, callback) {
            addParseToken(token, function (input, array, config, token) {
              config._w = config._w || {};
              callback(input, config._w, config, token);
            });
          }
          function addTimeToArrayFromToken(token, input, config) {
            if (input != null && hasOwnProp(tokens, token))
              tokens[token](input, config._a, config, token);
          }
          function isLeapYear(year) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
          }
          var YEAR = 0,
            MONTH = 1,
            DATE = 2,
            HOUR = 3,
            MINUTE = 4,
            SECOND = 5,
            MILLISECOND = 6,
            WEEK = 7,
            WEEKDAY = 8;
          // FORMATTING
          addFormatToken('Y', 0, 0, function () {
            var y = this.year();
            return y <= 9999 ? zeroFill(y, 4) : '+' + y;
          });
          addFormatToken(0, ['YY', 2], 0, function () {
            return this.year() % 100;
          });
          addFormatToken(0, ['YYYY', 4], 0, 'year');
          addFormatToken(0, ['YYYYY', 5], 0, 'year');
          addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
          // PARSING
          addRegexToken('Y', matchSigned);
          addRegexToken('YY', match1to2, match2);
          addRegexToken('YYYY', match1to4, match4);
          addRegexToken('YYYYY', match1to6, match6);
          addRegexToken('YYYYYY', match1to6, match6);
          addParseToken(['YYYYY', 'YYYYYY'], YEAR);
          addParseToken('YYYY', function (input, array) {
            array[YEAR] =
              input.length === 2
                ? hooks.parseTwoDigitYear(input)
                : toInt(input);
          });
          addParseToken('YY', function (input, array) {
            array[YEAR] = hooks.parseTwoDigitYear(input);
          });
          addParseToken('Y', function (input, array) {
            array[YEAR] = parseInt(input, 10);
          });
          // HELPERS
          function daysInYear(year) {
            return isLeapYear(year) ? 366 : 365;
          }
          // HOOKS
          hooks.parseTwoDigitYear = function (input) {
            return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
          };
          // MOMENTS
          var getSetYear = makeGetSet('FullYear', true);
          function getIsLeapYear() {
            return isLeapYear(this.year());
          }
          function makeGetSet(unit, keepTime) {
            return function (value) {
              if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
              } else return get(this, unit);
            };
          }
          function get(mom, unit) {
            if (!mom.isValid()) return NaN;
            var d = mom._d,
              isUTC = mom._isUTC;
            switch (unit) {
              case 'Milliseconds':
                return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
              case 'Seconds':
                return isUTC ? d.getUTCSeconds() : d.getSeconds();
              case 'Minutes':
                return isUTC ? d.getUTCMinutes() : d.getMinutes();
              case 'Hours':
                return isUTC ? d.getUTCHours() : d.getHours();
              case 'Date':
                return isUTC ? d.getUTCDate() : d.getDate();
              case 'Day':
                return isUTC ? d.getUTCDay() : d.getDay();
              case 'Month':
                return isUTC ? d.getUTCMonth() : d.getMonth();
              case 'FullYear':
                return isUTC ? d.getUTCFullYear() : d.getFullYear();
              default:
                return NaN; // Just in case
            }
          }
          function set$1(mom, unit, value) {
            var d, isUTC, year, month, date;
            if (!mom.isValid() || isNaN(value)) return;
            d = mom._d;
            isUTC = mom._isUTC;
            switch (unit) {
              case 'Milliseconds':
                return void (isUTC
                  ? d.setUTCMilliseconds(value)
                  : d.setMilliseconds(value));
              case 'Seconds':
                return void (isUTC
                  ? d.setUTCSeconds(value)
                  : d.setSeconds(value));
              case 'Minutes':
                return void (isUTC
                  ? d.setUTCMinutes(value)
                  : d.setMinutes(value));
              case 'Hours':
                return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
              case 'Date':
                return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
              // case 'Day': // Not real
              //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
              // case 'Month': // Not used because we need to pass two variables
              //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
              case 'FullYear':
                break; // See below ...
              default:
                return; // Just in case
            }
            year = value;
            month = mom.month();
            date = mom.date();
            date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
            isUTC
              ? d.setUTCFullYear(year, month, date)
              : d.setFullYear(year, month, date);
          }
          // MOMENTS
          function stringGet(units) {
            units = normalizeUnits(units);
            if (isFunction(this[units])) return this[units]();
            return this;
          }
          function stringSet(units, value) {
            if (typeof units === 'object') {
              units = normalizeObjectUnits(units);
              var prioritized = getPrioritizedUnits(units),
                i,
                prioritizedLen = prioritized.length;
              for (i = 0; i < prioritizedLen; i++)
                this[prioritized[i].unit](units[prioritized[i].unit]);
            } else {
              units = normalizeUnits(units);
              if (isFunction(this[units])) return this[units](value);
            }
            return this;
          }
          function mod(n, x) {
            return ((n % x) + x) % x;
          }
          var indexOf;
          if (Array.prototype.indexOf) indexOf = Array.prototype.indexOf;
          else
            indexOf = function (o) {
              // I know
              var i;
              for (i = 0; i < this.length; ++i) {
                if (this[i] === o) return i;
              }
              return -1;
            };
          function daysInMonth(year, month) {
            if (isNaN(year) || isNaN(month)) return NaN;
            var modMonth = mod(month, 12);
            year += (month - modMonth) / 12;
            return modMonth === 1
              ? isLeapYear(year)
                ? 29
                : 28
              : 31 - ((modMonth % 7) % 2);
          }
          // FORMATTING
          addFormatToken('M', ['MM', 2], 'Mo', function () {
            return this.month() + 1;
          });
          addFormatToken('MMM', 0, 0, function (format) {
            return this.localeData().monthsShort(this, format);
          });
          addFormatToken('MMMM', 0, 0, function (format) {
            return this.localeData().months(this, format);
          });
          // PARSING
          addRegexToken('M', match1to2, match1to2NoLeadingZero);
          addRegexToken('MM', match1to2, match2);
          addRegexToken('MMM', function (isStrict, locale) {
            return locale.monthsShortRegex(isStrict);
          });
          addRegexToken('MMMM', function (isStrict, locale) {
            return locale.monthsRegex(isStrict);
          });
          addParseToken(['M', 'MM'], function (input, array) {
            array[MONTH] = toInt(input) - 1;
          });
          addParseToken(
            ['MMM', 'MMMM'],
            function (input, array, config, token) {
              var month = config._locale.monthsParse(
                input,
                token,
                config._strict
              );
              // if we didn't find a month name, mark the date as invalid.
              if (month != null) array[MONTH] = month;
              else getParsingFlags(config).invalidMonth = input;
            }
          );
          // LOCALES
          var defaultLocaleMonths =
              'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
              ),
            defaultLocaleMonthsShort =
              'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
            MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            defaultMonthsShortRegex = matchWord,
            defaultMonthsRegex = matchWord;
          function localeMonths(m, format) {
            if (!m)
              return isArray(this._months)
                ? this._months
                : this._months['standalone'];
            return isArray(this._months)
              ? this._months[m.month()]
              : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                    ? 'format'
                    : 'standalone'
                ][m.month()];
          }
          function localeMonthsShort(m, format) {
            if (!m)
              return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
            return isArray(this._monthsShort)
              ? this._monthsShort[m.month()]
              : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
                ][m.month()];
          }
          function handleStrictParse(monthName, format, strict) {
            var i,
              ii,
              mom,
              llc = monthName.toLocaleLowerCase();
            if (!this._monthsParse) {
              // this is not used
              this._monthsParse = [];
              this._longMonthsParse = [];
              this._shortMonthsParse = [];
              for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                  mom,
                  ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(
                  mom,
                  ''
                ).toLocaleLowerCase();
              }
            }
            if (strict) {
              if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
              } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
              }
            } else if (format === 'MMM') {
              ii = indexOf.call(this._shortMonthsParse, llc);
              if (ii !== -1) return ii;
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              if (ii !== -1) return ii;
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
          function localeMonthsParse(monthName, format, strict) {
            var i, mom, regex;
            if (this._monthsParseExact)
              return handleStrictParse.call(this, monthName, format, strict);
            if (!this._monthsParse) {
              this._monthsParse = [];
              this._longMonthsParse = [];
              this._shortMonthsParse = [];
            }
            // TODO: add sorting
            // Sorting makes sure if one month (or abbr) is a prefix of another
            // see sorting in computeMonthsParse
            for (i = 0; i < 12; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, i]);
              if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                  '^' + this.months(mom, '').replace('.', '') + '$',
                  'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                  '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                  'i'
                );
              }
              if (!strict && !this._monthsParse[i]) {
                regex =
                  '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
              }
              // test the regex
              if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
              )
                return i;
              else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
              )
                return i;
              else if (!strict && this._monthsParse[i].test(monthName))
                return i;
            }
          }
          // MOMENTS
          function setMonth(mom, value) {
            if (!mom.isValid())
              // No op
              return mom;
            if (typeof value === 'string') {
              if (/^\d+$/.test(value)) value = toInt(value);
              else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) return mom;
              }
            }
            var month = value,
              date = mom.date();
            date =
              date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
            mom._isUTC
              ? mom._d.setUTCMonth(month, date)
              : mom._d.setMonth(month, date);
            return mom;
          }
          function getSetMonth(value) {
            if (value != null) {
              setMonth(this, value);
              hooks.updateOffset(this, true);
              return this;
            } else return get(this, 'Month');
          }
          function getDaysInMonth() {
            return daysInMonth(this.year(), this.month());
          }
          function monthsShortRegex(isStrict) {
            if (this._monthsParseExact) {
              if (!hasOwnProp(this, '_monthsRegex'))
                computeMonthsParse.call(this);
              if (isStrict) return this._monthsShortStrictRegex;
              else return this._monthsShortRegex;
            } else {
              if (!hasOwnProp(this, '_monthsShortRegex'))
                this._monthsShortRegex = defaultMonthsShortRegex;
              return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
            }
          }
          function monthsRegex(isStrict) {
            if (this._monthsParseExact) {
              if (!hasOwnProp(this, '_monthsRegex'))
                computeMonthsParse.call(this);
              if (isStrict) return this._monthsStrictRegex;
              else return this._monthsRegex;
            } else {
              if (!hasOwnProp(this, '_monthsRegex'))
                this._monthsRegex = defaultMonthsRegex;
              return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
            }
          }
          function computeMonthsParse() {
            function cmpLenRev(a, b) {
              return b.length - a.length;
            }
            var shortPieces = [],
              longPieces = [],
              mixedPieces = [],
              i,
              mom,
              shortP,
              longP;
            for (i = 0; i < 12; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, i]);
              shortP = regexEscape(this.monthsShort(mom, ''));
              longP = regexEscape(this.months(mom, ''));
              shortPieces.push(shortP);
              longPieces.push(longP);
              mixedPieces.push(longP);
              mixedPieces.push(shortP);
            }
            // Sorting makes sure if one month (or abbr) is a prefix of another it
            // will match the longer piece.
            shortPieces.sort(cmpLenRev);
            longPieces.sort(cmpLenRev);
            mixedPieces.sort(cmpLenRev);
            this._monthsRegex = new RegExp(
              '^(' + mixedPieces.join('|') + ')',
              'i'
            );
            this._monthsShortRegex = this._monthsRegex;
            this._monthsStrictRegex = new RegExp(
              '^(' + longPieces.join('|') + ')',
              'i'
            );
            this._monthsShortStrictRegex = new RegExp(
              '^(' + shortPieces.join('|') + ')',
              'i'
            );
          }
          function createDate(y, m, d, h, M, s, ms) {
            // can't just apply() to create a date:
            // https://stackoverflow.com/q/181348
            var date;
            // the date constructor remaps years 0-99 to 1900-1999
            if (y < 100 && y >= 0) {
              // preserve leap years using a full 400 year cycle, then reset
              date = new Date(y + 400, m, d, h, M, s, ms);
              if (isFinite(date.getFullYear())) date.setFullYear(y);
            } else date = new Date(y, m, d, h, M, s, ms);
            return date;
          }
          function createUTCDate(y) {
            var date, args;
            // the Date.UTC function remaps years 0-99 to 1900-1999
            if (y < 100 && y >= 0) {
              args = Array.prototype.slice.call(arguments);
              // preserve leap years using a full 400 year cycle, then reset
              args[0] = y + 400;
              date = new Date(Date.UTC.apply(null, args));
              if (isFinite(date.getUTCFullYear())) date.setUTCFullYear(y);
            } else date = new Date(Date.UTC.apply(null, arguments));
            return date;
          }
          // start-of-first-week - start-of-year
          function firstWeekOffset(year, dow, doy) {
            var fwd = 7 + dow - doy, // first-week day local weekday -- which local weekday is fwd
              fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
            return -fwdlw + fwd - 1;
          }
          // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
          function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
            var localWeekday = (7 + weekday - dow) % 7,
              weekOffset = firstWeekOffset(year, dow, doy),
              dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
              resYear,
              resDayOfYear;
            if (dayOfYear <= 0) {
              resYear = year - 1;
              resDayOfYear = daysInYear(resYear) + dayOfYear;
            } else if (dayOfYear > daysInYear(year)) {
              resYear = year + 1;
              resDayOfYear = dayOfYear - daysInYear(year);
            } else {
              resYear = year;
              resDayOfYear = dayOfYear;
            }
            return {
              year: resYear,
              dayOfYear: resDayOfYear,
            };
          }
          function weekOfYear(mom, dow, doy) {
            var weekOffset = firstWeekOffset(mom.year(), dow, doy),
              week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
              resWeek,
              resYear;
            if (week < 1) {
              resYear = mom.year() - 1;
              resWeek = week + weeksInYear(resYear, dow, doy);
            } else if (week > weeksInYear(mom.year(), dow, doy)) {
              resWeek = week - weeksInYear(mom.year(), dow, doy);
              resYear = mom.year() + 1;
            } else {
              resYear = mom.year();
              resWeek = week;
            }
            return {
              week: resWeek,
              year: resYear,
            };
          }
          function weeksInYear(year, dow, doy) {
            var weekOffset = firstWeekOffset(year, dow, doy),
              weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
            return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
          }
          // FORMATTING
          addFormatToken('w', ['ww', 2], 'wo', 'week');
          addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
          // PARSING
          addRegexToken('w', match1to2, match1to2NoLeadingZero);
          addRegexToken('ww', match1to2, match2);
          addRegexToken('W', match1to2, match1to2NoLeadingZero);
          addRegexToken('WW', match1to2, match2);
          addWeekParseToken(
            ['w', 'ww', 'W', 'WW'],
            function (input, week, config, token) {
              week[token.substr(0, 1)] = toInt(input);
            }
          );
          // HELPERS
          // LOCALES
          function localeWeek(mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
          }
          var defaultLocaleWeek = {
            dow: 0,
            doy: 6,
          };
          function localeFirstDayOfWeek() {
            return this._week.dow;
          }
          function localeFirstDayOfYear() {
            return this._week.doy;
          }
          // MOMENTS
          function getSetWeek(input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
          }
          function getSetISOWeek(input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
          }
          // FORMATTING
          addFormatToken('d', 0, 'do', 'day');
          addFormatToken('dd', 0, 0, function (format) {
            return this.localeData().weekdaysMin(this, format);
          });
          addFormatToken('ddd', 0, 0, function (format) {
            return this.localeData().weekdaysShort(this, format);
          });
          addFormatToken('dddd', 0, 0, function (format) {
            return this.localeData().weekdays(this, format);
          });
          addFormatToken('e', 0, 0, 'weekday');
          addFormatToken('E', 0, 0, 'isoWeekday');
          // PARSING
          addRegexToken('d', match1to2);
          addRegexToken('e', match1to2);
          addRegexToken('E', match1to2);
          addRegexToken('dd', function (isStrict, locale) {
            return locale.weekdaysMinRegex(isStrict);
          });
          addRegexToken('ddd', function (isStrict, locale) {
            return locale.weekdaysShortRegex(isStrict);
          });
          addRegexToken('dddd', function (isStrict, locale) {
            return locale.weekdaysRegex(isStrict);
          });
          addWeekParseToken(
            ['dd', 'ddd', 'dddd'],
            function (input, week, config, token) {
              var weekday = config._locale.weekdaysParse(
                input,
                token,
                config._strict
              );
              // if we didn't get a weekday name, mark the date as invalid
              if (weekday != null) week.d = weekday;
              else getParsingFlags(config).invalidWeekday = input;
            }
          );
          addWeekParseToken(
            ['d', 'e', 'E'],
            function (input, week, config, token) {
              week[token] = toInt(input);
            }
          );
          // HELPERS
          function parseWeekday(input, locale) {
            if (typeof input !== 'string') return input;
            if (!isNaN(input)) return parseInt(input, 10);
            input = locale.weekdaysParse(input);
            if (typeof input === 'number') return input;
            return null;
          }
          function parseIsoWeekday(input, locale) {
            if (typeof input === 'string')
              return locale.weekdaysParse(input) % 7 || 7;
            return isNaN(input) ? null : input;
          }
          // LOCALES
          function shiftWeekdays(ws, n) {
            return ws.slice(n, 7).concat(ws.slice(0, n));
          }
          var defaultLocaleWeekdays =
              'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
                '_'
              ),
            defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split(
              '_'
            ),
            defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
            defaultWeekdaysRegex = matchWord,
            defaultWeekdaysShortRegex = matchWord,
            defaultWeekdaysMinRegex = matchWord;
          function localeWeekdays(m, format) {
            var weekdays = isArray(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                    ? 'format'
                    : 'standalone'
                ];
            return m === true
              ? shiftWeekdays(weekdays, this._week.dow)
              : m
                ? weekdays[m.day()]
                : weekdays;
          }
          function localeWeekdaysShort(m) {
            return m === true
              ? shiftWeekdays(this._weekdaysShort, this._week.dow)
              : m
                ? this._weekdaysShort[m.day()]
                : this._weekdaysShort;
          }
          function localeWeekdaysMin(m) {
            return m === true
              ? shiftWeekdays(this._weekdaysMin, this._week.dow)
              : m
                ? this._weekdaysMin[m.day()]
                : this._weekdaysMin;
          }
          function handleStrictParse$1(weekdayName, format, strict) {
            var i,
              ii,
              mom,
              llc = weekdayName.toLocaleLowerCase();
            if (!this._weekdaysParse) {
              this._weekdaysParse = [];
              this._shortWeekdaysParse = [];
              this._minWeekdaysParse = [];
              for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                  mom,
                  ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                  mom,
                  ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(
                  mom,
                  ''
                ).toLocaleLowerCase();
              }
            }
            if (strict) {
              if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
              } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
              } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
              }
            } else {
              if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
              } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
              } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
              }
            }
          }
          function localeWeekdaysParse(weekdayName, format, strict) {
            var i, mom, regex;
            if (this._weekdaysParseExact)
              return handleStrictParse$1.call(
                this,
                weekdayName,
                format,
                strict
              );
            if (!this._weekdaysParse) {
              this._weekdaysParse = [];
              this._minWeekdaysParse = [];
              this._shortWeekdaysParse = [];
              this._fullWeekdaysParse = [];
            }
            for (i = 0; i < 7; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, 1]).day(i);
              if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                  '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                  'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                  '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                  'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                  '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                  'i'
                );
              }
              if (!this._weekdaysParse[i]) {
                regex =
                  '^' +
                  this.weekdays(mom, '') +
                  '|^' +
                  this.weekdaysShort(mom, '') +
                  '|^' +
                  this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(
                  regex.replace('.', ''),
                  'i'
                );
              }
              // test the regex
              if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
              )
                return i;
              else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
              )
                return i;
              else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
              )
                return i;
              else if (!strict && this._weekdaysParse[i].test(weekdayName))
                return i;
            }
          }
          // MOMENTS
          function getSetDayOfWeek(input) {
            if (!this.isValid()) return input != null ? this : NaN;
            var day = get(this, 'Day');
            if (input != null) {
              input = parseWeekday(input, this.localeData());
              return this.add(input - day, 'd');
            } else return day;
          }
          function getSetLocaleDayOfWeek(input) {
            if (!this.isValid()) return input != null ? this : NaN;
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
          }
          function getSetISODayOfWeek(input) {
            if (!this.isValid()) return input != null ? this : NaN;
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            if (input != null) {
              var weekday = parseIsoWeekday(input, this.localeData());
              return this.day(this.day() % 7 ? weekday : weekday - 7);
            } else return this.day() || 7;
          }
          function weekdaysRegex(isStrict) {
            if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex'))
                computeWeekdaysParse.call(this);
              if (isStrict) return this._weekdaysStrictRegex;
              else return this._weekdaysRegex;
            } else {
              if (!hasOwnProp(this, '_weekdaysRegex'))
                this._weekdaysRegex = defaultWeekdaysRegex;
              return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
            }
          }
          function weekdaysShortRegex(isStrict) {
            if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex'))
                computeWeekdaysParse.call(this);
              if (isStrict) return this._weekdaysShortStrictRegex;
              else return this._weekdaysShortRegex;
            } else {
              if (!hasOwnProp(this, '_weekdaysShortRegex'))
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
              return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
            }
          }
          function weekdaysMinRegex(isStrict) {
            if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex'))
                computeWeekdaysParse.call(this);
              if (isStrict) return this._weekdaysMinStrictRegex;
              else return this._weekdaysMinRegex;
            } else {
              if (!hasOwnProp(this, '_weekdaysMinRegex'))
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
              return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
            }
          }
          function computeWeekdaysParse() {
            function cmpLenRev(a, b) {
              return b.length - a.length;
            }
            var minPieces = [],
              shortPieces = [],
              longPieces = [],
              mixedPieces = [],
              i,
              mom,
              minp,
              shortp,
              longp;
            for (i = 0; i < 7; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, 1]).day(i);
              minp = regexEscape(this.weekdaysMin(mom, ''));
              shortp = regexEscape(this.weekdaysShort(mom, ''));
              longp = regexEscape(this.weekdays(mom, ''));
              minPieces.push(minp);
              shortPieces.push(shortp);
              longPieces.push(longp);
              mixedPieces.push(minp);
              mixedPieces.push(shortp);
              mixedPieces.push(longp);
            }
            // Sorting makes sure if one weekday (or abbr) is a prefix of another it
            // will match the longer piece.
            minPieces.sort(cmpLenRev);
            shortPieces.sort(cmpLenRev);
            longPieces.sort(cmpLenRev);
            mixedPieces.sort(cmpLenRev);
            this._weekdaysRegex = new RegExp(
              '^(' + mixedPieces.join('|') + ')',
              'i'
            );
            this._weekdaysShortRegex = this._weekdaysRegex;
            this._weekdaysMinRegex = this._weekdaysRegex;
            this._weekdaysStrictRegex = new RegExp(
              '^(' + longPieces.join('|') + ')',
              'i'
            );
            this._weekdaysShortStrictRegex = new RegExp(
              '^(' + shortPieces.join('|') + ')',
              'i'
            );
            this._weekdaysMinStrictRegex = new RegExp(
              '^(' + minPieces.join('|') + ')',
              'i'
            );
          }
          // FORMATTING
          function hFormat() {
            return this.hours() % 12 || 12;
          }
          function kFormat() {
            return this.hours() || 24;
          }
          addFormatToken('H', ['HH', 2], 0, 'hour');
          addFormatToken('h', ['hh', 2], 0, hFormat);
          addFormatToken('k', ['kk', 2], 0, kFormat);
          addFormatToken('hmm', 0, 0, function () {
            return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
          });
          addFormatToken('hmmss', 0, 0, function () {
            return (
              '' +
              hFormat.apply(this) +
              zeroFill(this.minutes(), 2) +
              zeroFill(this.seconds(), 2)
            );
          });
          addFormatToken('Hmm', 0, 0, function () {
            return '' + this.hours() + zeroFill(this.minutes(), 2);
          });
          addFormatToken('Hmmss', 0, 0, function () {
            return (
              '' +
              this.hours() +
              zeroFill(this.minutes(), 2) +
              zeroFill(this.seconds(), 2)
            );
          });
          function meridiem(token, lowercase) {
            addFormatToken(token, 0, 0, function () {
              return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
              );
            });
          }
          meridiem('a', true);
          meridiem('A', false);
          // PARSING
          function matchMeridiem(isStrict, locale) {
            return locale._meridiemParse;
          }
          addRegexToken('a', matchMeridiem);
          addRegexToken('A', matchMeridiem);
          addRegexToken('H', match1to2, match1to2HasZero);
          addRegexToken('h', match1to2, match1to2NoLeadingZero);
          addRegexToken('k', match1to2, match1to2NoLeadingZero);
          addRegexToken('HH', match1to2, match2);
          addRegexToken('hh', match1to2, match2);
          addRegexToken('kk', match1to2, match2);
          addRegexToken('hmm', match3to4);
          addRegexToken('hmmss', match5to6);
          addRegexToken('Hmm', match3to4);
          addRegexToken('Hmmss', match5to6);
          addParseToken(['H', 'HH'], HOUR);
          addParseToken(['k', 'kk'], function (input, array, config) {
            var kInput = toInt(input);
            array[HOUR] = kInput === 24 ? 0 : kInput;
          });
          addParseToken(['a', 'A'], function (input, array, config) {
            config._isPm = config._locale.isPM(input);
            config._meridiem = input;
          });
          addParseToken(['h', 'hh'], function (input, array, config) {
            array[HOUR] = toInt(input);
            getParsingFlags(config).bigHour = true;
          });
          addParseToken('hmm', function (input, array, config) {
            var pos = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos));
            array[MINUTE] = toInt(input.substr(pos));
            getParsingFlags(config).bigHour = true;
          });
          addParseToken('hmmss', function (input, array, config) {
            var pos1 = input.length - 4,
              pos2 = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos1));
            array[MINUTE] = toInt(input.substr(pos1, 2));
            array[SECOND] = toInt(input.substr(pos2));
            getParsingFlags(config).bigHour = true;
          });
          addParseToken('Hmm', function (input, array, config) {
            var pos = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos));
            array[MINUTE] = toInt(input.substr(pos));
          });
          addParseToken('Hmmss', function (input, array, config) {
            var pos1 = input.length - 4,
              pos2 = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos1));
            array[MINUTE] = toInt(input.substr(pos1, 2));
            array[SECOND] = toInt(input.substr(pos2));
          });
          // LOCALES
          function localeIsPM(input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return (input + '').toLowerCase().charAt(0) === 'p';
          }
          var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, // Setting the hour should keep the time, because the user explicitly
            // specified which hour they want. So trying to maintain the same hour (in
            // a new timezone) makes sense. Adding/subtracting hours does not follow
            // this rule.
            getSetHour = makeGetSet('Hours', true);
          function localeMeridiem(hours, minutes, isLower) {
            if (hours > 11) return isLower ? 'pm' : 'PM';
            else return isLower ? 'am' : 'AM';
          }
          var baseConfig = {
            calendar: defaultCalendar,
            longDateFormat: defaultLongDateFormat,
            invalidDate: defaultInvalidDate,
            ordinal: defaultOrdinal,
            dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
            relativeTime: defaultRelativeTime,
            months: defaultLocaleMonths,
            monthsShort: defaultLocaleMonthsShort,
            week: defaultLocaleWeek,
            weekdays: defaultLocaleWeekdays,
            weekdaysMin: defaultLocaleWeekdaysMin,
            weekdaysShort: defaultLocaleWeekdaysShort,
            meridiemParse: defaultLocaleMeridiemParse,
          };
          // internal storage for locale config files
          var locales = {},
            localeFamilies = {},
            globalLocale;
          function commonPrefix(arr1, arr2) {
            var i,
              minl = Math.min(arr1.length, arr2.length);
            for (i = 0; i < minl; i += 1) {
              if (arr1[i] !== arr2[i]) return i;
            }
            return minl;
          }
          function normalizeLocale(key) {
            return key ? key.toLowerCase().replace('_', '-') : key;
          }
          // pick the locale from the array
          // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
          // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
          function chooseLocale(names) {
            var i = 0,
              j,
              next,
              locale,
              split;
            while (i < names.length) {
              split = normalizeLocale(names[i]).split('-');
              j = split.length;
              next = normalizeLocale(names[i + 1]);
              next = next ? next.split('-') : null;
              while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) return locale;
                if (
                  next &&
                  next.length >= j &&
                  commonPrefix(split, next) >= j - 1
                )
                  break;
                j--;
              }
              i++;
            }
            return globalLocale;
          }
          function isLocaleNameSane(name) {
            // Prevent names that look like filesystem paths, i.e contain '/' or '\'
            // Ensure name is available and function returns boolean
            return !!(name && name.match('^[^/\\\\]*$'));
          }
          function loadLocale(name) {
            var oldLocale = null,
              aliasedRequire;
            // TODO: Find a better way to register and load all the locales in Node
            if (
              locales[name] === undefined &&
              true &&
              module &&
              module.exports &&
              isLocaleNameSane(name)
            )
              try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = undefined;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
              } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
              }
            return locales[name];
          }
          // This function will load locale and then set the global locale.  If
          // no arguments are passed in, it will simply return the current global
          // locale key.
          function getSetGlobalLocale(key, values) {
            var data;
            if (key) {
              if (isUndefined(values)) data = getLocale(key);
              else data = defineLocale(key, values);
              if (data)
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
              else if (typeof console !== 'undefined' && console.warn)
                //warn user if arguments are passed but the locale could not be set
                console.warn(
                  'Locale ' + key + ' not found. Did you forget to load it?'
                );
            }
            return globalLocale._abbr;
          }
          function defineLocale(name, config) {
            if (config !== null) {
              var locale,
                parentConfig = baseConfig;
              config.abbr = name;
              if (locales[name] != null) {
                deprecateSimple(
                  'defineLocaleOverride',
                  'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
              } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null)
                  parentConfig = locales[config.parentLocale]._config;
                else {
                  locale = loadLocale(config.parentLocale);
                  if (locale != null) parentConfig = locale._config;
                  else {
                    if (!localeFamilies[config.parentLocale])
                      localeFamilies[config.parentLocale] = [];
                    localeFamilies[config.parentLocale].push({
                      name: name,
                      config: config,
                    });
                    return null;
                  }
                }
              }
              locales[name] = new Locale(mergeConfigs(parentConfig, config));
              if (localeFamilies[name])
                localeFamilies[name].forEach(function (x) {
                  defineLocale(x.name, x.config);
                });
              // backwards compat for now: also set the locale
              // make sure we set the locale AFTER all child locales have been
              // created, so we won't end up with the child locale set.
              getSetGlobalLocale(name);
              return locales[name];
            } else {
              // useful for testing
              delete locales[name];
              return null;
            }
          }
          function updateLocale(name, config) {
            if (config != null) {
              var locale,
                tmpLocale,
                parentConfig = baseConfig;
              if (locales[name] != null && locales[name].parentLocale != null)
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
              else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) parentConfig = tmpLocale._config;
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null)
                  // updateLocale is called for creating a new locale
                  // Set abbr so it will have a name (getters return
                  // undefined otherwise).
                  config.abbr = name;
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
              }
              // backwards compat for now: also set the locale
              getSetGlobalLocale(name);
            } else if (locales[name] != null) {
              // pass null for config to unupdate, useful for tests
              if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) getSetGlobalLocale(name);
              } else if (locales[name] != null) delete locales[name];
            }
            return locales[name];
          }
          // returns locale data
          function getLocale(key) {
            var locale;
            if (key && key._locale && key._locale._abbr)
              key = key._locale._abbr;
            if (!key) return globalLocale;
            if (!isArray(key)) {
              //short-circuit everything else
              locale = loadLocale(key);
              if (locale) return locale;
              key = [key];
            }
            return chooseLocale(key);
          }
          function listLocales() {
            return keys(locales);
          }
          function checkOverflow(m) {
            var overflow,
              a = m._a;
            if (a && getParsingFlags(m).overflow === -2) {
              overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                  ? MONTH
                  : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                        a[HOUR] > 24 ||
                        (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 ||
                            a[SECOND] !== 0 ||
                            a[MILLISECOND] !== 0))
                      ? HOUR
                      : a[MINUTE] < 0 || a[MINUTE] > 59
                        ? MINUTE
                        : a[SECOND] < 0 || a[SECOND] > 59
                          ? SECOND
                          : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                            ? MILLISECOND
                            : -1;
              if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
              )
                overflow = DATE;
              if (getParsingFlags(m)._overflowWeeks && overflow === -1)
                overflow = WEEK;
              if (getParsingFlags(m)._overflowWeekday && overflow === -1)
                overflow = WEEKDAY;
              getParsingFlags(m).overflow = overflow;
            }
            return m;
          }
          // iso 8601 regex
          // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
          var extendedIsoRegex =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            basicIsoRegex =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
            isoDates = [
              ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
              ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
              ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
              ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
              ['YYYY-DDD', /\d{4}-\d{3}/],
              ['YYYY-MM', /\d{4}-\d\d/, false],
              ['YYYYYYMMDD', /[+-]\d{10}/],
              ['YYYYMMDD', /\d{8}/],
              ['GGGG[W]WWE', /\d{4}W\d{3}/],
              ['GGGG[W]WW', /\d{4}W\d{2}/, false],
              ['YYYYDDD', /\d{7}/],
              ['YYYYMM', /\d{6}/, false],
              ['YYYY', /\d{4}/, false],
            ], // iso time formats and regexes
            isoTimes = [
              ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
              ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
              ['HH:mm:ss', /\d\d:\d\d:\d\d/],
              ['HH:mm', /\d\d:\d\d/],
              ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
              ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
              ['HHmmss', /\d\d\d\d\d\d/],
              ['HHmm', /\d\d\d\d/],
              ['HH', /\d\d/],
            ],
            aspNetJsonRegex = /^\/?Date\((-?\d+)/i, // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
            rfc2822 =
              /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            obsOffsets = {
              UT: 0,
              GMT: 0,
              EDT: -240,
              EST: -300,
              CDT: -300,
              CST: -360,
              MDT: -360,
              MST: -420,
              PDT: -420,
              PST: -480,
            };
          // date from iso format
          function configFromISO(config) {
            var i,
              l,
              string = config._i,
              match =
                extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
              allowTime,
              dateFormat,
              timeFormat,
              tzFormat,
              isoDatesLen = isoDates.length,
              isoTimesLen = isoTimes.length;
            if (match) {
              getParsingFlags(config).iso = true;
              for (i = 0, l = isoDatesLen; i < l; i++)
                if (isoDates[i][1].exec(match[1])) {
                  dateFormat = isoDates[i][0];
                  allowTime = isoDates[i][2] !== false;
                  break;
                }
              if (dateFormat == null) {
                config._isValid = false;
                return;
              }
              if (match[3]) {
                for (i = 0, l = isoTimesLen; i < l; i++)
                  if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                  }
                if (timeFormat == null) {
                  config._isValid = false;
                  return;
                }
              }
              if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
              }
              if (match[4]) {
                if (tzRegex.exec(match[4])) tzFormat = 'Z';
                else {
                  config._isValid = false;
                  return;
                }
              }
              config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
              configFromStringAndFormat(config);
            } else config._isValid = false;
          }
          function extractFromRFC2822Strings(
            yearStr,
            monthStr,
            dayStr,
            hourStr,
            minuteStr,
            secondStr
          ) {
            var result = [
              untruncateYear(yearStr),
              defaultLocaleMonthsShort.indexOf(monthStr),
              parseInt(dayStr, 10),
              parseInt(hourStr, 10),
              parseInt(minuteStr, 10),
            ];
            if (secondStr) result.push(parseInt(secondStr, 10));
            return result;
          }
          function untruncateYear(yearStr) {
            var year = parseInt(yearStr, 10);
            if (year <= 49) return 2000 + year;
            else if (year <= 999) return 1900 + year;
            return year;
          }
          function preprocessRFC2822(s) {
            // Remove comments and folding whitespace and replace multiple-spaces with a single space
            return s
              .replace(/\([^()]*\)|[\n\t]/g, ' ')
              .replace(/(\s\s+)/g, ' ')
              .replace(/^\s\s*/, '')
              .replace(/\s\s*$/, '');
          }
          function checkWeekday(weekdayStr, parsedInput, config) {
            if (weekdayStr) {
              // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
              var weekdayProvided =
                  defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                  parsedInput[0],
                  parsedInput[1],
                  parsedInput[2]
                ).getDay();
              if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
              }
            }
            return true;
          }
          function calculateOffset(obsOffset, militaryOffset, numOffset) {
            if (obsOffset) return obsOffsets[obsOffset];
            else if (militaryOffset)
              // the only allowed military tz is Z
              return 0;
            else {
              var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
              return h * 60 + m;
            }
          }
          // date and time from ref 2822 format
          function configFromRFC2822(config) {
            var match = rfc2822.exec(preprocessRFC2822(config._i)),
              parsedArray;
            if (match) {
              parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
              );
              if (!checkWeekday(match[1], parsedArray, config)) return;
              config._a = parsedArray;
              config._tzm = calculateOffset(match[8], match[9], match[10]);
              config._d = createUTCDate.apply(null, config._a);
              config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
              getParsingFlags(config).rfc2822 = true;
            } else config._isValid = false;
          }
          // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
          function configFromString(config) {
            var matched = aspNetJsonRegex.exec(config._i);
            if (matched !== null) {
              config._d = new Date(+matched[1]);
              return;
            }
            configFromISO(config);
            if (config._isValid === false) delete config._isValid;
            else return;
            configFromRFC2822(config);
            if (config._isValid === false) delete config._isValid;
            else return;
            if (config._strict)
              config._isValid = false; // Final attempt, use Input Fallback
            else hooks.createFromInputFallback(config);
          }
          hooks.createFromInputFallback = deprecate(
            'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
            function (config) {
              config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
            }
          );
          // Pick the first defined of two or three arguments.
          function defaults(a, b, c) {
            if (a != null) return a;
            if (b != null) return b;
            return c;
          }
          function currentDateArray(config) {
            // hooks is actually the exported moment object
            var nowValue = new Date(hooks.now());
            if (config._useUTC)
              return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
              ];
            return [
              nowValue.getFullYear(),
              nowValue.getMonth(),
              nowValue.getDate(),
            ];
          }
          // convert an array to a date.
          // the array should mirror the parameters below
          // note: all values past the year are optional and will default to the lowest possible value.
          // [year, month, day , hour, minute, second, millisecond]
          function configFromArray(config) {
            var i,
              date,
              input = [],
              currentDate,
              expectedWeekday,
              yearToUse;
            if (config._d) return;
            currentDate = currentDateArray(config);
            //compute day of the year from weeks and weekdays
            if (
              config._w &&
              config._a[DATE] == null &&
              config._a[MONTH] == null
            )
              dayOfYearFromWeekInfo(config);
            //if the day of the year is set, figure out what it is
            if (config._dayOfYear != null) {
              yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
              if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
              )
                getParsingFlags(config)._overflowDayOfYear = true;
              date = createUTCDate(yearToUse, 0, config._dayOfYear);
              config._a[MONTH] = date.getUTCMonth();
              config._a[DATE] = date.getUTCDate();
            }
            // Default to current date.
            // * if no year, month, day of month are given, default to today
            // * if day of month is given, default month and year
            // * if month is given, default only year
            // * if year is given, don't default anything
            for (i = 0; i < 3 && config._a[i] == null; ++i)
              config._a[i] = input[i] = currentDate[i];
            // Zero out whatever was not defaulted, including time
            for (; i < 7; i++)
              config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
            // Check for 24:00:00.000
            if (
              config._a[HOUR] === 24 &&
              config._a[MINUTE] === 0 &&
              config._a[SECOND] === 0 &&
              config._a[MILLISECOND] === 0
            ) {
              config._nextDay = true;
              config._a[HOUR] = 0;
            }
            config._d = (config._useUTC ? createUTCDate : createDate).apply(
              null,
              input
            );
            expectedWeekday = config._useUTC
              ? config._d.getUTCDay()
              : config._d.getDay();
            // Apply timezone offset from input. The actual utcOffset can be changed
            // with parseZone.
            if (config._tzm != null)
              config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            if (config._nextDay) config._a[HOUR] = 24;
            // check for mismatching day of week
            if (
              config._w &&
              typeof config._w.d !== 'undefined' &&
              config._w.d !== expectedWeekday
            )
              getParsingFlags(config).weekdayMismatch = true;
          }
          function dayOfYearFromWeekInfo(config) {
            var w,
              weekYear,
              week,
              weekday,
              dow,
              doy,
              temp,
              weekdayOverflow,
              curWeek;
            w = config._w;
            if (w.GG != null || w.W != null || w.E != null) {
              dow = 1;
              doy = 4;
              // TODO: We need to take the current isoWeekYear, but that depends on
              // how we interpret now (local, utc, fixed offset). So create
              // a now version of current config (take local/utc/offset flags, and
              // create now).
              weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
              );
              week = defaults(w.W, 1);
              weekday = defaults(w.E, 1);
              if (weekday < 1 || weekday > 7) weekdayOverflow = true;
            } else {
              dow = config._locale._week.dow;
              doy = config._locale._week.doy;
              curWeek = weekOfYear(createLocal(), dow, doy);
              weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
              // Default to current week.
              week = defaults(w.w, curWeek.week);
              if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) weekdayOverflow = true;
              } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) weekdayOverflow = true;
              } // default to beginning of week
              else weekday = dow;
            }
            if (week < 1 || week > weeksInYear(weekYear, dow, doy))
              getParsingFlags(config)._overflowWeeks = true;
            else if (weekdayOverflow != null)
              getParsingFlags(config)._overflowWeekday = true;
            else {
              temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
              config._a[YEAR] = temp.year;
              config._dayOfYear = temp.dayOfYear;
            }
          }
          // constant that refers to the ISO standard
          hooks.ISO_8601 = function () {};
          // constant that refers to the RFC 2822 form
          hooks.RFC_2822 = function () {};
          // date from string and format string
          function configFromStringAndFormat(config) {
            // TODO: Move this to another part of the creation flow to prevent circular deps
            if (config._f === hooks.ISO_8601) {
              configFromISO(config);
              return;
            }
            if (config._f === hooks.RFC_2822) {
              configFromRFC2822(config);
              return;
            }
            config._a = [];
            getParsingFlags(config).empty = true;
            // This array is used to make a Date, either with `new Date` or `Date.UTC`
            var string = '' + config._i,
              i,
              parsedInput,
              tokens,
              token,
              skipped,
              stringLength = string.length,
              totalParsedInputLength = 0,
              era,
              tokenLen;
            tokens =
              expandFormat(config._f, config._locale).match(formattingTokens) ||
              [];
            tokenLen = tokens.length;
            for (i = 0; i < tokenLen; i++) {
              token = tokens[i];
              parsedInput = (string.match(
                getParseRegexForToken(token, config)
              ) || [])[0];
              if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0)
                  getParsingFlags(config).unusedInput.push(skipped);
                string = string.slice(
                  string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
              }
              // don't parse if it's not a known token
              if (formatTokenFunctions[token]) {
                if (parsedInput) getParsingFlags(config).empty = false;
                else getParsingFlags(config).unusedTokens.push(token);
                addTimeToArrayFromToken(token, parsedInput, config);
              } else if (config._strict && !parsedInput)
                getParsingFlags(config).unusedTokens.push(token);
            }
            // add remaining unparsed input length to the string
            getParsingFlags(config).charsLeftOver =
              stringLength - totalParsedInputLength;
            if (string.length > 0)
              getParsingFlags(config).unusedInput.push(string);
            // clear _12h flag if hour is <= 12
            if (
              config._a[HOUR] <= 12 &&
              getParsingFlags(config).bigHour === true &&
              config._a[HOUR] > 0
            )
              getParsingFlags(config).bigHour = undefined;
            getParsingFlags(config).parsedDateParts = config._a.slice(0);
            getParsingFlags(config).meridiem = config._meridiem;
            // handle meridiem
            config._a[HOUR] = meridiemFixWrap(
              config._locale,
              config._a[HOUR],
              config._meridiem
            );
            // handle era
            era = getParsingFlags(config).era;
            if (era !== null)
              config._a[YEAR] = config._locale.erasConvertYear(
                era,
                config._a[YEAR]
              );
            configFromArray(config);
            checkOverflow(config);
          }
          function meridiemFixWrap(locale, hour, meridiem) {
            var isPm;
            if (meridiem == null)
              // nothing to do
              return hour;
            if (locale.meridiemHour != null)
              return locale.meridiemHour(hour, meridiem);
            else if (locale.isPM != null) {
              // Fallback
              isPm = locale.isPM(meridiem);
              if (isPm && hour < 12) hour += 12;
              if (!isPm && hour === 12) hour = 0;
              return hour;
            } // this is not supposed to happen
            else return hour;
          }
          // date from string and array of format strings
          function configFromStringAndArray(config) {
            var tempConfig,
              bestMoment,
              scoreToBeat,
              i,
              currentScore,
              validFormatFound,
              bestFormatIsValid = false,
              configfLen = config._f.length;
            if (configfLen === 0) {
              getParsingFlags(config).invalidFormat = true;
              config._d = new Date(NaN);
              return;
            }
            for (i = 0; i < configfLen; i++) {
              currentScore = 0;
              validFormatFound = false;
              tempConfig = copyConfig({}, config);
              if (config._useUTC != null) tempConfig._useUTC = config._useUTC;
              tempConfig._f = config._f[i];
              configFromStringAndFormat(tempConfig);
              if (isValid(tempConfig)) validFormatFound = true;
              // if there is any input that was not parsed add a penalty for that format
              currentScore += getParsingFlags(tempConfig).charsLeftOver;
              //or tokens
              currentScore +=
                getParsingFlags(tempConfig).unusedTokens.length * 10;
              getParsingFlags(tempConfig).score = currentScore;
              if (!bestFormatIsValid) {
                if (
                  scoreToBeat == null ||
                  currentScore < scoreToBeat ||
                  validFormatFound
                ) {
                  scoreToBeat = currentScore;
                  bestMoment = tempConfig;
                  if (validFormatFound) bestFormatIsValid = true;
                }
              } else if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
              }
            }
            extend(config, bestMoment || tempConfig);
          }
          function configFromObject(config) {
            if (config._d) return;
            var i = normalizeObjectUnits(config._i),
              dayOrDate = i.day === undefined ? i.date : i.day;
            config._a = map(
              [
                i.year,
                i.month,
                dayOrDate,
                i.hour,
                i.minute,
                i.second,
                i.millisecond,
              ],
              function (obj) {
                return obj && parseInt(obj, 10);
              }
            );
            configFromArray(config);
          }
          function createFromConfig(config) {
            var res = new Moment(checkOverflow(prepareConfig(config)));
            if (res._nextDay) {
              // Adding is smart enough around DST
              res.add(1, 'd');
              res._nextDay = undefined;
            }
            return res;
          }
          function prepareConfig(config) {
            var input = config._i,
              format = config._f;
            config._locale = config._locale || getLocale(config._l);
            if (input === null || (format === undefined && input === ''))
              return createInvalid({
                nullInput: true,
              });
            if (typeof input === 'string')
              config._i = input = config._locale.preparse(input);
            if (isMoment(input)) return new Moment(checkOverflow(input));
            else if (isDate(input)) config._d = input;
            else if (isArray(format)) configFromStringAndArray(config);
            else if (format) configFromStringAndFormat(config);
            else configFromInput(config);
            if (!isValid(config)) config._d = null;
            return config;
          }
          function configFromInput(config) {
            var input = config._i;
            if (isUndefined(input)) config._d = new Date(hooks.now());
            else if (isDate(input)) config._d = new Date(input.valueOf());
            else if (typeof input === 'string') configFromString(config);
            else if (isArray(input)) {
              config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
              });
              configFromArray(config);
            } else if (isObject(input)) configFromObject(config);
            else if (isNumber(input))
              // from milliseconds
              config._d = new Date(input);
            else hooks.createFromInputFallback(config);
          }
          function createLocalOrUTC(input, format, locale, strict, isUTC) {
            var c = {};
            if (format === true || format === false) {
              strict = format;
              format = undefined;
            }
            if (locale === true || locale === false) {
              strict = locale;
              locale = undefined;
            }
            if (
              (isObject(input) && isObjectEmpty(input)) ||
              (isArray(input) && input.length === 0)
            )
              input = undefined;
            // object construction must be done this way.
            // https://github.com/moment/moment/issues/1423
            c._isAMomentObject = true;
            c._useUTC = c._isUTC = isUTC;
            c._l = locale;
            c._i = input;
            c._f = format;
            c._strict = strict;
            return createFromConfig(c);
          }
          function createLocal(input, format, locale, strict) {
            return createLocalOrUTC(input, format, locale, strict, false);
          }
          var prototypeMin = deprecate(
              'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid())
                  return other < this ? this : other;
                else return createInvalid();
              }
            ),
            prototypeMax = deprecate(
              'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid())
                  return other > this ? this : other;
                else return createInvalid();
              }
            );
          // Pick a moment m from moments so that m[fn](other) is true for all
          // other. This relies on the function fn to be transitive.
          //
          // moments should either be an array of moment objects or an array, whose
          // first element is an array of moment objects.
          function pickBy(fn, moments) {
            var res, i;
            if (moments.length === 1 && isArray(moments[0]))
              moments = moments[0];
            if (!moments.length) return createLocal();
            res = moments[0];
            for (i = 1; i < moments.length; ++i)
              if (!moments[i].isValid() || moments[i][fn](res))
                res = moments[i];
            return res;
          }
          // TODO: Use [].sort instead?
          function min() {
            var args = [].slice.call(arguments, 0);
            return pickBy('isBefore', args);
          }
          function max() {
            var args = [].slice.call(arguments, 0);
            return pickBy('isAfter', args);
          }
          var now = function () {
            return Date.now ? Date.now() : +new Date();
          };
          var ordering = [
            'year',
            'quarter',
            'month',
            'week',
            'day',
            'hour',
            'minute',
            'second',
            'millisecond',
          ];
          function isDurationValid(m) {
            var key,
              unitHasDecimal = false,
              i,
              orderLen = ordering.length;
            for (key in m) {
              if (
                hasOwnProp(m, key) &&
                !(
                  indexOf.call(ordering, key) !== -1 &&
                  (m[key] == null || !isNaN(m[key]))
                )
              )
                return false;
            }
            for (i = 0; i < orderLen; ++i)
              if (m[ordering[i]]) {
                if (unitHasDecimal) return false; // only allow non-integers for smallest unit
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]]))
                  unitHasDecimal = true;
              }
            return true;
          }
          function isValid$1() {
            return this._isValid;
          }
          function createInvalid$1() {
            return createDuration(NaN);
          }
          function Duration(duration) {
            var normalizedInput = normalizeObjectUnits(duration),
              years = normalizedInput.year || 0,
              quarters = normalizedInput.quarter || 0,
              months = normalizedInput.month || 0,
              weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
              days = normalizedInput.day || 0,
              hours = normalizedInput.hour || 0,
              minutes = normalizedInput.minute || 0,
              seconds = normalizedInput.second || 0,
              milliseconds = normalizedInput.millisecond || 0;
            this._isValid = isDurationValid(normalizedInput);
            // representation for dateAddRemove
            this._milliseconds =
              +milliseconds +
              seconds * 1e3 + // 1000
              minutes * 6e4 + // 1000 * 60
              hours * 3600000; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
            // Because of dateAddRemove treats 24 hours as different from a
            // day when working around DST, we need to store them separately
            this._days = +days + weeks * 7;
            // It is impossible to translate months into days without knowing
            // which months you are are talking about, so we have to store
            // it separately.
            this._months = +months + quarters * 3 + years * 12;
            this._data = {};
            this._locale = getLocale();
            this._bubble();
          }
          function isDuration(obj) {
            return obj instanceof Duration;
          }
          function absRound(number) {
            if (number < 0) return Math.round(-1 * number) * -1;
            else return Math.round(number);
          }
          // compare two arrays, return the number of differences
          function compareArrays(array1, array2, dontConvert) {
            var len = Math.min(array1.length, array2.length),
              lengthDiff = Math.abs(array1.length - array2.length),
              diffs = 0,
              i;
            for (i = 0; i < len; i++)
              if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
              )
                diffs++;
            return diffs + lengthDiff;
          }
          // FORMATTING
          function offset(token, separator) {
            addFormatToken(token, 0, 0, function () {
              var offset = this.utcOffset(),
                sign = '+';
              if (offset < 0) {
                offset = -offset;
                sign = '-';
              }
              return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
              );
            });
          }
          offset('Z', ':');
          offset('ZZ', '');
          // PARSING
          addRegexToken('Z', matchShortOffset);
          addRegexToken('ZZ', matchShortOffset);
          addParseToken(['Z', 'ZZ'], function (input, array, config) {
            config._useUTC = true;
            config._tzm = offsetFromString(matchShortOffset, input);
          });
          // HELPERS
          // timezone chunker
          // '+10:00' > ['10',  '00']
          // '-1530'  > ['-15', '30']
          var chunkOffset = /([\+\-]|\d\d)/gi;
          function offsetFromString(matcher, string) {
            var matches = (string || '').match(matcher),
              chunk,
              parts,
              minutes;
            if (matches === null) return null;
            chunk = matches[matches.length - 1] || [];
            parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
            minutes = +(parts[1] * 60) + toInt(parts[2]);
            return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
          }
          // Return a moment from input, that is local/utc/zone equivalent to model.
          function cloneWithOffset(input, model) {
            var res, diff;
            if (model._isUTC) {
              res = model.clone();
              diff =
                (isMoment(input) || isDate(input)
                  ? input.valueOf()
                  : createLocal(input).valueOf()) - res.valueOf();
              // Use low-level api, because this fn is low-level api.
              res._d.setTime(res._d.valueOf() + diff);
              hooks.updateOffset(res, false);
              return res;
            } else return createLocal(input).local();
          }
          function getDateOffset(m) {
            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return -Math.round(m._d.getTimezoneOffset());
          }
          // HOOKS
          // This function will be called whenever a moment is mutated.
          // It is intended to keep the offset in sync with the timezone.
          hooks.updateOffset = function () {};
          // MOMENTS
          // keepLocalTime = true means only change the timezone, without
          // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
          // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
          // +0200, so we adjust the time as needed, to be valid.
          //
          // Keeping the time actually adds/subtracts (one hour)
          // from the actual represented time. That is why we call updateOffset
          // a second time. In case it wants us to change the offset again
          // _changeInProgress == true case, then we have to adjust, because
          // there is no such time in the given timezone.
          function getSetOffset(input, keepLocalTime, keepMinutes) {
            var offset = this._offset || 0,
              localAdjust;
            if (!this.isValid()) return input != null ? this : NaN;
            if (input != null) {
              if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) return this;
              } else if (Math.abs(input) < 16 && !keepMinutes)
                input = input * 60;
              if (!this._isUTC && keepLocalTime)
                localAdjust = getDateOffset(this);
              this._offset = input;
              this._isUTC = true;
              if (localAdjust != null) this.add(localAdjust, 'm');
              if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress)
                  addSubtract(
                    this,
                    createDuration(input - offset, 'm'),
                    1,
                    false
                  );
                else if (!this._changeInProgress) {
                  this._changeInProgress = true;
                  hooks.updateOffset(this, true);
                  this._changeInProgress = null;
                }
              }
              return this;
            } else return this._isUTC ? offset : getDateOffset(this);
          }
          function getSetZone(input, keepLocalTime) {
            if (input != null) {
              if (typeof input !== 'string') input = -input;
              this.utcOffset(input, keepLocalTime);
              return this;
            } else return -this.utcOffset();
          }
          function setOffsetToUTC(keepLocalTime) {
            return this.utcOffset(0, keepLocalTime);
          }
          function setOffsetToLocal(keepLocalTime) {
            if (this._isUTC) {
              this.utcOffset(0, keepLocalTime);
              this._isUTC = false;
              if (keepLocalTime) this.subtract(getDateOffset(this), 'm');
            }
            return this;
          }
          function setOffsetToParsedOffset() {
            if (this._tzm != null) this.utcOffset(this._tzm, false, true);
            else if (typeof this._i === 'string') {
              var tZone = offsetFromString(matchOffset, this._i);
              if (tZone != null) this.utcOffset(tZone);
              else this.utcOffset(0, true);
            }
            return this;
          }
          function hasAlignedHourOffset(input) {
            if (!this.isValid()) return false;
            input = input ? createLocal(input).utcOffset() : 0;
            return (this.utcOffset() - input) % 60 === 0;
          }
          function isDaylightSavingTime() {
            return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
            );
          }
          function isDaylightSavingTimeShifted() {
            if (!isUndefined(this._isDSTShifted)) return this._isDSTShifted;
            var c = {},
              other;
            copyConfig(c, this);
            c = prepareConfig(c);
            if (c._a) {
              other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
              this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
            } else this._isDSTShifted = false;
            return this._isDSTShifted;
          }
          function isLocal() {
            return this.isValid() ? !this._isUTC : false;
          }
          function isUtcOffset() {
            return this.isValid() ? this._isUTC : false;
          }
          function isUtc() {
            return this.isValid() ? this._isUTC && this._offset === 0 : false;
          }
          // ASP.NET json date format regex
          var aspNetRegex =
              /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
            // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
            // and further modified to allow for strings containing both week and day
            isoRegex =
              /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          function createDuration(input, key) {
            var duration = input, // matching against regexp is expensive, do it on demand
              match = null,
              sign,
              ret,
              diffRes;
            if (isDuration(input))
              duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
              };
            else if (isNumber(input) || !isNaN(+input)) {
              duration = {};
              if (key) duration[key] = +input;
              else duration.milliseconds = +input;
            } else if ((match = aspNetRegex.exec(input))) {
              sign = match[1] === '-' ? -1 : 1;
              duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign,
              };
            } else if ((match = isoRegex.exec(input))) {
              sign = match[1] === '-' ? -1 : 1;
              duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
              };
            } else if (duration == null)
              // checks for null or undefined
              duration = {};
            else if (
              typeof duration === 'object' &&
              ('from' in duration || 'to' in duration)
            ) {
              diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
              );
              duration = {};
              duration.ms = diffRes.milliseconds;
              duration.M = diffRes.months;
            }
            ret = new Duration(duration);
            if (isDuration(input) && hasOwnProp(input, '_locale'))
              ret._locale = input._locale;
            if (isDuration(input) && hasOwnProp(input, '_isValid'))
              ret._isValid = input._isValid;
            return ret;
          }
          createDuration.fn = Duration.prototype;
          createDuration.invalid = createInvalid$1;
          function parseIso(inp, sign) {
            // We'd normally use ~~inp for this, but unfortunately it also
            // converts floats to ints.
            // inp may be undefined, so careful calling replace on it.
            var res = inp && parseFloat(inp.replace(',', '.'));
            // apply sign while we're at it
            return (isNaN(res) ? 0 : res) * sign;
          }
          function positiveMomentsDifference(base, other) {
            var res = {};
            res.months =
              other.month() - base.month() + (other.year() - base.year()) * 12;
            if (base.clone().add(res.months, 'M').isAfter(other)) --res.months;
            res.milliseconds = +other - +base.clone().add(res.months, 'M');
            return res;
          }
          function momentsDifference(base, other) {
            var res;
            if (!(base.isValid() && other.isValid()))
              return {
                milliseconds: 0,
                months: 0,
              };
            other = cloneWithOffset(other, base);
            if (base.isBefore(other))
              res = positiveMomentsDifference(base, other);
            else {
              res = positiveMomentsDifference(other, base);
              res.milliseconds = -res.milliseconds;
              res.months = -res.months;
            }
            return res;
          }
          // TODO: remove 'name' arg after deprecation is removed
          function createAdder(direction, name) {
            return function (val, period) {
              var dur, tmp;
              //invert the arguments, but complain about it
              if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                  name,
                  'moment().' +
                    name +
                    '(period, number) is deprecated. Please use moment().' +
                    name +
                    '(number, period). ' +
                    'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
              }
              dur = createDuration(val, period);
              addSubtract(this, dur, direction);
              return this;
            };
          }
          function addSubtract(mom, duration, isAdding, updateOffset) {
            var milliseconds = duration._milliseconds,
              days = absRound(duration._days),
              months = absRound(duration._months);
            if (!mom.isValid())
              // No op
              return;
            updateOffset = updateOffset == null ? true : updateOffset;
            if (months) setMonth(mom, get(mom, 'Month') + months * isAdding);
            if (days) set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
            if (milliseconds)
              mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
            if (updateOffset) hooks.updateOffset(mom, days || months);
          }
          var add = createAdder(1, 'add'),
            subtract = createAdder(-1, 'subtract');
          function isString(input) {
            return typeof input === 'string' || input instanceof String;
          }
          // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
          function isMomentInput(input) {
            return (
              isMoment(input) ||
              isDate(input) ||
              isString(input) ||
              isNumber(input) ||
              isNumberOrStringArray(input) ||
              isMomentInputObject(input) ||
              input === null ||
              input === undefined
            );
          }
          function isMomentInputObject(input) {
            var objectTest = isObject(input) && !isObjectEmpty(input),
              propertyTest = false,
              properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
              ],
              i,
              property,
              propertyLen = properties.length;
            for (i = 0; i < propertyLen; i += 1) {
              property = properties[i];
              propertyTest = propertyTest || hasOwnProp(input, property);
            }
            return objectTest && propertyTest;
          }
          function isNumberOrStringArray(input) {
            var arrayTest = isArray(input),
              dataTypeTest = false;
            if (arrayTest)
              dataTypeTest =
                input.filter(function (item) {
                  return !isNumber(item) && isString(input);
                }).length === 0;
            return arrayTest && dataTypeTest;
          }
          function isCalendarSpec(input) {
            var objectTest = isObject(input) && !isObjectEmpty(input),
              propertyTest = false,
              properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
              ],
              i,
              property;
            for (i = 0; i < properties.length; i += 1) {
              property = properties[i];
              propertyTest = propertyTest || hasOwnProp(input, property);
            }
            return objectTest && propertyTest;
          }
          function getCalendarFormat(myMoment, now) {
            var diff = myMoment.diff(now, 'days', true);
            return diff < -6
              ? 'sameElse'
              : diff < -1
                ? 'lastWeek'
                : diff < 0
                  ? 'lastDay'
                  : diff < 1
                    ? 'sameDay'
                    : diff < 2
                      ? 'nextDay'
                      : diff < 7
                        ? 'nextWeek'
                        : 'sameElse';
          }
          function calendar$1(time, formats) {
            // Support for single parameter, formats only overload to the calendar function
            if (arguments.length === 1) {
              if (!arguments[0]) {
                time = undefined;
                formats = undefined;
              } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
              } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
              }
            }
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're local/utc/offset or not.
            var now = time || createLocal(),
              sod = cloneWithOffset(now, this).startOf('day'),
              format = hooks.calendarFormat(this, sod) || 'sameElse',
              output =
                formats &&
                (isFunction(formats[format])
                  ? formats[format].call(this, now)
                  : formats[format]);
            return this.format(
              output ||
                this.localeData().calendar(format, this, createLocal(now))
            );
          }
          function clone() {
            return new Moment(this);
          }
          function isAfter(input, units) {
            var localInput = isMoment(input) ? input : createLocal(input);
            if (!(this.isValid() && localInput.isValid())) return false;
            units = normalizeUnits(units) || 'millisecond';
            if (units === 'millisecond')
              return this.valueOf() > localInput.valueOf();
            else
              return (
                localInput.valueOf() < this.clone().startOf(units).valueOf()
              );
          }
          function isBefore(input, units) {
            var localInput = isMoment(input) ? input : createLocal(input);
            if (!(this.isValid() && localInput.isValid())) return false;
            units = normalizeUnits(units) || 'millisecond';
            if (units === 'millisecond')
              return this.valueOf() < localInput.valueOf();
            else
              return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
          function isBetween(from, to, units, inclusivity) {
            var localFrom = isMoment(from) ? from : createLocal(from),
              localTo = isMoment(to) ? to : createLocal(to);
            if (!(this.isValid() && localFrom.isValid() && localTo.isValid()))
              return false;
            inclusivity = inclusivity || '()';
            return (
              (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
              (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
            );
          }
          function isSame(input, units) {
            var localInput = isMoment(input) ? input : createLocal(input),
              inputMs;
            if (!(this.isValid() && localInput.isValid())) return false;
            units = normalizeUnits(units) || 'millisecond';
            if (units === 'millisecond')
              return this.valueOf() === localInput.valueOf();
            else {
              inputMs = localInput.valueOf();
              return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
              );
            }
          }
          function isSameOrAfter(input, units) {
            return this.isSame(input, units) || this.isAfter(input, units);
          }
          function isSameOrBefore(input, units) {
            return this.isSame(input, units) || this.isBefore(input, units);
          }
          function diff(input, units, asFloat) {
            var that, zoneDelta, output;
            if (!this.isValid()) return NaN;
            that = cloneWithOffset(input, this);
            if (!that.isValid()) return NaN;
            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
            units = normalizeUnits(units);
            switch (units) {
              case 'year':
                output = monthDiff(this, that) / 12;
                break;
              case 'month':
                output = monthDiff(this, that);
                break;
              case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
              case 'second':
                output = (this - that) / 1e3;
                break; // 1000
              case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
              case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
              case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
              case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
              default:
                output = this - that;
            }
            return asFloat ? output : absFloor(output);
          }
          function monthDiff(a, b) {
            if (a.date() < b.date())
              // end-of-month calculations work correct when the start month has more
              // days than the end month.
              return -monthDiff(b, a);
            // difference in months
            var wholeMonthDiff =
                (b.year() - a.year()) * 12 + (b.month() - a.month()), // b is in (anchor - 1 month, anchor + 1 month)
              anchor = a.clone().add(wholeMonthDiff, 'months'),
              anchor2,
              adjust;
            if (b - anchor < 0) {
              anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
              // linear across the month
              adjust = (b - anchor) / (anchor - anchor2);
            } else {
              anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
              // linear across the month
              adjust = (b - anchor) / (anchor2 - anchor);
            }
            //check for negative zero, return zero if negative zero
            return -(wholeMonthDiff + adjust) || 0;
          }
          hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
          hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
          function toString() {
            return this.clone()
              .locale('en')
              .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
          }
          function toISOString(keepOffset) {
            if (!this.isValid()) return null;
            var utc = keepOffset !== true,
              m = utc ? this.clone().utc() : this;
            if (m.year() < 0 || m.year() > 9999)
              return formatMoment(
                m,
                utc
                  ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                  : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
              );
            if (isFunction(Date.prototype.toISOString)) {
              // native implementation is ~50x faster, use it when we can
              if (utc) return this.toDate().toISOString();
              else
                return new Date(this.valueOf() + this.utcOffset() * 60000)
                  .toISOString()
                  .replace('Z', formatMoment(m, 'Z'));
            }
            return formatMoment(
              m,
              utc
                ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
          }
          /**
           * Return a human readable representation of a moment that can
           * also be evaluated to get a new moment which is the same
           *
           * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
           */ function inspect() {
            if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
            var func = 'moment',
              zone = '',
              prefix,
              year,
              datetime,
              suffix;
            if (!this.isLocal()) {
              func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
              zone = 'Z';
            }
            prefix = '[' + func + '("]';
            year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
            datetime = '-MM-DD[T]HH:mm:ss.SSS';
            suffix = zone + '[")]';
            return this.format(prefix + year + datetime + suffix);
          }
          function format(inputString) {
            if (!inputString)
              inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
            var output = formatMoment(this, inputString);
            return this.localeData().postformat(output);
          }
          function from(time, withoutSuffix) {
            if (
              this.isValid() &&
              ((isMoment(time) && time.isValid()) ||
                createLocal(time).isValid())
            )
              return createDuration({
                to: this,
                from: time,
              })
                .locale(this.locale())
                .humanize(!withoutSuffix);
            else return this.localeData().invalidDate();
          }
          function fromNow(withoutSuffix) {
            return this.from(createLocal(), withoutSuffix);
          }
          function to(time, withoutSuffix) {
            if (
              this.isValid() &&
              ((isMoment(time) && time.isValid()) ||
                createLocal(time).isValid())
            )
              return createDuration({
                from: this,
                to: time,
              })
                .locale(this.locale())
                .humanize(!withoutSuffix);
            else return this.localeData().invalidDate();
          }
          function toNow(withoutSuffix) {
            return this.to(createLocal(), withoutSuffix);
          }
          // If passed a locale key, it will set the locale for this
          // instance.  Otherwise, it will return the locale configuration
          // variables for this instance.
          function locale(key) {
            var newLocaleData;
            if (key === undefined) return this._locale._abbr;
            else {
              newLocaleData = getLocale(key);
              if (newLocaleData != null) this._locale = newLocaleData;
              return this;
            }
          }
          var lang = deprecate(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function (key) {
              if (key === undefined) return this.localeData();
              else return this.locale(key);
            }
          );
          function localeData() {
            return this._locale;
          }
          var MS_PER_SECOND = 1000,
            MS_PER_MINUTE = 60 * MS_PER_SECOND,
            MS_PER_HOUR = 60 * MS_PER_MINUTE,
            MS_PER_400_YEARS = 3506328 * MS_PER_HOUR;
          // actual modulo - handles negative numbers (for dates before 1970):
          function mod$1(dividend, divisor) {
            return ((dividend % divisor) + divisor) % divisor;
          }
          function localStartOfDate(y, m, d) {
            // the date constructor remaps years 0-99 to 1900-1999
            if (y < 100 && y >= 0)
              // preserve leap years using a full 400 year cycle, then reset
              return new Date(y + 400, m, d) - MS_PER_400_YEARS;
            else return new Date(y, m, d).valueOf();
          }
          function utcStartOfDate(y, m, d) {
            // Date.UTC remaps years 0-99 to 1900-1999
            if (y < 100 && y >= 0)
              // preserve leap years using a full 400 year cycle, then reset
              return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
            else return Date.UTC(y, m, d);
          }
          function startOf(units) {
            var time, startOfDate;
            units = normalizeUnits(units);
            if (
              units === undefined ||
              units === 'millisecond' ||
              !this.isValid()
            )
              return this;
            startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
            switch (units) {
              case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
              case 'quarter':
                time = startOfDate(
                  this.year(),
                  this.month() - (this.month() % 3),
                  1
                );
                break;
              case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
              case 'week':
                time = startOfDate(
                  this.year(),
                  this.month(),
                  this.date() - this.weekday()
                );
                break;
              case 'isoWeek':
                time = startOfDate(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1)
                );
                break;
              case 'day':
              case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
              case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                  time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                  MS_PER_HOUR
                );
                break;
              case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
              case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
            }
            this._d.setTime(time);
            hooks.updateOffset(this, true);
            return this;
          }
          function endOf(units) {
            var time, startOfDate;
            units = normalizeUnits(units);
            if (
              units === undefined ||
              units === 'millisecond' ||
              !this.isValid()
            )
              return this;
            startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
            switch (units) {
              case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
              case 'quarter':
                time =
                  startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3) + 3,
                    1
                  ) - 1;
                break;
              case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
              case 'week':
                time =
                  startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                  ) - 1;
                break;
              case 'isoWeek':
                time =
                  startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                  ) - 1;
                break;
              case 'day':
              case 'date':
                time =
                  startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
              case 'hour':
                time = this._d.valueOf();
                time +=
                  MS_PER_HOUR -
                  mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                  ) -
                  1;
                break;
              case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
              case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
            }
            this._d.setTime(time);
            hooks.updateOffset(this, true);
            return this;
          }
          function valueOf() {
            return this._d.valueOf() - (this._offset || 0) * 60000;
          }
          function unix() {
            return Math.floor(this.valueOf() / 1000);
          }
          function toDate() {
            return new Date(this.valueOf());
          }
          function toArray() {
            var m = this;
            return [
              m.year(),
              m.month(),
              m.date(),
              m.hour(),
              m.minute(),
              m.second(),
              m.millisecond(),
            ];
          }
          function toObject() {
            var m = this;
            return {
              years: m.year(),
              months: m.month(),
              date: m.date(),
              hours: m.hours(),
              minutes: m.minutes(),
              seconds: m.seconds(),
              milliseconds: m.milliseconds(),
            };
          }
          function toJSON() {
            // new Date(NaN).toJSON() === null
            return this.isValid() ? this.toISOString() : null;
          }
          function isValid$2() {
            return isValid(this);
          }
          function parsingFlags() {
            return extend({}, getParsingFlags(this));
          }
          function invalidAt() {
            return getParsingFlags(this).overflow;
          }
          function creationData() {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
            };
          }
          addFormatToken('N', 0, 0, 'eraAbbr');
          addFormatToken('NN', 0, 0, 'eraAbbr');
          addFormatToken('NNN', 0, 0, 'eraAbbr');
          addFormatToken('NNNN', 0, 0, 'eraName');
          addFormatToken('NNNNN', 0, 0, 'eraNarrow');
          addFormatToken('y', ['y', 1], 'yo', 'eraYear');
          addFormatToken('y', ['yy', 2], 0, 'eraYear');
          addFormatToken('y', ['yyy', 3], 0, 'eraYear');
          addFormatToken('y', ['yyyy', 4], 0, 'eraYear');
          addRegexToken('N', matchEraAbbr);
          addRegexToken('NN', matchEraAbbr);
          addRegexToken('NNN', matchEraAbbr);
          addRegexToken('NNNN', matchEraName);
          addRegexToken('NNNNN', matchEraNarrow);
          addParseToken(
            ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
            function (input, array, config, token) {
              var era = config._locale.erasParse(input, token, config._strict);
              if (era) getParsingFlags(config).era = era;
              else getParsingFlags(config).invalidEra = input;
            }
          );
          addRegexToken('y', matchUnsigned);
          addRegexToken('yy', matchUnsigned);
          addRegexToken('yyy', matchUnsigned);
          addRegexToken('yyyy', matchUnsigned);
          addRegexToken('yo', matchEraYearOrdinal);
          addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
          addParseToken(['yo'], function (input, array, config, token) {
            var match;
            if (config._locale._eraYearOrdinalRegex)
              match = input.match(config._locale._eraYearOrdinalRegex);
            if (config._locale.eraYearOrdinalParse)
              array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
            else array[YEAR] = parseInt(input, 10);
          });
          function localeEras(m, format) {
            var i,
              l,
              date,
              eras = this._eras || getLocale('en')._eras;
            for (i = 0, l = eras.length; i < l; ++i) {
              switch (typeof eras[i].since) {
                case 'string':
                  // truncate time
                  date = hooks(eras[i].since).startOf('day');
                  eras[i].since = date.valueOf();
                  break;
              }
              switch (typeof eras[i].until) {
                case 'undefined':
                  eras[i].until = Infinity;
                  break;
                case 'string':
                  // truncate time
                  date = hooks(eras[i].until).startOf('day').valueOf();
                  eras[i].until = date.valueOf();
                  break;
              }
            }
            return eras;
          }
          function localeErasParse(eraName, format, strict) {
            var i,
              l,
              eras = this.eras(),
              name,
              abbr,
              narrow;
            eraName = eraName.toUpperCase();
            for (i = 0, l = eras.length; i < l; ++i) {
              name = eras[i].name.toUpperCase();
              abbr = eras[i].abbr.toUpperCase();
              narrow = eras[i].narrow.toUpperCase();
              if (strict)
                switch (format) {
                  case 'N':
                  case 'NN':
                  case 'NNN':
                    if (abbr === eraName) return eras[i];
                    break;
                  case 'NNNN':
                    if (name === eraName) return eras[i];
                    break;
                  case 'NNNNN':
                    if (narrow === eraName) return eras[i];
                    break;
                }
              else if ([name, abbr, narrow].indexOf(eraName) >= 0)
                return eras[i];
            }
          }
          function localeErasConvertYear(era, year) {
            var dir = era.since <= era.until ? 1 : -1;
            if (year === undefined) return hooks(era.since).year();
            else return hooks(era.since).year() + (year - era.offset) * dir;
          }
          function getEraName() {
            var i,
              l,
              val,
              eras = this.localeData().eras();
            for (i = 0, l = eras.length; i < l; ++i) {
              // truncate time
              val = this.clone().startOf('day').valueOf();
              if (eras[i].since <= val && val <= eras[i].until)
                return eras[i].name;
              if (eras[i].until <= val && val <= eras[i].since)
                return eras[i].name;
            }
            return '';
          }
          function getEraNarrow() {
            var i,
              l,
              val,
              eras = this.localeData().eras();
            for (i = 0, l = eras.length; i < l; ++i) {
              // truncate time
              val = this.clone().startOf('day').valueOf();
              if (eras[i].since <= val && val <= eras[i].until)
                return eras[i].narrow;
              if (eras[i].until <= val && val <= eras[i].since)
                return eras[i].narrow;
            }
            return '';
          }
          function getEraAbbr() {
            var i,
              l,
              val,
              eras = this.localeData().eras();
            for (i = 0, l = eras.length; i < l; ++i) {
              // truncate time
              val = this.clone().startOf('day').valueOf();
              if (eras[i].since <= val && val <= eras[i].until)
                return eras[i].abbr;
              if (eras[i].until <= val && val <= eras[i].since)
                return eras[i].abbr;
            }
            return '';
          }
          function getEraYear() {
            var i,
              l,
              dir,
              val,
              eras = this.localeData().eras();
            for (i = 0, l = eras.length; i < l; ++i) {
              dir = eras[i].since <= eras[i].until ? 1 : -1;
              // truncate time
              val = this.clone().startOf('day').valueOf();
              if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
              )
                return (
                  (this.year() - hooks(eras[i].since).year()) * dir +
                  eras[i].offset
                );
            }
            return this.year();
          }
          function erasNameRegex(isStrict) {
            if (!hasOwnProp(this, '_erasNameRegex'))
              computeErasParse.call(this);
            return isStrict ? this._erasNameRegex : this._erasRegex;
          }
          function erasAbbrRegex(isStrict) {
            if (!hasOwnProp(this, '_erasAbbrRegex'))
              computeErasParse.call(this);
            return isStrict ? this._erasAbbrRegex : this._erasRegex;
          }
          function erasNarrowRegex(isStrict) {
            if (!hasOwnProp(this, '_erasNarrowRegex'))
              computeErasParse.call(this);
            return isStrict ? this._erasNarrowRegex : this._erasRegex;
          }
          function matchEraAbbr(isStrict, locale) {
            return locale.erasAbbrRegex(isStrict);
          }
          function matchEraName(isStrict, locale) {
            return locale.erasNameRegex(isStrict);
          }
          function matchEraNarrow(isStrict, locale) {
            return locale.erasNarrowRegex(isStrict);
          }
          function matchEraYearOrdinal(isStrict, locale) {
            return locale._eraYearOrdinalRegex || matchUnsigned;
          }
          function computeErasParse() {
            var abbrPieces = [],
              namePieces = [],
              narrowPieces = [],
              mixedPieces = [],
              i,
              l,
              erasName,
              erasAbbr,
              erasNarrow,
              eras = this.eras();
            for (i = 0, l = eras.length; i < l; ++i) {
              erasName = regexEscape(eras[i].name);
              erasAbbr = regexEscape(eras[i].abbr);
              erasNarrow = regexEscape(eras[i].narrow);
              namePieces.push(erasName);
              abbrPieces.push(erasAbbr);
              narrowPieces.push(erasNarrow);
              mixedPieces.push(erasName);
              mixedPieces.push(erasAbbr);
              mixedPieces.push(erasNarrow);
            }
            this._erasRegex = new RegExp(
              '^(' + mixedPieces.join('|') + ')',
              'i'
            );
            this._erasNameRegex = new RegExp(
              '^(' + namePieces.join('|') + ')',
              'i'
            );
            this._erasAbbrRegex = new RegExp(
              '^(' + abbrPieces.join('|') + ')',
              'i'
            );
            this._erasNarrowRegex = new RegExp(
              '^(' + narrowPieces.join('|') + ')',
              'i'
            );
          }
          // FORMATTING
          addFormatToken(0, ['gg', 2], 0, function () {
            return this.weekYear() % 100;
          });
          addFormatToken(0, ['GG', 2], 0, function () {
            return this.isoWeekYear() % 100;
          });
          function addWeekYearFormatToken(token, getter) {
            addFormatToken(0, [token, token.length], 0, getter);
          }
          addWeekYearFormatToken('gggg', 'weekYear');
          addWeekYearFormatToken('ggggg', 'weekYear');
          addWeekYearFormatToken('GGGG', 'isoWeekYear');
          addWeekYearFormatToken('GGGGG', 'isoWeekYear');
          // ALIASES
          // PARSING
          addRegexToken('G', matchSigned);
          addRegexToken('g', matchSigned);
          addRegexToken('GG', match1to2, match2);
          addRegexToken('gg', match1to2, match2);
          addRegexToken('GGGG', match1to4, match4);
          addRegexToken('gggg', match1to4, match4);
          addRegexToken('GGGGG', match1to6, match6);
          addRegexToken('ggggg', match1to6, match6);
          addWeekParseToken(
            ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
            function (input, week, config, token) {
              week[token.substr(0, 2)] = toInt(input);
            }
          );
          addWeekParseToken(
            ['gg', 'GG'],
            function (input, week, config, token) {
              week[token] = hooks.parseTwoDigitYear(input);
            }
          );
          // MOMENTS
          function getSetWeekYear(input) {
            return getSetWeekYearHelper.call(
              this,
              input,
              this.week(),
              this.weekday() + this.localeData()._week.dow,
              this.localeData()._week.dow,
              this.localeData()._week.doy
            );
          }
          function getSetISOWeekYear(input) {
            return getSetWeekYearHelper.call(
              this,
              input,
              this.isoWeek(),
              this.isoWeekday(),
              1,
              4
            );
          }
          function getISOWeeksInYear() {
            return weeksInYear(this.year(), 1, 4);
          }
          function getISOWeeksInISOWeekYear() {
            return weeksInYear(this.isoWeekYear(), 1, 4);
          }
          function getWeeksInYear() {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
          }
          function getWeeksInWeekYear() {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
          }
          function getSetWeekYearHelper(input, week, weekday, dow, doy) {
            var weeksTarget;
            if (input == null) return weekOfYear(this, dow, doy).year;
            else {
              weeksTarget = weeksInYear(input, dow, doy);
              if (week > weeksTarget) week = weeksTarget;
              return setWeekAll.call(this, input, week, weekday, dow, doy);
            }
          }
          function setWeekAll(weekYear, week, weekday, dow, doy) {
            var dayOfYearData = dayOfYearFromWeeks(
                weekYear,
                week,
                weekday,
                dow,
                doy
              ),
              date = createUTCDate(
                dayOfYearData.year,
                0,
                dayOfYearData.dayOfYear
              );
            this.year(date.getUTCFullYear());
            this.month(date.getUTCMonth());
            this.date(date.getUTCDate());
            return this;
          }
          // FORMATTING
          addFormatToken('Q', 0, 'Qo', 'quarter');
          // PARSING
          addRegexToken('Q', match1);
          addParseToken('Q', function (input, array) {
            array[MONTH] = (toInt(input) - 1) * 3;
          });
          // MOMENTS
          function getSetQuarter(input) {
            return input == null
              ? Math.ceil((this.month() + 1) / 3)
              : this.month((input - 1) * 3 + (this.month() % 3));
          }
          // FORMATTING
          addFormatToken('D', ['DD', 2], 'Do', 'date');
          // PARSING
          addRegexToken('D', match1to2, match1to2NoLeadingZero);
          addRegexToken('DD', match1to2, match2);
          addRegexToken('Do', function (isStrict, locale) {
            // TODO: Remove "ordinalParse" fallback in next major release.
            return isStrict
              ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
              : locale._dayOfMonthOrdinalParseLenient;
          });
          addParseToken(['D', 'DD'], DATE);
          addParseToken('Do', function (input, array) {
            array[DATE] = toInt(input.match(match1to2)[0]);
          });
          // MOMENTS
          var getSetDayOfMonth = makeGetSet('Date', true);
          // FORMATTING
          addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
          // PARSING
          addRegexToken('DDD', match1to3);
          addRegexToken('DDDD', match3);
          addParseToken(['DDD', 'DDDD'], function (input, array, config) {
            config._dayOfYear = toInt(input);
          });
          // HELPERS
          // MOMENTS
          function getSetDayOfYear(input) {
            var dayOfYear =
              Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) /
                  864e5
              ) + 1;
            return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
          }
          // FORMATTING
          addFormatToken('m', ['mm', 2], 0, 'minute');
          // PARSING
          addRegexToken('m', match1to2, match1to2HasZero);
          addRegexToken('mm', match1to2, match2);
          addParseToken(['m', 'mm'], MINUTE);
          // MOMENTS
          var getSetMinute = makeGetSet('Minutes', false);
          // FORMATTING
          addFormatToken('s', ['ss', 2], 0, 'second');
          // PARSING
          addRegexToken('s', match1to2, match1to2HasZero);
          addRegexToken('ss', match1to2, match2);
          addParseToken(['s', 'ss'], SECOND);
          // MOMENTS
          var getSetSecond = makeGetSet('Seconds', false);
          // FORMATTING
          addFormatToken('S', 0, 0, function () {
            return ~~(this.millisecond() / 100);
          });
          addFormatToken(0, ['SS', 2], 0, function () {
            return ~~(this.millisecond() / 10);
          });
          addFormatToken(0, ['SSS', 3], 0, 'millisecond');
          addFormatToken(0, ['SSSS', 4], 0, function () {
            return this.millisecond() * 10;
          });
          addFormatToken(0, ['SSSSS', 5], 0, function () {
            return this.millisecond() * 100;
          });
          addFormatToken(0, ['SSSSSS', 6], 0, function () {
            return this.millisecond() * 1000;
          });
          addFormatToken(0, ['SSSSSSS', 7], 0, function () {
            return this.millisecond() * 10000;
          });
          addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
            return this.millisecond() * 100000;
          });
          addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
            return this.millisecond() * 1000000;
          });
          // PARSING
          addRegexToken('S', match1to3, match1);
          addRegexToken('SS', match1to3, match2);
          addRegexToken('SSS', match1to3, match3);
          var token, getSetMillisecond;
          for (token = 'SSSS'; token.length <= 9; token += 'S')
            addRegexToken(token, matchUnsigned);
          function parseMs(input, array) {
            array[MILLISECOND] = toInt(('0.' + input) * 1000);
          }
          for (token = 'S'; token.length <= 9; token += 'S')
            addParseToken(token, parseMs);
          getSetMillisecond = makeGetSet('Milliseconds', false);
          // FORMATTING
          addFormatToken('z', 0, 0, 'zoneAbbr');
          addFormatToken('zz', 0, 0, 'zoneName');
          // MOMENTS
          function getZoneAbbr() {
            return this._isUTC ? 'UTC' : '';
          }
          function getZoneName() {
            return this._isUTC ? 'Coordinated Universal Time' : '';
          }
          var proto = Moment.prototype;
          proto.add = add;
          proto.calendar = calendar$1;
          proto.clone = clone;
          proto.diff = diff;
          proto.endOf = endOf;
          proto.format = format;
          proto.from = from;
          proto.fromNow = fromNow;
          proto.to = to;
          proto.toNow = toNow;
          proto.get = stringGet;
          proto.invalidAt = invalidAt;
          proto.isAfter = isAfter;
          proto.isBefore = isBefore;
          proto.isBetween = isBetween;
          proto.isSame = isSame;
          proto.isSameOrAfter = isSameOrAfter;
          proto.isSameOrBefore = isSameOrBefore;
          proto.isValid = isValid$2;
          proto.lang = lang;
          proto.locale = locale;
          proto.localeData = localeData;
          proto.max = prototypeMax;
          proto.min = prototypeMin;
          proto.parsingFlags = parsingFlags;
          proto.set = stringSet;
          proto.startOf = startOf;
          proto.subtract = subtract;
          proto.toArray = toArray;
          proto.toObject = toObject;
          proto.toDate = toDate;
          proto.toISOString = toISOString;
          proto.inspect = inspect;
          if (typeof Symbol !== 'undefined' && Symbol.for != null)
            proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
              return 'Moment<' + this.format() + '>';
            };
          proto.toJSON = toJSON;
          proto.toString = toString;
          proto.unix = unix;
          proto.valueOf = valueOf;
          proto.creationData = creationData;
          proto.eraName = getEraName;
          proto.eraNarrow = getEraNarrow;
          proto.eraAbbr = getEraAbbr;
          proto.eraYear = getEraYear;
          proto.year = getSetYear;
          proto.isLeapYear = getIsLeapYear;
          proto.weekYear = getSetWeekYear;
          proto.isoWeekYear = getSetISOWeekYear;
          proto.quarter = proto.quarters = getSetQuarter;
          proto.month = getSetMonth;
          proto.daysInMonth = getDaysInMonth;
          proto.week = proto.weeks = getSetWeek;
          proto.isoWeek = proto.isoWeeks = getSetISOWeek;
          proto.weeksInYear = getWeeksInYear;
          proto.weeksInWeekYear = getWeeksInWeekYear;
          proto.isoWeeksInYear = getISOWeeksInYear;
          proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
          proto.date = getSetDayOfMonth;
          proto.day = proto.days = getSetDayOfWeek;
          proto.weekday = getSetLocaleDayOfWeek;
          proto.isoWeekday = getSetISODayOfWeek;
          proto.dayOfYear = getSetDayOfYear;
          proto.hour = proto.hours = getSetHour;
          proto.minute = proto.minutes = getSetMinute;
          proto.second = proto.seconds = getSetSecond;
          proto.millisecond = proto.milliseconds = getSetMillisecond;
          proto.utcOffset = getSetOffset;
          proto.utc = setOffsetToUTC;
          proto.local = setOffsetToLocal;
          proto.parseZone = setOffsetToParsedOffset;
          proto.hasAlignedHourOffset = hasAlignedHourOffset;
          proto.isDST = isDaylightSavingTime;
          proto.isLocal = isLocal;
          proto.isUtcOffset = isUtcOffset;
          proto.isUtc = isUtc;
          proto.isUTC = isUtc;
          proto.zoneAbbr = getZoneAbbr;
          proto.zoneName = getZoneName;
          proto.dates = deprecate(
            'dates accessor is deprecated. Use date instead.',
            getSetDayOfMonth
          );
          proto.months = deprecate(
            'months accessor is deprecated. Use month instead',
            getSetMonth
          );
          proto.years = deprecate(
            'years accessor is deprecated. Use year instead',
            getSetYear
          );
          proto.zone = deprecate(
            'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
            getSetZone
          );
          proto.isDSTShifted = deprecate(
            'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
            isDaylightSavingTimeShifted
          );
          function createUnix(input) {
            return createLocal(input * 1000);
          }
          function createInZone() {
            return createLocal.apply(null, arguments).parseZone();
          }
          function preParsePostFormat(string) {
            return string;
          }
          var proto$1 = Locale.prototype;
          proto$1.calendar = calendar;
          proto$1.longDateFormat = longDateFormat;
          proto$1.invalidDate = invalidDate;
          proto$1.ordinal = ordinal;
          proto$1.preparse = preParsePostFormat;
          proto$1.postformat = preParsePostFormat;
          proto$1.relativeTime = relativeTime;
          proto$1.pastFuture = pastFuture;
          proto$1.set = set;
          proto$1.eras = localeEras;
          proto$1.erasParse = localeErasParse;
          proto$1.erasConvertYear = localeErasConvertYear;
          proto$1.erasAbbrRegex = erasAbbrRegex;
          proto$1.erasNameRegex = erasNameRegex;
          proto$1.erasNarrowRegex = erasNarrowRegex;
          proto$1.months = localeMonths;
          proto$1.monthsShort = localeMonthsShort;
          proto$1.monthsParse = localeMonthsParse;
          proto$1.monthsRegex = monthsRegex;
          proto$1.monthsShortRegex = monthsShortRegex;
          proto$1.week = localeWeek;
          proto$1.firstDayOfYear = localeFirstDayOfYear;
          proto$1.firstDayOfWeek = localeFirstDayOfWeek;
          proto$1.weekdays = localeWeekdays;
          proto$1.weekdaysMin = localeWeekdaysMin;
          proto$1.weekdaysShort = localeWeekdaysShort;
          proto$1.weekdaysParse = localeWeekdaysParse;
          proto$1.weekdaysRegex = weekdaysRegex;
          proto$1.weekdaysShortRegex = weekdaysShortRegex;
          proto$1.weekdaysMinRegex = weekdaysMinRegex;
          proto$1.isPM = localeIsPM;
          proto$1.meridiem = localeMeridiem;
          function get$1(format, index, field, setter) {
            var locale = getLocale(),
              utc = createUTC().set(setter, index);
            return locale[field](utc, format);
          }
          function listMonthsImpl(format, index, field) {
            if (isNumber(format)) {
              index = format;
              format = undefined;
            }
            format = format || '';
            if (index != null) return get$1(format, index, field, 'month');
            var i,
              out = [];
            for (i = 0; i < 12; i++) out[i] = get$1(format, i, field, 'month');
            return out;
          }
          // ()
          // (5)
          // (fmt, 5)
          // (fmt)
          // (true)
          // (true, 5)
          // (true, fmt, 5)
          // (true, fmt)
          function listWeekdaysImpl(localeSorted, format, index, field) {
            if (typeof localeSorted === 'boolean') {
              if (isNumber(format)) {
                index = format;
                format = undefined;
              }
              format = format || '';
            } else {
              format = localeSorted;
              index = format;
              localeSorted = false;
              if (isNumber(format)) {
                index = format;
                format = undefined;
              }
              format = format || '';
            }
            var locale = getLocale(),
              shift = localeSorted ? locale._week.dow : 0,
              i,
              out = [];
            if (index != null)
              return get$1(format, (index + shift) % 7, field, 'day');
            for (i = 0; i < 7; i++)
              out[i] = get$1(format, (i + shift) % 7, field, 'day');
            return out;
          }
          function listMonths(format, index) {
            return listMonthsImpl(format, index, 'months');
          }
          function listMonthsShort(format, index) {
            return listMonthsImpl(format, index, 'monthsShort');
          }
          function listWeekdays(localeSorted, format, index) {
            return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
          }
          function listWeekdaysShort(localeSorted, format, index) {
            return listWeekdaysImpl(
              localeSorted,
              format,
              index,
              'weekdaysShort'
            );
          }
          function listWeekdaysMin(localeSorted, format, index) {
            return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
          }
          getSetGlobalLocale('en', {
            eras: [
              {
                since: '0001-01-01',
                until: Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
              },
              {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
              },
            ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (number) {
              var b = number % 10,
                output =
                  toInt((number % 100) / 10) === 1
                    ? 'th'
                    : b === 1
                      ? 'st'
                      : b === 2
                        ? 'nd'
                        : b === 3
                          ? 'rd'
                          : 'th';
              return number + output;
            },
          });
          // Side effect imports
          hooks.lang = deprecate(
            'moment.lang is deprecated. Use moment.locale instead.',
            getSetGlobalLocale
          );
          hooks.langData = deprecate(
            'moment.langData is deprecated. Use moment.localeData instead.',
            getLocale
          );
          var mathAbs = Math.abs;
          function abs() {
            var data = this._data;
            this._milliseconds = mathAbs(this._milliseconds);
            this._days = mathAbs(this._days);
            this._months = mathAbs(this._months);
            data.milliseconds = mathAbs(data.milliseconds);
            data.seconds = mathAbs(data.seconds);
            data.minutes = mathAbs(data.minutes);
            data.hours = mathAbs(data.hours);
            data.months = mathAbs(data.months);
            data.years = mathAbs(data.years);
            return this;
          }
          function addSubtract$1(duration, input, value, direction) {
            var other = createDuration(input, value);
            duration._milliseconds += direction * other._milliseconds;
            duration._days += direction * other._days;
            duration._months += direction * other._months;
            return duration._bubble();
          }
          // supports only 2.0-style add(1, 's') or add(duration)
          function add$1(input, value) {
            return addSubtract$1(this, input, value, 1);
          }
          // supports only 2.0-style subtract(1, 's') or subtract(duration)
          function subtract$1(input, value) {
            return addSubtract$1(this, input, value, -1);
          }
          function absCeil(number) {
            if (number < 0) return Math.floor(number);
            else return Math.ceil(number);
          }
          function bubble() {
            var milliseconds = this._milliseconds,
              days = this._days,
              months = this._months,
              data = this._data,
              seconds,
              minutes,
              hours,
              years,
              monthsFromDays;
            // if we have a mix of positive and negative values, bubble down first
            // check: https://github.com/moment/moment/issues/2166
            if (
              !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
              )
            ) {
              milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
              days = 0;
              months = 0;
            }
            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;
            seconds = absFloor(milliseconds / 1000);
            data.seconds = seconds % 60;
            minutes = absFloor(seconds / 60);
            data.minutes = minutes % 60;
            hours = absFloor(minutes / 60);
            data.hours = hours % 24;
            days += absFloor(hours / 24);
            // convert days to months
            monthsFromDays = absFloor(daysToMonths(days));
            months += monthsFromDays;
            days -= absCeil(monthsToDays(monthsFromDays));
            // 12 months -> 1 year
            years = absFloor(months / 12);
            months %= 12;
            data.days = days;
            data.months = months;
            data.years = years;
            return this;
          }
          function daysToMonths(days) {
            // 400 years have 146097 days (taking into account leap year rules)
            // 400 years have 12 months === 4800
            return (days * 4800) / 146097;
          }
          function monthsToDays(months) {
            // the reverse of daysToMonths
            return (months * 146097) / 4800;
          }
          function as(units) {
            if (!this.isValid()) return NaN;
            var days,
              months,
              milliseconds = this._milliseconds;
            units = normalizeUnits(units);
            if (units === 'month' || units === 'quarter' || units === 'year') {
              days = this._days + milliseconds / 864e5;
              months = this._months + daysToMonths(days);
              switch (units) {
                case 'month':
                  return months;
                case 'quarter':
                  return months / 3;
                case 'year':
                  return months / 12;
              }
            } else {
              // handle milliseconds separately because of floating point math errors (issue #1867)
              days = this._days + Math.round(monthsToDays(this._months));
              switch (units) {
                case 'week':
                  return days / 7 + milliseconds / 6048e5;
                case 'day':
                  return days + milliseconds / 864e5;
                case 'hour':
                  return days * 24 + milliseconds / 36e5;
                case 'minute':
                  return days * 1440 + milliseconds / 6e4;
                case 'second':
                  return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                  return Math.floor(days * 864e5) + milliseconds;
                default:
                  throw new Error('Unknown unit ' + units);
              }
            }
          }
          function makeAs(alias) {
            return function () {
              return this.as(alias);
            };
          }
          var asMilliseconds = makeAs('ms'),
            asSeconds = makeAs('s'),
            asMinutes = makeAs('m'),
            asHours = makeAs('h'),
            asDays = makeAs('d'),
            asWeeks = makeAs('w'),
            asMonths = makeAs('M'),
            asQuarters = makeAs('Q'),
            asYears = makeAs('y'),
            valueOf$1 = asMilliseconds;
          function clone$1() {
            return createDuration(this);
          }
          function get$2(units) {
            units = normalizeUnits(units);
            return this.isValid() ? this[units + 's']() : NaN;
          }
          function makeGetter(name) {
            return function () {
              return this.isValid() ? this._data[name] : NaN;
            };
          }
          var milliseconds = makeGetter('milliseconds'),
            seconds = makeGetter('seconds'),
            minutes = makeGetter('minutes'),
            hours = makeGetter('hours'),
            days = makeGetter('days'),
            months = makeGetter('months'),
            years = makeGetter('years');
          function weeks() {
            return absFloor(this.days() / 7);
          }
          var round = Math.round,
            thresholds = {
              ss: 44,
              s: 45,
              m: 45,
              h: 22,
              d: 26,
              w: null,
              M: 11,
            };
          // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
          function substituteTimeAgo(
            string,
            number,
            withoutSuffix,
            isFuture,
            locale
          ) {
            return locale.relativeTime(
              number || 1,
              !!withoutSuffix,
              string,
              isFuture
            );
          }
          function relativeTime$1(
            posNegDuration,
            withoutSuffix,
            thresholds,
            locale
          ) {
            var duration = createDuration(posNegDuration).abs(),
              seconds = round(duration.as('s')),
              minutes = round(duration.as('m')),
              hours = round(duration.as('h')),
              days = round(duration.as('d')),
              months = round(duration.as('M')),
              weeks = round(duration.as('w')),
              years = round(duration.as('y')),
              a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);
            if (thresholds.w != null)
              a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
            a = a ||
              (months <= 1 && ['M']) ||
              (months < thresholds.M && ['MM', months]) ||
              (years <= 1 && ['y']) || ['yy', years];
            a[2] = withoutSuffix;
            a[3] = +posNegDuration > 0;
            a[4] = locale;
            return substituteTimeAgo.apply(null, a);
          }
          // This function allows you to set the rounding function for relative time strings
          function getSetRelativeTimeRounding(roundingFunction) {
            if (roundingFunction === undefined) return round;
            if (typeof roundingFunction === 'function') {
              round = roundingFunction;
              return true;
            }
            return false;
          }
          // This function allows you to set a threshold for relative time strings
          function getSetRelativeTimeThreshold(threshold, limit) {
            if (thresholds[threshold] === undefined) return false;
            if (limit === undefined) return thresholds[threshold];
            thresholds[threshold] = limit;
            if (threshold === 's') thresholds.ss = limit - 1;
            return true;
          }
          function humanize(argWithSuffix, argThresholds) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var withSuffix = false,
              th = thresholds,
              locale,
              output;
            if (typeof argWithSuffix === 'object') {
              argThresholds = argWithSuffix;
              argWithSuffix = false;
            }
            if (typeof argWithSuffix === 'boolean') withSuffix = argWithSuffix;
            if (typeof argThresholds === 'object') {
              th = Object.assign({}, thresholds, argThresholds);
              if (argThresholds.s != null && argThresholds.ss == null)
                th.ss = argThresholds.s - 1;
            }
            locale = this.localeData();
            output = relativeTime$1(this, !withSuffix, th, locale);
            if (withSuffix) output = locale.pastFuture(+this, output);
            return locale.postformat(output);
          }
          var abs$1 = Math.abs;
          function sign(x) {
            return (x > 0) - (x < 0) || +x;
          }
          function toISOString$1() {
            // for ISO strings we do not use the normal bubbling rules:
            //  * milliseconds bubble up until they become hours
            //  * days do not bubble at all
            //  * months bubble up until they become years
            // This is because there is no context-free conversion between hours and days
            // (think of clock changes)
            // and also not between days and months (28-31 days per month)
            if (!this.isValid()) return this.localeData().invalidDate();
            var seconds = abs$1(this._milliseconds) / 1000,
              days = abs$1(this._days),
              months = abs$1(this._months),
              minutes,
              hours,
              years,
              s,
              total = this.asSeconds(),
              totalSign,
              ymSign,
              daysSign,
              hmsSign;
            if (!total)
              // this is the same as C#'s (Noda) and python (isodate)...
              // but not other JS (goog.date)
              return 'P0D';
            // 3600 seconds -> 60 minutes -> 1 hour
            minutes = absFloor(seconds / 60);
            hours = absFloor(minutes / 60);
            seconds %= 60;
            minutes %= 60;
            // 12 months -> 1 year
            years = absFloor(months / 12);
            months %= 12;
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
            totalSign = total < 0 ? '-' : '';
            ymSign = sign(this._months) !== sign(total) ? '-' : '';
            daysSign = sign(this._days) !== sign(total) ? '-' : '';
            hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
            return (
              totalSign +
              'P' +
              (years ? ymSign + years + 'Y' : '') +
              (months ? ymSign + months + 'M' : '') +
              (days ? daysSign + days + 'D' : '') +
              (hours || minutes || seconds ? 'T' : '') +
              (hours ? hmsSign + hours + 'H' : '') +
              (minutes ? hmsSign + minutes + 'M' : '') +
              (seconds ? hmsSign + s + 'S' : '')
            );
          }
          var proto$2 = Duration.prototype;
          proto$2.isValid = isValid$1;
          proto$2.abs = abs;
          proto$2.add = add$1;
          proto$2.subtract = subtract$1;
          proto$2.as = as;
          proto$2.asMilliseconds = asMilliseconds;
          proto$2.asSeconds = asSeconds;
          proto$2.asMinutes = asMinutes;
          proto$2.asHours = asHours;
          proto$2.asDays = asDays;
          proto$2.asWeeks = asWeeks;
          proto$2.asMonths = asMonths;
          proto$2.asQuarters = asQuarters;
          proto$2.asYears = asYears;
          proto$2.valueOf = valueOf$1;
          proto$2._bubble = bubble;
          proto$2.clone = clone$1;
          proto$2.get = get$2;
          proto$2.milliseconds = milliseconds;
          proto$2.seconds = seconds;
          proto$2.minutes = minutes;
          proto$2.hours = hours;
          proto$2.days = days;
          proto$2.weeks = weeks;
          proto$2.months = months;
          proto$2.years = years;
          proto$2.humanize = humanize;
          proto$2.toISOString = toISOString$1;
          proto$2.toString = toISOString$1;
          proto$2.toJSON = toISOString$1;
          proto$2.locale = locale;
          proto$2.localeData = localeData;
          proto$2.toIsoString = deprecate(
            'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
            toISOString$1
          );
          proto$2.lang = lang;
          // FORMATTING
          addFormatToken('X', 0, 0, 'unix');
          addFormatToken('x', 0, 0, 'valueOf');
          // PARSING
          addRegexToken('x', matchSigned);
          addRegexToken('X', matchTimestamp);
          addParseToken('X', function (input, array, config) {
            config._d = new Date(parseFloat(input) * 1000);
          });
          addParseToken('x', function (input, array, config) {
            config._d = new Date(toInt(input));
          });
          //! moment.js
          hooks.version = '2.30.1';
          setHookCallback(createLocal);
          hooks.fn = proto;
          hooks.min = min;
          hooks.max = max;
          hooks.now = now;
          hooks.utc = createUTC;
          hooks.unix = createUnix;
          hooks.months = listMonths;
          hooks.isDate = isDate;
          hooks.locale = getSetGlobalLocale;
          hooks.invalid = createInvalid;
          hooks.duration = createDuration;
          hooks.isMoment = isMoment;
          hooks.weekdays = listWeekdays;
          hooks.parseZone = createInZone;
          hooks.localeData = getLocale;
          hooks.isDuration = isDuration;
          hooks.monthsShort = listMonthsShort;
          hooks.weekdaysMin = listWeekdaysMin;
          hooks.defineLocale = defineLocale;
          hooks.updateLocale = updateLocale;
          hooks.locales = listLocales;
          hooks.weekdaysShort = listWeekdaysShort;
          hooks.normalizeUnits = normalizeUnits;
          hooks.relativeTimeRounding = getSetRelativeTimeRounding;
          hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
          hooks.calendarFormat = getCalendarFormat;
          hooks.prototype = proto;
          // currently HTML5 input type only supports 24-hour formats
          hooks.HTML5_FMT = {
            DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
            DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
            DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
            DATE: 'YYYY-MM-DD',
            TIME: 'HH:mm',
            TIME_SECONDS: 'HH:mm:ss',
            TIME_MS: 'HH:mm:ss.SSS',
            WEEK: 'GGGG-[W]WW',
            MONTH: 'YYYY-MM',
          };
          return hooks;
        });
      },
      {},
    ],
    gd1cm: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'createPayment', () => createPayment);
        var _axios = require('axios');
        var _axiosDefault = parcelHelpers.interopDefault(_axios);
        var _alert = require('./alert');
        var _moment = require('moment');
        var _momentDefault = parcelHelpers.interopDefault(_moment);
        // Create Payment
        const createPayment = async (booking_Id, total_amount) => {
          try {
            const res = await (0, _axiosDefault.default)({
              method: 'POST',
              url: `/api/v1/payment/create-session/${booking_Id}`,
              data: {
                booking_id: booking_Id,
                total_amount: total_amount,
              },
            });
            if (res.data.status === 'success')
              window.location.href = res.data.session.url;
          } catch (err) {
            if (err.response)
              (0, _alert.showAlert)('error', err.response.data.message);
            else {
              // Response untracked
              (0, _alert.showAlert)(
                'error',
                'An unexpected error occurred. Please try again.'
              );
              console.error('Error without response:', err); // Log to debug
            }
          }
        };
      },
      {
        axios: 'gIwns',
        './alert': 'cixZ4',
        moment: '28SLz',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '2W2Tb': [
      function (require, module, exports, __globalThis) {
        // Import Firebase from node_modules
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'app', () => app);
        parcelHelpers.export(exports, 'messaging', () => messaging);
        parcelHelpers.export(
          exports,
          'requestPermission',
          () => requestPermission
        );
        var _app = require('firebase/app');
        var _messaging = require('firebase/messaging');
        // Config Firebase
        const firebaseConfig = {
          apiKey: 'AIzaSyDJULo-995uQKeHIu4Do8sLXY9u4sHHgaM',
          authDomain: 'vmo-hotel-booking.firebaseapp.com',
          projectId: 'vmo-hotel-booking',
          storageBucket: 'vmo-hotel-booking.firebasestorage.app',
          messagingSenderId: '474000085398',
          appId: '1:474000085398:web:ec3d3a97bdaf36a2a5cdb7',
          measurementId: 'G-E5G5GWMXZ8',
        };
        // Init Firebase
        const app = (0, _app.initializeApp)(firebaseConfig);
        const messaging = (0, _messaging.getMessaging)(app);
        // Register Service Worker
        if ('serviceWorker' in navigator)
          navigator.serviceWorker
            .register(require('42bcb300e8050e55')) // Path to public/
            .then((registration) => {
              console.log('Service Worker registered:', registration);
            })
            .catch((error) => {
              console.error('Service Worker register failed:', error);
            });
        // Request notification
        async function requestPermission() {
          try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
              console.log('Notification permission granted.');
              // Grant FCM Token
              const token = await (0, _messaging.getToken)(messaging, {
                vapidKey:
                  'BGXzfKANCVJy0r9OuS1C-99J6Zp-jT0jtX_lBgQu0Nfw7PkIR8BDQ7C3mM7C1fHt4uDZdSFL9jXlnE5Vu8etHNk',
              });
              console.log('FCM Token:', token);
            } else console.warn('Notification permission denied.');
          } catch (error) {
            console.error('Error requesting permission:', error);
          }
        }
        // While opening
        (0, _messaging.onMessage)(messaging, (payload) => {
          console.log('Message received:', payload);
          new Notification(payload.notification.title, {
            body: payload.notification.body,
            icon: '/icon.png',
          });
        });
      },
      {
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
        'firebase/app': 'fGINY',
        'firebase/messaging': 'meIiY',
        '42bcb300e8050e55': 'iFfyI',
      },
    ],
    fGINY: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _app = require('@firebase/app');
        parcelHelpers.exportAll(_app, exports);
        var name = 'firebase';
        var version = '11.4.0';
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ (0, _app.registerVersion)(name, version, 'app');
      },
      {
        '@firebase/app': '4yol4',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '4yol4': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(
          exports,
          'FirebaseError',
          () => (0, _util.FirebaseError)
        );
        parcelHelpers.export(exports, 'SDK_VERSION', () => SDK_VERSION);
        parcelHelpers.export(
          exports,
          '_DEFAULT_ENTRY_NAME',
          () => DEFAULT_ENTRY_NAME
        );
        parcelHelpers.export(exports, '_addComponent', () => _addComponent);
        parcelHelpers.export(
          exports,
          '_addOrOverwriteComponent',
          () => _addOrOverwriteComponent
        );
        parcelHelpers.export(exports, '_apps', () => _apps);
        parcelHelpers.export(
          exports,
          '_clearComponents',
          () => _clearComponents
        );
        parcelHelpers.export(exports, '_components', () => _components);
        parcelHelpers.export(exports, '_getProvider', () => _getProvider);
        parcelHelpers.export(exports, '_isFirebaseApp', () => _isFirebaseApp);
        parcelHelpers.export(
          exports,
          '_isFirebaseServerApp',
          () => _isFirebaseServerApp
        );
        parcelHelpers.export(
          exports,
          '_registerComponent',
          () => _registerComponent
        );
        parcelHelpers.export(
          exports,
          '_removeServiceInstance',
          () => _removeServiceInstance
        );
        parcelHelpers.export(exports, '_serverApps', () => _serverApps);
        parcelHelpers.export(exports, 'deleteApp', () => deleteApp);
        parcelHelpers.export(exports, 'getApp', () => getApp);
        parcelHelpers.export(exports, 'getApps', () => getApps);
        parcelHelpers.export(exports, 'initializeApp', () => initializeApp);
        parcelHelpers.export(
          exports,
          'initializeServerApp',
          () => initializeServerApp
        );
        parcelHelpers.export(exports, 'onLog', () => onLog);
        parcelHelpers.export(exports, 'registerVersion', () => registerVersion);
        parcelHelpers.export(exports, 'setLogLevel', () => setLogLevel);
        var _component = require('@firebase/component');
        var _logger = require('@firebase/logger');
        var _util = require('@firebase/util');
        var _idb = require('idb');
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ class PlatformLoggerServiceImpl {
          constructor(container) {
            this.container = container;
          }
          // In initial implementation, this will be called by installations on
          // auth token refresh, and installations will send this string.
          getPlatformInfoString() {
            const providers = this.container.getProviders();
            // Loop through providers and get library/version pairs from any that are
            // version components.
            return providers
              .map((provider) => {
                if (isVersionServiceProvider(provider)) {
                  const service = provider.getImmediate();
                  return `${service.library}/${service.version}`;
                } else return null;
              })
              .filter((logString) => logString)
              .join(' ');
          }
        }
        /**
         *
         * @param provider check if this provider provides a VersionService
         *
         * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
         * provides VersionService. The provider is not necessarily a 'app-version'
         * provider.
         */ function isVersionServiceProvider(provider) {
          const component = provider.getComponent();
          return (
            (component === null || component === void 0
              ? void 0
              : component.type) === 'VERSION' /* ComponentType.VERSION */
          );
        }
        const name$q = '@firebase/app';
        const version$1 = '0.11.2';
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const logger = new (0, _logger.Logger)('@firebase/app');
        const name$p = '@firebase/app-compat';
        const name$o = '@firebase/analytics-compat';
        const name$n = '@firebase/analytics';
        const name$m = '@firebase/app-check-compat';
        const name$l = '@firebase/app-check';
        const name$k = '@firebase/auth';
        const name$j = '@firebase/auth-compat';
        const name$i = '@firebase/database';
        const name$h = '@firebase/data-connect';
        const name$g = '@firebase/database-compat';
        const name$f = '@firebase/functions';
        const name$e = '@firebase/functions-compat';
        const name$d = '@firebase/installations';
        const name$c = '@firebase/installations-compat';
        const name$b = '@firebase/messaging';
        const name$a = '@firebase/messaging-compat';
        const name$9 = '@firebase/performance';
        const name$8 = '@firebase/performance-compat';
        const name$7 = '@firebase/remote-config';
        const name$6 = '@firebase/remote-config-compat';
        const name$5 = '@firebase/storage';
        const name$4 = '@firebase/storage-compat';
        const name$3 = '@firebase/firestore';
        const name$2 = '@firebase/vertexai';
        const name$1 = '@firebase/firestore-compat';
        const name = 'firebase';
        const version = '11.4.0';
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * The default app name
         *
         * @internal
         */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
        const PLATFORM_LOG_STRING = {
          [name$q]: 'fire-core',
          [name$p]: 'fire-core-compat',
          [name$n]: 'fire-analytics',
          [name$o]: 'fire-analytics-compat',
          [name$l]: 'fire-app-check',
          [name$m]: 'fire-app-check-compat',
          [name$k]: 'fire-auth',
          [name$j]: 'fire-auth-compat',
          [name$i]: 'fire-rtdb',
          [name$h]: 'fire-data-connect',
          [name$g]: 'fire-rtdb-compat',
          [name$f]: 'fire-fn',
          [name$e]: 'fire-fn-compat',
          [name$d]: 'fire-iid',
          [name$c]: 'fire-iid-compat',
          [name$b]: 'fire-fcm',
          [name$a]: 'fire-fcm-compat',
          [name$9]: 'fire-perf',
          [name$8]: 'fire-perf-compat',
          [name$7]: 'fire-rc',
          [name$6]: 'fire-rc-compat',
          [name$5]: 'fire-gcs',
          [name$4]: 'fire-gcs-compat',
          [name$3]: 'fire-fst',
          [name$1]: 'fire-fst-compat',
          [name$2]: 'fire-vertex',
          'fire-js': 'fire-js',
          [name]: 'fire-js-all',
        };
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * @internal
         */ const _apps = new Map();
        /**
         * @internal
         */ const _serverApps = new Map();
        /**
         * Registered components.
         *
         * @internal
         */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const _components = new Map();
        /**
         * @param component - the component being added to this app's container
         *
         * @internal
         */ function _addComponent(app, component) {
          try {
            app.container.addComponent(component);
          } catch (e) {
            logger.debug(
              `Component ${component.name} failed to register with FirebaseApp ${app.name}`,
              e
            );
          }
        }
        /**
         *
         * @internal
         */ function _addOrOverwriteComponent(app, component) {
          app.container.addOrOverwriteComponent(component);
        }
        /**
         *
         * @param component - the component to register
         * @returns whether or not the component is registered successfully
         *
         * @internal
         */ function _registerComponent(component) {
          const componentName = component.name;
          if (_components.has(componentName)) {
            logger.debug(
              `There were multiple attempts to register component ${componentName}.`
            );
            return false;
          }
          _components.set(componentName, component);
          // add the component to existing app instances
          for (const app of _apps.values()) _addComponent(app, component);
          for (const serverApp of _serverApps.values())
            _addComponent(serverApp, component);
          return true;
        }
        /**
         *
         * @param app - FirebaseApp instance
         * @param name - service name
         *
         * @returns the provider for the service with the matching name
         *
         * @internal
         */ function _getProvider(app, name) {
          const heartbeatController = app.container
            .getProvider('heartbeat')
            .getImmediate({
              optional: true,
            });
          if (heartbeatController) heartbeatController.triggerHeartbeat();
          return app.container.getProvider(name);
        }
        /**
         *
         * @param app - FirebaseApp instance
         * @param name - service name
         * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
         *
         * @internal
         */ function _removeServiceInstance(
          app,
          name,
          instanceIdentifier = DEFAULT_ENTRY_NAME
        ) {
          _getProvider(app, name).clearInstance(instanceIdentifier);
        }
        /**
         *
         * @param obj - an object of type FirebaseApp or FirebaseOptions.
         *
         * @returns true if the provide object is of type FirebaseApp.
         *
         * @internal
         */ function _isFirebaseApp(obj) {
          return obj.options !== undefined;
        }
        /**
         *
         * @param obj - an object of type FirebaseApp.
         *
         * @returns true if the provided object is of type FirebaseServerAppImpl.
         *
         * @internal
         */ function _isFirebaseServerApp(obj) {
          if (obj === null || obj === undefined) return false;
          return obj.settings !== undefined;
        }
        /**
         * Test only
         *
         * @internal
         */ function _clearComponents() {
          _components.clear();
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const ERRORS = {
          ['no-app' /* AppError.NO_APP */]:
            "No Firebase App '{$appName}' has been created - call initializeApp() first",
          ['bad-app-name' /* AppError.BAD_APP_NAME */]:
            "Illegal App name: '{$appName}'",
          ['duplicate-app' /* AppError.DUPLICATE_APP */]:
            "Firebase App named '{$appName}' already exists with different options or config",
          ['app-deleted' /* AppError.APP_DELETED */]:
            "Firebase App named '{$appName}' already deleted",
          ['server-app-deleted' /* AppError.SERVER_APP_DELETED */]:
            'Firebase Server App has been deleted',
          ['no-options' /* AppError.NO_OPTIONS */]:
            'Need to provide options, when not being deployed to hosting via source.',
          ['invalid-app-argument' /* AppError.INVALID_APP_ARGUMENT */]:
            'firebase.{$appName}() takes either no argument or a Firebase App instance.',
          ['invalid-log-argument' /* AppError.INVALID_LOG_ARGUMENT */]:
            'First argument to `onLog` must be null or a function.',
          ['idb-open' /* AppError.IDB_OPEN */]:
            'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
          ['idb-get' /* AppError.IDB_GET */]:
            'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
          ['idb-set' /* AppError.IDB_WRITE */]:
            'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
          ['idb-delete' /* AppError.IDB_DELETE */]:
            'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
          ['finalization-registry-not-supported' /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */]:
            'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
          ['invalid-server-app-environment' /* AppError.INVALID_SERVER_APP_ENVIRONMENT */]:
            'FirebaseServerApp is not for use in browser environments.',
        };
        const ERROR_FACTORY = new (0, _util.ErrorFactory)(
          'app',
          'Firebase',
          ERRORS
        );
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ class FirebaseAppImpl {
          constructor(options, config, container) {
            this._isDeleted = false;
            this._options = Object.assign({}, options);
            this._config = Object.assign({}, config);
            this._name = config.name;
            this._automaticDataCollectionEnabled =
              config.automaticDataCollectionEnabled;
            this._container = container;
            this.container.addComponent(
              new (0, _component.Component)(
                'app',
                () => this,
                'PUBLIC' /* ComponentType.PUBLIC */
              )
            );
          }
          get automaticDataCollectionEnabled() {
            this.checkDestroyed();
            return this._automaticDataCollectionEnabled;
          }
          set automaticDataCollectionEnabled(val) {
            this.checkDestroyed();
            this._automaticDataCollectionEnabled = val;
          }
          get name() {
            this.checkDestroyed();
            return this._name;
          }
          get options() {
            this.checkDestroyed();
            return this._options;
          }
          get config() {
            this.checkDestroyed();
            return this._config;
          }
          get container() {
            return this._container;
          }
          get isDeleted() {
            return this._isDeleted;
          }
          set isDeleted(val) {
            this._isDeleted = val;
          }
          /**
           * This function will throw an Error if the App has already been deleted -
           * use before performing API actions on the App.
           */ checkDestroyed() {
            if (this.isDeleted)
              throw ERROR_FACTORY.create(
                'app-deleted' /* AppError.APP_DELETED */,
                {
                  appName: this._name,
                }
              );
          }
        }
        /**
         * @license
         * Copyright 2023 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ // Parse the token and check to see if the `exp` claim is in the future.
        // Reports an error to the console if the token or claim could not be parsed, or if `exp` is in
        // the past.
        function validateTokenTTL(base64Token, tokenName) {
          const secondPart = (0, _util.base64Decode)(base64Token.split('.')[1]);
          if (secondPart === null) {
            console.error(
              `FirebaseServerApp ${tokenName} is invalid: second part could not be parsed.`
            );
            return;
          }
          const expClaim = JSON.parse(secondPart).exp;
          if (expClaim === undefined) {
            console.error(
              `FirebaseServerApp ${tokenName} is invalid: expiration claim could not be parsed`
            );
            return;
          }
          const exp = JSON.parse(secondPart).exp * 1000;
          const now = new Date().getTime();
          const diff = exp - now;
          if (diff <= 0)
            console.error(
              `FirebaseServerApp ${tokenName} is invalid: the token has expired.`
            );
        }
        class FirebaseServerAppImpl extends FirebaseAppImpl {
          constructor(options, serverConfig, name, container) {
            // Build configuration parameters for the FirebaseAppImpl base class.
            const automaticDataCollectionEnabled =
              serverConfig.automaticDataCollectionEnabled !== undefined
                ? serverConfig.automaticDataCollectionEnabled
                : false;
            // Create the FirebaseAppSettings object for the FirebaseAppImp constructor.
            const config = {
              name,
              automaticDataCollectionEnabled,
            };
            if (options.apiKey !== undefined)
              // Construct the parent FirebaseAppImp object.
              super(options, config, container);
            else {
              const appImpl = options;
              super(appImpl.options, config, container);
            }
            // Now construct the data for the FirebaseServerAppImpl.
            this._serverConfig = Object.assign(
              {
                automaticDataCollectionEnabled,
              },
              serverConfig
            );
            // Ensure that the current time is within the `authIdtoken` window of validity.
            if (this._serverConfig.authIdToken)
              validateTokenTTL(this._serverConfig.authIdToken, 'authIdToken');
            // Ensure that the current time is within the `appCheckToken` window of validity.
            if (this._serverConfig.appCheckToken)
              validateTokenTTL(
                this._serverConfig.appCheckToken,
                'appCheckToken'
              );
            this._finalizationRegistry = null;
            if (typeof FinalizationRegistry !== 'undefined')
              this._finalizationRegistry = new FinalizationRegistry(() => {
                this.automaticCleanup();
              });
            this._refCount = 0;
            this.incRefCount(this._serverConfig.releaseOnDeref);
            // Do not retain a hard reference to the dref object, otherwise the FinalizationRegistry
            // will never trigger.
            this._serverConfig.releaseOnDeref = undefined;
            serverConfig.releaseOnDeref = undefined;
            registerVersion(name$q, version$1, 'serverapp');
          }
          toJSON() {
            return undefined;
          }
          get refCount() {
            return this._refCount;
          }
          // Increment the reference count of this server app. If an object is provided, register it
          // with the finalization registry.
          incRefCount(obj) {
            if (this.isDeleted) return;
            this._refCount++;
            if (obj !== undefined && this._finalizationRegistry !== null)
              this._finalizationRegistry.register(obj, this);
          }
          // Decrement the reference count.
          decRefCount() {
            if (this.isDeleted) return 0;
            return --this._refCount;
          }
          // Invoked by the FinalizationRegistry callback to note that this app should go through its
          // reference counts and delete itself if no reference count remain. The coordinating logic that
          // handles this is in deleteApp(...).
          automaticCleanup() {
            deleteApp(this);
          }
          get settings() {
            this.checkDestroyed();
            return this._serverConfig;
          }
          /**
           * This function will throw an Error if the App has already been deleted -
           * use before performing API actions on the App.
           */ checkDestroyed() {
            if (this.isDeleted)
              throw ERROR_FACTORY.create(
                'server-app-deleted' /* AppError.SERVER_APP_DELETED */
              );
          }
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * The current SDK version.
         *
         * @public
         */ const SDK_VERSION = version;
        function initializeApp(_options, rawConfig = {}) {
          let options = _options;
          if (typeof rawConfig !== 'object') {
            const name = rawConfig;
            rawConfig = {
              name,
            };
          }
          const config = Object.assign(
            {
              name: DEFAULT_ENTRY_NAME,
              automaticDataCollectionEnabled: false,
            },
            rawConfig
          );
          const name = config.name;
          if (typeof name !== 'string' || !name)
            throw ERROR_FACTORY.create(
              'bad-app-name' /* AppError.BAD_APP_NAME */,
              {
                appName: String(name),
              }
            );
          options || (options = (0, _util.getDefaultAppConfig)());
          if (!options)
            throw ERROR_FACTORY.create('no-options' /* AppError.NO_OPTIONS */);
          const existingApp = _apps.get(name);
          if (existingApp) {
            // return the existing app if options and config deep equal the ones in the existing app.
            if (
              (0, _util.deepEqual)(options, existingApp.options) &&
              (0, _util.deepEqual)(config, existingApp.config)
            )
              return existingApp;
            else
              throw ERROR_FACTORY.create(
                'duplicate-app' /* AppError.DUPLICATE_APP */,
                {
                  appName: name,
                }
              );
          }
          const container = new (0, _component.ComponentContainer)(name);
          for (const component of _components.values())
            container.addComponent(component);
          const newApp = new FirebaseAppImpl(options, config, container);
          _apps.set(name, newApp);
          return newApp;
        }
        function initializeServerApp(_options, _serverAppConfig) {
          if ((0, _util.isBrowser)() && !(0, _util.isWebWorker)())
            // FirebaseServerApp isn't designed to be run in browsers.
            throw ERROR_FACTORY.create(
              'invalid-server-app-environment' /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
            );
          if (_serverAppConfig.automaticDataCollectionEnabled === undefined)
            _serverAppConfig.automaticDataCollectionEnabled = false;
          let appOptions;
          if (_isFirebaseApp(_options)) appOptions = _options.options;
          else appOptions = _options;
          // Build an app name based on a hash of the configuration options.
          const nameObj = Object.assign(
            Object.assign({}, _serverAppConfig),
            appOptions
          );
          // However, Do not mangle the name based on releaseOnDeref, since it will vary between the
          // construction of FirebaseServerApp instances. For example, if the object is the request headers.
          if (nameObj.releaseOnDeref !== undefined)
            delete nameObj.releaseOnDeref;
          const hashCode = (s) => {
            return [...s].reduce(
              (hash, c) => (Math.imul(31, hash) + c.charCodeAt(0)) | 0,
              0
            );
          };
          if (_serverAppConfig.releaseOnDeref !== undefined) {
            if (typeof FinalizationRegistry === 'undefined')
              throw ERROR_FACTORY.create(
                'finalization-registry-not-supported' /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */,
                {}
              );
          }
          const nameString = '' + hashCode(JSON.stringify(nameObj));
          const existingApp = _serverApps.get(nameString);
          if (existingApp) {
            existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
            return existingApp;
          }
          const container = new (0, _component.ComponentContainer)(nameString);
          for (const component of _components.values())
            container.addComponent(component);
          const newApp = new FirebaseServerAppImpl(
            appOptions,
            _serverAppConfig,
            nameString,
            container
          );
          _serverApps.set(nameString, newApp);
          return newApp;
        }
        /**
         * Retrieves a {@link @firebase/app#FirebaseApp} instance.
         *
         * When called with no arguments, the default app is returned. When an app name
         * is provided, the app corresponding to that name is returned.
         *
         * An exception is thrown if the app being retrieved has not yet been
         * initialized.
         *
         * @example
         * ```javascript
         * // Return the default app
         * const app = getApp();
         * ```
         *
         * @example
         * ```javascript
         * // Return a named app
         * const otherApp = getApp("otherApp");
         * ```
         *
         * @param name - Optional name of the app to return. If no name is
         *   provided, the default is `"[DEFAULT]"`.
         *
         * @returns The app corresponding to the provided app name.
         *   If no app name is provided, the default app is returned.
         *
         * @public
         */ function getApp(name = DEFAULT_ENTRY_NAME) {
          const app = _apps.get(name);
          if (
            !app &&
            name === DEFAULT_ENTRY_NAME &&
            (0, _util.getDefaultAppConfig)()
          )
            return initializeApp();
          if (!app)
            throw ERROR_FACTORY.create('no-app' /* AppError.NO_APP */, {
              appName: name,
            });
          return app;
        }
        /**
         * A (read-only) array of all initialized apps.
         * @public
         */ function getApps() {
          return Array.from(_apps.values());
        }
        /**
         * Renders this app unusable and frees the resources of all associated
         * services.
         *
         * @example
         * ```javascript
         * deleteApp(app)
         *   .then(function() {
         *     console.log("App deleted successfully");
         *   })
         *   .catch(function(error) {
         *     console.log("Error deleting app:", error);
         *   });
         * ```
         *
         * @public
         */ async function deleteApp(app) {
          let cleanupProviders = false;
          const name = app.name;
          if (_apps.has(name)) {
            cleanupProviders = true;
            _apps.delete(name);
          } else if (_serverApps.has(name)) {
            const firebaseServerApp = app;
            if (firebaseServerApp.decRefCount() <= 0) {
              _serverApps.delete(name);
              cleanupProviders = true;
            }
          }
          if (cleanupProviders) {
            await Promise.all(
              app.container.getProviders().map((provider) => provider.delete())
            );
            app.isDeleted = true;
          }
        }
        /**
         * Registers a library's name and version for platform logging purposes.
         * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
         * @param version - Current version of that library.
         * @param variant - Bundle variant, e.g., node, rn, etc.
         *
         * @public
         */ function registerVersion(libraryKeyOrName, version, variant) {
          var _a;
          // TODO: We can use this check to whitelist strings when/if we set up
          // a good whitelist system.
          let library =
            (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null &&
            _a !== void 0
              ? _a
              : libraryKeyOrName;
          if (variant) library += `-${variant}`;
          const libraryMismatch = library.match(/\s|\//);
          const versionMismatch = version.match(/\s|\//);
          if (libraryMismatch || versionMismatch) {
            const warning = [
              `Unable to register library "${library}" with version "${version}":`,
            ];
            if (libraryMismatch)
              warning.push(
                `library name "${library}" contains illegal characters (whitespace or "/")`
              );
            if (libraryMismatch && versionMismatch) warning.push('and');
            if (versionMismatch)
              warning.push(
                `version name "${version}" contains illegal characters (whitespace or "/")`
              );
            logger.warn(warning.join(' '));
            return;
          }
          _registerComponent(
            new (0, _component.Component)(
              `${library}-version`,
              () => ({
                library,
                version,
              }),
              'VERSION' /* ComponentType.VERSION */
            )
          );
        }
        /**
         * Sets log handler for all Firebase SDKs.
         * @param logCallback - An optional custom log handler that executes user code whenever
         * the Firebase SDK makes a logging call.
         *
         * @public
         */ function onLog(logCallback, options) {
          if (logCallback !== null && typeof logCallback !== 'function')
            throw ERROR_FACTORY.create(
              'invalid-log-argument' /* AppError.INVALID_LOG_ARGUMENT */
            );
          (0, _logger.setUserLogHandler)(logCallback, options);
        }
        /**
         * Sets log level for all Firebase SDKs.
         *
         * All of the log types above the current log level are captured (i.e. if
         * you set the log level to `info`, errors are logged, but `debug` and
         * `verbose` logs are not).
         *
         * @public
         */ function setLogLevel(logLevel) {
          (0, _logger.setLogLevel)(logLevel);
        }
        /**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const DB_NAME = 'firebase-heartbeat-database';
        const DB_VERSION = 1;
        const STORE_NAME = 'firebase-heartbeat-store';
        let dbPromise = null;
        function getDbPromise() {
          if (!dbPromise)
            dbPromise = (0, _idb.openDB)(DB_NAME, DB_VERSION, {
              upgrade: (db, oldVersion) => {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                  case 0:
                    try {
                      db.createObjectStore(STORE_NAME);
                    } catch (e) {
                      // Safari/iOS browsers throw occasional exceptions on
                      // db.createObjectStore() that may be a bug. Avoid blocking
                      // the rest of the app functionality.
                      console.warn(e);
                    }
                }
              },
            }).catch((e) => {
              throw ERROR_FACTORY.create('idb-open' /* AppError.IDB_OPEN */, {
                originalErrorMessage: e.message,
              });
            });
          return dbPromise;
        }
        async function readHeartbeatsFromIndexedDB(app) {
          try {
            const db = await getDbPromise();
            const tx = db.transaction(STORE_NAME);
            const result = await tx
              .objectStore(STORE_NAME)
              .get(computeKey(app));
            // We already have the value but tx.done can throw,
            // so we need to await it here to catch errors
            await tx.done;
            return result;
          } catch (e) {
            if (e instanceof (0, _util.FirebaseError)) logger.warn(e.message);
            else {
              const idbGetError = ERROR_FACTORY.create(
                'idb-get' /* AppError.IDB_GET */,
                {
                  originalErrorMessage:
                    e === null || e === void 0 ? void 0 : e.message,
                }
              );
              logger.warn(idbGetError.message);
            }
          }
        }
        async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
          try {
            const db = await getDbPromise();
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const objectStore = tx.objectStore(STORE_NAME);
            await objectStore.put(heartbeatObject, computeKey(app));
            await tx.done;
          } catch (e) {
            if (e instanceof (0, _util.FirebaseError)) logger.warn(e.message);
            else {
              const idbGetError = ERROR_FACTORY.create(
                'idb-set' /* AppError.IDB_WRITE */,
                {
                  originalErrorMessage:
                    e === null || e === void 0 ? void 0 : e.message,
                }
              );
              logger.warn(idbGetError.message);
            }
          }
        }
        function computeKey(app) {
          return `${app.name}!${app.options.appId}`;
        }
        /**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const MAX_HEADER_BYTES = 1024;
        const MAX_NUM_STORED_HEARTBEATS = 30;
        class HeartbeatServiceImpl {
          constructor(container) {
            this.container = container;
            /**
             * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
             * the header string.
             * Stores one record per date. This will be consolidated into the standard
             * format of one record per user agent string before being sent as a header.
             * Populated from indexedDB when the controller is instantiated and should
             * be kept in sync with indexedDB.
             * Leave public for easier testing.
             */ this._heartbeatsCache = null;
            const app = this.container.getProvider('app').getImmediate();
            this._storage = new HeartbeatStorageImpl(app);
            this._heartbeatsCachePromise = this._storage
              .read()
              .then((result) => {
                this._heartbeatsCache = result;
                return result;
              });
          }
          /**
           * Called to report a heartbeat. The function will generate
           * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
           * to IndexedDB.
           * Note that we only store one heartbeat per day. So if a heartbeat for today is
           * already logged, subsequent calls to this function in the same day will be ignored.
           */ async triggerHeartbeat() {
            var _a, _b;
            try {
              const platformLogger = this.container
                .getProvider('platform-logger')
                .getImmediate();
              // This is the "Firebase user agent" string from the platform logger
              // service, not the browser user agent.
              const agent = platformLogger.getPlatformInfoString();
              const date = getUTCDateString();
              if (
                ((_a = this._heartbeatsCache) === null || _a === void 0
                  ? void 0
                  : _a.heartbeats) == null
              ) {
                this._heartbeatsCache = await this._heartbeatsCachePromise;
                // If we failed to construct a heartbeats cache, then return immediately.
                if (
                  ((_b = this._heartbeatsCache) === null || _b === void 0
                    ? void 0
                    : _b.heartbeats) == null
                )
                  return;
              }
              // Do not store a heartbeat if one is already stored for this day
              // or if a header has already been sent today.
              if (
                this._heartbeatsCache.lastSentHeartbeatDate === date ||
                this._heartbeatsCache.heartbeats.some(
                  (singleDateHeartbeat) => singleDateHeartbeat.date === date
                )
              )
                return;
              else {
                // There is no entry for this date. Create one.
                this._heartbeatsCache.heartbeats.push({
                  date,
                  agent,
                });
                // If the number of stored heartbeats exceeds the maximum number of stored heartbeats, remove the heartbeat with the earliest date.
                // Since this is executed each time a heartbeat is pushed, the limit can only be exceeded by one, so only one needs to be removed.
                if (
                  this._heartbeatsCache.heartbeats.length >
                  MAX_NUM_STORED_HEARTBEATS
                ) {
                  const earliestHeartbeatIdx = getEarliestHeartbeatIdx(
                    this._heartbeatsCache.heartbeats
                  );
                  this._heartbeatsCache.heartbeats.splice(
                    earliestHeartbeatIdx,
                    1
                  );
                }
              }
              return this._storage.overwrite(this._heartbeatsCache);
            } catch (e) {
              logger.warn(e);
            }
          }
          /**
           * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
           * It also clears all heartbeats from memory as well as in IndexedDB.
           *
           * NOTE: Consuming product SDKs should not send the header if this method
           * returns an empty string.
           */ async getHeartbeatsHeader() {
            var _a;
            try {
              if (this._heartbeatsCache === null)
                await this._heartbeatsCachePromise;
              // If it's still null or the array is empty, there is no data to send.
              if (
                ((_a = this._heartbeatsCache) === null || _a === void 0
                  ? void 0
                  : _a.heartbeats) == null ||
                this._heartbeatsCache.heartbeats.length === 0
              )
                return '';
              const date = getUTCDateString();
              // Extract as many heartbeats from the cache as will fit under the size limit.
              const { heartbeatsToSend, unsentEntries } =
                extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
              const headerString = (0, _util.base64urlEncodeWithoutPadding)(
                JSON.stringify({
                  version: 2,
                  heartbeats: heartbeatsToSend,
                })
              );
              // Store last sent date to prevent another being logged/sent for the same day.
              this._heartbeatsCache.lastSentHeartbeatDate = date;
              if (unsentEntries.length > 0) {
                // Store any unsent entries if they exist.
                this._heartbeatsCache.heartbeats = unsentEntries;
                // This seems more likely than emptying the array (below) to lead to some odd state
                // since the cache isn't empty and this will be called again on the next request,
                // and is probably safest if we await it.
                await this._storage.overwrite(this._heartbeatsCache);
              } else {
                this._heartbeatsCache.heartbeats = [];
                // Do not wait for this, to reduce latency.
                this._storage.overwrite(this._heartbeatsCache);
              }
              return headerString;
            } catch (e) {
              logger.warn(e);
              return '';
            }
          }
        }
        function getUTCDateString() {
          const today = new Date();
          // Returns date format 'YYYY-MM-DD'
          return today.toISOString().substring(0, 10);
        }
        function extractHeartbeatsForHeader(
          heartbeatsCache,
          maxSize = MAX_HEADER_BYTES
        ) {
          // Heartbeats grouped by user agent in the standard format to be sent in
          // the header.
          const heartbeatsToSend = [];
          // Single date format heartbeats that are not sent.
          let unsentEntries = heartbeatsCache.slice();
          for (const singleDateHeartbeat of heartbeatsCache) {
            // Look for an existing entry with the same user agent.
            const heartbeatEntry = heartbeatsToSend.find(
              (hb) => hb.agent === singleDateHeartbeat.agent
            );
            if (!heartbeatEntry) {
              // If no entry for this user agent exists, create one.
              heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [singleDateHeartbeat.date],
              });
              if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                break;
              }
            } else {
              heartbeatEntry.dates.push(singleDateHeartbeat.date);
              // If the header would exceed max size, remove the added date
              // and stop adding to the header.
              if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                break;
              }
            }
            // Pop unsent entry from queue. (Skipped if adding the entry exceeded
            // quota and the loop breaks early.)
            unsentEntries = unsentEntries.slice(1);
          }
          return {
            heartbeatsToSend,
            unsentEntries,
          };
        }
        class HeartbeatStorageImpl {
          constructor(app) {
            this.app = app;
            this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
          }
          async runIndexedDBEnvironmentCheck() {
            if (!(0, _util.isIndexedDBAvailable)()) return false;
            else
              return (0, _util.validateIndexedDBOpenable)()
                .then(() => true)
                .catch(() => false);
          }
          /**
           * Read all heartbeats.
           */ async read() {
            const canUseIndexedDB = await this._canUseIndexedDBPromise;
            if (!canUseIndexedDB)
              return {
                heartbeats: [],
              };
            else {
              const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(
                this.app
              );
              if (
                idbHeartbeatObject === null || idbHeartbeatObject === void 0
                  ? void 0
                  : idbHeartbeatObject.heartbeats
              )
                return idbHeartbeatObject;
              else
                return {
                  heartbeats: [],
                };
            }
          }
          // overwrite the storage with the provided heartbeats
          async overwrite(heartbeatsObject) {
            var _a;
            const canUseIndexedDB = await this._canUseIndexedDBPromise;
            if (!canUseIndexedDB) return;
            else {
              const existingHeartbeatsObject = await this.read();
              return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate:
                  (_a = heartbeatsObject.lastSentHeartbeatDate) !== null &&
                  _a !== void 0
                    ? _a
                    : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: heartbeatsObject.heartbeats,
              });
            }
          }
          // add heartbeats
          async add(heartbeatsObject) {
            var _a;
            const canUseIndexedDB = await this._canUseIndexedDBPromise;
            if (!canUseIndexedDB) return;
            else {
              const existingHeartbeatsObject = await this.read();
              return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate:
                  (_a = heartbeatsObject.lastSentHeartbeatDate) !== null &&
                  _a !== void 0
                    ? _a
                    : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: [
                  ...existingHeartbeatsObject.heartbeats,
                  ...heartbeatsObject.heartbeats,
                ],
              });
            }
          }
        }
        /**
         * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
         * in a platform logging header JSON object, stringified, and converted
         * to base 64.
         */ function countBytes(heartbeatsCache) {
          // base64 has a restricted set of characters, all of which should be 1 byte.
          return (0, _util.base64urlEncodeWithoutPadding)(
            // heartbeatsCache wrapper properties
            JSON.stringify({
              version: 2,
              heartbeats: heartbeatsCache,
            })
          ).length;
        }
        /**
         * Returns the index of the heartbeat with the earliest date.
         * If the heartbeats array is empty, -1 is returned.
         */ function getEarliestHeartbeatIdx(heartbeats) {
          if (heartbeats.length === 0) return -1;
          let earliestHeartbeatIdx = 0;
          let earliestHeartbeatDate = heartbeats[0].date;
          for (let i = 1; i < heartbeats.length; i++)
            if (heartbeats[i].date < earliestHeartbeatDate) {
              earliestHeartbeatDate = heartbeats[i].date;
              earliestHeartbeatIdx = i;
            }
          return earliestHeartbeatIdx;
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function registerCoreComponents(variant) {
          _registerComponent(
            new (0, _component.Component)(
              'platform-logger',
              (container) => new PlatformLoggerServiceImpl(container),
              'PRIVATE' /* ComponentType.PRIVATE */
            )
          );
          _registerComponent(
            new (0, _component.Component)(
              'heartbeat',
              (container) => new HeartbeatServiceImpl(container),
              'PRIVATE' /* ComponentType.PRIVATE */
            )
          );
          // Register `app` package.
          registerVersion(name$q, version$1, variant);
          // BUILD_TARGET will be replaced by values like esm2017, cjs2017, etc during the compilation
          registerVersion(name$q, version$1, 'esm2017');
          // Register platform SDK identifier (no version).
          registerVersion('fire-js', '');
        }
        /**
         * Firebase App
         *
         * @remarks This package coordinates the communication between the different Firebase components
         * @packageDocumentation
         */ registerCoreComponents('');
      },
      {
        '@firebase/component': 'l6zaT',
        '@firebase/logger': 'lCD4Y',
        '@firebase/util': 'kMDC5',
        idb: 'bhyM4',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    l6zaT: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'Component', () => Component);
        parcelHelpers.export(
          exports,
          'ComponentContainer',
          () => ComponentContainer
        );
        parcelHelpers.export(exports, 'Provider', () => Provider);
        var _util = require('@firebase/util');
        /**
         * Component for service name T, e.g. `auth`, `auth-internal`
         */ class Component {
          /**
           *
           * @param name The public service name, e.g. app, auth, firestore, database
           * @param instanceFactory Service factory responsible for creating the public interface
           * @param type whether the service provided by the component is public or private
           */ constructor(name, instanceFactory, type) {
            this.name = name;
            this.instanceFactory = instanceFactory;
            this.type = type;
            this.multipleInstances = false;
            /**
             * Properties to be added to the service namespace
             */ this.serviceProps = {};
            this.instantiationMode = 'LAZY' /* InstantiationMode.LAZY */;
            this.onInstanceCreated = null;
          }
          setInstantiationMode(mode) {
            this.instantiationMode = mode;
            return this;
          }
          setMultipleInstances(multipleInstances) {
            this.multipleInstances = multipleInstances;
            return this;
          }
          setServiceProps(props) {
            this.serviceProps = props;
            return this;
          }
          setInstanceCreatedCallback(callback) {
            this.onInstanceCreated = callback;
            return this;
          }
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
         * NameServiceMapping[T] is an alias for the type of the instance
         */ class Provider {
          constructor(name, container) {
            this.name = name;
            this.container = container;
            this.component = null;
            this.instances = new Map();
            this.instancesDeferred = new Map();
            this.instancesOptions = new Map();
            this.onInitCallbacks = new Map();
          }
          /**
           * @param identifier A provider can provide multiple instances of a service
           * if this.component.multipleInstances is true.
           */ get(identifier) {
            // if multipleInstances is not supported, use the default name
            const normalizedIdentifier =
              this.normalizeInstanceIdentifier(identifier);
            if (!this.instancesDeferred.has(normalizedIdentifier)) {
              const deferred = new (0, _util.Deferred)();
              this.instancesDeferred.set(normalizedIdentifier, deferred);
              if (
                this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()
              )
                // initialize the service if it can be auto-initialized
                try {
                  const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier,
                  });
                  if (instance) deferred.resolve(instance);
                } catch (e) {
                  // when the instance factory throws an exception during get(), it should not cause
                  // a fatal error. We just return the unresolved promise in this case.
                }
            }
            return this.instancesDeferred.get(normalizedIdentifier).promise;
          }
          getImmediate(options) {
            var _a;
            // if multipleInstances is not supported, use the default name
            const normalizedIdentifier = this.normalizeInstanceIdentifier(
              options === null || options === void 0
                ? void 0
                : options.identifier
            );
            const optional =
              (_a =
                options === null || options === void 0
                  ? void 0
                  : options.optional) !== null && _a !== void 0
                ? _a
                : false;
            if (
              this.isInitialized(normalizedIdentifier) ||
              this.shouldAutoInitialize()
            )
              try {
                return this.getOrInitializeService({
                  instanceIdentifier: normalizedIdentifier,
                });
              } catch (e) {
                if (optional) return null;
                else throw e;
              }
            else {
              // In case a component is not initialized and should/cannot be auto-initialized at the moment, return null if the optional flag is set, or throw
              if (optional) return null;
              else throw Error(`Service ${this.name} is not available`);
            }
          }
          getComponent() {
            return this.component;
          }
          setComponent(component) {
            if (component.name !== this.name)
              throw Error(
                `Mismatching Component ${component.name} for Provider ${this.name}.`
              );
            if (this.component)
              throw Error(
                `Component for ${this.name} has already been provided`
              );
            this.component = component;
            // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
            if (!this.shouldAutoInitialize()) return;
            // if the service is eager, initialize the default instance
            if (isComponentEager(component))
              try {
                this.getOrInitializeService({
                  instanceIdentifier: DEFAULT_ENTRY_NAME,
                });
              } catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
              }
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (const [
              instanceIdentifier,
              instanceDeferred,
            ] of this.instancesDeferred.entries()) {
              const normalizedIdentifier =
                this.normalizeInstanceIdentifier(instanceIdentifier);
              try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                  instanceIdentifier: normalizedIdentifier,
                });
                instanceDeferred.resolve(instance);
              } catch (e) {
                // when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
              }
            }
          }
          clearInstance(identifier = DEFAULT_ENTRY_NAME) {
            this.instancesDeferred.delete(identifier);
            this.instancesOptions.delete(identifier);
            this.instances.delete(identifier);
          }
          // app.delete() will call this method on every provider to delete the services
          // TODO: should we mark the provider as deleted?
          async delete() {
            const services = Array.from(this.instances.values());
            await Promise.all([
              ...services
                .filter((service) => 'INTERNAL' in service) // legacy services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((service) => service.INTERNAL.delete()),
              ...services
                .filter((service) => '_delete' in service) // modularized services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((service) => service._delete()),
            ]);
          }
          isComponentSet() {
            return this.component != null;
          }
          isInitialized(identifier = DEFAULT_ENTRY_NAME) {
            return this.instances.has(identifier);
          }
          getOptions(identifier = DEFAULT_ENTRY_NAME) {
            return this.instancesOptions.get(identifier) || {};
          }
          initialize(opts = {}) {
            const { options = {} } = opts;
            const normalizedIdentifier = this.normalizeInstanceIdentifier(
              opts.instanceIdentifier
            );
            if (this.isInitialized(normalizedIdentifier))
              throw Error(
                `${this.name}(${normalizedIdentifier}) has already been initialized`
              );
            if (!this.isComponentSet())
              throw Error(`Component ${this.name} has not been registered yet`);
            const instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier,
              options,
            });
            // resolve any pending promise waiting for the service instance
            for (const [
              instanceIdentifier,
              instanceDeferred,
            ] of this.instancesDeferred.entries()) {
              const normalizedDeferredIdentifier =
                this.normalizeInstanceIdentifier(instanceIdentifier);
              if (normalizedIdentifier === normalizedDeferredIdentifier)
                instanceDeferred.resolve(instance);
            }
            return instance;
          }
          /**
           *
           * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
           * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
           *
           * @param identifier An optional instance identifier
           * @returns a function to unregister the callback
           */ onInit(callback, identifier) {
            var _a;
            const normalizedIdentifier =
              this.normalizeInstanceIdentifier(identifier);
            const existingCallbacks =
              (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null &&
              _a !== void 0
                ? _a
                : new Set();
            existingCallbacks.add(callback);
            this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
            const existingInstance = this.instances.get(normalizedIdentifier);
            if (existingInstance)
              callback(existingInstance, normalizedIdentifier);
            return () => {
              existingCallbacks.delete(callback);
            };
          }
          /**
           * Invoke onInit callbacks synchronously
           * @param instance the service instance`
           */ invokeOnInitCallbacks(instance, identifier) {
            const callbacks = this.onInitCallbacks.get(identifier);
            if (!callbacks) return;
            for (const callback of callbacks)
              try {
                callback(instance, identifier);
              } catch (_a) {
                // ignore errors in the onInit callback
              }
          }
          getOrInitializeService({ instanceIdentifier, options = {} }) {
            let instance = this.instances.get(instanceIdentifier);
            if (!instance && this.component) {
              instance = this.component.instanceFactory(this.container, {
                instanceIdentifier:
                  normalizeIdentifierForFactory(instanceIdentifier),
                options,
              });
              this.instances.set(instanceIdentifier, instance);
              this.instancesOptions.set(instanceIdentifier, options);
              /**
               * Invoke onInit listeners.
               * Note this.component.onInstanceCreated is different, which is used by the component creator,
               * while onInit listeners are registered by consumers of the provider.
               */ this.invokeOnInitCallbacks(instance, instanceIdentifier);
              /**
               * Order is important
               * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
               * makes `isInitialized()` return true.
               */ if (this.component.onInstanceCreated)
                try {
                  this.component.onInstanceCreated(
                    this.container,
                    instanceIdentifier,
                    instance
                  );
                } catch (_a) {
                  // ignore errors in the onInstanceCreatedCallback
                }
            }
            return instance || null;
          }
          normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
            if (this.component)
              return this.component.multipleInstances
                ? identifier
                : DEFAULT_ENTRY_NAME;
            else return identifier; // assume multiple instances are supported before the component is provided.
          }
          shouldAutoInitialize() {
            return (
              !!this.component &&
              this.component.instantiationMode !==
                'EXPLICIT' /* InstantiationMode.EXPLICIT */
            );
          }
        }
        // undefined should be passed to the service factory for the default instance
        function normalizeIdentifierForFactory(identifier) {
          return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
        }
        function isComponentEager(component) {
          return (
            component.instantiationMode ===
            'EAGER' /* InstantiationMode.EAGER */
          );
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
         */ class ComponentContainer {
          constructor(name) {
            this.name = name;
            this.providers = new Map();
          }
          /**
           *
           * @param component Component being added
           * @param overwrite When a component with the same name has already been registered,
           * if overwrite is true: overwrite the existing component with the new component and create a new
           * provider with the new component. It can be useful in tests where you want to use different mocks
           * for different tests.
           * if overwrite is false: throw an exception
           */ addComponent(component) {
            const provider = this.getProvider(component.name);
            if (provider.isComponentSet())
              throw new Error(
                `Component ${component.name} has already been registered with ${this.name}`
              );
            provider.setComponent(component);
          }
          addOrOverwriteComponent(component) {
            const provider = this.getProvider(component.name);
            if (provider.isComponentSet())
              // delete the existing provider from the container, so we can register the new component
              this.providers.delete(component.name);
            this.addComponent(component);
          }
          /**
           * getProvider provides a type safe interface where it can only be called with a field name
           * present in NameServiceMapping interface.
           *
           * Firebase SDKs providing services should extend NameServiceMapping interface to register
           * themselves.
           */ getProvider(name) {
            if (this.providers.has(name)) return this.providers.get(name);
            // create a Provider for a service that hasn't registered with Firebase
            const provider = new Provider(name, this);
            this.providers.set(name, provider);
            return provider;
          }
          getProviders() {
            return Array.from(this.providers.values());
          }
        }
      },
      {
        '@firebase/util': 'kMDC5',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    kMDC5: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'CONSTANTS', () => CONSTANTS);
        parcelHelpers.export(
          exports,
          'DecodeBase64StringError',
          () => DecodeBase64StringError
        );
        parcelHelpers.export(exports, 'Deferred', () => Deferred);
        parcelHelpers.export(exports, 'ErrorFactory', () => ErrorFactory);
        parcelHelpers.export(exports, 'FirebaseError', () => FirebaseError);
        parcelHelpers.export(
          exports,
          'MAX_VALUE_MILLIS',
          () => MAX_VALUE_MILLIS
        );
        parcelHelpers.export(exports, 'RANDOM_FACTOR', () => RANDOM_FACTOR);
        parcelHelpers.export(exports, 'Sha1', () => Sha1);
        parcelHelpers.export(
          exports,
          'areCookiesEnabled',
          () => areCookiesEnabled
        );
        parcelHelpers.export(exports, 'assert', () => assert);
        parcelHelpers.export(exports, 'assertionError', () => assertionError);
        parcelHelpers.export(exports, 'async', () => async);
        parcelHelpers.export(exports, 'base64', () => base64);
        parcelHelpers.export(exports, 'base64Decode', () => base64Decode);
        parcelHelpers.export(exports, 'base64Encode', () => base64Encode);
        parcelHelpers.export(
          exports,
          'base64urlEncodeWithoutPadding',
          () => base64urlEncodeWithoutPadding
        );
        parcelHelpers.export(
          exports,
          'calculateBackoffMillis',
          () => calculateBackoffMillis
        );
        parcelHelpers.export(exports, 'contains', () => contains);
        parcelHelpers.export(
          exports,
          'createMockUserToken',
          () => createMockUserToken
        );
        parcelHelpers.export(exports, 'createSubscribe', () => createSubscribe);
        parcelHelpers.export(exports, 'decode', () => decode);
        parcelHelpers.export(exports, 'deepCopy', () => deepCopy);
        parcelHelpers.export(exports, 'deepEqual', () => deepEqual);
        parcelHelpers.export(exports, 'deepExtend', () => deepExtend);
        parcelHelpers.export(exports, 'errorPrefix', () => errorPrefix);
        parcelHelpers.export(
          exports,
          'extractQuerystring',
          () => extractQuerystring
        );
        parcelHelpers.export(
          exports,
          'getDefaultAppConfig',
          () => getDefaultAppConfig
        );
        parcelHelpers.export(
          exports,
          'getDefaultEmulatorHost',
          () => getDefaultEmulatorHost
        );
        parcelHelpers.export(
          exports,
          'getDefaultEmulatorHostnameAndPort',
          () => getDefaultEmulatorHostnameAndPort
        );
        parcelHelpers.export(exports, 'getDefaults', () => getDefaults);
        parcelHelpers.export(
          exports,
          'getExperimentalSetting',
          () => getExperimentalSetting
        );
        parcelHelpers.export(exports, 'getGlobal', () => getGlobal);
        parcelHelpers.export(
          exports,
          'getModularInstance',
          () => getModularInstance
        );
        parcelHelpers.export(exports, 'getUA', () => getUA);
        parcelHelpers.export(exports, 'isAdmin', () => isAdmin);
        parcelHelpers.export(exports, 'isBrowser', () => isBrowser);
        parcelHelpers.export(
          exports,
          'isBrowserExtension',
          () => isBrowserExtension
        );
        parcelHelpers.export(
          exports,
          'isCloudflareWorker',
          () => isCloudflareWorker
        );
        parcelHelpers.export(exports, 'isElectron', () => isElectron);
        parcelHelpers.export(exports, 'isEmpty', () => isEmpty);
        parcelHelpers.export(exports, 'isIE', () => isIE);
        parcelHelpers.export(
          exports,
          'isIndexedDBAvailable',
          () => isIndexedDBAvailable
        );
        parcelHelpers.export(exports, 'isMobileCordova', () => isMobileCordova);
        parcelHelpers.export(exports, 'isNode', () => isNode);
        parcelHelpers.export(exports, 'isNodeSdk', () => isNodeSdk);
        parcelHelpers.export(exports, 'isReactNative', () => isReactNative);
        parcelHelpers.export(exports, 'isSafari', () => isSafari);
        parcelHelpers.export(exports, 'isUWP', () => isUWP);
        parcelHelpers.export(exports, 'isValidFormat', () => isValidFormat);
        parcelHelpers.export(
          exports,
          'isValidTimestamp',
          () => isValidTimestamp
        );
        parcelHelpers.export(exports, 'isWebWorker', () => isWebWorker);
        parcelHelpers.export(exports, 'issuedAtTime', () => issuedAtTime);
        parcelHelpers.export(exports, 'jsonEval', () => jsonEval);
        parcelHelpers.export(exports, 'map', () => map);
        parcelHelpers.export(exports, 'ordinal', () => ordinal);
        parcelHelpers.export(
          exports,
          'promiseWithTimeout',
          () => promiseWithTimeout
        );
        parcelHelpers.export(exports, 'querystring', () => querystring);
        parcelHelpers.export(
          exports,
          'querystringDecode',
          () => querystringDecode
        );
        parcelHelpers.export(exports, 'safeGet', () => safeGet);
        parcelHelpers.export(exports, 'stringLength', () => stringLength);
        parcelHelpers.export(
          exports,
          'stringToByteArray',
          () => stringToByteArray
        );
        parcelHelpers.export(exports, 'stringify', () => stringify);
        parcelHelpers.export(
          exports,
          'validateArgCount',
          () => validateArgCount
        );
        parcelHelpers.export(
          exports,
          'validateCallback',
          () => validateCallback
        );
        parcelHelpers.export(
          exports,
          'validateContextObject',
          () => validateContextObject
        );
        parcelHelpers.export(
          exports,
          'validateIndexedDBOpenable',
          () => validateIndexedDBOpenable
        );
        parcelHelpers.export(
          exports,
          'validateNamespace',
          () => validateNamespace
        );
        var _postinstallMjs = require('./postinstall.mjs');
        var global = arguments[3];
        var process = require('d07263985281b344');
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
         */ const CONSTANTS = {
          /**
           * @define {boolean} Whether this is the client Node.js SDK.
           */ NODE_CLIENT: false,
          /**
           * @define {boolean} Whether this is the Admin Node.js SDK.
           */ NODE_ADMIN: false,
          /**
           * Firebase SDK Version
           */ SDK_VERSION: '${JSCORE_VERSION}',
        };
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Throws an error if the provided assertion is falsy
         */ const assert = function (assertion, message) {
          if (!assertion) throw assertionError(message);
        };
        /**
         * Returns an Error object suitable for throwing.
         */ const assertionError = function (message) {
          return new Error(
            'Firebase Database (' +
              CONSTANTS.SDK_VERSION +
              ') INTERNAL ASSERT FAILED: ' +
              message
          );
        };
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const stringToByteArray$1 = function (str) {
          // TODO(user): Use native implementations if/when available
          const out = [];
          let p = 0;
          for (let i = 0; i < str.length; i++) {
            let c = str.charCodeAt(i);
            if (c < 128) out[p++] = c;
            else if (c < 2048) {
              out[p++] = (c >> 6) | 192;
              out[p++] = (c & 63) | 128;
            } else if (
              (c & 0xfc00) === 0xd800 &&
              i + 1 < str.length &&
              (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00
            ) {
              // Surrogate Pair
              c =
                0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
              out[p++] = (c >> 18) | 240;
              out[p++] = ((c >> 12) & 63) | 128;
              out[p++] = ((c >> 6) & 63) | 128;
              out[p++] = (c & 63) | 128;
            } else {
              out[p++] = (c >> 12) | 224;
              out[p++] = ((c >> 6) & 63) | 128;
              out[p++] = (c & 63) | 128;
            }
          }
          return out;
        };
        /**
         * Turns an array of numbers into the string given by the concatenation of the
         * characters to which the numbers correspond.
         * @param bytes Array of numbers representing characters.
         * @return Stringification of the array.
         */ const byteArrayToString = function (bytes) {
          // TODO(user): Use native implementations if/when available
          const out = [];
          let pos = 0,
            c = 0;
          while (pos < bytes.length) {
            const c1 = bytes[pos++];
            if (c1 < 128) out[c++] = String.fromCharCode(c1);
            else if (c1 > 191 && c1 < 224) {
              const c2 = bytes[pos++];
              out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
            } else if (c1 > 239 && c1 < 365) {
              // Surrogate Pair
              const c2 = bytes[pos++];
              const c3 = bytes[pos++];
              const c4 = bytes[pos++];
              const u =
                (((c1 & 7) << 18) |
                  ((c2 & 63) << 12) |
                  ((c3 & 63) << 6) |
                  (c4 & 63)) -
                0x10000;
              out[c++] = String.fromCharCode(0xd800 + (u >> 10));
              out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
            } else {
              const c2 = bytes[pos++];
              const c3 = bytes[pos++];
              out[c++] = String.fromCharCode(
                ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
              );
            }
          }
          return out.join('');
        };
        // We define it as an object literal instead of a class because a class compiled down to es5 can't
        // be treeshaked. https://github.com/rollup/rollup/issues/1691
        // Static lookup maps, lazily populated by init_()
        // TODO(dlarocque): Define this as a class, since we no longer target ES5.
        const base64 = {
          /**
           * Maps bytes to characters.
           */ byteToCharMap_: null,
          /**
           * Maps characters to bytes.
           */ charToByteMap_: null,
          /**
           * Maps bytes to websafe characters.
           * @private
           */ byteToCharMapWebSafe_: null,
          /**
           * Maps websafe characters to bytes.
           * @private
           */ charToByteMapWebSafe_: null,
          /**
           * Our default alphabet, shared between
           * ENCODED_VALS and ENCODED_VALS_WEBSAFE
           */ ENCODED_VALS_BASE:
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          /**
           * Our default alphabet. Value 64 (=) is special; it means "nothing."
           */ get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + '+/=';
          },
          /**
           * Our websafe alphabet.
           */ get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + '-_.';
          },
          /**
           * Whether this browser supports the atob and btoa functions. This extension
           * started at Mozilla but is now implemented by many browsers. We use the
           * ASSUME_* variables to avoid pulling in the full useragent detection library
           * but still allowing the standard per-browser compilations.
           *
           */ HAS_NATIVE_SUPPORT: typeof atob === 'function',
          /**
           * Base64-encode an array of bytes.
           *
           * @param input An array of bytes (numbers with
           *     value in [0, 255]) to encode.
           * @param webSafe Boolean indicating we should use the
           *     alternative alphabet.
           * @return The base64 encoded string.
           */ encodeByteArray(input, webSafe) {
            if (!Array.isArray(input))
              throw Error('encodeByteArray takes an array as a parameter');
            this.init_();
            const byteToCharMap = webSafe
              ? this.byteToCharMapWebSafe_
              : this.byteToCharMap_;
            const output = [];
            for (let i = 0; i < input.length; i += 3) {
              const byte1 = input[i];
              const haveByte2 = i + 1 < input.length;
              const byte2 = haveByte2 ? input[i + 1] : 0;
              const haveByte3 = i + 2 < input.length;
              const byte3 = haveByte3 ? input[i + 2] : 0;
              const outByte1 = byte1 >> 2;
              const outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
              let outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
              let outByte4 = byte3 & 0x3f;
              if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) outByte3 = 64;
              }
              output.push(
                byteToCharMap[outByte1],
                byteToCharMap[outByte2],
                byteToCharMap[outByte3],
                byteToCharMap[outByte4]
              );
            }
            return output.join('');
          },
          /**
           * Base64-encode a string.
           *
           * @param input A string to encode.
           * @param webSafe If true, we should use the
           *     alternative alphabet.
           * @return The base64 encoded string.
           */ encodeString(input, webSafe) {
            // Shortcut for Mozilla browsers that implement
            // a native base64 encoder in the form of "btoa/atob"
            if (this.HAS_NATIVE_SUPPORT && !webSafe) return btoa(input);
            return this.encodeByteArray(stringToByteArray$1(input), webSafe);
          },
          /**
           * Base64-decode a string.
           *
           * @param input to decode.
           * @param webSafe True if we should use the
           *     alternative alphabet.
           * @return string representing the decoded value.
           */ decodeString(input, webSafe) {
            // Shortcut for Mozilla browsers that implement
            // a native base64 encoder in the form of "btoa/atob"
            if (this.HAS_NATIVE_SUPPORT && !webSafe) return atob(input);
            return byteArrayToString(
              this.decodeStringToByteArray(input, webSafe)
            );
          },
          /**
           * Base64-decode a string.
           *
           * In base-64 decoding, groups of four characters are converted into three
           * bytes.  If the encoder did not apply padding, the input length may not
           * be a multiple of 4.
           *
           * In this case, the last group will have fewer than 4 characters, and
           * padding will be inferred.  If the group has one or two characters, it decodes
           * to one byte.  If the group has three characters, it decodes to two bytes.
           *
           * @param input Input to decode.
           * @param webSafe True if we should use the web-safe alphabet.
           * @return bytes representing the decoded value.
           */ decodeStringToByteArray(input, webSafe) {
            this.init_();
            const charToByteMap = webSafe
              ? this.charToByteMapWebSafe_
              : this.charToByteMap_;
            const output = [];
            for (let i = 0; i < input.length; ) {
              const byte1 = charToByteMap[input.charAt(i++)];
              const haveByte2 = i < input.length;
              const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
              ++i;
              const haveByte3 = i < input.length;
              const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
              ++i;
              const haveByte4 = i < input.length;
              const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
              ++i;
              if (
                byte1 == null ||
                byte2 == null ||
                byte3 == null ||
                byte4 == null
              )
                throw new DecodeBase64StringError();
              const outByte1 = (byte1 << 2) | (byte2 >> 4);
              output.push(outByte1);
              if (byte3 !== 64) {
                const outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                  const outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                  output.push(outByte3);
                }
              }
            }
            return output;
          },
          /**
           * Lazy static initialization function. Called before
           * accessing any of the static map variables.
           * @private
           */ init_() {
            if (!this.byteToCharMap_) {
              this.byteToCharMap_ = {};
              this.charToByteMap_ = {};
              this.byteToCharMapWebSafe_ = {};
              this.charToByteMapWebSafe_ = {};
              // We want quick mappings back and forth, so we precompute two maps.
              for (let i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] =
                  this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                  this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                  this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
              }
            }
          },
        };
        /**
         * An error encountered while decoding base64 string.
         */ class DecodeBase64StringError extends Error {
          constructor() {
            super(...arguments);
            this.name = 'DecodeBase64StringError';
          }
        }
        /**
         * URL-safe base64 encoding
         */ const base64Encode = function (str) {
          const utf8Bytes = stringToByteArray$1(str);
          return base64.encodeByteArray(utf8Bytes, true);
        };
        /**
         * URL-safe base64 encoding (without "." padding in the end).
         * e.g. Used in JSON Web Token (JWT) parts.
         */ const base64urlEncodeWithoutPadding = function (str) {
          // Use base64url encoding and remove padding in the end (dot characters).
          return base64Encode(str).replace(/\./g, '');
        };
        /**
         * URL-safe base64 decoding
         *
         * NOTE: DO NOT use the global atob() function - it does NOT support the
         * base64Url variant encoding.
         *
         * @param str To be decoded
         * @return Decoded result, if possible
         */ const base64Decode = function (str) {
          try {
            return base64.decodeString(str, true);
          } catch (e) {
            console.error('base64Decode failed: ', e);
          }
          return null;
        };
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Do a deep-copy of basic JavaScript Objects or Arrays.
         */ function deepCopy(value) {
          return deepExtend(undefined, value);
        }
        /**
         * Copy properties from source to target (recursively allows extension
         * of Objects and Arrays).  Scalar values in the target are over-written.
         * If target is undefined, an object of the appropriate type will be created
         * (and returned).
         *
         * We recursively copy all child properties of plain Objects in the source- so
         * that namespace- like dictionaries are merged.
         *
         * Note that the target can be a function, in which case the properties in
         * the source Object are copied onto it as static properties of the Function.
         *
         * Note: we don't merge __proto__ to prevent prototype pollution
         */ function deepExtend(target, source) {
          if (!(source instanceof Object)) return source;
          switch (source.constructor) {
            case Date:
              // Treat Dates like scalars; if the target date object had any child
              // properties - they will be lost!
              const dateValue = source;
              return new Date(dateValue.getTime());
            case Object:
              if (target === undefined) target = {};
              break;
            case Array:
              // Always copy the array source and overwrite the target.
              target = [];
              break;
            default:
              // Not a plain Object - treat it as a scalar.
              return source;
          }
          for (const prop in source) {
            // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
            if (!source.hasOwnProperty(prop) || !isValidKey(prop)) continue;
            target[prop] = deepExtend(target[prop], source[prop]);
          }
          return target;
        }
        function isValidKey(key) {
          return key !== '__proto__';
        }
        /**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Polyfill for `globalThis` object.
         * @returns the `globalThis` object for the given environment.
         * @public
         */ function getGlobal() {
          if (typeof self !== 'undefined') return self;
          if (typeof window !== 'undefined') return window;
          if (typeof global !== 'undefined') return global;
          throw new Error('Unable to locate global object.');
        }
        /**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const getDefaultsFromGlobal = () =>
          getGlobal().__FIREBASE_DEFAULTS__;
        /**
         * Attempt to read defaults from a JSON string provided to
         * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
         * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
         * The dots are in parens because certain compilers (Vite?) cannot
         * handle seeing that variable in comments.
         * See https://github.com/firebase/firebase-js-sdk/issues/6838
         */ const getDefaultsFromEnvVariable = () => {
          if (
            typeof process === 'undefined' ||
            typeof process.env === 'undefined'
          )
            return;
          const defaultsJsonString = undefined;
          if (defaultsJsonString) return JSON.parse(defaultsJsonString);
        };
        const getDefaultsFromCookie = () => {
          if (typeof document === 'undefined') return;
          let match;
          try {
            match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
          } catch (e) {
            // Some environments such as Angular Universal SSR have a
            // `document` object but error on accessing `document.cookie`.
            return;
          }
          const decoded = match && base64Decode(match[1]);
          return decoded && JSON.parse(decoded);
        };
        /**
         * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
         * (1) if such an object exists as a property of `globalThis`
         * (2) if such an object was provided on a shell environment variable
         * (3) if such an object exists in a cookie
         * @public
         */ const getDefaults = () => {
          try {
            return (
              (0, _postinstallMjs.getDefaultsFromPostinstall)() ||
              getDefaultsFromGlobal() ||
              getDefaultsFromEnvVariable() ||
              getDefaultsFromCookie()
            );
          } catch (e) {
            /**
             * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
             * to any environment case we have not accounted for. Log to
             * info instead of swallowing so we can find these unknown cases
             * and add paths for them if needed.
             */ console.info(
              `Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`
            );
            return;
          }
        };
        /**
         * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
         * for the given product.
         * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
         * @public
         */ const getDefaultEmulatorHost = (productName) => {
          var _a, _b;
          return (_b =
            (_a = getDefaults()) === null || _a === void 0
              ? void 0
              : _a.emulatorHosts) === null || _b === void 0
            ? void 0
            : _b[productName];
        };
        /**
         * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
         * for the given product.
         * @returns a pair of hostname and port like `["::1", 4000]` if available
         * @public
         */ const getDefaultEmulatorHostnameAndPort = (productName) => {
          const host = getDefaultEmulatorHost(productName);
          if (!host) return undefined;
          const separatorIndex = host.lastIndexOf(':'); // Finding the last since IPv6 addr also has colons.
          if (separatorIndex <= 0 || separatorIndex + 1 === host.length)
            throw new Error(
              `Invalid host ${host} with no separate hostname and port!`
            );
          // eslint-disable-next-line no-restricted-globals
          const port = parseInt(host.substring(separatorIndex + 1), 10);
          if (host[0] === '[')
            // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
            return [host.substring(1, separatorIndex - 1), port];
          else return [host.substring(0, separatorIndex), port];
        };
        /**
         * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
         * @public
         */ const getDefaultAppConfig = () => {
          var _a;
          return (_a = getDefaults()) === null || _a === void 0
            ? void 0
            : _a.config;
        };
        /**
         * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
         * prefixed by "_")
         * @public
         */ const getExperimentalSetting = (name) => {
          var _a;
          return (_a = getDefaults()) === null || _a === void 0
            ? void 0
            : _a[`_${name}`];
        };
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ class Deferred {
          constructor() {
            this.reject = () => {};
            this.resolve = () => {};
            this.promise = new Promise((resolve, reject) => {
              this.resolve = resolve;
              this.reject = reject;
            });
          }
          /**
           * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
           * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
           * and returns a node-style callback which will resolve or reject the Deferred's promise.
           */ wrapCallback(callback) {
            return (error, value) => {
              if (error) this.reject(error);
              else this.resolve(value);
              if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(() => {});
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) callback(error);
                else callback(error, value);
              }
            };
          }
        }
        /**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function createMockUserToken(token, projectId) {
          if (token.uid)
            throw new Error(
              'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
            );
          // Unsecured JWTs use "none" as the algorithm.
          const header = {
            alg: 'none',
            type: 'JWT',
          };
          const project = projectId || 'demo-project';
          const iat = token.iat || 0;
          const sub = token.sub || token.user_id;
          if (!sub)
            throw new Error(
              "mockUserToken must contain 'sub' or 'user_id' field!"
            );
          const payload = Object.assign(
            {
              // Set all required fields to decent defaults
              iss: `https://securetoken.google.com/${project}`,
              aud: project,
              iat,
              exp: iat + 3600,
              auth_time: iat,
              sub,
              user_id: sub,
              firebase: {
                sign_in_provider: 'custom',
                identities: {},
              },
            },
            token
          );
          // Unsecured JWTs use the empty string as a signature.
          const signature = '';
          return [
            base64urlEncodeWithoutPadding(JSON.stringify(header)),
            base64urlEncodeWithoutPadding(JSON.stringify(payload)),
            signature,
          ].join('.');
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Returns navigator.userAgent string or '' if it's not defined.
         * @return user agent string
         */ function getUA() {
          if (
            typeof navigator !== 'undefined' &&
            typeof navigator['userAgent'] === 'string'
          )
            return navigator['userAgent'];
          else return '';
        }
        /**
         * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
         *
         * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
         * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
         * wait for a callback.
         */ function isMobileCordova() {
          return (
            typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
            // just to deal with this case would probably be a bad idea.
            !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
            /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())
          );
        }
        /**
         * Detect Node.js.
         *
         * @return true if Node.js environment is detected or specified.
         */ // Node detection logic from: https://github.com/iliakan/detect-node/
        function isNode() {
          var _a;
          const forceEnvironment =
            (_a = getDefaults()) === null || _a === void 0
              ? void 0
              : _a.forceEnvironment;
          if (forceEnvironment === 'node') return true;
          else if (forceEnvironment === 'browser') return false;
          try {
            return (
              Object.prototype.toString.call(global.process) ===
              '[object process]'
            );
          } catch (e) {
            return false;
          }
        }
        /**
         * Detect Browser Environment.
         * Note: This will return true for certain test frameworks that are incompletely
         * mimicking a browser, and should not lead to assuming all browser APIs are
         * available.
         */ function isBrowser() {
          return typeof window !== 'undefined' || isWebWorker();
        }
        /**
         * Detect Web Worker context.
         */ function isWebWorker() {
          return (
            typeof WorkerGlobalScope !== 'undefined' &&
            typeof self !== 'undefined' &&
            self instanceof WorkerGlobalScope
          );
        }
        /**
         * Detect Cloudflare Worker context.
         */ function isCloudflareWorker() {
          return (
            typeof navigator !== 'undefined' &&
            navigator.userAgent === 'Cloudflare-Workers'
          );
        }
        function isBrowserExtension() {
          const runtime =
            typeof chrome === 'object'
              ? chrome.runtime
              : typeof browser === 'object'
                ? browser.runtime
                : undefined;
          return typeof runtime === 'object' && runtime.id !== undefined;
        }
        /**
         * Detect React Native.
         *
         * @return true if ReactNative environment is detected.
         */ function isReactNative() {
          return (
            typeof navigator === 'object' &&
            navigator['product'] === 'ReactNative'
          );
        }
        /** Detects Electron apps. */ function isElectron() {
          return getUA().indexOf('Electron/') >= 0;
        }
        /** Detects Internet Explorer. */ function isIE() {
          const ua = getUA();
          return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
        }
        /** Detects Universal Windows Platform apps. */ function isUWP() {
          return getUA().indexOf('MSAppHost/') >= 0;
        }
        /**
         * Detect whether the current SDK build is the Node version.
         *
         * @return true if it's the Node SDK build.
         */ function isNodeSdk() {
          return (
            CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true
          );
        }
        /** Returns true if we are running in Safari. */ function isSafari() {
          return (
            !isNode() &&
            !!navigator.userAgent &&
            navigator.userAgent.includes('Safari') &&
            !navigator.userAgent.includes('Chrome')
          );
        }
        /**
         * This method checks if indexedDB is supported by current browser/service worker context
         * @return true if indexedDB is supported by current browser/service worker context
         */ function isIndexedDBAvailable() {
          try {
            return typeof indexedDB === 'object';
          } catch (e) {
            return false;
          }
        }
        /**
         * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
         * if errors occur during the database open operation.
         *
         * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
         * private browsing)
         */ function validateIndexedDBOpenable() {
          return new Promise((resolve, reject) => {
            try {
              let preExist = true;
              const DB_CHECK_NAME =
                'validate-browser-context-for-indexeddb-analytics-module';
              const request = self.indexedDB.open(DB_CHECK_NAME);
              request.onsuccess = () => {
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                resolve(true);
              };
              request.onupgradeneeded = () => {
                preExist = false;
              };
              request.onerror = () => {
                var _a;
                reject(
                  ((_a = request.error) === null || _a === void 0
                    ? void 0
                    : _a.message) || ''
                );
              };
            } catch (error) {
              reject(error);
            }
          });
        }
        /**
         *
         * This method checks whether cookie is enabled within current browser
         * @return true if cookie is enabled within current browser
         */ function areCookiesEnabled() {
          if (typeof navigator === 'undefined' || !navigator.cookieEnabled)
            return false;
          return true;
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * @fileoverview Standardized Firebase Error.
         *
         * Usage:
         *
         *   // TypeScript string literals for type-safe codes
         *   type Err =
         *     'unknown' |
         *     'object-not-found'
         *     ;
         *
         *   // Closure enum for type-safe error codes
         *   // at-enum {string}
         *   var Err = {
         *     UNKNOWN: 'unknown',
         *     OBJECT_NOT_FOUND: 'object-not-found',
         *   }
         *
         *   let errors: Map<Err, string> = {
         *     'generic-error': "Unknown error",
         *     'file-not-found': "Could not find file: {$file}",
         *   };
         *
         *   // Type-safe function - must pass a valid error code as param.
         *   let error = new ErrorFactory<Err>('service', 'Service', errors);
         *
         *   ...
         *   throw error.create(Err.GENERIC);
         *   ...
         *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
         *   ...
         *   // Service: Could not file file: foo.txt (service/file-not-found).
         *
         *   catch (e) {
         *     assert(e.message === "Could not find file: foo.txt.");
         *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
         *       console.log("Could not read file: " + e['file']);
         *     }
         *   }
         */ const ERROR_NAME = 'FirebaseError';
        // Based on code from:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        class FirebaseError extends Error {
          constructor(
            /** The error code for this error. */ code,
            message,
            /** Custom data for this error. */ customData
          ) {
            super(message);
            this.code = code;
            this.customData = customData;
            /** The custom name for all FirebaseErrors. */ this.name =
              ERROR_NAME;
            // Fix For ES5
            // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
            // TODO(dlarocque): Replace this with `new.target`: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget
            //                   which we can now use since we no longer target ES5.
            Object.setPrototypeOf(this, FirebaseError.prototype);
            // Maintains proper stack trace for where our error was thrown.
            // Only available on V8.
            if (Error.captureStackTrace)
              Error.captureStackTrace(this, ErrorFactory.prototype.create);
          }
        }
        class ErrorFactory {
          constructor(service, serviceName, errors) {
            this.service = service;
            this.serviceName = serviceName;
            this.errors = errors;
          }
          create(code, ...data) {
            const customData = data[0] || {};
            const fullCode = `${this.service}/${code}`;
            const template = this.errors[code];
            const message = template
              ? replaceTemplate(template, customData)
              : 'Error';
            // Service Name: Error message (service/code).
            const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
            const error = new FirebaseError(fullCode, fullMessage, customData);
            return error;
          }
        }
        function replaceTemplate(template, data) {
          return template.replace(PATTERN, (_, key) => {
            const value = data[key];
            return value != null ? String(value) : `<${key}?>`;
          });
        }
        const PATTERN = /\{\$([^}]+)}/g;
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Evaluates a JSON string into a javascript object.
         *
         * @param {string} str A string containing JSON.
         * @return {*} The javascript object representing the specified JSON.
         */ function jsonEval(str) {
          return JSON.parse(str);
        }
        /**
         * Returns JSON representing a javascript object.
         * @param {*} data JavaScript object to be stringified.
         * @return {string} The JSON contents of the object.
         */ function stringify(data) {
          return JSON.stringify(data);
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Decodes a Firebase auth. token into constituent parts.
         *
         * Notes:
         * - May return with invalid / incomplete claims if there's no native base64 decoding support.
         * - Doesn't check if the token is actually valid.
         */ const decode = function (token) {
          let header = {},
            claims = {},
            data = {},
            signature = '';
          try {
            const parts = token.split('.');
            header = jsonEval(base64Decode(parts[0]) || '');
            claims = jsonEval(base64Decode(parts[1]) || '');
            signature = parts[2];
            data = claims['d'] || {};
            delete claims['d'];
          } catch (e) {}
          return {
            header,
            claims,
            data,
            signature,
          };
        };
        /**
         * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
         * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
         *
         * Notes:
         * - May return a false negative if there's no native base64 decoding support.
         * - Doesn't check if the token is actually valid.
         */ const isValidTimestamp = function (token) {
          const claims = decode(token).claims;
          const now = Math.floor(new Date().getTime() / 1000);
          let validSince = 0,
            validUntil = 0;
          if (typeof claims === 'object') {
            if (claims.hasOwnProperty('nbf')) validSince = claims['nbf'];
            else if (claims.hasOwnProperty('iat')) validSince = claims['iat'];
            if (claims.hasOwnProperty('exp'))
              validUntil = claims['exp']; // token will expire after 24h by default
            else validUntil = validSince + 86400;
          }
          return (
            !!now &&
            !!validSince &&
            !!validUntil &&
            now >= validSince &&
            now <= validUntil
          );
        };
        /**
         * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
         *
         * Notes:
         * - May return null if there's no native base64 decoding support.
         * - Doesn't check if the token is actually valid.
         */ const issuedAtTime = function (token) {
          const claims = decode(token).claims;
          if (typeof claims === 'object' && claims.hasOwnProperty('iat'))
            return claims['iat'];
          return null;
        };
        /**
         * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
         *
         * Notes:
         * - May return a false negative if there's no native base64 decoding support.
         * - Doesn't check if the token is actually valid.
         */ const isValidFormat = function (token) {
          const decoded = decode(token),
            claims = decoded.claims;
          return (
            !!claims &&
            typeof claims === 'object' &&
            claims.hasOwnProperty('iat')
          );
        };
        /**
         * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
         *
         * Notes:
         * - May return a false negative if there's no native base64 decoding support.
         * - Doesn't check if the token is actually valid.
         */ const isAdmin = function (token) {
          const claims = decode(token).claims;
          return typeof claims === 'object' && claims['admin'] === true;
        };
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function contains(obj, key) {
          return Object.prototype.hasOwnProperty.call(obj, key);
        }
        function safeGet(obj, key) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
          else return undefined;
        }
        function isEmpty(obj) {
          for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
          }
          return true;
        }
        function map(obj, fn, contextObj) {
          const res = {};
          for (const key in obj)
            if (Object.prototype.hasOwnProperty.call(obj, key))
              res[key] = fn.call(contextObj, obj[key], key, obj);
          return res;
        }
        /**
         * Deep equal two objects. Support Arrays and Objects.
         */ function deepEqual(a, b) {
          if (a === b) return true;
          const aKeys = Object.keys(a);
          const bKeys = Object.keys(b);
          for (const k of aKeys) {
            if (!bKeys.includes(k)) return false;
            const aProp = a[k];
            const bProp = b[k];
            if (isObject(aProp) && isObject(bProp)) {
              if (!deepEqual(aProp, bProp)) return false;
            } else if (aProp !== bProp) return false;
          }
          for (const k of bKeys) {
            if (!aKeys.includes(k)) return false;
          }
          return true;
        }
        function isObject(thing) {
          return thing !== null && typeof thing === 'object';
        }
        /**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
         * @internal
         */ function promiseWithTimeout(promise, timeInMS = 2000) {
          const deferredPromise = new Deferred();
          setTimeout(() => deferredPromise.reject('timeout!'), timeInMS);
          promise.then(deferredPromise.resolve, deferredPromise.reject);
          return deferredPromise.promise;
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
         * params object (e.g. {arg: 'val', arg2: 'val2'})
         * Note: You must prepend it with ? when adding it to a URL.
         */ function querystring(querystringParams) {
          const params = [];
          for (const [key, value] of Object.entries(querystringParams))
            if (Array.isArray(value))
              value.forEach((arrayVal) => {
                params.push(
                  encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal)
                );
              });
            else
              params.push(
                encodeURIComponent(key) + '=' + encodeURIComponent(value)
              );
          return params.length ? '&' + params.join('&') : '';
        }
        /**
         * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
         * (e.g. {arg: 'val', arg2: 'val2'})
         */ function querystringDecode(querystring) {
          const obj = {};
          const tokens = querystring.replace(/^\?/, '').split('&');
          tokens.forEach((token) => {
            if (token) {
              const [key, value] = token.split('=');
              obj[decodeURIComponent(key)] = decodeURIComponent(value);
            }
          });
          return obj;
        }
        /**
         * Extract the query string part of a URL, including the leading question mark (if present).
         */ function extractQuerystring(url) {
          const queryStart = url.indexOf('?');
          if (!queryStart) return '';
          const fragmentStart = url.indexOf('#', queryStart);
          return url.substring(
            queryStart,
            fragmentStart > 0 ? fragmentStart : undefined
          );
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * @fileoverview SHA-1 cryptographic hash.
         * Variable names follow the notation in FIPS PUB 180-3:
         * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
         *
         * Usage:
         *   var sha1 = new sha1();
         *   sha1.update(bytes);
         *   var hash = sha1.digest();
         *
         * Performance:
         *   Chrome 23:   ~400 Mbit/s
         *   Firefox 16:  ~250 Mbit/s
         *
         */ /**
         * SHA-1 cryptographic hash constructor.
         *
         * The properties declared here are discussed in the above algorithm document.
         * @constructor
         * @final
         * @struct
         */ class Sha1 {
          constructor() {
            /**
             * Holds the previous values of accumulated variables a-e in the compress_
             * function.
             * @private
             */ this.chain_ = [];
            /**
             * A buffer holding the partially computed hash result.
             * @private
             */ this.buf_ = [];
            /**
             * An array of 80 bytes, each a part of the message to be hashed.  Referred to
             * as the message schedule in the docs.
             * @private
             */ this.W_ = [];
            /**
             * Contains data needed to pad messages less than 64 bytes.
             * @private
             */ this.pad_ = [];
            /**
             * @private {number}
             */ this.inbuf_ = 0;
            /**
             * @private {number}
             */ this.total_ = 0;
            this.blockSize = 64;
            this.pad_[0] = 128;
            for (let i = 1; i < this.blockSize; ++i) this.pad_[i] = 0;
            this.reset();
          }
          reset() {
            this.chain_[0] = 0x67452301;
            this.chain_[1] = 0xefcdab89;
            this.chain_[2] = 0x98badcfe;
            this.chain_[3] = 0x10325476;
            this.chain_[4] = 0xc3d2e1f0;
            this.inbuf_ = 0;
            this.total_ = 0;
          }
          /**
           * Internal compress helper function.
           * @param buf Block to compress.
           * @param offset Offset of the block in the buffer.
           * @private
           */ compress_(buf, offset) {
            if (!offset) offset = 0;
            const W = this.W_;
            // get 16 big endian words
            if (typeof buf === 'string')
              for (let i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                  (buf.charCodeAt(offset) << 24) |
                  (buf.charCodeAt(offset + 1) << 16) |
                  (buf.charCodeAt(offset + 2) << 8) |
                  buf.charCodeAt(offset + 3);
                offset += 4;
              }
            else
              for (let i = 0; i < 16; i++) {
                W[i] =
                  (buf[offset] << 24) |
                  (buf[offset + 1] << 16) |
                  (buf[offset + 2] << 8) |
                  buf[offset + 3];
                offset += 4;
              }
            // expand to 80 words
            for (let i = 16; i < 80; i++) {
              const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
              W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
            }
            let a = this.chain_[0];
            let b = this.chain_[1];
            let c = this.chain_[2];
            let d = this.chain_[3];
            let e = this.chain_[4];
            let f, k;
            // TODO(user): Try to unroll this loop to speed up the computation.
            for (let i = 0; i < 80; i++) {
              if (i < 40) {
                if (i < 20) {
                  f = d ^ (b & (c ^ d));
                  k = 0x5a827999;
                } else {
                  f = b ^ c ^ d;
                  k = 0x6ed9eba1;
                }
              } else if (i < 60) {
                f = (b & c) | (d & (b | c));
                k = 0x8f1bbcdc;
              } else {
                f = b ^ c ^ d;
                k = 0xca62c1d6;
              }
              const t =
                (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
              e = d;
              d = c;
              c = ((b << 30) | (b >>> 2)) & 0xffffffff;
              b = a;
              a = t;
            }
            this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
            this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
            this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
            this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
            this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
          }
          update(bytes, length) {
            // TODO(johnlenz): tighten the function signature and remove this check
            if (bytes == null) return;
            if (length === undefined) length = bytes.length;
            const lengthMinusBlock = length - this.blockSize;
            let n = 0;
            // Using local instead of member variables gives ~5% speedup on Firefox 16.
            const buf = this.buf_;
            let inbuf = this.inbuf_;
            // The outer while loop should execute at most twice.
            while (n < length) {
              // When we have no data in the block to top up, we can directly process the
              // input buffer (assuming it contains sufficient data). This gives ~25%
              // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
              // the data is provided in large chunks (or in multiples of 64 bytes).
              if (inbuf === 0)
                while (n <= lengthMinusBlock) {
                  this.compress_(bytes, n);
                  n += this.blockSize;
                }
              if (typeof bytes === 'string')
                while (n < length) {
                  buf[inbuf] = bytes.charCodeAt(n);
                  ++inbuf;
                  ++n;
                  if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                  }
                }
              else
                while (n < length) {
                  buf[inbuf] = bytes[n];
                  ++inbuf;
                  ++n;
                  if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                  }
                }
            }
            this.inbuf_ = inbuf;
            this.total_ += length;
          }
          /** @override */ digest() {
            const digest = [];
            let totalBits = this.total_ * 8;
            // Add pad 0x80 0x00*.
            if (this.inbuf_ < 56) this.update(this.pad_, 56 - this.inbuf_);
            else this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
            // Add # bits.
            for (let i = this.blockSize - 1; i >= 56; i--) {
              this.buf_[i] = totalBits & 255;
              totalBits /= 256; // Don't use bit-shifting here!
            }
            this.compress_(this.buf_);
            let n = 0;
            for (let i = 0; i < 5; i++)
              for (let j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
              }
            return digest;
          }
        }
        /**
         * Helper to make a Subscribe function (just like Promise helps make a
         * Thenable).
         *
         * @param executor Function which can make calls to a single Observer
         *     as a proxy.
         * @param onNoObservers Callback when count of Observers goes to zero.
         */ function createSubscribe(executor, onNoObservers) {
          const proxy = new ObserverProxy(executor, onNoObservers);
          return proxy.subscribe.bind(proxy);
        }
        /**
         * Implement fan-out for any number of Observers attached via a subscribe
         * function.
         */ class ObserverProxy {
          /**
           * @param executor Function which can make calls to a single Observer
           *     as a proxy.
           * @param onNoObservers Callback when count of Observers goes to zero.
           */ constructor(executor, onNoObservers) {
            this.observers = [];
            this.unsubscribes = [];
            this.observerCount = 0;
            // Micro-task scheduling by calling task.then().
            this.task = Promise.resolve();
            this.finalized = false;
            this.onNoObservers = onNoObservers;
            // Call the executor asynchronously so subscribers that are called
            // synchronously after the creation of the subscribe function
            // can still receive the very first value generated in the executor.
            this.task
              .then(() => {
                executor(this);
              })
              .catch((e) => {
                this.error(e);
              });
          }
          next(value) {
            this.forEachObserver((observer) => {
              observer.next(value);
            });
          }
          error(error) {
            this.forEachObserver((observer) => {
              observer.error(error);
            });
            this.close(error);
          }
          complete() {
            this.forEachObserver((observer) => {
              observer.complete();
            });
            this.close();
          }
          /**
           * Subscribe function that can be used to add an Observer to the fan-out list.
           *
           * - We require that no event is sent to a subscriber synchronously to their
           *   call to subscribe().
           */ subscribe(nextOrObserver, error, complete) {
            let observer;
            if (
              nextOrObserver === undefined &&
              error === undefined &&
              complete === undefined
            )
              throw new Error('Missing Observer.');
            // Assemble an Observer object when passed as callback functions.
            if (
              implementsAnyMethods(nextOrObserver, [
                'next',
                'error',
                'complete',
              ])
            )
              observer = nextOrObserver;
            else
              observer = {
                next: nextOrObserver,
                error,
                complete,
              };
            if (observer.next === undefined) observer.next = noop;
            if (observer.error === undefined) observer.error = noop;
            if (observer.complete === undefined) observer.complete = noop;
            const unsub = this.unsubscribeOne.bind(this, this.observers.length);
            // Attempt to subscribe to a terminated Observable - we
            // just respond to the Observer with the final error or complete
            // event.
            if (this.finalized)
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              this.task.then(() => {
                try {
                  if (this.finalError) observer.error(this.finalError);
                  else observer.complete();
                } catch (e) {
                  // nothing
                }
                return;
              });
            this.observers.push(observer);
            return unsub;
          }
          // Unsubscribe is synchronous - we guarantee that no events are sent to
          // any unsubscribed Observer.
          unsubscribeOne(i) {
            if (this.observers === undefined || this.observers[i] === undefined)
              return;
            delete this.observers[i];
            this.observerCount -= 1;
            if (this.observerCount === 0 && this.onNoObservers !== undefined)
              this.onNoObservers(this);
          }
          forEachObserver(fn) {
            if (this.finalized)
              // Already closed by previous event....just eat the additional values.
              return;
            // Since sendOne calls asynchronously - there is no chance that
            // this.observers will become undefined.
            for (let i = 0; i < this.observers.length; i++) this.sendOne(i, fn);
          }
          // Call the Observer via one of it's callback function. We are careful to
          // confirm that the observe has not been unsubscribed since this asynchronous
          // function had been queued.
          sendOne(i, fn) {
            // Execute the callback asynchronously
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
              if (
                this.observers !== undefined &&
                this.observers[i] !== undefined
              )
                try {
                  fn(this.observers[i]);
                } catch (e) {
                  // Ignore exceptions raised in Observers or missing methods of an
                  // Observer.
                  // Log error to console. b/31404806
                  if (typeof console !== 'undefined' && console.error)
                    console.error(e);
                }
            });
          }
          close(err) {
            if (this.finalized) return;
            this.finalized = true;
            if (err !== undefined) this.finalError = err;
            // Proxy is no longer needed - garbage collect references
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
              this.observers = undefined;
              this.onNoObservers = undefined;
            });
          }
        }
        /** Turn synchronous function into one called asynchronously. */ // eslint-disable-next-line @typescript-eslint/ban-types
        function async(fn, onError) {
          return (...args) => {
            Promise.resolve(true)
              .then(() => {
                fn(...args);
              })
              .catch((error) => {
                if (onError) onError(error);
              });
          };
        }
        /**
         * Return true if the object passed in implements any of the named methods.
         */ function implementsAnyMethods(obj, methods) {
          if (typeof obj !== 'object' || obj === null) return false;
          for (const method of methods) {
            if (method in obj && typeof obj[method] === 'function') return true;
          }
          return false;
        }
        function noop() {
          // do nothing
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Check to make sure the appropriate number of arguments are provided for a public function.
         * Throws an error if it fails.
         *
         * @param fnName The function name
         * @param minCount The minimum number of arguments to allow for the function call
         * @param maxCount The maximum number of argument to allow for the function call
         * @param argCount The actual number of arguments provided.
         */ const validateArgCount = function (
          fnName,
          minCount,
          maxCount,
          argCount
        ) {
          let argError;
          if (argCount < minCount) argError = 'at least ' + minCount;
          else if (argCount > maxCount)
            argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
          if (argError) {
            const error =
              fnName +
              ' failed: Was called with ' +
              argCount +
              (argCount === 1 ? ' argument.' : ' arguments.') +
              ' Expects ' +
              argError +
              '.';
            throw new Error(error);
          }
        };
        /**
         * Generates a string to prefix an error message about failed argument validation
         *
         * @param fnName The function name
         * @param argName The name of the argument
         * @return The prefix to add to the error thrown for validation.
         */ function errorPrefix(fnName, argName) {
          return `${fnName} failed: ${argName} argument `;
        }
        /**
         * @param fnName
         * @param argumentNumber
         * @param namespace
         * @param optional
         */ function validateNamespace(fnName, namespace, optional) {
          if (optional && !namespace) return;
          if (typeof namespace !== 'string')
            //TODO: I should do more validation here. We only allow certain chars in namespaces.
            throw new Error(
              errorPrefix(fnName, 'namespace') +
                'must be a valid firebase namespace.'
            );
        }
        function validateCallback(
          fnName,
          argumentName, // eslint-disable-next-line @typescript-eslint/ban-types
          callback,
          optional
        ) {
          if (optional && !callback) return;
          if (typeof callback !== 'function')
            throw new Error(
              errorPrefix(fnName, argumentName) + 'must be a valid function.'
            );
        }
        function validateContextObject(
          fnName,
          argumentName,
          context,
          optional
        ) {
          if (optional && !context) return;
          if (typeof context !== 'object' || context === null)
            throw new Error(
              errorPrefix(fnName, argumentName) +
                'must be a valid context object.'
            );
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
        // automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
        // so it's been modified.
        // Note that not all Unicode characters appear as single characters in JavaScript strings.
        // fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
        // use 2 characters in JavaScript.  All 4-byte UTF-8 characters begin with a first
        // character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
        // pair).
        // See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
        /**
         * @param {string} str
         * @return {Array}
         */ const stringToByteArray = function (str) {
          const out = [];
          let p = 0;
          for (let i = 0; i < str.length; i++) {
            let c = str.charCodeAt(i);
            // Is this the lead surrogate in a surrogate pair?
            if (c >= 0xd800 && c <= 0xdbff) {
              const high = c - 0xd800; // the high 10 bits.
              i++;
              assert(i < str.length, 'Surrogate pair missing trail surrogate.');
              const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
              c = 0x10000 + (high << 10) + low;
            }
            if (c < 128) out[p++] = c;
            else if (c < 2048) {
              out[p++] = (c >> 6) | 192;
              out[p++] = (c & 63) | 128;
            } else if (c < 65536) {
              out[p++] = (c >> 12) | 224;
              out[p++] = ((c >> 6) & 63) | 128;
              out[p++] = (c & 63) | 128;
            } else {
              out[p++] = (c >> 18) | 240;
              out[p++] = ((c >> 12) & 63) | 128;
              out[p++] = ((c >> 6) & 63) | 128;
              out[p++] = (c & 63) | 128;
            }
          }
          return out;
        };
        /**
         * Calculate length without actually converting; useful for doing cheaper validation.
         * @param {string} str
         * @return {number}
         */ const stringLength = function (str) {
          let p = 0;
          for (let i = 0; i < str.length; i++) {
            const c = str.charCodeAt(i);
            if (c < 128) p++;
            else if (c < 2048) p += 2;
            else if (c >= 0xd800 && c <= 0xdbff) {
              // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
              p += 4;
              i++; // skip trail surrogate.
            } else p += 3;
          }
          return p;
        };
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * The amount of milliseconds to exponentially increase.
         */ const DEFAULT_INTERVAL_MILLIS = 1000;
        /**
         * The factor to backoff by.
         * Should be a number greater than 1.
         */ const DEFAULT_BACKOFF_FACTOR = 2;
        /**
         * The maximum milliseconds to increase to.
         *
         * <p>Visible for testing
         */ const MAX_VALUE_MILLIS = 14400000; // Four hours, like iOS and Android.
        /**
         * The percentage of backoff time to randomize by.
         * See
         * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
         * for context.
         *
         * <p>Visible for testing
         */ const RANDOM_FACTOR = 0.5;
        /**
         * Based on the backoff method from
         * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
         * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
         */ function calculateBackoffMillis(
          backoffCount,
          intervalMillis = DEFAULT_INTERVAL_MILLIS,
          backoffFactor = DEFAULT_BACKOFF_FACTOR
        ) {
          // Calculates an exponentially increasing value.
          // Deviation: calculates value from count and a constant interval, so we only need to save value
          // and count to restore state.
          const currBaseValue =
            intervalMillis * Math.pow(backoffFactor, backoffCount);
          // A random "fuzz" to avoid waves of retries.
          // Deviation: randomFactor is required.
          const randomWait = Math.round(
            // A fraction of the backoff value to add/subtract.
            // Deviation: changes multiplication order to improve readability.
            RANDOM_FACTOR *
              currBaseValue * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
              // if we add or subtract.
              (Math.random() - 0.5) *
              2
          );
          // Limits backoff to max to avoid effectively permanent backoff.
          return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
        }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Provide English ordinal letters after a number
         */ function ordinal(i) {
          if (!Number.isFinite(i)) return `${i}`;
          return i + indicator(i);
        }
        function indicator(i) {
          i = Math.abs(i);
          const cent = i % 100;
          if (cent >= 10 && cent <= 20) return 'th';
          const dec = i % 10;
          if (dec === 1) return 'st';
          if (dec === 2) return 'nd';
          if (dec === 3) return 'rd';
          return 'th';
        }
        /**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function getModularInstance(service) {
          if (service && service._delegate) return service._delegate;
          else return service;
        }
      },
      {
        d07263985281b344: 'gq3cc',
        './postinstall.mjs': 'b1ZFC',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    b1ZFC: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(
          exports,
          'getDefaultsFromPostinstall',
          () => getDefaultsFromPostinstall
        );
        const getDefaultsFromPostinstall = () => undefined;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    lCD4Y: [
      function (require, module, exports, __globalThis) {
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * A container for all of the Logger instances
         */ var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'LogLevel', () => LogLevel);
        parcelHelpers.export(exports, 'Logger', () => Logger);
        parcelHelpers.export(exports, 'setLogLevel', () => setLogLevel);
        parcelHelpers.export(
          exports,
          'setUserLogHandler',
          () => setUserLogHandler
        );
        const instances = [];
        /**
         * The JS SDK supports 5 log levels and also allows a user the ability to
         * silence the logs altogether.
         *
         * The order is a follows:
         * DEBUG < VERBOSE < INFO < WARN < ERROR
         *
         * All of the log types above the current log level will be captured (i.e. if
         * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
         * `VERBOSE` logs will not)
         */ var LogLevel;
        (function (LogLevel) {
          LogLevel[(LogLevel['DEBUG'] = 0)] = 'DEBUG';
          LogLevel[(LogLevel['VERBOSE'] = 1)] = 'VERBOSE';
          LogLevel[(LogLevel['INFO'] = 2)] = 'INFO';
          LogLevel[(LogLevel['WARN'] = 3)] = 'WARN';
          LogLevel[(LogLevel['ERROR'] = 4)] = 'ERROR';
          LogLevel[(LogLevel['SILENT'] = 5)] = 'SILENT';
        })(LogLevel || (LogLevel = {}));
        const levelStringToEnum = {
          debug: LogLevel.DEBUG,
          verbose: LogLevel.VERBOSE,
          info: LogLevel.INFO,
          warn: LogLevel.WARN,
          error: LogLevel.ERROR,
          silent: LogLevel.SILENT,
        };
        /**
         * The default log level
         */ const defaultLogLevel = LogLevel.INFO;
        /**
         * By default, `console.debug` is not displayed in the developer console (in
         * chrome). To avoid forcing users to have to opt-in to these logs twice
         * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
         * logs to the `console.log` function.
         */ const ConsoleMethod = {
          [LogLevel.DEBUG]: 'log',
          [LogLevel.VERBOSE]: 'log',
          [LogLevel.INFO]: 'info',
          [LogLevel.WARN]: 'warn',
          [LogLevel.ERROR]: 'error',
        };
        /**
         * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
         * messages on to their corresponding console counterparts (if the log method
         * is supported by the current log level)
         */ const defaultLogHandler = (instance, logType, ...args) => {
          if (logType < instance.logLevel) return;
          const now = new Date().toISOString();
          const method = ConsoleMethod[logType];
          if (method) console[method](`[${now}]  ${instance.name}:`, ...args);
          else
            throw new Error(
              `Attempted to log a message with an invalid logType (value: ${logType})`
            );
        };
        class Logger {
          /**
           * Gives you an instance of a Logger to capture messages according to
           * Firebase's logging scheme.
           *
           * @param name The name that the logs will be associated with
           */ constructor(name) {
            this.name = name;
            /**
             * The log level of the given Logger instance.
             */ this._logLevel = defaultLogLevel;
            /**
             * The main (internal) log handler for the Logger instance.
             * Can be set to a new function in internal package code but not by user.
             */ this._logHandler = defaultLogHandler;
            /**
             * The optional, additional, user-defined log handler for the Logger instance.
             */ this._userLogHandler = null;
            /**
             * Capture the current instance for later use
             */ instances.push(this);
          }
          get logLevel() {
            return this._logLevel;
          }
          set logLevel(val) {
            if (!(val in LogLevel))
              throw new TypeError(
                `Invalid value "${val}" assigned to \`logLevel\``
              );
            this._logLevel = val;
          }
          // Workaround for setter/getter having to be the same type.
          setLogLevel(val) {
            this._logLevel =
              typeof val === 'string' ? levelStringToEnum[val] : val;
          }
          get logHandler() {
            return this._logHandler;
          }
          set logHandler(val) {
            if (typeof val !== 'function')
              throw new TypeError(
                'Value assigned to `logHandler` must be a function'
              );
            this._logHandler = val;
          }
          get userLogHandler() {
            return this._userLogHandler;
          }
          set userLogHandler(val) {
            this._userLogHandler = val;
          }
          /**
           * The functions below are all based on the `console` interface
           */ debug(...args) {
            this._userLogHandler &&
              this._userLogHandler(this, LogLevel.DEBUG, ...args);
            this._logHandler(this, LogLevel.DEBUG, ...args);
          }
          log(...args) {
            this._userLogHandler &&
              this._userLogHandler(this, LogLevel.VERBOSE, ...args);
            this._logHandler(this, LogLevel.VERBOSE, ...args);
          }
          info(...args) {
            this._userLogHandler &&
              this._userLogHandler(this, LogLevel.INFO, ...args);
            this._logHandler(this, LogLevel.INFO, ...args);
          }
          warn(...args) {
            this._userLogHandler &&
              this._userLogHandler(this, LogLevel.WARN, ...args);
            this._logHandler(this, LogLevel.WARN, ...args);
          }
          error(...args) {
            this._userLogHandler &&
              this._userLogHandler(this, LogLevel.ERROR, ...args);
            this._logHandler(this, LogLevel.ERROR, ...args);
          }
        }
        function setLogLevel(level) {
          instances.forEach((inst) => {
            inst.setLogLevel(level);
          });
        }
        function setUserLogHandler(logCallback, options) {
          for (const instance of instances) {
            let customLogLevel = null;
            if (options && options.level)
              customLogLevel = levelStringToEnum[options.level];
            if (logCallback === null) instance.userLogHandler = null;
            else
              instance.userLogHandler = (instance, level, ...args) => {
                const message = args
                  .map((arg) => {
                    if (arg == null) return null;
                    else if (typeof arg === 'string') return arg;
                    else if (
                      typeof arg === 'number' ||
                      typeof arg === 'boolean'
                    )
                      return arg.toString();
                    else if (arg instanceof Error) return arg.message;
                    else
                      try {
                        return JSON.stringify(arg);
                      } catch (ignored) {
                        return null;
                      }
                  })
                  .filter((arg) => arg)
                  .join(' ');
                if (
                  level >=
                  (customLogLevel !== null && customLogLevel !== void 0
                    ? customLogLevel
                    : instance.logLevel)
                )
                  logCallback({
                    level: LogLevel[level].toLowerCase(),
                    message,
                    args,
                    type: instance.name,
                  });
              };
          }
        }
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    bhyM4: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'unwrap', () => (0, _wrapIdbValueJs.u));
        parcelHelpers.export(exports, 'wrap', () => (0, _wrapIdbValueJs.w));
        parcelHelpers.export(exports, 'deleteDB', () => deleteDB);
        parcelHelpers.export(exports, 'openDB', () => openDB);
        var _wrapIdbValueJs = require('./wrap-idb-value.js');
        /**
         * Open a database.
         *
         * @param name Name of the database.
         * @param version Schema version.
         * @param callbacks Additional callbacks.
         */ function openDB(
          name,
          version,
          { blocked, upgrade, blocking, terminated } = {}
        ) {
          const request = indexedDB.open(name, version);
          const openPromise = (0, _wrapIdbValueJs.w)(request);
          if (upgrade)
            request.addEventListener('upgradeneeded', (event) => {
              upgrade(
                (0, _wrapIdbValueJs.w)(request.result),
                event.oldVersion,
                event.newVersion,
                (0, _wrapIdbValueJs.w)(request.transaction),
                event
              );
            });
          if (blocked)
            request.addEventListener('blocked', (event) =>
              blocked(
                // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
                event.oldVersion,
                event.newVersion,
                event
              )
            );
          openPromise
            .then((db) => {
              if (terminated) db.addEventListener('close', () => terminated());
              if (blocking)
                db.addEventListener('versionchange', (event) =>
                  blocking(event.oldVersion, event.newVersion, event)
                );
            })
            .catch(() => {});
          return openPromise;
        }
        /**
         * Delete a database.
         *
         * @param name Name of the database.
         */ function deleteDB(name, { blocked } = {}) {
          const request = indexedDB.deleteDatabase(name);
          if (blocked)
            request.addEventListener('blocked', (event) =>
              blocked(
                // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
                event.oldVersion,
                event
              )
            );
          return (0, _wrapIdbValueJs.w)(request).then(() => undefined);
        }
        const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
        const writeMethods = ['put', 'add', 'delete', 'clear'];
        const cachedMethods = new Map();
        function getMethod(target, prop) {
          if (
            !(
              target instanceof IDBDatabase &&
              !(prop in target) &&
              typeof prop === 'string'
            )
          )
            return;
          if (cachedMethods.get(prop)) return cachedMethods.get(prop);
          const targetFuncName = prop.replace(/FromIndex$/, '');
          const useIndex = prop !== targetFuncName;
          const isWrite = writeMethods.includes(targetFuncName);
          if (
            // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
            !(
              targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype
            ) ||
            !(isWrite || readMethods.includes(targetFuncName))
          )
            return;
          const method = async function (storeName, ...args) {
            // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
            const tx = this.transaction(
              storeName,
              isWrite ? 'readwrite' : 'readonly'
            );
            let target = tx.store;
            if (useIndex) target = target.index(args.shift());
            // Must reject if op rejects.
            // If it's a write operation, must reject if tx.done rejects.
            // Must reject with op rejection first.
            // Must resolve with op value.
            // Must handle both promises (no unhandled rejections)
            return (
              await Promise.all([
                target[targetFuncName](...args),
                isWrite && tx.done,
              ])
            )[0];
          };
          cachedMethods.set(prop, method);
          return method;
        }
        (0, _wrapIdbValueJs.r)((oldTraps) => ({
          ...oldTraps,
          get: (target, prop, receiver) =>
            getMethod(target, prop) || oldTraps.get(target, prop, receiver),
          has: (target, prop) =>
            !!getMethod(target, prop) || oldTraps.has(target, prop),
        }));
      },
      {
        './wrap-idb-value.js': '81kvu',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '81kvu': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'a', () => reverseTransformCache);
        parcelHelpers.export(exports, 'i', () => instanceOfAny);
        parcelHelpers.export(exports, 'r', () => replaceTraps);
        parcelHelpers.export(exports, 'u', () => unwrap);
        parcelHelpers.export(exports, 'w', () => wrap);
        const instanceOfAny = (object, constructors) =>
          constructors.some((c) => object instanceof c);
        let idbProxyableTypes;
        let cursorAdvanceMethods;
        // This is a function to prevent it throwing up in node environments.
        function getIdbProxyableTypes() {
          return (
            idbProxyableTypes ||
            (idbProxyableTypes = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
            ])
          );
        }
        // This is a function to prevent it throwing up in node environments.
        function getCursorAdvanceMethods() {
          return (
            cursorAdvanceMethods ||
            (cursorAdvanceMethods = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
            ])
          );
        }
        const cursorRequestMap = new WeakMap();
        const transactionDoneMap = new WeakMap();
        const transactionStoreNamesMap = new WeakMap();
        const transformCache = new WeakMap();
        const reverseTransformCache = new WeakMap();
        function promisifyRequest(request) {
          const promise = new Promise((resolve, reject) => {
            const unlisten = () => {
              request.removeEventListener('success', success);
              request.removeEventListener('error', error);
            };
            const success = () => {
              resolve(wrap(request.result));
              unlisten();
            };
            const error = () => {
              reject(request.error);
              unlisten();
            };
            request.addEventListener('success', success);
            request.addEventListener('error', error);
          });
          promise
            .then((value) => {
              // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
              // (see wrapFunction).
              if (value instanceof IDBCursor)
                cursorRequestMap.set(value, request);
              // Catching to avoid "Uncaught Promise exceptions"
            })
            .catch(() => {});
          // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
          // is because we create many promises from a single IDBRequest.
          reverseTransformCache.set(promise, request);
          return promise;
        }
        function cacheDonePromiseForTransaction(tx) {
          // Early bail if we've already created a done promise for this transaction.
          if (transactionDoneMap.has(tx)) return;
          const done = new Promise((resolve, reject) => {
            const unlisten = () => {
              tx.removeEventListener('complete', complete);
              tx.removeEventListener('error', error);
              tx.removeEventListener('abort', error);
            };
            const complete = () => {
              resolve();
              unlisten();
            };
            const error = () => {
              reject(tx.error || new DOMException('AbortError', 'AbortError'));
              unlisten();
            };
            tx.addEventListener('complete', complete);
            tx.addEventListener('error', error);
            tx.addEventListener('abort', error);
          });
          // Cache it for later retrieval.
          transactionDoneMap.set(tx, done);
        }
        let idbProxyTraps = {
          get(target, prop, receiver) {
            if (target instanceof IDBTransaction) {
              // Special handling for transaction.done.
              if (prop === 'done') return transactionDoneMap.get(target);
              // Polyfill for objectStoreNames because of Edge.
              if (prop === 'objectStoreNames')
                return (
                  target.objectStoreNames ||
                  transactionStoreNamesMap.get(target)
                );
              // Make tx.store return the only store in the transaction, or undefined if there are many.
              if (prop === 'store')
                return receiver.objectStoreNames[1]
                  ? undefined
                  : receiver.objectStore(receiver.objectStoreNames[0]);
            }
            // Else transform whatever we get back.
            return wrap(target[prop]);
          },
          set(target, prop, value) {
            target[prop] = value;
            return true;
          },
          has(target, prop) {
            if (
              target instanceof IDBTransaction &&
              (prop === 'done' || prop === 'store')
            )
              return true;
            return prop in target;
          },
        };
        function replaceTraps(callback) {
          idbProxyTraps = callback(idbProxyTraps);
        }
        function wrapFunction(func) {
          // Due to expected object equality (which is enforced by the caching in `wrap`), we
          // only create one new func per func.
          // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
          if (
            func === IDBDatabase.prototype.transaction &&
            !('objectStoreNames' in IDBTransaction.prototype)
          )
            return function (storeNames, ...args) {
              const tx = func.call(unwrap(this), storeNames, ...args);
              transactionStoreNamesMap.set(
                tx,
                storeNames.sort ? storeNames.sort() : [storeNames]
              );
              return wrap(tx);
            };
          // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
          // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
          // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
          // with real promises, so each advance methods returns a new promise for the cursor object, or
          // undefined if the end of the cursor has been reached.
          if (getCursorAdvanceMethods().includes(func))
            return function (...args) {
              // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
              // the original object.
              func.apply(unwrap(this), args);
              return wrap(cursorRequestMap.get(this));
            };
          return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            return wrap(func.apply(unwrap(this), args));
          };
        }
        function transformCachableValue(value) {
          if (typeof value === 'function') return wrapFunction(value);
          // This doesn't return, it just creates a 'done' promise for the transaction,
          // which is later returned for transaction.done (see idbObjectHandler).
          if (value instanceof IDBTransaction)
            cacheDonePromiseForTransaction(value);
          if (instanceOfAny(value, getIdbProxyableTypes()))
            return new Proxy(value, idbProxyTraps);
          // Return the same value back if we're not going to transform it.
          return value;
        }
        function wrap(value) {
          // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
          // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
          if (value instanceof IDBRequest) return promisifyRequest(value);
          // If we've already transformed this value before, reuse the transformed value.
          // This is faster, but it also provides object equality.
          if (transformCache.has(value)) return transformCache.get(value);
          const newValue = transformCachableValue(value);
          // Not all types are transformed.
          // These may be primitive types, so they can't be WeakMap keys.
          if (newValue !== value) {
            transformCache.set(value, newValue);
            reverseTransformCache.set(newValue, value);
          }
          return newValue;
        }
        const unwrap = (value) => reverseTransformCache.get(value);
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh' },
    ],
    meIiY: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _messaging = require('@firebase/messaging');
        parcelHelpers.exportAll(_messaging, exports);
      },
      {
        '@firebase/messaging': 'f5k1m',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    f5k1m: [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'deleteToken', () => deleteToken);
        parcelHelpers.export(
          exports,
          'getMessaging',
          () => getMessagingInWindow
        );
        parcelHelpers.export(exports, 'getToken', () => getToken);
        parcelHelpers.export(exports, 'isSupported', () => isWindowSupported);
        parcelHelpers.export(exports, 'onMessage', () => onMessage);
        var _installations = require('@firebase/installations');
        var _component = require('@firebase/component');
        var _idb = require('idb');
        var _util = require('@firebase/util');
        var _app = require('@firebase/app');
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const DEFAULT_SW_PATH = '/firebase-messaging-sw.js';
        const DEFAULT_SW_SCOPE = '/firebase-cloud-messaging-push-scope';
        const DEFAULT_VAPID_KEY =
          'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';
        const ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';
        const CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
        const CONSOLE_CAMPAIGN_NAME = 'google.c.a.c_l';
        const CONSOLE_CAMPAIGN_TIME = 'google.c.a.ts';
        /** Set to '1' if Analytics is enabled for the campaign */ const CONSOLE_CAMPAIGN_ANALYTICS_ENABLED =
          'google.c.a.e';
        const DEFAULT_REGISTRATION_TIMEOUT = 10000;
        var MessageType$1;
        (function (MessageType) {
          MessageType[(MessageType['DATA_MESSAGE'] = 1)] = 'DATA_MESSAGE';
          MessageType[(MessageType['DISPLAY_NOTIFICATION'] = 3)] =
            'DISPLAY_NOTIFICATION';
        })(MessageType$1 || (MessageType$1 = {}));
        /**
         * @license
         * Copyright 2018 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
         * in compliance with the License. You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software distributed under the License
         * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
         * or implied. See the License for the specific language governing permissions and limitations under
         * the License.
         */ var MessageType;
        (function (MessageType) {
          MessageType['PUSH_RECEIVED'] = 'push-received';
          MessageType['NOTIFICATION_CLICKED'] = 'notification-clicked';
        })(MessageType || (MessageType = {}));
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function arrayToBase64(array) {
          const uint8Array = new Uint8Array(array);
          const base64String = btoa(String.fromCharCode(...uint8Array));
          return base64String
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
        }
        function base64ToArray(base64String) {
          const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
          const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');
          const rawData = atob(base64);
          const outputArray = new Uint8Array(rawData.length);
          for (let i = 0; i < rawData.length; ++i)
            outputArray[i] = rawData.charCodeAt(i);
          return outputArray;
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const OLD_DB_NAME = 'fcm_token_details_db';
        /**
         * The last DB version of 'fcm_token_details_db' was 4. This is one higher, so that the upgrade
         * callback is called for all versions of the old DB.
         */ const OLD_DB_VERSION = 5;
        const OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';
        async function migrateOldDatabase(senderId) {
          if ('databases' in indexedDB) {
            // indexedDb.databases() is an IndexedDB v3 API and does not exist in all browsers. TODO: Remove
            // typecast when it lands in TS types.
            const databases = await indexedDB.databases();
            const dbNames = databases.map((db) => db.name);
            if (!dbNames.includes(OLD_DB_NAME))
              // old DB didn't exist, no need to open.
              return null;
          }
          let tokenDetails = null;
          const db = await (0, _idb.openDB)(OLD_DB_NAME, OLD_DB_VERSION, {
            upgrade: async (db, oldVersion, newVersion, upgradeTransaction) => {
              var _a;
              if (oldVersion < 2)
                // Database too old, skip migration.
                return;
              if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME))
                // Database did not exist. Nothing to do.
                return;
              const objectStore = upgradeTransaction.objectStore(
                OLD_OBJECT_STORE_NAME
              );
              const value = await objectStore
                .index('fcmSenderId')
                .get(senderId);
              await objectStore.clear();
              if (!value)
                // No entry in the database, nothing to migrate.
                return;
              if (oldVersion === 2) {
                const oldDetails = value;
                if (
                  !oldDetails.auth ||
                  !oldDetails.p256dh ||
                  !oldDetails.endpoint
                )
                  return;
                tokenDetails = {
                  token: oldDetails.fcmToken,
                  createTime:
                    (_a = oldDetails.createTime) !== null && _a !== void 0
                      ? _a
                      : Date.now(),
                  subscriptionOptions: {
                    auth: oldDetails.auth,
                    p256dh: oldDetails.p256dh,
                    endpoint: oldDetails.endpoint,
                    swScope: oldDetails.swScope,
                    vapidKey:
                      typeof oldDetails.vapidKey === 'string'
                        ? oldDetails.vapidKey
                        : arrayToBase64(oldDetails.vapidKey),
                  },
                };
              } else if (oldVersion === 3) {
                const oldDetails = value;
                tokenDetails = {
                  token: oldDetails.fcmToken,
                  createTime: oldDetails.createTime,
                  subscriptionOptions: {
                    auth: arrayToBase64(oldDetails.auth),
                    p256dh: arrayToBase64(oldDetails.p256dh),
                    endpoint: oldDetails.endpoint,
                    swScope: oldDetails.swScope,
                    vapidKey: arrayToBase64(oldDetails.vapidKey),
                  },
                };
              } else if (oldVersion === 4) {
                const oldDetails = value;
                tokenDetails = {
                  token: oldDetails.fcmToken,
                  createTime: oldDetails.createTime,
                  subscriptionOptions: {
                    auth: arrayToBase64(oldDetails.auth),
                    p256dh: arrayToBase64(oldDetails.p256dh),
                    endpoint: oldDetails.endpoint,
                    swScope: oldDetails.swScope,
                    vapidKey: arrayToBase64(oldDetails.vapidKey),
                  },
                };
              }
            },
          });
          db.close();
          // Delete all old databases.
          await (0, _idb.deleteDB)(OLD_DB_NAME);
          await (0, _idb.deleteDB)('fcm_vapid_details_db');
          await (0, _idb.deleteDB)('undefined');
          return checkTokenDetails(tokenDetails) ? tokenDetails : null;
        }
        function checkTokenDetails(tokenDetails) {
          if (!tokenDetails || !tokenDetails.subscriptionOptions) return false;
          const { subscriptionOptions } = tokenDetails;
          return (
            typeof tokenDetails.createTime === 'number' &&
            tokenDetails.createTime > 0 &&
            typeof tokenDetails.token === 'string' &&
            tokenDetails.token.length > 0 &&
            typeof subscriptionOptions.auth === 'string' &&
            subscriptionOptions.auth.length > 0 &&
            typeof subscriptionOptions.p256dh === 'string' &&
            subscriptionOptions.p256dh.length > 0 &&
            typeof subscriptionOptions.endpoint === 'string' &&
            subscriptionOptions.endpoint.length > 0 &&
            typeof subscriptionOptions.swScope === 'string' &&
            subscriptionOptions.swScope.length > 0 &&
            typeof subscriptionOptions.vapidKey === 'string' &&
            subscriptionOptions.vapidKey.length > 0
          );
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ // Exported for tests.
        const DATABASE_NAME = 'firebase-messaging-database';
        const DATABASE_VERSION = 1;
        const OBJECT_STORE_NAME = 'firebase-messaging-store';
        let dbPromise = null;
        function getDbPromise() {
          if (!dbPromise)
            dbPromise = (0, _idb.openDB)(DATABASE_NAME, DATABASE_VERSION, {
              upgrade: (upgradeDb, oldVersion) => {
                // We don't use 'break' in this switch statement, the fall-through behavior is what we want,
                // because if there are multiple versions between the old version and the current version, we
                // want ALL the migrations that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                  case 0:
                    upgradeDb.createObjectStore(OBJECT_STORE_NAME);
                }
              },
            });
          return dbPromise;
        }
        /** Gets record(s) from the objectStore that match the given key. */ async function dbGet(
          firebaseDependencies
        ) {
          const key = getKey(firebaseDependencies);
          const db = await getDbPromise();
          const tokenDetails = await db
            .transaction(OBJECT_STORE_NAME)
            .objectStore(OBJECT_STORE_NAME)
            .get(key);
          if (tokenDetails) return tokenDetails;
          else {
            // Check if there is a tokenDetails object in the old DB.
            const oldTokenDetails = await migrateOldDatabase(
              firebaseDependencies.appConfig.senderId
            );
            if (oldTokenDetails) {
              await dbSet(firebaseDependencies, oldTokenDetails);
              return oldTokenDetails;
            }
          }
        }
        /** Assigns or overwrites the record for the given key with the given value. */ async function dbSet(
          firebaseDependencies,
          tokenDetails
        ) {
          const key = getKey(firebaseDependencies);
          const db = await getDbPromise();
          const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          await tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key);
          await tx.done;
          return tokenDetails;
        }
        /** Removes record(s) from the objectStore that match the given key. */ async function dbRemove(
          firebaseDependencies
        ) {
          const key = getKey(firebaseDependencies);
          const db = await getDbPromise();
          const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          await tx.objectStore(OBJECT_STORE_NAME).delete(key);
          await tx.done;
        }
        function getKey({ appConfig }) {
          return appConfig.appId;
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const ERROR_MAP = {
          ['missing-app-config-values' /* ErrorCode.MISSING_APP_CONFIG_VALUES */]:
            'Missing App configuration value: "{$valueName}"',
          ['only-available-in-window' /* ErrorCode.AVAILABLE_IN_WINDOW */]:
            'This method is available in a Window context.',
          ['only-available-in-sw' /* ErrorCode.AVAILABLE_IN_SW */]:
            'This method is available in a service worker context.',
          ['permission-default' /* ErrorCode.PERMISSION_DEFAULT */]:
            'The notification permission was not granted and dismissed instead.',
          ['permission-blocked' /* ErrorCode.PERMISSION_BLOCKED */]:
            'The notification permission was not granted and blocked instead.',
          ['unsupported-browser' /* ErrorCode.UNSUPPORTED_BROWSER */]:
            "This browser doesn't support the API's required to use the Firebase SDK.",
          ['indexed-db-unsupported' /* ErrorCode.INDEXED_DB_UNSUPPORTED */]:
            "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
          ['failed-service-worker-registration' /* ErrorCode.FAILED_DEFAULT_REGISTRATION */]:
            'We are unable to register the default service worker. {$browserErrorMessage}',
          ['token-subscribe-failed' /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */]:
            'A problem occurred while subscribing the user to FCM: {$errorInfo}',
          ['token-subscribe-no-token' /* ErrorCode.TOKEN_SUBSCRIBE_NO_TOKEN */]:
            'FCM returned no token when subscribing the user to push.',
          ['token-unsubscribe-failed' /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */]:
            'A problem occurred while unsubscribing the user from FCM: {$errorInfo}',
          ['token-update-failed' /* ErrorCode.TOKEN_UPDATE_FAILED */]:
            'A problem occurred while updating the user from FCM: {$errorInfo}',
          ['token-update-no-token' /* ErrorCode.TOKEN_UPDATE_NO_TOKEN */]:
            'FCM returned no token when updating the user to push.',
          ['use-sw-after-get-token' /* ErrorCode.USE_SW_AFTER_GET_TOKEN */]:
            'The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.',
          ['invalid-sw-registration' /* ErrorCode.INVALID_SW_REGISTRATION */]:
            'The input to useServiceWorker() must be a ServiceWorkerRegistration.',
          ['invalid-bg-handler' /* ErrorCode.INVALID_BG_HANDLER */]:
            'The input to setBackgroundMessageHandler() must be a function.',
          ['invalid-vapid-key' /* ErrorCode.INVALID_VAPID_KEY */]:
            'The public VAPID key must be a string.',
          ['use-vapid-key-after-get-token' /* ErrorCode.USE_VAPID_KEY_AFTER_GET_TOKEN */]:
            'The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.',
        };
        const ERROR_FACTORY = new (0, _util.ErrorFactory)(
          'messaging',
          'Messaging',
          ERROR_MAP
        );
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ async function requestGetToken(
          firebaseDependencies,
          subscriptionOptions
        ) {
          const headers = await getHeaders(firebaseDependencies);
          const body = getBody(subscriptionOptions);
          const subscribeOptions = {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
          };
          let responseData;
          try {
            const response = await fetch(
              getEndpoint(firebaseDependencies.appConfig),
              subscribeOptions
            );
            responseData = await response.json();
          } catch (err) {
            throw ERROR_FACTORY.create(
              'token-subscribe-failed' /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */,
              {
                errorInfo:
                  err === null || err === void 0 ? void 0 : err.toString(),
              }
            );
          }
          if (responseData.error) {
            const message = responseData.error.message;
            throw ERROR_FACTORY.create(
              'token-subscribe-failed' /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */,
              {
                errorInfo: message,
              }
            );
          }
          if (!responseData.token)
            throw ERROR_FACTORY.create(
              'token-subscribe-no-token' /* ErrorCode.TOKEN_SUBSCRIBE_NO_TOKEN */
            );
          return responseData.token;
        }
        async function requestUpdateToken(firebaseDependencies, tokenDetails) {
          const headers = await getHeaders(firebaseDependencies);
          const body = getBody(tokenDetails.subscriptionOptions);
          const updateOptions = {
            method: 'PATCH',
            headers,
            body: JSON.stringify(body),
          };
          let responseData;
          try {
            const response = await fetch(
              `${getEndpoint(firebaseDependencies.appConfig)}/${tokenDetails.token}`,
              updateOptions
            );
            responseData = await response.json();
          } catch (err) {
            throw ERROR_FACTORY.create(
              'token-update-failed' /* ErrorCode.TOKEN_UPDATE_FAILED */,
              {
                errorInfo:
                  err === null || err === void 0 ? void 0 : err.toString(),
              }
            );
          }
          if (responseData.error) {
            const message = responseData.error.message;
            throw ERROR_FACTORY.create(
              'token-update-failed' /* ErrorCode.TOKEN_UPDATE_FAILED */,
              {
                errorInfo: message,
              }
            );
          }
          if (!responseData.token)
            throw ERROR_FACTORY.create(
              'token-update-no-token' /* ErrorCode.TOKEN_UPDATE_NO_TOKEN */
            );
          return responseData.token;
        }
        async function requestDeleteToken(firebaseDependencies, token) {
          const headers = await getHeaders(firebaseDependencies);
          const unsubscribeOptions = {
            method: 'DELETE',
            headers,
          };
          try {
            const response = await fetch(
              `${getEndpoint(firebaseDependencies.appConfig)}/${token}`,
              unsubscribeOptions
            );
            const responseData = await response.json();
            if (responseData.error) {
              const message = responseData.error.message;
              throw ERROR_FACTORY.create(
                'token-unsubscribe-failed' /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */,
                {
                  errorInfo: message,
                }
              );
            }
          } catch (err) {
            throw ERROR_FACTORY.create(
              'token-unsubscribe-failed' /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */,
              {
                errorInfo:
                  err === null || err === void 0 ? void 0 : err.toString(),
              }
            );
          }
        }
        function getEndpoint({ projectId }) {
          return `${ENDPOINT}/projects/${projectId}/registrations`;
        }
        async function getHeaders({ appConfig, installations }) {
          const authToken = await installations.getToken();
          return new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-goog-api-key': appConfig.apiKey,
            'x-goog-firebase-installations-auth': `FIS ${authToken}`,
          });
        }
        function getBody({ p256dh, auth, endpoint, vapidKey }) {
          const body = {
            web: {
              endpoint,
              auth,
              p256dh,
            },
          };
          if (vapidKey !== DEFAULT_VAPID_KEY)
            body.web.applicationPubKey = vapidKey;
          return body;
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ // UpdateRegistration will be called once every week.
        const TOKEN_EXPIRATION_MS = 604800000; // 7 days
        async function getTokenInternal(messaging) {
          const pushSubscription = await getPushSubscription(
            messaging.swRegistration,
            messaging.vapidKey
          );
          const subscriptionOptions = {
            vapidKey: messaging.vapidKey,
            swScope: messaging.swRegistration.scope,
            endpoint: pushSubscription.endpoint,
            auth: arrayToBase64(pushSubscription.getKey('auth')),
            p256dh: arrayToBase64(pushSubscription.getKey('p256dh')),
          };
          const tokenDetails = await dbGet(messaging.firebaseDependencies);
          if (!tokenDetails)
            // No token, get a new one.
            return getNewToken(
              messaging.firebaseDependencies,
              subscriptionOptions
            );
          else if (
            !isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)
          ) {
            // Invalid token, get a new one.
            try {
              await requestDeleteToken(
                messaging.firebaseDependencies,
                tokenDetails.token
              );
            } catch (e) {
              // Suppress errors because of #2364
              console.warn(e);
            }
            return getNewToken(
              messaging.firebaseDependencies,
              subscriptionOptions
            );
          } else if (
            Date.now() >=
            tokenDetails.createTime + TOKEN_EXPIRATION_MS
          )
            // Weekly token refresh
            return updateToken(messaging, {
              token: tokenDetails.token,
              createTime: Date.now(),
              subscriptionOptions,
            }); // Valid token, nothing to do.
          else return tokenDetails.token;
        }
        /**
         * This method deletes the token from the database, unsubscribes the token from FCM, and unregisters
         * the push subscription if it exists.
         */ async function deleteTokenInternal(messaging) {
          const tokenDetails = await dbGet(messaging.firebaseDependencies);
          if (tokenDetails) {
            await requestDeleteToken(
              messaging.firebaseDependencies,
              tokenDetails.token
            );
            await dbRemove(messaging.firebaseDependencies);
          }
          // Unsubscribe from the push subscription.
          const pushSubscription =
            await messaging.swRegistration.pushManager.getSubscription();
          if (pushSubscription) return pushSubscription.unsubscribe();
          // If there's no SW, consider it a success.
          return true;
        }
        async function updateToken(messaging, tokenDetails) {
          try {
            const updatedToken = await requestUpdateToken(
              messaging.firebaseDependencies,
              tokenDetails
            );
            const updatedTokenDetails = Object.assign(
              Object.assign({}, tokenDetails),
              {
                token: updatedToken,
                createTime: Date.now(),
              }
            );
            await dbSet(messaging.firebaseDependencies, updatedTokenDetails);
            return updatedToken;
          } catch (e) {
            throw e;
          }
        }
        async function getNewToken(firebaseDependencies, subscriptionOptions) {
          const token = await requestGetToken(
            firebaseDependencies,
            subscriptionOptions
          );
          const tokenDetails = {
            token,
            createTime: Date.now(),
            subscriptionOptions,
          };
          await dbSet(firebaseDependencies, tokenDetails);
          return tokenDetails.token;
        }
        /**
         * Gets a PushSubscription for the current user.
         */ async function getPushSubscription(swRegistration, vapidKey) {
          const subscription =
            await swRegistration.pushManager.getSubscription();
          if (subscription) return subscription;
          return swRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
            // submitted to pushManager#subscribe must be of type Uint8Array.
            applicationServerKey: base64ToArray(vapidKey),
          });
        }
        /**
         * Checks if the saved tokenDetails object matches the configuration provided.
         */ function isTokenValid(dbOptions, currentOptions) {
          const isVapidKeyEqual =
            currentOptions.vapidKey === dbOptions.vapidKey;
          const isEndpointEqual =
            currentOptions.endpoint === dbOptions.endpoint;
          const isAuthEqual = currentOptions.auth === dbOptions.auth;
          const isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
          return (
            isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual
          );
        }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function externalizePayload(internalPayload) {
          const payload = {
            from: internalPayload.from,
            // eslint-disable-next-line camelcase
            collapseKey: internalPayload.collapse_key,
            // eslint-disable-next-line camelcase
            messageId: internalPayload.fcmMessageId,
          };
          propagateNotificationPayload(payload, internalPayload);
          propagateDataPayload(payload, internalPayload);
          propagateFcmOptions(payload, internalPayload);
          return payload;
        }
        function propagateNotificationPayload(payload, messagePayloadInternal) {
          if (!messagePayloadInternal.notification) return;
          payload.notification = {};
          const title = messagePayloadInternal.notification.title;
          if (!!title) payload.notification.title = title;
          const body = messagePayloadInternal.notification.body;
          if (!!body) payload.notification.body = body;
          const image = messagePayloadInternal.notification.image;
          if (!!image) payload.notification.image = image;
          const icon = messagePayloadInternal.notification.icon;
          if (!!icon) payload.notification.icon = icon;
        }
        function propagateDataPayload(payload, messagePayloadInternal) {
          if (!messagePayloadInternal.data) return;
          payload.data = messagePayloadInternal.data;
        }
        function propagateFcmOptions(payload, messagePayloadInternal) {
          var _a, _b, _c, _d, _e;
          // fcmOptions.link value is written into notification.click_action. see more in b/232072111
          if (
            !messagePayloadInternal.fcmOptions &&
            !((_a = messagePayloadInternal.notification) === null ||
            _a === void 0
              ? void 0
              : _a.click_action)
          )
            return;
          payload.fcmOptions = {};
          const link =
            (_c =
              (_b = messagePayloadInternal.fcmOptions) === null || _b === void 0
                ? void 0
                : _b.link) !== null && _c !== void 0
              ? _c
              : (_d = messagePayloadInternal.notification) === null ||
                  _d === void 0
                ? void 0
                : _d.click_action;
          if (!!link) payload.fcmOptions.link = link;
          // eslint-disable-next-line camelcase
          const analyticsLabel =
            (_e = messagePayloadInternal.fcmOptions) === null || _e === void 0
              ? void 0
              : _e.analytics_label;
          if (!!analyticsLabel)
            payload.fcmOptions.analyticsLabel = analyticsLabel;
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function isConsoleMessage(data) {
          // This message has a campaign ID, meaning it was sent using the Firebase Console.
          return (
            typeof data === 'object' && !!data && CONSOLE_CAMPAIGN_ID in data
          );
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ _mergeStrings('AzSCbw63g1R0nCw85jG8', 'Iaya3yLKwmgvh7cF0q4');
        function _mergeStrings(s1, s2) {
          const resultArray = [];
          for (let i = 0; i < s1.length; i++) {
            resultArray.push(s1.charAt(i));
            if (i < s2.length) resultArray.push(s2.charAt(i));
          }
          return resultArray.join('');
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function extractAppConfig(app) {
          if (!app || !app.options)
            throw getMissingValueError('App Configuration Object');
          if (!app.name) throw getMissingValueError('App Name');
          // Required app config keys
          const configKeys = [
            'projectId',
            'apiKey',
            'appId',
            'messagingSenderId',
          ];
          const { options } = app;
          for (const keyName of configKeys) {
            if (!options[keyName]) throw getMissingValueError(keyName);
          }
          return {
            appName: app.name,
            projectId: options.projectId,
            apiKey: options.apiKey,
            appId: options.appId,
            senderId: options.messagingSenderId,
          };
        }
        function getMissingValueError(valueName) {
          return ERROR_FACTORY.create(
            'missing-app-config-values' /* ErrorCode.MISSING_APP_CONFIG_VALUES */,
            {
              valueName,
            }
          );
        }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ class MessagingService {
          constructor(app, installations, analyticsProvider) {
            // logging is only done with end user consent. Default to false.
            this.deliveryMetricsExportedToBigQueryEnabled = false;
            this.onBackgroundMessageHandler = null;
            this.onMessageHandler = null;
            this.logEvents = [];
            this.isLogServiceStarted = false;
            const appConfig = extractAppConfig(app);
            this.firebaseDependencies = {
              app,
              appConfig,
              installations,
              analyticsProvider,
            };
          }
          _delete() {
            return Promise.resolve();
          }
        }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ async function registerDefaultSw(messaging) {
          try {
            messaging.swRegistration = await navigator.serviceWorker.register(
              DEFAULT_SW_PATH,
              {
                scope: DEFAULT_SW_SCOPE,
              }
            );
            // The timing when browser updates sw when sw has an update is unreliable from experiment. It
            // leads to version conflict when the SDK upgrades to a newer version in the main page, but sw
            // is stuck with the old version. For example,
            // https://github.com/firebase/firebase-js-sdk/issues/2590 The following line reliably updates
            // sw if there was an update.
            messaging.swRegistration.update().catch(() => {
              /* it is non blocking and we don't care if it failed */
            });
            await waitForRegistrationActive(messaging.swRegistration);
          } catch (e) {
            throw ERROR_FACTORY.create(
              'failed-service-worker-registration' /* ErrorCode.FAILED_DEFAULT_REGISTRATION */,
              {
                browserErrorMessage:
                  e === null || e === void 0 ? void 0 : e.message,
              }
            );
          }
        }
        /**
         * Waits for registration to become active. MDN documentation claims that
         * a service worker registration should be ready to use after awaiting
         * navigator.serviceWorker.register() but that doesn't seem to be the case in
         * practice, causing the SDK to throw errors when calling
         * swRegistration.pushManager.subscribe() too soon after register(). The only
         * solution seems to be waiting for the service worker registration `state`
         * to become "active".
         */ async function waitForRegistrationActive(registration) {
          return new Promise((resolve, reject) => {
            const rejectTimeout = setTimeout(
              () =>
                reject(
                  new Error(
                    `Service worker not registered after ${DEFAULT_REGISTRATION_TIMEOUT} ms`
                  )
                ),
              DEFAULT_REGISTRATION_TIMEOUT
            );
            const incomingSw = registration.installing || registration.waiting;
            if (registration.active) {
              clearTimeout(rejectTimeout);
              resolve();
            } else if (incomingSw)
              incomingSw.onstatechange = (ev) => {
                var _a;
                if (
                  ((_a = ev.target) === null || _a === void 0
                    ? void 0
                    : _a.state) === 'activated'
                ) {
                  incomingSw.onstatechange = null;
                  clearTimeout(rejectTimeout);
                  resolve();
                }
              };
            else {
              clearTimeout(rejectTimeout);
              reject(new Error('No incoming service worker found.'));
            }
          });
        }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ async function updateSwReg(messaging, swRegistration) {
          if (!swRegistration && !messaging.swRegistration)
            await registerDefaultSw(messaging);
          if (!swRegistration && !!messaging.swRegistration) return;
          if (!(swRegistration instanceof ServiceWorkerRegistration))
            throw ERROR_FACTORY.create(
              'invalid-sw-registration' /* ErrorCode.INVALID_SW_REGISTRATION */
            );
          messaging.swRegistration = swRegistration;
        }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ async function updateVapidKey(messaging, vapidKey) {
          if (!!vapidKey) messaging.vapidKey = vapidKey;
          else if (!messaging.vapidKey) messaging.vapidKey = DEFAULT_VAPID_KEY;
        }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ async function getToken$1(messaging, options) {
          if (!navigator)
            throw ERROR_FACTORY.create(
              'only-available-in-window' /* ErrorCode.AVAILABLE_IN_WINDOW */
            );
          if (Notification.permission === 'default')
            await Notification.requestPermission();
          if (Notification.permission !== 'granted')
            throw ERROR_FACTORY.create(
              'permission-blocked' /* ErrorCode.PERMISSION_BLOCKED */
            );
          await updateVapidKey(
            messaging,
            options === null || options === void 0 ? void 0 : options.vapidKey
          );
          await updateSwReg(
            messaging,
            options === null || options === void 0
              ? void 0
              : options.serviceWorkerRegistration
          );
          return getTokenInternal(messaging);
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ async function logToScion(messaging, messageType, data) {
          const eventType = getEventType(messageType);
          const analytics =
            await messaging.firebaseDependencies.analyticsProvider.get();
          analytics.logEvent(eventType, {
            /* eslint-disable camelcase */ message_id:
              data[CONSOLE_CAMPAIGN_ID],
            message_name: data[CONSOLE_CAMPAIGN_NAME],
            message_time: data[CONSOLE_CAMPAIGN_TIME],
            message_device_time: Math.floor(Date.now() / 1000),
          });
        }
        function getEventType(messageType) {
          switch (messageType) {
            case MessageType.NOTIFICATION_CLICKED:
              return 'notification_open';
            case MessageType.PUSH_RECEIVED:
              return 'notification_foreground';
            default:
              throw new Error();
          }
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ async function messageEventListener(messaging, event) {
          const internalPayload = event.data;
          if (!internalPayload.isFirebaseMessaging) return;
          if (
            messaging.onMessageHandler &&
            internalPayload.messageType === MessageType.PUSH_RECEIVED
          ) {
            if (typeof messaging.onMessageHandler === 'function')
              messaging.onMessageHandler(externalizePayload(internalPayload));
            else
              messaging.onMessageHandler.next(
                externalizePayload(internalPayload)
              );
          }
          // Log to Scion if applicable
          const dataPayload = internalPayload.data;
          if (
            isConsoleMessage(dataPayload) &&
            dataPayload[CONSOLE_CAMPAIGN_ANALYTICS_ENABLED] === '1'
          )
            await logToScion(
              messaging,
              internalPayload.messageType,
              dataPayload
            );
        }
        const name = '@firebase/messaging';
        const version = '0.12.17';
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const WindowMessagingFactory = (container) => {
          const messaging = new MessagingService(
            container.getProvider('app').getImmediate(),
            container.getProvider('installations-internal').getImmediate(),
            container.getProvider('analytics-internal')
          );
          navigator.serviceWorker.addEventListener('message', (e) =>
            messageEventListener(messaging, e)
          );
          return messaging;
        };
        const WindowMessagingInternalFactory = (container) => {
          const messaging = container.getProvider('messaging').getImmediate();
          const messagingInternal = {
            getToken: (options) => getToken$1(messaging, options),
          };
          return messagingInternal;
        };
        function registerMessagingInWindow() {
          (0, _app._registerComponent)(
            new (0, _component.Component)(
              'messaging',
              WindowMessagingFactory,
              'PUBLIC' /* ComponentType.PUBLIC */
            )
          );
          (0, _app._registerComponent)(
            new (0, _component.Component)(
              'messaging-internal',
              WindowMessagingInternalFactory,
              'PRIVATE' /* ComponentType.PRIVATE */
            )
          );
          (0, _app.registerVersion)(name, version);
          // BUILD_TARGET will be replaced by values like esm2017, cjs2017, etc during the compilation
          (0, _app.registerVersion)(name, version, 'esm2017');
        }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Checks if all required APIs exist in the browser.
         * @returns a Promise that resolves to a boolean.
         *
         * @public
         */ async function isWindowSupported() {
          try {
            // This throws if open() is unsupported, so adding it to the conditional
            // statement below can cause an uncaught error.
            await (0, _util.validateIndexedDBOpenable)();
          } catch (e) {
            return false;
          }
          // firebase-js-sdk/issues/2393 reveals that idb#open in Safari iframe and Firefox private browsing
          // might be prohibited to run. In these contexts, an error would be thrown during the messaging
          // instantiating phase, informing the developers to import/call isSupported for special handling.
          return (
            typeof window !== 'undefined' &&
            (0, _util.isIndexedDBAvailable)() &&
            (0, _util.areCookiesEnabled)() &&
            'serviceWorker' in navigator &&
            'PushManager' in window &&
            'Notification' in window &&
            'fetch' in window &&
            ServiceWorkerRegistration.prototype.hasOwnProperty(
              'showNotification'
            ) &&
            PushSubscription.prototype.hasOwnProperty('getKey')
          );
        }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ async function deleteToken$1(messaging) {
          if (!navigator)
            throw ERROR_FACTORY.create(
              'only-available-in-window' /* ErrorCode.AVAILABLE_IN_WINDOW */
            );
          if (!messaging.swRegistration) await registerDefaultSw(messaging);
          return deleteTokenInternal(messaging);
        }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function onMessage$1(messaging, nextOrObserver) {
          if (!navigator)
            throw ERROR_FACTORY.create(
              'only-available-in-window' /* ErrorCode.AVAILABLE_IN_WINDOW */
            );
          messaging.onMessageHandler = nextOrObserver;
          return () => {
            messaging.onMessageHandler = null;
          };
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Retrieves a Firebase Cloud Messaging instance.
         *
         * @returns The Firebase Cloud Messaging instance associated with the provided firebase app.
         *
         * @public
         */ function getMessagingInWindow(app = (0, _app.getApp)()) {
          // Conscious decision to make this async check non-blocking during the messaging instance
          // initialization phase for performance consideration. An error would be thrown latter for
          // developer's information. Developers can then choose to import and call `isSupported` for
          // special handling.
          isWindowSupported().then(
            (isSupported) => {
              // If `isWindowSupported()` resolved, but returned false.
              if (!isSupported)
                throw ERROR_FACTORY.create(
                  'unsupported-browser' /* ErrorCode.UNSUPPORTED_BROWSER */
                );
            },
            (_) => {
              // If `isWindowSupported()` rejected.
              throw ERROR_FACTORY.create(
                'indexed-db-unsupported' /* ErrorCode.INDEXED_DB_UNSUPPORTED */
              );
            }
          );
          return (0, _app._getProvider)(
            (0, _util.getModularInstance)(app),
            'messaging'
          ).getImmediate();
        }
        /**
         * Subscribes the {@link Messaging} instance to push notifications. Returns a Firebase Cloud
         * Messaging registration token that can be used to send push messages to that {@link Messaging}
         * instance.
         *
         * If notification permission isn't already granted, this method asks the user for permission. The
         * returned promise rejects if the user does not allow the app to show notifications.
         *
         * @param messaging - The {@link Messaging} instance.
         * @param options - Provides an optional vapid key and an optional service worker registration.
         *
         * @returns The promise resolves with an FCM registration token.
         *
         * @public
         */ async function getToken(messaging, options) {
          messaging = (0, _util.getModularInstance)(messaging);
          return getToken$1(messaging, options);
        }
        /**
         * Deletes the registration token associated with this {@link Messaging} instance and unsubscribes
         * the {@link Messaging} instance from the push subscription.
         *
         * @param messaging - The {@link Messaging} instance.
         *
         * @returns The promise resolves when the token has been successfully deleted.
         *
         * @public
         */ function deleteToken(messaging) {
          messaging = (0, _util.getModularInstance)(messaging);
          return deleteToken$1(messaging);
        }
        /**
         * When a push message is received and the user is currently on a page for your origin, the
         * message is passed to the page and an `onMessage()` event is dispatched with the payload of
         * the push message.
         *
         *
         * @param messaging - The {@link Messaging} instance.
         * @param nextOrObserver - This function, or observer object with `next` defined,
         *     is called when a message is received and the user is currently viewing your page.
         * @returns To stop listening for messages execute this returned function.
         *
         * @public
         */ function onMessage(messaging, nextOrObserver) {
          messaging = (0, _util.getModularInstance)(messaging);
          return onMessage$1(messaging, nextOrObserver);
        }
        /**
         * The Firebase Cloud Messaging Web SDK.
         * This SDK does not work in a Node.js environment.
         *
         * @packageDocumentation
         */ registerMessagingInWindow();
      },
      {
        '@firebase/installations': '3g6PI',
        '@firebase/component': 'l6zaT',
        idb: 'bhyM4',
        '@firebase/util': 'kMDC5',
        '@firebase/app': '4yol4',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    '3g6PI': [
      function (require, module, exports, __globalThis) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(
          exports,
          'deleteInstallations',
          () => deleteInstallations
        );
        parcelHelpers.export(exports, 'getId', () => getId);
        parcelHelpers.export(
          exports,
          'getInstallations',
          () => getInstallations
        );
        parcelHelpers.export(exports, 'getToken', () => getToken);
        parcelHelpers.export(exports, 'onIdChange', () => onIdChange);
        var _app = require('@firebase/app');
        var _component = require('@firebase/component');
        var _util = require('@firebase/util');
        var _idb = require('idb');
        const name = '@firebase/installations';
        const version = '0.6.13';
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const PENDING_TIMEOUT_MS = 10000;
        const PACKAGE_VERSION = `w:${version}`;
        const INTERNAL_AUTH_VERSION = 'FIS_v2';
        const INSTALLATIONS_API_URL =
          'https://firebaseinstallations.googleapis.com/v1';
        const TOKEN_EXPIRATION_BUFFER = 3600000; // One hour
        const SERVICE = 'installations';
        const SERVICE_NAME = 'Installations';
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const ERROR_DESCRIPTION_MAP = {
          ['missing-app-config-values' /* ErrorCode.MISSING_APP_CONFIG_VALUES */]:
            'Missing App configuration value: "{$valueName}"',
          ['not-registered' /* ErrorCode.NOT_REGISTERED */]:
            'Firebase Installation is not registered.',
          ['installation-not-found' /* ErrorCode.INSTALLATION_NOT_FOUND */]:
            'Firebase Installation not found.',
          ['request-failed' /* ErrorCode.REQUEST_FAILED */]:
            '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
          ['app-offline' /* ErrorCode.APP_OFFLINE */]:
            'Could not process request. Application offline.',
          ['delete-pending-registration' /* ErrorCode.DELETE_PENDING_REGISTRATION */]:
            "Can't delete installation while there is a pending registration request.",
        };
        const ERROR_FACTORY = new (0, _util.ErrorFactory)(
          SERVICE,
          SERVICE_NAME,
          ERROR_DESCRIPTION_MAP
        );
        /** Returns true if error is a FirebaseError that is based on an error from the server. */ function isServerError(
          error
        ) {
          return (
            error instanceof (0, _util.FirebaseError) &&
            error.code.includes('request-failed' /* ErrorCode.REQUEST_FAILED */)
          );
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function getInstallationsEndpoint({ projectId }) {
          return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
        }
        function extractAuthTokenInfoFromResponse(response) {
          return {
            token: response.token,
            requestStatus: 2 /* RequestStatus.COMPLETED */,
            expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
            creationTime: Date.now(),
          };
        }
        async function getErrorFromResponse(requestName, response) {
          const responseJson = await response.json();
          const errorData = responseJson.error;
          return ERROR_FACTORY.create(
            'request-failed' /* ErrorCode.REQUEST_FAILED */,
            {
              requestName,
              serverCode: errorData.code,
              serverMessage: errorData.message,
              serverStatus: errorData.status,
            }
          );
        }
        function getHeaders({ apiKey }) {
          return new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-goog-api-key': apiKey,
          });
        }
        function getHeadersWithAuth(appConfig, { refreshToken }) {
          const headers = getHeaders(appConfig);
          headers.append('Authorization', getAuthorizationHeader(refreshToken));
          return headers;
        }
        /**
         * Calls the passed in fetch wrapper and returns the response.
         * If the returned response has a status of 5xx, re-runs the function once and
         * returns the response.
         */ async function retryIfServerError(fn) {
          const result = await fn();
          if (result.status >= 500 && result.status < 600)
            // Internal Server Error. Retry request.
            return fn();
          return result;
        }
        function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
          // This works because the server will never respond with fractions of a second.
          return Number(responseExpiresIn.replace('s', '000'));
        }
        function getAuthorizationHeader(refreshToken) {
          return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ async function createInstallationRequest(
          { appConfig, heartbeatServiceProvider },
          { fid }
        ) {
          const endpoint = getInstallationsEndpoint(appConfig);
          const headers = getHeaders(appConfig);
          // If heartbeat service exists, add the heartbeat string to the header.
          const heartbeatService = heartbeatServiceProvider.getImmediate({
            optional: true,
          });
          if (heartbeatService) {
            const heartbeatsHeader =
              await heartbeatService.getHeartbeatsHeader();
            if (heartbeatsHeader)
              headers.append('x-firebase-client', heartbeatsHeader);
          }
          const body = {
            fid,
            authVersion: INTERNAL_AUTH_VERSION,
            appId: appConfig.appId,
            sdkVersion: PACKAGE_VERSION,
          };
          const request = {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
          };
          const response = await retryIfServerError(() =>
            fetch(endpoint, request)
          );
          if (response.ok) {
            const responseValue = await response.json();
            const registeredInstallationEntry = {
              fid: responseValue.fid || fid,
              registrationStatus: 2 /* RequestStatus.COMPLETED */,
              refreshToken: responseValue.refreshToken,
              authToken: extractAuthTokenInfoFromResponse(
                responseValue.authToken
              ),
            };
            return registeredInstallationEntry;
          } else
            throw await getErrorFromResponse('Create Installation', response);
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /** Returns a promise that resolves after given time passes. */ function sleep(
          ms
        ) {
          return new Promise((resolve) => {
            setTimeout(resolve, ms);
          });
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function bufferToBase64UrlSafe(array) {
          const b64 = btoa(String.fromCharCode(...array));
          return b64.replace(/\+/g, '-').replace(/\//g, '_');
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
        const INVALID_FID = '';
        /**
         * Generates a new FID using random values from Web Crypto API.
         * Returns an empty string if FID generation fails for any reason.
         */ function generateFid() {
          try {
            // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
            // bytes. our implementation generates a 17 byte array instead.
            const fidByteArray = new Uint8Array(17);
            const crypto = self.crypto || self.msCrypto;
            crypto.getRandomValues(fidByteArray);
            // Replace the first 4 random bits with the constant FID header of 0b0111.
            fidByteArray[0] = 112 + (fidByteArray[0] % 16);
            const fid = encode(fidByteArray);
            return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
          } catch (_a) {
            // FID generation errored
            return INVALID_FID;
          }
        }
        /** Converts a FID Uint8Array to a base64 string representation. */ function encode(
          fidByteArray
        ) {
          const b64String = bufferToBase64UrlSafe(fidByteArray);
          // Remove the 23rd character that was added because of the extra 4 bits at the
          // end of our 17 byte array, and the '=' padding.
          return b64String.substr(0, 22);
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /** Returns a string key that can be used to identify the app. */ function getKey(
          appConfig
        ) {
          return `${appConfig.appName}!${appConfig.appId}`;
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const fidChangeCallbacks = new Map();
        /**
         * Calls the onIdChange callbacks with the new FID value, and broadcasts the
         * change to other tabs.
         */ function fidChanged(appConfig, fid) {
          const key = getKey(appConfig);
          callFidChangeCallbacks(key, fid);
          broadcastFidChange(key, fid);
        }
        function addCallback(appConfig, callback) {
          // Open the broadcast channel if it's not already open,
          // to be able to listen to change events from other tabs.
          getBroadcastChannel();
          const key = getKey(appConfig);
          let callbackSet = fidChangeCallbacks.get(key);
          if (!callbackSet) {
            callbackSet = new Set();
            fidChangeCallbacks.set(key, callbackSet);
          }
          callbackSet.add(callback);
        }
        function removeCallback(appConfig, callback) {
          const key = getKey(appConfig);
          const callbackSet = fidChangeCallbacks.get(key);
          if (!callbackSet) return;
          callbackSet.delete(callback);
          if (callbackSet.size === 0) fidChangeCallbacks.delete(key);
          // Close broadcast channel if there are no more callbacks.
          closeBroadcastChannel();
        }
        function callFidChangeCallbacks(key, fid) {
          const callbacks = fidChangeCallbacks.get(key);
          if (!callbacks) return;
          for (const callback of callbacks) callback(fid);
        }
        function broadcastFidChange(key, fid) {
          const channel = getBroadcastChannel();
          if (channel)
            channel.postMessage({
              key,
              fid,
            });
          closeBroadcastChannel();
        }
        let broadcastChannel = null;
        /** Opens and returns a BroadcastChannel if it is supported by the browser. */ function getBroadcastChannel() {
          if (!broadcastChannel && 'BroadcastChannel' in self) {
            broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
            broadcastChannel.onmessage = (e) => {
              callFidChangeCallbacks(e.data.key, e.data.fid);
            };
          }
          return broadcastChannel;
        }
        function closeBroadcastChannel() {
          if (fidChangeCallbacks.size === 0 && broadcastChannel) {
            broadcastChannel.close();
            broadcastChannel = null;
          }
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const DATABASE_NAME = 'firebase-installations-database';
        const DATABASE_VERSION = 1;
        const OBJECT_STORE_NAME = 'firebase-installations-store';
        let dbPromise = null;
        function getDbPromise() {
          if (!dbPromise)
            dbPromise = (0, _idb.openDB)(DATABASE_NAME, DATABASE_VERSION, {
              upgrade: (db, oldVersion) => {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                  case 0:
                    db.createObjectStore(OBJECT_STORE_NAME);
                }
              },
            });
          return dbPromise;
        }
        /** Assigns or overwrites the record for the given key with the given value. */ async function set(
          appConfig,
          value
        ) {
          const key = getKey(appConfig);
          const db = await getDbPromise();
          const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          const objectStore = tx.objectStore(OBJECT_STORE_NAME);
          const oldValue = await objectStore.get(key);
          await objectStore.put(value, key);
          await tx.done;
          if (!oldValue || oldValue.fid !== value.fid)
            fidChanged(appConfig, value.fid);
          return value;
        }
        /** Removes record(s) from the objectStore that match the given key. */ async function remove(
          appConfig
        ) {
          const key = getKey(appConfig);
          const db = await getDbPromise();
          const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          await tx.objectStore(OBJECT_STORE_NAME).delete(key);
          await tx.done;
        }
        /**
         * Atomically updates a record with the result of updateFn, which gets
         * called with the current value. If newValue is undefined, the record is
         * deleted instead.
         * @return Updated value
         */ async function update(appConfig, updateFn) {
          const key = getKey(appConfig);
          const db = await getDbPromise();
          const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          const store = tx.objectStore(OBJECT_STORE_NAME);
          const oldValue = await store.get(key);
          const newValue = updateFn(oldValue);
          if (newValue === undefined) await store.delete(key);
          else await store.put(newValue, key);
          await tx.done;
          if (newValue && (!oldValue || oldValue.fid !== newValue.fid))
            fidChanged(appConfig, newValue.fid);
          return newValue;
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Updates and returns the InstallationEntry from the database.
         * Also triggers a registration request if it is necessary and possible.
         */ async function getInstallationEntry(installations) {
          let registrationPromise;
          const installationEntry = await update(
            installations.appConfig,
            (oldEntry) => {
              const installationEntry =
                updateOrCreateInstallationEntry(oldEntry);
              const entryWithPromise = triggerRegistrationIfNecessary(
                installations,
                installationEntry
              );
              registrationPromise = entryWithPromise.registrationPromise;
              return entryWithPromise.installationEntry;
            }
          );
          if (installationEntry.fid === INVALID_FID)
            // FID generation failed. Waiting for the FID from the server.
            return {
              installationEntry: await registrationPromise,
            };
          return {
            installationEntry,
            registrationPromise,
          };
        }
        /**
         * Creates a new Installation Entry if one does not exist.
         * Also clears timed out pending requests.
         */ function updateOrCreateInstallationEntry(oldEntry) {
          const entry = oldEntry || {
            fid: generateFid(),
            registrationStatus: 0 /* RequestStatus.NOT_STARTED */,
          };
          return clearTimedOutRequest(entry);
        }
        /**
         * If the Firebase Installation is not registered yet, this will trigger the
         * registration and return an InProgressInstallationEntry.
         *
         * If registrationPromise does not exist, the installationEntry is guaranteed
         * to be registered.
         */ function triggerRegistrationIfNecessary(
          installations,
          installationEntry
        ) {
          if (
            installationEntry.registrationStatus ===
            0 /* RequestStatus.NOT_STARTED */
          ) {
            if (!navigator.onLine) {
              // Registration required but app is offline.
              const registrationPromiseWithError = Promise.reject(
                ERROR_FACTORY.create('app-offline' /* ErrorCode.APP_OFFLINE */)
              );
              return {
                installationEntry,
                registrationPromise: registrationPromiseWithError,
              };
            }
            // Try registering. Change status to IN_PROGRESS.
            const inProgressEntry = {
              fid: installationEntry.fid,
              registrationStatus: 1 /* RequestStatus.IN_PROGRESS */,
              registrationTime: Date.now(),
            };
            const registrationPromise = registerInstallation(
              installations,
              inProgressEntry
            );
            return {
              installationEntry: inProgressEntry,
              registrationPromise,
            };
          } else if (
            installationEntry.registrationStatus ===
            1 /* RequestStatus.IN_PROGRESS */
          )
            return {
              installationEntry,
              registrationPromise: waitUntilFidRegistration(installations),
            };
          else
            return {
              installationEntry,
            };
        }
        /** This will be executed only once for each new Firebase Installation. */ async function registerInstallation(
          installations,
          installationEntry
        ) {
          try {
            const registeredInstallationEntry = await createInstallationRequest(
              installations,
              installationEntry
            );
            return set(installations.appConfig, registeredInstallationEntry);
          } catch (e) {
            if (isServerError(e) && e.customData.serverCode === 409)
              // Server returned a "FID cannot be used" error.
              // Generate a new ID next time.
              await remove(installations.appConfig); // Registration failed. Set FID as not registered.
            else
              await set(installations.appConfig, {
                fid: installationEntry.fid,
                registrationStatus: 0 /* RequestStatus.NOT_STARTED */,
              });
            throw e;
          }
        }
        /** Call if FID registration is pending in another request. */ async function waitUntilFidRegistration(
          installations
        ) {
          // Unfortunately, there is no way of reliably observing when a value in
          // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
          // so we need to poll.
          let entry = await updateInstallationRequest(installations.appConfig);
          while (
            entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */
          ) {
            // createInstallation request still in progress.
            await sleep(100);
            entry = await updateInstallationRequest(installations.appConfig);
          }
          if (entry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
            // The request timed out or failed in a different call. Try again.
            const { installationEntry, registrationPromise } =
              await getInstallationEntry(installations);
            if (registrationPromise)
              return registrationPromise; // if there is no registrationPromise, entry is registered.
            else return installationEntry;
          }
          return entry;
        }
        /**
         * Called only if there is a CreateInstallation request in progress.
         *
         * Updates the InstallationEntry in the DB based on the status of the
         * CreateInstallation request.
         *
         * Returns the updated InstallationEntry.
         */ function updateInstallationRequest(appConfig) {
          return update(appConfig, (oldEntry) => {
            if (!oldEntry)
              throw ERROR_FACTORY.create(
                'installation-not-found' /* ErrorCode.INSTALLATION_NOT_FOUND */
              );
            return clearTimedOutRequest(oldEntry);
          });
        }
        function clearTimedOutRequest(entry) {
          if (hasInstallationRequestTimedOut(entry))
            return {
              fid: entry.fid,
              registrationStatus: 0 /* RequestStatus.NOT_STARTED */,
            };
          return entry;
        }
        function hasInstallationRequestTimedOut(installationEntry) {
          return (
            installationEntry.registrationStatus ===
              1 /* RequestStatus.IN_PROGRESS */ &&
            installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now()
          );
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ async function generateAuthTokenRequest(
          { appConfig, heartbeatServiceProvider },
          installationEntry
        ) {
          const endpoint = getGenerateAuthTokenEndpoint(
            appConfig,
            installationEntry
          );
          const headers = getHeadersWithAuth(appConfig, installationEntry);
          // If heartbeat service exists, add the heartbeat string to the header.
          const heartbeatService = heartbeatServiceProvider.getImmediate({
            optional: true,
          });
          if (heartbeatService) {
            const heartbeatsHeader =
              await heartbeatService.getHeartbeatsHeader();
            if (heartbeatsHeader)
              headers.append('x-firebase-client', heartbeatsHeader);
          }
          const body = {
            installation: {
              sdkVersion: PACKAGE_VERSION,
              appId: appConfig.appId,
            },
          };
          const request = {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
          };
          const response = await retryIfServerError(() =>
            fetch(endpoint, request)
          );
          if (response.ok) {
            const responseValue = await response.json();
            const completedAuthToken =
              extractAuthTokenInfoFromResponse(responseValue);
            return completedAuthToken;
          } else
            throw await getErrorFromResponse('Generate Auth Token', response);
        }
        function getGenerateAuthTokenEndpoint(appConfig, { fid }) {
          return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Returns a valid authentication token for the installation. Generates a new
         * token if one doesn't exist, is expired or about to expire.
         *
         * Should only be called if the Firebase Installation is registered.
         */ async function refreshAuthToken(
          installations,
          forceRefresh = false
        ) {
          let tokenPromise;
          const entry = await update(installations.appConfig, (oldEntry) => {
            if (!isEntryRegistered(oldEntry))
              throw ERROR_FACTORY.create(
                'not-registered' /* ErrorCode.NOT_REGISTERED */
              );
            const oldAuthToken = oldEntry.authToken;
            if (!forceRefresh && isAuthTokenValid(oldAuthToken))
              // There is a valid token in the DB.
              return oldEntry;
            else if (
              oldAuthToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */
            ) {
              // There already is a token request in progress.
              tokenPromise = waitUntilAuthTokenRequest(
                installations,
                forceRefresh
              );
              return oldEntry;
            } else {
              // No token or token expired.
              if (!navigator.onLine)
                throw ERROR_FACTORY.create(
                  'app-offline' /* ErrorCode.APP_OFFLINE */
                );
              const inProgressEntry =
                makeAuthTokenRequestInProgressEntry(oldEntry);
              tokenPromise = fetchAuthTokenFromServer(
                installations,
                inProgressEntry
              );
              return inProgressEntry;
            }
          });
          const authToken = tokenPromise ? await tokenPromise : entry.authToken;
          return authToken;
        }
        /**
         * Call only if FID is registered and Auth Token request is in progress.
         *
         * Waits until the current pending request finishes. If the request times out,
         * tries once in this thread as well.
         */ async function waitUntilAuthTokenRequest(
          installations,
          forceRefresh
        ) {
          // Unfortunately, there is no way of reliably observing when a value in
          // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
          // so we need to poll.
          let entry = await updateAuthTokenRequest(installations.appConfig);
          while (
            entry.authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */
          ) {
            // generateAuthToken still in progress.
            await sleep(100);
            entry = await updateAuthTokenRequest(installations.appConfig);
          }
          const authToken = entry.authToken;
          if (authToken.requestStatus === 0 /* RequestStatus.NOT_STARTED */)
            // The request timed out or failed in a different call. Try again.
            return refreshAuthToken(installations, forceRefresh);
          else return authToken;
        }
        /**
         * Called only if there is a GenerateAuthToken request in progress.
         *
         * Updates the InstallationEntry in the DB based on the status of the
         * GenerateAuthToken request.
         *
         * Returns the updated InstallationEntry.
         */ function updateAuthTokenRequest(appConfig) {
          return update(appConfig, (oldEntry) => {
            if (!isEntryRegistered(oldEntry))
              throw ERROR_FACTORY.create(
                'not-registered' /* ErrorCode.NOT_REGISTERED */
              );
            const oldAuthToken = oldEntry.authToken;
            if (hasAuthTokenRequestTimedOut(oldAuthToken))
              return Object.assign(Object.assign({}, oldEntry), {
                authToken: {
                  requestStatus: 0 /* RequestStatus.NOT_STARTED */,
                },
              });
            return oldEntry;
          });
        }
        async function fetchAuthTokenFromServer(
          installations,
          installationEntry
        ) {
          try {
            const authToken = await generateAuthTokenRequest(
              installations,
              installationEntry
            );
            const updatedInstallationEntry = Object.assign(
              Object.assign({}, installationEntry),
              {
                authToken,
              }
            );
            await set(installations.appConfig, updatedInstallationEntry);
            return authToken;
          } catch (e) {
            if (
              isServerError(e) &&
              (e.customData.serverCode === 401 ||
                e.customData.serverCode === 404)
            )
              // Server returned a "FID not found" or a "Invalid authentication" error.
              // Generate a new ID next time.
              await remove(installations.appConfig);
            else {
              const updatedInstallationEntry = Object.assign(
                Object.assign({}, installationEntry),
                {
                  authToken: {
                    requestStatus: 0 /* RequestStatus.NOT_STARTED */,
                  },
                }
              );
              await set(installations.appConfig, updatedInstallationEntry);
            }
            throw e;
          }
        }
        function isEntryRegistered(installationEntry) {
          return (
            installationEntry !== undefined &&
            installationEntry.registrationStatus ===
              2 /* RequestStatus.COMPLETED */
          );
        }
        function isAuthTokenValid(authToken) {
          return (
            authToken.requestStatus === 2 /* RequestStatus.COMPLETED */ &&
            !isAuthTokenExpired(authToken)
          );
        }
        function isAuthTokenExpired(authToken) {
          const now = Date.now();
          return (
            now < authToken.creationTime ||
            authToken.creationTime + authToken.expiresIn <
              now + TOKEN_EXPIRATION_BUFFER
          );
        }
        /** Returns an updated InstallationEntry with an InProgressAuthToken. */ function makeAuthTokenRequestInProgressEntry(
          oldEntry
        ) {
          const inProgressAuthToken = {
            requestStatus: 1 /* RequestStatus.IN_PROGRESS */,
            requestTime: Date.now(),
          };
          return Object.assign(Object.assign({}, oldEntry), {
            authToken: inProgressAuthToken,
          });
        }
        function hasAuthTokenRequestTimedOut(authToken) {
          return (
            authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */ &&
            authToken.requestTime + PENDING_TIMEOUT_MS < Date.now()
          );
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Creates a Firebase Installation if there isn't one for the app and
         * returns the Installation ID.
         * @param installations - The `Installations` instance.
         *
         * @public
         */ async function getId(installations) {
          const installationsImpl = installations;
          const { installationEntry, registrationPromise } =
            await getInstallationEntry(installationsImpl);
          if (registrationPromise)
            registrationPromise.catch(console.error); // If the installation is already registered, update the authentication
          else
            // token if needed.
            refreshAuthToken(installationsImpl).catch(console.error);
          return installationEntry.fid;
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Returns a Firebase Installations auth token, identifying the current
         * Firebase Installation.
         * @param installations - The `Installations` instance.
         * @param forceRefresh - Force refresh regardless of token expiration.
         *
         * @public
         */ async function getToken(installations, forceRefresh = false) {
          const installationsImpl = installations;
          await completeInstallationRegistration(installationsImpl);
          // At this point we either have a Registered Installation in the DB, or we've
          // already thrown an error.
          const authToken = await refreshAuthToken(
            installationsImpl,
            forceRefresh
          );
          return authToken.token;
        }
        async function completeInstallationRegistration(installations) {
          const { registrationPromise } =
            await getInstallationEntry(installations);
          if (registrationPromise)
            // A createInstallation request is in progress. Wait until it finishes.
            await registrationPromise;
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ async function deleteInstallationRequest(
          appConfig,
          installationEntry
        ) {
          const endpoint = getDeleteEndpoint(appConfig, installationEntry);
          const headers = getHeadersWithAuth(appConfig, installationEntry);
          const request = {
            method: 'DELETE',
            headers,
          };
          const response = await retryIfServerError(() =>
            fetch(endpoint, request)
          );
          if (!response.ok)
            throw await getErrorFromResponse('Delete Installation', response);
        }
        function getDeleteEndpoint(appConfig, { fid }) {
          return `${getInstallationsEndpoint(appConfig)}/${fid}`;
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Deletes the Firebase Installation and all associated data.
         * @param installations - The `Installations` instance.
         *
         * @public
         */ async function deleteInstallations(installations) {
          const { appConfig } = installations;
          const entry = await update(appConfig, (oldEntry) => {
            if (
              oldEntry &&
              oldEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */
            )
              // Delete the unregistered entry without sending a deleteInstallation request.
              return undefined;
            return oldEntry;
          });
          if (entry) {
            if (entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */)
              // Can't delete while trying to register.
              throw ERROR_FACTORY.create(
                'delete-pending-registration' /* ErrorCode.DELETE_PENDING_REGISTRATION */
              );
            else if (
              entry.registrationStatus === 2 /* RequestStatus.COMPLETED */
            ) {
              if (!navigator.onLine)
                throw ERROR_FACTORY.create(
                  'app-offline' /* ErrorCode.APP_OFFLINE */
                );
              else {
                await deleteInstallationRequest(appConfig, entry);
                await remove(appConfig);
              }
            }
          }
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Sets a new callback that will get called when Installation ID changes.
         * Returns an unsubscribe function that will remove the callback when called.
         * @param installations - The `Installations` instance.
         * @param callback - The callback function that is invoked when FID changes.
         * @returns A function that can be called to unsubscribe.
         *
         * @public
         */ function onIdChange(installations, callback) {
          const { appConfig } = installations;
          addCallback(appConfig, callback);
          return () => {
            removeCallback(appConfig, callback);
          };
        }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ /**
         * Returns an instance of {@link Installations} associated with the given
         * {@link @firebase/app#FirebaseApp} instance.
         * @param app - The {@link @firebase/app#FirebaseApp} instance.
         *
         * @public
         */ function getInstallations(app = (0, _app.getApp)()) {
          const installationsImpl = (0, _app._getProvider)(
            app,
            'installations'
          ).getImmediate();
          return installationsImpl;
        }
        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function extractAppConfig(app) {
          if (!app || !app.options)
            throw getMissingValueError('App Configuration');
          if (!app.name) throw getMissingValueError('App Name');
          // Required app config keys
          const configKeys = ['projectId', 'apiKey', 'appId'];
          for (const keyName of configKeys) {
            if (!app.options[keyName]) throw getMissingValueError(keyName);
          }
          return {
            appName: app.name,
            projectId: app.options.projectId,
            apiKey: app.options.apiKey,
            appId: app.options.appId,
          };
        }
        function getMissingValueError(valueName) {
          return ERROR_FACTORY.create(
            'missing-app-config-values' /* ErrorCode.MISSING_APP_CONFIG_VALUES */,
            {
              valueName,
            }
          );
        }
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const INSTALLATIONS_NAME = 'installations';
        const INSTALLATIONS_NAME_INTERNAL = 'installations-internal';
        const publicFactory = (container) => {
          const app = container.getProvider('app').getImmediate();
          // Throws if app isn't configured properly.
          const appConfig = extractAppConfig(app);
          const heartbeatServiceProvider = (0, _app._getProvider)(
            app,
            'heartbeat'
          );
          const installationsImpl = {
            app,
            appConfig,
            heartbeatServiceProvider,
            _delete: () => Promise.resolve(),
          };
          return installationsImpl;
        };
        const internalFactory = (container) => {
          const app = container.getProvider('app').getImmediate();
          // Internal FIS instance relies on public FIS instance.
          const installations = (0, _app._getProvider)(
            app,
            INSTALLATIONS_NAME
          ).getImmediate();
          const installationsInternal = {
            getId: () => getId(installations),
            getToken: (forceRefresh) => getToken(installations, forceRefresh),
          };
          return installationsInternal;
        };
        function registerInstallations() {
          (0, _app._registerComponent)(
            new (0, _component.Component)(
              INSTALLATIONS_NAME,
              publicFactory,
              'PUBLIC' /* ComponentType.PUBLIC */
            )
          );
          (0, _app._registerComponent)(
            new (0, _component.Component)(
              INSTALLATIONS_NAME_INTERNAL,
              internalFactory,
              'PRIVATE' /* ComponentType.PRIVATE */
            )
          );
        }
        /**
         * The Firebase Installations Web SDK.
         * This SDK does not work in a Node.js environment.
         *
         * @packageDocumentation
         */ registerInstallations();
        (0, _app.registerVersion)(name, version);
        // BUILD_TARGET will be replaced by values like esm2017, cjs2017, etc during the compilation
        (0, _app.registerVersion)(name, version, 'esm2017');
      },
      {
        '@firebase/app': '4yol4',
        '@firebase/component': 'l6zaT',
        '@firebase/util': 'kMDC5',
        idb: 'bhyM4',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'j7FRh',
      },
    ],
    iFfyI: [
      function (require, module, exports, __globalThis) {
        module.exports =
          require('be0c0e6a09d49eb5').getBundleURL('aX1lG') +
          'up_/firebase-messaging-sw.js' +
          '?' +
          Date.now();
      },
      { be0c0e6a09d49eb5: 'hPpBg' },
    ],
    hPpBg: [
      function (require, module, exports, __globalThis) {
        'use strict';
        var bundleURL = {};
        function getBundleURLCached(id) {
          var value = bundleURL[id];
          if (!value) {
            value = getBundleURL();
            bundleURL[id] = value;
          }
          return value;
        }
        function getBundleURL() {
          try {
            throw new Error();
          } catch (err) {
            var matches = ('' + err.stack).match(
              /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g
            );
            if (matches)
              // The first two stack frames will be this function and getBundleURLCached.
              // Use the 3rd one, which will be a runtime in the original bundle.
              return getBaseURL(matches[2]);
          }
          return '/';
        }
        function getBaseURL(url) {
          return (
            ('' + url).replace(
              /^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,
              '$1'
            ) + '/'
          );
        }
        // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
        function getOrigin(url) {
          var matches = ('' + url).match(
            /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/
          );
          if (!matches) throw new Error('Origin not found');
          return matches[0];
        }
        exports.getBundleURL = getBundleURLCached;
        exports.getBaseURL = getBaseURL;
        exports.getOrigin = getOrigin;
      },
      {},
    ],
  },
  ['ldd0D', 'jrZjr'],
  'jrZjr',
  'parcelRequire94c2'
);
