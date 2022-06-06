<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    public function comprobarsesion(Request $request){
      //Validar entradas
      $request->validate([
        'Usuario' => 'required',
        'Contraseña' => 'required',
      ]);


      //Traer a los datos de la Base de Datos
      $usuario = Usuario::where('usuario', $request->Usuario)->first();


      //Confirmar que la contraseña es correcta
      if($usuario && Hash::check($request->Contraseña, $usuario->contraseña)) {
        $request->session()->put('id', $usuario->id_usuario);
        $request->save();
        return ['hola' => 'diosito'];
      } else {
        return ['fail' => 'Los datos ingresados son incorrectos'];
      }
    }

    public function logout(){

    }


}
