// src/App.jsx
import { useState } from 'react'
import './App.css'
const App = () => {

const [team, setTeam] = useState([]) //will fill in the selected team members into the array

const [money, setMoney] = useState(100) //start off with $100. When we purchase a fighter, the use state changes

const handleAddFighter = (zombieFighter) => { //pass zombie fighter as the parameter in order to tell handleAddFighter to take the selected zombieFighter data
if (money > zombieFighter.price) {
  setMoney(money - zombieFighter.price)
  setTotalAgility(totalAgility + zombieFighter.agility)
  setTotalStrength(totalStrength + zombieFighter.strength)  
  setTeam([...team, zombieFighter])
} else {
  console.log('not enough money')
}


    // money > zombieFighter.price //if you can afford the fighter
    //   ? (setMoney(money - zombieFighter.price),//calls setMoney as the setter function to manipulate the state variable 'money'
    //   setTotalStrength(totalStrength + zombieFighter.strength),//calls setTotalStrength as the setter function to manipulate the total strength of the team
    //   setTotalAgility(totalAgility + zombieFighter.agility),//same as above but for agility
    //   setTeam([...team, zombieFighter]))//put in brackets to denote an array and not an object
    //   : console.log('not enough money') //use a ternary statement to alter multiple parts of the game based on how much money you have to pay the zombieFighters
  
}

const handleRemoveFighter = (zombieFighter) => {
  if (team.some((fighter) => fighter.name === zombieFighter.name))
    setTeam(team.filter((fighter) => fighter.name !== zombieFighter.name))

  setMoney(money + zombieFighter.price)
  setTotalStrength(totalStrength - zombieFighter.strength)
  setTotalAgility(totalAgility - zombieFighter.agility)

}

const [totalStrength, setTotalStrength] = useState(0)


const [totalAgility, setTotalAgility] = useState(0)

const [zombieFighters, setZombieFighters] = useState([
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
])
  return (
<>
<h2>Money: {money}</h2>
    <h2>Team Strength: {totalStrength}</h2>
    <h2>Team Agility: {totalAgility}</h2>
<div className='teamContainer'>
     {team.length === 0 ? <p>Pick team members</p> : (team.map((zombieFighter, index) => (
  <ul key={index}>
    <li>{zombieFighter.name}</li>
    <li>{zombieFighter.price}</li>
    <li>{zombieFighter.strength}</li>
    <li>{zombieFighter.agility}</li>
    <img src={zombieFighter.img}></img>
  </ul>
)))}
</div>
<hr />
    <div className='fightersContainer'>
   
      {zombieFighters.map((zombieFighter, index) => 
      <ul key={ index }>
      <li>Name: { zombieFighter.name }</li>
      <li>Price: ${zombieFighter.price}</li>
      <li>Strength: {zombieFighter.strength}</li>
      <li>Agility: {zombieFighter.agility}</li>
      <img src={zombieFighter.img}/>
      <button onClick={() => handleAddFighter(zombieFighter)}>Add Fighter!</button>
      <button onClick={() => handleRemoveFighter(zombieFighter)}>Remove Fighter</button>
      </ul>
      )}
      </div>

        
</>  
) }

export default App

