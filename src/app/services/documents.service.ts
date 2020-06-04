import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Resource } from '../model/resource/resource.model';


@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private filesList = this.db.list<Resource>('files', ref =>
  ref.orderByChild('files'));

  constructor(
    public http: HttpClient,
    private db: AngularFireDatabase
  ) { }


  getFiles() {

    return this.filesList;
  }
}
