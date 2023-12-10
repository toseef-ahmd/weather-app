import { useState } from 'react';
import Header from '../components/Common/header.component'
import Dashboard from '../containers/dashboard.container'
import React from 'react';
import { units } from '../utils/weather.util';

const Home: React.FC = () => {
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  const unitToDisplay  = () : string => { return units[unit];};

  const handleUnitToggle = (newUnit: 'C' | 'F') : void => {
    setUnit(newUnit);
  };

  return (
    <>
      <Header title="Weather App" logo='clear-day.svg' setUnit={handleUnitToggle}/>
      <Dashboard unit = {unitToDisplay()}/>
    </>
  )
}

export default Home
