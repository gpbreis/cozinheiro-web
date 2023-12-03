import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Contratante } from '../model/contratante';
import { ActivatedRoute } from '@angular/router';
import { ContratanteService } from './contratante.service';
import { Shared } from '../util/shared';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contratante',
  templateUrl: './contratante.component.html',
  styleUrls: ['./contratante.component.css']
})
export class ContratanteComponent implements OnInit, OnChanges {
  validateMessage: string = '';
  nameInvalid: boolean = false;

  contratante!: Contratante;
  contratantes: Contratante[] = [];
  name: string = '';

  isSubmitted!: boolean;

  @ViewChild('form') form!: NgForm;

  constructor(private route: ActivatedRoute, private contratanteService: ContratanteService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
      this.validateMessage = '';
      let idParam = this.route.snapshot.params['id'];
      this.contratantes = this.contratanteService.getContratantes();
      let editing: boolean = false;

      this.contratante = new Contratante();
      this.name = this.contratante.name;

      if(idParam != null) {
        let id = idParam;
        this.contratante = this.contratantes.find(contratante => contratante.id == id)!;
      }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.contratante = new Contratante();
  }

  onSubmit() {
      this.isSubmitted = true;

      if(this.contratanteService.isExist(this.contratante.id.toString())){
        this.contratanteService.save(this.contratante);
        this.validateMessage = 'Usuário já existe no WebStorage'
      } else {
        this.contratanteService.update(this.contratante);
        this.validateMessage = 'Usuário atualizado no WebStorage'
      }

      this.nameInvalid = false;
      
  }
}
