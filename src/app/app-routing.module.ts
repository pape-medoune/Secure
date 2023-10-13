import { NgModule, , component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"page" , component:PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
