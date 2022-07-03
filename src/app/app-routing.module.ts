import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"form", component:FormComponent},
  {path:"", component:AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [FormComponent];
