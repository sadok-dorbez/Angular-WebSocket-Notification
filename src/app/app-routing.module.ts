import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Front/home/home.component';
import { ReclamationComponent } from './Front/reclamation/reclamation.component';
import { HeaderComponent } from './Front/header/header.component';
import { FrontComponent } from './Front/front/front.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { SignInDashboardComponent } from './dashboard/sign-in-dashboard/sign-in-dashboard.component';
import { HomeDashComponent } from './dashboard/home-dash/home-dash.component';
import { ProjetComponent } from './projet/projet.component';
import { ProjectsComponent } from './projet/projects.component';
import { ProjectUpdateComponent } from './projet/projectUpdate.component';
import { NotificationComponent } from './notification/notification.component';
import {ImageUploadComponent} from "./projet/Imageupload.component";
import { ProjectDetailsComponent } from './projet/projectDetails.componednt';



const routes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'sign-in', component: SignInComponent },
  {path: 'register', component:RegisterComponent},
  {path:'sign-in-dashboard',component:SignInDashboardComponent},
  {path:'dashboard',component:HomeDashComponent},
  {path:'projet/new',component:ProjetComponent},
  {path:'projets',component:ProjectsComponent},
  { path: 'projet/update/:id', component: ProjectUpdateComponent },
  { path: 'projet/uploadimage/:id', component: ImageUploadComponent },
  {path:'notifications',component:NotificationComponent},
  { path: 'projet/details/:id', component: ProjectDetailsComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
