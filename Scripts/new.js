/// <reference path="angular.min.js" />
var myapp = angular.module("mymodule", []);
var myController = function ($scope) {
    $scope.message = "hello world by saisharan";
};
myapp.controller("myController",myController);