import {Coord, PieceColor, PieceType, TileColor} from "./boardEnums"
import {Piece} from './piece';

export class Tile  {
    isSelected: boolean
    curPiece?: Piece;
    tileColor: TileColor
    row: Coord;
    col: Coord;

    constructor(row: Coord, col: Coord, tileColor: TileColor) {
        this.tileColor = tileColor;
        this.row = row;
        this.col = col;
        this.isSelected = false;
    }

    hasPiece() : boolean {
        if (typeof this.curPiece === "undefined") {
            return false;
        }
        return true;
    }
    hasBlackPawn() : boolean {
        if (!this.hasPiece()) return false;
        if (this.curPiece.colorOfPiece===PieceColor.Black && this.curPiece.typeOfPiece === PieceType.Pawn) {
            return true;
        }
        return false
    }
    hasBlackKing() : boolean {
        if (!this.hasPiece()) return false;
        if (this.curPiece.colorOfPiece===PieceColor.Black && this.curPiece.typeOfPiece === PieceType.King) {
            return true;
        }
        return false
    }
    hasRedPawn() : boolean {
        if (!this.hasPiece()) return false;
        if (this.curPiece.colorOfPiece===PieceColor.Red && this.curPiece.typeOfPiece === PieceType.Pawn) {
            return true;
        }
        return false
    }

    hasRedKing() : boolean {
        if (!this.hasPiece()) return false;
        if (this.curPiece.colorOfPiece===PieceColor.Red && this.curPiece.typeOfPiece === PieceType.King) {
            return true;
        }
        return false
    }

    hasNothing() : boolean {
        if (!this.hasPiece()) return true;
        return false
    }

}