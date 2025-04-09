import { Component } from '@angular/core';
import {SkillsService} from '../services/skills-service/skills.service'; 
import { Skills } from '../models/skills/skills.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  allSkills : string [] = [];
	skills : Skills = new Skills(); 
  constructor (public skillsService: SkillsService) {
    this.skillsService.getSkills().snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                        ({ id: c.payload.doc.id, ...c.payload.doc.data()})
               )
          )
    ).subscribe (data => {
     this.skills = data[0];
     this.allSkills = (this.skills.languagues ?? '').split(',').concat((this.skills.Areas ?? '').split(','));
     console.log(this.skills);
     console.log(this.allSkills);
    });

  }
}
