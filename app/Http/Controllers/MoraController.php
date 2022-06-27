<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use DateTime;
use DatePeriod;
use DateInterval;
use App\Models\Mora;
use App\Models\Empleado;

class MoraController extends Controller
{
    public function moras(){
        $moras = Mora::join('empleados', 'moras.id_empleado', 'empleados.id_empleado')
            ->join('empresas', 'empleados.id_empresa', 'empresas.id_empresa')
            ->select('empresas.nombre_empresa', 'moras.id_mora', 'empleados.nombre_y_apellido', 'moras.mes_año')
            ->get();


        return $moras;
    }

    public function agregarMoras(Request $request) {

        $request->validate([
            'EmpresaMora' => 'required',
            'EmpleadoEmpresaMora' => 'required',
            'FechaDesdeMora' => 'required|date_format:Y-m|before:FechaHastaMora',
            'FechaHastaMora' => 'date_format:Y-m|after:FechaDesdeMora',
            'AutorMora' => 'required',
        ]);
        
        $empleado = Empleado::where('id_empleado', '=', $request->EmpleadoEmpresaMora)
            ->get();


        $FechaDesdeMora = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaDesdeMora, 'America/Argentina/Buenos_Aires')->toDateTimeString();

        if ($request->FechaHastaMora != [] && $request->FechaDesdeMora != $request->FechaHastaMora) {
            $FechaHastaMora = \Carbon\Carbon::createFromFormat('Y-m', $request->FechaHastaMora, 'America/Argentina/Buenos_Aires')->toDateTimeString();

            $start    = (new DateTime($FechaDesdeMora))->modify('first day of this month');
            $end      = (new DateTime($FechaHastaMora))->modify('first day of next month');
            $interval = DateInterval::createFromDateString('1 month');
            $period   = new DatePeriod($start, $interval, $end);

            foreach ($period as $dt) {
                $dt;
                $mora = new Mora;
                $mora->id_empleado = $request->EmpleadoEmpresaMora;
                if ($empleado->fecha_alta <= $dt) {
                    $mora->mes_año = $dt;
                } else {
                    return "La fecha de mora no puede ser anterior a la fecha de alta del empleado.";
                }
                $mora->firma_usuario = $request->AutorMora;
                $save = $mora->save();
            }
            if ($save) {
                return "Las moras se han agregado correctamente!";
            } else {
                return 'Ups! Algo salió mal, por favor intenta más tarde.';
            }
        } else {
            $mora = new Mora;
            $mora->id_empleado = $request->EmpleadoEmpresaMora;
            if ($empleado->fecha_alta <= $FechaDesdeMora) {
                $mora->mes_año = $FechaDesdeMora;
            } else {
                return "La fecha de mora no puede ser anterior a la fecha de alta del empleado.";
            }
            $mora->firma_usuario = $request->AutorMora;
            $save = $mora->save();
    
            if ($save) {
                return 'La mora se ha agregado correctamente.';
            } else {
                return 'Ups! Algo salió mal, por favor intenta más tarde.';
            }
        }

        

    }

    public function eliminarMoras($id) {

        $mora = Mora::findOrFail($id);
        $mora->delete();

        return "La mora se ha eliminado correctamente!";
    }


}
