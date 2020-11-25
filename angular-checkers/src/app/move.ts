import { PieceType } from './boardEnums';
import { Square } from './square';


export interface Move {
    mustCapture?: boolean;
    promoteTo?: PieceType;
    from: Square;
    to: Square;
}