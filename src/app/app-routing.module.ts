import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stock', component: StockComponent},
  // ** lead to all url except '', and 'stock'. Should set at end of the Routes
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
