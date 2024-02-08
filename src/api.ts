import { API_URL_JSON } from './const'
import { type FullRecipe, type Meals } from './types'

const api = {
  getByArea: async (area: string): Promise<Meals> => {
    const res = await fetch(`${API_URL_JSON}/filter.php?a=${area}`)
    const meals = await res.json()

    if (meals.meals === undefined || meals.meals === null) {
      throw new Error(`meals with area ${area} not found`)
    }

    return meals
  },
  getByLetter: async (letter: string): Promise<Meals> => {
    const res = await fetch(`${API_URL_JSON}/search.php?f=${letter}`)
    const meals = await res.json()

    if (meals.meals === undefined || meals.meals === null) {
      throw new Error(`meals with letter ${letter} not found`)
    }

    return meals
  },
  getById: async (id: FullRecipe['idMeal']): Promise<FullRecipe> => {
    const res = await fetch(`${API_URL_JSON}/lookup.php?i=${id}`)
    const meal = await res.json()

    if (meal.meals === undefined || meal.meals === null) {
      throw new Error(`meal with id ${id} not found`)
    }

    return meal.meals[0]
  },
}

export default api
