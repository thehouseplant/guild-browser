(function() {
    'use strict';

    angular.module('ng-wow.roster', [])
        .controller('RosterCtrl', RosterCtrl);

    function RosterCtrl($scope, $http) {
        $scope.loading = false;
        $scope.members = [];

        function init() {
            $scope.loadMembers();
        }

        $scope.loadMembers = function() {
            $scope.loading = true;
            $http.get('https://us.api.battle.net/wow/guild/Lightbringer/Halfway%20Decent?fields=members&locale=en_US&apikey=crbqtccfgansygtgdr6uswrzfs2gh43r').then(function(results) {
                $scope.members = results.data.members;

                $scope.loading = false;
            });
        }

        init();
    }
})();
