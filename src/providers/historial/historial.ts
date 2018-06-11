//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-model';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialProvider {

  private _historial: ScanData[] = [];

  constructor(private zelda:InAppBrowser) {

    
  }

  agregar_historial(texto:string){
    let data = new ScanData(texto);
    this._historial.unshift (data);
    
    console.log(this._historial);
  }

  cargarHistorial(){
    return this._historial;
  }

  abrirScan(index:number){
    let ScanData = this._historial[index];
    console.log(ScanData);

    switch(ScanData.tipo){
      case "http":
        this.zelda.create(ScanData.info, "_system");
      break;
      default:
        console.error("Tipo de enlace desconocido");
      break;
    }
  }

}
