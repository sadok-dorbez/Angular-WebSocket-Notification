import { Component, OnInit } from '@angular/core';
import { ProjetService } from './projet.service'; 
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
 selector: 'app-projet',
 templateUrl: './projet.component.html'
})
export class ProjetComponent implements OnInit {
 projet = {
    dateDebut: '',
    dateFin: '',
    nom: '',
    description: ''
 };


 constructor(private projetService: ProjetService, private router: Router) { }

 ngOnInit(): void {
 }

 createProjet(form: NgForm) {
    if (form.valid) {
      this.projetService.createProjet(this.projet).subscribe(
        response => {
          console.log('Project created successfully');

          form.reset();
          this.router.navigate(['/projets']); 
        },
        error => {
          console.error('Error creating project', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
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

