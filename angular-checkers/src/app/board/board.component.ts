import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { Coord, TileColor } from '../boardEnums';
import { Tile } from '../tile';
import {Piece} from '../piece';
import {BlackPawn} from '../blackPawn';
import { RedKing } from '../redKing';
import { redPawn } from '../redPawn';
import { BlackKing } from '../blackKing';
import { Square } from '../square';
import { GameService } from '../game.service';
import {GameView} from '../gameView';
import {Play} from '../play';

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
  gameNum: number;
  redTurn: boolean;
  moveid: number;

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
    this.moveid = 1;
    this.redTurn = true;
    this.makeBoard();
     this.gameService.startGame().subscribe(game =>   {
       this.loadBoard(game);
       this.gameNum = game.id;
       }
       );
  }

  loadBoard(gameView: GameView) : void {

    let map = gameView.rep;
    for (let i = 0;i<8;++i) {
      for (let j = 0;j<8;++j) {
        let letter = map[i][j];
        if (letter==="b") {
          this.board.rep[i][j].curPiece = new BlackPawn;
        }
        if (letter === "B") {
          this.board.rep[i][j].curPiece = new BlackKing;
        }
        if (letter === "r") {
          this.board.rep[i][j].curPiece = new redPawn;
        }
        if (letter === "R") {
          this.board.rep[i][j].curPiece = new RedKing;
        }
        if (letter === "_") {
          this.board.rep[i][j].curPiece = undefined;
        }
      }
    }

  }

  makeMove(tile: Tile): void {
      tile.curPiece = this.selectedTile.curPiece;
      let pos = new Square(tile.row as Coord, tile.col as Coord);
      this.selectedTile.curPiece = undefined;
      let turnOver = true;
      let xdif = Math.abs(tile.row-this.selectedTile.row);
      let ydif = Math.abs(tile.col-this.selectedTile.col);
      if (xdif > 1 || ydif > 1) {
          if (tile.curPiece.canJump(pos, this.board))turnOver = false;
          let xjump = (tile.row+this.selectedTile.row)/2;
          let yjump = (tile.col+this.selectedTile.col)/2;
          this.board.rep[xjump][yjump].curPiece = undefined;
      }
      let start = this.selectedTile.row*8 + this.selectedTile.col;
      let end = tile.row*8 + tile.col;
      let play : Play = {
        gameNum: this.gameNum,
        moveNum: this.moveid,
        startPos: start,
        endPos: end,
        turnOver: turnOver
      };
      this.selectedTile = null;
      this.makeUnavailable();
      this.moveid++;
      this.gameService.makeMove(play).subscribe(play => {
        this.redTurn = play.redTurn;
        this.loadBoard(play);
        console.log(play.rep);
        console.log(this.board.rep)

      });
      if (turnOver) {
        this.selectedTile = null;
        this.makeUnavailable();
      }
      
  }

  onSelect(tile: Tile): void {

    if (tile.hasRedPiece() && !this.redTurn) return;

    if (tile.hasBlackPiece() && this.redTurn) return;
    
    if (this.selectedTile) {
      this.selectedTile.isSelected = false;
    }
    if (tile.isAvailable) {
      this.makeMove(tile);

    }
    if (tile.hasNothing()) return;
    tile.isSelected = true;
    this.selectedTile = tile;
    let pos = new Square(this.selectedTile.row as Coord, this.selectedTile.col as Coord);
    let moves = this.selectedTile.curPiece.potentialMoves(pos,this.board);
    this.makeUnavailable();
    this.makeAvailable(moves);
  }

  makeUnavailable() : void {
    for (let i = 0;i<8;++i) {
      for (let j = 0;j<8;++j) {
        this.board.rep[i][j].isAvailable = false;
      }
    }
  }

  makeAvailable(moves: Square[]) : void {
    for (let i = 0;i<moves.length;++i) {
      let row = moves[i].row;
      let col = moves[i].col;
      this.board.rep[row][col].isAvailable = true;
    }
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
    }
}
