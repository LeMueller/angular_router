import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  // 路由传参 方法1： 在routerLink 的 tag 里加入 queryParams属性作为参数
  // {path: 'stock/', component: StockComponent},

  // 路由传参 方法2： 在routerLink 里直接加入 /:id 作为参数id
  // {path: 'stock/:id', component: StockComponent},

  // 路由传参 方法3： 在路由配置时（app-routing）直接传入固定数据
  {path: 'stock/:id', component: StockComponent, data: [{isPro: true}]},

  // ** lead to all url except '', and 'stock'. Should set at end of the Routes
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
