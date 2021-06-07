import angular from 'angular';
import {AppComponent} from './app-component';
import {downgradeComponent} from '@angular/upgrade/static';

export default angular.module('mainJsApp', [])
    .controller('MainCtrl', function($scope) {
        this.$onInit = () => $scope.ready = true;
    })
    .directive('mainView', downgradeComponent({ component: AppComponent}));