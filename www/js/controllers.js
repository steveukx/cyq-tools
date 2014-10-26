angular.module('starter.controllers', [])

    .controller('TestsCtrl', ['$scope', 'FitnessTests', function(scope, FitnessTests) {
        scope.tests = FitnessTests.tests;
    }])

    .controller('TestDetailCtrl', function($scope, $stateParams, $ionicPopup, FitnessTests) {
        $scope.test = FitnessTests.get($stateParams.testId);

        $scope.calculate = function () {
            var result = $scope.test.calculate();

            $ionicPopup.alert({
                title: 'Results',
                template: (typeof result === 'number' ? result.toFixed(3) : result)
            });
        };
    })

;
