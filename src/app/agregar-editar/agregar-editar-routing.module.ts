import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarEditarPage } from './agregar-editar.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarEditarPageRoutingModule {}
