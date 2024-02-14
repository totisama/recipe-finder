import { type StrIngredient } from './types'

const API_URL = 'https://www.themealdb.com'
export const API_URL_JSON = `${API_URL}/api/json/v1/1`
export const API_URL_IMAGES = `${API_URL}/images/ingredients`

export const INGREDIENTS_KEY: StrIngredient[] = [
  'strIngredient1',
  'strIngredient2',
  'strIngredient3',
  'strIngredient4',
  'strIngredient5',
  'strIngredient6',
  'strIngredient7',
  'strIngredient8',
  'strIngredient9',
  'strIngredient10',
  'strIngredient11',
  'strIngredient12',
  'strIngredient13',
  'strIngredient14',
  'strIngredient15',
  'strIngredient16',
  'strIngredient17',
  'strIngredient18',
  'strIngredient19',
  'strIngredient20',
]

export const AREAS = [
  'American',
  'British',
  'Canadian',
  'Chinese',
  'Croatian',
  'Dutch',
  'Egyptian',
  'Filipino',
  'French',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Jamaican',
  'Japanese',
  'Kenyan',
  'Malaysian',
  'Mexican',
  'Moroccan',
  'Polish',
  'Portuguese',
  'Russian',
  'Spanish',
  'Thai',
  'Tunisian',
  'Turkish',
  'Unknown',
  'Vietnamese',
]

export const MOCK_MEALS = {
  meals: [
    {
      idMeal: '52768',
      strMeal: 'Apple Frangipan Tart',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
    },
    {
      idMeal: '52893',
      strMeal: 'Apple & Blackberry Crumble',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
    },
    {
      idMeal: '53049',
      strMeal: 'Apam balik',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg',
    },
    {
      idMeal: '53050',
      strMeal: 'Ayam Percik',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
    },
  ],
}

export const LETTERS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]
