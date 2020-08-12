import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MobileServiceService } from '../mobile-service.service';
import { Mobile } from '../mobile';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [MobileServiceService]
})
export class DetailsPageComponent implements OnInit {
  newMobile: Mobile;
  constructor(private mobileDataService: MobileServiceService,
    private route: ActivatedRoute,private router: Router,private ngZone: NgZone) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.mobileDataService.getSingleMobile(params['mobileid'])
      })
      )
      .subscribe((newMobile: Mobile) => {
        this.newMobile = newMobile;
        this.pageContent.header.title = newMobile.name;
        this.pageContent.header.body = "details for selected mobile";
      });
  }
pageContent = {
  header: {
    title:'',
    body:''

  }
};

public deleteThisMobile(newMobile: Mobile): void {
  this.mobileDataService.deleteMobile(newMobile._id).then((deletedMobile: Mobile) => {
    this.ngZone.run(() => {
      this.router.navigate(['/home']);
    });
  })
}

}
