'use strict';

var listaCliente=   [
                        {"id":1, "nombre":"Deisy", "direccion":"car 8a # 45 - 121", "telefono":"3114456556", "ciudad":{"id":1, "nombre":"Tunja"}},
                        {"id":1, "nombre":"Pedro", "direccion":"car 46 # 163b - 41", "telefono":"3207594755", "ciudad":{"id":2, "nombre":"Bogota"}}
                    ];
var consecutivoCliente=2;

module.controller('ClienteCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = listaCliente;
    $scope.listaCiudad=listaCiudad;
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    $scope.listar=function(){
        $scope.lista = listaCliente;
    };

    $scope.listar();
    //guardar
    $scope.nuevo = function () {
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
    };
    
    $scope.guardar = function () {
       $scope.errores = {};
        var error = false;
        
        if (error)
            return;
        if(!$scope.datosFormulario.id){
            $scope.datosFormulario.id=consecutivoCliente++;
        }
        $scope.lista.push($scope.datosFormulario);
        alert("Sus datos han sido guardados con éxito");
        $scope.cancelar(); 
    };
    
    $scope.cancelar = function () {
        $scope.panelEditar = false;
        $scope.datosFormulario = {};
    };

    //editar
    $scope.editar = function (data) {
        $scope.panelEditar = true;
        $scope.datosFormulario = data;
    };
    //eliminar
    $scope.eliminar = function (data){
       if (confirm('\xbfDesea elminar este registro?')) {    
            for(var i=0;i<$scope.lista.length;i++){
                if($scope.lista[i].id==data.id){
                    $scope.lista.splice(i,1);
                }
            }
        }
    };
}]);
