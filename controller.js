/**
 * Created by Dstrasel on 6/14/2017.
 */
angular.module('myApp').controller('MainController', MainController).controller('FilmController', FilmController);

function MainController($http) {
    var vm = this;

    $http.get('http://swapi-tpiros.rhcloud.com/films').then(function (response) {
        console.log(response);
        vm.films = response.data;
    });

    vm.name = 'Darius';
}

function FilmController($http, $routeParams) {
    var vm = this;
    var id = $routeParams.id;
    $http.get('http://swapi-tpiros.rhcloud.com/films/' + id).then(function (response) {
        console.log(response);
        vm.film = response.data;
    });
}