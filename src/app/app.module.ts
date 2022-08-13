import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouteReuseStrategy, RouterStateSnapshot } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResourceListService } from './services/resource-list.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { FavoritesListService } from './services/favorites-list.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ShareModalPageModule } from './share-modal/share-modal.module'
import { PhoneselectModalPageModule } from './phoneselect-modal/phoneselect-modal.module'
import { Contacts } from '@ionic-native/contacts/ngx';
import { AuthService } from './services/auth.service';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FlagPageModule } from './flag/flag.module';
import { GooglePlus } from '@ionic-native/google-plus/ngx'
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { Network } from '@ionic-native/network/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import {
  SignInWithApple,
  AppleSignInResponse,
  AppleSignInErrorResponse,
  ASAuthorizationAppleIDRequest,
} from '@ionic-native/sign-in-with-apple';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateConfigService } from './services/translate-config.service';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    IonicStorageModule.forRoot(),
    ShareModalPageModule,
    PhoneselectModalPageModule,
    FlagPageModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    LaunchNavigator,
    InAppBrowser,
    GooglePlus,
    Firebase,
    FirebaseAnalytics,
    Network,
    FCM,
    AuthService,
    Contacts,
    Globalization,
    TranslateConfigService,
    // **** Include below provider for apps that use external URL for the ABOUT page ****
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
      {
          window.open("https://applogin.namisttammany.org");
      }
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
  }