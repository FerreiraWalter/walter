import { useQuery } from "@tanstack/react-query";
import type { CountryRequest } from "../types/holiday";
import { fetchCountries } from "../services/api";

export function useCountries(language = "PT") {
  return useQuery<CountryRequest[]>({
    queryKey: ["countriesData", language],
    queryFn: () => fetchCountries(language),
  });
}
