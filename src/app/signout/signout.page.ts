import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.page.html',
  styleUrls: ['./signout.page.scss'],
})
export class SignoutPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  deleteUser(){
    console.log('delete user');
    firebase.auth().currentUser.delete();
  }

  signOut(){
    console.log('sign out');
    firebase.auth().signOut();

    firebase.auth().signOut().then(() => {
      this.router.navigate(['/login']);
    })
    
  }


}
