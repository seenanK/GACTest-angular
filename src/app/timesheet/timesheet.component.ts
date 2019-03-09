import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ITimesheet } from './timesheet';
import { IEmployee } from '../employee/employee';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
  timesheets: ITimesheet[];
  errorMessage: any;
  selectedempid: number = 1;
  selecteddate: Date = new Date();
  employees: IEmployee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {   
    this.employeeService.getallemployees()
      .subscribe(data => {
      this.employees = data;
    },
    error => this.errorMessage = <any>error);
    this.selectEmployee();
  }

  selectEmployee() {
    console.log('selectemployee');
    this.employeeService.changeEmployeeID(this.selectedempid)
    this.employeeService.gettimesheet(this.selectedempid, this.selecteddate)
      .subscribe(data => {
      this.timesheets = data;
    },
    error => this.errorMessage = <any>error);
    console.log(JSON.stringify(this.timesheets));
  }

}
