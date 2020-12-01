import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../providers/autoresService/autores.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  titulo:String;
  descripcion:String;
  contenido:String;
  myDate :String;
  autores:any []
  noticia:any;
  constructor(private _autorService:AutoresService) { }

  ngOnInit() {
    this.myDate = new Date().toISOString();
    this._autorService.getAuthors().subscribe((authors) =>{
      this.autores = authors;
      console.log(this.autores);
    })
  }

}
