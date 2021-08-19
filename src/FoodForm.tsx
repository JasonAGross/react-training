import React, { useState } from 'react';
import { addFood } from "./api/foodsApi";
import { Input } from "./common/input";
import { Select } from './common/select';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

export type Food = {
  id: number;
  name: string;
  qty: number;
  minQty: number;
  type: string;
}

export type NewFood = {
  name: string;
  qty: number;
  minQty: number;
  type: string;
}

const emptyFood: NewFood = {
  name: '',
  qty: 0,
  minQty: 0,
  type: '',
}

const pantryTypes = [
  {
    label: 'Vegetable',
    value: 'vegetable',
  },
  {
    label: 'Grain',
    value: 'grain',
  },
  {
    label: 'Fruit',
    value: 'fruit',
  },
]

export function FoodForm () {

  const [newFood, setNewFood] = useState<NewFood>(emptyFood)
  const history = useHistory();

  function onFormChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { value, id } = event.target
    setNewFood({
      ...newFood,
      [id]: value,
    })
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await addFood(newFood)
      toast.success('New food added!')
      history.push('/') // go home
    } catch (err) {
      toast.error('failed to added new food')
    }
  }

  return (
    <>
      <h1>Pantry Manager</h1>

      <form onSubmit={handleSubmit}>
        <Input onChange={onFormChange} id="name" label="Name" value={newFood.name} />
        <Input type="number" onChange={onFormChange} id="qty" label="Quantity" value={newFood.qty.toString()} />
        <Input type="number" onChange={onFormChange} id="minQty" label="Minimum Quantity" value={newFood.minQty.toString()} />
        <Select onChange={onFormChange} id="type" label="Type" placeholderText="Select Type" options={pantryTypes} value={newFood.type} />
        <input className="btn btn-primary" type="submit" value="Add Food" />
      </form>
    </>
  )
}