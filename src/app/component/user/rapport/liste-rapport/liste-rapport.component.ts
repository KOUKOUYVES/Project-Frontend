import { Component, OnInit } from '@angular/core';
import { RapportService } from 'src/app/component/service/rapport.service';

@Component({
  selector: 'app-liste-rapport',
  templateUrl: './liste-rapport.component.html',
  styleUrls: ['./liste-rapport.component.css']
})
export class ListeRapportComponent implements OnInit {

  rapports: any;

  constructor( private rapportservice: RapportService) { }

  ngOnInit(): void {
    this.rapportservice.getRapport().subscribe(
      (result:any)=>{
        //console.log(result)
        this.rapports  =  result.data;
      }
    )

  }

  deleteRapport(rapport:any){
   // console.log(id);
    this.rapportservice.deleteRapport(rapport.id).subscribe(data=>{
      this.rapports = this.rapports.filter((u: any) => u !== rapport);
    })
  }
}
