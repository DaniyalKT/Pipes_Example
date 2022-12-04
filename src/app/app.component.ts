import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  reciverName: string = ''

  onChangeName(textValue: string){
    this.reciverName = textValue
  }
}
