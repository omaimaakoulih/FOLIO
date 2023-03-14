import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDescriptionStepComponent } from './create-description-step.component';

describe('CreateDescriptionStepComponent', () => {
  let component: CreateDescriptionStepComponent;
  let fixture: ComponentFixture<CreateDescriptionStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDescriptionStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDescriptionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
