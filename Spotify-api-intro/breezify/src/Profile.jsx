import React, {Component} from 'react';
import './App.css';
import NumberFormat from 'react-number-format';

class Profile extends Component{


    render(){


        //artist object

        let artist = {name: '', followers: {formattedtotal: ''}, images: [{url: ''}], genres: []};
        artist = this.props.artist !== undefined ? this.props.artist : artist;


        return(

            <div className="profile">

            <img 
             alt="Profile"
             className="profile-img"
             src={artist.images[0].url}

             />
            
            <div className="profile-info">
          <div className="profile-name">{artist.name}</div>
          <div className="profile-followers">

            <NumberFormat value ={artist.followers.total} displayType={'text'} thousandSeparator={true} /> followers
          </div>
          <div className="profile-genres">
            {
              artist.genres.map((genre, k) => {
                genre = genre !== artist.genres[artist.genres.length-1]
                              ? ` ${genre},`
                              : ` & ${genre}`;
                return (
                  <span key={k}>{genre}</span>
                )
              })
            }
          </div>
        </div>
          </div>
        )     
        
    }
}

export default Profile;