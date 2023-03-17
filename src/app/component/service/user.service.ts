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

  getStudents() {
    return this.http.get<User[]>(this.baseUrl+'view.php');
  } 


    createUser(user:any) {
      return this.http.post(this.baseUrl + 'user/add', user);
    } 


    /// Login user///
    loginUser(user:any) {
      return this.http.post(this.baseUrl + 'api/login_check', user);
    }

    setLocalStorage(name: string, value: any) {
      localStorage.setItem(name, value);
    }
  
    getLocalStorage(name: string) {
      return JSON.parse(localStorage.getItem(name)!); 
    }
  
    deleteLocalStorage(name: string) {
      localStorage.removeItem(name);
    }
  
    viderLocalStorage(name: string) {
      localStorage.clear();
    }
}


// export class Users{
//   user_id?: number;  
//   firstname?: string;  
//   lastname?: string;
//   contact?:string
//   email?: string;  
//   passwod?: string; 
//   confirmpassword?: string;
// }