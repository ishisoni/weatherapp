import React from 'react';
import Titles from './titles';
import Form from './form';
import Weather from './weather';
import Tweets from './tweets';
import Tweet from './react-tweet';
const Api_Key = "";
const tweetData = {
    id_str: 'XXX',
    user: {
        name: 'XXX',
        screen_name: 'XXX',
        profile_image_url: 'XXX',
    },
    text: 'XXX',
    created_at: 'XXX',
    favorite_count: 'XXX',
    retweet_count: 'XXX',
    entities: {
        media: [],
        urls: [],
        user_mentions: [],
        hashtags: [],
        symbols: []
    }
}

class App extends React.Component{

    render(){

    return(
        <div>
          <Titles/>
          <Form
              loadWeather = {this.getWeather}
              loadTweets = {this.getTweets}
          />
          <Weather
              temperature={Math.ceil((this.state.temperature-273.15)*(9/5)+32)}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
          />

        </div>
    )
  }
  getWeather = async(e) => {

      e.preventDefault();
      const Api_Key = "";
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
      const response = await api_call.json();
      console.log(response);
      this.setState({
           temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: ""
      });
  }
  state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
  }
}
export default App;
