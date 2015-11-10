/**
 * Created by Augusto on 09/11/2015.
 */

angular.module('senai')
.filter('maiusculo', fcMaiusculo);

function fcMaiusculo(){
    return function (input){
        if(input && typeof input ==='string'){
            return input.toUpperCase();
        }

        return input;
    }
}