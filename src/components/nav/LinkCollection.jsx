import React from 'react';
import LinkComponent from "./LinkComponent";

function LinkCollection({ linkList }) {
    return (
        <ul className='nav-bar'>
            { <LinkComponent link={linkList}/> }
        </ul>
    )
}

export default LinkComponent

