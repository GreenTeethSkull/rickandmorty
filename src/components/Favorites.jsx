import styles from './../styles/cards.module.css';
import { connect } from "react-redux";
import Card from './Card';

export function Favorites(props) {
    return (
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
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);