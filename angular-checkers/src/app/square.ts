import {Coord} from "./boardEnums"

export class Square {
    row: Coord;
    col: Coord;

    constructor(row: Coord, col: Coord) {
        this.row = row
        this.col = col;
    }
}
