import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  readonly baseURL = 'https://projeto-backend-bootcamp.herokuapp.com/bootcamp';
  constructor(private http: HttpClient) {}

  /**
   * Retorna todos os registros cadastrados na API no endpoint indicado
   * @returns Promise com o retorno da API
   */
  async getStocks(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseURL}/stock`).toPromise();
  }
}
