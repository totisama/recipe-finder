import { API_URL_JSON } from './const'
import {
  type Ingredients,
  type FullRecipe,
  type Meals,
  type Areas,
  type Categories,
} from './types'

const api = {
  getByArea: async (area: string): Promise<Meals> => {
    const res = await fetch(`${API_URL_JSON}/filter.php?a=${area}`)
    const meals = await res.json()

    if (meals.meals === undefined || meals.meals === null) {
      throw new Error(`Meals with area "${area}" not found`)
    }

    return meals
  },
  getByCategory: async (category: string): Promise<Meals> => {
    const res = await fetch(`${API_URL_JSON}/filter.php?c=${category}`)
    const meals = await res.json()

    if (meals.meals === undefined || meals.meals === null) {
      throw new Error(`Meals with category "${category}" not found`)
    }

    return meals
  },
  getByLetter: async (letter: string): Promise<Meals> => {
    const res = await fetch(`${API_URL_JSON}/search.php?f=${letter}`)
    const meals = await res.json()

    if (meals.meals === undefined || meals.meals === null) {
      throw new Error(`Meals with letter "${letter}" not found`)
    }

    return meals
  },
  getByIngredient: async (ingredient: string): Promise<Meals> => {
    const res = await fetch(`${API_URL_JSON}/filter.php?i=${ingredient}`)
    const meals = await res.json()

    if (meals.meals === undefined || meals.meals === null) {
      throw new Error(`Meals with ingredient "${ingredient}" not found`)
    }

    return meals
  },
  getById: async (id: FullRecipe['idMeal']): Promise<FullRecipe> => {
    const res = await fetch(`${API_URL_JSON}/lookup.php?i=${id}`)
    const meal = await res.json()

    if (meal.meals === undefined || meal.meals === null) {
      throw new Error(`Meal not found`)
    }

    return meal.meals[0]
  },
  getIngredients: async (): Promise<string[]> => {
    const res = await fetch(`${API_URL_JSON}/list.php?i=list`)
    const json = (await res.json()) as Ingredients

    if (json.meals === undefined || json.meals === null) {
      throw new Error(`Ingredients not found`)
    }

    const ingredients = json.meals.map((ingredient) => ingredient.strIngredient)

    return ingredients
  },
  getAreas: async (): Promise<string[]> => {
    const res = await fetch(`${API_URL_JSON}/list.php?a=list`)
    const json = (await res.json()) as Areas

    if (json.meals === undefined || json.meals === null) {
      throw new Error(`Ingredients not found`)
    }

    const areas = json.meals.map((area) => area.strArea)

    return areas
  },
  getCategories: async (): Promise<string[]> => {
    const res = await fetch(`${API_URL_JSON}/list.php?a=list`)
    const json = (await res.json()) as Categories

    if (json.meals === undefined || json.meals === null) {
      throw new Error(`Ingredients not found`)
    }

    const categories = json.meals.map((category) => category.strCategory)

    return categories
  },
}

export default api
