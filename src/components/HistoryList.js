import { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";
import { useApi } from "../contexts/ApiProvider";

export default function HistoryList() {
  const [groupedDates, setGroupedDates] = useState([]);
  const api = useApi();
  const firstDetailsRef = useRef(null);

  useEffect(() => {
    (async () => {
      const response = await api.get("/posts/translations/history");
      if (response.ok) {
        const groupedDates = await response.body;
        
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
        const currentYear = currentDate.getFullYear();

        const filteredItems = groupedDates[currentYear.toString()].filter(item => {
          const itemMonth = getMonthIndex(item.month); // Custom helper function to get the month index
          return (
            (item.year < currentYear && itemMonth <= currentMonth) ||
            (item.year === currentYear && itemMonth <= currentMonth)
          );
        });

        groupedDates[currentYear] = filteredItems;

        setGroupedDates(groupedDates);
      } else {
        setGroupedDates(null);
      }
    })();
  }, [api]);

  useEffect(() => {
    // Check if the first details ref exists and open it
    if (firstDetailsRef.current) {
      firstDetailsRef.current.open = true;
    }
  }, [groupedDates]);

  function getMonthIndex(monthName) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames.indexOf(monthName) + 1; // Adding 1 to match the JavaScript month index
  }
  
  return (
    <>
       <h5 style={{ marginTop: 20, marginBottom: 25 }}><strong>Collections</strong></h5>
       {Object.keys(groupedDates).reverse().map((year, index) => (
        <details style={{ marginTop: 10 }} key={year} ref={index === 0 ? firstDetailsRef : null}>
          <summary>{year}</summary>
          <ul>
            {groupedDates[year].map((date) => (
              <li key={`${date.year}-${date.month}`} className="py-2">
                <Link to={`/collection/${date.start}/${date.end}`}>
                  {date.month} {date.year}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </>
  );
}
