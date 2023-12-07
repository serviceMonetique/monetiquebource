import { Component } from '@angular/core';
import {Firestore,collection,addDoc} from "firebase/firestore";

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
  constructor(private firestore : Firestore) {
  }
  payer() {
    console.log(this.user);
    alert("Paiement effectué avec succès");
    const collenctInst = collection(this.firestore,"users");
    addDoc(collenctInst,this.user).then((data)=>console.log(data)).catch((err)=>console.log(err));
  }
}
