import React from 'react';
import './NavButtons.css';

const button_titles = [
    { title: 'Explore' },
    { title: 'Marketplace' },
    { title: 'Community' },
]

const NavButtons = () => {
    return(
        <div>
        {
            button_titles.map(button => {
                return (
                    <button className='explore nav-button'>{button.title}
                        <img className='down-arrow' alt='down arrow' src='https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png'/>
                    </button>
                )
            })
        }
        </div>
    )
}

export default NavButtons;
