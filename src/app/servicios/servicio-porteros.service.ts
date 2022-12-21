import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioPorterosService {

  conexion: any = this.firebase.collection('Porteros'); //Método para la conexión con firebase

  constructor(
    private firebase: AngularFirestore //Creamos la propiedad firebase para hacer el método de conexión
  ) { }

  getAll() {
    return this.conexion.snapshotChanges(); //Método para leer todos los porteros
  }

  getPortero(documentId: string){
    return this.conexion.doc(documentId).snapshotChanges(); //Método para leer un portero
  }

  crearPortero(data: any){
    return this.conexion.add(data); //Método para añadir un nuevo portero
  }

  actualizarPortero(documentId: string, data: any) {
    return this.conexion.doc(documentId).update(data); //Método para actualizar la información de un portero ya creado
  }

  borrarPortero(documentId: string){
    return this.conexion.doc(documentId).delete(); //Método para dar de baja a un portero
  }

}
