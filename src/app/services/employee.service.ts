import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IEmployee } from '../employee/employee';
import { ITimesheet } from '../timesheet/timesheet';

@Injectable()
export class EmployeeService {
    private baseapi = environment.apiUrl;

    private messageSource = new BehaviorSubject(0);
    currentEmployeeID = this.messageSource.asObservable();
    
    constructor(private http: HttpClient) { }

    changeEmployeeID(employeeid: any) {
      this.messageSource.next(employeeid)
    }

    getallemployees() {
        return this.http.get<IEmployee[]>(this.baseapi + "/employee/getall").pipe(
          tap(data => console.log('getallemployees')),
          catchError(this.handleError)
        );
    }    

    gettimesheet(empid: number, date: Date) {    
        var body = {  
          EmployeeID: empid, 
          ScheduleDate: date 
        }      
        return this.http.post<ITimesheet[]>(this.baseapi + "/timesheet/getemployeetimesheet", body).pipe(
          tap(data => console.log('gettimesheet')),
          catchError(this.handleError)
        );       
    }  

    getalltasks() {
      return this.http.get(this.baseapi + "/timesheet/getalltasks").pipe(
        tap(data => console.log('getalltasks')),
        catchError(this.handleError)
      );
    }

    addemployeehours(empid: number, taskid: number, hours: number, date: Date) {    
      var body = {  
        EmployeeID: empid, 
        TaskID: taskid,
        Hours: hours,
        Date: date 
      }      
      return this.http.post<ITimesheet[]>(this.baseapi + "/timesheet/addtimesheet", body).pipe(
        tap(data => console.log('addemployeehours')),
        catchError(this.handleError)
      ); 
         
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
}