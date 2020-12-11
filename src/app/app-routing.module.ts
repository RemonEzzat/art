import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewArticalComponent } from './component/add-new-artical/add-new-artical.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { SingleArticalComponent } from './component/single-artical/single-artical.component';

const routes: Routes = [
  {path:'newArtical', component:AddNewArticalComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'artical', children: [
    {path:'',component:HomeComponent},
    {path:':id',component:SingleArticalComponent}, //shop/:id
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
