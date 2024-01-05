import React, {useState, useEffect} from 'react'

function Character({name, selectedPlanet}) { // ❗ Add the props

  // ❗ Create a state to hold whether the homeworld is rendering or not
    const [selected, setSelected] = useState(false);

   const togglePlanet = () =>{
    setSelected(!selected)
   }

  // ❗ Create a "toggle" click handler to show or remove the homeworld
// const toggle = evt => setSelected(!selected)

  return (
    <div className = 'character-card' onClick ={togglePlanet}>
      {/* Use the same markup with the same attributes as in the mock */
       <>
      <h3 className = 'character-name'>
         {name}
       </h3>
       {selected && <p>Planet: 
          <span className = 'character-planet'> {selectedPlanet}</span>
          </p>
       }
       </>

      }
    </div>
  )
}

export default Character
