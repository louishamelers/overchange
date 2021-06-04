import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'overchange';

  constructor(private firestore: AngularFirestore) {
  }

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
