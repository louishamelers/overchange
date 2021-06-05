import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreComponent } from './firestore/firestore.component';
import { RouterModule } from '@angular/router';
import { FIREBASE_ROUTES } from './firebase.routes';



@NgModule({
  declarations: [
    FirestoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FIREBASE_ROUTES),
  ]
})
export class FirebaseModule { }
