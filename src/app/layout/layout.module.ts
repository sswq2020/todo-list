import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule // 这里layout模块为什么要引入RouterModule,因为该模块下的NavComponent里的模板用到RouterModule对外暴露的指令routerLink,routerLinkActive
  ],
  exports: [NavComponent]
})
export class LayoutModule { }
