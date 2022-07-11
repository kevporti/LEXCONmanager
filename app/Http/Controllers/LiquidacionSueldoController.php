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
        $liq = Liquidacion_Sueldo::join('moras', 'liquidacion_sueldos.id_mora', 'moras.id_mora')
            ->join('empleados', 'moras.id_empleado', 'empleados.id_empleado')
            ->join('empresas', 'empleados.id_empresa', 'empresas.id_empresa')
            ->select('empresas.nombre_empresa', 'empleados.nombre_y_apellido', 'empleados.id_empleado', 'moras.id_mora', 'moras.mes_año', 'liquidacion_sueldos.reajuste', 'liquidacion_sueldos.id_liq_sueldo')
            ->orderBy('moras.mes_año', 'desc')
            ->get();

        return $liq;
    }

    public function buscarLiqSueldo(Request $request) {

        $liquidacion = Liquidacion_Sueldo::findOrFail($request->Id);
        $liq = Liquidacion_Sueldo::where('id_liq_sueldo', '=', $liquidacion->id_liq_sueldo)
            ->join('moras', 'liquidacion_sueldos.id_mora', 'moras.id_mora')
            ->join('empleados', 'moras.id_empleado', 'empleados.id_empleado')
            ->join('escala_salarial', 'liquidacion_sueldos.id_escala_s', 'escala_salarial.id_escala_s')
            ->select('empleados.fecha_alta', 'empleados.id_empleado', 'empleados.id_rama_categoria', 'moras.id_mora', 'escala_salarial.id_escala_s', 'escala_salarial.hs_extra_50', 'escala_salarial.hs_extra_100', 'escala_salarial.simple_presencia as escalaSP', 'escala_salarial.perm_fuera_resid as escalaPFR', 'liquidacion_sueldos.sueldo_neto', 'liquidacion_sueldos.extra_50', 'liquidacion_sueldos.extra_100', 'liquidacion_sueldos.simple_presencia', 'liquidacion_sueldos.carga_desc', 'liquidacion_sueldos.perm_fuera_resid', 'liquidacion_sueldos.firma_usuario', 'liquidacion_sueldos.updated_at')
            ->get();

        return $liq;
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
                ->where("id_empleado", '=', $empleado->id_empleado)
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
                    $liq->carga_desc = $request->CargaDescarga;
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
                    ->where("id_empleado", '=', $empleado->id_empleado)
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
                        $liq->carga_desc = $request->CargaDescarga;
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
