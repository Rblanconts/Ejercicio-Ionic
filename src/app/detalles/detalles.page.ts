import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  coctel: any[];
  coctelId: string;
  

  constructor(private route: ActivatedRoute, private http: HttpClient, private navctrl: NavController) { }

  ngOnInit() {
    const coctelId = this.route.snapshot.paramMap.get('id');
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.coctelId}')
        .subscribe((data: any) =>{
          this.coctel = data['drinks'][0];
        });
  }

  // backButton(){
  //   this.navctrl.navigateForward('/tabs/tab3');
  // }

}
