import React from 'react';
const Weather = (props) => {
    return(
        <div>
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.country && props.city && <p>Location: {props.city}, {props.country}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Conditions:  {props.description}</p>}
            {props.error && <p>{props.error}</p>}

        </div>
    )
}
export default Weather;