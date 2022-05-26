import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsLibComponent } from './listings-lib.component';

describe('ListingsLibComponent', () => {
  let component: ListingsLibComponent;
  let fixture: ComponentFixture<ListingsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
