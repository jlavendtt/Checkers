import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { GameView } from '../gameView';
import { Play } from '../play';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  moves: Play[];
  games: GameView[];

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
    this.getGames();
    
  }

  getGames() {
    this.gameService.getGames()
    .subscribe(games => {
      this.games = games;
      if (this.games.length>5) this.games = this.games.slice(this.games.length-5);
      console.log(this.games);
    }
      );
  }



}
