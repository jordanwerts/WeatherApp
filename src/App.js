import './App.css';
import WelcomePage from './componnents/WelcomePage';
import ForecastPage from './componnents/ForecastPage';
import React from 'react';



function App() {
  //pick which page to show
    const [forecastDays, setForecastDays] = React.useState(3)

  return (
    <div className="App">
      <p> working </p>
      <WelcomePage setForecastDays ={setForecastDays} />
    </div>
  );
}

export default App;
