import { Routes } from "@angular/router";
import { demoNames } from "./modules/demo/demo.routes.names";
import { firebaseNames } from "./modules/firebase/firebase.routes.names";

export const ROUTES: Routes = [
    {path: firebaseNames.ROOT, loadChildren: () => import('./modules/firebase/firebase.module').then(module => module.FirebaseModule)},
    {path: demoNames.ROOT, loadChildren: () => import('./modules/demo/demo.module').then(module => module.DemoModule)}
]