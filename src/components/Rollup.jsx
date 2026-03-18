import { useEffect, useState } from "react";

import OverviewCard from "./OverviewCard";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import { useApi } from "../contexts/ApiProvider";

export default function Rollup() {
  const [monthsWithPdfCounts, setMonthsWithPdfCounts] = useState();
  const [monthlyNewsReleaseVolume, setMonthlyNewsReleaseVolume] = useState();
  const [translationsVolumeByMonth, setTranslationsVolumeByMonth] = useState();
  const [ministryTranslationsVolume, setMinistryTranslationsVolume] = useState();
  const [releasesTranslatedByMinistry, setreleasesTranslatedByMinistry] =
    useState();
  const [languageCounts, setLanguageCounts] = useState();
  const [monthName, setMonthName] = useState();
  const [year, setYear] = useState();
  const api = useApi();

  useEffect(() => {
    (async () => {
      const response = await api.get("/posts/rollup");
      if (response.ok) {
        const results = await response.body;
        setMonthsWithPdfCounts(results.monthsWithPdfCounts);
        setMonthlyNewsReleaseVolume(results.newsReleaseVolumeByMonth);
        setTranslationsVolumeByMonth(results.translationsVolumeByMonth);
        setMinistryTranslationsVolume(results.ministryTranslationsVolume);
        setreleasesTranslatedByMinistry(results.releasesTranslatedByMinistry);
        setLanguageCounts(results.languageCounts);
        setMonthName(results.monthName);
        setYear(results.year);
      } else {
        setreleasesTranslatedByMinistry(null);
        setLanguageCounts(null);
      }
    })();
  }, [api]);

  return (
    <>
      <OverviewCard
        cardHeader={"Rollup"}
        cardTitle={"Yearly Overview"}
        releaseNumber={monthlyNewsReleaseVolume}
        docNumber={translationsVolumeByMonth}
        monthName={monthName}
        year={year}
      />

      {releasesTranslatedByMinistry === undefined ? (
        <Spinner animation="border" />
      ) : (
        <>
          <div className="roll-up-container">
          <div className="flex-item">
              {monthsWithPdfCounts === null ? (
                <p>Could not retrieve months with pdf counts.</p>
              ) : (
                <>
                  {monthsWithPdfCounts.length === 0 ? (
                    <p>There are no months with pdf counts.</p>
                  ) : (
                    <Table striped className="table-outer-bordered">
                      <thead>
                        <tr>
                          <th>
                            Month
                          </th>
                          {monthsWithPdfCounts.map((item, index) => {
                          return (
                            <th key={item.month}>
                              <td>{item.month}</td>
                            </th>
                          );
                        })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Translations</td>
                          {monthsWithPdfCounts.map((item, index) => {
                          return (
                              <td key={item.month} className="centerTd">{item.pdfCount}</td>
                          );
                        })}
                        </tr>
                      </tbody>
                    </Table>
                  )}
                </>
              )}
            </div>
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
                        <tr>
                          <td></td>
                          <td className="centerTd">
                            <strong>Total {ministryTranslationsVolume}</strong>
                          </td>
                        </tr>
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
