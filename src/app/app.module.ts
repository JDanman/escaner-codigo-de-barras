import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage,
          ScanPage,
          HistorialPage } from '../pages/index.paginas';
//Plugins
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HistorialProvider } from '../providers/historial/historial';
import { InAppBrowser} from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ScanPage,
    HistorialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ScanPage,
    HistorialPage
  ],
  providers: [
    StatusBar,
    Camera,
    BarcodeScanner,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider,
    InAppBrowser
  ]
})
export class AppModule {}
