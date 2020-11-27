import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { Coord, TileColor } from '../boardEnums';
import { Tile } from '../tile';
import {Piece} from '../piece';
import {BlackPawn} from '../blackPawn';
import { RedKing } from '../redKing';
import { redPawn } from '../redPawn';
import { BlackKing } from '../blackKing';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Board = {
    rep: [[],[],[],[],[],[],[],[]]
  };

  selectedTile: Tile;

  constructor() { }

  ngOnInit(): void {
    this.makeBoard();
  }

  onSelect(tile: Tile): void {
    if (this.selectedTile) {
      this.selectedTile.isSelected = false;
    }
    tile.isSelected = true;
    this.selectedTile = tile;
  }

  makeBoard() {
    //const temptile = new Tile((1 as Coord),(1 as Coord), (TileColor.White));
    //this.board.rep[0][0] = temptile;
    let white = true;
    for (let i = 0;i<8;++i) {
      white = !white;
      for (let j = 0;j<8;++j) {
        let temp;
         if (white) {
           temp = new Tile((i as Coord),(j as Coord), (TileColor.White));
         }
         else {
          temp = new Tile((i as Coord),(j as Coord), (TileColor.Brown));
         }
         white = !white;
        this.board.rep[i][j] = temp;
      }
    }
    for (let i = 1; i <8 ; i+=2 ) {
      let bp = new BlackPawn;
      this.board.rep[0][i].curPiece = bp;
    }

    for (let i = 0; i <8 ; i+=2 ) {
      let bp = new BlackPawn;
      this.board.rep[1][i].curPiece = bp;
    }

    for (let i = 1; i <8 ; i+=2 ) {
      let bp = new BlackPawn;
      this.board.rep[2][i].curPiece = bp;
    }

    for (let i = 0; i <8 ; i+=2 ) {
      let bp = new redPawn;
      this.board.rep[7][i].curPiece = bp;
    }

    for (let i = 1; i <8 ; i+=2 ) {
      let bp = new redPawn;
      this.board.rep[6][i].curPiece = bp;
    }

    for (let i = 0; i <8 ; i+=2 ) {
      let bp = new redPawn;
      this.board.rep[5][i].curPiece = bp;
    }

    
   
  }
}
