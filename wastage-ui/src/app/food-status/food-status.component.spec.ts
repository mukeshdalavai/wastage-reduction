import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodStatusComponent } from './food-status.component';

describe('FoodStatusComponent', () => {
  let component: FoodStatusComponent;
  let fixture: ComponentFixture<FoodStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
