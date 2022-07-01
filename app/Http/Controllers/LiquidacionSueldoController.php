<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Liquidacion_Sueldo;
use App\Models\Empresa;
use App\Models\Empleado;

class LiquidacionSueldoController extends Controller
{
    public function liquidacion_sueldos(){
      
    }

    public function agregarLiqSueldo(Request $request) {
        $empresa = Empresa::findOrFail($request->Empresa);
        $empleado = Empleado::findOrFail($request->Empleado);

        $liq = new Liquidacion_Sueldo;
        $liq->id_empresa = $empresa->id_empresa;
        $liq->id_empleado = $empleado->id_empleado;
        

        return "good until now";
    }
}
