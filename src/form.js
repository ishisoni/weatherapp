import React from 'react';
const Form = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
            <input type="text" name= "tweets" placeholder="Search for tweets related to weather" />
            <button>Get Weather</button>
            <button>Get Tweets</button>
        </form>
    )
}
export default Form;