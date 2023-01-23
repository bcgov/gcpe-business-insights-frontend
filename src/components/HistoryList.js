import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useApi } from "../contexts/ApiProvider";

export default function HistoryList() {
  const [dates, setDates] = useState();
  const api = useApi();

  useEffect(() => {
    (async () => {
      const response = await api.get("/posts/translations/history");
      if (response.ok) {
        const dates = await response.body;
        setDates(dates);
      } else {
        setDates(null);
      }
    })();
  }, [api]);

  return (
    <>
      <h3 className="mb-3">History List</h3>
      <ul className="history-list">
        {dates &&
          dates.map((date, index) => {
            var url = `/history/${date.start}/${date.end}`;
            return (
              <li key={index} className="py-2">
                <Link to={url} target="_blank">
                  {date.month} {date.year}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
