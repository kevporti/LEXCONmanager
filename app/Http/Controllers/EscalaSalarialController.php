<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Escala_Salarial;

class EscalaSalarialController extends Controller
{
    public function escala_salarial(){
      $escala = Escala_Salarial::all();

      return $escala;
    }

    public function crearEscalaSalarial(Request $request) {
        $request->validate([
            'VigenciaEscala' => 'required',
            'SueldoBasicoEscala' => 'required',
            'Extra50Escala' => 'required',
            'Extra100Escala' => 'required',
            'SimplePresenciaEscala' => 'required',
            'ResidenciaEscala' => 'required',
            'AutorEscala' => 'required',
        ]);

        $escala = new Escala_Salarial;
        $escala->vigencia = $request->VigenciaEscala;
        $escala->sueldo_basico = $request->SueldoBasicoEscala;
        $escala->hs_extra_50 = $request->Extra50Escala;
        $escala->hs_extra_100 = $request->Extra100Escala;
        $escala->id_rama_categoria = $request->CategoriaEscala;
        $escala->simple_presencia = $request->SimplePresenciaEscala;
        $escala->perm_fuera_resid = $request->ResidenciaEscala;
        $escala->firma_usuario = $request->AutorEscala;
        $save = $escala->save();

        if ($save) {
            return "La escala se ha agregado correctamente.";
        } else {
            return "Ups! Algo salió mal, por favor intenta más tarde.";
        }
        

    }

}
