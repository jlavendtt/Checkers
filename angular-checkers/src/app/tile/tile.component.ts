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
  cssClass : string;

  constructor() { }

  ngOnInit(): void {

    if (this.tile.tileColor==TileColor.White) {
      this.cssClass = "light-tile";
    }
    else {
      this.cssClass = "dark-tile";
    }
    

  }
  getCssClass(): string {
    return this.cssClass;

  }
 

}
