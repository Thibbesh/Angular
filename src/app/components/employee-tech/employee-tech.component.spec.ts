import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTechComponent } from './employee-tech.component';

describe('EmployeeTechComponent', () => {
  let component: EmployeeTechComponent;
  let fixture: ComponentFixture<EmployeeTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
