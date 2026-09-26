import { JSONstandardCategories } from "./standardCategories.js"
import { Category } from "./Category.js"

// From chatGPT:
export const categories = JSONstandardCategories.map(
  category => new Category(category.name, category.subCategories)
)
