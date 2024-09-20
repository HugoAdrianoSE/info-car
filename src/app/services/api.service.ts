import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private apiUrl = 'https://veiculos.free.beeceptor.com/api/veiculos';

  constructor(
    private http: HttpClient
  ) {}

  public listarVeiculos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public cadastrarVeiculo(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // public editarVeiculo(veiculo: any): Observable<any> {
  //   return this.http.put<any>(this.apiUrl, veiculo);
  // }

  // public deletarVeiculo(veiculo: any): Observable<any> {
  //   return this.http.delete<any>(this.apiUrl, veiculo);
  // }
}
