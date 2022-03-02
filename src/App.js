import logo from './logo.svg';
import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import SearchBar from "./component/SearchBar.jsx"

const foodCopy = foods.slice()

function App() {

  const [foodList, setFood] = useState(foodCopy)

  function addFood(newFood){
    setFood([...foodList, newFood])
  }

function checkCoincidences(search){
  let searchResult = foodList.filter((food)=>{
    return food.name.toLowerCase().includes(search.toLowerCase())
  })
  setFood(searchResult)
}

  return (
    <div className="App">
      <h1>Food List</h1>
    <SearchBar checkCoincidences={checkCoincidences}/>

    {foodList.map((food)=>(
      <FoodBox food={food} />
      ))
      }
    <AddFoodForm addFood={addFood}/> 
    </div>
  );
}

export default App;
