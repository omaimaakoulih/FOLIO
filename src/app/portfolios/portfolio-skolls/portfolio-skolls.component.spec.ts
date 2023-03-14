import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSkollsComponent } from './portfolio-skolls.component';

describe('PortfolioSkollsComponent', () => {
  let component: PortfolioSkollsComponent;
  let fixture: ComponentFixture<PortfolioSkollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSkollsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSkollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
