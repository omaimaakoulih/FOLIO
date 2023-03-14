import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPortComponent } from './portfolio-port.component';

describe('PortfolioPortComponent', () => {
  let component: PortfolioPortComponent;
  let fixture: ComponentFixture<PortfolioPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioPortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
