<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DateTime;
use DateInterval;
use DatePeriod;
use App\Models\Obra_Social;
use App\Models\Empresa;
use App\Models\Empleado;
use App\Models\Liquidacion_Sueldo;
use App\Models\Mora;

class ObraSocialController extends Controller
{
    public function obraSocial() {
        $obraSocial = Obra_Social::all();

        return $obraSocial;
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

            if ($liqSueldo) {
                if(!$liqSueldo->id_obra_social) {
                    $liqObraSocial = new Obra_Social;
                    $liqObraSocial->tasaInteresObra = $request->TasaInteres;

                    $FechaLiquidacion = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaLiq, 'America/Buenos_Aires')->toDateTimeString();
                    $FechaLiq = (new DateTime($FechaLiquidacion))->modify('first day of this month');
                    $liqObraSocial->fechaLiquidacionObra = $FechaLiq;

                    $liqObraSocial->statusObra = "No Cobrado";
                    $liqObraSocial->firma_usuario = $request->Autor;
                    $liqObraSocial->save();

                    $liq = Obra_Social::orderBy('created_at', 'desc')
                        ->first();

                    $liqSueldo->id_obra_social = $liq->id_obra_social;
                    $liqSueldo->save();

                    return "La Liquidación de Deuda - Obra Social, se ha creado correctamente.";
                } else {
                    return "Ya existe una Liquidación de Deuda por parte de la Obra Social para la fecha seleccionada.";
                }
            } else {
                return "No existe una Liquidación de Sueldo para la fecha seleccionada.";
            }


        } else {
            
            $liqObraSocial = new Obra_Social;
            $liqObraSocial->tasaInteresObra = $request->TasaInteres;

            $FechaLiquidacion = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaLiq, 'America/Buenos_Aires')->toDateTimeString();
            $FechaLiq = (new DateTime($FechaLiquidacion))->modify('first day of this month');
            $liqObraSocial->fechaLiquidacionObra = $FechaLiq;

            $liqObraSocial->statusObra = "No Cobrado";
            $liqObraSocial->firma_usuario = $request->Autor;
            $liqObraSocial->save();


            $PeriodoDesde = \Carbon\Carbon::createFromFormat('Y-m', $request->PeriodoDesde, 'America/Buenos_Aires')->toDateTimeString();
            $PeriodoHasta = \Carbon\Carbon::createFromFormat('Y-m', $request->PeriodoHasta, 'America/Buenos_Aires')->toDateTimeString();

            $start    = (new DateTime($PeriodoDesde))->modify('first day of this month');
            $end      = (new DateTime($PeriodoHasta))->modify('first day of next month');
            $interval = DateInterval::createFromDateString('1 month');
            $period   = new DatePeriod($start, $interval, $end);


            foreach ($period as $dt) {
                $mora = Mora::where('mes_año', '=', $dt->format('Y-m-d'))
                    ->where("id_empleado", '=', $empleado->id_empleado)
                    ->first();

                if ($mora) {
                    $liqSueldo = Liquidacion_Sueldo::where('id_mora', '=', $mora->id_mora)
                        ->first();

                    if ($liqSueldo && $liqSueldo->id_obra_social == null) {
                        $liq = Obra_Social::orderBy('created_at', 'desc')
                            ->first();
                        $liqSueldo->id_obra_social = $liq->id_obra_social;
                        $liqSueldo->save();
                    }
                }
            }
            return "Se ha creado la Liquidación de Deuda - Obra Social correspondiente.";
        }
        
    }
}
