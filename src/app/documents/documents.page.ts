import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { DocumentsService } from '../services/documents.service';
import { Observable } from 'rxjs/Observable';
// import { File } from '@ionic-native/file';
// import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
// import { FileTransfer } from '@ionic-native/file-transfer';
// import { FileOpener } from '@ionic-native/file-opener';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';
// import { Content } from '@ionic/angular';
import * as firebase from 'firebase';
import { ShareModalPage } from '../share-modal/share-modal.page'
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser/ngx";
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { IonContent } from '@ionic/angular'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  @ViewChild(IonContent, {static: false}) content: IonContent
  
  isShown: boolean = false;
  filesList: Observable<any[]>;
  documents: any = [];
  categories: string = '';
  searchTerm: string = '';
  pdfLink;
  dataReturned;
  // filesList;
  title

  constructor(
    // private file: File,
    // private transfer: FileTransfer,
    private inAppBrowser: InAppBrowser,
    private documentsProvider: DocumentsService,
    public modalController : ModalController,
    private platform: Platform,
    // private fileOpener: FileOpener,
    // private document: DocumentViewer,
    public zone: NgZone,
    private toastController: ToastController,
    private firebaseAnalytics: FirebaseAnalytics,
    private _translate: TranslateService

  ) { 
      this.filesList = this.documentsProvider.getFiles().snapshotChanges().pipe(map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }));
      this.documents = this.filesList;
  }

  ngOnInit() { 
    this.title = 'page.documents'
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
      this.isShown = false;
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
      //alert('Modal Sent Data :'+ dataReturned);
    }
    });

    return await modal.present();
  }

  searchCategory(){

    let val: string = this.searchTerm;
    if (val.trim() == '' && this.categories.length>0) {
     this.documents = this.filesList.pipe(map(data => data.filter(files => {
      for(var i=0; i<this.categories.length; i++)
        {
          console.log(files.category)
          if(files.category.toString().toLowerCase().includes(this.categories[i].toLowerCase()))
          {
            return (files.category.toString().toLowerCase().includes(this.categories[i].toLowerCase()))
          }
      }
     })));
    }
    if (val.trim() == '' && this.categories.length==0) {
     this.documents=this.filesList;
    }
    if (val.trim() !== '' && this.categories.length>0) {
      this.documents = this.filesList.pipe(map(data => data.filter(files => {
        for(var i=0; i<this.categories.length; i++) {
          console.log(files.category)
          if((files.category.toString().toLowerCase().includes(this.categories[i].toLowerCase())) && (files.description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1))
          {
            return ((files.category.toString().toLowerCase().includes(this.categories[i].toLowerCase())) && (files.description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1))
          }
        }
      })));
    }
    if (val.trim() !== '' && this.categories.length==0) {
      this.documents = this.filesList.pipe(map(data => data.filter(files => {
          console.log(files.category)
          if(files.description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1) {
            return (files.description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1)
          }
        })));
      }
  }

  viewFile(file) {

    let fixedUrl = file.url;
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.inAppBrowser.create(fixedUrl, '_system', options);
    this.firebaseAnalytics.logEvent('document_viewed', { document_viewed: file.title })
  }

 

  shareFile(urlshort, title) {
    var message = title + '\n' + '\n' + urlshort + '\n' + "This information is provided by NAMI St. Tammany.  For more behavioral health information call us at 985-626-6528, or www.namisttammany.org or www.facebook.com/namisttammany" + '\n';
    var data = { message: message};
    // var modalPage = this.modalCtrl.create('ShareModalPage', data, { cssClass: 'test-modal' });
    // modalPage.present();
    this.openModal(data).then(() => {
      // this.router.navigate(['/home'])
    });
    this.firebaseAnalytics.logEvent('document_shared', { page: title })
  }
}
