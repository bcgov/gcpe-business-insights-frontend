import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useApi } from "../contexts/ApiProvider";

export default function HistoryList() {
  const [groupedDates, setGroupedDates] = useState([]);
  const api = useApi();

  useEffect(() => {
    (async () => {
      const response = await api.get("/posts/translations/history");
      if (response.ok) {
        const groupedDates = await response.body;
        setGroupedDates(groupedDates);
        console.log(groupedDates);
      } else {
        setGroupedDates(null);
      }
    })();
  }, [api]);

  return (
    <>
      <h1>History List</h1>
       {Object.keys(groupedDates).reverse().map((year) => (
        <details key={year}>
          <summary>{year}</summary>
          <ul>
            {groupedDates[year].map((date) => (
              <li key={`${date.year}-${date.month}`} className="py-2">
                <Link to={`/history/${date.start}/${date.end}`} target="_blank">
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
