import { Component, OnInit } from '@angular/core';
import { RapportService } from 'src/app/component/service/rapport.service';
import { Router } from '@angular/router';
import { SweetAlertArrayOptions } from 'sweetalert2';

@Component({
  selector: 'app-liste-rapport',
  templateUrl: './liste-rapport.component.html',
  styleUrls: ['./liste-rapport.component.css']
})
export class ListeRapportComponent implements OnInit {

  rapports: any;

  constructor( 
    private rapportservice: RapportService,
    private router: Router,
    
    ) { }

  ngOnInit(): void {
    this.rapportservice.getRapport().subscribe(
      (result:any)=>{
        console.log(result)
        this.rapports  =  result.data;
      }
    )
  }

  deleteRapport(id:any){
    this.rapportservice.deleteRapports(id).subscribe(data=>{
      window.location.reload()

    })
  }

}
