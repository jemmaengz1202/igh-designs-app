import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the AlertasPage page.
 *
 * See https: //ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector   : 'page-alertas',
  templateUrl: 'alertas.html',
})
export class AlertasPage {

  constructor(
    public navCtrl  : NavController,
    public navParams: NavParams,
    public db       : AngularFireDatabase
  ) {
    this.db.list('app').push('Funcionando');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertasPage');
  }

}
