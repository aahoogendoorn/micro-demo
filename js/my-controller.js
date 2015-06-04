/**
 * Created by Sander on 22-3-2015.
 */

var myControllers = angular.module("myControllers", []);

myControllers.controller('main', ['$scope', function($scope) {
        $scope.jumbo = {
            title: 'Angular directives',
            description: 'I took my very first baby steps in about an hour'
        };

        $scope.gohome = { title: 'Home', link: 'home.html' };
        $scope.buttons = { title: 'Buttons', link: '2-buttons.html' };
        $scope.input = { title: 'Inputs', link: '6-inputs.html' };
    }]
);
