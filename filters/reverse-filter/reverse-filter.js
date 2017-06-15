/**
 * Created by dariusstrasel on 6/14/17.
 */
angular.module('myApp').filter('reverse', reverse);

function reverse() {
    return function (string) {
        if (string) {
            return string.split('').reverse().join('');
        }
    }
}