export type CountryName = {
  language: string;
  text: string;
};

export type CountryRequest = {
  isoCode: string;
  name: CountryName[];
};

export type HolidayName = {
  language: string;
  text: string;
};

export type Holiday = {
  id: string;
  startDate: string;
  endDate: string;
  name: HolidayName[];
};
