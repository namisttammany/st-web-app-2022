import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from './services/translate-config.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage:string = 'LoginPage';
  navigate: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private auth: AuthService,
    private fcm: FCM,
    private fireauth: AngularFireAuth,
    private _translate: TranslateService,
    private translateService: TranslateConfigService,
  ) {

  // console.log(this._translate.getDefaultLang())
    if (this._translate.getBrowserLang() !== undefined && this._translate.getDefaultLang() === undefined) {
    
      this._translate.setDefaultLang(this._translate.getBrowserLang());
      // this.translateService.setLanguage('en')
      // console.log('browser language is', this._translate.getBrowserLang());
    } 
    // else if (this._translate.getDefaultLang() !== undefined){
    //   // Set your language here
    //    this._translate.setDefaultLang('es');
    // }

    // auth.afAuth.authState
    // .subscribe(
    //   user => {
    //     if (user) {
    //       this.router.navigate(['/home'])
    //     } else {
    //       this.router.navigate(['/login'])
    //     }
    //   },
    //   () => {
    //     this.router.navigate(['/login'])
    //   }
    // );

    // auth.afAuth.authState
    // .subscribe(
    //   user => {
    //     if (user) {
    //       this.router.navigate(['/home'])
    //     } else {
    //       this.router.navigate(['/login'])
    //     }
    //   },
    //   () => {
    //     this.router.navigate(['/login'])
    //   }
    // );
   
      this.router.navigate(['/home']);

      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.sideMenu();

        this.fcm.getToken().then(token => {
          console.log(token);
        });
  
        this.fcm.onTokenRefresh().subscribe(token => {
          console.log(token);
        });
  
        this.fcm.onNotification().subscribe(data => {
          console.log(data);
          if (data.wasTapped) {
            console.log('Received in background');
            this.router.navigate(['/about']);
          } else {
            console.log('Received in foreground');
            this.router.navigate(['/about']);
          }
        });
        
      })
    
}

logout() {
  this.fireauth.auth.signOut().then(() => {
    this.router.navigate(['/login']);
  })
}

sideMenu()
  {
    this.navigate =
    [
      {
        title : 'menu.home',
        url   : "/home",
        icon  : "home",
 
      },
      // {
      //   title : 'menu.about',
      //   url   : "/about",
      //   icon  : "information-circle-outline",

      // },
      // {
      //   title : 'menu.favorites',
      //   url   : "/favorites",
      //   icon  : "heart",
 
      // },
      {
        title : 'menu.documents',
        url   : "/documents",
        icon  : "document",
 
      },
      {
        title : 'menu.language',
        url   : "/language-modal",
        icon  : "text-outline",
 
      },
      {
        title : 'menu.request',
        url   : "/request",
        icon  : "text-outline",
 
      },
      // {
      //   title : 'menu.logout',
      //   url   : "/signout",
      //   icon  : "log-out",

      // },
    ]
  }

}
