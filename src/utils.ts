import { API_URL_IMAGES, INGREDIENTS_KEY } from './const'
import { type IngredientImageName, type FullRecipe } from './types'

function formatIngredient(ingredient: string) {
  let ingredientFormatted = ingredient.replace(' ', '-')
  ingredientFormatted = ingredientFormatted
    .toLowerCase()
    .replace(/\b\w/g, (s) => s.toUpperCase())

  return ingredientFormatted
}

export function getMainIngredients(recipe: FullRecipe): IngredientImageName[] {
  const ingredients = []

  for (const key of INGREDIENTS_KEY) {
    const ingredientKey = recipe[key]

    if (
      ingredients.filter((ingredient) => ingredient.name === ingredientKey)
        .length > 0
    ) {
      continue
    }

    if (ingredientKey !== '') {
      const ingredientImage = `${API_URL_IMAGES}/${formatIngredient(ingredientKey)}.png`

      ingredients.push({
        image: ingredientImage,
        name: ingredientKey,
        measure: recipe[key],
      })
    }
  }

  return ingredients
}

export function formatInstructions(instructions: string) {
  const instructionsFormatted = instructions.split('.')

  return instructionsFormatted
}
