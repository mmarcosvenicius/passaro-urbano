import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiversaoComponent } from './modules/diversao/diversao.component';
import { HomeComponent } from './modules/home/home.component';
import { ComoUsarComponent } from './modules/oferta/como-usar/como-usar.component';
import { OfertaComponent } from './modules/oferta/oferta.component';
import { OndeFicaComponent } from './modules/oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './modules/ordem-compra/ordem-compra.component';
import { RestaurantesComponent } from './modules/restaurantes/restaurantes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
  {
    path: 'oferta/:id', component: OfertaComponent,
    children: [
      { path: '', component: ComoUsarComponent },
      { path: 'como-usar', component: ComoUsarComponent },
      { path: 'onde-fica', component: OndeFicaComponent }
    ]
  },
  { path: 'ordem-compra', component: OrdemCompraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
