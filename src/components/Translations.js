import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function Translations() {
  const [newsReleases, setNewsReleases] = useState();

      useEffect(() => {
        (async () => {
          const response = await fetch(BASE_API_URL + "/api/newsreleases");
          if (response.ok) {
            const results = await response.json();
            setNewsReleases(results);
          } else {
            setNewsReleases(null);
          }
        })();
      }, []);

  return (
    <>
      {newsReleases === undefined ? (
        <Spinner animation="border" />
      ) : (
        <>
          {newsReleases === null ? (
            <p>Could not retrieve news releases.</p>
          ) : (
            <>
              {newsReleases.length === 0 ? (
                <p>There are no news releases.</p>
              ) : (
                newsReleases.map((release) => (
                  <p key={release.id}>{release.key}</p>
                ))
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

//   const translations = [
//     {
//       id: 1,
//       key: "2021HLTH0075-002303",
//       url: "https://bcgovnews.azureedge.net/translations/releases/2021HLTH0075-002303/12.1.21_COVID_Chinese(traditional).pdf",
//     },
//     {
//       id: 2,
//       key: "2021HLTH0075-002303",
//       url: "https://bcgovnews.azureedge.net/translations/releases/2021HLTH0075-002303/12.1.21_COVID_French.pdf",
//     },
//     {
//       id: 3,
//       key: "2021HLTH0075-002303",
//       url: "https://bcgovnews.azureedge.net/translations/releases/2021HLTH0075-002303/12.1.21_COVID_Punjabi.pdf",
//     },
//   ];
