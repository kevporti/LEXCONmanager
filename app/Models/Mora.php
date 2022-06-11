<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mora extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_mora';

    protected $fillable = [
      'id_empleado',
      'mes_año',
      'firma_usuario',
    ];
}
