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

        $request->validate([
            'Empresa' => 'required',
            'Empleado' => 'required',
            'FechaDesde' => 'required|date_format:Y-m|before_or_equal:FechaHasta',
            'FechaHasta' => 'required|date_format:Y-m|after_or_equal:FechaDesde',
            'Reajuste' => 'required',
            'SueldoBasico' => 'required',
            'Extra50' => 'required',
            'Extra100' => 'required',
            'SimplePresencia' => 'required',
            'PermFueraResid' => 'required',
            'Autor' => 'required',
        ]);


        $empresa = Empresa::findOrFail($request->Empresa);
        $empleado = Empleado::findOrFail($request->Empleado);

        if ($request->FechaDesde == $request->FechaHasta) {
            $FechaDesde = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaDesde, 'America/Buenos_Aires')->toDateTimeString();
            $Desde = (new DateTime($FechaDesde))->modify('first day of this month')->format('Y-m-d');

            $mora = Mora::where('mes_año', '=', $Desde)
                ->first();

            if ($mora) {
                $escala = Escala_Salarial::where('vigencia', '<=', $mora->mes_año)
                    ->orderBy('vigencia', 'desc')
                    ->first();
                
                if ($escala) {
                    $liq = new Liquidacion_Sueldo;
                    $liq->id_mora = $mora->id_mora;
                    $liq->id_escala_s = $escala->id_escala_s;

                    $liq->reajuste = $request->Reajuste;
                    $liq->sueldo_neto = $request->SueldoBasico;

                    $liq->extra_50 = $request->Extra50;
                    $liq->extra_100 = $request->Extra100;
                    $liq->simple_presencia = $request->SimplePresencia;
                    $liq->perm_fuera_resid = $request->PermFueraResid;
                    $liq->firma_usuario = $request->Autor;
                    $save = $liq->save();

                    return "La Liquidación se ha agregado correctamente.";

                } else {
                    return "No existe una escala salarial correspondiente a la fecha seleccionada.";
                }
            } else {
                return "No existe una mora creada para la fecha seleccionada";
            }

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

                if ($mora) {
                    $escala = Escala_Salarial::where('vigencia', '<=', $mora->mes_año)
                        ->orderBy('vigencia', 'desc')
                        ->first();

                    if ($escala) {
                        $liq = new Liquidacion_Sueldo;
                        $liq->id_mora = $mora->id_mora;
                        $liq->id_escala_s = $escala->id_escala_s;

                        $liq->reajuste = $request->Reajuste;
                        $liq->sueldo_neto = $request->SueldoBasico;

                        $liq->extra_50 = $request->Extra50;
                        $liq->extra_100 = $request->Extra100;
                        $liq->simple_presencia = $request->SimplePresencia;
                        $liq->perm_fuera_resid = $request->PermFueraResid;
                        $liq->firma_usuario = $request->Autor;
                        $save = $liq->save();
                    } else {
                        return "No existe una escala salarial correspondiente a la fecha seleccionada.";
                    }
                }
            }

            return "Las Liquidaciones de Sueldo se han agregado correctamente.";
        }
    }
}
