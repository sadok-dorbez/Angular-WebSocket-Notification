import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Front/home/home.component';
import { ReclamationComponent } from './Front/reclamation/reclamation.component';
import { HeaderComponent } from './Front/header/header.component';
import { FrontComponent } from './Front/front/front.component';
import { BackComponent } from './Back/back/back.component';
import { SidebarComponent } from './Back/sidebar/sidebar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { SignInDashboardComponent } from './dashboard/sign-in-dashboard/sign-in-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjetComponent } from './projet/projet.component';
import { ProjectsComponent } from './projet/projects.component';
import { ProjectUpdateComponent } from './projet/projectUpdate.component';
import { NotificationComponent } from './notification/notification.component';
import {ImageUploadComponent} from "./projet/Imageupload.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReclamationComponent,
    HeaderComponent,
    FrontComponent,
    BackComponent,
    SidebarComponent,
    SignInComponent,
    RegisterComponent,
    SignInDashboardComponent,
    ProjetComponent,
    ProjectsComponent,
    ProjectUpdateComponent,
    NotificationComponent,
    ImageUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
