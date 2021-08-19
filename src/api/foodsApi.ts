import { Food, NewFood } from '../FoodForm'

export async function getFoods() {
  const resp = await fetch('http://localhost:3001/foods')
  if (!resp.ok) {
    throw new Error('call to foods failed')
  }
  return resp.json() as Promise<Food[]>
}

export async function deleteFood(id: number) {
  const resp = await fetch('http://localhost:3001/foods/' + id, {
    method: "DELETE",
  })
  if (!resp.ok) throw new Error('delete failed')
  return resp.json()
}

export async function addFood(food: NewFood) {
  const resp = await fetch('http://localhost:3001/foods', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(food)
  })
  if (!resp.ok) throw new Error('add failed')
  return resp.json()
}