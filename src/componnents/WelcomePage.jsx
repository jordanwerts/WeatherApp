import React from "react"

export default function WelcomePage(props) {
// props.ForcastDays???
const [forecastDays, setForecastDays] = React.useState(3)

const selections = [
    {label: "3 Day", value: 3},
    {label: "5 Day", value: 5},
    {label: "7 Day", value: 7}
]
const forecastButtons = selections.map((item) => (
    <button 
        id = {item.value}
        onClick = {() => setForecastDays(item.value)}
    >
        {item.label}
    </button>
))
    const layout =(
        <div style = {{
            backgroundColor: "silver"
            }} >
            <h2>Offical OKCoders Weather Forecast App</h2>
            {forecastButtons}
            <p>{forecastDays}</p>
        </div>
    )
    return layout
  }

