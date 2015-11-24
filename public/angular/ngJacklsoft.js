/**
 * Created by leonardo.mangano on 11/11/2015.
 */
var ngJacklsoft = angular.module('ngJacklsoft', ['ui.bootstrap', 'ngAnimate']);

ngJacklsoft.directive('jklDateModel', function(){
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

ngJacklsoft.directive('jklSelect', function($http){
    return {
        restrict: 'A',
        template: "<option ng-repeat='row in data' value='{{row[isoKey]}}'>{{row[isoKey] + '-> ' + row[isoValue]}}</option>",
        scope: {
            isoUrl: "@",
            isoKey: "@",
            isoValue: "@",
        },
        controller: function($scope){
            $http({
                method: 'GET',
                url: $scope.isoUrl,
                responseType: 'json'
            }).then(function(res){
                $scope.data = res.data;
            }, function(res){
                alert(res.data.error);
            });
        }
    };
});

ngJacklsoft.factory('jklDefTable', function($http){
    return function(url){
        var instance = {
            url: url,
            data: [],
            index: function(){
                $http({
                    method: 'GET',
                    url: instance.url,
                    responseType: 'json'
                }).then(function(res){
                    instance.data = res.data;
                }, function(res){
                    alert(res.data.error);
                });
            }
        };

        return instance;
    };
});

ngJacklsoft.factory('jklDefForm', function($http){
    return function(url, model, mapData){
        var instance =  {
            url: url,
            model: model,
            updating: false,
            mapData: mapData,
            create: function(){
                instance.updating = false;
                for(var key in instance.model){
                    if(instance.model[key] instanceof Array){
                        instance.model[key] = [];
                    } else {
                        instance.model[key] = null;
                    }
                }
            },
            store: function(){
                $http({
                    method: 'POST',
                    url: instance.url,
                    responseType: 'json',
                    data: (instance.mapData ? instance.mapData() : instance.model)
                }).then(function(res){
                    instance.onSubmit && instance.onSubmit();
                    instance.create();
                }, function(res){
                    alert(res.data.error);
                });
            },
            show: function(id){
                $http({
                    method: 'GET',
                    url: instance.url+'/'+id,
                    responseType: 'json'
                }).then(function(res){
                    instance.updating = true;
                    for(var key in instance.model){
                        instance.model[key] = res.data[key];
                    }
                }, function(res){
                    alert(res.data.error);
                });
            },
            update: function(id){
                $http({
                    method: 'PUT',
                    url: instance.url+'/'+id,
                    responseType: 'json',
                    data: (instance.mapData ? instance.mapData() : instance.model)
                }).then(function(res){
                    instance.onSubmit && instance.onSubmit();
                    instance.create();
                });
            },
            destroy: function(id){
                $http({
                    method: 'DELETE',
                    url: instance.url+'/'+id,
                    responseType: 'json'
                }).then(function(res){
                    instance.onSubmit && instance.onSubmit();
                    instance.create();
                }, function(res){
                    alert(res.data.error);
                });
            },
            onSubmit: null
        };

        return instance;
    };
});