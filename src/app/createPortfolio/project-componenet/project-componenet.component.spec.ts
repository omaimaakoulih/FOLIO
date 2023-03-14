import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponenetComponent } from './project-componenet.component';

describe('ProjectComponenetComponent', () => {
  let component: ProjectComponenetComponent;
  let fixture: ComponentFixture<ProjectComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectComponenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
