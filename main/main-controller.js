angular.module("myApp").controller('MainController', MainController);

function MainController(FilmFactory) {
    var vm = this;

    FilmFactory.getAllFilms().then(function (response) {
        console.log(response);
        vm.films = response;
    });

    vm.name = 'Darius';
}