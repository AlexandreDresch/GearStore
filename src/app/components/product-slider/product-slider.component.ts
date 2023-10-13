import { Component, Input } from '@angular/core';
import { Product } from 'src/app/types/product.interface';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent {
  @Input()
  title: string = ''

  @Input()
  path: string = ''

  @Input()
  products: Product[] = [];
}
