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
        Schema::create('contactos', function (Blueprint $table) {
            $table->increments('id_contacto');
            $table->integer('id_empresa')->unsigned();
            $table->foreign('id_empresa')
              ->references('id_empresa')
              ->on('empresas')
              ->onUpdate('cascade')
              ->onDelete('cascade');
            $table->string('nombre_y_apellido');
            $table->string('cargo');
            $table->string('tel_celular')->nullable();
            $table->string('email')->nullable();
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
        Schema::dropIfExists('contactos');
    }
};
