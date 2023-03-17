import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../../service/user.service';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  loginForm !: FormGroup;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService:UserService
    ) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(8)]],
      });
  }

  // getter pratique pour un accès facile aux champs du formulaire
  get f() { 
    return this.loginForm.controls; 
    }

  // onSubmit() {
  //     this.submitted = true;

  //     // arrêter ici si le formulaire est invalide 
  //     if (this.loginForm.invalid) {
  //         return;
  //     }


      onSubmit(){
        this.submitted = true;

        if (this.loginForm.invalid) {
          return
        }
        console.log(this.loginForm.value);
        this.userService.loginUser(this.loginForm.value).subscribe(
          (response:any)=>{
            console.log(response);
            this.userService.setLocalStorage("token", JSON.stringify(response.token));
            this.userService.setLocalStorage("current_data", JSON.stringify(response.data));
             this.router.navigate(['/dahboard-user']);  
          },  
         error => {  
           alert(error);
         });




      // afficher les valeurs du formulaire en cas de succès
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.loginForm.reset();
  }
  

}
