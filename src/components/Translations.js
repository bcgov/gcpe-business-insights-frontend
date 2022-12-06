import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import { useApi } from "../contexts/ApiProvider";

export default function Translations() {
  const [translations, setTranslations] = useState();
  const [monthlyNewsReleaseVolume, setMonthlyNewsReleaseVolume] = useState();
  const [translationsVolumeByMonth, setTranslationsVolumeByMonth] = useState();
  const [releasesTranslatedByMinistry, setreleasesTranslatedByMinistry] =
    useState();
  const [languageCounts, setLanguageCounts] = useState();
  const api = useApi();

  useEffect(() => {
    (async () => {
      const response = await api.get("/posts/translations");
      if (response.ok) {
        const results = await response.body;
        setTranslations(results.translations);
        setMonthlyNewsReleaseVolume(results.newsReleaseVolumeByMonth);
        setTranslationsVolumeByMonth(results.translationsVolumeByMonth);
        setreleasesTranslatedByMinistry(results.releasesTranslatedByMinistry);
        setLanguageCounts(results.languageCounts);
      } else {
        setTranslations(null);
        setreleasesTranslatedByMinistry(null);
        setLanguageCounts(null);
      }
    })();
  }, [api]);

  return (
    <>
      <div style={{ marginBottom: 50 }}>
        <h1>Monthly Overview</h1>
        <p>
          {monthlyNewsReleaseVolume} releases translated in October
          <br />
          {translationsVolumeByMonth} documents translated in October
        </p>
      </div>
      {releasesTranslatedByMinistry === undefined ? (
        <Spinner animation="border" />
      ) : (
        <>
          <h2>News Releases By Ministry</h2>
          {releasesTranslatedByMinistry === null ? (
            <p>Could not retrieve news releases by ministry.</p>
          ) : (
            <>
              {releasesTranslatedByMinistry.length === 0 ? (
                <p>There are no translations by ministry.</p>
              ) : (
                <Table striped bordered>
                  <thead>
                    <th>Ministry</th>
                    <th>Count</th>
                  </thead>
                  <tbody>
                    {releasesTranslatedByMinistry.map((item, index) => {
                      return (
                        <tr key={item.ministry}>
                          <td>{item.ministry}</td>
                          <td>{item.count}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )}
            </>
          )}
          {languageCounts === null ? (
            <p>Could not retrieve languages.</p>
          ) : (
            <>
              <h2 style={{ marginTop: 50 }}>Totals by Language</h2>
              {languageCounts.length === 0 ? (
                <p>There are no language counts.</p>
              ) : (
                <Table striped bordered>
                  <thead>
                    <th>Language</th>
                    <th>Count</th>
                  </thead>
                  <tbody>
                    {languageCounts.map((item, index) => {
                      return (
                        <tr key={item.language}>
                          <td>{item.language}</td>
                          <td>{item.count}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )}
            </>
          )}
          {translations === null ? (
            <p>Could not retrieve news releases.</p>
          ) : (
            <>
              <h2 style={{ marginTop: 50 }}>Translations by News Release</h2>
              {translations.length === 0 ? (
                <p>There are no translations.</p>
              ) : (
                <Table striped bordered>
                  <thead>
                    <th>News Release Key</th>
                    <th>Azure Urls</th>
                  </thead>
                  <tbody>
                    {translations.map((item, index) => {
                      return (
                        <tr key={item.key}>
                          <td>{item.key}</td>
                          <td>
                            <ol>
                              {item.urls.map((u, i) => (
                                <li key={i}>
                                  <p>
                                    <a
                                      href={u}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {u}
                                    </a>
                                  </p>
                                </li>
                              ))}
                            </ol>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
