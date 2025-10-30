import { useState } from "react";
import { useCountries } from "../../hooks/useCountries";
import styles from "./Countries.module.css";
import HolidayList from "../HolidayList/HolidayList";

export default function Countries() {
  const [countryIsoCode, setCountryIsoCode] = useState("");
  const { data: countries, isPending, error } = useCountries();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryIsoCode(e.target.value);
  };

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error 😢</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🌍 Public Holiday</h1>
      <select
        onChange={handleChange}
        value={countryIsoCode}
        className={styles.select}
      >
        <option value="">Select a country</option>
        {countries?.map((c) => (
          <option key={c.isoCode} value={c.isoCode}>
            {c.name[0].text}
          </option>
        ))}
      </select>

      <HolidayList countryIsoCode={countryIsoCode} />
    </div>
  );
}
