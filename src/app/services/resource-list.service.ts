import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Resource } from '../model/resource/resource.model';
import { Storage } from '@ionic/storage';
import { NetworkService, ConnectionStatus } from './network.service'
import { Observable, from } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";
import { TranslateConfigService } from './translate-config.service';


const API_STORAGE_KEY = 'specialkey';

@Injectable({
  providedIn: 'root'
})
export class ResourceListService {
  selectedLanguage: string;

  constructor (
    private db: AngularFireDatabase,
    public sdb: Storage,
    private networkService: NetworkService, 
    private translateConfigService: TranslateConfigService,

    ) {
      this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
     }

  getResourceList() {

    if (this.selectedLanguage = 'en') {
      return this.db.list<Resource>('resource', ref => ref.orderByChild('ProgramName')).snapshotChanges().pipe(map(changes => {
        console.log(changes);
          return changes.map(c => ({
           key: c.payload.key, ...c.payload.val()
          }))
        }));
      }
    
    if (this.selectedLanguage = 'es') {
      return this.db.list<Resource>('resource', ref => ref.orderByChild('ProgramName')).snapshotChanges().pipe(map(changes => {
        console.log(changes);
          return changes.map(c => ({
           key: c.payload.key, ...c.payload.val()
          }))
        }));
    }
  }
  getCityList() {
      return this.db.list<Resource>('cities', ref => ref.orderByChild('city')).snapshotChanges().pipe(map(changes => {
        console.log(changes);
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }));
  }

  getCategoryList() {
      return this.db.list<Resource>('categories', ref => ref.orderByChild('category')).snapshotChanges().pipe(map(changes => {
        console.log(changes);
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }));
  }
  
  //   // Save result of API requests
  // private setLocalData(key, data) {
  //     this.sdb.set(`${API_STORAGE_KEY}-${key}`, data);
  // }
   
  //   // Get cached API result
  // private getLocalData(key) {
  //     return this.sdb.get(`${API_STORAGE_KEY}-${key}`);
  // }
  
}
