import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/core/services/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {
  comoUsar: string = ''
  constructor(
    private router: ActivatedRoute,
    private ofertasService: OfertasService
    ) { }

  ngOnInit(): void {
    let id = Number(this.router.parent?.snapshot.params['id']) // snapshpt: tira um 'foto' dos parametros da rota apenas no momento que ela é acessada (1a vez)

    this.router.parent?.params.subscribe((params: any) => {

      this.ofertasService.getComoUsarOfertaPorId(params.id)
      .then((response: any) => {
        this.comoUsar = response[0].descricao
      })

    })
  }

}
