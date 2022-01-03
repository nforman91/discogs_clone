import React, { useState } from 'react';
import data from '../data';
import './Dropdown.css';

const Dropdown = () => {
    const [releases, setReleases] = useState(data)

    const showOptions = () => {
        document.getElementById('dd-content').classList.toggle('hide-btn');
    }

    // window.addEventListener('click', function(e) {
    //     let dropdowns = document.getElementById('dd-content')
    //     if(!e.target.dropdowns){
    //         dropdowns.classList.toggle('hide-btn');
    //     }
    // })

    const sortByArtist = (e) => {
        e.preventDefault();
        setReleases(
            releases.sort(function(a,b) {
                let aArtist = a.artist.toLowerCase();
                let bArtist = b.artist.toLowerCase();
                if(aArtist > bArtist){
                    return 1;
                } else if(aArtist < bArtist){
                    return -1;
                } else {
                    return 0;
                }
            })
        )
        document.getElementById('dd-content').classList.toggle('hide-btn');
        console.log('ARTIST SORT', releases)
    }

    const sortByAlbumTitle = (e) => {
        e.preventDefault();
        releases.sort(function(a,b) {
            let aAlbumTitle = a.albumTitle.toLowerCase();
            let bAlbumTitle = b.albumTitle.toLowerCase();
            if(aAlbumTitle > bAlbumTitle){
                return 1;
            } else if(aAlbumTitle < bAlbumTitle){
                return -1;
            } else {
                return 0;
            }
        })
        document.getElementById('dd-content').classList.toggle('hide-btn');
        console.log('ALBUM TITLE SORT', releases)
    }

    const sortByYear = (e) => {
        e.preventDefault();
        releases.sort(function(a,b) {
            if(a.year > b.year){
                return 1;
            } else if(a.year < b.year){
                return -1;
            } else {
                return 0;
            }
        })
        document.getElementById('dd-content').classList.toggle('hide-btn');
        console.log('YEAR SORT', releases)
    }

        return (
        <div className='dropdown-container'>
            <button className='dropdown-btn' onClick={showOptions}>Sort By
                <img className='down-arrow' alt='down arrow' src='https://cdn-icons-png.flaticon.com/512/60/60781.png'/>
            </button>
            <div className='dropdown-content hide-btn' id='dd-content'>
                <a 
                    href='#' 
                    onClick={sortByArtist}
                >Artist</a>
                <a 
                    href='#'
                    onClick={sortByAlbumTitle}
                >Album Title</a>
                <a 
                    href='#'
                    onClick={sortByYear}
                >Year</a>
            </div>
        </div>
        )
}

export default Dropdown;
