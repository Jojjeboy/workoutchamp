import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageServiceService {

  key = 'workoutchamp';
  constructor() {
    if (window.hasOwnProperty('localStorage')) {
      if (localStorage.getItem(this.key) === null) {
        localStorage.setItem(this.key, '0');
      }
    } else {
      window.alert('Please considering upgrading browser to be able to use Localstorage');
    }
  }

  getCounter(): number {
    let counter = localStorage.getItem(this.key);
    return parseInt(counter!);
  }

  increase() {
    let value:number = this.getCounter();
    value = value + 1;
    this.writeLS(value);
  }

  decrease() {
    let value:number =  this.getCounter();
    if(value > 0){
        value = value - 1;
        this.writeLS(value);
    }
    
  }

  reset() {
    this.writeLS(0);
  }

  writeLS(value: number): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  clear() {
    localStorage.removeItem(this.key);
  }

 
}