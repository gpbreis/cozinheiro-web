import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {
  @Input() all: number = 0;
  @Input() isPriority: number = 0;
  @Input() notPriority: number = 0;
}
