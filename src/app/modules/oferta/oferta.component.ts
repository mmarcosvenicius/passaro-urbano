import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from 'src/app/core/models/oferta.model';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { OfertasService } from 'src/app/core/services/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
  
  public oferta!: Oferta
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'] // snapshpt: tira um 'foto' dos parametros da rota apenas no momento que ela é acessada (1a vez)

    this.route.params.subscribe((params: any) => {

      this.ofertasService.getOfertasPorId(params.id)
      .then((oferta: Oferta[]) => {
        this.oferta = oferta[0]
      })

    })
  }

  addItemCarrinho(oferta: Oferta): void {
    this.carrinhoService.incluirItems(oferta)
  }

}
