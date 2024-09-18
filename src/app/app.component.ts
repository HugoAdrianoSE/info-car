import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroVeiculosComponent } from './components/cadastro-veiculos/cadastro-veiculos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

  imports: [
    RouterOutlet,
    CadastroVeiculosComponent,
  ],
})

export class AppComponent {
  title = 'info-tecnologia';
}
