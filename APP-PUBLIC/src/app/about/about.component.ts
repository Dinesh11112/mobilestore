import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router,private ngZone: NgZone) { }

  ngOnInit(): void {
  }
public submitdata():void{
  this.ngZone.run(() =>{
    alert("Your information has been submitted");
    this.router.navigate(['/']);
  });
}
}
