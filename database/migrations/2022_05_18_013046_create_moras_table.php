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
        Schema::create('moras', function (Blueprint $table) {
            $table->increments('id_mora');
            $table->integer('id_empleado')->unsigned();
            $table->foreign('id_empleado')
              ->references('id_empleado')
              ->on('empleados')
              ->onUpdate('cascade')
              ->onDelete('cascade');
            $table->date('mes_año');
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
        Schema::dropIfExists('moras');
    }
};
