import { Component } from '@angular/core';
//Plug-ins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController, Platform } from 'ionic-angular';
//Referencias Internas
import { HistorialProvider } from '../../providers/historial/historial'


@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {

  constructor(
    public escaner: BarcodeScanner,
    public toastCtrl: ToastController,
    private platform: Platform,
    private _historialProvider: HistorialProvider
  ) {

  }

  scan() {
    console.log("Escaneando...");

    if (!this.platform.is('cordova')) {
      this._historialProvider.agregar_historial("http://google.com");
      this._historialProvider.agregar_historial("geo:9.976133040865312,-84.00677479055173");
      this._historialProvider.agregar_historial(`BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD` );
    }

    this.presentToast("Escaneando...");

    this.escaner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
      this.presentToast('Error: ' + err);
    });
  }

  presentToast(mensaje: string) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      //position: 'middle',
      duration: 3000
    });
    toast.present();
  }

}