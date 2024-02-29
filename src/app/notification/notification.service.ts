import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl = 'http://localhost:8085/api/notification';  

  constructor(private http: HttpClient) { }

 

  getAllNotifications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

 
  deleteNotification(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
  
}
