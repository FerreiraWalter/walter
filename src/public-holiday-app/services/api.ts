export async function fetchCountries(languageIsoCode = "PT") {
  const res = await fetch(
    `https://openholidaysapi.org/Countries?languageIsoCode=${languageIsoCode}`
  );
  return res.json();
}

export async function fetchHolidays(countryIsoCode: string, languageIsoCode = "PT") {
  const res = await fetch(
    `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${countryIsoCode}&validFrom=2025-01-01&validTo=2025-12-31&languageIsoCode=${languageIsoCode}`
  );
  return res.json();
}
