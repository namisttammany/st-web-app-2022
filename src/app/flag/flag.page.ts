import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, ToastController, Platform } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Contacts  } from '@ionic-native/contacts/ngx';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-flag',
  templateUrl: './flag.page.html',
  styleUrls: ['./flag.page.scss'],
})
export class FlagPage implements OnInit {

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

  title
  text1
  message
  send

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private http: HttpClient,
    public contacts: Contacts,
    private plt: Platform,
    private sanitizer: DomSanitizer,
    private toastController: ToastController,
    private _translate: TranslateService
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.sendmessage = this.navParams.data.message.message;
    console.log(this.sendmessage)

    this.title = 'details.flag'
    this.text1 = 'flag.report'
    this.message = 'flag.message'
    this.send = 'sharemenu.send'
  }

  async closeModal() {
    const onClosedData: string = "Resource Flagged!";
    await this.modalController.dismiss(onClosedData);
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
        message: msg,
        duration: 4000
      });
         toast.present();
  }

  sendFlagResource(){
    var message = this.sendmessage;
    if(!this.personalMessage || this.personalMessage == undefined){

    } else {
      message = 'This resource was flagged' + '\n' + message + '\n' + '\n' + this.personalMessage;
      }

      var address = 'mobileapp@namisttammany.org';
      
      
      this.http.post('https://fathomless-ocean-93452.herokuapp.com/sendEmail', {"email":message, "to":address}).subscribe(
        (val) => { console.log("POST call successful value returned in body", val);
                 },
        response => { console.log("POST call in error", response);
                    },
        () => { console.log("The POST observable is now completed.");
              }
        );
      
      
    //   .pipe(
    //     map(res => res.json())).subscribe(response => {
    //     console.log('POST Response:', response);
    //     response.end(response);
    // });  
    
    // this.http.post('https://fathomless-ocean-93452.herokuapp.com/sendEmail', {"email":message, "to":address}).pipe(
    //     map(res => res.json())).subscribe(response => {
    //     console.log('POST Response:', response);
    //     response.end(response);
    // });       //add .then to allow only 1 request
    this.closeModal();
    
    }

}
