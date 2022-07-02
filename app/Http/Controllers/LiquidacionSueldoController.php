<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DateTime;
use DateInterval;
use DatePeriod;
use App\Models\Liquidacion_Sueldo;
use App\Models\Empresa;
use App\Models\Empleado;
use App\Models\Mora;
use App\Models\Escala_Salarial;

class LiquidacionSueldoController extends Controller
{
    public function liquidacion_sueldos(){
      
    }

    public function agregarLiqSueldo(Request $request) {
        $empresa = Empresa::findOrFail($request->Empresa);
        $empleado = Empleado::findOrFail($request->Empleado);

        if ($request->FechaDesde == $request->FechaHasta ) {
            $FechaDesde = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaDesde, 'America/Buenos_Aires')->toDateTimeString();
            $Desde = (new DateTime($FechaDesde))->modify('first day of this month')->format('Y-m-d');

            $mora = Mora::where('mes_año', '=', $Desde)
                ->first();

            return $mora;
        } else {
            $FechaDesde = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaDesde, 'America/Buenos_Aires')->toDateTimeString();
            $FechaHasta = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaHasta, 'America/Buenos_Aires')->toDateTimeString();

            $start    = (new DateTime($FechaDesde))->modify('first day of this month');
            $end      = (new DateTime($FechaHasta))->modify('first day of next month');
            $interval = DateInterval::createFromDateString('1 month');
            $period   = new DatePeriod($start, $interval, $end);

            foreach ($period as $dt) {
                $mora = Mora::where('mes_año', '=', $dt->format('Y-m-d'))
                    ->first();

                $escalaSalarial = Escala_Salarial::where('vigencia', '<', $dt->format('Y-m-d'))
                    ->orderBy('vigencia', 'desc')
                    ->first();

                if ($escalaSalarial) {
                    $escala = Escala_Salarial::where('vigencia', '>=', $escalaSalarial->vigencia)
                        ->orderBy('vigencia', 'asc')
                        ->first();
                    if ($escala) {
                        return $escala;
                    } else {
                        return "Nada";
                    }
                }
                

                if ($mora) {
                    $liq = new Liquidacion_Sueldo;
                    $liq->id_mora = $mora->id_mora;
                } else {
                    
                }
                
            }
        }
        

        $liq = new Liquidacion_Sueldo;
        $liq->id_empleado = $empleado->id_empleado;
        $liq->id_obra_social = 0;
        $liq->id_aporte_sindical = 0;
        

        return "good until now";
    }
}
