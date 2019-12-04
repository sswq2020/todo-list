import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './layout/nav/nav.component';
// import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'todo', component: TodoComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/todo', pathMatch: 'full'}
];

// 装饰器@NgModule,用来装饰AppModule类
@NgModule({
  declarations: [ // declarations,用来声明组件,指令,pipe
    AppComponent,
    TodoComponent,
    AboutComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 项目启动从AppComponent开始
})
export class AppModule { }
