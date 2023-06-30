import SearchBar from "./SearchBar";
import styles from './../styles/nav.module.css'
import { NavLink } from "react-router-dom";

export default function Nav (props) {
    return (
        <div className={styles.nav}>
            <NavLink to='/home' className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.normal}`)}>Home</NavLink>
            <NavLink to='/About' className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.normal}`)}>About</NavLink>
            <SearchBar onSearch={props.search} random={props.random}/>
        </div>
    );
}