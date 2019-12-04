import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AboutComponent] // 声明导出模块
})
export class AboutModule { }
