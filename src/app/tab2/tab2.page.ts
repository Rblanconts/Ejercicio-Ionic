import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  
  //Declaramos las variables del tab2.html
  nombre: string;
  usuario: string;
  apellido: string;
  telefono: string;
  email: string;
  password: string;

  constructor(public menu: MenuController, public navCtrl: NavController)  {}

   ngOnInit() {
    
  }

  //TODO MENU
  abrirMenu(){
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }

  volverLogin(){
    this.navCtrl.navigateRoot('login');
  }


  //Funcion para validar los datos al pulsar el boton guardar
  comprobarDatos(){

    if (!this.validarNombre()) {
      console.log("Nombre invalido");
      return;
    }

    // if (!this.validarTelefono()) {
    //   console.log("Telefono invalido");
    //   return;
      
    // }

    // if(!this.validarEmail()){
    //   console.log("Email invalido");
    //   return;
      
    // }

    // if(!this.validarApellido()){
    //   console.log("Apellido invalido");
    //   return;
      
    // }

    //Si se cumplen todas las condiciones entonces, hace lo siguiente:
    console.log("Datos enviados con exito");
    console.log(this.editNombre);
    
    
    
  }


  //Funcion para guardar el nombre
  // guardarNombre(){
  //   localStorage.setItem('nombre', this.nombre);
  // }


  //Guardamos el nombre en persistencia //TODO Hacer que al pulsar el boton guardar se actualice la persistencia
  public get editNombre(){
    return localStorage.getItem('nombre');
  }

  public set editNombre(value: string){
    localStorage.setItem('name', value);
  }


  //Validacion del nombre
  validarNombre(){
    const regex = /^[a-zA-Z ]{3,}$/;
    return regex.test(this.nombre);
  }
  
  //Validacion del apellido
  validarApellido(){
    const regex = /^[a-zA-Z ]{3,}$/;
    return regex.test(this.apellido);
  }

  //Validacion del telefono
  validarTelefono(){
    const regex = /^[0-9]{1,9}$/;
    return regex.test(this.telefono);
  }

  //Validacion del email
  validarEmail(){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(this.email);
  }

}
