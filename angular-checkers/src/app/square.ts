import {Coord,TileColor} from "./boardEnums"
import {Piece} from "./piece"

export interface Square {
    curPiece?: Piece;
    row: Coord;
    col: Coord;
    tileColor: TileColor;
}
