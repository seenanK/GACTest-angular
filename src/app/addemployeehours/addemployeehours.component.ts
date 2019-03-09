import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-addemployeehours',
  templateUrl: './addemployeehours.component.html',
  styleUrls: ['./addemployeehours.component.scss']
})
export class AddemployeehoursComponent implements OnInit {
  
  empid: number;
  taskid: number;
  hours: number;
  date: Date = new Date();
  tasks: any;
  errorMessage: any;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employeeService.currentEmployeeID.subscribe((empid: any) => this.empid = empid)
    this.employeeService.getalltasks()
      .subscribe(data => {
      this.tasks = data;
    },
    error => this.errorMessage = <any>error);
  }

  Submit () {
    this.employeeService.addemployeehours(this.empid, this.taskid, this.hours, this.date)
    .subscribe(data => {
      this.router.navigate(['/timesheet']);
    },
    error => this.errorMessage = <any>error);      
    };

  
}
