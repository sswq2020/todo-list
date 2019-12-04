import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NavComponent]
})
export class LayoutModule { }
