import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContratanteComponent } from './contratante/contratante.component';
import { ListaContratantesComponent } from './lista-contratantes/lista-contratantes.component';
import { EventoComponent } from './evento/evento.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { FiltroComponent } from './filtro/filtro.component';
import { DetalhaContratanteComponent } from './detalha-contratante/detalha-contratante.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contratante', component: ContratanteComponent},
  { path: 'lista-contratante', component: ListaContratantesComponent},
  { path: 'evento', component: EventoComponent},
  { path: 'lista-evento', component: ListaEventosComponent},
  { path: 'filtro', component: FiltroComponent},
  { path: 'contratante/visualizar/:id', component: DetalhaContratanteComponent},
  { path: 'contratante/editar/:id', component: ContratanteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
