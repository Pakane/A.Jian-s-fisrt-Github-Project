import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFromComponent } from './stock-from.component';

describe('StockFromComponent', () => {
  let component: StockFromComponent;
  let fixture: ComponentFixture<StockFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
