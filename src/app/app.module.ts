import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { NavComponent } from './layout/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';

// 装饰器@NgModule,用来装饰AppModule类
@NgModule({
  declarations: [ // declarations,用来声明组件,指令,pipe
    AppComponent,
    TodoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 项目启动从AppComponent开始
})
export class AppModule { }
