import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';

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
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
