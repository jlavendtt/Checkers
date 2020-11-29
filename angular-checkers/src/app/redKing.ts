import { Board } from './board';
import { PieceType, PieceColor, Coord } from './boardEnums';
import { Move } from './move';
import { Piece } from './piece';
import { Square } from './square';

export class RedKing implements Piece {
    typeOfPiece: PieceType;
    colorOfPiece: PieceColor;

    constructor() {
        this.typeOfPiece = PieceType.King;
        this.colorOfPiece = PieceColor.Red;
    }

    potentialMoves(pos: Square, board: Board): Square[] {

        const toReturn: Square[] = [];
        let x = pos.col;
        let y = pos.row;
        //red Pawns moves
        if (x==0 && y ==1) {
            if (board.rep[y-1][x+1].hasNothing()) {
                let temp = new Square(y-1 as Coord, x+1 as Coord)
                toReturn.push(temp);
            }
        }
        else if (x==7 && y ==1) {
            if (board.rep[y-1][x-1].hasNothing()) {
                let temp = new Square(y-1 as Coord, x+1 as Coord)
                toReturn.push(temp);
            }
        }
         else if (x==0) {
            if (board.rep[y-1][x+1].hasNothing()) {
                let temp = new Square(y-1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y-1][x+1].hasBlackPiece() && board.rep[y-2][x+2].hasNothing()) {
                let temp = new Square(y-2 as Coord, x+2 as Coord);
                toReturn.push(temp);
            }
            
        }
        else if (x==7) {
            if (board.rep[y-1][x-1].hasNothing()) {
                let temp = new Square(y-1 as Coord, x-1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y-1][x-1].hasBlackPiece() && board.rep[y-2][x-2].hasNothing()) {
                let temp = new Square(y-2 as Coord, x-2 as Coord);
                toReturn.push(temp);
            }
        }

        else if (x==1) {
            if (board.rep[y-1][x+1].hasNothing()) {
                let temp = new Square(y-1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y-1][x+1].hasBlackPiece() && board.rep[y-2][x+2].hasNothing()) {
                let temp = new Square(y-2 as Coord, x+2 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y-1][x-1].hasNothing()) {
                let temp = new Square(y-1 as Coord, x-1 as Coord);
                toReturn.push(temp);
            }
        }
        else if (x==6) {
            if (board.rep[y-1][x-1].hasNothing()) {
                let temp = new Square(y-1 as Coord, x-1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y-1][x-1].hasBlackPiece() && board.rep[y-2][x-2].hasNothing()) {
                let temp = new Square(y-2 as Coord, x-2 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y-1][x+1].hasNothing()) {
                let temp = new Square(y-1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
        }
        else {
            if (board.rep[y-1][x-1].hasNothing()) {
                let temp = new Square(y-1 as Coord, x-1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y-1][x-1].hasBlackPiece() && board.rep[y-2][x-2].hasNothing()) {
                let temp = new Square(y-2 as Coord, x-2 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y-1][x+1].hasNothing()) {
                let temp = new Square(y-1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y-1][x+1].hasBlackPiece() && board.rep[y-2][x+2].hasNothing()) {
                let temp = new Square(y-2 as Coord, x+2 as Coord);
                toReturn.push(temp);
            }
        }

        //Black Pawns moves
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
         else if (x==0) {
            if (board.rep[y+1][x+1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x+1].hasBlackPiece() && board.rep[y+2][x+2].hasNothing()) {
                let temp = new Square(y+2 as Coord, x+2 as Coord);
                toReturn.push(temp);
            }
            
        }
        else if (x==7) {
            if (board.rep[y+1][x-1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x-1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x-1].hasBlackPiece() && board.rep[y+2][x-2].hasNothing()) {
                let temp = new Square(y+2 as Coord, x-2 as Coord);
                toReturn.push(temp);
            }
        }

        else if (x==1) {
            if (board.rep[y+1][x+1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x+1].hasBlackPiece() && board.rep[y+2][x+2].hasNothing()) {
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
            if (board.rep[y+1][x-1].hasBlackPiece() && board.rep[y+2][x-2].hasNothing()) {
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
                let temp = new Square(y+1 as Coord, x-1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x-1].hasBlackPiece() && board.rep[y+2][x-2].hasNothing()) {
                let temp = new Square(y+2 as Coord, x-2 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x+1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
            if (board.rep[y+1][x+1].hasBlackPiece() && board.rep[y+2][x+2].hasNothing()) {
                let temp = new Square(y+2 as Coord, x+2 as Coord);
                toReturn.push(temp);
            }
        }

        return toReturn;

    }
    canJump(pos: Square, board: Board): boolean {

        let x = pos.col;
        let y = pos.row;
        //red Pawns moves
        
          if (x==0) {
            
            if (board.rep[y-1][x+1].hasBlackPiece() && board.rep[y-2][x+2].hasNothing()) {
                return true;
            }
            
        }
        else if (x==7) {
            
            if (board.rep[y-1][x-1].hasBlackPiece() && board.rep[y-2][x-2].hasNothing()) {
                return true;
            }
        }

        else if (x==1) {
            
            if (board.rep[y-1][x+1].hasBlackPiece() && board.rep[y-2][x+2].hasNothing()) {
                return true;
            }
            
        }
        else if (x==6) {
           
            if (board.rep[y-1][x-1].hasBlackPiece() && board.rep[y-2][x-2].hasNothing()) {
                return true;
            }
           
        }
        else {
            
            if (board.rep[y-1][x-1].hasBlackPiece() && board.rep[y-2][x-2].hasNothing()) {
                return true;
            }
           
            if (board.rep[y-1][x+1].hasBlackPiece() && board.rep[y-2][x+2].hasNothing()) {
                return true;
            }
        }

        //Black Pawns moves
        
        
          if (x==0) {
            
            if (board.rep[y+1][x+1].hasBlackPiece() && board.rep[y+2][x+2].hasNothing()) {
                return true;
            }
            
        }
        else if (x==7) {
            
            if (board.rep[y+1][x-1].hasBlackPiece() && board.rep[y+2][x-2].hasNothing()) {
                return true;
            }
        }

        else if (x==1) {
            
            if (board.rep[y+1][x+1].hasBlackPiece() && board.rep[y+2][x+2].hasNothing()) {
               return true;
            }
            
        }
        else if (x==6) {
            
            if (board.rep[y+1][x-1].hasBlackPiece() && board.rep[y+2][x-2].hasNothing()) {
                return true;
            }
            
        }
        else {
           
            if (board.rep[y+1][x-1].hasBlackPiece() && board.rep[y+2][x-2].hasNothing()) {
                return true;
            }
            
            if (board.rep[y+1][x+1].hasBlackPiece() && board.rep[y+2][x+2].hasNothing()) {
                return true;
            }
        }
        return false;

    }
}