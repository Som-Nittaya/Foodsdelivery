import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ToursProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToursProvider {
  data : any;
  data1 : any;
  data2 : any;
  data3 : any;
  data4 : any;

  constructor(public http: HttpClient) {

    this.data=[{
      id:1,
      type:"อาหารจานเดียว",
      name:"อาหารจานเดียว",
      detail:"อาหารตามสั่ง",
      image:"https://dqk1dnz21ztlg.cloudfront.net/wp-content/uploads/2017/05/17121631/shutterstock_585496844.jpg",
    },
    {
      id:2,
      type:"กับข้าว",
      name:"กับข้าว",
      detail:"กับข้าว กับแกล้ม",
      image:"https://www.thairath.co.th/media/dFQROr7oWzulq5FZXUelxIEdqool25X3ZBkOD6endOuz6rrXumykzpvjxn2sErit28p.jpg",
    },
    {
      id:3,
      type:"เครื่องดื่ม",
      name:"เครื่องดื่ม",
      detail:"น้ำดื่ม น้ำอัดลม น้ำหวาน",
      image:"https://food.mthai.com/app/uploads/2019/02/drink.jpg",
    },
    {
      id:4,
      type:"พุดดิ้ง",
      name:"พุดดิ้ง",
      detail:"ของหวาน เค้ก พุดดิ้ง",
      image:"https://i.pinimg.com/originals/22/3f/7b/223f7bfa7de6ebee2a3130eec89d3227.jpg",
    }];

    /*this.data1=[{
      id : 1,
      title : "test1",
      detail : "test11",
      image : "https://i.ytimg.com/vi/QdpQwfXhrAQ/maxresdefault.jpg",
      price : 111
    },
    {
      id : 2,
      title : "test2",
      detail : "test22",
      image : "https://i.ytimg.com/vi/QdpQwfXhrAQ/maxresdefault.jpg",
      price : 222
    }];

    this.data2=[{
      id : 1,
      title : "test1",
      detail : "test11",
      image : "https://i.ytimg.com/vi/QdpQwfXhrAQ/maxresdefault.jpg",
      price : 111
    },
    {
      id : 2,
      title : "test2",
      detail : "test22",
      image : "https://i.ytimg.com/vi/QdpQwfXhrAQ/maxresdefault.jpg",
      price : 222
    }];

    this.data3=[{
      id : 1,
      title : "test1",
      detail : "test11",
      image : "https://i.ytimg.com/vi/QdpQwfXhrAQ/maxresdefault.jpg",
      price : 111
    },
    {
      id : 2,
      title : "test2",
      detail : "test22",
      image : "https://i.ytimg.com/vi/QdpQwfXhrAQ/maxresdefault.jpg",
      price : 222
    }];

    this.data4=[{
      id : 1,
      title : "test1",
      detail : "test11",
      image : "https://i.ytimg.com/vi/QdpQwfXhrAQ/maxresdefault.jpg",
      price : 111
    },
    {
      id : 2,
      title : "test2",
      detail : "test22",
      image : "https://i.ytimg.com/vi/QdpQwfXhrAQ/maxresdefault.jpg",
      price : 222
    }];*/

  }

  loadAll(){
    return Promise.resolve(this.data);
  }

  loadById(placeId:any){
    // for(var i=0;i<(this.data).length;i++){
    //   if(this.data[i].id == id){
    //     return Promise.resolve(this.data[i]);
    //   }
    // } 
    let place = this.data.find( ({id}) => id===placeId );
    return Promise.resolve(place);
  }

  /*loadById1(){
    return Promise.resolve(this.data1);
  }

  loadById2(){
    return Promise.resolve(this.data2);
  }

  loadById3(){
    return Promise.resolve(this.data3);
  }

  loadById4(){
    return Promise.resolve(this.data4);
  }*/

}