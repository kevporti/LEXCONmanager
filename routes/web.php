<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\EmpresaController;
use App\Http\Controllers\ContactoController;
use App\Http\Controllers\ActividadController;
use App\Http\Controllers\EmpleadoController;
use App\Http\Controllers\EscalaSalarialController;
use App\Http\Controllers\MoraController;

/*     Login/Logout       */
Route::get('/', [UsuarioController::class, 'login']);
Route::post('/comprobarsesion', [UsuarioController::class, 'comprobarsesion']);
Route::post('/logout', [UsuarioController::class, 'logout']);

/*     All Routes to show data      */
Route::get('/usuario/empresas', [EmpresaController::class, 'empresas']);
Route::get('/usuario/contactos', [ContactoController::class, 'contactos']);
Route::get('/usuario/actividades', [ActividadController::class, 'actividades']);
Route::get('/usuario/empleados', [EmpleadoController::class, 'empleados']);
Route::get('/usuario/escala_salarial', [EscalaSalarialController::class, 'escala_salarial']);
Route::get('/usuario/moras', [MoraController::class, 'moras']);
Route::get('/usuario/liquidacion_sueldos', [LiquidacionSueldoController::class, 'liquidacion_sueldos']);
Route::get('/usuario/liquidacion_deudas', [LiquidacionDeudaController::class, 'liquidacion_deudas']);
