import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { getFoods, deleteFood } from "./api/foodsApi";
import { Food } from './FoodForm';
import 'react-toastify/dist/ReactToastify.css';

export function App () {

  const [foods, setFoods] = useState<Food[]>([])

  useEffect(() => {
    async function callGetFoods() {
      const allFood = await getFoods()
      setFoods(allFood)
    }
    callGetFoods()
  }, [])

  return (
    <>
      <ToastContainer />
      <h1>Pantry Manager</h1>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Reorder Point</th>
            <th>Food Type</th>
          </tr>
        </thead>
        <tbody>
          { foods.map((f) => (
            <tr key={f.id}>
              <td><button 
                onClick={ async () => {
                  await deleteFood(f.id)
                  const newFoods = foods.filter((food) => food.id !== f.id)
                  setFoods(newFoods)
                }}>
                X
              </button></td>
              <td>{f.name}</td>
              <td>{f.qty}</td>
              <td>{f.minQty}</td>
              <td>{f.type}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </>
  )
}