import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModel } from '../../models/game-model';
import { ChangeDetectorRef } from '@angular/core';
import { Player } from '../player/player';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayer } from '../dialog-add-player/dialog-add-player';
import { GameInfo } from '../game-info/game-info';
import { AddFirstPlayer } from '../add-first-player/add-first-player';


@Component({
  selector: 'app-game',
  imports: [CommonModule, Player, MatButtonModule, MatIcon, GameInfo, AddFirstPlayer],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
constructor(private cdr: ChangeDetectorRef){}

  pickCardAnimation: boolean= false;
  currentCard: string = '';
  game: GameModel = new GameModel();

  ngOnInit(){
    this.newGame();
  }

  takeCard(){
    if(this.game.players.length == 0) return
    if (!this.pickCardAnimation) {
      let card = this.game.stack.pop();
      if(card === undefined) return
      this.currentCard = card
      this.pickCardAnimation = true;
      this.game.currentPlayer +=1;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length 

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


  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayer);

    dialogRef.afterClosed().subscribe( (name: string) =>{
      if(name && name.length > 0){
        this.game.players.push(name);
        this.cdr.detectChanges();
      }
    });

  }
}


