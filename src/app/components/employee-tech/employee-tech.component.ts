import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-employee-tech',
  templateUrl: './employee-tech.component.html',
  styleUrls: ['./employee-tech.component.scss']
})
export class EmployeeTechComponent implements OnInit {
  employeeList: Employee[];
  selectedEmployee: Employee;
  showDetails: boolean = false;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getTechEmployees().subscribe((data) => {
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
