import { useEffect, useState } from "react";

import OverviewCard from "../components/OverviewCard";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import { useApi } from "../contexts/ApiProvider";

export default function Translations({ start, end }) {
  function getPath(url) {
    var lastSlashIdx = url.lastIndexOf("/") + 1;
    return url.substring(lastSlashIdx);
  }
  const [translations, setTranslations] = useState();
  const [monthlyNewsReleaseVolume, setMonthlyNewsReleaseVolume] = useState();
  const [translationsVolumeByMonth, setTranslationsVolumeByMonth] = useState();
  const [releasesTranslatedByMinistry, setreleasesTranslatedByMinistry] =
    useState();
  const [languageCounts, setLanguageCounts] = useState();
  const [monthName, setMonthName] = useState();
  const [year, setYear] = useState();
  const api = useApi();

  useEffect(() => {
    (async () => {
      var url =
        start && end
          ? `/posts/translations/custom?startDate=${start}&endDate=${end}`
          : "/posts/translations";
      const response = await api.get(url);
      if (response.ok) {
        const results = await response.body;
        setTranslations(results.translations);
        setMonthlyNewsReleaseVolume(results.newsReleaseVolumeByMonth);
        setTranslationsVolumeByMonth(results.translationsVolumeByMonth);
        setreleasesTranslatedByMinistry(results.releasesTranslatedByMinistry);
        setLanguageCounts(results.languageCounts);
        setMonthName(results.monthName);
        setYear(results.year);
      } else {
        setTranslations(null);
        setreleasesTranslatedByMinistry(null);
        setLanguageCounts(null);
      }
    })();
  }, [start, end, api]);

  return (
    <>
      <OverviewCard
        cardHeader={"2023 Overview"}
        cardTitle={"Published to BC Gov News"}
        releaseNumber={monthlyNewsReleaseVolume}
        docNumber={translationsVolumeByMonth}
        monthName={monthName}
        year={year}
      />

      {releasesTranslatedByMinistry === undefined ? (
        <Spinner animation="border" />
      ) : (
        <>
          <div className="roll-up-container roll-up-container-3-table">
            <div className="flex-item">
              {languageCounts === null ? (
                <p>Could not retrieve languages.</p>
              ) : (
                <>
                  <h4>Translations by Language</h4>
                  {languageCounts.length === 0 ? (
                    <p>There are no language counts.</p>
                  ) : (
                    <Table striped className="table-outer-bordered">
                      <thead>
                        <tr>
                          <th>Language</th>
                          <th className="centerTd">Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        {languageCounts.map((item, index) => {
                          return (
                            <tr key={item.language}>
                              <td>{item.language}</td>
                              <td className="centerTd">{item.count}</td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td></td>
                          <td className="centerTd">
                            <strong>Total {translationsVolumeByMonth}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  )}
                </>
              )}
            </div>
            <div className="flex-item">
              <h4>Translations By Ministry</h4>
              {releasesTranslatedByMinistry === null ? (
                <p>Could not retrieve news releases by ministry.</p>
              ) : (
                <>
                  {releasesTranslatedByMinistry.length === 0 ? (
                    <p>There are no translations by ministry.</p>
                  ) : (
                    <Table striped className="table-outer-bordered">
                      <thead>
                        <tr>
                          <th>Ministry</th>
                          <th className="centerTd">Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        {releasesTranslatedByMinistry.map((item, index) => {
                          return (
                            <tr key={item.ministry}>
                              <td>{item.ministry}</td>
                              <td className="centerTd">{item.count}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  )}
                </>
              )}
            </div>
            <div className="flex-item">
              {translations === null ? (
                <p>Could not retrieve news releases.</p>
              ) : (
                <>
                  <h4>Translations by News Release</h4>
                  {translations.length === 0 ? (
                    <p>There are no translations.</p>
                  ) : (
                    <Table striped className="table-outer-bordered">
                      <thead>
                        <tr>
                          <th>News Release Key</th>
                          <th>URL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {translations.map((item, index) => {
                          return (
                            <tr key={item.key}>
                              <td>{item.key}</td>
                              <td>
                                <details>
                                  <summary>Details</summary>
                                  <ol>
                                    {item.urls.map((u, i) => (
                                      <li key={i}>
                                        <a
                                          href={u}
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          {getPath(u)}
                                        </a>
                                      </li>
                                    ))}
                                  </ol>
                                </details>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
