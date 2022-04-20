import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Voiture } from '../models/voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Voiture[]>(`${environment.apiUrl}/voitures`);
  }

  findById(id : number) {
    return this.http.get<Voiture>(`${environment.apiUrl}/voitures/${id}`);
  }

  update(voiture: Voiture) {
    return this.http.put<Voiture>(`${environment.apiUrl}/voitures/${voiture.id}`, voiture);
  }

  create(voiture: Voiture) {
    return this.http.post<Voiture>(`${environment.apiUrl}/voitures`, voiture);
  }

  delete(id: number) {
    return this.http.delete<Voiture>(`${environment.apiUrl}/voitures/${id}`);
  }
}
