import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Sponsor } from '../model/sponsor/sponsor.model';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  private sponsorsList = this.db.list<Sponsor>('sponsors', ref =>
  ref.orderByChild('order'));

  constructor(
    public http: HttpClient,
    private db: AngularFireDatabase
  ) { }


  getSponsors() {
    return this.db.list<Sponsor>('sponsors', ref => ref.orderByChild('order')).snapshotChanges().pipe(map(changes => {
      console.log(changes);
        return changes.map(c => ({
         key: c.payload.key, ...c.payload.val()
        }))
      }));

    // console.log(this.sponsorsList)
    // return this.sponsorsList;
    
  }
}
