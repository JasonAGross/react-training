import { Food } from '../App'

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