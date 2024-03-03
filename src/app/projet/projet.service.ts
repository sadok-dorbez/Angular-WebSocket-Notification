import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
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

  uploadImage(idProjet: any, file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.apiUrl}/${idProjet}/uploadimage`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getProjetImages(idProjet: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${idProjet}/images`);
  }
}
