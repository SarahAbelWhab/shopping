import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Output() chosenLink = new EventEmitter<string>();

  onChoose(item:string){
    this.chosenLink.emit(item);
  }

}
