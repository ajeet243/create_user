import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserComponent } from './components/user/user.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UserlistComponent } from './components/userlist/userlist.component';


const routes: Routes = [
  { path:'' , component:UserComponent},
  { path: 'user', component:UserComponent},
  { path: 'user/:id', component:UserComponent},
  { path:'userlist', component:UserlistComponent},
  { path:'userdetails/:id', component:UserdetailsComponent},
  { path:'createuser', component:CreateuserComponent},
  { path: 'update_user', component:UpdateuserComponent},
  { path: 'deleteuser', component:DeleteuserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
