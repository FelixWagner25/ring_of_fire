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


@Component({
  selector: 'app-game',
  imports: [CommonModule, Player, MatButtonModule, MatIcon, GameInfo],
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


  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayer);

    dialogRef.afterClosed().subscribe( (name: string) =>{
      this.game.players.push(name);
      console.log(this.game.players);
      this.cdr.detectChanges();
      
    });

  }
}


