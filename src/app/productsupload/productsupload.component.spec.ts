import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsuploadComponent } from './productsupload.component';

describe('ProductsuploadComponent', () => {
  let component: ProductsuploadComponent;
  let fixture: ComponentFixture<ProductsuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
