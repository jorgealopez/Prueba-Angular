import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Equipo } from '../interfaces/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;

  equipo: Equipo[] = [];

  constructor(private http: HttpClient) {
    // console.log('Servicio de InfoPágina listo');
    // Leer el archivo json
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
      });
  }

  private cargarEquipo() {
    this.http
      .get('https://angular-html-9e8d0.firebaseio.com/equipo.json')
      .subscribe((resp: Equipo[]) => {
        this.equipo = resp;
      });
  }
}
