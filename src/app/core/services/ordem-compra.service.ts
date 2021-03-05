import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  private urlApi = environment.urlApi

  constructor(private http: HttpClient) { }

  efetivarCompra(pedido: Pedido): Observable<any> {
    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json')
    }

    return this.http.post(
      `${this.urlApi}/pedidos`,
      JSON.stringify(pedido),
      options
    )
    .pipe(
      map((resposta: any) => resposta)
    )
    
  }
}
