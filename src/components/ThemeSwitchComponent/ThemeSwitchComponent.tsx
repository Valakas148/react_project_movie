import React, {useEffect, useState} from 'react';
import styles from "../Header.module.css";

const ThemeSwitchComponent = () => {

    const [theme, setTheme] = useState('light');
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <div>
            <button onClick={toggleTheme} className={styles.ThemeSwitcher}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
};

export default ThemeSwitchComponent;