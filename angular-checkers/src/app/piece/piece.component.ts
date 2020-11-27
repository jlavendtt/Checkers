import { Component, Input, OnInit } from '@angular/core';
import { Piece } from '../piece';
import { Tile } from '../tile';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  @Input() tileRep: Tile;

  constructor() { }

  ngOnInit(): void {
  }

}
