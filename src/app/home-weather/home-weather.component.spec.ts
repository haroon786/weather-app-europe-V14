import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWeatherComponent } from './home-weather.component';

describe('HomeWeatherComponent', () => {
  let component: HomeWeatherComponent;
  let fixture: ComponentFixture<HomeWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
