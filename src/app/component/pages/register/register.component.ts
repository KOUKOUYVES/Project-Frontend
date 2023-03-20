import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : any;
  submitted = false;
  vals = ''
  data= this.vals.split(',');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService:UserService
    ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          username: ['', Validators.required],
          contact: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmpassword: ['', [Validators.required,Validators.minLength(8)]],
      });
  }

  // getter pratique pour un accès facile aux champs du formulaire
  get f() { 
    return this.registerForm.controls; 
    }

    onSubmit(){
      if (this.registerForm.invalid) {
                return;
            }
      // console.log(this.registerForm.value);
      
      this.userService.createUser(this.registerForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          
           this.router.navigate(['/login-user']);  
        },  
       error => {  
         alert(error);
       });
      // //afficher les valeurs du formulaire en cas de succès
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
