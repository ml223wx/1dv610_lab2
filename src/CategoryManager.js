import { Category } from "./Category.js"
import { standardCategories } from "./standardCategories.js"

export class CategoryManager {

  constructor() {
    this.categories = standardCategories

  }

  addCategory(newCategory){
    if (!this.doesAlreadyExist(newCategory)){
    this.categories.push(newCategory)
    }
  }

  addSubCategory(newSubcategory){
    for (let i = 0; i < categories.length; i++) {
      for (let j = 0; j < categories.subCategories.length; j++) {
      }
    }
  }

  doesAlreadyExist(newCategory) {
    for (let i = 0; i < this.categories.length; i++) {
      if (newCategory.name === this.categories[i].name) {
        console.log('Finns redan - felhantera')
      }
    }
  }
}
