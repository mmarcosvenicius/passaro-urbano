import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/core/models/oferta.model';
import { OfertasService } from 'src/app/core/services/ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {
  ofertas!: Oferta[]
  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante')
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
    })
  }

}
