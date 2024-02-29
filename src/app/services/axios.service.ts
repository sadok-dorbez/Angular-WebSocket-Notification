import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL= "http://localhost:8082/seif"
    axios.defaults.headers.post["Content-type"]="application/json"
   }

   getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
   }
   
   setAuthToken(token: string | null): void {
    if (token !== null ) {
      window.localStorage.setItem("auth_token" ,token);
    }else {
      window.localStorage.removeItem("auth_token");

    }
   }

   request(method: string , url : string , data:any):Promise<any>{
    let headers = {};
    if (this.getAuthToken() !== null) {
      headers = {"Authorization" : "Bearer" + this.getAuthToken()};
    }
    return axios({
       method: method,
       url: url,
       data: data,
       headers: headers
    });
   }
}
