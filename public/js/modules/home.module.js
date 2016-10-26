(function() {
    'use strict';

    angular.module('ng-wow.home', [])
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl($scope, $http) {
        $scope.loading = false;
        $scope.news = [];

        function init() {
            $scope.loadNews();
        }

        $scope.loadNews = function() {
            $scope.loading = true;
            $http.get('https://us.api.battle.net/wow/guild/Lightbringer/Halfway%20Decent?fields=news&locale=en_US&apikey=crbqtccfgansygtgdr6uswrzfs2gh43r').then(function(results) {
                for (var i = 0; i < results.data.news.length; i++) {
                    var result = results.data.news[i];

                    function item(character, id, name, type, timestamp) {
                        var self = this;
                        self.character = character;
                        self.id = id;
                        self.name = name;
                        self.type = type;
                        self.timestamp = timestamp;
                    }

                    if (result.type == 'itemLoot' || result.type == 'itemPurchase') {
                        $http.get('https://us.api.battle.net/wow/item/' + result.itemId + '?locale=en_US&apikey=crbqtccfgansygtgdr6uswrzfs2gh43r').then(function(payload) {
                            $scope.news.push(new item(result.character, payload.data.id, payload.data.name, result.type, result.timestamp));
                        });
                    } else if (result.type == 'playerAchievement' || result.type == 'guildAchievement') {
                        $http.get('https://us.api.battle.net/wow/achievement/' + result.achievement.id +'?locale=en_US&apikey=crbqtccfgansygtgdr6uswrzfs2gh43r').then(function(payload) {
                            $scope.news.push(new item(result.character, payload.data.id, payload.data.title, result.type, result.timestamp));
                            //$scope.news.push(result);
                        });
                    }
                }

                $scope.loading = false;
            });
        }

        init();
    }
})();
