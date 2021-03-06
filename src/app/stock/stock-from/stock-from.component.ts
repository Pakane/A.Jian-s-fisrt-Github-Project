import {Component, OnInit} from '@angular/core';
import {Stock} from '../stock-manage/stock-manage.component';
import {ActivatedRoute, Router} from '@angular/router';
import {StockService} from '../stock.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stock-from',
  templateUrl: './stock-from.component.html',
  styleUrls: ['./stock-from.component.css']
})
export class StockFromComponent implements OnInit {

  formModel: FormGroup;

  stock: Stock=new Stock(0,'',0,0,'',[]);

  categories = ['IT', '金融', '互联网'];

  constructor(private routeInfo: ActivatedRoute, private stockService: StockService,
              private router: Router) {
  }

  ngOnInit() {
    let stockId = this.routeInfo.snapshot.params['id'];
    /*this.stock = new Stock(1, 'SONY', 7.99, 3.5, '阿健的angular入门项目', ['IT', 'BYD']);*/

    let fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: ['', [Validators.required, this.notZero]],
        desc: [''],
        categories: fb.array([
          new FormControl(false),
          new FormControl(false),
          new FormControl(false),
        ], this.categoriesSelectValidator)
      }
    );

    this.stockService.getStock(stockId).subscribe(
      data => {
        this.stock = data;
        this.formModel.reset({
          name: data.name,
          price:data.price,
          desc:data.desc,
          categories:[
            data.categories.indexOf(this.categories[0])!=-1,
            data.categories.indexOf(this.categories[1])!=-1,
            data.categories.indexOf(this.categories[2])!=-1,
          ]
        })
      }
    );

  }

  notZero(price: FormControl): any {
    let valid = false;
    if (price.value == 0) {
      valid = true;
    }
    if (valid) {
      return {valueNotZero: true};
    } else {
      return null;
    }
  }

  categoriesSelectValidator(control: FormArray) {
    var valid = false;
    control.controls.forEach(control => {
      if (control.value) {
        valid = true;
      }
    });
    if (valid) {
      return null;
    } else {
      return {categoriesLength: true};
    }
  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
    //console.log(this.stock.rating);
    var chineseCategories = [];
    var index = 0;
    for (var i = 0; i < 3; i++) {
      if (this.formModel.value.categories[i]) {
        chineseCategories[index++] = this.categories[i];
      }
    }
    this.formModel.value.rating = this.stock.rating;
    this.formModel.value.categories = chineseCategories;
    console.log(this.formModel.value);
    //this.router.navigateByUrl('/stock');
  }
}
