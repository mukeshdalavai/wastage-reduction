import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantProfileComponent } from './resturant-profile.component';

describe('ResturantProfileComponent', () => {
  let component: ResturantProfileComponent;
  let fixture: ComponentFixture<ResturantProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
