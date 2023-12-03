import { Component, OnInit } from '@angular/core';
import { Contratante } from '../model/contratante';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contratante',
  templateUrl: './contratante.component.html',
  styleUrls: ['./contratante.component.css']
})
export class ContratanteComponent implements OnInit {
  validateMessage: string = '';
  nameInvalid: boolean = false;

  contratante: Contratante = new Contratante();
  contratantes: Contratante[] = [];
  name = this.contratante.name;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.validateMessage = '';
      let idParam = this.route.snapshot.params['id'];
      this.contratantes = this.contratante.populaTabela();
      let editing: boolean = false;

      if(idParam != null) {
        let id = idParam;
        this.contratante = this.contratantes.find(contratante => contratante.id == id)!;
      }
  }

  onSubmit() {
      if (this.name.length < 3) {
        this.nameInvalid = true;
        this.validateMessage = 'O nome precisa conter ao menos 3 caracteres.';
        return;
      }

      this.nameInvalid = false;
      this.validateMessage = 'Nome válido'
  }
}
