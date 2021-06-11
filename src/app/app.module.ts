import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { SETTINGS } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
    RouterModule.forRoot(ROUTES, {
      scrollPositionRestoration: 'enabled',
      enableTracing: false
    }),
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: SETTINGS,
      useValue: environment.production ? undefined : {
        host: 'localhost:8080',
        ssl: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
