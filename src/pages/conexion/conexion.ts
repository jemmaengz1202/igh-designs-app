import { BluetoothArduinoProvider } from "./../../providers/bluetooth-arduino/bluetooth-arduino";
import { Component } from "@angular/core";
import { NavController, NavParams, Platform } from "ionic-angular";

/**
 * Generated class for the ConexionPage page.
 *
 * See https:   //ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-conexion",
  templateUrl: "conexion.html",
})
export class ConexionPage {
  devices: Array<any> = [];

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public bluetoothArduinoProvider: BluetoothArduinoProvider
  ) {}

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.bluetoothArduinoProvider.buscar().then(
        (dispositivos) => {
          this.devices = dispositivos;
        },
        (error) => {
          this.bluetoothArduinoProvider.presentToast(error);
        }
      );
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ConexionPage");
  }

  revisarConexion(dispositivo: any) {
    this.bluetoothArduinoProvider.revisarConexion(dispositivo);
  }

  desconectar() {
    this.bluetoothArduinoProvider.desconectar();
  }
}
