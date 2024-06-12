import React from 'react';

function CareerCard({ career_data }) {
  return (
    <div className="card h-100">
      <img src={career_data.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{career_data.name}</h5>
      </div>
    </div>
  );
}

export default CareerCard;
