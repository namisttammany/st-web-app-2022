import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';

import { AngularFireAuth } from '@angular/fire/auth';
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private user: firebase.User;

  constructor(
    public afAuth: AngularFireAuth,
    public platform: Platform,
    public googlePlus: GooglePlus,
	){
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  doRegister(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  doLogin(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  doGoogleLogin(){
      return new Promise<any>((resolve, reject) => {
         if (this.platform.is('cordova')) {

          console.log("platform is cordova")
          
          this.googlePlus.login({
            // 'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
            'webClientId': environment.googleWebClientId, // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
            'offline': true
          }).then((response) => {
            console.log('trying google login')
            const googleCredential = firebase.auth.GoogleAuthProvider.credential(response.idToken);
            firebase.auth().signInWithCredential(googleCredential)
            .then((user) => {
              this.user = user.user
              console.log(this.user)
              resolve();
            });
          },(err) => {
            reject(err);
          });
        }  
         else {
          console.log("platform is NOT cordova")
           firebase.auth()
           .signInWithPopup(new firebase.auth.GoogleAuthProvider())
           .then((user) => {
              resolve()
           },(err) => {
            reject(err);
          })


         }
       })
       }

  doLogout():Promise<void> {
    return new Promise<any>((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
        //  this.firebaseService.unsubscribeOnLogOut();
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }

  resetPassword(email:string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email).then(() => console.log("email sent"))
    .catch((error) => console.log(error));
  }

}
