import { Injectable, Inject } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service';

@Injectable()
export class TallyService {

  constructor(private lsService: LocalStorageServiceService) { }

  private gymKey: string = 'gymKey';
  private homeKey: string = 'homeKey';

  /**
   * GYM STUFF
   */
  public getGymCounter(): number {
    const counter = this.lsService.getData(this.gymKey); 
    return parseInt(counter!);
  }

  public saveGymCounter(value: number): void {
    this.lsService.saveData(this.gymKey, JSON.stringify(value));
  }

  public clearGymCounter(): void {
    this.lsService.removeData(this.gymKey);
  }

  /**
   * HOME WORKOUT STUFF
   */
   public getHomeWorkoutCounter(): number {
    const counter = this.lsService.getData(this.homeKey);
    return parseInt(counter!);
  }

  public saveHomeWorkoutCounter(value: number): void {
    this.lsService.saveData(this.homeKey, JSON.stringify(value));
  }

  public clearHomeWorkoutCounter(): void {
    this.lsService.removeData(this.homeKey);
  }
}