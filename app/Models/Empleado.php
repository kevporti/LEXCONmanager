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
      'CUIT',
      'DNI',
      'nombre_y_apellido',
      'id_rama_categoria',
      'firma_usuario',
    ]
}
