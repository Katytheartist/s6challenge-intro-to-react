import React, {useState, useEffect} from 'react'



function Character(props) { // ❗ Add the props
  const {name} = props
  // ❗ Create a state to hold whether the homeworld is rendering or not
   const [selected, setSelected] = useState(false);

   const togglePlanet = () =>{
    setSelected(!selected)
   }
  // const selectedPlanet = id =>{
  //   setPlanets(id)
  // }
  // const notSelectedPl = () => {
  //   setPlanets(null)
  // }

  // ❗ Create a "toggle" click handler to show or remove the homeworld
// const toggle = evt => setSelected(!selected)

  return (
    <div className = 'character-card'>
      {/* Use the same markup with the same attributes as in the mock */
       //<div className = 'character-card'>
       <h3 className = 'character-name'>
         {props.name}
       </h3>
//</div>
      }
    </div>
  )
}

export default Character
