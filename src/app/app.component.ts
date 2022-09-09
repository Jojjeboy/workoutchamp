import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  private priceOfWorkoutSubscription:number = 2995;
  private priceOfWorkoutCard:number = 100;
  private healthCareAllowance:number = 2500;
  public nrOfWorkoutsCompleted: number = 1;
  public priceOfEachVisit: number = this.priceOfWorkoutSubscription + this.priceOfWorkoutCard - this.healthCareAllowance;

  constructor(private localStorageService: LocalStorageServiceService){}

  ngOnInit(){
    this.getCount();
  }

  public getCount() {
    this.nrOfWorkoutsCompleted = this.localStorageService.getCounter();
    this.recalculatePrice();
  }

  public increase(){
    this.nrOfWorkoutsCompleted += 1;
    this.localStorageService.increase();
    this.recalculatePrice();
  }

  public decrease(){
    if(this.nrOfWorkoutsCompleted > 0){
      this.nrOfWorkoutsCompleted -= 1;
      this.localStorageService.decrease();
      this.recalculatePrice();
    }
  }

  private recalculatePrice(){
    if(this.nrOfWorkoutsCompleted > 0){
      this.priceOfEachVisit = (this.priceOfWorkoutSubscription + this.priceOfWorkoutCard - this.healthCareAllowance) / this.nrOfWorkoutsCompleted
    }
  }

}