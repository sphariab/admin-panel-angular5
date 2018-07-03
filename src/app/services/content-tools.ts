import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ZodiacSign } from '../shared/zodiacSign';
import { ZodiacSigns } from '../shared/zodiacSigns';

@Injectable()
export class ContentToolsService {
  public zodiacSign: ZodiacSign;
  public zodiacSigns: ZodiacSign[] = ZodiacSigns;


  constructor(private http: HttpClient) { }

  public getZodiacs(){
    return this.zodiacSigns
  }
}
