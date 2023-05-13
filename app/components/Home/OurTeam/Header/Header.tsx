import React from 'react'
import Link from 'next/link'
import './Header.css'

const Header = () => {
    return (
        <div className='out-team-header'>
            <p className='section-title'>Екип</p>
            <p className='out-team-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <div className='our-team-button'>
                <Link href="/team">
                    Вижте всички
                </Link>
            </div>
        </div>
    )
}

export default Header