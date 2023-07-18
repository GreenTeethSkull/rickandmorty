import SearchBar from "./SearchBar";
import styles from '../styles/nav.module.css'
import { NavLink, useLocation } from "react-router-dom";

export default function Nav (props) {

    const location = useLocation();

    if (location.pathname !== '/') {
        return (
            <div className={styles.nav}>
                <NavLink to='/home' className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.normal}`)}>Home</NavLink>
                <NavLink to='/About' className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.normal}`)}>About</NavLink>
                <NavLink to='/favorites' className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.normal}`)}>Favorites</NavLink>
                <button className={styles.logout} onClick={props.logout} >LogOut</button>
                <SearchBar onSearch={props.search} random={props.random}/>
            </div>
        );
    }

    return null;
}