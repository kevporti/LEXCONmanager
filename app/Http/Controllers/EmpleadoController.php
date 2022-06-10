<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Empleado;

class EmpleadoController extends Controller
{
    public function empleados(){
      $empleado = Empleado::join('empresas', 'empleados.id_empresa', '=', 'empresas.id_empresa')
        ->get();

      return $empleado;
    }

    public function datosEmpleados(Request $request) {
        
        $empleado = Empleado::findOrFail($request->Id);

        return $empleado;
    }

    public function agregarEmpleados(Request $request) {

        $request->validate([
            'EmpresaEmpleado' => 'required',
            'CategoriaEmpleado' => 'required',
            'NombreEmpleado' => 'required',
            'DNIEmpleado' => 'required|min:8|max:8',
            'MotivoReclamoEmpleado' => 'required',
            'TelefonoEmpleado' => 'required',
            'FechaAltaEmpleado' => 'required|date',
            'FechaBajaEmpleado' => 'date',
            'AutorEmpleado' => 'required',
        ]);
        
        $empleado = new Empleado;
        $empleado->id_empresa = $request->EmpresaEmpleado;
        $empleado->id_rama_categoria = $request->CategoriaEmpleado;
        $empleado->nombre_y_apellido = $request->NombreEmpleado;
        $empleado->DNI = $request->DNIEmpleado;
        $empleado->motivo_reclamo = $request->MotivoReclamoEmpleado;
        $empleado->telefono = $request->TelefonoEmpleado;
        $empleado->fecha_alta = $request->FechaAltaEmpleado;
        if ($request->FechaBajaEmpleado != 0) {
            $empleado->fecha_baja = $request->FechaBajaEmpleado;
        } else {
            $empleado->fecha_baja = null;
        }
        $empleado->firma_usuario = $request->AutorEmpleado;
        $save = $empleado->save();

        if ($save) {
            return ['success' => 'El Empleado se ha agregado correctamente'];
        } else {
            return ['fail' => 'Ups! Algo salió mal, por favor intenta más tarde.'];
        }
    }

    public function eliminarEmpleado($id) {

        $empleado = Empleado::findOrFail($id);
        $empleado->delete();

        return ['success' => 'El Empleado se ha eliminado correctamente.'];
    }

}
