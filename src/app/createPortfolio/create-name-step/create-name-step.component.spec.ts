import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNameStepComponent } from './create-name-step.component';

describe('CreateNameStepComponent', () => {
  let component: CreateNameStepComponent;
  let fixture: ComponentFixture<CreateNameStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNameStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNameStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
