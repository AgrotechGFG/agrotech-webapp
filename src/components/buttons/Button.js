import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'
function Button({ type }) {


    return (
        <>
            <div >
                <Link to='./buynow'>
                    <button className='button'>{type}</button>
                </Link>
            </div>
        </>
    )
}

export default Button


