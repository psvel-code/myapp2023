import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/core/component/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {


  constructor(
    private dialog: MatDialog
  ) { }
  openConfirmationDialog(name: any, classname?: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        header: 'Confirmation',
        content: 'Are you want to delete this record ?',
        actiontype: 'Confirmation',
        name: name
      },
      width: "400px",
      autoFocus: false
    });
    return dialogRef;
  }
}
