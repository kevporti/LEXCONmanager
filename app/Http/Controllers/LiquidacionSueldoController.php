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
use Barryvdh\DomPDF\Facade\Pdf;

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
            ->select('empleados.fecha_alta', 'empleados.id_empleado', 'empleados.id_rama_categoria', 'moras.id_mora', 'moras.mes_año', 'escala_salarial.id_escala_s', 'escala_salarial.hs_extra_50', 'escala_salarial.hs_extra_100', 'escala_salarial.simple_presencia as escalaSP', 'escala_salarial.perm_fuera_resid as escalaPFR', 'liquidacion_sueldos.id_liq_sueldo', 'liquidacion_sueldos.sueldo_neto', 'liquidacion_sueldos.extra_50', 'liquidacion_sueldos.extra_100', 'liquidacion_sueldos.simple_presencia', 'liquidacion_sueldos.carga_desc', 'liquidacion_sueldos.perm_fuera_resid', 'liquidacion_sueldos.totalRemunerativo', 'liquidacion_sueldos.firma_usuario', 'liquidacion_sueldos.updated_at')
            ->get();

        return $liq;
    }

    public function agregarLiqSueldo(Request $request) {
        global $RamaCategoria;
        $RamaCategoria = ([
            [
                'id' => 0,
                'rama' => "Personal de corta distancia (menos de 100 km.)",
                'adicionales' => 0,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 1,
                'rama' => "Personal de larga distancia (más de 100 km.)",
                'adicionales' => 0,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 2,
                'rama' => "Personal de larga distancia (más de 100 km.) - Transporte Pesado Sistema carretón",
                'adicionales' => 0,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 3,
                'rama' => "Personal de larga distancia (más de 100 km.) - Transporte de Automóviles",
                'adicionales' => 0,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 4,
                'rama' => "Transporte de Caudales",
                'adicionales' => 0.2,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 5,
                'rama' => "Transporte de Clearing y Carga Postal y Empresas Privadas de Correo",
                'adicionales' => 0.15,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 6,
                'rama' => "Recolección de residuos",
                'adicionales' => 0.15,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 7,
                'rama' => "Transporte y Distribución de Diarios y Revistas",
                'adicionales' => 0.12,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 8,
                'rama' => "Transporte de Combustibles Líquidos",
                'adicionales' => 0.15,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 9,
                'rama' => "Transporte de Materiales Peligrosos",
                'adicionales' => 0.2,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 10,
                'rama' => "Transporte y/o Logística para la Actividad Petrolera",
                'adicionales' => 0.4,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 11,
                'rama' => "Transporte pesado - Especialidad de Transporte por Sistema de Arrastre",
                'adicionales' => 0,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 12,
                'rama' => "Transporte pesado - Especialidad de Desarmado, Transporte y Armado de Equipos Vinculados a la Perforación Petrolífera y Actividades Afines",
                'adicionales' => 0,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 13,
                'rama' => "Transporte en Zona de Zafra",
                'adicionales' => 0.1,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 14,
                'rama' => "Expreso, Mudanzas y Encomiendas",
                'adicionales' => 0.1,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 15,
                'rama' => "Transporte y Distribución de Aguas, Aguas Gaseosas y Cerveza",
                'adicionales' => 0,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 16,
                'rama' => "Operaciones Logísticas, Almacenamiento y Distribución",
                'adicionales' => 0.1,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 17,
                'rama' => "Residuos Patológicos",
                'adicionales' => 0.2,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 18,
                'rama' => "Residuos Industriales Especiales",
                'adicionales' => 0.2,
                'antiguedad' => 0.01,
            ],
            [
                'id' => 19,
                'rama' => "Residuos Industriales No Especiales",
                'adicionales' => 0.15,
                'antiguedad' => 0.01,
            ],
        ]);

        /* Validando la entrada del formulario */
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

        function Antiguedad($date1, $date2) {
            $counter = 0;

            $start    = (new DateTime($date1))->modify('first day of this month');
            $end      = (new DateTime($date2))->modify('first day of next month');
            $interval = DateInterval::createFromDateString('1 month');
            $period   = new DatePeriod($start, $interval, $end);
            
            foreach ($period as $dt) {
                $counter ++;
            }
            return floor(($counter - 1) / 12);
        };

        function Adicionales($id) {
            global $RamaCategoria;
            foreach ($RamaCategoria as $rama){
                if ($rama['id'] == $id) {
                    $adic = $rama['adicionales'];
                }
            }
            return $adic;
        };

        /* Extrayendo información adicional de la DB */
        $empresa = Empresa::findOrFail($request->Empresa);
        $empleado = Empleado::findOrFail($request->Empleado);

        /* Separando guardado de datos dependiendo si las fechas son iguales o es un período */
        if ($request->FechaDesde == $request->FechaHasta) {
            /* Transformando la fecha a un tipo de dato válido para guardado */
            $FechaDesde = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaDesde, 'America/Buenos_Aires')->toDateTimeString();
            $Desde = (new DateTime($FechaDesde))->modify('first day of this month')->format('Y-m-d');

            /* Buscando la mora correspondiente a la Liquidación de Sueldo */
            $mora = Mora::where('mes_año', '=', $Desde)
                ->where("id_empleado", '=', $empleado->id_empleado)
                ->first();

            /* Separando casos dependiendo si la mora existe o no */
            if ($mora) {
                /* Buscando la escala salarial correspondiente a la mora encontrada y al tipo de Empleado */
                $escala = Escala_Salarial::where('vigencia', '<=', $mora->mes_año)
                    ->where('id_rama_categoria', '=', $empleado->id_rama_categoria)
                    ->orderBy('vigencia', 'desc')
                    ->first();
                
                /* Separando casos dependiendo si la Escala Salarial existe o no  */
                if ($escala) {
                    /* Creando un elemento guía a través del guardado para determinar un Total Remunerativo */
                    $datos = ['basico' => 0, 'extra50' => 0, 'extra100' => 0, 'simpleP' => 0, 'PermFuera' => 0, 'cargaDesc' => 0, 'antiguedad' => 0, 'adicionales' => 0];

                    /* Creando y guardando los datos de la Liquidación de Sueldo */
                    $liq = new Liquidacion_Sueldo;
                    $liq->id_mora = $mora->id_mora;
                    $liq->id_escala_s = $escala->id_escala_s;
                    $liq->reajuste = $request->Reajuste;

                    /* Seccionando casos dependiendo si la Liquidación es un Reajuste de una Liquidación previamente hecha */
                    if ($request->Reajuste == 1) {
                        $liq->sueldo_neto == 0;
                    } else {
                        /* Seccionando casos para determinar si utilizar el monto de Sueldo de la Liquidación o utilizar el ingresado por el usuario */
                        if ($request->SueldoBasico == 0) {
                            $liq->sueldo_neto = $escala->sueldo_basico;
                        } else {
                            $liq->sueldo_neto = $request->SueldoBasico;
                        }
                    }

                    /* Terminando de guardar datos de la Liquidación */
                    $liq->extra_50 = $request->Extra50;
                    $liq->extra_100 = $request->Extra100;
                    $liq->simple_presencia = $request->SimplePresencia;
                    $liq->perm_fuera_resid = $request->PermFueraResid;
                    $liq->carga_desc = $request->CargaDescarga;

                    /* Determinando montos remunerativos de la Liquidación */
                    $datos['basico'] = $liq->sueldo_neto * 1;
                    $datos['extra50'] = $liq->extra_50 * $escala->hs_extra_50;
                    $datos['extra100'] = $liq->extra_100 * $escala->hs_extra_100;
                    $datos['simpleP'] = $liq->simple_presencia * $escala->simple_presencia;
                    $datos['PermFuera'] = $liq->perm_fuera_resid * $escala->perm_fuera_resid;
                    $datos['cargaDesc'] = round(($liq->carga_desc * ($liq->sueldo_neto / 24)), 2);
                    $datos['antiguedad'] = $liq->sueldo_neto * (Antiguedad($empleado->fecha_alta, $mora->mes_año) / 100);
                    $datos['adicionales'] = $liq->sueldo_neto * Adicionales($empleado->id_rama_categoria);
                    
                    /* Calculando el total */
                    $totalRemun = $datos['basico'] + $datos['extra50'] + $datos['extra100'] + $datos['simpleP'] + $datos['PermFuera'] + $datos['cargaDesc'] + $datos['antiguedad'] + $datos['adicionales'];
                    $liq->totalRemunerativo = $totalRemun;
                    $liq->firma_usuario = $request->Autor;
                    $save = $liq->save();

                    return "La Liquidación de Sueldo se ha creado correctamente.";

                } else {
                    return "No existe una escala salarial correspondiente a la fecha seleccionada o al puesto de trabajo del Empleado seleccionado.";
                }
            } else {
                return "No existe una mora creada para la fecha seleccionada";
            }
        /* Segundo caso, con las fechas distintas */
        } else {
            /* Creando un elemento guía a través del guardado para determinar un Total Remunerativo */
            $datos = ['basico' => 0, 'extra50' => 0, 'extra100' => 0, 'simpleP' => 0, 'PermFuera' => 0, 'cargaDesc' => 0, 'antiguedad' => 0, 'adicionales' => 0];

            /* Creando fechas guardables para la DB y creando el período seleccionado mes a mes */
            $FechaDesde = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaDesde, 'America/Buenos_Aires')->toDateTimeString();
            $FechaHasta = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaHasta, 'America/Buenos_Aires')->toDateTimeString();

            $start    = (new DateTime($FechaDesde))->modify('first day of this month');
            $end      = (new DateTime($FechaHasta))->modify('first day of next month');
            $interval = DateInterval::createFromDateString('1 month');
            $period   = new DatePeriod($start, $interval, $end);

            /* Recorriendo el período encontrado */
            foreach ($period as $dt) {
                /* Buscando la mora correspondiente a los períodos */
                $mora = Mora::where('mes_año', '=', $dt->format('Y-m-d'))
                    ->where("moras.id_empleado", '=', $empleado->id_empleado)
                    ->join('empleados', 'empleados.id_empleado', '=', 'moras.id_empleado')
                    ->select('moras.mes_año', 'moras.id_mora', 'moras.id_empleado', 'empleados.id_empleado', 'empleados.id_rama_categoria')
                    ->first();

                /* Dividiendo caso si existe la mora, porque no se puede guardar información de una mora que no existe */
                if ($mora) {
                    /* Buscando la Escala Salarial correspondiente a la mora encontrada según fecha más reciente y id de la rama/categoría del Empleado */
                    $escala = Escala_Salarial::where('vigencia', '<=', $mora->mes_año)
                        ->where('id_rama_categoria', '=', $mora->id_rama_categoria)
                        ->orderBy('vigencia', 'desc')
                        ->first();

                    /* Separando casos si la escala existe. Generalmente si existe una escala para la primer fecha de mora y solo existe esa,
                     todas las moras se van a regisr en base a esa única Escala, sino el usuario debería agregar al menos una Escala */
                    if ($escala) {
                        /* Guardando datos de la Liquidación de Sueldo */
                        $liq = new Liquidacion_Sueldo;
                        $liq->id_mora = $mora->id_mora;
                        $liq->id_escala_s = $escala->id_escala_s;
                        $liq->reajuste = $request->Reajuste;

                        /* Seccionando casos dependiendo si la Liquidación es un Reajuste de una Liquidación previamente hecha */
                        if ($request->Reajuste == 1) {
                            $liq->sueldo_neto == 0;
                        } else {
                            /* Seccionando casos para determinar si utilizar el monto de Sueldo de la Liquidación o utilizar el ingresado por el usuario */
                            if ($request->SueldoBasico == 0) {
                                $liq->sueldo_neto = $escala->sueldo_basico;
                            } else {
                                $liq->sueldo_neto = $request->SueldoBasico;
                            }
                        }

                        /* Terminando de guardar datos de la Liquidación */
                        $liq->extra_50 = $request->Extra50;
                        $liq->extra_100 = $request->Extra100;
                        $liq->simple_presencia = $request->SimplePresencia;
                        $liq->perm_fuera_resid = $request->PermFueraResid;
                        $liq->carga_desc = $request->CargaDescarga;

                        /* Determinando montos remunerativos de la Liquidación */
                        $datos['basico'] = $liq->sueldo_neto * 1;
                        $datos['extra50'] = $liq->extra_50 * $escala->hs_extra_50;
                        $datos['extra100'] = $liq->extra_100 * $escala->hs_extra_100;
                        $datos['simpleP'] = $liq->simple_presencia * $escala->simple_presencia;
                        $datos['PermFuera'] = $liq->perm_fuera_resid * $escala->perm_fuera_resid;
                        $datos['cargaDesc'] = round(($liq->carga_desc * ($liq->sueldo_neto / 24)), 2);
                        $datos['antiguedad'] = $liq->sueldo_neto * (Antiguedad($empleado->fecha_alta, $mora->mes_año) / 100);
                        $datos['adicionales'] = $liq->sueldo_neto * Adicionales($empleado->id_rama_categoria);

                        /* Calculando el total */
                        $totalRemun = $datos['basico'] + $datos['extra50'] + $datos['extra100'] + $datos['simpleP'] + $datos['PermFuera'] + $datos['cargaDesc'] + $datos['antiguedad'] + $datos['adicionales'];

                        $liq->totalRemunerativo = $totalRemun;
                        $liq->firma_usuario = $request->Autor;
                        $save = $liq->save();
                    } else {
                        return "No existe una escala salarial correspondiente a la fecha seleccionada o al tipo de rama/categoría del Empleado.";
                    }
                }
            }

            return "Las Liquidaciones de Sueldo se han agregado correctamente.";
        }
    }

}
