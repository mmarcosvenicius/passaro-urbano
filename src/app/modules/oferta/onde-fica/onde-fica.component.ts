import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/core/services/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  ondeFica: string = ''
  constructor(
    private router: ActivatedRoute,
    private ofertasService: OfertasService
    ) { }

  ngOnInit(): void {
    let id = Number(this.router.parent?.snapshot.params['id']) // snapshpt: tira um 'foto' dos parametros da rota apenas no momento que ela é acessada (1a vez)
    
    this.router.parent?.params.subscribe((params: any) => {

      this.ofertasService.getOndeFicaOfertaPorId(params.id)
      .then((response: any) => {
        this.ondeFica = response[0].descricao
      })

    })
  }

}
