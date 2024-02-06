import { API_URL_JSON } from './const'
import { type FullRecipe, type Meals } from './types'

const api = {
  getByArea: async (area: string): Promise<Meals> => {
    const res = await fetch(`${API_URL_JSON}/filter.php?a=${area}`)
    const meals = await res.json()

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
