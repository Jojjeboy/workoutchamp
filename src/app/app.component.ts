import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public priceOfWorkoutSubscription:number = 2995;
  public priceOfWorkoutCard:number = 100;
  public nrOfWorkoutsCompleted: number = 0;
  constructor(private localStorageService: LocalStorageServiceService){

  }

  ngOnInit(){
    this.getCount();
  }

  public getCount() {
    this.nrOfWorkoutsCompleted = this.localStorageService.getCounter();
  }

  public increase(){
    this.nrOfWorkoutsCompleted += 1;
    this.localStorageService.increase();
  }

  public decrease(){
    if(this.nrOfWorkoutsCompleted > 0){
      this.nrOfWorkoutsCompleted -= 1;
      this.localStorageService.decrease();
    }
  }


}