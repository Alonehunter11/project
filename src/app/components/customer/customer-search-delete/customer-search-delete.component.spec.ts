import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSearchDeleteComponent } from './customer-search-delete.component';

describe('CustomerSearchDeleteComponent', () => {
  let component: CustomerSearchDeleteComponent;
  let fixture: ComponentFixture<CustomerSearchDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSearchDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSearchDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
