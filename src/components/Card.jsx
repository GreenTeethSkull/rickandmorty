import styles from './../styles/card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/action';
import { useState, useEffect } from 'react';

export function Card(props) {

   let [isFav, setIsFav] = useState(false);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav({
            id:props.id,
            name:props.name,
            status:props.status,
            species:props.species,
            gender:props.gender,
            origin:props.origin,
            image:props.image
         });
      }
   }

   function handleClose() {
      props.onClose(props.id);
   }

   let myFavorites = props.myFavorites
   let id = props.id;

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>
         {
            isFav ? (
               <button className={styles.btnheart} onClick={handleFavorite}>💖</button>
            ) : (
               <button className={styles.btnheart} onClick={handleFavorite}>🤍</button>
            )
         }
         {
            props.onClose ? (<button className={styles.btn} onClick={handleClose}>X</button>) : null
         }
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

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addFav: (per) => { dispatch(addFav(per)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);