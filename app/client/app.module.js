(function () {
    'use strict';

    angular
        .module('app', ['ui.router', 'dashboard'])
        .config(routeConfig)
        .run(runFuction);

    function runFuction() {
        console.log('hii');
    }

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard/dashboard.html',
                controller: 'Dashboard',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/dashboard');
    }

})();
