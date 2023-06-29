import styles from './../styles/card.module.css';

export default function Card(props) {

   function handleClose() {
      props.onClose(props.id);
   }

   return (
      <div className={styles.container}>
         <button className={styles.btn} onClick={handleClose}>X</button>
         <img src={props.image} className={styles.img} alt='image' />
         <h2 className={styles.name}>{props.name}</h2>
         <h2 className={styles.description}>{props.status}</h2>
         <h2 className={styles.description}>{props.species}</h2>
         <h2 className={styles.description}>{props.gender}</h2>
         <h2 className={`${styles.description}`}>{props.origin}</h2>
      </div>
   );
}
