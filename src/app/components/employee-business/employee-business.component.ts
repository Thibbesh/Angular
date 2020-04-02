import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-employee-business',
  templateUrl: './employee-business.component.html',
  styleUrls: ['./employee-business.component.scss']
})
export class EmployeeBusinessComponent implements OnInit {
  employeeList: Employee[];
  selectedEmployee: Employee;
  showDetails: boolean = false;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getBusinessEmployees().subscribe((data) => {
      this.employeeList = data['employees'];
    });
  }

  openDetails(person) {
    if (!this.showDetails) {
      this.selectedEmployee = person;
      this.showDetails = true;
    }
  }

  closeDetails() {
    this.showDetails = false;
  }

}
