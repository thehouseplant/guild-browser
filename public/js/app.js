angular.module('ng-wow', [
    'ui.router',
    'ng-wow.config',
    'ng-wow.home',
    'ng-wow.roster',
    'ng-wow.character',
    'ng-wow.achievements',
    'ng-wow.challenge'
])
.controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $http) {
    $scope.loading = false;
    $scope.guild = [];

    function init() {
        $scope.loadGuild();
    }

    $scope.loadGuild = function() {
        $scope.loading = true;
        $http.get('https://us.api.battle.net/wow/guild/Lightbringer/Halfway%20Decent?locale=en_US&apikey=crbqtccfgansygtgdr6uswrzfs2gh43r').then(function(results) {
            $scope.guild = results.data;

            $scope.loading = false;
        });
    }

    init();
}
