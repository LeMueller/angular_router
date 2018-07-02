import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stockId: number;

  private isPro: boolean;

  private focus: boolean = false;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // 路由传参 方法1 在routerLink 的 tag 里加入 queryParams属性作为参数
    // this.stockId = this.routeInfo.snapshot.queryParams["id"];

    
    // 参数订阅。同一组件内改变参数，也会被调用
    this.routeInfo.params.subscribe((params: Params) => this.stockId = params["id"]);

  // 路由传参 方法3： 在路由配置时（app-routing）直接传入固定数据
    this.isPro = this.routeInfo.snapshot.data[0]["isPro"];
    
    // 路由传参 方法2： 在routerLink 里直接加入 /:id 作为参数id。 若果是同一组件内改变参数，不会被重新init，也就不会执行这个命令。
    // 参数快照。snapshot 更节约资源
    // this.stockId = this.routeInfo.snapshot.params["id"];
  }

  isFocus() {
    return this.focus;
  }

}
