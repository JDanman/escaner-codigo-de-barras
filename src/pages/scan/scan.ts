import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
//Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController, Platform } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial'


@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {

  constructor(public escaner: BarcodeScanner,
              public toastCtrl: ToastController,
              private platform: Platform,
              private _historialProvider: HistorialProvider) {

  }

  scan() {
    console.log("Escaneando...");

    if(!this.platform.is('cordova')){

      this._historialProvider.agregar_historial("http://google.com");

    }

    this.presentToast("Escaneando...");

    this.escaner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error: ', err);
    });
  }

  presentToast(mensaje:string) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      //position: 'middle',
      duration: 3000
    });
    toast.present();
  }

}