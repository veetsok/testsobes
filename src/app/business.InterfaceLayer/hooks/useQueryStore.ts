"use client";

const baseUrl = "https://65aff06e2f26c3f2139c1dbd.mockapi.io/kugo";

export async function getProducts() {
  const response = await fetch(`${baseUrl}`);
  const data = await response.json();
  return data;
}
