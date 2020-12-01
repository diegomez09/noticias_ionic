import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-noticia-detalle",
  templateUrl: "./noticia-detalle.page.html",
  styleUrls: ["./noticia-detalle.page.scss"],
})
export class NoticiaDetallePage implements OnInit {
  public noticia: any;

  constructor(private state: ActivatedRoute) {}

  ngOnInit() {
    this.noticia = JSON.parse(this.state.snapshot.params.noticia);
    console.log(this.noticia);
  }
}
