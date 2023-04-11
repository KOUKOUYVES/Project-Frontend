import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/user.model';

// import { RegisterComponent } from '../pages/register/register.component';
// import { Students } from '';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8000/';

  
        getData() {
          const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
          return this.http.get('http://localhost:8000/', { headers });
        }

    createUser(user:any) {
      return this.http.post(this.baseUrl + 'user/add', user);
    } 

    getUser(user:any) {
      return this.http.get(this.baseUrl + 'all/users', user);
    } 


    /// Login user///
    loginUser(user:any) {
      return this.http.post(this.baseUrl + 'api/login_check', user);
    }

    //stocker les token dans localstorage
    setLocalStorage(name: string, value: any) {
      localStorage.setItem(name, value);
    }
  
    getLocalStorage(name: string) {
      return JSON.parse(localStorage.getItem(name)!); 
    }
  
    deleteLocalStorage(name: string) {
      localStorage.removeItem(name);
    }
  //vider le localstorage
    viderLocalStorage(name: string) {
      localStorage.clear();
    }
}


