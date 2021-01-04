import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './child/skills/skills.component';
import { ProjectsComponent } from './child/projects/projects.component';
import { TechnologiesComponent } from './child/technologies/technologies.component';
import { LanguagesComponent } from './child/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AboutComponent,
    EducationComponent,
    ExperianceComponent,
    ContactComponent,
    SkillsComponent,
    ProjectsComponent,
    TechnologiesComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
