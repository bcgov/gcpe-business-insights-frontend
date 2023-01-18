import { useEffect, useState } from "react";

import Spinner from "react-bootstrap/Spinner";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import { useApi } from "../contexts/ApiProvider";

export default function Rollup() {
  const [monthlyNewsReleaseVolume, setMonthlyNewsReleaseVolume] = useState();
  const [translationsVolumeByMonth, setTranslationsVolumeByMonth] = useState();
  const [releasesTranslatedByMinistry, setreleasesTranslatedByMinistry] =
    useState();
  const [languageCounts, setLanguageCounts] = useState();
  const api = useApi();

  useEffect(() => {
    (async () => {
      const response = await api.get("/posts/rollup");
      if (response.ok) {
        const results = await response.body;
        setMonthlyNewsReleaseVolume(results.newsReleaseVolumeByMonth);
        setTranslationsVolumeByMonth(results.translationsVolumeByMonth);
        setreleasesTranslatedByMinistry(results.releasesTranslatedByMinistry);
        setLanguageCounts(results.languageCounts);
      } else {
        setreleasesTranslatedByMinistry(null);
        setLanguageCounts(null);
      }
    })();
  }, [api]);

  return (
    <>
      <div className="mb-3">
        <h3>Rollup</h3>
        <p>
          <strong>{monthlyNewsReleaseVolume}</strong> releases translated
          <br />
          <strong>{translationsVolumeByMonth}</strong> documents translated
        </p>
      </div>
      {releasesTranslatedByMinistry === undefined ? (
        <Spinner animation="border" />
      ) : (
        <>
          <div className="roll-up-container">
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
              <h4>News Releases By Ministry</h4>
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
          </div>
        </>
      )}
    </>
  );
}
