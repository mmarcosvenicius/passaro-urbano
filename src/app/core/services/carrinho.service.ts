import { Injectable } from '@angular/core';
import { ItemCarrinho } from '../models/item-carrinho.model';
import { Oferta } from '../models/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: ItemCarrinho[] = []
  constructor() { }

  exibirItems(): ItemCarrinho[] {
    return this.itens
  }
  
  incluirItems(oferta: Oferta): void {

    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao,
      oferta.valor,
      1
    )

    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if (!itemCarrinhoEncontrado) {
      this.itens.push(itemCarrinho)
      return
    }
    itemCarrinhoEncontrado.quantidade += 1
  }


  totalCarrinho(): number {

    let total: number = 0
    this.itens.map((item: ItemCarrinho) => {
      total = total + (item.valor * item.quantidade)
    })
    return total
  }

  decrementaQtd(itemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade -= 1

      if(itemCarrinhoEncontrado.quantidade === 0) {
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)
      }
    }
  }
  
  incrementaQtd(itemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1
    }
  }

  limparCarrinho(): void {
    this.itens = []
  }
}
