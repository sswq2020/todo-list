import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  { path: 'todo', component: TodoComponent},
  { path: 'todo/:id', component: DetailComponent},
  { path: 'about', loadChildren: './about/about.module#AboutModule'},
  { path: '', redirectTo: '/todo', pathMatch: 'full'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)], // forRoot是RouterModule的静态方法,用于所有模块的路由规则。还有一个forChild用于单独一个模块的路由规则
  exports: [RouterModule]
})
export class AppRoutingModule { }
