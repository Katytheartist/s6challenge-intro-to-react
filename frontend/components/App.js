import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState(null);
  const [both, setBoth] = useState([]);
  
  // ❗ Create effects to fetch the data and put it in state

  useEffect(()=>{
    axios.get(urlPeople)
    .then(resA =>{
      console.log(resA.data)
      setPeople(resA.data)
      return axios.get(urlPlanets)
    })
    .then(resB =>{
      console.log(resB.data)
      setPlanets(resB.data)
    })
    .catch(err=>console.log(err))
  }, [])

 useEffect(() =>{
    const merged = people.map(person =>{
      const homeworld = planets.find(planet => planet.id === person.homeworld)
      return {
        ...person,
        //??
      }
      setBoth(merged);
    })
     
    console.log()
  }, [])
  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
      people.map(person =>{
        return <Character name = {person.name} key = {person.id} both = {both} />
      })
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
