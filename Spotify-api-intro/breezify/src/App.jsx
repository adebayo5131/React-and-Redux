import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon,Button} from 'react-bootstrap';

import Profile from './Profile'


//Spotify API
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor(props){
    super(props);

     
      this.state = {
        
        nowPlaying: { name: 'Not Checked',
         albumArt: '',
         query: '',
         artist: ''  // my response.
        
        }
      }


  }





  search() {

    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    var accessToken = 'BQBNeF-h6QHmDSFpyoRYqYtT6RpRa-2Ze2yzA4aIYUGe9Q4voxj5TeAVWf6CHAB_J8TRqgSzq4zaK_Jt0SOtwumuXgpEEQPx5HaIaG27KIEVk8y3Y2s359cfT-XZxQHbQ-k39zkOmfV4rxDGUnnOkYH9XWgQi7PntzqOLnV00tdMppYeObD2ux8&refresh_token=AQDzHQE0RvBDAwCN_4b-sjNksn3glwloMPfIpv5r2abMcXYNVVnnjLRKi3DZyZC_uT9RjxMm8t6YNIgO_vmRwELByC3RmvlpbDRQcFUy6I0ZBt--i_londwxBv-5KMQkjQM'

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
                     onChange ={event => {this.setState({query: event.target.value})}}
                     onKeyPress ={event =>
                        {
                            if(event.key ==='Enter')
                            {
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

                  <Profile

                  artist ={this.state.artist}
                  
                  />

                <div className="Gallery">
                    Gallery
                </div>

    </div>
    );
  }
}

export default App;
