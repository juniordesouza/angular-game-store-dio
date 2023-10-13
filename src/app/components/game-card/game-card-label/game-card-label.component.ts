import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card-label',
  templateUrl: './game-card-label.component.html',
  styleUrls: ['./game-card-label.component.scss']
})
export class GameCardLabelComponent {

  @Input()
  gameCardLabel: string = ""
}
