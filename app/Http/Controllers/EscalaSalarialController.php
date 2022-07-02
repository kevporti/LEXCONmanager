<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Escala_Salarial;
use DateTime;

class EscalaSalarialController extends Controller
{
    public function escalas(){
        $escala = Escala_Salarial::select('vigencia', 'id_escala_s')
            ->orderBy('vigencia', 'desc')
            ->get()
            ->unique('vigencia');

        return $escala;
    }

    public function datosEscalas(Request $request) {
        $datos = Escala_Salarial::where('vigencia', $request->vig)
            ->orderBy('id_rama_categoria', 'asc')
            ->get();

        return $datos;
    }

    public function crearEscalaSalarial(Request $request) {
        $request->validate([
            'VigenciaEscala' => 'required|date_format:Y-m',
            'SueldoBasicoEscala' => 'required',
            'Extra50Escala' => 'required',
            'Extra100Escala' => 'required',
            'SimplePresenciaEscala' => 'required',
            'ResidenciaEscala' => 'required',
            'AutorEscala' => 'required',
        ]);

        $escala = new Escala_Salarial;

        $VigenciaEscala = \Carbon\Carbon::createFromFormat('Y-m', $request->VigenciaEscala, 'America/Buenos_Aires')->toDateTimeString();
        $vigencia = (new DateTime($VigenciaEscala))->modify('first day of this month');
        
        $escala->vigencia = $vigencia;
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

    public function eliminarEscala($id) {
        $escala = Escala_Salarial::findOrFail($id);
        $escala->delete();

        return "La escala se ha eliminado correctamente";
    }

}
