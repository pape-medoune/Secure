import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthGuard } from './guard.guard';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"page" , canActivate:[AuthGuard], component:PageComponent},
  {path:"**", component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
