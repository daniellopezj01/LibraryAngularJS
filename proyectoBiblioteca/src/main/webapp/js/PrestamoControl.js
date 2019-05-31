'use strict';

var listaPrestamo = [{
        "fecha": "17/03/2019",
        "observacion": "el libro es de clase alta",
        "estado": "bueno",
        "dias": 4,
        "multa": 3000,
        "libro": { "id": 1, "titulo": "el amor en los tiempos del colera", "descripcion": "amor conflicto y mucho tiempo", "cantidad": 2, "edicion": 3406, },
        "cliente": { "id": 1, "nombre": "Deisy", "direccion": "car 8a # 45 - 121", "telefono": "3114456556" }
    },
    {
        "fecha": "17/04/2018",
        "observacion": "el libro es de clase media",
        "estado": "regular",
        "dias": 10,
        "multa": 1000,
        "libro": { "id": 2, "titulo": "retirate joven y rico", "descripcion": "manejo de finanzas", "cantidad": 4, "edicion": 2417 },
        "cliente": { "id": 1, "nombre": "Pedro", "direccion": "car 46 # 163b - 41", "telefono": "3207594755" }
    },
];
var consecutivoCliente = 2;

module.controller('PrestamoCtrl', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    //listar
    $scope.lista = listaPrestamo;
    $scope.listalibros = listalibros;
    $scope.listaCliente = listaCliente;
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    $scope.listar = function() {
        $scope.lista = listaPrestamo;
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
            $scope.datosFormulario.id = consecutivoCliente++;
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