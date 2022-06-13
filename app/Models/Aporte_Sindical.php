<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aporte_Sindical extends Model
{
    use HasFactory;

    protected $table = 'aporte_sindical';

    protected $primaryKey = 'id_aporte_sindical';

    protected $fillable = [
        'firma_usuario',
    ];
}
