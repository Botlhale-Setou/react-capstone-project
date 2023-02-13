import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Country = (props) => {
  const { name, flag, area } = props;

  return (
    <Link to={`/details/${name}`} className="countryCard">
      <h2 className="countryName">
        {name}
        <span>
          {area}
          km&#178;
        </span>
      </h2>
      <img src={flag} alt={`${name} flag`} className="countryFlag" />
    </Link>
  );
};

Country.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.string,
  area: PropTypes.number,
}.isRequired;

export default Country;
