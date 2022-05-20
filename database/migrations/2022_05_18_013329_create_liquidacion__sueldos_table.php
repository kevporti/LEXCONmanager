<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('liquidacion_sueldos', function (Blueprint $table) {
            $table->increments('id_liq_sueldo');
            $table->integer('id_mora')->unsigned();
            $table->integer('id_escala_s')->unsigned();
            $table->foreign('id_mora')
              ->references('id_mora')
              ->on('moras')
              ->onUpdate('cascade')
              ->onDelete('cascade');
            $table->foreign('id_escala_s')
              ->references('id_escala_s')
              ->on('escala_salarial')
              ->onUpdate('cascade')
              ->onDelete('cascade');
            $table->float('sueldo_bruto');
            $table->float('jubilacion');
            $table->float('aporte_sindical');
            $table->float('obra_social');
            $table->float('ley_4035');
            $table->float('item_8_1_1');
            $table->float('item_8_1_6_seguro_sepelio');
            $table->float('mutual');
            $table->float('sueldo_neto');
            $table->string('firma_usuario');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('liquidacion__sueldos');
    }
};
