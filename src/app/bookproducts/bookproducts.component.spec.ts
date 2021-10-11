import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookproductsComponent } from './bookproducts.component';

describe('BookproductsComponent', () => {
  let component: BookproductsComponent;
  let fixture: ComponentFixture<BookproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
