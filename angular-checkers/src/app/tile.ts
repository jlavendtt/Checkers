import {Square} from "./square"
import {Coord, TileColor} from "./boardEnums"

export class Tile implements Square {
    tileColor: TileColor
    row: Coord;
    col: Coord;

    constructor(row: Coord, col: Coord, tileColor: TileColor) {
        this.tileColor = tileColor;
        this.row = row;
        this.col = col;
    }

}