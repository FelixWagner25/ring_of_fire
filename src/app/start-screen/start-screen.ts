import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-start-screen',
  imports: [],
  templateUrl: './start-screen.html',
  styleUrl: './start-screen.scss',
})
export class StartScreen {
  private router = inject(Router);

  newGame(){
    this.router.navigate(['game'])
  }
}
