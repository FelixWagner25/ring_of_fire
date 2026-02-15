import { Component, inject, Input } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-dialog-add-player',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule],
  templateUrl: './dialog-add-player.html',
  styleUrl: './dialog-add-player.scss',
})
export class DialogAddPlayer {

  @Input() name: string = "";

  readonly dialogRef = inject(MatDialogRef<DialogAddPlayer>);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
