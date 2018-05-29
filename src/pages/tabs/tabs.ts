import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
//import { Tab1 } from './tab1-page';
import { ScanPage, HistorialPage } from '../index.paginas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

    scan: any;
    historial: any;

  constructor( ) {
    this.scan = ScanPage;
    this.historial = HistorialPage;
  }

}