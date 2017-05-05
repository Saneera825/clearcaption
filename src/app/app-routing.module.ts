import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { WebPortalComponent } from "./products/web-portal/web-portal.component";
import { HomePhoneComponent } from "./products/home-phone/home-phone.component";
import { MobilePhoneComponent } from "./products/mobile-phone/mobile-phone.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'products/web-portal',
    component: WebPortalComponent,
    pathMatch: 'full'
  },
  {
    path: 'products/home-phone',
    component: HomePhoneComponent,
    pathMatch: 'full'
  },
    {
    path: 'products/mobile-phone',
    component: MobilePhoneComponent,
    pathMatch: 'full'
  },

  {
    path: 'products',
    component: HomeComponent,
    pathMatch: 'full'
  },

   {
    path: '**',
    component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
