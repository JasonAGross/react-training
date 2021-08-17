export async function getFoods() {
  return fetch('http://localhost:3001/foods')
}

export async function deleteFood(id: number) {
  const resp = await fetch('http://localhost:3001/foods/' + id, {
    method: "DELETE",
  })
  if (!resp.ok) throw new Error('delete failed')
  return resp.json()
}