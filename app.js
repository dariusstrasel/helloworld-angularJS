/**
 * Created by Dstrasel on 6/14/2017.
 */
angular.module('myApp', ['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MyController',
        controllerAs: 'vm'
    }).when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
    }).when('/404', {
        template: '<p>Error 404: Could not find URL.</p>'
    }).otherwise({
        redirectTo: '/404'
    });
}