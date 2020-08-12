import { Component, OnInit, Input,NgZone } from '@angular/core';
import {Router } from '@angular/router';
import { Mobile } from '../mobile';
import { MobileServiceService } from '../mobile-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [MobileServiceService]

})
export class CreateComponent implements OnInit {

  public newMobile: Mobile = {
    _id:'',
    name:'',
    type:'',
    latest:'',
    cost:0,
    rating:0,
  };
  constructor(private mobileDataService : MobileServiceService,private router: Router,private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  public createNewMobile(newMobile: Mobile):void {
    if(newMobile.name!="" && newMobile.type!=""){
    this.mobileDataService.createMobile(newMobile);
      this.ngZone.run(() => {
        this.router.navigate(['/home']);
      });
    }
    else{
      alert("Please give a valid name and type");
    }
  }
}
