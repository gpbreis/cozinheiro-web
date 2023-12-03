import { Component } from '@angular/core';
import { Contratante } from '../model/contratante';

@Component({
  selector: 'app-detalha-contratante',
  templateUrl: './detalha-contratante.component.html',
  styleUrls: ['./detalha-contratante.component.css']
})
export class DetalhaContratanteComponent {
  contratante: Contratante = new Contratante();
}
