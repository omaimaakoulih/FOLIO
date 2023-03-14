import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSkollComponent } from './portfolio-skoll.component';

describe('PortfolioSkollComponent', () => {
  let component: PortfolioSkollComponent;
  let fixture: ComponentFixture<PortfolioSkollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSkollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSkollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
