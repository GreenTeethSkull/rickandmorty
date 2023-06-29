import SearchBar from "./SearchBar";
import styles from './../styles/nav.module.css'

export default function Nav (props) {
    return (
        <div className={styles.nav}>
            <SearchBar onSearch={props.search} random={props.random}/>
        </div>
    );
}