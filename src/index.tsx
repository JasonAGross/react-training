import { render } from 'react-dom'
import { App } from './App'
import { BrowserRouter, Route } from "react-router-dom";
import { About } from './About';
import { Nav } from './TheNavigation';
import { FoodForm } from './FoodForm';

render(
  <BrowserRouter>
    <Nav />
    <Route path="/" exact><App /></Route>
    <Route path="/food"><FoodForm /></Route>
    <Route path="/about"><About /></Route>
  </BrowserRouter>, 
  document.getElementById('root')
)