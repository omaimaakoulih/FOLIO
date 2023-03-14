import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio2PortComponent } from './portfolio2-port.component';

describe('Portfolio2PortComponent', () => {
  let component: Portfolio2PortComponent;
  let fixture: ComponentFixture<Portfolio2PortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Portfolio2PortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio2PortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
