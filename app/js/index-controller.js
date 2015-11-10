/**
 * Created by Augusto on 03/11/2015.
 */

angular.module('HelloWord',[]);

angular.module('HelloWord').controller('IndexController', IndexController);

function IndexController ($scope){
    $scope.nome = 'HelloWord';index-controller.jsindex-controller.js

    $scope.click = function(){
        $scope.nome = 'Augusto';
    }
}