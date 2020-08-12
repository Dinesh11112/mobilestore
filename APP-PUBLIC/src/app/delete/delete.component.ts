import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MobileServiceService } from '../mobile-service.service';
import { Mobile } from '../mobile';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[MobileServiceService]
})
export class DeleteComponent implements OnInit {
  newMobile: Mobile;
  constructor(private mobileDataService: MobileServiceService,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.mobileDataService.deleteMobile(params['mobileid'])
      })
      )
      .subscribe((newMobile: Mobile) => {
        this.newMobile = newMobile;
      });
  }

}

