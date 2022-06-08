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
use App\Http\Controllers\LiquidacionDeudaController;


/*     Login       */
Route::post('/comprobarsesion', [UsuarioController::class, 'comprobarsesion']);

/*     All Routes to show data      */
Route::get('/usuario/empresas', [EmpresaController::class, 'empresas']);
Route::post('/usuario/datosEmpresas', [EmpresaController::class, 'datosEmpresas']);
Route::post('/usuario/empresas/agregar', [EmpresaController::class, 'agregarEmpresa']);
Route::put('/usuario/empresas/modificar', [EmpresaController::class, 'modificarEmpresa']);
Route::delete('/usuario/empresas/eliminar/{id}', [EmpresaController::class, 'eliminarEmpresa']);

Route::get('/usuario/contactos', [ContactoController::class, 'contactos']);
Route::get('/usuario/actividades', [ActividadController::class, 'actividades']);
Route::get('/usuario/empleados', [EmpleadoController::class, 'empleados']);
Route::get('/usuario/escala_salarial', [EscalaSalarialController::class, 'escala_salarial']);
Route::get('/usuario/moras', [MoraController::class, 'moras']);
Route::get('/usuario/liquidacion_sueldos', [LiquidacionSueldoController::class, 'liquidacion_sueldos']);
Route::get('/usuario/liquidacion_deudas/obrasocial', [LiquidacionDeudaController::class, 'obra_social']);
Route::get('/usuario/liquidacion_deudas/aportesindical', [LiquidacionDeudaController::class, 'aporte_sindical']);