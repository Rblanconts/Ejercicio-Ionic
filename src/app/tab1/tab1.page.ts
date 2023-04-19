import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  //Hacemos un array de los cocktails
  cocteles: any[];
  coctelesOriginales: any[];
  
  favoritos: any[];

  //Añadimos al constructor el HttpClient para poder hacer la peticion REST
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .subscribe((data: any) => {
          this.cocteles = data.drinks;
          this.coctelesOriginales = data.drinks;
        });
  }

  //Buscador en el Tab1 (Sirve para buscar por nombre la bebida)
  buscadorCocteles(event){
    const buscar = event.target.value.toLowerCase();
    this.cocteles = this.coctelesOriginales.filter(coctel =>{
      return coctel.strDrink.toLowerCase().includes(buscar);
    });

  }

  //Funcion que actualiza la lista de cocteles en persistencia
  actualizarLista(){
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    this.favoritos = favoritos;
  }

    /**Funcion que recibe como parametro el coctel que se agregara a la lista de Favoritos
       Agregamos el coctel a lista de favoritos utilizando la funcion push() y
       guardamos la lista de favoritos actualizada en "localStorage" utilizando setItem()
    */
    addFavorito(coctel){
      console.log("Pulsando el corazon");
      
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    favoritos.push(coctel);
    localStorage.setItem('favoritos',JSON.stringify(favoritos));
  }

}
