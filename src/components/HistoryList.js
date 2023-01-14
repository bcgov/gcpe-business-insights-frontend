import { useState, useEffect } from "react";
import { useApi } from "../contexts/ApiProvider";
import { Link } from "react-router-dom";

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
      <h1>History List</h1>
      <ul>
        {dates &&
          dates.map((date, index) => {
            var url = `/history/${date.start}/${date.end}`;
            return <li key={index}><Link to={url} target="_blank">{date.month} {date.year}</Link></li>;
          })}
      </ul>
    </>
  );
}
