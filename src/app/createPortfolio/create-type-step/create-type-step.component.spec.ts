import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeStepComponent } from './create-type-step.component';

describe('CreateTypeStepComponent', () => {
  let component: CreateTypeStepComponent;
  let fixture: ComponentFixture<CreateTypeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTypeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
