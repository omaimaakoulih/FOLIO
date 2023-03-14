import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio2ServicesComponent } from './portfolio2-services.component';

describe('Portfolio2ServicesComponent', () => {
  let component: Portfolio2ServicesComponent;
  let fixture: ComponentFixture<Portfolio2ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Portfolio2ServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio2ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
