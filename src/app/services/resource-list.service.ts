import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Resource } from '../model/resource/resource.model';
import { Storage } from '@ionic/storage';
import { NetworkService, ConnectionStatus } from './network.service'
import { Observable, from } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";

const API_STORAGE_KEY = 'specialkey';

@Injectable({
  providedIn: 'root'
})
export class ResourceListService {

  constructor(
    private db: AngularFireDatabase,
    public sdb: Storage,
    private networkService: NetworkService, 
    ) { }

  getResourceList() {
      return this.db.list<Resource>('resource', ref => ref.orderByChild('ProgramName')).snapshotChanges().pipe(map(changes => {
        // console.log(changes);
        return changes.map(c => ({
           key: c.payload.key, ...c.payload.val()
        }))
      }));
    }

  getCityList() {
      return this.db.list<Resource>('cities', ref => ref.orderByChild('city')).snapshotChanges().pipe(map(changes => {
        // console.log(changes);
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }));
  }

  getCategoryList() {
      return this.db.list<Resource>('categories', ref => ref.orderByChild('category')).snapshotChanges().pipe(map(changes => {
        // console.log(changes);
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }));
  }

  getCategoryESList() {
    return this.db.list<Resource>('categories_es', ref => ref.orderByChild('category_es')).snapshotChanges().pipe(map(changes => {
      // console.log(changes);
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    }));
}

getCategoryFRList() {
  return this.db.list<Resource>('categories_fr', ref => ref.orderByChild('category_fr')).snapshotChanges().pipe(map(changes => {
    // console.log(changes);
    return changes.map(c => ({
      key: c.payload.key, ...c.payload.val()
    }))
  }));
} 

getCategoryVIList() {
  return this.db.list<Resource>('categories_vi', ref => ref.orderByChild('category_vi')).snapshotChanges().pipe(map(changes => {
    // console.log(changes);
    return changes.map(c => ({
      key: c.payload.key, ...c.payload.val()
    }))
  }));
}

getCategoryZHList() {
  return this.db.list<Resource>('categories_zh', ref => ref.orderByChild('category_zh')).snapshotChanges().pipe(map(changes => {
    // console.log(changes);
    return changes.map(c => ({
      key: c.payload.key, ...c.payload.val()
    }))
  }));
}
  
    // Save result of API requests
  private setLocalData(key, data) {
      this.sdb.set(`${API_STORAGE_KEY}-${key}`, data);
  }
   
    // Get cached API result
  private getLocalData(key) {
      return this.sdb.get(`${API_STORAGE_KEY}-${key}`);
  }
  
}