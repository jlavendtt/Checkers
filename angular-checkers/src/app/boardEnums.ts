export enum PieceType {
    Pawn,
    King,
    None
}

export enum PieceColor {
    Red,
    Black
}

export enum TileColor {
    White,
    Brown
}

export enum Outcome {
    InProgress,
    Draw,
    WhiteWins,
    BlackWins
}

export type Coord = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;