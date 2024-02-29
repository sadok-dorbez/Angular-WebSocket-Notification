import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from './projet.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projectUpdate.component.html'
})
export class ProjectUpdateComponent implements OnInit {
  id : any;
  projet = {
    dateDebut: '',
    dateFin: '',
    nom: '',
    description: ''
  };

  constructor(private projetService: ProjetService, private activatedroute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
  }
  

  updateProjet(id: any , projet: any): void {
    this.projetService.updateProjet(id , projet).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/projets']); 
       
      },
      error => {
        console.error(error);
       
      }
    );
  }

  validateDates(form: NgForm) {
    const dateDebut = new Date(form.value.dateDebut);
    const dateFin = new Date(form.value.dateFin);
    if (dateDebut >= dateFin) {
      form.controls['dateFin'].setErrors({'invalidDate': true});
    } else {
      form.controls['dateFin'].setErrors(null);
    }
 }
}
