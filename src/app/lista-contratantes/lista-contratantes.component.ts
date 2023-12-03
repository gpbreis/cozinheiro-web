import { Router } from '@angular/router';
import { Contratante } from './../model/contratante';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DetalhaContratanteComponent } from '../detalha-contratante/detalha-contratante.component';

@Component({
  selector: 'app-lista-contratantes',
  templateUrl: './lista-contratantes.component.html',
  styleUrls: ['./lista-contratantes.component.css']
})
export class ListaContratantesComponent implements OnInit, OnChanges{

  contratante: Contratante = new Contratante();
  contratantes: Contratante[] = [];

  totalContratantes: number = 0;
  totalPriority: number = 0;
  totalNotPriority: number = 0;

  @ViewChild('clicado') detalhe!: DetalhaContratanteComponent;

  constructor(private router: Router){}

  ngOnInit(): void {
      this.contratantes = this.contratante.populaTabela();
      this.totalContratantes = this.contratantes.length;
      this.totalPriority = this.contratantes.filter( p => p.priority === true).length;
      this.totalNotPriority = this.contratantes.filter( p => p.priority === false).length;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  onClickItem(contratante: Contratante) {
    
  }

  edit(id: number) {
    this.router.navigate(['contratante/editar', id]);
  }
}
