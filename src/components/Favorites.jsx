import styles from './../styles/cards.module.css';
import { connect } from "react-redux";
import Card from './Card';
import { filterCards, orderCards, reset } from '../redux/action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export function Favorites(props) {

    const dispatch = useDispatch();

    let [aux,setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(aux ? false : true);
    }

    const handleFilter = (e) => {
        if (e.target.value == 'Todos') {
            dispatch(reset());
        } else {
            dispatch(filterCards(e.target.value));
        }
    } 

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Todos">Todos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <div className={styles.cardscontainer}>
                {
                    props.myFavorites.map(elm => (
                        <Card
                            key={elm.id}
                            id={elm.id}
                            name={elm.name}
                            status={elm.status}
                            species={elm.species}
                            gender={elm.gender}
                            origin={elm.origin?.name}
                            image={elm.image}
                        />
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);