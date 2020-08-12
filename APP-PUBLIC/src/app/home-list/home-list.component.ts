import { Component, OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileServiceService } from "../mobile-service.service";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers:[MobileServiceService]
})
export class HomeListComponent implements OnInit {
mobiles : Mobile[]
  constructor(private mobileService : MobileServiceService) { }

  ngOnInit(): void {
    this.mobileService
      .getMobiles()
      .then((mobiles: Mobile[])=>{
        this.mobiles = mobiles.map(mobile =>{
          return mobile;
        })
      })
  }

}
