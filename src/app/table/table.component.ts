import { Component } from '@angular/core';
import {Firestore,collection,collectionData} from "@angular/fire/firestore";

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
    collectionData(collenctInst).subscribe((data)=>
    {
      this.users = data;
      console.log(data);
    });
  }


}
