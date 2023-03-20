import { Component } from '@angular/core';
import { Rapport } from 'src/app/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RapportService } from 'src/app/component/service/rapport.service';


@Component({
  selector: 'app-view-rapport',
  templateUrl: './view-rapport.component.html',
  styleUrls: ['./view-rapport.component.css']
})
export class ViewRapportComponent {



  id!: number;
  rapport!: any;
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public rapportService: RapportService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];  
    this.rapportService.getFindIdRapport(this.id).subscribe((data: any)=>{
      console.log(data);
      this.rapport = data.data;      
    });
  }
}
