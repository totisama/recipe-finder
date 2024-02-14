import { API_URL_IMAGES, INGREDIENTS_KEY } from './const'
import {
  type IngredientImageName,
  type FullRecipe,
  type StrMeasure,
} from './types'

export function getMainIngredients(recipe: FullRecipe): IngredientImageName[] {
  const ingredients = []

  for (let index = 0; index < INGREDIENTS_KEY.length; index++) {
    const key = INGREDIENTS_KEY[index]
    const ingredientKey = recipe[key]

    if (ingredientKey !== '' && ingredientKey !== null) {
      const ingredientImage = `${API_URL_IMAGES}/${ingredientKey}.png`
      const measure = recipe[`strMeasure${index + 1}`] as StrMeasure

      ingredients.push({
        image: ingredientImage,
        name: ingredientKey,
        measure: measure + ' ',
      })
    }
  }

  return ingredients
}

export function formatInstructions(instructions: string) {
  const instructionsFormatted = instructions.split('.')

  return instructionsFormatted
}

export function formatIngredientName(name: string) {
  return name.replace(' ', '_')
}

export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}
