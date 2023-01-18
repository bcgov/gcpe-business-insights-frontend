import React from 'react';

const OverviewCard = ({ cardHeader, cardTitle, releaseNumber, docNumber }) => {
    return (
        <div class="card mb-3 bg-light">
            <div class="card-header">
                {cardHeader}
            </div>
            <div class="card-body">
                <h5 class="card-title">{cardTitle}</h5>
                <p>
                    Releases translated <span class="badge badge-primary">{releaseNumber}</span>
                    <br />
                    Documents translated <span class="badge badge-primary">{docNumber}</span>
                </p>
            </div>
        </div>
    );
}
  
export default OverviewCard;