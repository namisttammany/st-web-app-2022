
import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  SignInWithApple,
  AppleSignInResponse,
  AppleSignInErrorResponse,
  ASAuthorizationAppleIDRequest
} from '@ionic-native/sign-in-with-apple';
import * as firebase from 'firebase/app';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';
  error: string = '';

  title
  anon
  apple
  privacypolicy
  datatext1
  datatext2
  datatext4
  google
  reset
  signup
  text1
  text4
  language
  formEmail
  formPassword

  constructor(
    private authService: AuthService,
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private globalization: Globalization,
    private _translate: TranslateService
  ) { 
    this.fireauth.auth.signOut().then(() => {
      console.log('logged out')
      // this.router.navigate(['/login']);
    })
  }

  ngOnInit() {
    
    this.formEmail = 'login.email';

    this.formPassword = 'login.password';
  
    this.title = 'login.title';
  
    this.text1 = 'login.text1';
    
    this.datatext1 = 'login.data.text1';
   
    this.datatext1 = 'login.data.text2';
   
    this.privacypolicy = 'login.data.privacypolicy';

    this.datatext4 = 'login.data.text4';

    this.google = 'login.google';
 
    this.text4 = 'login.text4';

    this.apple = 'login.apple';
 
    this.anon = 'login.anon';

    this.signup = 'login.signup';

    this.reset = 'login.reset';
 
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

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then((res) => {
      this.router.navigate(['/home']);
    })
  }

  login() {
    this.fireauth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        if (res.user) {
          console.log(res.user);
          this.router.navigate(['/home']);
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

  goToHomePage(params){
    this.router.navigate(['/home'])
  }

   createAnonymousUser(): Promise<any> {
    return this.fireauth.auth.signInAnonymously().then(res => {
      if (res.user) {
        console.log(res.user);
        this.router.navigate(['/home']);
      }
    })
    .catch(err => {
      console.log(`login failed ${err}`);
      this.error = err.message;
    });;
  }

  // Sign in with Apple
  async nativeAppleAuth(): Promise<void> {
    try {
      const appleCredential: AppleSignInResponse = await SignInWithApple.signin({
        requestedScopes: [
          ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
          ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
        ]
      });
      const credential = new firebase.auth.OAuthProvider('apple.com').credential(
        appleCredential.identityToken
      );
      const response = await this.fireauth.auth.signInWithCredential(credential);
      console.log('Login successful', response);
    } catch (error) {
      console.log(error);
    }
  }

}
