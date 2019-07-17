import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantprofileComponent } from './restaurantprofile.component';

describe('RestaurantprofileComponent', () => {
  let component: RestaurantprofileComponent;
  let fixture: ComponentFixture<RestaurantprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
