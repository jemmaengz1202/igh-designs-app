import { FCM } from '@ionic-native/fcm';
import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
           platform    : Platform,
           statusBar   : StatusBar,
           splashScreen: SplashScreen,
           fcm         : FCM,
    public alertCtrl   : AlertController)
  {
    platform.ready().then(() => {
      //Notifications
      fcm.subscribeToTopic('all');
      fcm.getToken().then(token=>{
          console.log(token);
      });
      fcm.onNotification().subscribe(data=>{
        // if(data.wasTapped){
        //   console.log("Received in background");
        // } else {
        //   console.log("Received in foreground");
        // };
        this.showAlert('Alerta:', data.text);
      });
      fcm.onTokenRefresh().subscribe(token=>{
        console.log(token);
      });
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  private showAlert(_title: string, text: string) {
    const alert = this.alertCtrl.create({
      title   : _title,
      subTitle: text,
      cssClass: 'custom-alert-danger',
      buttons : ['Cerrar']
    });
    alert.present();
  }
}
