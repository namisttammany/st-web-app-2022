import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class FavoritesListService {

  constructor(public storageFavorites: Storage) { }

isFavorite(resourceString) {
    let temp = JSON.parse(resourceString);
    console.log(temp)
    let keyId = temp.id;
    return this.storageFavorites.forEach((v, k, i) => {
    if (k.indexOf(keyId) !== -1)
      {
       console.log("found key - is a favorite")
      return k.indexOf(keyId) !== -1;
    }
  });
}

favoriteResource(resource) {
  let value = JSON.parse(resource);
  let temp = JSON.parse(resource);
  return this.storageFavorites.set(temp.id.toString(), value);
}

unfavoriteResource(resource) {
  let temp = JSON.parse(resource);
  let keyId = temp.id.toString();
  this.storageFavorites.forEach((v, k, i) => {
  if (k.indexOf(keyId) !== -1)
    {
     console.log("resource found in favorites - deleting")
     this.storageFavorites.remove(k);
  }
  });
  return this.getAllFavoriteResources();
}

getAllFavoriteResources() {
  let list: any =[];
  let promise = new Promise((resolve, reject) => {
    this.storageFavorites.forEach((value, key, index) => {
    list.push(value);
    }).then((data) => {
      resolve(list);
    });
  });
  return promise;
}

}
