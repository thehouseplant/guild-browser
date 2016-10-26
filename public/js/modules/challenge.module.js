(function() {
    'use strict';

    angular.module('ng-wow.challenge', [])
        .controller('ChallengeCtrl', ChallengeCtrl);

    function ChallengeCtrl($scope, $http) {
        $scope.loading = false;
        $scope.challenges = [];

        function init() {
            $scope.loadChallenge();
        }

        $scope.loadChallenge = function() {
            $scope.loading = true;
            $http.get('https://us.api.battle.net/wow/guild/Lightbringer/Halfway%20Decent?fields=challenge&locale=en_US&apikey=crbqtccfgansygtgdr6uswrzfs2gh43r').then(function(results) {
                $scope.challenges = results.data.challenge;
                console.log($scope.challenges[1].groups[0].members[0].character.name);
                $scope.loading = false;
            });
        }

        init();
    }
})();
