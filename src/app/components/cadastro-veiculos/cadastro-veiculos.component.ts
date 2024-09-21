import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { AlertDeleteComponent } from '../alert-delete/alert-delete.component';

@Component({
  selector: 'app-cadastro-veiculos',
  standalone: true,
  templateUrl: './cadastro-veiculos.component.html',
  styleUrl: './cadastro-veiculos.component.scss',

  imports: [
    CommonModule,
    FormsModule,
    MenuComponent,
    AlertDeleteComponent,
  ],
})

export class CadastroVeiculosComponent {
  public showForm = false;
  public veiculo: any = {
    placa: '',
    chassi: '',
    renavam: '',
    modelo: '',
    marca: '',
    ano: ''
  };
  public listaVeiculos: any[] = [];
  public showDeleteConfirm: boolean = false;
  public selectedVeiculoId: number | null = null;

  constructor(
    private apiService: ApiService,
    private alertService: AlertService,
  ) {}

  public async ngOnInit() {
    this.getVeiculos();
  }

  public toggleForm() {
    this.showForm = !this.showForm;
  }

  public closeForm() {
    this.showForm = false;
  }

  public resetForm() {
    this.veiculo = {
      placa: '',
      chassi: '',
      renavam: '',
      modelo: '',
      marca: '',
      ano: ''
    };
  }

  public editarVeiculo(item: any) {
    this.veiculo = {...item};
    this.toggleForm();
  }

  public confirmDelete(id: number) {
    this.selectedVeiculoId = id;
    this.showDeleteConfirm = true;
  }

  public closeDeleteConfirm() {
    this.showDeleteConfirm = false;
    this.selectedVeiculoId = null;
  }

  public confirmarDeletarVeiculo() {
    if (this.selectedVeiculoId !== null) {
      this.deletarVeiculo(this.selectedVeiculoId);
    }
  }

  public async actionCadastro() {
    if (!this.veiculo.placa || !this.veiculo.chassi || !this.veiculo.renavam || !this.veiculo.modelo || !this.veiculo.marca || !this.veiculo.ano) {
      this.alertService.show('Atenção!', 'Por favor, preencha todos os campos para prosseguir.');
      return;
    }

    if (this.veiculo.placa && this.veiculo.placa.length !== 7) {
      this.alertService.show('Atenção!', 'Por favor, informe uma placa válida com 7 caracteres para prosseguir.');
      return;
    }

    if (this.veiculo.chassi && this.veiculo.chassi.length !== 17) {
      this.alertService.show('Atenção!', 'Por favor, informe um chassi válido com 17 caracteres para prosseguir.');
      return;
    }

    if (this.veiculo.renavam && this.veiculo.renavam.length !== 11) {
      this.alertService.show('Atenção!', 'Por favor, informe um renavam válido com 11 caracteres para prosseguir.');
      return;
    }

    if (this.veiculo.ano && this.veiculo.ano.length !== 4) {
      this.alertService.show('Atenção!', 'Por favor, informe um ano válido com 4 caracteres para prosseguir.');
      return;
    }

    await this.salvarVeiculo();
  }

  public async salvarVeiculo() {
    try {
      let response;

      if (this.veiculo.id) {
        response = await this.apiService.editarVeiculo(this.veiculo.id, this.veiculo);
        this.alertService.show('Sucesso!', 'Veículo atualizado com sucesso.');
      } else {
        response = await this.apiService.cadastrarVeiculo(this.veiculo);
        this.alertService.show('Sucesso!', 'Veículo cadastrado com sucesso.');
      }

      await this.getVeiculos();
      this.resetForm();
      this.closeForm();

    } catch (error) {
      this.alertService.show('Erro!', 'Ocorreu um erro. Tente novamente.');
    }
  }

  public deletarVeiculo(id: number): void {
    if (!id) {
      this.alertService.show('Erro!', 'ID do veículo não encontrado.');
      return;
    }

    this.apiService.deletarVeiculo(id).then(() => {
      this.alertService.show('Sucesso!', 'Veículo deletado com sucesso.');
      this.getVeiculos();
      this.closeDeleteConfirm();
    }).catch(error => {
      this.alertService.show('Erro!', 'Erro ao deletar o veículo.');
      console.error('Erro ao deletar veículo:', error);
    });
  }

  private async getVeiculos() {
    try {
      const response = await this.apiService.listarVeiculos();
      if (response) {
        this.listaVeiculos = response;
      }
    } catch (error) {
      this.alertService.show('Erro!', 'Ocorreu um erro ao carregar os dados dos veículos');
    }
  }
}
