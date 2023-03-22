import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { Rapport } from 'src/app/user.model';
import { RapportService } from 'src/app/component/service/rapport.service';

@Component({
  selector: 'app-edit-rapport',
  templateUrl: './edit-rapport.component.html',
  styleUrls: ['./edit-rapport.component.css']
})
export class EditRapportComponent implements OnInit {

  id!: number;
  rapport!: any;
  editFormRapport!: FormGroup;
  submitted = false;

     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
private formBuilder: FormBuilder,
    private router: Router,
    private rapportService:RapportService,
    private route : ActivatedRoute
  ) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rapportService.getFindIdRapport(this.id).subscribe((data: any)=>{
      this.rapport = data.data;
    }); 
       
    this.editFormRapport = new FormGroup({
      titre_rapport: new FormControl('', [Validators.required]),
      texte_rapport: new FormControl('', Validators.required),
      rapport_date: new FormControl('', Validators.required),

    });
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.editFormRapport.controls;
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  onEdit(){
    console.log(this.editFormRapport.value);
    this.rapportService.editRapport(this.id, this.editFormRapport.value).subscribe((res:any) => {
         console.log('Rapport updated successfully!');
            this.router.navigate(['/all_rapport']);  

    })
  }
  onReset(){
    this.submitted = false;
    this.editFormRapport.reset();
  }    
}


