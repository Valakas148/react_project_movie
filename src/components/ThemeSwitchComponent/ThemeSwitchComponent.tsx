import React, {useEffect, useState} from 'react';
import styles from './ThemeSwitch.module.css';

const ThemeSwitchComponent = () => {

    const [theme, setTheme] = useState('light');
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <div className={styles.themeSwitchContainer}>
            <input
                type="checkbox"
                id="themeSwitch"
                name="theme-switch"
                className={styles.themeSwitch__input}
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <label htmlFor="themeSwitch" className={styles.themeSwitch__label}>
                <span></span>
            </label>
        </div>
    );
};

export default ThemeSwitchComponent;