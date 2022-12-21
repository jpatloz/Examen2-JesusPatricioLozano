import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorterosVoluntariosRoutingModule } from './porteros-voluntarios-routing.module';
import { ListaPorterosComponent } from './lista-porteros/lista-porteros.component';
import { DetallesPorterosComponent } from './detalles-porteros/detalles-porteros.component';
import { FormularioPorterosComponent } from './formulario-porteros/formulario-porteros.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaPorterosComponent,
    DetallesPorterosComponent,
    FormularioPorterosComponent
  ],
  imports: [
    CommonModule,
    PorterosVoluntariosRoutingModule,
    ReactiveFormsModule
  ]
})
export class PorterosVoluntariosModule { }
