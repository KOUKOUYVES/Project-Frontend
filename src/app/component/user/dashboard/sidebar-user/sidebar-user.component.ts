import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent{
 
 
  constructor(
    private router: Router,
    ) { }

  deconnexion(){
    localStorage.removeItem('token');
    localStorage.removeItem('current_data');
    this.router.navigate(['/']);   
  }
}
