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
        $obraSocial = Obra_Social::join('empresas', 'empresas.id_empresa', '=', 'obra_social.id_empresa')
            ->get();

        return $obraSocial;
    }

    public function agregarObraSocial(Request $request) {
        /* Obteniendo información general de la DB con respecti a la Liq de Deuda */
        $empresa = Empresa::findOrFail($request->Empresa);
        $empleado = Empleado::findOrFail($request->Empleado);

        /* Separando casos dependiendo si las fechas ingresadas son las mismas o no respectivamente */
        if ($request->PeriodoDesde == $request->PeriodoHasta) {
            $PeriodoDesde = \Carbon\Carbon::createFromFormat('Y-m', $request->PeriodoDesde, 'America/Buenos_Aires')->toDateTimeString();
            $Desde = (new DateTime($PeriodoDesde))->modify('first day of this month')->format('Y-m-d');

            /* Buscando la mora en la DB */
            $mora = Mora::where('mes_año', '=', $Desde)
                ->where("id_empleado", '=', $empleado->id_empleado)
                ->first();

            /* Separando casos dependiendo si la mora existe o no */
            if ($mora) {
                /* Buscando la LiqSueldo de la mora correspondiente. Si no existe una LiqSueldo, no se puede crear una LiqDeuda. */
                $liqSueldo = Liquidacion_Sueldo::where('id_mora', '=', $mora->id_mora)
                    ->first();
    
                /* Separando casos dependiendo si la LiqSueldo existe o no */
                if ($liqSueldo) {
                    /* Separando casos dependiendo si la LiqSueldo ya posee una LiqObraSocial asociada o no */
                    if(!$liqSueldo->id_obra_social) {
                        /* Creando la LiqDeuda - ObraSocial */
                        $liqObraSocial = new Obra_Social;
                        $liqObraSocial->id_empresa = $empresa->id_empresa;
                        $liqObraSocial->tasaInteresObra = $request->TasaInteres;

                        $FechaLiquidacion = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaLiq, 'America/Buenos_Aires')->toDateTimeString();
                        $FechaLiq = (new DateTime($FechaLiquidacion))->modify('first day of this month');
                        $liqObraSocial->fechaLiquidacionObra = $FechaLiq;

                        $liqObraSocial->subtotalObra = ($liqSueldo->totalRemunerativo * 0.03);
                        $liqObraSocial->subtotalPatronalObra = ($liqSueldo->totalRemunerativo * 0.03) * 2;
                        $liqObraSocial->totalFinalObra = ($liqSueldo->totalRemunerativo * 0.03) * 3;
                        $liqObraSocial->statusObra = "No Cobrado";
                        $liqObraSocial->firma_usuario = $request->Autor;
                        $liqObraSocial->save();

                        /* Seleccionando la ObraSocial creada recientemente para luego asignarle su id_obra_social a la LiqSueldo */
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
                return "No existe una mora para la fecha seleccionada.";
            }
        } else {
            /* Creando un intervalo de los tiempos seleccionados para luego iterar en cada uno y crear la Liq correspondiente. */
            $PeriodoDesde = \Carbon\Carbon::createFromFormat('Y-m', $request->PeriodoDesde, 'America/Buenos_Aires')->toDateTimeString();
            $PeriodoHasta = \Carbon\Carbon::createFromFormat('Y-m', $request->PeriodoHasta, 'America/Buenos_Aires')->toDateTimeString();

            $start    = (new DateTime($PeriodoDesde))->modify('first day of this month');
            $end      = (new DateTime($PeriodoHasta))->modify('first day of next month');
            $interval = DateInterval::createFromDateString('1 month');
            $period   = new DatePeriod($start, $interval, $end);

            /* Dato auxiliar para calcular el SubTotal de la LiqObraSocial */
            $subTotal = 0;

            /* Iteración para calcular el subTotal de todo el período */
            foreach ($period as $dt) {
                /* Buscar la mora */
                $Mora = Mora::where('mes_año', '=', $dt->format('Y-m-d'))
                ->where("id_empleado", '=', $empleado->id_empleado)
                ->first();

                /* Si existe la mora buscar la LiqSueldo */
                if ($Mora) {
                    $Sueldo = Liquidacion_Sueldo::where('id_mora', '=', $Mora->id_mora)
                    ->first();

                    /* Si existe la LiqSueldo y no tiene asignado ninguna otra LiqObraSocial, sumar el 3% del remunerativo al subtotal */
                    if ($Sueldo && $Sueldo->id_obra_social == null) {
                        $subTotal = ($Sueldo->totalRemunerativo * 0.03) + $subTotal;
                    }
                }
            }

            /* Iterando el período para encontrar al menos una mora y una LiqSueldo */
            foreach ($period as $dt) {
                /* Buscando una mora */
                $unaMora = Mora::where('mes_año', '=', $dt->format('Y-m-d'))
                    ->where("id_empleado", '=', $empleado->id_empleado)
                    ->first();

                /* Si existe, buscar una LiqSueldo */
                if ($unaMora) {
                    $LiquidacionSueldo = Liquidacion_Sueldo::where('id_mora', '=', $unaMora->id_mora)
                    ->first();

                    /* Si existe la mora y la LiqSueldo respectiva sin un id_obra_social, crear la LiqDeuda de la ObraSocial */
                    if ($LiquidacionSueldo && $LiquidacionSueldo->id_obra_social == null) {
                        $liqObraSocial = new Obra_Social;
                        $liqObraSocial->id_empresa = $empresa->id_empresa;
                        $liqObraSocial->tasaInteresObra = $request->TasaInteres;
    
                        $FechaLiquidacion = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaLiq, 'America/Buenos_Aires')->toDateTimeString();
                        $FechaLiq = (new DateTime($FechaLiquidacion))->modify('first day of this month');
                        $liqObraSocial->fechaLiquidacionObra = $FechaLiq;
                        
                        $liqObraSocial->subtotalObra = $subTotal;
                        $liqObraSocial->subtotalPatronalObra = $subTotal * 2;
                        $liqObraSocial->totalFinalObra = $subTotal * 3;
                        $liqObraSocial->statusObra = "No Cobrado";
                        $liqObraSocial->firma_usuario = $request->Autor;
                        $liqObraSocial->save();

                        /* Romper el loop para continuar */
                        break;
                    }
                }
            }

            /* Iterando en cada intervalo de tiempo mensual para trabajar */
            foreach ($period as $dt) {
                /* Buscando la mora asociada al período seleccionado */
                $mora = Mora::where('mes_año', '=', $dt->format('Y-m-d'))
                    ->where("id_empleado", '=', $empleado->id_empleado)
                    ->first();

                /* Separando casos dependiendo si la mora existe */
                if ($mora) {
                    /* Buscando la LiqSueldo correspondiente a la mora encontrada */
                    $liqSueldo = Liquidacion_Sueldo::where('id_mora', '=', $mora->id_mora)
                        ->first();

                    /* Separando casos dependiendo si la LiqSueldo existe y si no tiene una ObraSocial asignada */
                    if ($liqSueldo && $liqSueldo->id_obra_social == null) {
                        /* Buscar la LiqObraSocial recién creada y asignarle su id a las LiqSueldo encontradas */
                        $liq = Obra_Social::orderBy('created_at', 'desc')
                            ->first();
                        $liqSueldo->id_obra_social = $liq->id_obra_social;
                        $liqSueldo->save();
                    }
                }
            }

            /* Finaliza el loop y devuelve mensaje */
            return "Se ha creado la Liquidación de Deuda - Obra Social correspondiente.";
        }
    }




}
