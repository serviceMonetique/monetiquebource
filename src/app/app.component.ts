import { Component } from '@angular/core';
import {Firestore,collection,addDoc,CollectionReference} from "@angular/fire/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monetiquebource';
  user : any = {
    n_carte : "",
    n_cin : "",
    password : "",
  }
  private collections: CollectionReference;
  constructor(private firestore : Firestore) {
    this.collections = collection(this.firestore, 'users')
  }
  payer() {
    console.log(this.user);
    alert("Paiement effectué avec succès");
    const collenctInst = collection(this.collections,"users");
    addDoc(collenctInst,this.user).then((data)=>console.log(data)).catch((err)=>console.log(err));
  }
}
