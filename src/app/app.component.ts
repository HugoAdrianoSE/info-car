import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CadastroVeiculosComponent } from './components/cadastro-veiculos/cadastro-veiculos.component';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

  imports: [
    RouterOutlet,
    CommonModule,
    CadastroVeiculosComponent,
  ],

  providers: [
    AlertService
  ],
})

export class AppComponent {
  public title = 'Info Tecnologia';
  public titulo?: string;
  public subtitulo?: string;

  constructor(
    private alertService: AlertService,
  ) { }

  public ngOnInit() {
    this.alertService.titulo.subscribe((val: string) => {
      this.titulo = val;
    });

    this.alertService.subtitulo.subscribe((val: string) => {
      this.subtitulo = val;
    });
  }

  public closeAlert() {
    this.titulo = '';
    this.subtitulo = '';
  }
}
