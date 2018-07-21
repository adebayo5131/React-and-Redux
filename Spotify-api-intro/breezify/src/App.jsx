import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon, Button } from 'react-bootstrap';

import Profile from './Profile'
import Gallery from './Gallery'



//Spotify API
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
    
      query: '',
      artist: null,  // my response.
      tracks: [],
      user: ''

    }




  }





  search() {

    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=50';
    var accessToken = 'BQDCtTjYXfIF_eBSBKzASyY5FdnT2kvdxKuMf4mFdEnKEspsWZcP2P_cdogQiBuPz9KQ_mxeoqh5CaSMBevcWMHEniE2tDUo_xZoK-xIEsmnpaox2Ooy0EIhI1ZnDjd7l9q2DmSrYAPPAaSHHfbBxfK489rtR5TZxfL4GHXeD9yoiG5bbMT6agA&refresh_token=AQBidQrAmjEUeTYl3uJBlBX0uUDYbLj5q9H9qkSeYYc67Yd-nKaONf2C_hLccXMJgcQ_YQQMBFEzq2A-bY_3I5As3sia7zx3Dae2TjvF3oYCy7xyyWMeYIMAJXO3-FHosoQ'

    const CURRENT_USER = 'https://api.spotify.com/v1/me';

    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

    var myToken = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };
    fetch(FETCH_URL, myToken)
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        this.setState({ artist });



        FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
        fetch(FETCH_URL, myToken)
          .then(response => response.json())
          .then(json => {
            console.log('artist\'s top tracks:', json);
            const { tracks } = json;
            this.setState({ tracks });
          })


      fetch(CURRENT_USER, myToken)
      .then(response => response.json())
      .then(json => {
        console.log('Current user App.jsx:', json);
        const user = json.user;
        this.setState({ user });
      })


      })

  }


  render() {

  

    return (
      <div className="App">

        <div className="App-title">
          Breezify MusicApp
                </div>

        <FormGroup>

          <InputGroup>

            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value={this.state.query}
              onChange={event => { this.setState({ query: event.target.value }) }}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search()
              
                }
              }
              }
            />


            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>

          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null
            ?
            <div>
              <Profile
                artist={this.state.artist}
              />
              <Gallery
                tracks={this.state.tracks}
              />


             

         

            </div>
            : <div></div>
        }

      </div>
    );
  }
}

export default App;
