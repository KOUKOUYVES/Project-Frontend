import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './component/pages/connexion/connexion.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { HomeComponent } from './component/pages/home/home.component';
import { PageNotFoundComponent } from './component/pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './component/pages/register/register.component';
import { UserdashboardComponent } from './component/user/dashboard/userdashboard/userdashboard.component';
import { CreateRapportComponent } from './component/user/rapport/create-rapport/create-rapport.component';
import { EditRapportComponent } from './component/user/rapport/edit-rapport/edit-rapport.component';
import { ListeRapportComponent } from './component/user/rapport/liste-rapport/liste-rapport.component';
import { ViewRapportComponent } from './component/user/rapport/view-rapport/view-rapport.component';

const routes: Routes = [

  { path: '',
  component : HomeComponent

  },

  {
    path: 'register-user',
    component: RegisterComponent 
  },

  {
    path: 'contact-user',
    component: ContactComponent 
  },

  {
    path: 'all_rapport',
    component: ListeRapportComponent
  },

  {
    path: 'edit-rapport/:id',
    component: EditRapportComponent
  },

  {
    path: 'view-rapport/:id',
    component: ViewRapportComponent
  },

  {
    path: 'create-rapport',
    component: CreateRapportComponent 
  },

  {
    path: 'dahboard-user',
    component:  UserdashboardComponent
  },


  {
    path: 'login-user',
    component: ConnexionComponent 
  },

  { 
    path: '**',
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
