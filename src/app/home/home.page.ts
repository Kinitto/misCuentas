import { Component, OnInit } from '@angular/core';
import { Registro } from '../interfaces/registro';
import { FireBaseServiceService } from '../service/fire-base-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  registros: Registro[]=[];
  constructor(private fireService:FireBaseServiceService) {}

  ngOnInit() {
    this.getRegistros();
  }

  getRegistros(){
    this.fireService.getRegistros().subscribe({
      next:(resp=>{this.registros=resp})
    })
  }
  deleteRegistro(registro: Registro){
    this.fireService.deleteRegistro(registro);
  }
}
