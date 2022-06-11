<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mora;

class MoraController extends Controller
{
    public function moras(){
        $moras = Mora::join('empleados', 'moras.id_empleado', 'empleados.id_empleado')
            ->get();

        return $moras;
    }

    public function agregarMoras(Request $request) {

        $request->validate([
            'EmpresaMora' => 'required',
            'EmpleadoEmpresaMora' => 'required',
            'FechaDesdeMora' => 'required|date',
            'FechaHastaMora' => 'required|date',
            'AutorMora' => 'required',
        ]);
        
        $mora = new Mora;
        $mora->id_empleado = $request->EmpleadoEmpresaMora;
        $mora->mes_año = $request->FechaDesdeMora;
        $mora->firma_usuario = $request->AutorMora;
        $save = $mora->save();

        if ($save) {
            return ['success' => 'La mora se ha agregado correctamente.'];
        } else {
            return ['fail' => 'Ups! Algo salió mal, por favor intenta más tarde.'];
        }
        

    }


}
