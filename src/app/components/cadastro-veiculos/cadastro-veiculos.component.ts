import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-cadastro-veiculos',
  standalone: true,
  templateUrl: './cadastro-veiculos.component.html',
  styleUrl: './cadastro-veiculos.component.scss',

  imports: [
    CommonModule,
    MenuComponent,
  ],
})

export class CadastroVeiculosComponent {
  public showForm = false;
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

  private async getVeiculos() {
    try {
      const response = await firstValueFrom(this.apiService.getVeiculos());
      if (response && response.result && response.result.lista) {
        this.listaVeiculos = response.result.lista;
      }
    } catch (error) {
      console.error('Erro ao carregar veículos:', error);
    }
  }
}
