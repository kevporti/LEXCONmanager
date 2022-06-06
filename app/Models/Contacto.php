<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contacto extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_contacto';

    protected $fillable = [
      'id_empresa',
      'CUIT',
      'nombre_y_apellido',
      'cargo',
      'tel_celular',
      'email',
      'domicilio',
      'cod_postal',
      'pais',
      'provincia',
      'localidad',
      'firma_usuario'
    ];
}
