<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_empleado';

    protected $fillable = [
      'id_empresa',
      'DNI',
      'nombre_y_apellido',
      'telefono',
      'fecha_alta',
      'fecha_baja',
      'id_rama_categoria',
      'motivo_reclamo',
      'firma_usuario',
    ];
}
