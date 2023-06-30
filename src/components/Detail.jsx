import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './../styles/detail.module.css';

export default function Detail() {

    const { id } = useParams();
    let [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div className={styles.container}>
            <h1>CHARACTER DETAIL</h1>
            <h1>NAME : {character?.name}</h1>
            <h1>STATUS : {character?.status}</h1>
            <h1>SPECIE : {character?.species}</h1>
            <h1>GENDER : {character?.gender}</h1>
            <h1>ORIGIN : {character?.origin?.name}</h1>
            <img src={character.image} alt="card1" />
        </div>
    );
}