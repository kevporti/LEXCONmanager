<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_empresa';

    protected $fillable = [
      'id_usuario',
      'CUIT',
      'razon_social',
      'domicilio',
      'cod_postal',
      'localidad',
      'provincia',
      'pais',
      'tel_celular',
      'firma_usuario'
    ];
}
