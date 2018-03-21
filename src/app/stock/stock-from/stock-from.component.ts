import {Component, OnInit} from '@angular/core';
import {Stock} from '../stock-manage/stock-manage.component';
import {ActivatedRoute, Router} from '@angular/router';
import {StockService} from '../stock.service';

@Component({
  selector: 'app-stock-from',
  templateUrl: './stock-from.component.html',
  styleUrls: ['./stock-from.component.css']
})
export class StockFromComponent implements OnInit {

  stock: Stock;

  constructor(private routeInfo: ActivatedRoute, private stockService: StockService,
              private router: Router) {
  }

  ngOnInit() {
    let stockId = this.routeInfo.snapshot.params['id'];
    this.stock = this.stockService.getStock(stockId);
    /*this.stock = new Stock(1, 'SONY', 7.99, 3.5, '阿健的angular入门项目', ['IT', 'BYD']);*/
  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
    console.log(this.stock.rating);
    this.router.navigateByUrl('/stock');
  }
}
