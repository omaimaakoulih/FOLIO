import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReactiveFormsComponent } from './test-reactive-forms.component';

describe('TestReactiveFormsComponent', () => {
  let component: TestReactiveFormsComponent;
  let fixture: ComponentFixture<TestReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestReactiveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
