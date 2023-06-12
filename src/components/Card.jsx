import './../components.css';

export default function Card(props) {
   return (
      <div>
         <button className='btn' onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='image' />
      </div>
   );
}
