import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { StartComponent } from './start/start.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    StartComponent
  ]
})
export class SharedModule { }
