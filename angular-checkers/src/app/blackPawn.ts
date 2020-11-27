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

        let curx = pos.col;
        let cury = pos.row;

       
        

        const toReturn: Square[] = [];
        return toReturn;

    }

    }