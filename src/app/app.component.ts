import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {

  }

  toStockDetail() {
    // 路由传参 方法2： 在routerLink 里直接加入 /:id 作为参数id
    this.router.navigate(['/stock', 5]);
  }
}
