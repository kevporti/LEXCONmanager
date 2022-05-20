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
        Schema::create('actividades', function (Blueprint $table) {
            $table->increments('id_actividad');
            $table->integer('id_empresa')->unsigned();
            $table->integer('id_contacto')->unsigned();
            $table->foreign('id_empresa')
              ->references('id_empresa')
              ->on('empresas')
              ->onUpdate('cascade')
              ->onDelete('cascade');
            $table->foreign('id_contacto')
              ->references('id_contacto')
              ->on('contactos')
              ->onUpdate('cascade')
              ->onDelete('cascade');
            $table->string('estado');
            $table->date('fecha');
            $table->text('observaciones');
            $table->float('deuda_pactada');
            $table->date('fecha_de_pago');
            $table->string('forma_de_pago');
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
        Schema::dropIfExists('actividads');
    }
};
