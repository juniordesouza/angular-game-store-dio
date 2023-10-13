import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {

  @Input()
  gameImage: string = ""

  @Input()
  gameCardLabel: string = ""

  @Input()
  gameCardPrice: string = '';

  @Input()
  gameCardConsoles: string = '';

}
