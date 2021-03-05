import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/core/models/oferta.model';
import { OfertasService } from 'src/app/core/services/ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  ofertas!: Oferta[]
  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {

    this.ofertasService.getOfertas()
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
    })
    .catch((param: any) => {
      console.log(param)
    })

  }

}
