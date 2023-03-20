import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import {  Observable } from 'rxjs';
import { Rapport } from 'src/app/user.model';


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

    getSingleRapport(id:any) {
      return this.http.get(this.baseUrl+'view.php?id='+id);
    } 

    deleteRapports(id:any) {
      console.log(id);
      return this.http.delete(this.baseUrl+'rapport/delete/'+ id);  
    }  


    getFindIdRapport(id:any){
      console.log(id);
      return this.http.get(this.baseUrl +'find/rapport/' + id)
      

    }

    editRapport(id:any, rapport:any): Observable<Rapport> {
        return this.http.put<Rapport>(this.baseUrl + 'api/rapport/edit/' + id, JSON.stringify(rapport))
        // .pipe(
        //   catchError(this.errorHandler)
        // )
      }
    }
