import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { firstValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-veiculos',
  standalone: true,
  templateUrl: './cadastro-veiculos.component.html',
  styleUrl: './cadastro-veiculos.component.scss',

  imports: [
    CommonModule,
    FormsModule,

    MenuComponent,
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

  constructor(
    private apiService: ApiService,
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

  public cleamForm() {
    this.veiculo = {
      placa: '',
      chassi: '',
      renavam: '',
      modelo: '',
      marca: '',
      ano: ''
    };
  }

  public async salvarVeiculo() {
    try {
      const response = await this.apiService.cadastrarVeiculo(this.veiculo);

      if (response && response.message === 'Veículo cadastrado com sucesso') {
        this.listaVeiculos.push(response.veiculoRecebido);
        this.cleamForm();
        this.closeForm();
        await this.getVeiculos();

        console.log('Veículo cadastrado e lista atualizada.');
      } else {
        console.error('Erro no cadastro: resposta inválida', response);
      }
    } catch (error) {
      console.error('Erro ao cadastrar veículo:', error);
    }
  }

  private async getVeiculos() {
    try {
      const response = await this.apiService.listarVeiculos();
      if (response) {
        this.listaVeiculos = response;
      }
    } catch (error) {
      console.error('Erro ao carregar veículos:', error);
    }
  }
}
