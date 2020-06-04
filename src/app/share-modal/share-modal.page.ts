import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, ToastController, Platform } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Contacts  } from '@ionic-native/contacts/ngx';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PhoneselectModalPage } from '../phoneselect-modal/phoneselect-modal.page';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.page.html',
  styleUrls: ['./share-modal.page.scss'],
})
export class ShareModalPage implements OnInit {

  modalTitle:string;
  modelId:number;
  recipient;
  sendmessage;
  recipientNumber;
  recipientEmail;
  everybody;
  toggleEmail: boolean = false;
  phonenumberEntered = '';
  emailEntered = '';
  personalMessage = '';
  dataReturned;

  // URLs to REST API deployed in Heroku
  // Ensure urls are modified for each app version
  herokuSMS: string = 'https://fathomless-ocean-93452.herokuapp.com/sendsms'
  herokuEMAIL: string = 'https://fathomless-ocean-93452.herokuapp.com/sendEmail'

  title
  phone
  email
  personalMsg 
  closeButton
  contactsButton
  sendButton

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private http: HttpClient,
    public contacts: Contacts,
    private plt: Platform,
    private sanitizer: DomSanitizer,
    private toastController: ToastController,
    private firebaseAnalytics: FirebaseAnalytics,
    private _translate: TranslateService
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.sendmessage = this.navParams.data.message.message;
    console.log(this.sendmessage)

    this.title = 'sharemenu.share'
    this.email = 'sharemenu.email'
    this.phone = 'sharemenu.phone'
    this.personalMsg = 'sharemenu.message'
    this.closeButton = 'sharemenu.close'
    this.contactsButton = 'sharemenu.contacts'
    this.sendButton  = 'sharemenu.send'

  }

  async closeModal() {
    const onClosedData: string = "Shared Successfully!";
    await this.modalController.dismiss(onClosedData);
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
        message: msg,
        duration: 4000
      });
         toast.present();
  }
  
  async openModal(data) {
    const modal = await this.modalController.create({
      component: PhoneselectModalPage,
      componentProps: {
        "message": data
      }
      });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        this.phonenumberEntered = this.dataReturned;
        alert('Selected :'+ this.dataReturned);
      }
      });
      return await modal.present();
    }

  selectContact(){
    this.phonenumberEntered = '';
    this.emailEntered = '';
    this.recipient = this.contacts.pickContact().then((contact) => {
      console.log('The following contact has been selected:' + JSON.stringify(contact));
      if(contact.emails == null){
        if(contact.phoneNumbers.length>1)
          {
          // **** Open modal to select phone number **** //
          var data = { message: contact.phoneNumbers};
          this.openModal(data).then(() => {
            console.log(this.phonenumberEntered)
          })
          } else {
          this.phonenumberEntered = contact.phoneNumbers[0].value;
          }
        // **** Return phone number selected **** //
      }
      if(contact.phoneNumbers == null){
        this.emailEntered = contact.emails[0].value;
      }
      if (contact.emails[0].value !== null && contact.phoneNumbers[0].value !== null)
      {
        this.emailEntered = contact.emails[0].value;
        if(contact.phoneNumbers.length>1)
          {
          var data = { message: contact.phoneNumbers};
          this.openModal(data).then(() => {
            console.log(this.phonenumberEntered)
          })
          } else {
          this.phonenumberEntered = contact.phoneNumbers[0].value;
          }
      } 
      console.log(this.emailEntered)
      console.log(this.phonenumberEntered)
      });
  }

  sendShare() {
    var message = this.sendmessage;
    if(!this.personalMessage || this.personalMessage == undefined){
    } else {
      message = message + '\n' + this.personalMessage;
      }
    if((!this.phonenumberEntered || this.phonenumberEntered == undefined || this.phonenumberEntered == '') && (!this.emailEntered || this.emailEntered == undefined || this.emailEntered == '')){
      alert("Enter recipient phone number or email to share")
      return
    }
    if(!this.phonenumberEntered || this.phonenumberEntered == undefined || this.phonenumberEntered == ''){
      this.showToast("Phone # not entered, only email will be sent to " + this.emailEntered)
    } else {
      var to = this.phonenumberEntered;

      this.http.post(this.herokuSMS, {"sms":message, "to":to}).subscribe(
        (val) => {
          console.log("POST call successful value returned in body", 
                      val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
    }
    if(!this.emailEntered || this.emailEntered == undefined || this.emailEntered == ''){
      this.showToast("Email not entered, only text will be sent to " + this.phonenumberEntered)
    } else {
      var address = this.emailEntered;
      this.http.post(this.herokuEMAIL, {"email":message, "to":address}).subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
            val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });;
    }
    this.closeModal();
  }
}
