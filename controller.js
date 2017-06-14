/**
 * Created by Dstrasel on 6/14/2017.
 */
angular.module('myApp').controller('MyController', MyController).controller('AboutController', AboutController);

function MyController() {
    var vm = this;
    vm.name = 'Darius';
}

function AboutController() {
    var vm = this;
    vm.about = 'This is my bio.';
}