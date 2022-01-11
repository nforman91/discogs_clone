import React from 'react';
import './NavButtons.css';

const button_titles = [
    { id: 1, title: 'Explore' },
    { id: 2, title: 'Marketplace' },
    { id: 3, title: 'Community' },
]

const NavButtons = () => {
    return(
        <div>
        {
            button_titles.map(button => {
                return (
                        <button className='nav-button' key={button.id}>{button.title}
                            <img className='down-arrow' alt='down arrow' src='https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png'/>
                        </button>
                )
            })
        }
        </div>
    )
}

export default NavButtons;
