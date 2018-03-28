import {Injectable} from '@angular/core';

@Injectable()
export class StockService {

  constructor() {
  }

  private stocks: Stock[] = [
    new Stock(1, '第一只股票', 1.99, 1.5, '阿花的angular入门项目', ['IT', 'BYD']),
    new Stock(2, '第二只股票', 6.99, 4.5, '阿猫的angular入门项目', ['金融', '互联网']),
    new Stock(3, '第三只股票', 5.99, 2.5, '阿成的angular入门项目', ['IT']),
    new Stock(4, '第四只股票', 1.99, 4.5, '阿晓的angular入门项目', ['IT']),
    new Stock(5, '第五只股票', 7.99, 3.5, '阿猪的angular入门项目', ['金融']),
    new Stock(6, '第六只股票', 3.99, 2.5, '阿撒的angular入门项目', ['IT', '金融']),
    new Stock(7, '第七只股票', 1.99, 3.2, '阿健的angular入门项目', ['互联网']),
    new Stock(8, '第八只股票', 8.99, 2.8, '阿瑞的angular入门项目', ['金融', 'IT'])
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    var stock = this.stocks.find(stock => stock.id == id);
    if (!stock) {
      stock = new Stock(0, '', 0, 0, '', []);
    }
    return stock;
  }
}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
