import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage,
          ScanPage,
          HistorialPage, 
          MapaPage
        } from '../pages/index.paginas';
//Provideres
import { HistorialProvider } from '../providers/historial/historial';
//Plugins
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser} from '@ionic-native/in-app-browser';
import { Contacts } from '@ionic-native/contacts';
// Manejo de Mapas con Google Maps
import { AgmCoreModule } from '@agm/core';
//Correo Electrónico
//import { EmailComposer } from '@ionic-native/email-composer';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ScanPage,
    HistorialPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Uso del API por Llave
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7Y32K2HAickIu_c3vSe-t2zV92s0yo4M'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ScanPage,
    HistorialPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    Camera,
    BarcodeScanner,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider,
    InAppBrowser,
    Contacts,
    //EmailComposer
  ]
})
export class AppModule {}
