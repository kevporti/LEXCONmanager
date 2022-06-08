<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Empresa;

class EmpresaController extends Controller
{
    public function empresas(){

        $empresa = Empresa::all();

        return $empresa;
        
    }

    public function datosEmpresas(Request $request) {

        $empresa = Empresa::findOrFail($request->id);
        
        
        return $empresa;

    }

    public function agregarEmpresa(Request $request) {

        $request->validate([
            'nombreEmpresa' => 'required',
            'cuitEmpresa' => 'required|min:11|max:11',
            'razonSocialEmpresa' => 'required',
            'codigoPostalEmpresa' => 'required',
            'telefonoEmpresa' => 'required',
            'paisEmpresa' => 'required',
            'provinciaEmpresa' => 'required',
            'localidadEmpresa' => 'required',
            'domicilioEmpresa' => 'required',
            'firmaUsuario' => 'required',
        ]);

        $empresa = new Empresa;
        $empresa->nombre_empresa = $request->nombreEmpresa;
        $empresa->id_usuario = 1;
        $empresa->CUIT = $request->cuitEmpresa;
        $empresa->razon_social = $request->razonSocialEmpresa;
        $empresa->tel_celular = $request->telefonoEmpresa;
        $empresa->cod_postal = $request->codigoPostalEmpresa;
        $empresa->pais = $request->paisEmpresa;
        $empresa->provincia = $request->provinciaEmpresa;
        $empresa->localidad = $request->localidadEmpresa;
        $empresa->domicilio = $request->domicilioEmpresa;
        $empresa->firma_usuario = $request->firmaUsuario;
        $save = $empresa->save();

        if ($save) {
            return ['success' => 'La empresa se ha agregado correctamente!'];
        } else {
            return ['fail' => 'Oop! Algo salió mal, por favor intenta de nuevo en un rato.'];
        }
        
    }

    public function modificarEmpresa($id) {

        
    }

    public function eliminarEmpresa($id) {

        $empresa = Empresa::find($id);
        $Emp = $empresa->nombre_empresa;
        $empresa->delete();

        return ['success' => 'La empresa' . $Emp . 'se ha eliminado correctamente'];
    }
}
