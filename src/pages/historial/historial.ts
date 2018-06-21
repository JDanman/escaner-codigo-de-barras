//Plug-ins de Ionic
import { Component } from '@angular/core';

//Referencias a otras página internas de la aplicación
import { HistorialProvider } from '../../providers/historial/historial';
import { ScanData } from '../../models/scan-model';

@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html'
})
export class HistorialPage {
  historial: ScanData[] = [];

  constructor(private _historial: HistorialProvider) {

  }

  ionViewDidLoad() {
    this.historial = this._historial.cargarHistorial();
  }

  visitar(indice: number) {
    this._historial.abrirScan(indice);
  }

}