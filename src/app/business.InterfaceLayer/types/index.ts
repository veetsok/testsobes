export interface Products {
  id: number;
  title: string;
  charge: string;
  horsepower: number;
  speed: number;
  chargeTime: number;
  actualPrice: number;
  priceSale: number;
  img: [string];
  productShieldHit: boolean;
  forTown: boolean;
  forAdults: boolean;
  forChildren: boolean;
}

export interface Items extends Products {
  sumProduct: number;
  total: number;
  quantity: number;
}
