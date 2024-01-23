"use client";

import { useQuery, useQueryClient } from "react-query";

const baseUrl = "https://65aff06e2f26c3f2139c1dbd.mockapi.io/kugo";

const fetchProducts = async () => {
  const response = await fetch(`${baseUrl}`);
  const data = await response.json();
  return data;
};

export const useQueryStore = () => {
  const queryClient = useQueryClient();

  const { data: products, isLoading } = useQuery("products", fetchProducts, {
    onSuccess: (data) => {
      // Удалите старые данные, если необходимо
      queryClient.setQueryData("products", data);
    },
  });

  return { products, isLoading };
};
