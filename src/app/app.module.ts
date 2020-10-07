import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule,} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalDialog, UserComponent } from './components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from 'src/material.module';
import { MyServiceService } from './my-service.service';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import {MatTableModule} from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UsernotfoundComponent } from './components/usernotfound/usernotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserdetailsComponent,
    UserlistComponent,
    CreateuserComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    UsernotfoundComponent,
    ModalDialog

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // MatInputModule
    DemoMaterialModule,
    HttpClientModule,

    MatTableModule,
    // MatTable,
    MatDialogModule,
    MatButtonModule

    // AgmMap,
    // MouseEvent,
    // MapsAPILoader

  ],
  providers: [,MyServiceService],
  entryComponents:[ModalDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
