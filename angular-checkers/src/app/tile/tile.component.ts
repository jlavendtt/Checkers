import { Component, Input, OnInit } from '@angular/core';
import {Tile} from '../tile';
import {PieceType, PieceColor, TileColor, Coord} from '../boardEnums';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() tile: Tile;
  //private cssClass : string;

  constructor() { }

  ngOnInit(): void {

   
    

  }
  getCssClass(): string {
    if (this.tile.isSelected) {
      return "selected";
      
    }

    if (this.tile.isAvailable) {
      return "available";
    }

    if (this.tile.isTurn) {
      return "turn";
    }

    if (this.tile.tileColor==TileColor.White) {
      return "light-tile";
    }
    else {
      return "dark-tile";
    }
  

  }
 

}
