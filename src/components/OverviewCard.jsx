import React from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const OverviewCard = ({ cardHeader, cardTitle, releaseNumber, docNumber, monthName, year }) => {
  return (
    <div className="card mb-3 bg-light">
      <div className="card-header" style={{ fontSize: "1.2em" }}>
        {cardHeader}
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{ fontWeight: "bold" }}>
          {cardTitle}
        </h5>
        <p style={{ lineHeight: "1.8" }}>
          <span className="badge badge-primary" style={{ minWidth: "50px" }}>
            {releaseNumber}
          </span>
          <span style={{ marginLeft: "20px" }}>
            Releases translated in {monthName}{" "}
            {year}
          </span>{" "}
          <br />
          <span className="badge badge-primary" style={{ minWidth: "50px" }}>
            {docNumber}
          </span>
          <span style={{ marginLeft: "20px" }}>
            Documents translated in {monthName}{" "}
            {year}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OverviewCard;
