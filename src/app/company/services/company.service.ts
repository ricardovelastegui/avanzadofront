import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { UserStorageService } from 'src/app/basic/services/storage/user-storage.service';

import { Observable } from 'rxjs';
const BASIC_URL = "http://localhost:8090/";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }


  postAd(adDTO:any): Observable<any>{
    const userId = UserStorageService.getUserId();
    return this.http.post(BASIC_URL + `api/company/ad/${userId}`, adDTO, {
      headers: this.createAuthorizationHeader()
    })
  }

  getAllAdsByUserId(): Observable<any>{
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/company/ads/${userId}`, {
      headers: this.createAuthorizationHeader()
    })
  }
  

  createAuthorizationHeader(): HttpHeaders{
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer' + UserStorageService.getToken() 
    )
  }
}
