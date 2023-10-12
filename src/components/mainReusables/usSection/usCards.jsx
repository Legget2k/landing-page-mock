import React from 'react';

function UsCard({ name, role, image }) {
  return (
    <div className="us-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
}

export default UsCard;