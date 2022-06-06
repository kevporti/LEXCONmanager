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
      'sueldo_bruto',
      'jubilacion',
      'aporte_sindical',
      'obra_social',
      'ley_4035',
      'item_8.1.1',
      'item_8.1.6_seguro_sepelio',
      'mutual',
      'sueldo_neto',
      'firma_usuario',
    ];
}
