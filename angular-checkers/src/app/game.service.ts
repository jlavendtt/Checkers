import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {MessageService} from  './message.service';
import {HttpClient, HttpHeaders} from  '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {GameView} from './gameView';
import { Play } from './play';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamessUrl = 'http://localhost:8080/api/games/';  // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

    getGames(): Observable<GameView[]> {
      return this.http.get<GameView[]>(this.gamessUrl)
      .pipe(
        tap(_ => this.log('fetched games')),
        catchError(this.handleError<GameView[]>('getGames',[]))
      );
    }

    getGame(id: number): Observable<GameView> {
      const url = `${this.gamessUrl}/${id}`;
      return this.http.get<GameView>(url);
    }

    startGame(): Observable<GameView> {
      const url = `${this.gamessUrl}begin`;
      return this.http.post<GameView>(url,null,this.httpOptions);
    }

    makeMove(play : Play) : Observable<GameView> {
      const url = `${this.gamessUrl}move`;
      return this.http.post<GameView>(url,play,this.httpOptions);
    }

    getMoves() : Observable<Play> {
      const url = `${this.gamessUrl}moves`;
      return this.http.get<Play>(url);
    }

    loadGame(id : number) : Observable<GameView> {
    
      return this.http.get<GameView>(this.gamessUrl+"game/"+id);
    }
    rewind(id : number) : Observable<number> {
      return this.http.delete<number>(this.gamessUrl+"rewind/"+id)
      
    }


private log(message: string) {
  this.messageService.add(`GameService: ${message}`);
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); 

    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

/** PUT: update the game on the server */
updateGame(game: GameView): Observable<any> {
  return this.http.put(this.gamessUrl, game, this.httpOptions).pipe(
    tap(_ => this.log(`updated game id=${game.id}`)),
    catchError(this.handleError<any>('updateGame'))
  );

  
}

addGame(game: GameView): Observable<GameView> {
  return this.http.post<GameView>(this.gamessUrl, game, this.httpOptions).pipe(
    tap((newGame: GameView) => this.log(`added game w/ id=${newGame.id}`)),
    catchError(this.handleError<GameView>('addGame'))
  );
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

deleteGame(game: GameView | number): Observable<GameView> {
  const id = typeof game === 'number' ? game : game.id;
  const url = `${this.gamessUrl}/${id}`;

  return this.http.delete<GameView>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted game id=${id}`)),
    catchError(this.handleError<GameView>('deleteGame'))
  );
}




}
