'use strict';

var listalibros=   [
                        {"id":1, "titulo":"el amor en los tiempos del colera", "descripcion":"amor conflicto y mucho tiempo", "cantidad":2, "edicion":3406, "autor":{"id":1, "nombre":"garcia marquez","nacionalidad":"colombiana" }},
                        {"id":2, "titulo":"retirate joven y rico", "descripcion":"manejo de finanzas", "cantidad":4, "edicion":2417, "autor":{"id":2, "nombre":"rober kiyosaky","nacionalidad":"Estados unidos"}},
                       ];
var consecutivoCliente=2;

module.controller('LibroCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = listalibros;
    $scope.listaautor=listautor;
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    $scope.listar=function(){
        $scope.lista = listalibros;
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


