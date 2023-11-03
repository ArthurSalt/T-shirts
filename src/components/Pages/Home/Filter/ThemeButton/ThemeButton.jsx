import React, {useEffect, useState} from 'react'

import './ThemeButton.css';

const ThemeButton = () => {
    const [modal, setModal] = useState(false)
    const [activeTheme, setActiveTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'default')

    const themesList = ['default' , 'dark']

    const onSelectedTheme = (el) => {
        localStorage.setItem('theme', el)
        setActiveTheme(el)
        setBodyAttr(el)
        setModal(false)
    }

    const setBodyAttr = (el) => {
        document.querySelector('body').setAttribute('data-theme', el)
    }

    useEffect(() => setBodyAttr(activeTheme), [])

    return (
    <div className="theme_wrapper">
        <div className="theme">
            <p>Theme: <span onClick={() => setModal(true)} className='theme_type'>{activeTheme}</span></p>

            {modal && (
                <ul className="theme_popup">
                    {themesList.map(el => (
                        <li key={el} onClick={() => onSelectedTheme(el)}>{el}</li>
                    ))}
                </ul>
            )}
        </div>
    </div>
    )
};

export default ThemeButton;