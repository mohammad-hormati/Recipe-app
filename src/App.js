import React , {useState} from 'react'
import './App.css';
import Form from './Form';
import Recipes from './Recipes';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('chicken');

  return (
    <div className="App">
      <h1 className="app-title">RECIPE APP</h1>
      <Form value={value} setValue={setValue} setQuery={setQuery} />
      <Recipes query={query} setRecipes={setRecipes} recipes={recipes} />
    </div>
  );
}

export default App;
