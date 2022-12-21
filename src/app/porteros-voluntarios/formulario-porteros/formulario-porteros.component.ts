import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicioPorterosService } from '../../servicios/servicio-porteros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-porteros',
  templateUrl: './formulario-porteros.component.html',
  styleUrls: ['./formulario-porteros.component.css']
})
export class FormularioPorterosComponent implements OnInit {

  //Creamos el formulario con FormBuilder
  datosPortero = this.form.group({
    id: ['', Validators.required],
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    ciudad: ['', Validators.required],
    correo: ['', Validators.required],
    mes: ['', Validators.required],
    telefono: ['', Validators.required]
  })

  constructor(
    private form: FormBuilder,
    private porterosService: ServicioPorterosService,
    private ruta: ActivatedRoute
  ) { }

  nuevo: boolean = false;
  documentId: any;

  ngOnInit(): void {
    this.ruta.params.subscribe( params => {
      if(params['id']){
        this.documentId = String(params['id']);
        this.nuevo = false;
        console.log('editar');
        // Mostramos el portero en el formulario
        this.porterosService.getPortero(this.documentId).subscribe(
          (resp: any) => {
            this.datosPortero.setValue(resp.payload.data());
          }
        )
      }else{
        console.log('nuevo');
        this.nuevo=true;
      }
    })
  }

  guardar() {
    if(this.nuevo){

      // guardamos datos con crearPortero
      this.porterosService.crearPortero(this.datosPortero.value).then(
        () => {
          alert('Portero creada, enhorabuena');
        }, (error: any) => {
          alert("Error: " + error);
        }
      )
    }else{

      // llamamos a actualizarPortero
      this.porterosService.actualizarPortero(this.documentId, this.datosPortero.value).then(
        () => {
          alert('Portero actualizado');
        },
        (error: any) => {
          alert('Error: ' + error);
        }
      )
    }
  }

}
