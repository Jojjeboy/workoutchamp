import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service';
import { TallyService } from './tally-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {provide: 'gymKey', useValue: 'gymKeys'},
    {provide: 'homeKey', useValue: 'homeKeys'}
  ]
})

export class AppComponent implements OnInit{
  private priceOfWorkoutSubscription:number = 2995;
  private priceOfWorkoutCard:number = 100;
  private healthCareAllowance:number = 2500;
  public nrOfGymWorkoutsCompleted: number = 1;
  public nrOfHomeWorkoutsCompleted: number = 2;
  public priceOfEachVisit: number = this.priceOfWorkoutSubscription + this.priceOfWorkoutCard - this.healthCareAllowance;
  public showResetBtn = false;

  constructor(private tallyService: TallyService){}

  ngOnInit(){
    this.getCount();
  }

  public getCount() {
    const gymLsValue = this.tallyService.getGymCounter();
    const homeWorkoutLsValue = this.tallyService.getHomeWorkoutCounter();
    if(gymLsValue > this.nrOfGymWorkoutsCompleted){
      this.nrOfGymWorkoutsCompleted = gymLsValue;
    }
    else {
      this.tallyService.saveGymCounter(this.nrOfGymWorkoutsCompleted);
    }
    if(homeWorkoutLsValue > this.nrOfHomeWorkoutsCompleted){
      this.nrOfHomeWorkoutsCompleted = homeWorkoutLsValue;
    }
    else {
      this.tallyService.saveHomeWorkoutCounter(this.nrOfHomeWorkoutsCompleted);
    }
    //this.localStorageService.writeLS('gym',this.nrOfGymWorkoutsCompleted);
    this.recalculateGymPrice();
  }

  public increaseGym(){
    this.nrOfGymWorkoutsCompleted += 1;
    this.tallyService.saveGymCounter(this.nrOfGymWorkoutsCompleted);
    this.recalculateGymPrice();
  }

  public decreaseGym(){
    if(this.nrOfGymWorkoutsCompleted > 0){
      this.nrOfGymWorkoutsCompleted -= 1;
      this.tallyService.saveGymCounter(this.nrOfGymWorkoutsCompleted);
      this.recalculateGymPrice();
    }
  }

  public increaseHomeWorkout(){
    this.nrOfHomeWorkoutsCompleted += 1;
    this.tallyService.saveHomeWorkoutCounter(this.nrOfHomeWorkoutsCompleted);
  }

  public decreaseHomeWorkout(){
    this.nrOfHomeWorkoutsCompleted -= 1;
    this.tallyService.saveHomeWorkoutCounter(this.nrOfHomeWorkoutsCompleted);
  }

  public resetGym(){
    if(this.showResetBtn){
      this.nrOfGymWorkoutsCompleted = 0;
      this.tallyService.saveGymCounter(this.nrOfGymWorkoutsCompleted);
    }
    this.showResetBtn = false;
  }

  public showGymResetButton(){
    if(!this.showResetBtn){
      this.showResetBtn = true;
    }
  }


  private recalculateGymPrice(){
    if(this.nrOfGymWorkoutsCompleted > 0){
      this.priceOfEachVisit = (this.priceOfWorkoutSubscription + this.priceOfWorkoutCard - this.healthCareAllowance) / this.nrOfGymWorkoutsCompleted
    }
  }

}