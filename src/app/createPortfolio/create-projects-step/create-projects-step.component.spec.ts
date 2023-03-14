import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectsStepComponent } from './create-projects-step.component';

describe('CreateProjectsStepComponent', () => {
  let component: CreateProjectsStepComponent;
  let fixture: ComponentFixture<CreateProjectsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectsStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjectsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
