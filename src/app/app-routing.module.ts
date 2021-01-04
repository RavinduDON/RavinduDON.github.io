import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {EducationComponent} from './education/education.component';
import {ExperianceComponent} from './experiance/experiance.component';
import {ContactComponent} from './contact/contact.component';
import {LanguagesComponent} from './child/languages/languages.component';
import {ProjectsComponent} from './child/projects/projects.component';
import {SkillsComponent} from './child/skills/skills.component';
import {TechnologiesComponent} from './child/technologies/technologies.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/about'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'experiance',
    component: ExperianceComponent,
  },
  {
    path: 'experiance/:sub',
    component: ExperianceComponent,
    children: [
      {path: 'languages', component: LanguagesComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'technologies', component: TechnologiesComponent},
      {path: '', pathMatch: 'full', redirectTo: './languages'},
    ]
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
