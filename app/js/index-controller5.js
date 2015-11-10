/**
 * Created by Augusto on 10/11/2015.
 */

angular.module('senai',[]);
angular.module('senai').controller('teste',teste);

function teste ($scope){

    $scope.adiconarPessoa = adiconarPessoa;

    function adiconarPessoa(){
        var objPessoa = {};

        objPessoa.nome = $scope.nome;
        objPessoa.sexo = $scope.sexo;

        for (i = 0; i < objPessoa.length; i++) {
            objPessoa[i].nome = '';
        }


    }

}
