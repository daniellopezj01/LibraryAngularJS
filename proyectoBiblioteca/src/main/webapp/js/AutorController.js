'use strict';

var listautor = [{ "id": 1, "nombre": "garcia marquez", "nacionalidad": "colombiana" }, { "id": 2, "nombre": "rober kiyosaky", "nacionalidad": "Estados unidos" }];
var consecutivoCiudad = 2;

module.controller('AutorCtrl', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    //listar
    $scope.lista = listautor;
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    $scope.listar = function() {
        $scope.lista = listautor;
    };

    $scope.listar();
    //guardar
    $scope.nuevo = function() {
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
    };

    $scope.guardar = function() {
        $scope.errores = {};
        var error = false;

        if (error)
            return;
        if (!$scope.datosFormulario.id) {
            $scope.datosFormulario.id = consecutivoCiudad++;
        }
        $scope.lista.push($scope.datosFormulario);
        alert("Sus datos han sido guardados con éxito");
        $scope.cancelar();
    };

    $scope.cancelar = function() {
        $scope.panelEditar = false;
        $scope.datosFormulario = {};
    };

    //editar
    $scope.editar = function(data) {
        $scope.panelEditar = true;
        $scope.datosFormulario = data;
    };
    //eliminar
    $scope.eliminar = function(data) {
        if (confirm('\xbfDesea elminar este registro?')) {
            for (var i = 0; i < $scope.lista.length; i++) {
                if ($scope.lista[i].id == data.id) {
                    $scope.lista.splice(i, 1);
                }
            }
        }
    };
}]);