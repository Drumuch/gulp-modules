(function () {
    'use strict';
    angular
        .module('dashboard')
        .controller('Dashboard', Dashboard);
    /* @ngInject */
    function Dashboard($q, $http) {
        console.log('Dashboard controller ...');
    }
})();
