/**
 * Created by Aluno on 04/11/2015.
 */
angular.module('senai',['ngMessages','ui.growl']);

angular.module('senai').controller('IndexController4', IndexController4);

IndexController4.$inject = ['$scope', 'AlertService', '$filter'];

function IndexController4($scope, AlertService, $filter){
    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.limpar = limpar;
    $scope.salvar = salvar;

    function salvar(){
        if($scope.myForm.$invalid === true){

            /*
            $growl.box('Observe', 'Verifique os campos inválidos', {
                class: 'danger',
                timeout: 3000
            }).open();
            */
            AlertService.showOk('Observe', 'Verifique os campos inválidos');

            return;
        }

        $scope.listaDePessoas.push($scope.entidade);

        $scope.dataStr = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');


        limpar();
/*
        $growl.box('Ok', 'Registro salvo com sucesso', {
            class: 'success',
            timeout: 3000
        }).open();
 */
    }

    function limpar(){
        $scope.entidade = {};
    }
}