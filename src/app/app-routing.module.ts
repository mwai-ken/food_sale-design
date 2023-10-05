import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { SalesComponent } from './sales/sales.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
{path:"",redirectTo:'home',pathMatch:'full'},
{path:'home', component:FirstPageComponent},

  {path:'about', component:SecondPageComponent},
  {path:'collection', component:ThirdPageComponent},
  {path:'sales', component:SalesComponent},
  {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
