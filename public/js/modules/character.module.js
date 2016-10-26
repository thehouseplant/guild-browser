(function() {
    'use strict';

    angular.module('ng-wow.character', [])
        .controller('CharacterCtrl', CharacterCtrl);

    function CharacterCtrl($scope, $http, $stateParams) {
        $scope.loading = false;
        $scope.character = [];

        function init() {
            $scope.loadCharacter();
        }

        $scope.loadCharacter = function() {
            var characterName = $stateParams.characterName;

            $scope.loading = true;
            $http.get('https://us.api.battle.net/wow/character/Lightbringer/' + characterName + '?fields=achievements,appearance,feed,hunterPets,items,mounts,pets,professions,progression,pvp,reputation,statistics,stats,talents,titles&locale=en_US&apikey=crbqtccfgansygtgdr6uswrzfs2gh43r').then(function(results) {
                $scope.character = results.data;

                $scope.loading = false;
            });
        }

        init();
    }
})();
