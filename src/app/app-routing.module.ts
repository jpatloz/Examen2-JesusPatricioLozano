import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent //Esta ruta nos dirige a la página principal
  },

  {
    path: 'porteros', loadChildren: () =>
  import('./porteros-voluntarios/porteros-voluntarios.module').then(m=>m.PorterosVoluntariosModule)
  },  //Esta ruta hace que desde la aplicación principal podamos dirigirnos al módulo de porteros

  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
