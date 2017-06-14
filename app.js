/**
 * Created by Dstrasel on 6/14/2017.
 */
angular.module('myApp', ['ngRoute']).config(config);

function config($routeProvider){ //$routeProvider is an AngularJS service
    $routeProvider.when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
    }).when('/film/:id', {
        templateUrl: 'film/film.html',
        controller: 'FilmController',
        controllerAs: 'vm'
    }).when('/404', {
        template: '<p>Error 404: Could not find URL.</p>'
    }).otherwise({
        redirectTo: '/404'
    });
}