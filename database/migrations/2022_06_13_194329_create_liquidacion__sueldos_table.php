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
            $table->integer('id_obra_social')->unsigned();
            $table->integer('id_aporte_sindical')->unsigned();
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
            $table->foreign('id_obra_social')
              ->references('id_obra_social')
              ->on('obra_social')
              ->onUpdate('cascade')
              ->onDelete('cascade');
            $table->foreign('id_aporte_sindical')
              ->references('id_aporte_sindical')
              ->on('aporte_sindical')
              ->onUpdate('cascade')
              ->onDelete('cascade');
            $table->integer('reajuste');
            $table->float('sueldo_neto');
            $table->float('extra_50');
            $table->float('extra_100');
            $table->float('simple_presencia');
            $table->float('perm_fuera_resid');
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
