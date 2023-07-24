import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import axios from 'axios';


import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';
import Favorites from './components/Favorites';

function App() {

   let navigate = useNavigate();

   let [characters, setCharacters] = useState([]);
   let [access, setAccess] = useState(false);

   let email = 'angel@henry.com';
   let password = 'angel1234';

   // function login (userData) {

   //    if ((userData.email===email)&&(userData.password===password)) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      //    const { access } = data;
      //    setAccess(data);
      //    access && navigate('/home');
      // });

      try {
         const backlog = await axios(URL + `?email=${email}&password=${password}`);

         const { data } = backlog;
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         window.alert(error.message);
      }
   }

   function logout() {
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   // const onSearch = (id) => {
   //    const example = {
   //       id: 1,
   //       name: 'Rick Sanchez',
   //       status: 'Alive',
   //       species: 'Human',
   //       gender: 'Male',
   //       origin: {
   //          name: 'Earth (C-137)',
   //          url: `https://rickandmortyapi.com/api/location/${id}`,
   //       },
   //       image: `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`,
   //    };
   //    setCharacters([...characters,example]);
   // }

   async function onSearch(id) {
      // axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      //    if (data.name) {
      //       const exist = characters.some((elm) => elm.id === data.id)

      //       if (exist) {
      //          window.alert('¡Ya existe un personaje con ese id!');
      //       } else {
      //          setCharacters((oldChars) => [...oldChars, data]);
      //       }

      //    } else {
      //       window.alert('¡No hay personajes con este ID!');
      //    }
      // }).catch((error) => {
      //    window.alert('¡No hay personajes con este ID!');
      // });

      try {
         const backreq = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         const { data } = backreq;
         if (data.name) {
            const exist = characters.some((elm) => elm.id === data.id)

            if (exist) {
               window.alert('¡Ya existe un personaje con ese id!');
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }

         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         window.alert(error.message);
      }
   }

   function onClose(id) {
      const filtered = characters.filter((elm) => elm.id !== id);
      setCharacters(filtered);
   }

   async function onRandomAdd() {
      let id = Math.floor((Math.random() * 825) + 1);
      // axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      //    if (data.name) {
      //       const exist = characters.some((elm) => elm.id === data.id)

      //       if (exist) {
      //          onRandomAdd();
      //       } else {
      //          setCharacters((oldChars) => [...oldChars, data]);
      //       }

      //    } else {
      //       onRandomAdd();
      //    }
      // }).catch((error) => {
      //    onRandomAdd();
      // });
      
      try {
         const backran = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         const { data } = backran;
         if (data.name) {
            const exist = characters.some((elm) => elm.id === data.id)

            if (exist) {
               onRandomAdd();
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }

         } else {
            onRandomAdd();
         }
      } catch (err) {
         onRandomAdd();
      }

   }

   return (
      <div className='App'>
         <Nav search={onSearch} logout={logout} random={onRandomAdd} />
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}

         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
