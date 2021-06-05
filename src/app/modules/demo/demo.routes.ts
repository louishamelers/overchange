import { Routes } from "@angular/router";
import { demoNames } from "./demo.routes.names";
import { DemoComponent } from "./demo/demo.component";

export const DEMO_ROUTES: Routes = [
    {path: demoNames.DEMO, component: DemoComponent}
]