import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddemployeehoursComponent } from './addemployeehours/addemployeehours.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    TimesheetComponent,
    AddemployeehoursComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'employee', component: EmployeeListComponent },
      { path: 'timesheet', component: TimesheetComponent },
      { path: 'employeehours', component: AddemployeehoursComponent },
      { path: '', redirectTo: 'employee', pathMatch: 'full' },
    ]),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
