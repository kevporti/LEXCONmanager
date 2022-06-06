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

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*     Login/Logout       */
Route::post('/comprobarsesion', [UsuarioController::class, 'comprobarsesion']);
Route::post('/logout', [UsuarioController::class, 'logout']);

// /*     All Routes to show data      */
Route::get('/usuario/empresas', [EmpresaController::class, 'empresas']);
Route::get('/usuario/contactos', [ContactoController::class, 'contactos']);
Route::get('/usuario/actividades', [ActividadController::class, 'actividades']);
Route::get('/usuario/empleados', [EmpleadoController::class, 'empleados']);
Route::get('/usuario/escala_salarial', [EscalaSalarialController::class, 'escala_salarial']);
Route::get('/usuario/moras', [MoraController::class, 'moras']);
Route::get('/usuario/liquidacion_sueldos', [LiquidacionSueldoController::class, 'liquidacion_sueldos']);
Route::get('/usuario/liquidacion_deudas/obrasocial', [LiquidacionDeudaController::class, 'obra_social']);
Route::get('/usuario/liquidacion_deudas/aportesindical', [LiquidacionDeudaController::class, 'aporte_sindical']);