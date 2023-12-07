import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TableComponent } from './table/table.component';
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {provideFirebaseApp} from "@angular/fire/app";
import {provideFirestore} from "@angular/fire/firestore";
import {environment} from "../environments/environments";
@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
