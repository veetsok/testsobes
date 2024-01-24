"use client";
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

const baseUrl = "https://65aff06e2f26c3f2139c1dbd.mockapi.io/kugo";

export async function getProducts() {
  const response = await fetch(`${baseUrl}`);
  const data = await response.json();
  return data;
}
