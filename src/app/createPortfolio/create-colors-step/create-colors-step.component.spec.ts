import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColorsStepComponent } from './create-colors-step.component';

describe('CreateColorsStepComponent', () => {
  let component: CreateColorsStepComponent;
  let fixture: ComponentFixture<CreateColorsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateColorsStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateColorsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
