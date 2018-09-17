import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCodeComponent } from './slider-code.component';

describe('SliderCodeComponent', () => {
  let component: SliderCodeComponent;
  let fixture: ComponentFixture<SliderCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
