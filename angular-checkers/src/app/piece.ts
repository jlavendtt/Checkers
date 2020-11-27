import { Board } from './board';
import { PieceType, PieceColor } from './boardEnums';
import { Move } from './move';
import { Square } from './square';


export interface Piece {

    typeOfPiece: PieceType;
    colorOfPiece: PieceColor;
    potentialMoves(pos: Square, board: Board): Square[];
}