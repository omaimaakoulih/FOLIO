import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicComponenetComponent } from './servic-componenet.component';

describe('ServicComponenetComponent', () => {
  let component: ServicComponenetComponent;
  let fixture: ComponentFixture<ServicComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicComponenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
