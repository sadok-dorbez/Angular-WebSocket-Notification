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
  notification: any
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

}
