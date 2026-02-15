import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-game-info',
  imports: [MatCardModule],
  templateUrl: './game-info.html',
  styleUrl: './game-info.scss',
})
export class GameInfo {

}
