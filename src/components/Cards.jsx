import Card from './Card';

export default function Cards(props) {
   return (
      <div>
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
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            ))
         }
      </div>
   );
}
