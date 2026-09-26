export class CategoryManager {

  constructor(categories) {
    this.categories = categories

  }

  addCategory(newCategory){
    if (!this.alreadyExists(newCategory.name)){
    this.categories.push(newCategory)
    }
  }

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
