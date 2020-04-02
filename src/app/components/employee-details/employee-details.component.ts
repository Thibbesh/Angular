import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input()
  details: Employee;

  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closePopup() {
    this.close.emit();
  }

}
