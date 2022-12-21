import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPorterosComponent } from './lista-porteros/lista-porteros.component';
import { FormularioPorterosComponent } from './formulario-porteros/formulario-porteros.component';

const routes: Routes = [
  {
    path:'lista-porteros', component: ListaPorterosComponent //Esta ruta nos dirige a la lista de porteros
  },

  {
    path: 'edit/:idPortero', component: FormularioPorterosComponent
  },  //Esta ruta nos dirige al formulario de porteros para poder editar la información

  {
    path: '**', redirectTo: 'lista-portero', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorterosVoluntariosRoutingModule { }
