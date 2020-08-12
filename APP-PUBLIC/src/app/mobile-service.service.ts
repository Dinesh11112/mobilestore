import { Injectable } from '@angular/core';
import{Mobile} from './mobile';
import {Http, Response} from "@angular/http";
@Injectable()
export class MobileServiceService {
  private mobilesUrl = 'http://localhost:3000/api/mobile';
  constructor(private http:Http) { }
  getMobiles() : Promise<void | Mobile[]>{
    return this.http.get(this.mobilesUrl)
      .toPromise()
      .then(response => response.json() as Mobile[])
      .catch(this.handleError);
  }
  getSingleMobile(mobileID:String):Promise<void | Mobile>{
    return this.http.get(this.mobilesUrl+'/'+mobileID)
      .toPromise()
      .then(response=>response.json() as Mobile)
      .catch(this.handleError);
  }
  createMobile(newMobile: Mobile): Promise<void | Mobile>{
    return this.http.post(this.mobilesUrl, newMobile)
      .toPromise()
      .then(response => response.json() as Mobile)
      .catch(this.handleError);
  }
  deleteMobile(mobileID:String):Promise<void | Mobile>{
    return this.http.delete(this.mobilesUrl+'/'+mobileID)
      .toPromise()
      .then(response=>response.json() as Mobile)
      .catch(this.handleError);
  }
  updateMobile(newMobile : Mobile):Promise<void | Mobile>{
    return this.http.put(this.mobilesUrl+'/'+newMobile._id,newMobile)
      .toPromise()
      .then(response=>response.json() as Mobile)
      .catch(this.handleError);
  }

  private handleError(error:any){
    console.log("error");
  }
}
