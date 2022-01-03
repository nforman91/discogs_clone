import React from 'react';
// import axios from 'axios';
import './Albums.css';
import data from '../data';
import releases from './Dropdown';

const Albums = (props) => {
    const { releases } = props;

    // axios.get('https://api.discogs.com//artists/a82294/releases', {
    //     headers: { 'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9' }
    // })
    // .then(res => {
    //     // const artist = res.data.releases
    // })
    // .catch(err => {
    //     console.log(err)
    // })

    return (
        <section className='albums-container'>
            {
                data.map(album => {
                    return (
                        <div className='album-container'>
                            <div className='album'>
                            </div>
                            <div key={album.id} className='album-details'>
                                <p>{`Artist: ${album.artist}`}</p>
                                <p>{`Album Title: ${album.albumTitle}`}</p>
                                <p>{`Year: ${album.year}`}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Albums;
