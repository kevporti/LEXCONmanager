<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Liquidacion_Deuda extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_liq_deuda';

    protected $fillable = [
      'id_liq_sueldo',
      'fecha_liquidacion',
      'mes_año_a_liquidar',
      'tasa_interes',
      'mes_año',
      'aporte',
      'intereses_aporte',
      'contribucion_patronal',
      'intereses_contr',
      'estado_cobro',
      'firma_usuario',
    ];
}
