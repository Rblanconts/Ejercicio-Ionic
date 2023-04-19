import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3Page } from './tab3.page';
import { DetallesPage } from 'app/detalles/detalles.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3PageRoutingModule {}
