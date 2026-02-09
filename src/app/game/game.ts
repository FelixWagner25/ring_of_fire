import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModel } from '../../models/game-model';


@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  pickCardAnimation = false;
  game: GameModel = new GameModel();

  ngOnInit(){
    this.newGame();
  }

  takeCard(){
    this.pickCardAnimation = true;
  }
  
  newGame(){
    this.game = new GameModel();
    console.log(this.game)
  }
}


