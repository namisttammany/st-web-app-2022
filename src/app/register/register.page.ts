import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform, AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = '';
  password: string = '';
  error: string = '';
  username: string = '';
  image: number;

  title
  login
  text1
  formEmail
  formPassword
  
  constructor(
    public router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private fireauth: AngularFireAuth, 
    private toastController: ToastController, 
    private platform: Platform, 
    public loadingController: LoadingController,
    public alertController: AlertController,
    private globalization: Globalization,
    private _translate: TranslateService
  ) {


   }

  ngOnInit() {

      this.title = 'register.title';

      this.text1 = 'register.text1';

      this.login = 'register.login';

      this.formEmail = 'login.email';

      this.formPassword = 'login.password';

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

  signup() {
    this.fireauth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(res => {
        if (res.user) {
          console.log(res.user);
          // this.updateProfile();
          this.router.navigate(['home']);
        }
      })
      .catch(err => {
        console.log(`login failed ${err}`);
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

  tryRegister(value){
  }

  goLoginPage(){
    this.router.navigate(['login']);
  }

}
