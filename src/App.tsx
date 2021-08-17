import { useEffect, useState } from 'react';
import { getFoods, deleteFood } from "./api/foodsApi";

type Food = {
  id: number;
  name: string;
  qty: number;
  minQty: number;
  type: string;
}

export function App () {

  const [foods, setFoods] = useState<Food[]>([])

  useEffect(() => {
    async function callGetFoods() {
      const resp = await getFoods()
      if (!resp.ok) {
        throw new Error('call to foods failed')
      }
      const data = await resp.json()
      setFoods(data)
    }
    callGetFoods()
  }, [])

  return (
    <>
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