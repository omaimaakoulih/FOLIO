import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactsStepComponent } from './create-contacts-step.component';

describe('CreateContactsStepComponent', () => {
  let component: CreateContactsStepComponent;
  let fixture: ComponentFixture<CreateContactsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateContactsStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateContactsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
