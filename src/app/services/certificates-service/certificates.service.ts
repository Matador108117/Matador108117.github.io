import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Certificates } from '../../models/certificates/certificates.model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private dbPath = '/Certificates';
  certificatesRef : AngularFirestoreCollection<Certificates>;  
  constructor(private db: AngularFirestore ) {
  this.certificatesRef = db.collection(this.dbPath);
  }
   getCertificates(): AngularFirestoreCollection<Certificates> {
        return this.certificatesRef;
        }


}
