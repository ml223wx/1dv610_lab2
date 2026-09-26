import { Category } from "./Category.js"
import { standardCategories } from "./standardCategories.js"

export class CategoryManager {

      constructor() {
        console.log("standardsCategories:")
        console.log(standardCategories)
    this.categories = standardCategories
  }

  addCategory(newCategory){
    this.doesNotAlreadyExist(newCategory)
  }

  addSubCategory(newSubcategory){
    for (let i = 0; i < categories.length; i++) {
      for (let j = 0; j < categories.subCategories.length; j++) {
      }
    }
  }

  doesNotAlreadyExist(newCategory) {
    for (let i = 0; i < this.categories.length; i++) {
      console.log(newCategory.name)
      console.log(this.categories[i].name)
      console.log('---')
      if (newCategory.name === this.categories[i].name) {
        console.log('Finns redan - felhantera')
      }
    }
  }
}
