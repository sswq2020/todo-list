import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // 用于表单的双向绑定
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { NavComponent } from './layout/nav/nav.component';
import { BtnComponent } from './layout/btn/btn.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DetailComponent } from './detail/detail.component';

import { TodoService } from './providers/todo.service';
import { PeopleService } from './providers/people.service';
import { CategoryPipe } from './pipes/category.pipe';
import { MyInterceptorService } from './providers/interceptor.service';

import {clock, people} from './reducers';
import {StoreModule} from '@ngrx/store';

// 装饰器@NgModule,用来装饰AppModule类
@NgModule({
  declarations: [ // declarations,用来声明组件,指令,pipe
    AppComponent,
    TodoComponent,
    NavComponent,
    CreateTodoComponent,
    TodoListComponent,
    DetailComponent,
    CategoryPipe,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({clock,people})
  ],
  providers: [TodoService, PeopleService, {provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true}],
  bootstrap: [AppComponent] // 项目启动从AppComponent开始
})
export class AppModule { }
