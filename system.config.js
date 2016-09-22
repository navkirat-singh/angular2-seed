System.config({
    paths: {
        'npm': 'node_modules'
    },
    defaultJSExtensions: true,
    meta: {
        'main.js' : { format: 'register'}
    },
    map : {
        // angular bundles
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
        '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
        '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
        // angular testing umd bundles
        '@angular/core/testing': 'node_modules/@angular/core/bundles/core-testing.umd.js',
        '@angular/common/testing': 'node_modules/@angular/common/bundles/common-testing.umd.js',
        '@angular/compiler/testing': 'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
        '@angular/platform-browser/testing': 'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
        '@angular/platform-browser-dynamic/testing': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
        '@angular/http/testing': 'node_modules/@angular/http/bundles/http-testing.umd.js',
        '@angular/router/testing': 'node_modules/@angular/router/bundles/router-testing.umd.js',
        '@angular/forms/testing': 'node_modules/@angular/forms/bundles/forms-testing.umd.js',
        // other libraries
        'rxjs':                       'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    }
});