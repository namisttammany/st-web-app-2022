import { Component, OnInit, NgZone } from '@angular/core';
import 'firebase/database';
import { FavoritesListService } from '../services/favorites-list.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import { Content } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  shareAllString: string = '';
  resourceList: Array<any>
  resourceListTemp: Array<any>
  selectItems:number = 0;
  isChecked: boolean = false;
  shareSelectedString: string;
  selectedResources: Array<any> = []
  title

  constructor(
    public favoriteProvider: FavoritesListService,
    public modalCtrl : ModalController,
    public zone: NgZone,
    private _translate: TranslateService
  ) { 
      this.resourceList = [];
      this.shareSelectedString = '';
      this.selectItems = 0;
      this.selectedResources = [];
      this.favoriteProvider.getAllFavoriteResources().then((data:any) => {
          this.resourceList = data;
          console.log(this.resourceList);
          });
      console.log(this.resourceList.length);
      this.selectItems = 0;
      this.selectedResources = [];
  }

  ngOnInit() {
    this.title = 'page.favorites'
  }

  updateSelected(event, resource) {
    console.log(event.checked);
    if(event.checked){
      console.log("not found in selected, adding");
      this.selectItems = this.selectItems + 1;
      this.selectedResources.push(resource);
    }
    if(!event.checked){
      let index: number = this.selectedResources.indexOf(resource);
      this.selectItems = this.selectItems - 1;
      this.selectedResources.splice(index, 1);
    }
    console.log(this.selectedResources)
  }

  shareAll() {
    this.shareAllString = '';
    this.resourceList.forEach((value, key, index) => {
        let name = value.ProgramName;
        let phone = value.TelephoneNumber1;
        let website = value.Website;
        let email = value.EmailAddress;
          this.shareAllString = this.shareAllString + '\n' + name + '\n' + phone + '\n' + website + '\n' + email + '\n';
          console.log(this.shareAllString);
          
      });
    this.shareAllString = this.shareAllString + '\n' + "This information is provided by _______" + '\n';
    var data = { message: this.shareAllString};
    // var modalPage = this.modalCtrl.create('ShareModalPage', data, { cssClass: 'test-modal' });
    // modalPage.present();
  }

  shareSelected() {
    if(this.selectItems == 0){
      alert("No resoureces selected - please choose at least 1")
    return
    }
    this.shareSelectedString = '';
    for(let i = 0; i<this.selectedResources.length; i++) {
        let name = this.selectedResources[i].ProgramName;
        let phone = this.selectedResources[i].TelephoneNumber1;
        let website = this.selectedResources[i].Website;
        let email = this.selectedResources[i].EmailAddress;
          this.shareSelectedString = this.shareSelectedString + '\n' + name + '\n' + phone + '\n' + website + '\n' + email + '\n';
          console.log(this.shareSelectedString);
      }
    console.log('exited for loop')      
    this.shareSelectedString = this.shareSelectedString + '\n' + "This information is provided by _______" + '\n';
    var data = { message: this.shareSelectedString};
    // var modalPage = this.modalCtrl.create('ShareModalPage', data, { cssClass: 'test-modal' });
    // modalPage.present();         
  }

}

