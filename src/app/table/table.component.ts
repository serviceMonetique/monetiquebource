import { Component } from '@angular/core';
import {Firestore,collection,collectionGroup} from "firebase/firestore";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  users :any;
  constructor(private firestore : Firestore) {
    this.getData();
  }
  getData(){
    const collenctInst = collection(this.firestore,"users");
    this.users = collectionGroup(this.firestore,"users")
    console.log(this.users);
  }


}
