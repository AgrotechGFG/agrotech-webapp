import React from 'react'
import './button.css'
function Button({ type }) {

    // function changebackground(e) {
    //     e.target.style.background = 'black'
    // }
    return (
        <>
            <div >
                <button className='button'>{type}</button>
            </div>
        </>
    )
}

export default Button