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
        Schema::create('empleados', function (Blueprint $table) {
            $table->increments('id_empleado');
            $table->integer('id_empresa')->unsigned();
            $table->foreign('id_empresa')
              ->references('id_empresa')
              ->on('empresas')
              ->onUpdate('cascade')
              ->onDelete('cascade');
            $table->integer('DNI');
            $table->string('nombre_y_apellido');
            $table->string('telefono');
            $table->string('fecha_alta');
            $table->string('fecha_baja')->nullable();
            $table->integer('id_rama_categoria');
            $table->string('motivo_reclamo');
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
        Schema::dropIfExists('empleados');
    }
};
