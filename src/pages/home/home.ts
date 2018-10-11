import { BluetoothArduinoProvider } from './../../providers/bluetooth-arduino/bluetooth-arduino';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector   : 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl                 : NavController,
    public bluetoothArduinoProvider: BluetoothArduinoProvider
  ) { }

  enviarDatoBluetooth(mensaje: string) {
    this.bluetoothArduinoProvider.bluetoothSerial.isConnected().then(
      conectado => {
        this.enviarDatoBluetooth(mensaje);
      },
      no_conectado => {
        this.bluetoothArduinoProvider.presentToast('Primero debes de estar conectado. Dirígete a la sección de conexión.');
      }
    )
  }
}
