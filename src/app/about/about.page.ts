import { Component, OnInit } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  title

  constructor(
    private firebaseAnalytics: FirebaseAnalytics,
  ) { }

  ngOnInit() {
    this.firebaseAnalytics.logEvent('about_page', {page: "about_page viewed" })
  
    this.title = 'menu.about'

  }

}
