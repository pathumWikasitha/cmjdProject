import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeailsComponent } from './product-deails.component';

describe('ProductDeailsComponent', () => {
  let component: ProductDeailsComponent;
  let fixture: ComponentFixture<ProductDeailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDeailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
