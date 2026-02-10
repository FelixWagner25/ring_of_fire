import { Component, inject } from '@angular/core';
import { Input } from '@angular/core';
import { MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-add-player',
  imports: [MatDialogContent, MatDialogActions, FormsModule, MatLabel, MatFormField],
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
