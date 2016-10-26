(function() {
    'use strict';

    angular.module('ng-wow.achievements', [])
        .controller('AchievementsCtrl', AchievementsCtrl);

    function AchievementsCtrl($scope, $http) {
        $scope.loading = false;
        $scope.achievementPoints = null;
        $scope.achievements = [];

        function init() {
            $scope.loadAchievements();
        }

        $scope.loadAchievements = function() {
            $scope.loading = true;
            $http.get('https://us.api.battle.net/wow/guild/Lightbringer/Halfway%20Decent?fields=achievements&locale=en_US&apikey=crbqtccfgansygtgdr6uswrzfs2gh43r').then(function(results) {
                $scope.achievementPoints = results.data.achievementPoints;

                function achievement(id, name) {
                    var self = this;
                    self.id = id;
                    self.name = name;
                }

                for (var i = 0; i < results.data.achievements.achievementsCompleted.length; i++) {
                    var achievementId = results.data.achievements.achievementsCompleted[i];

                    $http.get('https://us.api.battle.net/wow/achievement/' + achievementId +'?locale=en_US&apikey=crbqtccfgansygtgdr6uswrzfs2gh43r').then(function(payload) {
                        $scope.achievements.push(new achievement(payload.data.id, payload.data.title));
                    });
                }

                $scope.loading = false;
            });
        }

        init();
    }
})();
