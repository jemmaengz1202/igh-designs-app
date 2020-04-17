import { LecturasPage } from './../lecturas/lecturas';
import { ConexionPage } from './../conexion/conexion';
import { AlertasPage } from './../alertas/alertas';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AlertasPage;
  tab3Root = ConexionPage;
  tab4Root = LecturasPage;

  constructor() {

  }
}
