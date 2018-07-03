import { Component, OnInit, ViewChild } from '@angular/core';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import { Daterangepicker } from 'ng2-daterangepicker';

@Component({
  selector: 'app-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.scss']
})
export class DaterangepickerComponent implements OnInit {
  public daterange: any = {};

  @ViewChild(Daterangepicker)
  private picker: Daterangepicker;

  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
    addedCSS: true,
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: true,
    isShowing: true,
    startDate: '2017-03-27',
  };

  constructor(private daterangepickerOptions: DaterangepickerConfig, private daterangepicker:Daterangepicker) {
    this.daterangepickerOptions.settings.alwaysShowCalendars = true;
    console.log(this.daterangepickerOptions,'this.daterangepickerOptions');
  }

/*  public updateDateRange() {
    this.picker.datePicker.setStartDate('2017-03-27');
    this.picker.datePicker.setEndDate('2017-04-08');
  }*/

  public selectedDate(value: any, datepicker?: any) {
    // this is the date the iser selected
    console.log(value);

    // or manupulat your own internal property
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

  public calendarCanceled(e:any) {
    console.log(e);
    // e.event
    // e.picker
  }

  public calendarApplied(e:any) {
    console.log(e);
    // e.event
    // e.picker
  }


  ngOnInit() {
  }

}
