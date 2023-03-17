import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { Router } from '@angular/router';
// import { RapportService } from 'src/app/component/service/rapport.service';
import { RapportService } from 'src/app/component/service/rapport.service';


@Component({
  selector: 'app-create-rapport',
  templateUrl: './create-rapport.component.html',
  styleUrls: ['./create-rapport.component.css']
})
export class CreateRapportComponent {


  registerFormRapport : any;
  submitted = false;
  vals = ''
  data= this.vals.split(',');


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private rapportService:RapportService
    ) { }

  ngOnInit() {
      this.registerFormRapport = this.formBuilder.group({
          titre_rapport: ['', Validators.required],
          texte_rapport: ['', Validators.required],
          rapport_date: ['', Validators.required],
      });
  }

  // getter pratique pour un accès facile aux champs du formulaire
  get f() { 
    return this.registerFormRapport.controls; 
    }



    onSubmit(){
      // if (this.registerFormRapport.invalid) {
      //           return;
      //       }
      // console.log(this.registerFormRapport.value);
      
      this.rapportService.createRapport(this.registerFormRapport.value).subscribe(
        (data:any)=>{
          console.log(data);
          
           this.router.navigate(['/dahboard-user']);  
        },  
       error => {  
         alert(error);
       });
      // //afficher les valeurs du formulaire en cas de succès
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerFormRapport.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerFormRapport.reset();
  }

}
