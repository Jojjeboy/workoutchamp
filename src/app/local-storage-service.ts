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

  /*
  constructor(
    
  ) {
    if (window.hasOwnProperty('localStorage')) {
      if (localStorage.getItem(gymKey) != undefined && localStorage.getItem(homeKey) === null) {
        this.gymKey  = gymKey || 'gymKey';
        this.homeKey  = homeKey || 'homeKey';
        localStorage.setItem(this.gymKey, '0');
        localStorage.setItem(this.homeKey, '0');
      }
    } else {
      window.alert('Please considering upgrading browser to be able to use Localstorage');
    }
  }

  getCounter(key: string): number {
    let counter = localStorage.getItem(key);
    return parseInt(counter!);
  }

  increase(key: string) {
    let value:number = this.getCounter(key);
    value = value + 1;
    this.writeLS(key,value);
  }

  decrease(key: string) {
    let value:number =  this.getCounter(key);
    if(value > 0){
        value = value - 1;
        this.writeLS(key,value);
    }
    
  }

  reset(key: string): void {
    this.writeLS(key,0);
  }

  writeLS(key: string, value: number): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clear(key: string): void {
    localStorage.removeItem(key);
  }

  */

 
}