import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ConsultComponent } from './consult/consult.component';

const routes: Routes = [
  // 重定向路由: full: 完全匹配， prefix: 只要开始字符匹配就可以
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},

  {path: 'consult', component: ConsultComponent, outlet: 'aux'},

  // 路由传参 方法1： 在routerLink 的 tag 里加入 queryParams属性作为参数
  // {path: 'stock/', component: StockComponent},

  // 路由传参 方法2： 在routerLink 里直接加入 /:id 作为参数id
  // {path: 'stock/:id', component: StockComponent},

  // 路由传参 方法3： 在路由配置时（app-routing）直接传入固定数据
  {path: 'stock/:id', component: StockComponent, data: [{isPro: true}], children: [
    {path: '', component: BuyerListComponent},
    {path: 'seller/:id', component: SellerListComponent}
  ]},

  // ** lead to all url except '', and 'stock'. Should set at end of the Routes
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
