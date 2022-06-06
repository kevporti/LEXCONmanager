<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actividad extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_actividad';

    protected $fillable = [
      'id_empresa',
      'id_contacto',
      'estado',
      'fecha',
      'observaciones',
      'deuda_pactada',
      'fecha_de_pago',
      'forma_de_pago',
      'firma_usuario',
    ];
}
