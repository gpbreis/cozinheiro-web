import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContratanteComponent } from './contratante/contratante.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HomeComponent } from './home/home.component';
import { ListaContratantesComponent } from './lista-contratantes/lista-contratantes.component';
import { EventoComponent } from './evento/evento.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { FiltroComponent } from './filtro/filtro.component';
import { DetalhaContratanteComponent } from './detalha-contratante/detalha-contratante.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ContratanteComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListaContratantesComponent,
    EventoComponent,
    ListaEventosComponent,
    FiltroComponent,
    DetalhaContratanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    HttpClientModule,
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
