import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lista-contratantes',
  templateUrl: './lista-contratantes.component.html',
  styleUrls: ['./lista-contratantes.component.css']
})
export class ListaContratantesComponent implements OnInit, OnChanges{

  contratantes = [
    {
      id: 1,
      name: "Gustavo Breis",
      phone: "4499998888",
      mail: "gpbreis@gmail.com",
      isPriority: false
    },
    {
      id: 2,
      name: "Claudia Regina",
      phone: "4477776666",
      mail: "cregina@gmail.com",
      isPriority: true
    },
    {
      id: 3,
      name: "Lanna",
      phone: "4466665555",
      mail: "lanna@gmail.com",
      isPriority: true
    },
    {
      id: 4,
      name: "Naomi",
      phone: "4455554444",
      mail: "naomi@gmail.com",
      isPriority: true
    },
    {
      id: 5,
      name: "Channel",
      phone: "4444443333",
      mail: "channel@gmail.com",
      isPriority: false
    }
  ];

  totalContratantes = this.contratantes.length;
  totalPriority = this.contratantes.filter( p => p.isPriority === true).length;
  totalNotPriority = this.contratantes.filter( p => p.isPriority === false).length;

  ngOnInit(): void {
      
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }
}
