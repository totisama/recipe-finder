import { type FullRecipe, type Meals } from './types'

const API_URL = 'https://www.themealdb.com/api/json/v1/1'

// type StrIngredient = `strIngredient${number}`

// const INGREDIENTS_KEY: StrIngredient[] = [
//   'strIngredient1',
//   'strIngredient2',
//   'strIngredient3',
//   'strIngredient4',
//   'strIngredient5',
//   'strIngredient6',
//   'strIngredient7',
//   'strIngredient8',
//   'strIngredient9',
//   'strIngredient10',
//   'strIngredient11',
//   'strIngredient12',
//   'strIngredient13',
//   'strIngredient14',
//   'strIngredient15',
//   'strIngredient16',
//   'strIngredient17',
//   'strIngredient18',
//   'strIngredient19',
//   'strIngredient20',
// ]

const api = {
  getByArea: async (area: string): Promise<Meals> => {
    const res = await fetch(`${API_URL}/filter.php?a=${area}`)
    const meals = await res.json()

    return meals
  },
  getById: async (id: FullRecipe['idMeal']): Promise<FullRecipe> => {
    const res = await fetch(`${API_URL}/lookup.php?i=${id}`)
    const meal = await res.json()

    if (meal.meals === undefined || meal.meals === null) {
      throw new Error(`meal with id ${id} not found`)
    }

    return meal.meals[0]
  },
  getMainIngredients: async (name: string): Promise<string[]> => {
    const res = await fetch(`${API_URL}/filter.php?i=${name}`)
    const ingredients = await res.json()
    console.log('ingredientssssss', ingredients)

    if (ingredients !== null || ingredients !== undefined) {
      throw new Error(`ingredients for ${name} not found`)
    }

    return ingredients
  },
}

export default api
