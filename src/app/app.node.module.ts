/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './index';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './custom-components/header/header.component';
import { FooterComponent } from './custom-components/footer/footer.component';
import { ServiceComponent } from './custom-components/service/service.component';
import { WebPortalComponent } from './products/web-portal/web-portal.component';
import { HomePhoneComponent } from './products/home-phone/home-phone.component';
import { MobilePhoneComponent } from './products/mobile-phone/mobile-phone.component';


/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */


  declarations: [ AppComponent, HomeComponent, HeaderComponent, FooterComponent, ServiceComponent, WebPortalComponent, HomePhoneComponent, MobilePhoneComponent],

  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * NodeModule, NodeHttpModule, NodeJsonpModule are included
     */
    UniversalModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
    /**
     * using routes
     */
    // RouterModule.forRoot(appRoutes)
  ]
})
export class AppModule {

}
