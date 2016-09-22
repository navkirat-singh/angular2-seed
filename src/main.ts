/// <reference path="../typings/index.d.ts" />

console.log("Main module loaded");
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MainModule} from './main.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);