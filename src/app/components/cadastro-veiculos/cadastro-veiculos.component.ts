import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-cadastro-veiculos',
  standalone: true,
  templateUrl: './cadastro-veiculos.component.html',
  styleUrl: './cadastro-veiculos.component.scss',

  imports: [
    MenuComponent,
  ],
})

export class CadastroVeiculosComponent {

}
