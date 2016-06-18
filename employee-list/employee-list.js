'use strict';

angular.module('myApp.employeeList', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/employeeList', {
            templateUrl: 'employee-list/employee-list.template.html',
            controller: ['$scope',
                function employeeCtrl($scope){
                    $scope.employee =
                    {
                        "firstName":"Daisy",
                        "familyName":"Kapeta",
                        "jobTitle":"HR Assistant",
                        "city":"London",
                        "country":"UK",
                        "houseAddress":"house address goes here",
                        "workAddress":"work address goes here",
                        "emailAddress":"email address goes here",
                        "contactNumber":"contact number",
                        "gender":"female",
                        "dob":"01/01/1991",
                        "maritalStatus":"marital status",
                        "ethnicity":"ethnicity goes here",
                        "visa":"visa num"
                    }
                }


                ]
        });
    }])