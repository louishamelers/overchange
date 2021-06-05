import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.scss']
})
export class FirestoreComponent implements OnInit {

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection("testCollection")
      .get()
      .subscribe((ss) => {
        console.log(ss);
        ss.docs.forEach((doc) => {
          console.log(doc.data());
        });
      });
  }

}
