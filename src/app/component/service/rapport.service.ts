import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class RapportService {

      constructor(private http: HttpClient, private userService: UserService) { }

      baseUrl: string = 'http://localhost:8000/';

      getData() {
        const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        return this.http.get('http://localhost:8000/', { headers });
      }

    // getStudents() {
    // return this.http.get<User[]>(this.baseUrl+'view.php');
    // } 


    createRapport(rapport:any) {
      let token = this.userService.getLocalStorage("token");
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    };
    return this.http.post(this.baseUrl + 'api/rapport/add', rapport, httpOptions);

    } 


    getRapport() {
      return this.http.get(this.baseUrl + 'all_rapport');
    } 

    // loginUser(user:any) {
    //    return this.http.post(this.baseUrl + 'api/login_check', user);
    // }

    // getSingleStudent(id:any) {
    //   return this.http.get<Users[]>(this.baseUrl+'view.php?id='+id);
    // } 

    deleteRapport(id:any) {
      console.log(id);
      return this.http.delete(this.baseUrl+'rapport/delete?id='+ id);  
    }  



    // editStudent(student:any) {
    //     return this.http.put(this.baseUrl+'update.php', student);  
    //   }  
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


