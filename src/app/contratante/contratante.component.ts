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
  editMode: boolean = false;


  @ViewChild('form') form!: NgForm;

  constructor(private route: ActivatedRoute, private contratanteService: ContratanteService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
      this.validateMessage = '';
      let idParam = this.route.snapshot.params['id'];

      this.atualizarLocal();

      this.contratante = new Contratante();
      this.name = this.contratante.name;

      if(idParam != null) {
        let id = idParam;
        this.contratanteService.findById(id).then(contratante => this.contratante = contratante).catch(erro => console.log(erro));
        this.editMode = true
      }
  }

  atualizarLocal() {
    this.contratanteService.getContratantes().then(contratantes => this.contratantes = contratantes).catch(erro => console.log(erro));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.contratante = new Contratante();
  }

  onSubmit() {
      this.isSubmitted = true;

      if(this.editMode) {
        this.contratanteService.update(this.contratante).then(m => this.validateMessage = 'Usuário atualizado no WebStorage/Json-Server').catch(erro => console.log(erro));
      } else {
        this.contratanteService.save(this.contratante).then(m => this.validateMessage = 'Usuário salvo no WebStorage/Json-Server').catch(erro => console.log(erro));
      }

      if(this.contratanteService.isExist(this.contratante.id.toString())){
        this.contratanteService.save(this.contratante);
        this.validateMessage = 'Usuário já existe no WebStorage'
      } else {
        this.contratanteService.update(this.contratante);
        this.validateMessage = 'Usuário atualizado no WebStorage/Json-Server'
      }

      this.nameInvalid = false;
      
  }

  save(): void {
    
  }
}
