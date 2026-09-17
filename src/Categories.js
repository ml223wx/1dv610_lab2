/**
 * A category of purchases.
 */
export class Category {
  constructor(name) {
    this.name = name
    this.subcategories = []
  }
  addSubcategory(subCategoryName){
    this.subcategories.push(subCategoryName)
  }

  getSubcategories() {
    return this.subcategories
  }

  hasSubcategory(subcategoryName){
    for (i = 0; i < this.subcategories.length; i++) {
      console.log("this.subcategories[i]")
      console.log(this.subcategories[i])
      console.log("subcategoryName")
      console.log(subcategoryName)
      console.log("true or false:")
      console.log(this.subcategories[i] === subcategoryName)
      return this.subcategories[i] === subcategoryName
    }
  }
}
