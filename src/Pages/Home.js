import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Country from '../Components/Country';

const Home = () => {
  const { countries } = useSelector((state) => state.countries);
  let countryDB = [];

  const [coDB, setCoDB] = useState(countries);

  const regionSwitch = (e) => {
    switch (e.target.value) {
      case 'all':
        countryDB = Array.from(countries);
        setCoDB(countryDB);
        break;
      case 'Northern':
        countryDB = countries.filter(
          (item) => item.region === 'Northern Africa',
        );
        setCoDB(countryDB);
        break;
      case 'Eastern':
        countryDB = countries.filter(
          (item) => item.region === 'Eastern Africa',
        );
        setCoDB(countryDB);
        break;
      case 'Southern':
        countryDB = countries.filter(
          (item) => item.region === 'Southern Africa',
        );
        setCoDB(countryDB);
        break;
      case 'Western':
        countryDB = countries.filter(
          (item) => item.region === 'Western Africa',
        );
        setCoDB(countryDB);
        break;
      case 'Middle':
        countryDB = countries.filter((item) => item.region === 'Middle Africa');
        setCoDB(countryDB);
        break;

      default:
        break;
    }
  };

  return (
    <div className="home">
      <p className="label">Select region:</p>
      <select
        name="regionSelect"
        id="regionSelect"
        defaultValue="all"
        className="regionSelect"
        onChange={(e) => regionSwitch(e)}
      >
        <option value="all">All (59)</option>
        <option value="Northern">Northern (7)</option>
        <option value="Eastern">Eastern (19)</option>
        <option value="Southern">Southern (6)</option>
        <option value="Western">Western (17)</option>
        <option value="Middle">Middle (10)</option>
      </select>

      {coDB.map((item) => (
        <Country
          key={item.name}
          name={item.name}
          flag={item.flags.png}
          area={item.area}
        />
      ))}
    </div>
  );
};

export default Home;
