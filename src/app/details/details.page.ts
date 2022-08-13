import { Component, OnInit } from '@angular/core';
import { Resource } from '../model/resource/resource.model';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { HTTP } from '@ionic-native/http'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser/ngx";
import { ModalController, ToastController, Platform } from '@ionic/angular';
import { FavoritesListService } from '../services/favorites-list.service';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareModalPage } from '../share-modal/share-modal.page'
// import { PhoneselectModalPage } from '../phoneselect-modal/phoneselect-modal.page';
import { FlagPage } from '../flag/flag.page'
import { ActionSheetController } from '@ionic/angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  language;

  destination:string;
  start:string;

  resource: Resource = {
    key: '',
    Address: '',
    AgeServed: '',
    ApplicationProcess: '',
    Category: '',
    CoverageArea: '',
    Description: '',
    Description_es: '',
    Description_fr: '',
    Description_vi: '',
    Description_zh: '',
    Eligibility: '',
    EmailAddress: '',
    Fax: '',
    Fees: '',
    Hours: '',
    LocationCity: '',
    LocationState: '',
    ProgramName: '',
    TelephoneDescription1: '',
    TelephoneNumber1: '',
    TelephoneNumber2: '',
    TelephoneNumber2Description: '',
    Website: '',
    Zip: '',
    id: '',
    isFavorite: false
  };

isFavorite: any;
resourceString: string;
favorites: any;
resources: Resource[] = [];
newResource: Resource = <Resource>{};
newFavorites: Resource = <Resource>{};
returnData: any; 
dataReturned: any;

flag
share
call
navigateTo
goToWebsite
cancel
title
acShare

address;
telephone;
website;
hours;
categories;
eligibility;
ageserved;
fee;


  constructor(
    public callNumber: CallNumber,
    private launchNavigator: LaunchNavigator,
    private inAppBrowser: InAppBrowser,
    public modalController: ModalController,
    private toastController: ToastController,
    public platform : Platform, 
    public favoriteProvider: FavoritesListService,
    private route: ActivatedRoute,
    public router: Router,
    public actionSheetController: ActionSheetController,
    private firebaseAnalytics: FirebaseAnalytics,
    private _translate: TranslateService

  ) { 
    // this.resource = history.state.data
  
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    console.log(this.router.url)
    console.log(this.route.snapshot.paramMap.get('key'));

    firebase.database().ref('resource/' + this.route.snapshot.paramMap.get('key')).on('value', resp => {
      this.resource = snapshotToObject(resp);
      console.log(this.resource);
        return false;
      });

    console.log(this.resource);
    this.resourceString = JSON.stringify(this.resource);
    this.favoriteProvider.isFavorite(this.resourceString).then(isFav => {
      this.isFavorite = isFav;
    });

    // this.firebaseAnalytics.logEvent('resource_viewed', {page: this.resource.ProgramName })

  }

  ngOnInit() {

    this.language = this._translate.getDefaultLang();
    console.log(this.language)
    
    this.firebaseAnalytics.logEvent('resource_viewed', {resource_viewed: this.resource.ProgramName })
   

    this.title = 'page.details'
    this.address = 'details.address'
    this.telephone = 'details.phone'
    this.hours = 'details.hours'
    this.categories = 'details.categories'
    this.eligibility = 'details.eligibility'
    this.ageserved = 'details.ageserved'
    this.website = 'details.website'
    this.fee = 'details.fee'

    this._translate.get('details.flag').subscribe((res: string) => {
      console.log(res);
      this.flag = res;
    });
  
    this._translate.get('details.share').subscribe((res: string) => {
      console.log(res);
      this.share = res;
    });
  
    this._translate.get('details.call').subscribe((res: string) => {
      console.log(res);
      this.call = res;
    });
    this._translate.get('details.navigate').subscribe((res: string) => {
      console.log(res);
      this.navigateTo = res;
    });
    this._translate.get('details.website').subscribe((res: string) => {
      console.log(res);
      this.goToWebsite = res;
    });
    this._translate.get('sharemenu.cancel').subscribe((res: string) => {
      console.log(res);
      this.cancel = res;
    });
    this._translate.get('sharemenu.share').subscribe((res: string) => {
      console.log(res);
      this.acShare = res;
    });
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
         toast.present();
  }

  async openModal(data) {
    const modal = await this.modalController.create({
      component: ShareModalPage,
      componentProps: {
        "message": data
      }
      });
  
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        // alert('Modal Sent Data :'+ this.dataReturned);
      }
      });
  
      return await modal.present();
    }

    async openFlagModal(data) {
      const modal = await this.modalController.create({
        component: FlagPage,
        componentProps: {
          "message": data
        }
        });
    
      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          this.dataReturned = dataReturned.data;
          // alert('Modal Sent Data :'+ this.dataReturned);
        }
        });
        return await modal.present();
      }

      async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
          header: this.acShare,
          buttons: [{
            text: this.flag,
            role: 'destructive',
            icon: 'flag',
            handler: () => {
              this.flagResource();
              // this.router.navigate(['/home'])
              // this.clearSelected();
              console.log('Opening Flag Modal');
            }
          }, {
            text: this.share,
            icon: 'share',
            handler: () => {
              this.regularShare();
              console.log('Opening Share Modal');
            }
          },{
            text: this.cancel,
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]
        });
        await actionSheet.present();
      }

  favoriteResource() {
    this.favoriteProvider.favoriteResource(this.resourceString).then(() => {
      this.isFavorite = true;
      this.showToast('Resource added to Favorites.');
    });

    this.firebaseAnalytics.logEvent('favorite_added', {favorite_added: this.resource.ProgramName })
      // .then((res: any) => console.log(res))
      // .catch((error: any) => console.error(error));
  }

  unfavoriteResource() {
    this.favoriteProvider.unfavoriteResource(this.resourceString).then(() => {
      this.isFavorite = false;
      this.showToast('Resource removed from Favorites.');
    });

    this.firebaseAnalytics.logEvent('favorite_removed', {favorite_removed: this.resource.ProgramName })
      // .then((res: any) => console.log(res))
      // .catch((error: any) => console.error(error));
  }

  openWebpage() {
      let fixedUrl = this.resource.Website;
      const options: InAppBrowserOptions = {
      zoom: 'no'
      }
      const browser = this.inAppBrowser.create(fixedUrl, '_system', options);

      this.firebaseAnalytics.logEvent('website_opened', {website_visit: this.resource.ProgramName })
      // .then((res: any) => console.log(res))
      // .catch((error: any) => console.error(error));
    }

  phone(){
    this.callNumber.callNumber(this.resource.TelephoneNumber1, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));

    this.firebaseAnalytics.logEvent('resource_called', {resource_called: this.resource.ProgramName }) 
      // .then((res: any) => console.log(res))
      // .catch((error: any) => console.error(error));
    }

  navigate(){
    let options: LaunchNavigatorOptions = {
    start: this.start
    } 
    var address = this.resource.Address.toString() + " " + this.resource.LocationCity.toString() + ", " + this.resource.LocationState.toString() + " " + this.resource.Zip.toString();
    this.launchNavigator.navigate(address, options)
      .then(
        success => alert('Launched navigator'),
        error => alert('Error launching navigator: ' + error));

    this.firebaseAnalytics.logEvent('navigator_opened', {resource_navigated: this.resource.ProgramName })
      // .then((res: any) => console.log(res))
      // .catch((error: any) => console.error(error));
  }

  regularShare() {
if (this.language == 'en') {

    var msg  = this.resource.ProgramName + '\n' + this.resource.Description + '\n' + this.resource.TelephoneNumber1 + '\n' + this.resource.EmailAddress + '\n' + this.resource.Website + '\n';
    msg = msg + "This information is provided by NAMI St. Tammany.  For more behavioral health information www.namist.org" + '\n'
} 
if (this.language == 'es') {

  var msg  = this.resource.ProgramName + '\n' + this.resource.Description_es + '\n' + this.resource.TelephoneNumber1 + '\n' + this.resource.EmailAddress + '\n' + this.resource.Website + '\n';
  msg = msg + "Esta información es proporcionada por NAMI St. Tammany. Para obtener más información sobre salud del comportamiento www.namist.org" + '\n'
} 
if (this.language == 'fr') {

  var msg  = this.resource.ProgramName + '\n' + this.resource.Description_fr + '\n' + this.resource.TelephoneNumber1 + '\n' + this.resource.EmailAddress + '\n' + this.resource.Website + '\n';
  msg = msg + "Ces informations sont fournies par NAMI St. Tammany. Pour plus d'informations sur la santé comportementale www.namist.org" + '\n'
} 
if (this.language == 'vi') {

  var msg  = this.resource.ProgramName + '\n' + this.resource.Description_vi + '\n' + this.resource.TelephoneNumber1 + '\n' + this.resource.EmailAddress + '\n' + this.resource.Website + '\n';
  msg = msg + "Thông tin này được cung cấp bởi NAMI St. Tammany. Để biết thêm thông tin về sức khỏe hành vi, www.namist.org" + '\n'
} 
if (this.language == 'zh') {

  var msg  = this.resource.ProgramName + '\n' + + this.resource.Description_zh + '\n' + this.resource.TelephoneNumber1 + '\n' + this.resource.EmailAddress + '\n' + this.resource.Website + '\n';
  msg = msg + "此信息由 NAMI St. Tammany 提供。如需更多行为健康信息，请访问 www.namist.org" + '\n'
} 
   
    var data = { message: msg };
    this.openModal(data).then(() => {
      // this.router.navigate(['/home'])
    });

    this.firebaseAnalytics.logEvent('resource_shared', { resource_shared: this.resource.ProgramName })
      
   }

  flagResource(){
    var msg  = this.resource.ProgramName + '\n' + this.resource.TelephoneNumber1 + '\n' + this.resource.EmailAddress + '\n' + this.resource.Website + '\n';
    var data = { message: msg };
    this.openFlagModal(data).then(() => {
      // this.router.navigate(['/home'])
    });

    this.firebaseAnalytics.logEvent('resource_flagged', { resource_flagged: this.resource.ProgramName })
      // .then((res: any) => console.log(res))
      // .catch((error: any) => console.error(error));
   }

   
}

export const snapshotToObject = snapshot => {
  const item = snapshot.val();
  item.key = snapshot.key;
  // console.log(item);
  return item;
};