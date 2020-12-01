import { Component, OnInit } from "@angular/core";
import { NoticiasService } from "../providers/noticiasService/noticias.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-listado-noticias",
  templateUrl: "./listado-noticias.page.html",
  styleUrls: ["./listado-noticias.page.scss"],
})
export class ListadoNoticiasPage implements OnInit {
  public news: any;

  constructor(
    private _noticiasService: NoticiasService,
    private router: Router
  ) {}

  ngOnInit() {
    this._noticiasService.getNews().subscribe(
      (noticias) => {
        //console.log(noticias);
        this.news = noticias;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  detalles(noticia) {
    //console.log(noticia);
    this.router.navigate([
      "noticia-detalle",
      { noticia: JSON.stringify(noticia) },
    ]);
  }

  delete(noticiaID: Number) {
    this._noticiasService.deleteNew(noticiaID).subscribe(() => {
      console.log("borrado");
      this.ngOnInit();
    });
  }
}
