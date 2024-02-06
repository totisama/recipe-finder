export interface Meals {
  meals: Recipe[]
}

export interface Recipe {
  strMeal: string
  strMealThumb: string
  idMeal: string
}

export type StrIngredient = `strIngredient${number}`
type StrMeasure = `strMeasure${number}`

export interface FullRecipe extends Recipe {
  strDrinkAlternate: string
  strCategory: string
  strArea: string
  strInstructions: string
  strTags: string
  strYoutube: string
  strSource: string
  strImageSource: string
  strCreativeCommonsConfirmed: string
  dateModified: string
  [key: StrIngredient]: string
  [key: StrMeasure]: string
}

export interface IngredientImageName {
  image: string
  name: string
}
