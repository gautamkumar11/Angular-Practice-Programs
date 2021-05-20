import { Injectable } from "@angular/core";
import{ HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from "./user";
import { catchError }  from "rxjs/operators";
import  {  throwError }  from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EnrollmentService{

    _url: string = 'http://localhost:3000/enroll';

    constructor(private _http: HttpClient){
    }

    Enroll(user : User){
       return  this._http.post<any>(this._url, user)
                .pipe(catchError(this.errorHandler))
    }
    errorHandler(error : HttpErrorResponse){
        return throwError(error);
    }
}