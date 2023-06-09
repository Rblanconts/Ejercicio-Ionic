import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesPage } from './detalles.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesPage
  },
  {
    path: 'detalles/:id',
    component: DetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPageRoutingModule {}
