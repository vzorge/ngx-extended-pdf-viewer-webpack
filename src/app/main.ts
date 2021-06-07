import angular from 'angular';
import {downgradeModule, setAngularJSGlobal} from '@angular/upgrade/static';
import {enableProdMode, StaticProvider} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
import bootstrapAngularJs from './angularjs-app';
import 'zone.js';

setAngularJSGlobal(angular);

require('../main/webcontent/app/pdf');
require('../main/webcontent/app/pdf.worker');
require('../main/webcontent/app/web/viewer');

if (process.env.NODE_ENV === 'production') {
    console.debug('Angular Prod mode');
    enableProdMode();
} else {
    console.debug('Angular Dev mode');
}

const bootstrapFn = (extraProviders: StaticProvider[]) => {
    const platformRef = platformBrowserDynamic(extraProviders);
    return platformRef.bootstrapModule(AppModule);
};
const downgradedModule = downgradeModule(bootstrapFn);
bootstrapAngularJs(downgradedModule);
