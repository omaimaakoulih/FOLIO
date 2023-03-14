import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSkillsStepComponent } from './create-skills-step.component';

describe('CreateSkillsStepComponent', () => {
  let component: CreateSkillsStepComponent;
  let fixture: ComponentFixture<CreateSkillsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSkillsStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSkillsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
