import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Registro } from '../interfaces/registro';
import { FireBaseServiceService } from '../service/fire-base-service.service';

@Component({
  selector: 'app-agregar-editar',
  templateUrl: './agregar-editar.page.html',
  styleUrls: ['./agregar-editar.page.scss'],
})
export class AgregarEditarPage implements OnInit {
  agregar :boolean = false
  editar :boolean = false
  id:any;

  titulo:string;
  tipo:string;
  informacion:string;
  cantidad:number;
  constructor(private fireService:FireBaseServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute) {
    this.titulo="";this.tipo="", this.informacion="",this.cantidad=0;

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if(this.router.url == '/agregar-editar/agregar'){
          this.agregar = true;
          this.editar = false;
        }
        else{
          this.editar = true;
          this.getActualRegistro();
          this.agregar = false;
        }
      }
    });
  }
  ngOnInit() {
  }
  registro:Registro = {
    id:'',
    titulo: '',
    tipo: '',
    informacion: '',
    cantidad: 0
  }
  addRegistro(){
    this.registro.titulo = this.titulo ,this.registro.cantidad = this.cantidad
    this.registro.informacion = this.informacion ,this.registro.tipo = this.tipo

    this.fireService.addRegistro(this.registro);
    this.router.navigateByUrl('/home')
  }
  editRegistro(){

    this.registro.titulo = this.titulo ,this.registro.cantidad = this.cantidad
    this.registro.informacion = this.informacion ,this.registro.tipo = this.tipo
    this.registro.id = this.id

    this.fireService.editRegistro(this.registro);
    this.router.navigateByUrl('/home')

  }

  getActualRegistro(){
    this.fireService.getRegistroById(this.activeRoute.snapshot.params['id']).subscribe({
      next: resp =>{
        this.titulo=resp.titulo;this.tipo=resp.tipo,
        this.informacion=resp.informacion,this.cantidad=resp.cantidad;
        this.id= resp.id;
      },
      error: err=>{
        console.log(err)
      }
    });
  }
}
