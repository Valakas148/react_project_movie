import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import styles from './Header.module.css'
import {useAppDispatch} from "../redux/store";
import {movieAction} from "../redux/slices/MovieSlice";

const HeaderComponent = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleHomeClick = () => {
        dispatch(movieAction.SetCurrentPage(1));
        dispatch(movieAction.SetSelectedGenresID([]));
        dispatch(movieAction.SetSearchQuery(''));
        navigate('/');
    }

    return (
        <div className={styles.HeaderDiv}>
            <div className={styles.H3Div}>
                <h3 className={styles.H3Header}>MOVIE DB</h3>
            </div>
            <div className={styles.ButtonsDiv}>
                <button className={styles.ButtonHome}  onClick={handleHomeClick}>
                    <NavLink to={''} className={styles.NavLink}>Home</NavLink>
                </button>
                <div className={styles.ButtonGroup}>
                    <button className={styles.ButtonMovie}>
                        <NavLink to={'movies'} className={styles.NavLink}>Movies</NavLink>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default HeaderComponent;