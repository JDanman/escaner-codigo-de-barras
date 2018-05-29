import { Component } from '@angular/core';
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