import { Injectable } from '@angular/core';

@Injectable()
export class LevelingSettingsService {
  public settings = [
    {
      id:0,
      exp: 0,
      reward: 0
    },
    {
      id:1,
      exp: 100,
      reward: 100
    },
    {
      id:2,
      exp: 300,
      reward: 300
    }
  ];
  constructor() { }

  get(){
    return this.settings;
  }

  save(settings){
    this.settings = settings;
    return this.settings;
  }

}
