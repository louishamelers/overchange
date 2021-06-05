import { Routes } from '@angular/router';
import { firebaseNames } from "./firebase.routes.names";
import { FirestoreComponent } from "./firestore/firestore.component";

export const FIREBASE_ROUTES: Routes = [
    {path: firebaseNames.FIRESTORE, component: FirestoreComponent}
]