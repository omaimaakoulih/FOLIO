import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio2SkillsServicesComponent } from './portfolio2-skills-services.component';

describe('Portfolio2SkillsServicesComponent', () => {
  let component: Portfolio2SkillsServicesComponent;
  let fixture: ComponentFixture<Portfolio2SkillsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Portfolio2SkillsServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio2SkillsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
