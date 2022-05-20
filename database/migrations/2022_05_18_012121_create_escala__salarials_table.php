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
        Schema::create('escala_salarial', function (Blueprint $table) {
            $table->increments('id_escala_s');
            $table->date('vigencia');
            $table->float('sueldo_basico');
            $table->float('hs_extra_50');
            $table->float('hs_extra_100');
            $table->integer('id_rama_categoria');
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
        Schema::dropIfExists('escala__salarials');
    }
};
