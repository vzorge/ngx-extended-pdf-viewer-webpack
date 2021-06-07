import * as angular from 'angular';
import app from './angularjs-app-module'

export default function bootstrapAngularJs(angularApp: any) {
    angular.module('angularJsApp', [app.name, angularApp]);
    angular.bootstrap(document.body, ['angularJsApp']);
}

