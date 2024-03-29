<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\EmpresaController;
use App\Http\Controllers\ContactoController;
use App\Http\Controllers\ActividadController;
use App\Http\Controllers\EmpleadoController;
use App\Http\Controllers\EscalaSalarialController;
use App\Http\Controllers\MoraController;
use App\Http\Controllers\LiquidacionSueldoController;
use App\Http\Controllers\ObraSocialController;
use App\Http\Controllers\AporteSindicalController;


/*     Login       */
Route::post('/comprobarsesion', [UsuarioController::class, 'comprobarsesion']);

/*     All Routes to show data      */
Route::get('/usuario/empresas', [EmpresaController::class, 'empresas']);
Route::post('/usuario/datosEmpresas', [EmpresaController::class, 'datosEmpresas']);
Route::post('/usuario/empresas/agregar', [EmpresaController::class, 'agregarEmpresa']);
Route::put('/usuario/empresas/modificar', [EmpresaController::class, 'modificarEmpresa']);
Route::delete('/usuario/empresas/eliminar/{id}', [EmpresaController::class, 'eliminarEmpresa']);

Route::get('/usuario/contactos', [ContactoController::class, 'contactos']);
Route::post('/usuario/agregarContactos', [ContactoController::class, 'agregarContacto']);
Route::delete('/usuario/contactos/eliminar/{id}', [ContactoController::class, 'eliminarContacto']);

Route::get('/usuario/actividades', [ActividadController::class, 'actividades']);

Route::get('/usuario/empleados', [EmpleadoController::class, 'empleados']);
Route::post('/usuario/datosEmpleados', [EmpleadoController::class, 'datosEmpleados']);
Route::post('/usuario/empleadosPorEmpresa', [EmpleadoController::class, 'empleadosPorEmpresa']);
Route::post('/usuario/agregarEmpleados', [EmpleadoController::class, 'agregarEmpleados']);
Route::delete('/usuario/empleados/eliminar/{id}', [EmpleadoController::class, 'eliminarEmpleado']);

Route::get('/usuario/moras', [MoraController::class, 'moras']);
Route::post('/usuario/agregarMoras', [MoraController::class, 'agregarMoras']);
Route::delete('/usuario/moras/eliminar/{id}', [MoraController::class, 'eliminarMoras']);

Route::get('/usuario/escalas', [EscalaSalarialController::class, 'escalas']);
Route::post('/usuario/datosEscalas', [EscalaSalarialController::class, 'datosEscalas']);
Route::post('/usuario/crearEscalaSalarial', [EscalaSalarialController::class, 'crearEscalaSalarial']);
Route::delete('/usuario/escalas/eliminarEscala/{id}', [EscalaSalarialController::class, 'eliminarEscala']);

Route::get('/usuario/liquidacion_sueldos', [LiquidacionSueldoController::class, 'liquidacion_sueldos']);
Route::post('/usuario/agregarLiqSueldo', [LiquidacionSueldoController::class, 'agregarLiqSueldo']);
Route::post('/usuario/buscarLiqSueldo', [LiquidacionSueldoController::class, 'buscarLiqSueldo']);

Route::get('/usuario/liquidacion_deudas/obraSocial', [ObraSocialController::class, 'obraSocial']);
Route::post('/usuario/liquidacion_deudas/datosLiqObra', [ObraSocialController::class, 'datosLiqObra']);
Route::post('/usuario/liquidacion_deudas/datosObra', [ObraSocialController::class, 'datosObra']);
Route::post('/usuario/liquidacion_deudas/agregarObraSocial', [ObraSocialController::class, 'agregarObraSocial']);
Route::delete('/usuario/liquidacion_deudas/eliminarObra/{id}', [ObraSocialController::class, 'eliminarObra']);
Route::put('/usuario/liquidacion_deudas/cambiarEstadoObra/{id}', [ObraSocialController::class, 'cambiarEstadoObra']);

Route::get('/usuario/liquidacion_deudas/aporteSindical', [AporteSindicalController::class, 'aporteSindical']);