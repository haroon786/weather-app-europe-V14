import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageControlComponent } from './language-control.component';

describe('LanguageControlComponent', () => {
  let component: LanguageControlComponent;
  let fixture: ComponentFixture<LanguageControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
