import { Category } from "./Category.js"
import { standardCategories } from "./standardCategories.js"

export class CategoryManager {

  constructor() {
    this.categories = standardCategories

  }

  addCategory(newCategory){
    if (!this.alreadyExists(newCategory.name)){
    this.categories.push(newCategory)
    }
  }

  // addSubCategory(categoryName, newSubcategory){
  //   for (let i = 0; i < categories.length; i++) {
  //     for (let j = 0; j < categories.subCategories.length; j++) {
  //     }
  //   }
  // }

  addSubCategory (mainCategoryName, newSubcategory) {
    if (this.alreadyExists(mainCategoryName)) {
      const category = this.findCategoryObject(mainCategoryName)
      category.subCategories.push(newSubcategory)
    }

  }

  alreadyExists(categoryName) {
    for (let i = 0; i < this.categories.length; i++) {
      if (categoryName === this.categories[i].name) {
        return true
      }
    }
    return false
  }

  findCategoryObject(categoryName){
    for (let i = 0; i < this.categories.length; i++){
      if (this.categories[i].name === categoryName) {
        return this.categories[i]
      }
    }
  }


}
