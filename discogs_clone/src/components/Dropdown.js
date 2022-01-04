import React from 'react';
import data from '../data';
import Albums from './Albums';
import './Dropdown.css';

class Dropdown extends React.Component {
    state = {
        releases: data
    }

    showOptions = () => {
        document.getElementById('dd-content').classList.toggle('hide-btn');
    }

    // window.addEventListener('click', function(e) {
    //     let dropdowns = document.getElementById('dd-content')
    //     if(!e.target.dropdowns){
    //         dropdowns.classList.toggle('hide-btn');
    //     }
    // })

    sortByArtist = (e) => {
        e.preventDefault();
        this.setState({
            releases: data.sort(function(a,b) {
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
        })
        document.getElementById('dd-content').classList.toggle('hide-btn');
    }

    sortByAlbumTitle = (e) => {
        e.preventDefault();
        this.setState({
            releases: data.sort(function(a,b) {
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
        })
        document.getElementById('dd-content').classList.toggle('hide-btn');
    }

    sortByYear = (e) => {
        e.preventDefault();
        this.setState({
            releases: data.sort(function(a,b) {
                if(a.year > b.year){
                    return 1;
                } else if(a.year < b.year){
                    return -1;
                } else {
                    return 0;
                }
            })
        })
        document.getElementById('dd-content').classList.toggle('hide-btn');
    }

    render(){
        return (
        <div>
            <div className='dropdown-container'>
                <button className='dropdown-btn' onClick={this.showOptions}>Sort By
                    <img className='down-arrow' alt='down arrow' src='https://cdn-icons-png.flaticon.com/512/60/60781.png'/>
                </button>
                <div className='dropdown-content hide-btn' id='dd-content'>
                    <a 
                        href='#' 
                        onClick={this.sortByArtist}
                    >Artist</a>
                    <a 
                        href='#'
                        onClick={this.sortByAlbumTitle}
                    >Album Title</a>
                    <a 
                        href='#'
                        onClick={this.sortByYear}
                    >Year</a>
                </div>
            </div>
            <Albums releases={this.state.releases}/>
        </div>
        )
    }
}

export default Dropdown;
