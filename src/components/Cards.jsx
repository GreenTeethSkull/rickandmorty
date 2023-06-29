import Card from './Card';
import styles from './../styles/cards.module.css';

export default function Cards(props) {
   return (
      <div className={styles.cardscontainer}>
         {
            props.characters.map(elm => (
               <Card
                  key={elm.id}
                  id={elm.id}
                  name={elm.name}
                  status={elm.status}
                  species={elm.species}
                  gender={elm.gender}
                  origin={elm.origin.name}
                  image={elm.image}
                  onClose={props.onClose}
               />
            ))
         }
      </div>
   );
}
