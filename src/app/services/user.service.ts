import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User, LoginUser } from '../Model/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  defaultUrl = "http://localhost:3000/"
  constructor(private _http:HttpClient) { }
  signUp(user:User):Observable<any>{
    return this._http.post(`${this.defaultUrl}user/add`,user)
  }
  login(user:LoginUser):Observable<any>{
    return this._http.post(`${this.defaultUrl}login`,user)
  }
}
