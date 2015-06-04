/**
 * Created by Sander on 22-3-2015.
 */

var myDirectives = angular.module("myDirectives", []);

myDirectives.directive('myButton', function(){
    return {
        restrict: 'AE',
        templateUrl: 'directives/my-button.html',
        replace: true,
        transclude: true,
        scope: { model: '=model' }
    }
});

myDirectives.directive('myJumbo', function(){
    return {
        restrict: 'AE',
        replace: true,
        transclude: true,
        templateUrl: 'directives/my-jumbo.html',
        scope: { model: '=model' }
    }
});

myDirectives.directive('myNavbar', function(){
    return {
        restrict: 'AE',
        replace: true,
        transclude: true,
        templateUrl: 'directives/my-navbar.html'
    }
});

myDirectives.directive('d2dNavbar', function(){
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'directives/d2d-navbar.html'
    }
});

myDirectives.directive('myModal', function(){
    return {
        restrict: 'AE',
        replace: true,
        transclude: true,
        templateUrl: 'directives/my-modal.html'
    }
});
