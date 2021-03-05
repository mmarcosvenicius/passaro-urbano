import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Oferta } from 'src/app/core/models/oferta.model';
import { OfertasService } from 'src/app/core/services/ofertas.service';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators/";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [OfertasService]
})
export class HeaderComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ofertas!: Observable<Oferta[]>
  // ofertasList!: Oferta[]
  subjectPesquisa: Subject<string> = new Subject<string>()

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
    .pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        if(termo.trim() === ''){
          return of<Oferta[]>([])
        }
        return this.ofertasService.pesquisaOfertas(termo)
      }),
      catchError((err: any) => {
        console.log(err)
        return of<Oferta[]>([])
      })
    )
    // this.ofertas.subscribe((ofertas: Oferta[]) => this.ofertasList = ofertas)
  }

  pesquisar(search: HTMLInputElement) {
    // this.ofertas = this.ofertasService.pesquisaOfertas(search.value)
    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => ofertas,
    //   (erro: any) => console.log(erro)
    // )
    this.subjectPesquisa.next(search.value)
  }

  limparPesquisa(): void {
    this.subjectPesquisa.next('')
  }
}
