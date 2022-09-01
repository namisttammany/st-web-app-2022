
import { Component, ViewChild, NgZone, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ResourceListService } from '../services/resource-list.service';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import 'rxjs/add/operator/filter'
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { ShareModalPage } from '../share-modal/share-modal.page'
import { ActionSheetController } from '@ionic/angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { IonContent } from '@ionic/angular'
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../services/translate-config.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonContent, {static: false}) content: IonContent

  cityList;

  categoryList;
  categoryENList;

  categoryESList;
  categoryFRList;
  categoryVIList;
  categoryZHList;

  isChecked: boolean = false;
  resourceList: any;
  selectResource;
  searchThisList: Observable<any>;
  searchedCity: any = [];
  searchedCategory:any = [];
  searchedCityTemp: any;
  results: any;
  resultsList: any;
  searchTerm: string = '';
  categories: string = '';
  cities: any = [];
  items: any;
  searchResults: any = [];
  selectItems:number =0;
  shareAllArray: any;
  shareAllString: string = '';
  shareMulti: string='';
  shareOneResourceString: string = '';
  modalMessage: string = '';
  recipient;
  isShown: boolean = false;
  selectedResources: Array<any> = [];
  shareSelectedString: string;
  resourceStringTemp: string;
  start: string | number[];
  dataReturned: any;
  numberOfSearchResults;
  search_analytics: string = '';
  mySubscription: any;

  pagetitle;
  acClear
  acCancel
  acClose
  acShareAll
  acShare
  language: string;

  selectcities;
  selectcategories;
  ok: string;
  cancel: string;

  catAddiction
  catDevelopment
  catEducation
  catEmergency
  catEmployment
  catFamily
  catGov
  catHome
  catHospitalsMed
  catHospitalsPsy
  catHousing
  catLegal
  catMedical
  catMental
  catResidential
  catSeniors
  catSuicide
  catWomen
  catYouth


  constructor(
    private resourceListService: ResourceListService,
    public modalCtrl : ModalController,
    public zone: NgZone,
    private toastController: ToastController,
    private router: Router,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    private firebaseAnalytics: FirebaseAnalytics,
    private _translate: TranslateService,
    private translateService: TranslateConfigService
  ) {

    this.language = this._translate.getDefaultLang();
    console.log(this.language)

    console.log(this.translateService.getDefaultLanguage())
    // if (this._translate.getBrowserLang() !== undefined) {
    
    //   this._translate.setDefaultLang(this._translate.getBrowserLang());
    //   console.log('browser language is', this._translate.getBrowserLang());
    // }
    // else {
    //   // Set your language here
    //   this._translate.setDefaultLang('en');
    // }

    // this.language = this._translate.getDefaultLang();

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    
    // this.mySubscription = this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // Trick the Router into believing it's last link wasn't previously loaded
    //     this.router.navigated = false;
    //   }
    // });

    this.cityList = this.resourceListService.getCityList()
    this.categoryENList = this.resourceListService.getCategoryList()

    this.categoryESList = this.resourceListService.getCategoryESList();
    // console.log(this.categoryESList)

    this.categoryFRList = this.resourceListService.getCategoryFRList();
    this.categoryVIList = this.resourceListService.getCategoryVIList();
    this.categoryZHList = this.resourceListService.getCategoryZHList();

    this.searchThisList = this.resourceListService.getResourceList()
    

    // if (this.language = 'en'){
    //   this.categoryList = this.categoryENList
    // } else if (this.language = 'es') {
    //   this.categoryList = this.categoryESList
    // } else if (this.language = 'fr'){
    //   this.categoryList = this.categoryFRList
    // } else if (this.language = 'vi') {
    //   this.categoryList = this.categoryVIList
    // } else if (this.language = 'zh') {
    //   this.categoryList = this.categoryZHList
    // }
  

    this.selectItems = 0;
    this.selectedResources = [];
    this.shareSelectedString = '';
    
    this.searchResults = this.searchThisList;
    this.searchResults.forEach((result) => {
      this.numberOfSearchResults=result.length;
      // console.log(result.checked)
      result.checked = false;
    });    


  }

async ngOnInit() {

  this.language = this._translate.getDefaultLang();
  console.log(this.language)

  this.pagetitle ='page.resources'
  this.selectcategories = 'details.categories'
  this.selectcities = 'home.cities'
  this.ok = 'okText'
  this.cancel = 'cancelText'
  this.selectcategories = 'details.categories'
  this.selectcities = 'home.cities'

  this.catAddiction = "categories.Addiction"
  this.catDevelopment = "categories.Development"
  this.catEducation = "categories.Education"
  this.catEmergency = "categories.Emergency"
  this.catEmployment = "categories.Employment"
  this.catFamily = "categories.Family"
  this.catGov = "categories.Government"
  this.catHome = "categories.Home"
  this.catHospitalsMed = "categories.HospitalsMed"
  this.catHospitalsPsy = "categories.HospitalsPsy"
  this.catHousing = "categories.Housing"
  this.catLegal = "categories.Legal"
  this.catMedical = "categories.Medical"
  this.catMental = "categories.Mental"
  this.catResidential = "categories.Residential"
  this.catSeniors = "categories.Seniors"
  this.catSuicide = "categories.Suicide"
  this.catWomen = "categories.Women"
  this.catYouth = "categories.Youth"

  // if (this.language = 'en'){
  //   this.categoryList = this.categoryList
  // } else if (this.language = 'es') {
  //   this.categoryList = this.categoryESList
  // } else if (this.language = 'fr'){
  //   this.categoryList = this.categoryFRList
  // } else if (this.language = 'vi') {
  //   this.categoryList = this.categoryVIList
  // } else if (this.language = 'zh') {
  //   this.categoryList = this.categoryZHList
  // }
 

}

ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}

scrollToTop() {
  this.content.scrollToTop();
  this.isShown = false;
}
              
scrollStop(event) {
    this.zone.run(()=>{
      this.isShown = true;
    })
}

scrollHandler(event) {
  console.log(`ScrollEvent: ${event}`)
  this.zone.run(()=>{
    this.isShown = true;
  })
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

    }
    });

    return await modal.present();
  }

  //Action Sheet Controller - when fab button is pressed 
async presentActionSheet() {
  
  this._translate.get('sharemenu.clear').subscribe((res: string) => {
    console.log(res);
    this.acClear = res;
  });

  this._translate.get('sharemenu.cancel').subscribe((res: string) => {
    console.log(res);
    this.acCancel = res;
  });

  this._translate.get('sharemenu.close').subscribe((res: string) => {
    console.log(res);
    this.acClose = res;
  });
  this._translate.get('sharemenu.shareallresults').subscribe((res: string) => {
    console.log(res);
    this.acShareAll = res;
  });
  this._translate.get('sharemenu.share').subscribe((res: string) => {
    console.log(res);
    this.acShare = res;
  });

  const actionSheet = await this.actionSheetController.create({
      header: this.acShare,
      buttons: [{
        text: this.acClear,
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.router.navigate(['/home'])
          this.clearSelected();
          console.log('Cleared selected resources');
        }
      }, {
        text: this.acShare + ' '+ this.selectItems ,
        icon: 'share',
        handler: () => {
          this.shareSelected();
          console.log('Share clicked');
        }
      }, {
        text: this.acShareAll + ' '+ this.numberOfSearchResults ,
        icon: 'share',
        handler: () => {
          this.shareAllResults();
          console.log('Share All clicked');
        }
      }, {
        text: this.acCancel,
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

goToDetailsPage(resource, event){
    this.router.navigate(['/details'], resource.key);
  }



clearSelected(){
  window.location.reload();
  this.selectedResources = [];
  this.selectItems = 0;
}

search(){

  // Reset search_term to log to firebase analytics
  this.search_analytics = '';

  console.log(this.categories);
  console.log(this.cities);
  
  let val: string = this.searchTerm;
  
    if (val.trim() == '')
    {
    if (this.categories.length>0 && this.cities.length>0)
    {
      this.search_analytics = this.categories.toString() + ',' + this.cities.toString() + ',' + this.searchTerm;
      console.log(this.search_analytics)
      // Log to firebase analytics
      this.firebaseAnalytics.logEvent('search', {search_term: this.search_analytics})
      this.searchResults = this.searchThisList.pipe(map(data => data.filter(resource => {
        for(var j=0; j<this.cities.length; j++)
        {
          return resource.Category.split(", ").filter(function(e) {
            return this.indexOf(e) > -1;
          }, this.categories
          ).length == this.categories.length && resource.LocationCity.toString().includes(this.cities[j]);
          }
          }
          )));
    }
  
    // Search with mulitple categories
    if (this.categories.length>0 && this.cities.length==0) {
      this.search_analytics = this.categories.toString() + ',' + this.cities.toString() + ',' + this.searchTerm;
      console.log(this.search_analytics)
      // Log to firebase analytics
      this.firebaseAnalytics.logEvent('search', {search_term: this.search_analytics})
      this.searchResults = this.searchThisList.pipe(map(data => data.filter(resource => {
          return resource.Category.split(", ").filter(function(e) {
            return this.indexOf(e) > -1;
          }, this.categories
          ).length == this.categories.length;
        }
        )));
        }
  
    if (this.cities.length>0 && this.categories.length==0) {
          this.search_analytics = this.categories.toString() + ',' + this.cities.toString() + ',' + this.searchTerm;
          console.log(this.search_analytics)
          // Log to firebase analytics
          this.firebaseAnalytics.logEvent('search', {search_term: this.search_analytics})
          this.searchResults = this.searchThisList.pipe(map(data => data.filter(resource => {
            for(var i=0; i<this.cities.length; i++)
            {
                        if(resource.LocationCity.toString().includes(this.cities[i]))
                        {
                          console.log(resource.LocationCity.toString().includes(this.cities[i]))
                          this.searchedCity.push(resource)
                          console.log(this.searchedCity);
                          return resource.LocationCity.toString().includes(this.cities[i])
                        }
            }
              })));
    }
    if (this.cities.length==0 && this.categories.length==0) {
          this.searchResults = this.searchThisList;
    }
  }
  
  //searchTerm search
  
    if (val.trim() !== '')
    {
      this.search_analytics = this.categories.toString() + ',' + this.cities.toString() + ',' + this.searchTerm;
      console.log(this.search_analytics)
      // Log to firebase analytics
      this.firebaseAnalytics.logEvent('search', {search_term: this.search_analytics})
      if (this.categories.length>0 && this.cities.length>0)
        {
          console.log(Array.isArray(this.categories));
          console.log(Array.isArray(this.cities));

          this.searchResults = this.searchThisList.pipe(map(data => data.filter(resource => {
            for(var j=0; j<this.cities.length; j++)
            {
              return resource.Category.split(", ").filter(function(e) {
                return this.indexOf(e) > -1;
              }, this.categories
              ).length == this.categories.length && resource.LocationCity.toString().includes(this.cities[j]) &&
                          (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                          || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                          || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                          || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                          || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                          || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                          || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
              }
              }
              )));
        }
  
        if (this.categories.length>0 && this.cities.length==0) {
          console.log(Array.isArray(this.categories));

          this.searchResults = this.searchThisList.pipe(map(data => data.filter(resource => {
            return resource.Category.split(", ").filter(function(e) {
              return this.indexOf(e) > -1;
            }, this.categories
            ).length == this.categories.length &&
                        (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                        || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
              }
              )));
            }
  
  
            if (this.cities.length>0 && this.categories.length==0) {
  
              this.searchResults = this.searchThisList.pipe(map(data => data.filter(resource => {
                for(var i=0; i<this.cities.length; i++)
                {
                            if(resource.LocationCity.toString().includes(this.cities[i]) &&
                            (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                            || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                            || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                            || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                            || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                            || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                            || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1))
                            {
                              console.log(resource.LocationCity.toString().includes(this.cities[i]))
                              this.searchedCity.push(resource)
                              console.log(this.searchedCity);
                              return (resource.LocationCity.toString().includes(this.cities[i]) &&
                              (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                              || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                              || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                              || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                              || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                              || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                              || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1))
  
                            }
                }
                })));
            }
  
            if (this.cities.length==0 && this.categories.length==0) {
              this.searchResults = this.searchThisList.pipe(map(resource => resource.filter((resource) =>
              {
                return (resource.ProgramName.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                || resource.LocationCity.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                || resource.LocationState.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                || resource.TelephoneNumber1.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                || resource.Zip.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                || resource.Description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1
                || resource.Category.toString().toLowerCase().indexOf(val.toLowerCase()) > -1)
              })));
            }
    }

  this.searchResults.forEach((result) => {
    this.numberOfSearchResults=result.length;
  });
  
}

updateSelected(event, resource)
{
  console.log(event.detail.checked);
  console.log(resource.checked)
  console.log(this.selectedResources)

  if(event.detail.checked){
  console.log("not found in selected, adding");
  this.selectItems = this.selectItems + 1;
  this.selectedResources.push(resource);
  }
  if(!event.detail.checked){
    let index: number = this.selectedResources.indexOf(resource);
    this.selectItems = this.selectItems - 1;
    this.selectedResources.splice(index, 1);
  }
  console.log(this.selectedResources)
}

shareResource(event, resource){

  let name = resource.ProgramName;
  let phone = resource.TelephoneNumber1;
  let website = resource.Website;
  let email = resource.EmailAddress;
  let sms = name + '\n' + phone + '\n' + website + '\n' + email;
  this.shareOneResourceString = sms + '\n' + "This information is provided by NAMI St. Tammany.  For more behavioral health information call us at 985-626-6528, or www.namisttammany.org or www.facebook.com/namisttammany." + '\n';
  var data = { message: this.shareOneResourceString};

  this.openModal(data).then(() => {
    this.router.navigate(['/home'])
  });

}

shareSelected()
{

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
        // Log resource individually as shared into Firebase Analytics
        this.firebaseAnalytics.logEvent('share', {resources_shared: name})

        this.shareSelectedString = this.shareSelectedString + '\n' + name + '\n' + phone + '\n' + website + '\n' + email + '\n';
        console.log(this.shareSelectedString);
    }
    console.log('exited for loop')      
    this.shareSelectedString = this.shareSelectedString + '\n' + "This information is provided by NAMI St. Tammany.  For more behavioral health information call us at 985-626-6528, or www.namisttammany.org or www.facebook.com/namisttammany." + '\n';
    var data = { message: this.shareSelectedString};

    this.openModal(data).then(() => {
      // this.firebaseAnalytics.logEvent('share', {resources_shared: this.shareSelectedString})
      this.router.navigate(['/home'])
    });
}


shareAllResults()
{

 // ************************************************************************************************************************************ //

this.searchResults.forEach((result) => {
  
  console.log(result.length)
 
 for (let i = 0; i<result.length; i++){
  let name = result[i].ProgramName;
  let phone = result[i].TelephoneNumber1;
  let website = result[i].Website;
  let email = result[i].EmailAddress;
    this.shareAllString = this.shareAllString + '\n' + name + '\n' + phone + '\n' + website + '\n' + email + '\n';
   // Log resource individually as shared into Firebase Analytics
   this.firebaseAnalytics.logEvent('share', {resources_shared: name})
  }
    console.log('exited for loop')
    this.shareAllString = this.shareAllString + '\n' + "This information is provided by NAMI St. Tammany.  For more behavioral health information call us at 985-626-6528, or www.namisttammany.org or www.facebook.com/namisttammany" + '\n';
    console.log(this.shareAllString)
    var data = { message: this.shareAllString};

    this.openModal(data).then(() => {
      // this.firebaseAnalytics.logEvent('share', {resources_shared: this.shareAllString})
      this.router.navigate(['/home'])
      });
  })

 // ************************************************************************************************************************************ //

}

}
