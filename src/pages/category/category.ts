import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { AlertController } from 'ionic-angular';
import { MarketplacePage } from '../marketplace/marketplace';



@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  private categories:any[];
  private cities:any[];
  private items:any[];
  private selector:string;
  private city:any;
  private category:any;

  constructor(public navCtrl: NavController, 
    private api:Api, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');

  }
  ionViewWillEnter(){
    console.log("ionviewdidEnter");
    this.getList();
    this.filterList();
  }

  async getList(){
    let databasecreds = {
      username: "username",
      password: "test",
    };

    let items:any = await this.api.marketPlaceService(databasecreds,"fetchAllDeals.php");
    console.log(items.deals);
    this.items = items.deals;
    //this.items = this.categories;

  }

  async filterList(){
    let databasecreds = {
      username: "username",
      password: "test",
    };

    let filter:any= await this.api.marketPlaceService(databasecreds,"fetchCityAndCategory.php");
    this.categories = filter.categories;
    this.cities = filter.cities;
    console.log(this.cities);
    //this.items = this.categories;
    //this.selector = "category_id";
  }
  
  async itemSelected(id){
    let databasecreds = {
      username: "username",
      password: "test",
    };

    console.log(id);
    this.navCtrl.push(MarketplacePage,{ item: id });
    //this.api.marketPlaceService(databasecreds,"fetchAllDeals.php?"+this.selector+"="+id);

  }

  listCity(){
    this.items = this.cities;
    this.selector = "city_id";
  }

  listCategory(){
    this.items = this.categories;
    this.selector = "category_id";
  }


  async doFilter(){

    if(this.city!=undefined && this.category!= undefined){
      let databasecreds = {
        username: "username",
        password: "test",
      };
      let items:any = await this.api.marketPlaceService(databasecreds,"fetchAllDeals.php?category_id="+this.category+"&city_id="+this.city);
      this.items = items.deals;
    }
    if(this.city===undefined && this.category != undefined){
      console.log(this.category);
      let databasecreds = {
        username: "username",
        password: "test",
      };
  
      let items:any = await this.api.marketPlaceService(databasecreds,"fetchAllDeals.php?category_id="+this.category);
      this.items = items.deals;
    }
    if(this.city!=undefined && this.category === undefined){
      console.log(this.city);
      let databasecreds = {
        username: "username",
        password: "test",
      };
  
      let items:any = await this.api.marketPlaceService(databasecreds,"fetchAllDeals.php?city_id="+this.city);
      this.items = items.deals;
    }
  }

  async reset(){
    this.city = '';
    this.category = '';
    this.getList();
  }
}
