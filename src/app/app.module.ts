// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {NguiDatetimePickerModule} from '@ngui/datetime-picker';
import {ColorPickerModule} from 'angular4-color-picker';
import {FileUploaderModule} from "ng4-file-upload/file-uploader.module";

// Components
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './users/user-detail.component';
import {DashboardComponent} from './dashboard.component';
import {UserAddComponent} from './users/user-add.component';
import {UserUpdateComponent} from './users/user-update.component';
import {MarqueComponent} from './marques/marque.component';
import {MarqueDetailComponent} from './marques/marque-detail.component';
import {MarqueUpdateComponent} from './marques/marque-update.component';
import {MarqueAddComponent} from './marques/marque-add.component';
import {TextEditorComponent} from './text-editor/text-editor.component';


// Services
import {UserService} from './users/user.service';
import {MarqueService} from './marques/marque.service';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    DashboardComponent,
    UserAddComponent,
    UserUpdateComponent,
    MarqueComponent,
    MarqueDetailComponent,
    MarqueUpdateComponent,
    MarqueAddComponent,
    TextEditorComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NguiDatetimePickerModule,
    FileUploaderModule,
    ColorPickerModule
  ],
  providers: [UserService, MarqueService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
