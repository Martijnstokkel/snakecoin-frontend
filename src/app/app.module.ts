import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestScoreManager } from './app.storage.service';
import { AccountcreateComponent } from 'src/app/accountcreate/accountcreate/accountcreate.component';
import { HoofdmenuComponent } from './hoofdmenu/hoofdmenu/hoofdmenu.component';
import { AanmeldenComponent } from './aanmelden/aanmelden/aanmelden.component';
import { SnakeComponent } from './snake/snake/snake.component';
import { CookieService } from 'ngx-cookie-service';
import { UserpageComponent } from './userpage/userpage.component'
@NgModule({
  declarations: [
    AppComponent,
    AccountcreateComponent,
    HoofdmenuComponent,
    AanmeldenComponent,
    SnakeComponent,
    UserpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [ 
    BestScoreManager,
    CookieService

  ],

  bootstrap: [AppComponent],
 
})
export class AppModule { }
