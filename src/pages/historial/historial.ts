import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';
import { ScanData } from '../../models/scan-model';

@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html'
})
export class HistorialPage {
  historial: ScanData[] = [];

  constructor(public navCtrl: NavController,
    private _historial: HistorialProvider,
    private toastCtrl: ToastController) {


  }

  ionViewDidLoad() {
    this.historial = this._historial.cargarHistorial();
  }

  visitar(scan: ScanData) {
    if (scan.tipo == "http") {
      this.presentToast("Dirigir a: " + scan.info);
    }
  }

  presentToast(mensaje: string) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      position: 'middle',
      duration: 3000
    });
    toast.present();
  }

}