import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  //Lista de cocteles marcados como favoritos 
  favoritos: any[];

  constructor(private http: HttpClient, private navController: NavController, private router: Router) { }

  ngOnInit() {

    // this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    //   .subscribe((data: any) => {
    //     this.favoritos = data.drinks;
    //   });
    //this.favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    this.actualizarLista();
  }

  //Carga en persistencia los datos al navegar a la pantalla tab3
  ionViewWillEnter(){
    this.actualizarLista();
  }


  //TODO
  mostrarDetalles(coctel){
    this.navController.navigateForward(`/detalles/${coctel.idDrink.toString()}`); //Con esto navegas 
    console.log(coctel.idDrink);
    
  }

  verDetalles(coctel){
    this.router.navigate(['/detalles', coctel.idDrink]);
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
