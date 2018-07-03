import { Component, OnInit } from '@angular/core';
import { LevelingSettingsService } from '../../services/leveling-settings.service'
import { ZodiacSigns } from '../../shared/zodiacSigns'


@Component({
  selector: 'app-leveling-settings',
  templateUrl: './leveling-settings.component.html',
  styleUrls: ['./leveling-settings.component.scss']
})
export class LevelingSettingsComponent implements OnInit {
  public onEdit:boolean = false;
  public settings;
  public groups = [
    {
      name:'Default groups'
    },
    {
      name:'Vip'
    },
    {
      name:'Winners'
    }
    ];
  public url:any;

  public characters:any = ZodiacSigns;
  constructor(private levelingSettingsService: LevelingSettingsService) { }

  ngOnInit() {
    this.settings = this.levelingSettingsService.get();

  }

  saveSettings(settings){
    this.onEdit = !this.onEdit;
    return this.settings = this.levelingSettingsService.save(settings);
  }

  setGroup(value){
    console.log(value)
  }


}
