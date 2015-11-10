/**
 * Created by Augusto on 03/11/2015.
 */

angular.module('senai',[]);

angular.module('senai').controller('IndexController', IndexController);

function IndexController ($scope){
    $scope.nome = ' ';
    $scope.myClasse = '';
    $scope.styleDiv = {};
    iniciar();

    function iniciar (){
        $scope.$watch('nome', escutaNome);
    }

    function escutaNome (newValue, oldValue){
        if(newValue ===oldValue)
            return;

        if(newValue ==='Maria'){
            $scope.styleDiv.background = 'red';
            $scope.myClasse = 'azul';
        }

        else if(newValue ==='Joao'){
            $scope.styleDiv.background = 'blue';
            $scope.myClasse = 'vermelho';

        }

        else{
            $scope.styleDiv.background = '#FFFF';

        }




    }



}