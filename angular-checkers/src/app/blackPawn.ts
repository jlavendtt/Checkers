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

    potentialMoves(pos: Square): Move[] {

        

        const toReturn: Move[] = [];
        return toReturn;

    }

    }