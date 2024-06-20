import React from 'react';
import {Link, NavLink} from "react-router-dom";
import styles from './Header.module.css'

const HeaderComponent = () => {
    return (
        <div className={styles.HeaderDiv}>
            <div className={styles.H3Div}>
                <h3 className={styles.H3Header}>MOVIE DB</h3>
            </div>
            <div className={styles.ButtonsDiv}>
                <button className={styles.ButtonHome}>
                    <NavLink to={''} className={styles.NavLink}>Home</NavLink>
                </button>
                <div className={styles.ButtonGroup}>
                    <button className={styles.ButtonMovie}>
                        <NavLink to={'movies'} className={styles.NavLink}>Movies</NavLink>
                    </button>
                    <button className={styles.ButtonSeries}>
                        <NavLink to={''} className={styles.NavLink}>TV-Series</NavLink>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default HeaderComponent;