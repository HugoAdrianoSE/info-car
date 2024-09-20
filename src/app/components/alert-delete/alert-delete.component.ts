import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alert-delete',
  standalone: true,
  templateUrl: './alert-delete.component.html',
  styleUrls: ['./alert-delete.component.scss'],
})

export class AlertDeleteComponent {
  public titulo: string = 'Atenção!';
  public subtitulo: string = 'Tem certeza que deseja excluir este item?';

  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();

  constructor() { }

  public async ngOnInit() {

  }

  public actionConfirm() {
    this.confirmDelete.emit();
  }

  public actionCancel() {
    this.cancelDelete.emit();
  }
}
