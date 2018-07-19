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
        tracks: []

      
    }


  }





  search() {

    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    var accessToken = 'BQDuPqnQz8BeN5IS2KlB2fAkGZfGsqsAg_9ZWucwhugSSVAztjj6s2Qyq7Bx6ZW-tKZN_nVyYnqGT7ogLA2CgX1MNbqU9l5nXSCOoWWxWMRdXqGmLprcghLzlHiXDAbwnKIWOILxrTNgtna5nJXFK3K8I3DxFTrPaBmNkvRdmZ-Mkzh66d4GHig&refresh_token=AQBa3oCHRL3ss3W1IkNDz1GTS5by5opr6GwsGgCFn48XsmKXRxrFfVcsiluJctP_ddawQFae3SoKUw3JozpG3fDFBhUeIH6uV1Xv8wKRhz-Ctu4_ak8FVs7_opzhy8FN-b4'

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
