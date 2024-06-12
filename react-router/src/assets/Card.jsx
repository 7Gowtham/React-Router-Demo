import React from 'react';

function Card({ fs_data }) {
  return (
    <div className="card h-100">
      <img src={fs_data.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{fs_data.name}</h5>
      </div>
    </div>
  );
}

export default Card;
