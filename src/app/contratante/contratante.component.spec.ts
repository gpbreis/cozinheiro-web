import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratanteComponent } from './contratante.component';

describe('ContratanteComponent', () => {
  let component: ContratanteComponent;
  let fixture: ComponentFixture<ContratanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratanteComponent]
    });
    fixture = TestBed.createComponent(ContratanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
