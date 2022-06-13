<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Escala_Salarial extends Model
{
    use HasFactory;

    protected $table = 'escala_salarial';
    protected $primaryKey = 'id_escala_s';

    protected $fillable = [
      'vigencia',
      'sueldo_basico',
      'hs_extra_50',
      'hs_extra_100',
      'simple_presencia',
      'perm_fuera_resid',
      'id_rama_categoria',
      'firma_usuario',
    ];
}
