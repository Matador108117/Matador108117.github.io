import { Component } from '@angular/core';
import {WorkService} from '../services/work-experience-service/work.service'; 
import { WorkExperience } from '../models/work-experience/work-experience.model'; 
import { map } from 'rxjs/operators'; 
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
	workExperience : WorkExperience[] = [ ];

	constructor (public workService: WorkService){
		console.log(this.workService);
		this.workService.getWorkExperience().snapshotChanges().pipe(
			map( changes =>
			    changes.map(c =>
					({ id: c.payload.doc.id, ...c.payload.doc.data() })
				       )
			   )
		).subscribe(data => {
		this.workExperience = data; 
		console.log(this.workExperience); 
		}); 
	}

}
