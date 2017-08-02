import 'core-js/client/shim.min';
import 'zone.js/dist/zone';
// import 'jquery';

import * as angular from 'angular';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app.module';
import { getTranslationProviders } from './src/i18n-providers';
require('./app.upgrade');

import { mainApp } from './app';

angular.injector(['ng']).get('$q').all([fetchConfig()]).then(bootstrapApp);

function fetchConfig() {
    return angular.injector(['ng']).get('$http').get('settings.json').then((response) => {
        mainApp.constant('config', response.data);
    });
}

function bootstrapApp() {
    angular.element(document).ready(() => {
        document['locale'] = 'en';
        getTranslationProviders().then((providers) => {
            platformBrowserDynamic().bootstrapModule(AppModule, { providers }).then((platformRef) => {
                const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
                upgrade.bootstrap(document.documentElement, ['jsClient']);
                // var temp = angular.injector(["jsClient"]);

                // var injector = angular.bootstrap(document, ["jsClient"], {
                //     strictDi: true
                // });
                // initilize parameter reader
                // let startupService:any = injector.get('startupService');
                // startupService.registerServices([
                //     'SetTimeseriesOfStatusService',
                //     'SetTimeParameterService',
                //     'SetInternalTimeseriesService',
                //     'SetConstellationService',
                //     'SetConstellationServiceHack',
                //     'SetLanguageService'
                // ]);
                // startupService.checkServices();
                // // init mapService to have load stations directly
                // injector.get('mapService');
            });
        });
    });
}
