import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContratantesComponent } from './lista-contratantes.component';

describe('ListaContratantesComponent', () => {
  let component: ListaContratantesComponent;
  let fixture: ComponentFixture<ListaContratantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaContratantesComponent]
    });
    fixture = TestBed.createComponent(ListaContratantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
