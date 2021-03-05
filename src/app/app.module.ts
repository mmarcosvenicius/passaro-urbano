import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { RestaurantesComponent } from './modules/restaurantes/restaurantes.component';
import { DiversaoComponent } from './modules/diversao/diversao.component';
import { OfertaComponent } from './modules/oferta/oferta.component';
import { ComoUsarComponent } from './modules/oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './modules/oferta/onde-fica/onde-fica.component';

import ptBr from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { DescricaoReduzidaPipe } from './core/pipes/descricao-reduzida.pipe';
import { OrdemCompraComponent } from './modules/ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './modules/ordem-compra/ordem-compra-sucesso/ordem-compra-sucesso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarrinhoService } from './core/services/carrinho.service';
registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzidaPipe,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR' }, CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
