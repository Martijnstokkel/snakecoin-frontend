import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountcreateComponent } from './accountcreate/accountcreate/accountcreate.component';
import { AanmeldenComponent } from './aanmelden/aanmelden/aanmelden.component';
import { SnakeComponent } from './snake/snake/snake.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  {path: "snake", component: SnakeComponent},
  {path: "aanmelden", component: AanmeldenComponent},
  {path: "Userpage", component: UserpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
