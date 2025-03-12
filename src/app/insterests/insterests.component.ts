import { Component } from '@angular/core';
import {InterestsService} from '../services/interests-services/interests.service';
import { Interests } from '../models/interests/interests.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-insterests',
  templateUrl: './insterests.component.html',
  styleUrl: './insterests.component.css'
})
export class InsterestsComponent {
 interests : Interests = new Interests();
 constructor  (public interestsService : InterestsService){
    this.interestsService.getInterests().snapshotChanges().pipe(
                        map( changes =>
                            changes.map(c =>
                                        ({ id: c.payload.doc.id, ...c.payload.doc.data() })
                                       )
                           )
                ).subscribe(data => {
                this.interests = data[0];  
                console.log(this.interests);
             });
      } 
}
