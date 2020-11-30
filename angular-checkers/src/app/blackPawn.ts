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
        
         //down right
         if ( (x+1)<8 && (y+1) <8 ) {
            if (board.rep[y+1][x+1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x+1 as Coord);
                toReturn.push(temp);
            }
        }

        //down left
        if ( (x-1)>=0 && (y+1) <8) {
            if (board.rep[y+1][x-1].hasNothing()) {
                let temp = new Square(y+1 as Coord, x-1 as Coord);
                toReturn.push(temp);
            }
        }

        let jumps = this.potentialJumps(pos,board);
        for (let i = 0;i<jumps.length;++i) {
            toReturn.push(jumps[i]);
        }

        return toReturn;

    }
    canJump(pos: Square, board: Board): boolean {

        let list = this.potentialJumps(pos,board);
        if (list.length>0) return true;
        return false;
    }

    potentialJumps(pos: Square, board: Board): Square[] {
        const toReturn: Square[] = [];

        let x = pos.col;
        let y = pos.row;
        //jump down right 
        if ( (x+2) <8 && (y+2) <8) {
            if (board.rep[y+2][x+2].hasNothing() && board.rep[y+1][x+1].hasRedPiece()) {
                let temp = new Square(y+2 as Coord, x+2 as Coord);
                toReturn.push(temp);
            }
        }
        //jump down left
        if ( (x-2)>=0 && (y+2) <8) {
            if (board.rep[y+2][x-2].hasNothing() && board.rep[y+1][x-1].hasRedPiece()) {
                let temp = new Square(y+2 as Coord, x-2 as Coord);
                toReturn.push(temp);
            }
        }
        

        return toReturn;
    }


    }