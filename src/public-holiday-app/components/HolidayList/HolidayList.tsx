
import { useHolidays } from '../../hooks/useHolidays';
import styles from './HolidayList.module.css'

export default function HolidayList(countryIsoCode: any) {
  const { data: holidays } = useHolidays(countryIsoCode.countryIsoCode);
  
  return (
    <>
     {holidays && (
      <ul className={styles.holidayList}>
        {holidays.map((holiday) => (
          <li key={holiday.id} className={styles.holidayItem}>
            <span>{holiday.startDate}</span>
            <span>{holiday.name[0].text}</span>
          </li>
        ))}
      </ul>
      )}
    </>
  )
}
