import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private apiUrl = 'http://localhost:8085/api/projet';  

  constructor(private http: HttpClient) { }

  createProjet(projet: any): Observable<any> {
    return this.http.post(this.apiUrl, projet);
  }

  getAllProjets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProjetById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  deleteProjet(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
  

  updateProjet(id : any , projet: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, projet);
  }
}
