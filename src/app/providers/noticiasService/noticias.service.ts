import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _httpService:HttpClient) { }

  getNews():Observable<any>{
    return this._httpService.get<any>('https://localhost:44386/api/noticia/obtener');
  }

  specificNew(NoticiaID:Number):Observable<any>{
    return this._httpService.get<any>(`https://localhost:44386/api/noticia/${NoticiaID}`)
  }

  deleteNew(NoticiaID:Number):Observable<any>{
    console.log(NoticiaID);
    return this._httpService.delete<boolean>(`https://localhost:44386/api/noticia/eliminar/${NoticiaID}`)
  }
}
