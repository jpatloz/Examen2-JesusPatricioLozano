import { Component, OnInit } from '@angular/core';
import { Portero } from '../../interfaz/portero';
import { ServicioPorterosService } from '../../servicios/servicio-porteros.service';

@Component({
  selector: 'app-lista-porteros',
  templateUrl: './lista-porteros.component.html',
  styleUrls: ['./lista-porteros.component.css']
})
export class ListaPorterosComponent implements OnInit {

  listadoPorteros : Portero[] = []; //Lista creada para rellenarla con la información de cada portero
  porteroSeleccionado?: Portero;

  constructor(
    private porteroService: ServicioPorterosService, //Llamamos al servicio de porteros
  ) { }

  ngOnInit(): void {
  }

  rellenarLista(resp: any) { //Método utilizado para rellenar la lista
    this.listadoPorteros = [];
    resp.forEach((portero: any) => {
      this.listadoPorteros.push({
        id: portero.payload.doc.id,
        data: portero.payload.doc.data(),
      });
    });
  }

  getAll() {  //Se llama al método rellenarLista
    this.porteroService.getAll().subscribe((resp: any) => {
      this.rellenarLista(resp);
    });
  }

  seleccionarPortero(portero: Portero){
    this.porteroSeleccionado = portero;
  }

}
