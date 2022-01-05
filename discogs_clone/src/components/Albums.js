import React from 'react';
// import axios from 'axios';
import './Albums.css';

class Albums extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            releases: this.releases
        }
    }

    // axios.get('https://api.discogs.com//artists/a82294/releases', {
    //     headers: { 'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9' }
    // })
    // .then(res => {
    //     // const artist = res.data.releases
    // })
    // .catch(err => {
    //     console.log(err)
    // })

    render(){
        return (
            <section className='albums-container'>
                {
                    this.props.releases.map(album => {
                        return (
                            <div className='album-container' key={album.id}>
                                <div className='album-image'>
                                </div>
                                <div className='album-details'>
                                    <p id='artist'>Artist: {album.artist}</p>
                                    <p id='albumTitle'>Album Title: {album.albumTitle}</p>
                                    <p id='year'>Year: {album.year}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        )
    }
}

export default Albums;
