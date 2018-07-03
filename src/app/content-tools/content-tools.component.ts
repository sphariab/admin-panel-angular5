import { Component, OnInit, ViewChild } from '@angular/core';
import { ZodiacSign } from '../shared/zodiacSign';
import { ContentToolsService } from '../services/content-tools'
import { DaterangepickerComponent } from "../helpers/daterangepicker/daterangepicker.component";

@Component({
  selector: 'app-content-tools',
  templateUrl: './content-tools.component.html',
  styleUrls: ['./content-tools.component.scss']
})

export class ContentToolsComponent implements OnInit {
  @ViewChild(DaterangepickerComponent)

  public zodiacSign: ZodiacSign;
  public zodiacSigns: ZodiacSign[];
  private picker: DaterangepickerComponent;

  constructor(private contentToolsService: ContentToolsService) {

  }

  ngOnInit() {
    this.zodiacSigns = this.contentToolsService.getZodiacs();
  }

  public saveZodiacs(){
    console.log('zodiacSigns', this.zodiacSigns);
  }

  public clearZodiacs(){
    console.log(this.zodiacSigns);
   this.zodiacSigns.map(function(zodiacSign: ZodiacSign) {
      zodiacSign.prediction = ""
    });
    console.log('zodiacSigns', this.zodiacSigns);
  }

}
