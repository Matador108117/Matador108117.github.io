import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { LanguagesComponent } from './languages/languages.component';
import { InsterestsComponent } from './insterests/insterests.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    SkillsComponent,
    CertificatesComponent,
    LanguagesComponent,
    InsterestsComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
