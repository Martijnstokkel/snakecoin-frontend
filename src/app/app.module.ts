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
import { UserpageComponent } from './userpage/userpage.component';
import { WiebenikComponent } from './component/wiebenik/wiebenik.component';
import { OpleidingenComponent } from './component/opleidingen/opleidingen.component';
import { HobbyComponent } from './component/hobby/hobby.component';
import { FrontendComponent } from './component/frontend/frontend.component';
import { BackendComponent } from './component/backend/backend.component';
import { FrameworksComponent } from './component/frameworks/frameworks.component';
import { OverigeComponent } from './component/overige/overige.component';
import { HomeComponent } from './component/home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    AccountcreateComponent,
    HoofdmenuComponent,
    AanmeldenComponent,
    SnakeComponent,
    UserpageComponent,
    WiebenikComponent,
    OpleidingenComponent,
    HobbyComponent,
    FrontendComponent,
    BackendComponent,
    FrameworksComponent,
    OverigeComponent,
    HomeComponent,
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
