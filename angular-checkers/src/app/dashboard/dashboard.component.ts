import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GameService} from '../game.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private gameService : GameService,
   private rout : Router) { }

  ngOnInit(): void {
  }

  startGame() : void {
    
    this.gameService.startGame().subscribe(game => 
      this.rout.navigateByUrl("/board/"+ game.id));
    
  }

}
