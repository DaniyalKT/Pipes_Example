import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  reciverName: string = ''
  dateInput: string = ''
  AmountInput: string = ''

  onChangeName(textValue: string){
    this.reciverName = textValue
  }

  onChangeDate(value: string){
     this.dateInput = value
  }
  onChangeAmount(value: string){
     this.AmountInput = value
  }
}
