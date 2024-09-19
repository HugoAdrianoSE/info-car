import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastroVeiculoComponent } from './modal-cadastro-veiculos.component';

describe('ModalCadastroVeiculoComponent', () => {
  let component: ModalCadastroVeiculoComponent;
  let fixture: ComponentFixture<ModalCadastroVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCadastroVeiculoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCadastroVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
