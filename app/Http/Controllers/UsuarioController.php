<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsuarioController extends Controller
{

    public function login() {

      return view('index');

    }
    public function comprobarsesion(Request $request){

      return view('index');

    }

    public function logout(){

    }


}
