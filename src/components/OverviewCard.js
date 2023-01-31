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

const OverviewCard = ({ cardHeader, cardTitle, releaseNumber, docNumber }) => {
  return (
    <div class="card mb-3 bg-light">
      <div class="card-header" style={{ fontSize: "1.2em" }}>
        {cardHeader}
      </div>
      <div class="card-body">
        <h5 class="card-title" style={{ fontWeight: "bold" }}>
          {cardTitle}
        </h5>
        <p style={{ lineHeight: "1.8" }}>
          <span class="badge badge-primary" style={{ minWidth: "50px" }}>
            {releaseNumber}
          </span>
          <span style={{ marginLeft: "20px" }}>
            Releases translated in {monthNames[new Date().getMonth()]}{" "}
            {new Date().getFullYear()}
          </span>{" "}
          <br />
          <span class="badge badge-primary" style={{ minWidth: "50px" }}>
            {docNumber}
          </span>
          <span style={{ marginLeft: "20px" }}>
            Documents translated in {monthNames[new Date().getMonth()]}{" "}
            {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OverviewCard;
