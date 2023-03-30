import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './dropmenu.css'
import { AboutItem } from './NavItems'

function DropMenu({ type }) {
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <ul className={dropdown ? 'class-About-ul-clicked' : 'class-About-ul'} onClick={() => { setDropdown(!dropdown) }}>
                {
                    AboutItem.map((item) => {
                        return (
                            <li key={item.id} className={item.cName}>
                                <Link to={item.path} style={{ textDecoration: 'none', color: 'white' }} onClick={() => { setDropdown(false) }}>{item.tittle}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default DropMenu


