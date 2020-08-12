import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HomeListComponent } from './home-list/home-list.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
@NgModule({
  declarations: [
    HomeListComponent,
    AboutComponent,
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    CreateComponent,
    DetailsPageComponent,
    DeleteComponent,
    UpdateComponent,
    MainhomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'home',
        component: HomepageComponent
      },
      {
        path:'',
        component:MainhomeComponent
      },
      {
        path:'create',
        component: CreateComponent
      },
      {
        path:'mobile/:mobileid',
        component: DetailsPageComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'delete/:mobileid',
        component:DeleteComponent
      },
      {
        path:'update/:mobileid',
        component:UpdateComponent
      }
    ]),
    FormsModule
  ],
  bootstrap: [FrameworkComponent],
  providers: [{provide: APP_BASE_HREF,useValue:'/'}]
  
})
export class AppModule { }
