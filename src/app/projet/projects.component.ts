import { Component, OnInit } from '@angular/core';
import { ProjetService } from './projet.service';
import { Router } from '@angular/router'
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projet.component.css']

})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  notifications: any[] = [];
  notification: any;
  filter = {
    dateDebut: null,
    dateFin: null,
    nom: null
 };
  constructor(private projetService: ProjetService, private router: Router) {
  }


  ngOnInit(): void {
    this.fetchProjects()
  }

  fetchProjects(): void {
    this.projetService.getAllProjets().subscribe(
      data => {
        this.projects = data;
      },
      error => {
        console.error(error);
      }
    );
  }
  updateProjet(id: number): void {
    this.router.navigate(['/projet/'+ id]);
  }

  confirmDelete(id: number): void {
    const confirmDelete = window.confirm('Are you sure you want to delete this project?');

    if (confirmDelete) {
      this.deleteProjet(id);
    }
  }

  deleteProjet(id: number): void {
    this.projetService.deleteProjet(id).subscribe(
      () => {

        console.log(`Project with ID ${id} deleted successfully.`);
      },
      (error) => {

        console.error(`Error deleting project with ID ${id}:`, error);
      }
    );
  }


  sortByDateDebut(): void {
    this.projects.sort((a, b) => new Date(b.dateDebut).getTime() - new Date(a.dateDebut).getTime());
 }

 sortByDateFin(): void {
    this.projects.sort((a, b) => new Date(b.dateFin).getTime() - new Date(a.dateFin).getTime());
 }

 sortByName(): void {
    this.projects.sort((a, b) => a.nom.localeCompare(b.nom));
 }

 filterProjects() {
  if (this.filter.dateDebut && this.filter.dateFin) {
     this.projects = this.projects.filter(project => {
       const projectDateDebut = this.filter.dateDebut ? new Date(project.dateDebut) : new Date();
       const projectDateFin = this.filter.dateFin ? new Date(project.dateFin) : new Date();
       const filterDateDebut = this.filter.dateDebut ? new Date(this.filter.dateDebut) : new Date();
       const filterDateFin = this.filter.dateFin ? new Date(this.filter.dateFin) : new Date();
 
       return projectDateDebut >= filterDateDebut && projectDateFin <= filterDateFin;
     });
  }
 }
 
 

 resetFilter(): void {
    this.filter.dateDebut = null;
    this.filter.dateFin = null;
    this.filter.nom = null;
    this.fetchProjects();
 }



}
