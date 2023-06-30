import styles from './../styles/card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {

   function handleClose() {
      props.onClose(props.id);
   }

   let id = props.id;

   return (
      <div className={styles.container}>
         <button className={styles.btn} onClick={handleClose}>X</button>
         <img src={props.image} className={styles.img} alt='image' />
         <Link className={styles.links} to={`/detail/${id}`}>
            <h2 className={styles.name}>{props.name}</h2>
         </Link>
         <h2 className={styles.description}>{props.status}</h2>
         <h2 className={styles.description}>{props.species}</h2>
         <h2 className={styles.description}>{props.gender}</h2>
         <h2 className={`${styles.description}`}>{props.origin}</h2>
      </div>
   );
}
