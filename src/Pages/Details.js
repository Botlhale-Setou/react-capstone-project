import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const Details = () => {
  const state = useSelector((state) => state.countries);
  const { countryName } = useParams();
  const chosen = state.countries.filter((item) => item.name === countryName);

  if (chosen.length !== 0) {
    const {
      name,
      offName,
      capital,
      region,
      latlng,
      area,
      timezones,
      flags,
    } = chosen[0];

    return (
      <div className="details">
        <Link to="/" className="back">
          Back
        </Link>
        <img src={flags.png} alt={`${name} flag`} />
        <h1>{name}</h1>
        <p>
          Official Name:
          {offName}
        </p>
        <p>
          Capital:
          {capital}
        </p>
        <p>
          Region:
          {region}
        </p>
        <p>
          Lat/Lng:
          {latlng}
        </p>
        <p>
          Area:
          {area}
          {' '}
          km&#178;
        </p>
        <p>
          Timezones:
          {timezones}
        </p>
      </div>
    );
  }

  return <div>Loading</div>;
};

export default Details;
