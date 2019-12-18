import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountcreateComponent } from './accountcreate/accountcreate/accountcreate.component';
import { AanmeldenComponent } from './aanmelden/aanmelden/aanmelden.component';
import { SnakeComponent } from './snake/snake/snake.component';
import { UserpageComponent } from './userpage/userpage.component';
import { HoofdmenuComponent } from './hoofdmenu/hoofdmenu/hoofdmenu.component';
import { WiebenikComponent } from './component/wiebenik/wiebenik.component';
import { OpleidingenComponent } from './component/opleidingen/opleidingen.component';
import { FrontendComponent } from './component/frontend/frontend.component';
import { BackendComponent } from './component/backend/backend.component';
import { FrameworksComponent } from './component/frameworks/frameworks.component';
import { OverigeComponent } from './component/overige/overige.component';
import { HobbyComponent } from './component/hobby/hobby.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {path: "hoofdmenu", component: HoofdmenuComponent},
  {path: "snake", component: SnakeComponent},
  {path: "aanmelden", component: AanmeldenComponent},
  {path: "Userpage", component: UserpageComponent},
  {path: "wiebenik", component: WiebenikComponent},
  {path: "opleidingen", component: OpleidingenComponent},
  {path: "frontend", component: FrontendComponent},
  {path: "backend", component: BackendComponent},
  {path: "framework", component: FrameworksComponent},
  {path: "overige", component: OverigeComponent},
  {path: "hobby", component: HobbyComponent},
  {path: "home" , component:HomeComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  
})
export class AppRoutingModule {
  
 }
