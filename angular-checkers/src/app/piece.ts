import { PieceType, PieceColor } from './boardEnums';
import { Move } from './move';
import { Square } from './square';


export interface Piece {

    typeOfPiece: PieceType;
    colorOfPiece: PieceColor;
    potentialMoves(pos: Square): Move[];
}