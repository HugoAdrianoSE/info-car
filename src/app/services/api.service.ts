import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private apiUrl = 'http://localhost:3000/veiculos';

  constructor(
    private http: HttpClient
  ) {}

  public cadastrarVeiculo(data: any): Promise<any> {
    return this.http.post<any>(this.apiUrl, data).toPromise();
  }

  public deletarVeiculo(id: number): Promise<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).toPromise();
  }

  public editarVeiculo(id: number, data: any): Promise<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data).toPromise();
  }

  public listarVeiculos(): Promise<any[]> {
    return this.http.get<{ message: string; veiculos: any[] }>(this.apiUrl).toPromise().then(response => response?.veiculos || []);
  }
}
