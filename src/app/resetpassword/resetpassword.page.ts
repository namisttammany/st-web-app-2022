import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage {

  email: string = '';
  password: string = '';
  error: string = '';
  username: string = '';
  image: number;

  text1
  text2
  button
  forgot
  login
  formEmail;

  constructor(
    private fireauth: AngularFireAuth, 
    private router: Router, 
    private toastController: ToastController, 
    public loadingController: LoadingController,
    public alertController: AlertController,
    private globalization: Globalization,
    private _translate: TranslateService,
  ) {

  }

  ngOnInit() {
    
      this.text1 = 'reset.text1';
    
      this.text2 = 'reset.text2';
  
      this.login = 'reset.login';

      this.forgot = 'reset.forgot';

      this.button = 'reset.button';

      this.formEmail = 'login.email';
  
  }

  async openLoader() {
    const loading = await this.loadingController.create({
      message: 'Please Wait ...',
      duration: 2000
    });
    await loading.present();
  }
  async closeLoading() {
    return await this.loadingController.dismiss();
  }

  recover() {
    this.fireauth.auth.sendPasswordResetEmail(this.email)
      .then(data => {
        console.log(data);
        this.presentToast('Password reset email sent', false, 'bottom', 2000);
        this.router.navigate(['/login']);
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastController.create({
      message: message,
      // showCloseButton: show_button,
      position: position,
      duration: duration
    });
    toast.present();
  }


}
