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
        Schema::create('obra_social', function (Blueprint $table) {
            $table->increments('id_obra_social');
            $table->integer('id_empresa')->unsigned()->nullable();
            $table->foreign('id_empresa')
              ->references('id_empresa')
              ->on('empresas')
              ->onUpdate('cascade')
              ->onDelete('cascade')
              ->nullable();
            $table->float('tasaInteresObra');
            $table->date('fechaLiquidacionObra');
            $table->float('subtotalObra');
            $table->float('subtotalPatronalObra');
            $table->float('totalFinalObra');
            $table->string('statusObra');
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
        Schema::dropIfExists('obra__socials');
    }
};
