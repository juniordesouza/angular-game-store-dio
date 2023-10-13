import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card-price',
  templateUrl: './game-card-price.component.html',
  styleUrls: ['./game-card-price.component.scss']
})
export class GameCardPriceComponent {

  @Input()
  gameCardPrice: string = '';

  @Input()
  gameCardConsoles: string = '';

}
