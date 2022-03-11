import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, docData, doc, deleteDoc, updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Registro } from '../interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class FireBaseServiceService {

  constructor(private firestore: Firestore) { }

  getRegistros(): Observable<Registro[]> {
    const registros = collection(this.firestore, 'registros');
    return collectionData(registros, { idField: 'id'}) as Observable<Registro[]>;
  }

  addRegistro(registro: Registro) {
    const registros = collection(this.firestore, 'registros');
    return addDoc(registros, registro);
  }

  getRegistroById(id): Observable<Registro> {
    const registros = doc(this.firestore, `registros/${id}`);
    return docData(registros, { idField: 'id' }) as Observable<Registro>;
  }
  deleteRegistro(registro: Registro) {
    const registros = doc(this.firestore, `registros/${registro.id}`);
    return deleteDoc(registros);
  }
  editRegistro(registro: Registro) {
    const registros = doc(this.firestore, `registros/${registro.id}`);
    return updateDoc(registros, {id:registro.id,titulo:registro.titulo,tipo:registro.tipo,informacion:registro.informacion,cantidad:registro.cantidad});
  }
}
