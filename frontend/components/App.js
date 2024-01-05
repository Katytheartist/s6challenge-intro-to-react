import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API

  const [people, setPeople] = useState([]);


  console.log(people)
  // ❗ Create effects to fetch the data and put it in state

  useEffect(()=>{
    axios.get(urlPeople)
    .then(res =>{
      axios.get(urlPlanets)
      .then(res2 =>{
        const mergedInfo = res.data.map(person =>{
          return {
            ...person,
            homeworld: res2.data.find(homeworld => homeworld.id === person.homeworld)
          }
        })
        setPeople(mergedInfo)
      })
    })
  }, [])
  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
      people.map(person =>{
        return <Character name = {person.name} key = {person.id} selectedPlanet ={person.homeworld.name} />
      })
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
