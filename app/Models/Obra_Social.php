<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Obra_Social extends Model
{
    use HasFactory;

    protected $table = 'obra_social';

    protected $primaryKey = 'id_obra_social';

    protected $fillable = [
        'id_empresa',
        'tasaInteresObra',
        'fechaLiquidacionObra',
        'subtotalObra',
        'subtotalPatronalObra',
        'totalFinalObra',
        'statusObra',
        'firma_usuario',
    ];
}
