/**
 * Created by Augusto on 09/11/2015.
 */

angular.module('senai').service('AlertService', AlertService);



AlertService.$inject = ['$growl'];

function AlertService($growl){

    this.showOk= showOk;
    this.showErro = showErro;
    this.showAlert= showAlert;
    this.showInf = showInf;

    function showOk(titulo, mensagem){
        $growl.box(titulo,mensagem, {
            class:'sucess', timeout:300


        }).open();


    }

    function showErro(titulo, mensagem){
        $growl.box(titulo,mensagem, {
            class:'danger', timeout:300


        }).open();


    }

    function showAlert(titulo, mensagem){
        $growl.box(titulo,mensagem, {
            class:'danger', timeout:300


        }).open();


    }

    function showInf(titulo, mensagem){
        $growl.box(titulo,mensagem, {
            class:'danger', timeout:300


        }).open();


    }



}

