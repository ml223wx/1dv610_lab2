import { Category } from "./Category.js"
import { standardCategories } from "./standardCategories.js"

export class CategoryManager {

  addSubCategory(newSubcategory){
    //     console.log("standardCategories")
    // console.log(standardCategories)
    for (let i = 0; i < standardCategories.length; i++) {
                  console.log("standardCategories.subCategories[i]")
            console.log(standardCategories[i])
          for (let j = 0; j < standardCategories.subCategories.length; j++) {
            console.log("standardCategories.subCategories[j]")
            console.log(standardCategories.subCategories[j])
    }
    }
  }
}
