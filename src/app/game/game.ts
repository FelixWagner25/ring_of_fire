import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModel } from '../../models/game-model';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
constructor(private cdr: ChangeDetectorRef){}

  pickCardAnimation = false;
  currentCard: string = '';
  game: GameModel = new GameModel();

  ngOnInit(){
    this.newGame();
  }

  takeCard(){
    if (!this.pickCardAnimation) {
      let card = this.game.stack.pop();
      if(card === undefined) return
      this.currentCard = card
      this.pickCardAnimation = true; 

      setTimeout(() => {
        this.pickCardAnimation = false;
        this.game.playedCards.push(this.currentCard);     
        this.cdr.detectChanges();
      }, 1000);
    }
  }
  
  newGame(){
    this.game = new GameModel();
    console.log(this.game)
  }
}


