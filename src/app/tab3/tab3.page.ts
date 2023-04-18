import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  //Lista de cocteles marcados como favoritos 
  favoritos: any[];

  constructor() { }

  ngOnInit() {
    //this.favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    this.actualizarLista();
  }

  ionViewWillEnter(){
    this.actualizarLista();
  }


  actualizarLista(){
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    this.favoritos = favoritos;
  }

  /*Funcion que eliminara de la lista de favoritos el coctel sobre el que
  pulsemos el boton*/ 

  removeFavorito(coctel){
    console.log("Funcion usandose");
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    let index = favoritos.findIndex(f => f.idDrink === coctel.idDrink);
    if (index > -1) {
      favoritos.splice(index, 1);
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    this.favoritos = favoritos;
  }
}
