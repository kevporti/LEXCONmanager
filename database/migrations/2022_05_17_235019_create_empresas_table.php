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
        Schema::create('empresas', function (Blueprint $table) {
            $table->increments('id_empresa');
            $table->string('nombre_empresa');
            $table->integer('id_usuario')->unsigned();
            $table->foreign('id_usuario')
              ->references('id_usuario')
              ->on('usuarios')
              ->onUpdate('cascade')
              ->onDelete('cascade');
            $table->bigInteger('CUIT');
            $table->string('domicilio');
            $table->string('cod_postal');
            $table->string('localidad');
            $table->string('provincia');
            $table->string('pais');
            $table->string('tel_celular');
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
        Schema::dropIfExists('empresas');
    }
};
