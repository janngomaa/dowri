import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {AF} from "./providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { TchatComponent } from './tchat/tchat.component';



// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCBrUnDsAlFz-NzgG9c1ZnGpNPfjzsC_xk",
  authDomain: "dowri-8b462.firebaseapp.com",    
  databaseURL: "https://dowri-8b462.firebaseio.com",
  storageBucket: "dowri-8b462.appspot.com",
  messagingSenderId: "710942696424"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'tchat', component: TchatComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    HomePageComponent,
    RegistrationPageComponent,
    TchatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})

export class AppModule { }