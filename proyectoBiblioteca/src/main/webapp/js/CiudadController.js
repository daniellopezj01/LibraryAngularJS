'use strict';

module.controller('CiudadCtrl', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    //listar
    $scope.lista;
    $scope.falg = false;

    $scope.datosFormulario = {};
    $scope.panelEditar = false;

    $scope.listar = function() {
        $http.get('http://localhost:8080/library/webresources/Ciudad').
        then(function(response) {
            // $scope.lista = JSON.stringify(response.data);
            $scope.lista = response.data;
        });
    }

    $scope.listar();

    //guardar
    $scope.nuevo = function() {
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
        $scope.falg = false;
    };


    $scope.createOrsave = function() {
        if ($scope.falg == true) {
            $scope.update();
        } else {
            $scope.guardar();
        }
    }

    $scope.guardar = function() {
        $scope.errores = {};
        var error = false;
        if (error)
            return;
        if (!$scope.datosFormulario.id) {
            $scope.datosFormulario.id = $scope.lista[$scope.lista.length - 1].id + 1;
        }
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log($scope.datosFormulario);
        $http.post("http://localhost:8080/library/webresources/Ciudad", $scope.datosFormulario, config)
            .success(function(data, status, headers, config) {
                $scope.PostDataResponse = data;
                $scope.listar();
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        alert("Sus datos han sido guardados con éxito");
        $scope.cancelar();
    };

    $scope.update = function() {
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log($scope.datosFormulario);
        $http.put("http://localhost:8080/library/webresources/Ciudad", $scope.datosFormulario, config)
            .success(function(data, status, headers, config) {
                $scope.PostDataResponse = data;
                $scope.listar();
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        alert("datos actualizados correctamente");
        $scope.cancelar();
    }

    $scope.cancelar = function() {
        $scope.panelEditar = false;
        $scope.datosFormulario = {};
    };

    //editar
    $scope.editar = function(data) {
        $scope.panelEditar = true;
        $scope.datosFormulario = data;
        $scope.falg = true;
    };

    //eliminar
    $scope.eliminar = function(data) {
        if (confirm('\xbfDesea elminar este registro?')) {
            for (var i = 0; i < $scope.lista.length; i++) {
                if ($scope.lista[i].id == data.id) {
                    $http.delete('http://localhost:8080/library/webresources/Ciudad/' + $scope.lista[i].id).
                    then(function(response) {
                        if (response.data == "OK") {
                            $scope.listar();
                        } else {
                            alert("Error en eliminar datos");
                        }
                    });
                }
            }
        }
    };
}]);