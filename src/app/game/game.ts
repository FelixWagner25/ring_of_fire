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
  currentCard: string = '';
  game: GameModel = new GameModel();

  ngOnInit(){
    this.newGame();
  }

  takeCard(){
    this.pickCardAnimation = true;
    let card = this.game.stack.pop();
    if(card === undefined) return
    this.currentCard = card
  }
  
  newGame(){
    this.game = new GameModel();
    console.log(this.game)
  }
}


