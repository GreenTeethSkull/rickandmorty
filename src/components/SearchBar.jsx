import styles from './../styles/searchbar.module.css';

export default function SearchBar(props) {
   return (
      <div className={styles.container}>
         <input className={styles.input} placeholder='Search by id ...' type='search' />
         <button className={styles.button} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
