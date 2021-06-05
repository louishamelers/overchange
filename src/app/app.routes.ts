import { Routes } from "@angular/router";
import { firebaseNames } from "./modules/firebase/firebase.routes.names";

export const ROUTES: Routes = [
    {path: firebaseNames.ROOT, loadChildren: () => import('./modules/firebase/firebase.module').then(module => module.FirebaseModule)}
]