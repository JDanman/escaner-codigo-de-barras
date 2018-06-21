//import { HttpClient } from '@angular/common/http';

//Plug-ins de Ionic
import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { ModalController, Platform, ToastController } from "ionic-angular";
//Referencias a otras página de la aplicación
import { ScanData } from '../../models/scan-model';
import { MapaPage } from "../../pages/index.paginas";

@Injectable()
export class HistorialProvider {

  private _historial: ScanData[] = [];

  constructor(private zelda: InAppBrowser,
    private modalCtrl: ModalController,
    private contacts: Contacts,
    private platform: Platform,
    private toastCtrl: ToastController) {


  }

  agregar_historial(texto: string) {
    let data = new ScanData(texto);
    this._historial.unshift(data);

    console.table(this._historial);
  }


  cargarHistorial() {
    return this._historial;
  }

  abrirScan(index: number) {
    let ScanData = this._historial[index];
    console.log(ScanData);

    switch (ScanData.tipo) {
      case "http": //Enlace a una Página
        this.zelda.create(ScanData.info, "_system");
        break;
      case "mapa": //Enlace de Geo-localización
        this.modalCtrl.create(MapaPage, { coords: ScanData.info })
          .present();
        break;
      case "contacto": //Enlace de Contacto
        this.crear_contacto(ScanData.info);
        break;
      case "email": //Enlace de manejo de correo

      
        //Funcionamiento de correo aqui
        break;
      default:
        console.error("Tipo de enlace desconocido");
        break;
    }
  }

  private crear_contacto(texto: string) {

    let campos: any = this.parse_vcard(texto);
    console.log(campos);

    let nombre = campos['fn'];
    let tel = campos.tel[0].value[0];


    if (!this.platform.is('cordova')) {
      console.warn("Estoy en la computadora, no puedo crear contacto.");
      return;
    }

    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, nombre);
    contact.phoneNumbers = [new ContactField('mobile', tel)];

    contact.save().then(
      () => this.crear_toast("Contacto " + nombre + " creado!"),
      (error) => this.crear_toast("Error: " + error)
    );


  }

  private crear_toast(mensaje: string) {

    this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    }).present();

  }

  private parse_vcard(input: string) {

    var Re1 = /^(version|fn|title|org):(.+)$/i;
    var Re2 = /^([^:;]+);([^:]+):(.+)$/;
    var ReKey = /item\d{1,2}\./;
    var fields = {};

    input.split(/\r\n|\r|\n/).forEach(function (line) {
      var results, key;

      if (Re1.test(line)) {
        results = line.match(Re1);
        key = results[1].toLowerCase();
        fields[key] = results[2];
      } else if (Re2.test(line)) {
        results = line.match(Re2);
        key = results[1].replace(ReKey, '').toLowerCase();

        var meta = {};
        results[2].split(';')
          .map(function (p, i) {
            var match = p.match(/([a-z]+)=(.*)/i);
            if (match) {
              return [match[1], match[2]];
            } else {
              return ["TYPE" + (i === 0 ? "" : i), p];
            }
          })
          .forEach(function (p) {
            meta[p[0]] = p[1];
          });

        if (!fields[key]) fields[key] = [];

        fields[key].push({
          meta: meta,
          value: results[3].split(';')
        })
      }
    });

    return fields;
  };

}
