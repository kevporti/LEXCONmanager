<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contacto;

class ContactoController extends Controller
{
    public function contactos(){

        $contacto = Contacto::join('empresas', 'contactos.id_empresa', '=', 'empresas.id_empresa')
            ->get();

        return $contacto;
      
    }

    public function agregarContacto(Request $request) {

        $request->validate([
            'empresaContacto' => 'required',
            'nombreContacto' => 'required',
            'cargoContacto' => 'required',
            'telefonoContacto' => 'required',
            'emailContacto' => 'required',
            'firmaUsuarioContacto' => 'required',
        ]);

        $contacto = new Contacto;
        $contacto->id_empresa = $request->empresaContacto;
        $contacto->nombre_y_apellido = $request->nombreContacto;
        $contacto->cargo = $request->cargoContacto;
        $contacto->tel_celular = $request->telefonoContacto;
        $contacto->email = $request->emailContacto;
        $contacto->firma_usuario = $request->firmaUsuarioContacto;
        $save = $contacto->save();

        if ($save) {
            return ['success' => 'El contacto se ha agregado correctamente!'];
        } else {
            return ['fail' => 'Ups! Algo salió mal, por favor intenta más tarde.'];
        }
        
    }

    public function eliminarContacto($id) {

        $contacto = Contacto::findOrFail($id);
        $save = $contacto->delete();

        if ($save) {
            return ['success' => 'El contacto se ha eliminado correctamente.'];
        } else {
            return ['fail' => 'Ups! Algo salió mal, por favor intenta más tarde.'];
        }
        
    }

}
