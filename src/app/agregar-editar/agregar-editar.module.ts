import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarEditarPageRoutingModule } from './agregar-editar-routing.module';

import { AgregarEditarPage } from './agregar-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarEditarPageRoutingModule
  ],
  declarations: [AgregarEditarPage]
})
export class AgregarEditarPageModule {}
