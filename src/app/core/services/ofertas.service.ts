import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Oferta } from '../models/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  private urlApi = environment.urlApi
  constructor(
    private http: HttpClient
  ) { }
  
  getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${this.urlApi}/ofertas?destaque=true`).toPromise()
    .then((resposta: any) => resposta)
  }

  getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${this.urlApi}/ofertas?categoria=${categoria}`).toPromise()
    .then((resposta: any) => resposta)
  }
  
  getOfertasPorId(id: number): Promise<Oferta[]> {
    return this.http.get(`${this.urlApi}/ofertas?id=${id}`).toPromise()
    .then((resposta: any) => resposta)
  }

  getComoUsarOfertaPorId(id: number): Promise<any> {
    return this.http.get(`${this.urlApi}/como-usar?id=${id}`).toPromise()
    .then((resposta: any) => resposta)
  }

  getOndeFicaOfertaPorId(id: number): Promise<any> {
    return this.http.get(`${this.urlApi}/onde-fica?id=${id}`).toPromise()
    .then((resposta: any) => resposta)
  }

  pesquisaOfertas(termo:string): Observable<Oferta[]> {
    return this.http.get(`${this.urlApi}/ofertas?descricao_like=${termo}`)
    .pipe(
      retry(10),
      map((resposta: any) => resposta )
    )
  }
}
