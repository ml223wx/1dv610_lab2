/**
 * A category of purchases.
 */
export class Category {
  constructor(name, subCategories) {
    this.name = name
    this.subCategories = subCategories
  }
  addSubcategory(subCategoryName){
    this.subCategories.push(subCategoryName)
  }

  getSubcategories() {
    return this.subCategories
  }

  hasSubcategory(subcategoryName){
    for (i = 0; i < this.subCategories.length; i++) {
      return this.subCategories[i] === subcategoryName
    }
  }
}
