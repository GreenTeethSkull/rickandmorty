
import { useState } from "react";
import validate from "../validation";
import styles from '../styles/form.module.css';

export default function Form (props) {

    let [userData, setUserData] = useState({
        email:'',
        password:''
    });

    let [errors, setErrors] = useState({});

    let handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value,
        });

        setErrors(
            validate({
                ...userData,
                [e.target.name] : e.target.value
            })
        )
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <label>EMAIL</label>
                <br/>
                <input type="email" name="email" placeholder="EMAIL..." value={userData.email} onChange={handleChange} />
                <br/>
                <p>{errors.email}</p>
                <br/>
                <label>PASSWORD</label>
                <br/>
                <input type="password" name="password" placeholder="PASSWORD..." value={userData.password} onChange={handleChange} />
                <br/>
                <p>{errors.password}</p>
                <br/>
                <input type="submit" value='SUBMIT'/>
            </form>
        </div>
    );
}