import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController, Platform } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Contacts  } from '@ionic-native/contacts/ngx';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PhoneselectModalPage } from '../phoneselect-modal/phoneselect-modal.page';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../services/translate-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-modal',
  templateUrl: './language-modal.page.html',
  styleUrls: ['./language-modal.page.scss'],
})
export class LanguageModalPage implements OnInit {
  selectedLanguage: string;

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
    public contacts: Contacts,
    private plt: Platform,
    private sanitizer: DomSanitizer,
    private toastController: ToastController,
    private firebaseAnalytics: FirebaseAnalytics,
    private _translate: TranslateService,
    private translateConfigService: TranslateConfigService,
    private router: Router,

  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
   }

  ngOnInit() {
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  closeModal(){
    this.router.navigate(['/home']);
  }

}
