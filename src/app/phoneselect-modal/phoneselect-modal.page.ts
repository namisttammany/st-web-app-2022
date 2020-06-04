import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Platform, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Contacts  } from '@ionic-native/contacts/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-phoneselect-modal',
  templateUrl: './phoneselect-modal.page.html',
  styleUrls: ['./phoneselect-modal.page.scss'],
})
export class PhoneselectModalPage implements OnInit {

  phoneNumbers;
  passedNumbers;

  title

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private http: HttpClient,
    public contacts: Contacts,
    private plt: Platform,
    private sanitizer: DomSanitizer,
    private toastController: ToastController,
    private _translate: TranslateService
  ) {     
    this.phoneNumbers = this.navParams.data.message.message;
    console.log("now showing #s")
    console.log(this.phoneNumbers)
  }

  ngOnInit() {
    // this.phoneNumbers = this.navParams.data.message;
    // console.log("now showing #s")
    // console.log(this.phoneNumbers)
    this.title = 'phone.select'

  }

  async showToast(msg) {
    const toast = await this.toastController.create({
        message: msg,
        duration: 4000
      });
         toast.present();
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

  async select(number){
    console.log(number.value)
    await this.modalController.dismiss(number.value);
  }

}
