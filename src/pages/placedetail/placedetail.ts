import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToursProvider } from '../../providers/tours/tours';

/**
 * Generated class for the PlacedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-placedetail',
  templateUrl: 'placedetail.html',
})
export class PlacedetailPage {

  place:any = 0;

  constructor(public navCtrl: NavController, public navParams:
  NavParams, public data:ToursProvider) {

    var id = this.navParams.get('id');

    this.data.loadById(id).then(res=>{
      this.place = res;
      //console.log(this.place);
    });


    /*if(id==1){
      this.data.loadById1().then(res=>{
        this.place = res;
        //console.log(this.place);
      });
    }else if(id==2){
      this.data.loadById2().then(res=>{
        this.place = res;
      });
    }else if(id==3){
      this.data.loadById3().then(res=>{
        this.place = res;
      });
    }else if(id==4){
      this.data.loadById4().then(res=>{
        this.place = res;
      });
    }*/
    

  }

  ionViewDidLoad() {
    console.log(this.place);
  }

}
