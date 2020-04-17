import { AngularFireDatabase } from "angularfire2/database";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the LecturasPage page.
 *
 * See https:   //ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-lecturas",
  templateUrl: "lecturas.html",
})
export class LecturasPage {
  temperatura: any;
  agua1: any;
  agua2: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.temperatura = db.object("temperatura").valueChanges();
    this.agua1 = db.object("agua1").valueChanges();
    this.agua2 = db.object("agua2").valueChanges();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LecturasPage");
  }
}
