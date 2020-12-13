import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddArtical } from '../Model/artical.model';

@Injectable({
  providedIn: 'root'
})
export class ArticalService {
  defaultUrl = "http://localhost:3000/"
  constructor(private _http:HttpClient) { 
  }
  addArtical(articalData:AddArtical):Observable<any>{
    return this._http.post(`${this.defaultUrl}articals/add`, articalData)
  }
  getArtical():Observable<any>{
    return this._http.get(`${this.defaultUrl}articals`)
  }
  getSingle(id):Observable<any>{
    return this._http.get(`${this.defaultUrl}articals&articalID=${id}`)
   
  }
}
