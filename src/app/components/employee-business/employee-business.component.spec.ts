import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBusinessComponent } from './employee-business.component';

describe('EmployeeBusinessComponent', () => {
  let component: EmployeeBusinessComponent;
  let fixture: ComponentFixture<EmployeeBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
