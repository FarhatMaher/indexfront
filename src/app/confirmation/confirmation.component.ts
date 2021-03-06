import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  message;
  confirm = '' ;
  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialog: MatDialogRef<ConfirmationComponent>) {

   this.message = data.message ;
   this.confirm = data.confirm ;
  }
   ngOnInit() {
   }
   change() {
     this.confirm = 'ok' ;
     this.dialog.close();

   }

}
