import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {MessageService} from  './message.service';
import {HttpClient, HttpHeaders} from  '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {Game} from './game';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamessUrl = 'http://localhost:8080/api/games';  // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

    getGames(): Observable<Game[]> {
      return this.http.get<Game[]>(this.gamessUrl)
        .pipe(
          tap(_ => this.log('fetched games')),
          catchError(this.handleError<Game[]>('getGames', []))
        );
    }

    getGame(id: number): Observable<Game> {
      const url = `${this.gamessUrl}/${id}`;
      return this.http.get<Game>(url).pipe(
        tap(_ => this.log(`fetched game id=${id}`)),
        catchError(this.handleError<Game>(`getGame id=${id}`))
      );
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
updateGame(game: Game): Observable<any> {
  return this.http.put(this.gamessUrl, game, this.httpOptions).pipe(
    tap(_ => this.log(`updated game id=${game.gameId}`)),
    catchError(this.handleError<any>('updateGame'))
  );

  
}

addGame(game: Game): Observable<Game> {
  return this.http.post<Game>(this.gamessUrl, game, this.httpOptions).pipe(
    tap((newGame: Game) => this.log(`added game w/ id=${newGame.gameId}`)),
    catchError(this.handleError<Game>('addGame'))
  );
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

deleteGame(game: Game | number): Observable<Game> {
  const id = typeof game === 'number' ? game : game.gameId;
  const url = `${this.gamessUrl}/${id}`;

  return this.http.delete<Game>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted game id=${id}`)),
    catchError(this.handleError<Game>('deleteGame'))
  );
}




}
