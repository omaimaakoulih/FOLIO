import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioServicesComponent } from './portfolio-services.component';

describe('PortfolioServicesComponent', () => {
  let component: PortfolioServicesComponent;
  let fixture: ComponentFixture<PortfolioServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
