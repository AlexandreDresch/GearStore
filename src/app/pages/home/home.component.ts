import { Component } from '@angular/core';
import { Product } from 'src/app/types/product.interface';
import { techStoreProducts } from 'src/staticData/storeProducts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[] = [];

  ngOnInit() {
    this.products = techStoreProducts;
  }
}
