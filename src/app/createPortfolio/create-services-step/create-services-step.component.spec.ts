import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServicesStepComponent } from './create-services-step.component';

describe('CreateServicesStepComponent', () => {
  let component: CreateServicesStepComponent;
  let fixture: ComponentFixture<CreateServicesStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServicesStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateServicesStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
