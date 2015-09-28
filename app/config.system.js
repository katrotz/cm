System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "vendor/github/*",
    "npm:*": "vendor/npm/*"
  },
  bundles: {
    "dist/lib.min.js": [
      "lib/index.js",
      "lib/ng-module.js",
      "npm:babel-runtime@5.8.25/core-js/promise",
      "github:angular/bower-angular@1.4.6",
      "github:angular/bower-angular-sanitize@1.4.6",
      "github:angular-ui/ui-router@0.2.15",
      "lib/controllers/index.js",
      "lib/directives/index.js",
      "lib/filters/index.js",
      "lib/services/index.js",
      "github:angular-ui/bootstrap-bower@0.13.4",
      "lib/ng-config.js",
      "lib/ng-run.js",
      "npm:core-js@1.1.4/library/fn/promise",
      "github:Swimlane/angular-data-table@0.3.18/release/dataTable.es6",
      "styles/main.css!github:systemjs/plugin-css@0.1.18",
      "styles/material_dt.css!github:systemjs/plugin-css@0.1.18",
      "github:Swimlane/angular-data-table@0.3.18/release/dataTable.css!github:systemjs/plugin-css@0.1.18",
      "github:angular/bower-angular@1.4.6/angular",
      "github:angular/bower-angular-sanitize@1.4.6/angular-sanitize",
      "github:angular-ui/ui-router@0.2.15/angular-ui-router",
      "lib/controllers/Customer/CustomerNaviController.js",
      "lib/controllers/NotFoundController.js",
      "lib/controllers/CustomerController.js",
      "lib/controllers/HomeController.js",
      "lib/controllers/Customer/CustomerCreateController.js",
      "lib/controllers/Customer/CustomerListController.js",
      "lib/controllers/Customer/CustomerEditController.js",
      "lib/directives/pageTitle.js",
      "github:angular-ui/bootstrap-bower@0.13.4/index",
      "lib/directives/dtCustomerListActions.js",
      "npm:babel-runtime@5.8.25/core-js/object/keys",
      "lib/services/Storage.js",
      "npm:core-js@1.1.4/library/modules/es6.string.iterator",
      "npm:core-js@1.1.4/library/modules/es6.object.to-string",
      "npm:core-js@1.1.4/library/modules/$.core",
      "npm:core-js@1.1.4/library/modules/web.dom.iterable",
      "npm:core-js@1.1.4/library/modules/es6.promise",
      "npm:babel-runtime@5.8.25/helpers/to-consumable-array",
      "npm:babel-runtime@5.8.25/helpers/class-call-check",
      "npm:babel-runtime@5.8.25/helpers/create-class",
      "npm:babel-runtime@5.8.25/core-js/map",
      "npm:babel-runtime@5.8.25/core-js/get-iterator",
      "lib/services/storage/Database.js",
      "npm:core-js@1.1.4/library/fn/object/keys",
      "npm:core-js@1.1.4/library/modules/$.string-at",
      "npm:core-js@1.1.4/library/modules/$.iter-define",
      "npm:core-js@1.1.4/library/modules/es6.array.iterator",
      "npm:core-js@1.1.4/library/modules/$.library",
      "github:angular-ui/bootstrap-bower@0.13.4/ui-bootstrap-tpls",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:core-js@1.1.4/library/modules/$",
      "npm:core-js@1.1.4/library/modules/$.iterators",
      "npm:core-js@1.1.4/library/modules/$.ctx",
      "npm:core-js@1.1.4/library/modules/$.global",
      "npm:core-js@1.1.4/library/modules/$.def",
      "npm:core-js@1.1.4/library/modules/$.an-object",
      "npm:core-js@1.1.4/library/modules/$.classof",
      "npm:core-js@1.1.4/library/modules/$.a-function",
      "npm:core-js@1.1.4/library/modules/$.set-proto",
      "npm:core-js@1.1.4/library/modules/$.is-object",
      "npm:core-js@1.1.4/library/modules/$.strict-new",
      "npm:core-js@1.1.4/library/modules/$.same",
      "npm:core-js@1.1.4/library/modules/$.for-of",
      "npm:core-js@1.1.4/library/modules/$.species",
      "npm:core-js@1.1.4/library/modules/$.microtask",
      "npm:core-js@1.1.4/library/modules/$.wks",
      "npm:core-js@1.1.4/library/modules/$.uid",
      "npm:core-js@1.1.4/library/modules/$.iter-detect",
      "npm:core-js@1.1.4/library/modules/$.support-desc",
      "npm:core-js@1.1.4/library/modules/$.mix",
      "npm:core-js@1.1.4/library/modules/$.tag",
      "npm:babel-runtime@5.8.25/core-js/array/from",
      "npm:babel-runtime@5.8.25/core-js/object/define-property",
      "npm:core-js@1.1.4/library/fn/get-iterator",
      "npm:core-js@1.1.4/library/fn/map",
      "lib/services/storage/fixtures/customer_dt.js",
      "lib/services/storage/fixtures/customer_analytics_dt.js",
      "github:dfahlander/Dexie.js@1.2.0",
      "npm:core-js@1.1.4/library/modules/$.to-integer",
      "npm:babel-runtime@5.8.25/helpers/inherits",
      "npm:core-js@1.1.4/library/modules/es6.object.keys",
      "npm:core-js@1.1.4/library/modules/$.defined",
      "npm:babel-runtime@5.8.25/helpers/get",
      "npm:core-js@1.1.4/library/modules/$.redef",
      "npm:core-js@1.1.4/library/modules/$.iter-create",
      "npm:core-js@1.1.4/library/modules/$.has",
      "npm:core-js@1.1.4/library/modules/$.hide",
      "npm:core-js@1.1.4/library/modules/$.unscope",
      "npm:core-js@1.1.4/library/modules/$.iter-step",
      "npm:core-js@1.1.4/library/modules/$.to-iobject",
      "lib/views/layouts/default.html!github:systemjs/plugin-text@0.0.2",
      "lib/views/components/footer.html!github:systemjs/plugin-text@0.0.2",
      "lib/views/pages/customer.html!github:systemjs/plugin-text@0.0.2",
      "lib/views/pages/customer.list.html!github:systemjs/plugin-text@0.0.2",
      "lib/views/components/header.html!github:systemjs/plugin-text@0.0.2",
      "lib/views/pages/customer.edit.html!github:systemjs/plugin-text@0.0.2",
      "lib/views/pages/customer.navi.html!github:systemjs/plugin-text@0.0.2",
      "lib/views/modals/customer.create.html!github:systemjs/plugin-text@0.0.2",
      "lib/directives/dtCustomerListActions.html!github:systemjs/plugin-text@0.0.2",
      "lib/directives/pageTitle.html!github:systemjs/plugin-text@0.0.2",
      "npm:core-js@1.1.4/library/modules/$.iter-call",
      "npm:core-js@1.1.4/library/modules/$.is-array-iter",
      "npm:core-js@1.1.4/library/modules/$.to-length",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:core-js@1.1.4/library/modules/core.get-iterator-method",
      "npm:core-js@1.1.4/library/modules/$.cof",
      "npm:core-js@1.1.4/library/modules/$.task",
      "npm:core-js@1.1.4/library/modules/$.shared",
      "npm:core-js@1.1.4/library/modules/$.fails",
      "npm:core-js@1.1.4/library/fn/array/from",
      "npm:core-js@1.1.4/library/fn/object/define-property",
      "npm:core-js@1.1.4/library/modules/core.get-iterator",
      "npm:core-js@1.1.4/library/modules/es6.map",
      "npm:core-js@1.1.4/library/modules/es7.map.to-json",
      "npm:core-js@1.1.4/library/modules/$.to-object",
      "npm:babel-runtime@5.8.25/core-js/object/set-prototype-of",
      "npm:babel-runtime@5.8.25/core-js/object/create",
      "npm:core-js@1.1.4/library/modules/$.object-sap",
      "npm:core-js@1.1.4/library/modules/$.property-desc",
      "npm:babel-runtime@5.8.25/core-js/object/get-own-property-descriptor",
      "github:dfahlander/Dexie.js@1.2.0/dist/latest/Dexie",
      "npm:core-js@1.1.4/library/modules/$.invoke",
      "npm:core-js@1.1.4/library/modules/$.dom-create",
      "npm:core-js@1.1.4/library/modules/$.html",
      "npm:core-js@1.1.4/library/modules/es6.array.from",
      "npm:core-js@1.1.4/library/modules/$.iobject",
      "npm:process@0.10.1",
      "npm:core-js@1.1.4/library/modules/$.collection-to-json",
      "npm:core-js@1.1.4/library/modules/$.collection-strong",
      "npm:core-js@1.1.4/library/modules/$.collection",
      "npm:core-js@1.1.4/library/fn/object/create",
      "npm:core-js@1.1.4/library/fn/object/set-prototype-of",
      "npm:core-js@1.1.4/library/fn/object/get-own-property-descriptor",
      "npm:process@0.10.1/browser",
      "npm:core-js@1.1.4/library/modules/es6.object.set-prototype-of",
      "npm:core-js@1.1.4/library/modules/es6.object.get-own-property-descriptor"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.6",
    "angular-bootstrap": "github:angular-ui/bootstrap-bower@0.13.4",
    "angular-data-table": "github:Swimlane/angular-data-table@0.3.18",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.6",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.6",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "clean-css": "npm:clean-css@3.4.5",
    "core-js": "npm:core-js@1.1.4",
    "css": "github:systemjs/plugin-css@0.1.18",
    "dfahlander/Dexie.js": "github:dfahlander/Dexie.js@1.2.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:Swimlane/angular-data-table@0.3.18": {
      "angular": "npm:angular@1.4.6"
    },
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.6"
    },
    "github:angular/bower-angular-mocks@1.4.6": {
      "angular": "github:angular/bower-angular@1.4.6"
    },
    "github:angular/bower-angular-sanitize@1.4.6": {
      "angular": "github:angular/bower-angular@1.4.6"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular@1.4.6": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.5.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@1.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
