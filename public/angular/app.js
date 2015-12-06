/**
 * Created by manga_000 on 23/11/2015.
 */
var angularJERP = angular.module('angularJERP', ['ui.bootstrap', 'ngAnimate', 'angular.filter']);

angularJERP.directive('jerpDateModel', function(){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, modelCtrl){
            modelCtrl.$formatters.push(function(modelValue){
                return (modelValue == null ? null : new Date(modelValue));
            });
        }
    };
});