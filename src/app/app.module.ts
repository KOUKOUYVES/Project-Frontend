import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/home/header/header.component';
import { NavbarComponent } from './component/home/navbar/navbar.component';
import { FooterComponent } from './component/home/footer/footer.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { RegisterComponent } from './component/pages/register/register.component';
import { ConnexionComponent } from './component/pages/connexion/connexion.component';
import { HomeComponent } from './component/pages/home/home.component';
import { PageNotFoundComponent } from './component/pages/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PresentationComponent } from './component/home/presentation/presentation.component';
import { ServicesComponent } from './component/home/services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './component/test/test.component';
import { RapportsComponent } from './component/user/rapport/rapports/rapports.component';
import { UserdashboardComponent } from './component/user/dashboard/userdashboard/userdashboard.component';
import { CreateRapportComponent } from './component/user/rapport/create-rapport/create-rapport.component';
import { EditRapportComponent } from './component/user/rapport/edit-rapport/edit-rapport.component';
import { NavbarUserComponent } from './component/user/dashboard/navbar-user/navbar-user.component';
import { SidebarUserComponent } from './component/user/dashboard/sidebar-user/sidebar-user.component';
import { DeleteRapportComponent } from './component/user/rapport/delete-rapport/delete-rapport.component';
import { ListeRapportComponent } from './component/user/rapport/liste-rapport/liste-rapport.component';
import { ViewRapportComponent } from './component/user/rapport/view-rapport/view-rapport.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    RegisterComponent,
    ConnexionComponent,
    HomeComponent,
    PageNotFoundComponent,
    PresentationComponent,
    ServicesComponent,
    TestComponent,
    RapportsComponent,
    UserdashboardComponent,
    CreateRapportComponent,
    EditRapportComponent,
    NavbarUserComponent,
    SidebarUserComponent,
    DeleteRapportComponent,
    ListeRapportComponent,
    ViewRapportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
