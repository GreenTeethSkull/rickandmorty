import styles from './../styles/searchbar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {

   let [id, setId] = useState('');

   const handleChange = (e) => {
      const value = e.target.value; 
      setId(value);
   }

   const handleClick = () => {
      props.onSearch(id);
      setId('');
   }

   return (
      <div className={styles.container}>
         <input className={styles.input} placeholder='Search by id ...' type='search' onChange={handleChange} value={id}/>
         <button className={styles.button} onClick={handleClick}>Agregar</button>
         <button className={styles.addrandom} onClick={props.random}>Add Random</button>
      </div>
   );
}
