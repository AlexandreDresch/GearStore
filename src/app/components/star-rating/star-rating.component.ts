import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input()
  reviewAverage: number = 0;

  stars: number[] = [];

  ngOnInit() {
    this.stars = this.generateStarsArray();
  }

  private generateStarsArray(): number[] {
    const fullStars = Math.floor(this.reviewAverage);
    const starArray = Array(5).fill(0);

    for (let i = 0; i < fullStars; i++) {
      starArray[i] = 1;
    }

    if (this.reviewAverage - fullStars >= 0.5) {
      starArray[fullStars] = 0.5;
    }

    return starArray;
  }
}
