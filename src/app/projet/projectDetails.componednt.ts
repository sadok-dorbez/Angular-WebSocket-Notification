import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from './projet.service';

@Component({
 selector: 'app-project-details',
 templateUrl: './projectDetails.component.html',
 styleUrls: ['./projectDetails.component.css']
 
})
export class ProjectDetailsComponent implements OnInit {
 project: any;

 constructor(private route: ActivatedRoute, private projetService: ProjetService) { }

 ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projetService.getProjetById(+id).subscribe(project => {
        this.project = project;
      });
    }
 }
}
