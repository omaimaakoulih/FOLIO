import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePortfoliosStepComponent } from './create-portfolios-step.component';

describe('CreatePortfoliosStepComponent', () => {
  let component: CreatePortfoliosStepComponent;
  let fixture: ComponentFixture<CreatePortfoliosStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePortfoliosStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePortfoliosStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
