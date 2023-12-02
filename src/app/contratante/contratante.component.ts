import { Component, OnInit } from '@angular/core';
import { Contratante } from '../model/contratante';

@Component({
  selector: 'app-contratante',
  templateUrl: './contratante.component.html',
  styleUrls: ['./contratante.component.css']
})
export class ContratanteComponent implements OnInit {
  validateMessage = '';
  nameSize = '';
  nameInvalid = false;

  constructor() {}

  ngOnInit(): void {
      this.validateMessage = '';
  }

  onSubmit() {
      if (this.nameSize.length < 3) {
        this.nameInvalid = true;
        this.validateMessage = 'O nome precisa conter ao menos 3 caracteres.';
        return;
      }

      this.nameInvalid = false;
      this.validateMessage = 'Nome válido'
  }
}
