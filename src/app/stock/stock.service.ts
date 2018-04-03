import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StockService {


  constructor(public http: HttpClient) {
  }

  getStocks(): Observable<any> {
    return this.http.get('/api/stock');
  }

  getStock(id: number): Observable<any> {
    return this.http.get('/api/stock/' + id);
  }
}

