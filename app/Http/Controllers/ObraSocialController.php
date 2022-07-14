<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DateTime;
use App\Models\Empresa;
use App\Models\Empleado;
use App\Models\Liquidacion_Sueldo;
use App\Models\Mora;

class ObraSocialController extends Controller
{
    public function obraSocial() {

    }

    public function agregarObraSocial(Request $request) {

        $empresa = Empresa::findOrFail($request->Empresa);
        $empleado = Empleado::findOrFail($request->Empleado);
            
        if ($request->PeriodoDesde == $request->PeriodoHasta) {
            $PeriodoDesde = \Carbon\Carbon::createFromFormat('Y-m', $request->PeriodoDesde, 'America/Buenos_Aires')->toDateTimeString();
            $Desde = (new DateTime($PeriodoDesde))->modify('first day of this month')->format('Y-m-d');

            $mora = Mora::where('mes_año', '=', $Desde)
                ->where("id_empleado", '=', $empleado->id_empleado)
                ->first();
            $liqSueldo = Liquidacion_Sueldo::where('id_mora', '=', $mora->id_mora)
                ->first();

            if(!$liqSueldo->id_obra_social) {
                return "id null";
            } else {
                return "Ya existe una Liquidación de Deuda por parte de la Obra Social para la fecha seleccionada.";
                
            }


        } else {
            # code...
        }
        
    }
}
