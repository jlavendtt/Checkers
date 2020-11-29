import { Board } from './board';
import { PieceType, PieceColor, Coord } from './boardEnums';
import { Move } from './move';
import { Piece } from './piece';
import { Square } from './square';

export class BlackPawn implements Piece {
    typeOfPiece: PieceType;
    colorOfPiece: PieceColor;

    constructor() {
        this.typeOfPiece = PieceType.Pawn;
        this.colorOfPiece = PieceColor.Black;
    }

    potentialMoves(pos: Square, board: Board): Square[] {

        let x = pos.col;
        let y = pos.row;

        const toReturn: Square[] = [];

        if (x==0 && y ==6) {
            if (board.rep[y+1][x+1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x+1 as Coord)
                toReturn.push(temp);
            }
        }
        else if (x==7 && y ==6) {
            if (board.rep[y+1][x-1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x+1 as Coord)
                toReturn.push(temp);
            }
        }
        else if (y==6) {
            if (board.rep[y+1][x+1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x-1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x-1 as Coord);

            }
        }
         else if (x==0) {
            if (board.rep[y+1][x+1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x+1].hasRedPiece() && board.rep[y+2][x+2].hasNothing()) {
                let temp = new Square(y+2 as Coord, x+2 as Coord);
                toReturn.push(temp);
            }
            
        }
        else if (x==7) {
            if (board.rep[y+1][x-1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x-1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x-1].hasRedPiece() && board.rep[y+2][x-2].hasNothing()) {
                let temp = new Square(y+2 as Coord, x-2 as Coord);
                toReturn.push(temp);
            }
        }

        else if (x==1) {
            if (board.rep[y+1][x+1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x+1].hasRedPiece() && board.rep[y+2][x+2].hasNothing()) {
                let temp = new Square(y+2 as Coord, x+2 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x-1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x-1 as Coord);
                toReturn.push(temp);
            }
        }
        else if (x==6) {
            if (board.rep[y+1][x-1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x-1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x-1].hasRedPiece() && board.rep[y+2][x-2].hasNothing()) {
                let temp = new Square(y+2 as Coord, x-2 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x+1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
        }
        else {
            if (board.rep[y+1][x+1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x-1].hasRedPiece() && board.rep[y+2][x-2].hasNothing()) {
                let temp = new Square(y+2 as Coord, x-2 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x-1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x-1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x+1].hasRedPiece() && board.rep[y+2][x+2].hasNothing()) {
                let temp = new Square(y+2 as Coord, x+2 as Coord);
                toReturn.push(temp);
            }
        }
        return toReturn;

    }
    canJump(pos: Square, board: Board): boolean {

        let x = pos.col;
        let y = pos.row;

        

        
       
          if (x==0) {
            
            if (board.rep[y+1][x+1].hasRedPiece() && board.rep[y+2][x+2].hasNothing()) {
                return true;
            }
            
        }
        else if (x==7) {
            
            if (board.rep[y+1][x-1].hasRedPiece() && board.rep[y+2][x-2].hasNothing()) {
                return true;
            }
        }

        else if (x==1) {
           
            if (board.rep[y+1][x+1].hasRedPiece() && board.rep[y+2][x+2].hasNothing()) {
               return true;
            }
           
        }
        else if (x==6) {
            
            if (board.rep[y+1][x-1].hasRedPiece() && board.rep[y+2][x-2].hasNothing()) {
                return true;
            }
            
        }
        else {
            
            if (board.rep[y+1][x-1].hasRedPiece() && board.rep[y+2][x-2].hasNothing()) {
                return true;
            }
            
            if (board.rep[y+1][x+1].hasRedPiece() && board.rep[y+2][x+2].hasNothing()) {
                return true;
            }
        }
    
    
        return false;
    }


    }