import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../servicios/heroes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-get-heroes',
  templateUrl: './get-heroes.component.html'
})
export class GetHeroesComponent implements OnInit {

  heroes:any[] = [];
  termino: string = "";

  constructor(
    private activatedRoute:ActivatedRoute,
    private _heroesServices: HeroesService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesServices.buscarHeroe(params['termino']);
      this.termino = params['termino'];
    });
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe', idx] );
  }

}
