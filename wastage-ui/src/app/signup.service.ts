import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signupRestaurant(restaurant):Observable<any>{ 
    console.log(restaurant)
    return this.http.post<any>('http://13.234.235.193:8000/registration-service/api/v1/restaurant-profile',restaurant);
  }  

  signupCharity(charity):Observable<any>{ 
    console.log(charity)
    return this.http.post<any>('http://13.234.235.193:8000/registration-service/api/v1/charity-profile',charity);
  }  
}
