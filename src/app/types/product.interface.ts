export interface Product {
    name: string;
    picture: string;
    discount: boolean;
    available: boolean;
    originalPrice: number;
    discountPrice: number | null;
    reviewsCount: number;
    reviewAverage: number;
  }