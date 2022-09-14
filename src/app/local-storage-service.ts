import { Injectable, Inject } from '@angular/core';

@Injectable()
export class LocalStorageServiceService {

  constructor() {
    if (window.hasOwnProperty('localStorage')) {
    } else {
      window.alert('Please considering upgrading browser to be able to use Localstorage');
    }
  }

  private initializeKey(key: string) {
      localStorage.setItem(key, '0');
  }

  public getData(key: string) {
    if (localStorage.getItem(key) === null) {
      this.initializeKey(key);
    }
    return localStorage.getItem(key);
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  
  public removeData(key: string) {
    localStorage.removeItem(key);
  }
}