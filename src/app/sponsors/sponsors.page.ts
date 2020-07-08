import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { SponsorsService } from '../services/sponsors.service';
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
  selector: 'app-sponsors',
  templateUrl: './sponsors.page.html',
  styleUrls: ['./sponsors.page.scss'],
})
export class SponsorsPage implements OnInit {

  @ViewChild(IonContent, {static: false}) content: IonContent

  isShown: boolean = false;
  sponsorsList: Observable<any[]>;
  sponsors: any = [];
  categories: string = '';
  searchTerm: string = '';
  pdfLink;
  dataReturned;
  // filesList;
  title

  constructor(
    private inAppBrowser: InAppBrowser,
    private sponsorsProvider: SponsorsService,
    public modalController : ModalController,
    private platform: Platform,
    // private fileOpener: FileOpener,
    // private document: DocumentViewer,
    public zone: NgZone,
    private toastController: ToastController,
    private firebaseAnalytics: FirebaseAnalytics,
    private _translate: TranslateService
  ) {   
    this.sponsorsList = this.sponsorsProvider.getSponsors();
  }

  ngOnInit() {
  }

  viewSponsor(sponsor) {

    let fixedUrl = sponsor.url;
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.inAppBrowser.create(fixedUrl, '_system', options);
    // this.firebaseAnalytics.logEvent('document_viewed', { document_viewed: file.title })
  }

}
