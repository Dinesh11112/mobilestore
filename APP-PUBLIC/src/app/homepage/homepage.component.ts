import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(){  }
  pageContent = {
    header: {
      title: 'Mobile List',
      body: 'List of mobiles in the market'
    }
  };

}
