(function() {
    'use strict';

    angular.module('ng-wow.config', ['ui.router'])
        .config(RouteConfig);

    function RouteConfig($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl',
                templateUrl: '/partials/home.html'
            })
            .state('roster', {
                url: '/roster',
                controller: 'RosterCtrl',
                templateUrl: '/partials/roster.html'
            })
            .state('character', {
                url: '/character/:characterName',
                controller: 'CharacterCtrl',
                templateUrl: '/partials/character.html'
            })
            .state('character.general', {
                url: '/general',
                templateUrl: '/partials/character/general.html'
            })
            .state('character.mounts', {
                url: '/mounts',
                templateUrl: '/partials/character/mounts.html'
            })
            .state('character.pets', {
                url: '/pets',
                templateUrl: '/partials/character/pets.html'
            })
            .state('character.progression', {
                url: '/progression',
                templateUrl: '/partials/character/progression.html'
            })
            .state('character.reputation', {
                url: '/reputation',
                controller: 'CharacterReputationCtrl',
                templateUrl: '/partials/character/reputation.html'
            })
            .state('achievements', {
                url: '/achievements',
                controller: 'AchievementsCtrl',
                templateUrl: '/partials/achievements.html'
            })
            .state('challenge', {
                url: '/challenge',
                controller: 'ChallengeCtrl',
                templateUrl: '/partials/challenge.html'
            });

        $urlRouterProvider.otherwise('home');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
})();
