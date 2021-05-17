import { Injectable } from "@angular/core";
import{ HttpClient } from '@angular/common/http';
import { User } from "./user";

@Injectable({
    providedIn: 'root'
})
export class EnrollmentService{

    _url: string = '';

    constructor(private _http: HttpClient){
    }

    Enroll(user : User){
       return  this._http.post<any>(this._url, user)
    }
}