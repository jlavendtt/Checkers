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
import { ActivatedRoute } from '@angular/router';

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
  mustCapture: boolean;
  won: string;

  constructor(private gameService : GameService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => 
    this.gameNum = + params.get("id"))
    this.mustCapture = false;
    this.moveid = 1;
    this.redTurn = true;
    this.makeBoard();
     this.gameService.loadGame(this.gameNum).subscribe(game =>   {
       this.loadBoard(game);
       this.gameNum = game.id;
       this.moveid = game.moveNum;
       this.redTurn = game.redTurn;
       }
       );
  }
  rewind() {
    this.makeUnavailable();
    this.makeNotSelected();
    this.selectedTile = null;
    this.gameService.rewind(this.gameNum).subscribe(data => {
      this.gameService.loadGame(this.gameNum).subscribe(game =>   {
        this.loadBoard(game);
        this.gameNum = game.id;
        this.moveid = game.moveNum;
        this.redTurn = game.redTurn;
        }
        );
    });
    
  }

  checkWinner(gameView: GameView) : void {
    let bCount = 0;
    let rCount = 0;
    for (let i = 0;i<8;++i) {
      for (let j = 0;j<8;++j ) {
          if (gameView.rep[i][j] === "b" || gameView.rep[i][j] === "B") bCount++;
          if (gameView.rep[i][j] === "r" || gameView.rep[i][j] === "R" ) rCount++;
      }
    }
    if (bCount===0) {
      console.log("red should have won");
      this.won = "Red";
    }
    if (rCount===0) {
      console.log("black should have won");
      this.won = "Black";
    }
  }

  loadBoard(gameView: GameView) : void {

    //check for winner
    this.checkWinner(gameView);

    this.makeNotTurn();
    this.moveid = gameView.moveNum;
    let map = gameView.rep;
    for (let i = 0;i<8;++i) {
      for (let j = 0;j<8;++j) {
        let letter = map[i][j];
        
        if (letter==="b") {
          this.board.rep[i][j].curPiece = new BlackPawn;
          if (!gameView.redTurn) this.board.rep[i][j].isTurn = true;
        }
        if (letter === "B") {
          this.board.rep[i][j].curPiece = new BlackKing;
          if (!gameView.redTurn) this.board.rep[i][j].isTurn = true;
        }
        if (letter === "r") {
          this.board.rep[i][j].curPiece = new redPawn;
          if (gameView.redTurn) this.board.rep[i][j].isTurn = true;
        }
        if (letter === "R") {
          this.board.rep[i][j].curPiece = new RedKing;
          if (gameView.redTurn) this.board.rep[i][j].isTurn = true;
        }
        if (letter === "_") {
          this.board.rep[i][j].curPiece = undefined;
        }
      }
    }
    if (gameView.didCapture) {
      this.mustCapture = true;
      let tempi = Math.floor(gameView.capSpot/8);
      let tempj = gameView.capSpot%8;
      this.makeUnavailable();
      this.makeNotTurn();
      this.board.rep[tempi][tempj].isSelected = true;
      this.makeAvailable(this.board.rep[tempi][tempj].curPiece.potentialJumps(new Square(tempi as Coord, tempj as Coord),this.board));
      this.selectedTile = this.board.rep[tempi][tempj];
    }

  }

  makeMove(tile: Tile): boolean {
      tile.curPiece = this.selectedTile.curPiece;
      let pos = new Square(tile.row as Coord, tile.col as Coord);
      this.selectedTile.curPiece = undefined;
      let turnOver = true;
      let xdif = Math.abs(tile.row-this.selectedTile.row);
      let ydif = Math.abs(tile.col-this.selectedTile.col);
      if (xdif > 1 || ydif > 1) {
        let xjump = (tile.row+this.selectedTile.row)/2;
          let yjump = (tile.col+this.selectedTile.col)/2;
          this.board.rep[xjump][yjump].curPiece = undefined;
          if (tile.curPiece.canJump(pos, this.board)) {
            turnOver = false;
            this.mustCapture = true;
            this.makeUnavailable();
            this.makeAvailable(tile.curPiece.potentialJumps(pos,this.board));
          }
          
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
      if (turnOver) this.makeUnavailable();
      this.moveid++;
      this.gameService.makeMove(play).subscribe(play => {
        this.redTurn = play.redTurn;
        this.loadBoard(play);
        console.log(play.rep);
        console.log(this.board.rep)

      });
      if (!turnOver) this.selectedTile = tile;
      return turnOver;
      
  }

  onSelect(tile: Tile): void {

    if (this.mustCapture && !tile.isAvailable) {
      let i = 0;
      return;
    }
    this.mustCapture = false;

    if (tile.hasRedPiece() && !this.redTurn) return;

    if (tile.hasBlackPiece() && this.redTurn) return;
    
    if (this.selectedTile) {
      this.selectedTile.isSelected = false;
    }
    if (tile.isAvailable) {
      let over =this.makeMove(tile);
      return;

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

  makeNotTurn() : void {
    for (let i = 0;i<8;++i) {
      for (let j = 0;j<8;++j) {
        this.board.rep[i][j].isTurn = false;
      }
    }
  }

  makeNotSelected() : void {
    for (let i = 0;i<8;++i) {
      for (let j = 0;j<8;++j) {
        this.board.rep[i][j].isSelected = false;
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
