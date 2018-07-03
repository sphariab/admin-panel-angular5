import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import { characters } from '../../shared/characters';
import { LevelingTableService } from '../../services/leveling-table.service'
@Component({
  selector: 'app-leveling-table',
  templateUrl: './leveling-table.component.html',
  styleUrls: ['./leveling-table.component.scss']
})

export class LevelingTableComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  public form: FormGroup;

  public characters:any = characters;
  public onEdit: boolean = false;
  public loading: boolean;
  public chosenCharacter = {
    level:"",
    charImage:"",
    charAvatar:"",
    selected:false
  };

  public model = {
    characterImageCustom: false,
    characterImageInherit:false,
    characterAvatarCustom:false,
    characterAvatarInherit:false,
    characterCaptionCustom:false,
    characterCaptionInherit:false,
    characterTextCustom:false,
    characterTextInherit:false,
    characterTextarea:"",
    characterCaptionInput: ""
  };
  public url:any;

  constructor(
    private levelingTableService: LevelingTableService) {
  }

  ngOnInit() {
  }

  public editCharacter(character){
    this.onEdit = !this.onEdit;
    console.log('character', character);
    this.chosenCharacter = character;
  }
  onSubmit(){

    console.log(this.model,'model');
  }

  onFileChange(event:any, image){

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {

        switch (image) {
          case 'charLocation':
            this.characters[0].locationImage = event.target.result;
            break;
          case 'charImage':
            this.chosenCharacter.charImage = event.target.result;
            this.chosenCharacter.selected = true;
            break;
          case 'charAvatar':
            this.chosenCharacter.charAvatar = event.target.result;
            this.chosenCharacter.selected = true;
            break;
          }
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onCharImageChange(){}

  changeLocation (event) {
    this.onEdit = !this.onEdit;
  }

  saveCharSettigs(){

  }
  /*upload() {

    this.levelingTableService.upload().subscribe(res => {
      // do stuff w/my uploaded file
    });
  }*/
}
