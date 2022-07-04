<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Liquidacion_Sueldo extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_liq_sueldo';

    protected $fillable = [
      'id_mora',
      'id_escala_s',
      'id_obra_social',
      'id_aporte_sindical',
      'reajuste',
      'sueldo_neto',
      'extra_50',
      'extra_100',
      'simple_presencia',
      'perm_fuera_resid',
      'sueldo_bruto',
      'firma_usuario',
    ];
}
