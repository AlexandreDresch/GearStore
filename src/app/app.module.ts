import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    ProductCardComponent,
    StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
