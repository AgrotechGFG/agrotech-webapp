import React from 'react'
import './button.css'
function Button({ type }) {

 
    return (
        <>
            <div >
                <button className='button'>{type}</button>
            </div>
        </>
    )
}

export default Button
