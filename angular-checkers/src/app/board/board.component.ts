import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { Coord, TileColor } from '../boardEnums';
import { Tile } from '../tile';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Board = {
    rep: [[],[],[],[],[],[],[],[]]
  };

  constructor() { }

  ngOnInit(): void {
    this.makeBoard();
  }

  makeBoard() {
    //const temptile = new Tile((1 as Coord),(1 as Coord), (TileColor.White));
    //this.board.rep[0][0] = temptile;
    let white = false;
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
   
  }
}
