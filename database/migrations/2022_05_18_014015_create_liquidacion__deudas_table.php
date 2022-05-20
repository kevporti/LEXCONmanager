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
        Schema::create('liquidacion_deudas', function (Blueprint $table) {
            $table->increments('id_liq_deuda');
            $table->integer('id_liq_sueldo')->unsigned();
            $table->foreign('id_liq_sueldo')
              ->references('id_liq_sueldo')
              ->on('liquidacion_sueldos')
              ->onUpdate('cascade')
              ->onDelete('cascade');
            $table->date('fecha_liquidacion');
            $table->date('mes_año_a_liquidar');
            $table->string('tasa_interes');
            $table->date('mes_año');
            $table->float('aporte');
            $table->float('intereses_aporte');
            $table->float('contribucion_patronal');
            $table->float('intereses_contr');
            $table->string('estado_cobro');
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
        Schema::dropIfExists('liquidacion__deudas');
    }
};
