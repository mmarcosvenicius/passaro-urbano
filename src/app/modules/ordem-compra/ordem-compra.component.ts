import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ItemCarrinho } from 'src/app/core/models/item-carrinho.model';
import { Pedido } from 'src/app/core/models/pedido.model';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { OrdemCompraService } from 'src/app/core/services/ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  //if template forms
  // @ViewChild('formulario') form!: NgForm
  form: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl('', [Validators.required])
  })

  idPedido!: number

  itensCarrinho: ItemCarrinho[] = []
  totalCarrinho: number = 0
  constructor(private ordemCompraService: OrdemCompraService, private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.exibirItems()
    this.totalCarrinho = this.carrinhoService.totalCarrinho()
  }

  confirmarCompra(): void {
    //if template forms
    // const pedido = new Pedido(this.form.value.endereco, this.form.value.numero, this.form.value.complemento, this.form.value.formaPagamento)
    // this.ordemCompraService.efetivarCompra('').subscribe((resposta: any) => {
    //   this.idPedido = resposta.id
    // })

    //reactive forms
    if (this.form.invalid) {
      this.form.get('endereco')?.markAsTouched()
      this.form.get('numero')?.markAsTouched()
      this.form.get('formaPagamento')?.markAsTouched()
      return;
    }
    if (!this.itensCarrinho.length) {
      return alert('Selecione um item para compra')
    }

    const pedido = new Pedido(
      this.form.value.endereco,
      this.form.value.numero,
      this.form.value.complemento,
      this.form.value.formaPagamento,
      this.itensCarrinho
    )

    
    this.ordemCompraService.efetivarCompra(pedido).subscribe((resposta: any) => {
      this.idPedido = resposta.id
      this.carrinhoService.limparCarrinho()
    })
  }


  decrementaQtd(item: ItemCarrinho): void {
    this.carrinhoService.decrementaQtd(item)
    this.totalCarrinho = this.carrinhoService.totalCarrinho()
  }

  incrementaQtd(item: ItemCarrinho): void {
    this.carrinhoService.incrementaQtd(item)
    this.totalCarrinho = this.carrinhoService.totalCarrinho()
  }
 }
