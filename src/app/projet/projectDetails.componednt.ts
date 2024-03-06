import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from './projet.service';
import {Observable, of} from "rxjs";

@Component({
 selector: 'app-project-details',
 templateUrl: './projectDetails.component.html',
})
export class ProjectDetailsComponent implements OnInit {
 project: any;
  imageSources: Observable<string[]> = of([]);
 id: any;
 constructor(private route: ActivatedRoute, private projetService: ProjetService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.projetService.getProjetById(+this.id).subscribe(project => {
        this.project = project;
        this.getImageSources().then(sources => {
          this.imageSources = of(sources);
        });
      });
    }
  }




  getImageSources(): Promise<string[]> {
    if (this.project && this.project.images) {
       return Promise.all(this.project.images.map((image: { type: any; data: string; }) => {
         console.log('Processing image:', image.data);
         if (image.data.startsWith('data:')) {
           return Promise.resolve(image.data);
         } else {
           const base64Data = `data:${image.type};base64,${image.data}`;
           console.log('Converted to base64:', base64Data);
           return Promise.resolve(base64Data);
         }
       }));
    } else {
       return Promise.resolve([]);
    }
   }
   



}
