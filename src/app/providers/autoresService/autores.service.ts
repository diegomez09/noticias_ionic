import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(private _httpService:HttpClient) { }

  getAuthors():Observable<any>{
    return this._httpService.get<any>('https://localhost:44386/api/autor/obtener');
  }
}
