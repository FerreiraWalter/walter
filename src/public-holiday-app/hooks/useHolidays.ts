import { useQuery } from "@tanstack/react-query";
import type { Holiday } from "../types/holiday";
import { fetchHolidays } from "../services/api";

export function useHolidays(countryIsoCode: string, language = "PT") {
  return useQuery<Holiday[]>({
    queryKey: ["holidays", countryIsoCode, language],
    queryFn: () => fetchHolidays(countryIsoCode, language),
    enabled: !!countryIsoCode,
  });
}
