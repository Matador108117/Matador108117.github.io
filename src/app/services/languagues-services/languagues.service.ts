import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Languages } from '../../models/languages/languages.model';

@Injectable({
  providedIn: 'root'
})
export class LanguaguesService {
  private dbPath = '/Languages';
  languageRef: AngularFirestoreCollection<Languages>;
  constructor(private db: AngularFirestore) {
  this.languageRef = db.collection(this.dbPath);
  }
   getLanguage() : AngularFirestoreCollection<Languages> {
  return this.languageRef;
  }

}
