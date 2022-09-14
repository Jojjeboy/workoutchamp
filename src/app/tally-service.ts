import { Injectable } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service';
import { LsTypeEnum } from './LsTypeEnum';

@Injectable()
export class TallyService {

  constructor(private lsService: LocalStorageServiceService) { }

  public saveCounter(key: string, value: number){
    if(key === LsTypeEnum.gymKey.toString() || key === LsTypeEnum.homeWorkout.toString()){
      this.lsService.saveData(key, JSON.stringify(value));
    }
  }

  public getCounter(key: string): number {
    if(key === LsTypeEnum.gymKey.toString() || key === LsTypeEnum.homeWorkout.toString()){
      const counter = this.lsService.getData(key);
      return parseInt(counter!);
    }
    return 0;
  }

  public clearCounter(key: string): void {
    if(key === LsTypeEnum.gymKey.toString() || key === LsTypeEnum.homeWorkout.toString()){
      this.lsService.removeData(key);
    }
  }

}