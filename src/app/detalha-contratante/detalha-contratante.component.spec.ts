import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaContratanteComponent } from './detalha-contratante.component';

describe('DetalhaContratanteComponent', () => {
  let component: DetalhaContratanteComponent;
  let fixture: ComponentFixture<DetalhaContratanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhaContratanteComponent]
    });
    fixture = TestBed.createComponent(DetalhaContratanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
