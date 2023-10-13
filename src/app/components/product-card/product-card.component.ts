import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input()
  name: string = ''

  @Input()
  picture: string = ''

  @Input()
  discount: boolean = false;

  @Input()
  available: boolean = true;

  @Input()
  originalPrice: number = 0;

  @Input()
  discountPrice: number | null = 0;

  @Input()
  reviewsCount: number = 0;

  @Input()
  reviewAverage: number = 0;
}
