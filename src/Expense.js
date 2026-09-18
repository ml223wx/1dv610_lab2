
/**
 * The user's expense representing a purchase.
 */
export class Expense {
  constructor(amount, date, category, subCategory, comment) {
    this.amount = amount
    this.date = date
    this.category = category
    this.subCategory = subCategory
    this.comment = comment
  }

  // Potentially unnecessary since the user can get these attributes directly from the object:

  // getAmount(){
  //   return this.amount
  // }
  // getDate(){
  //   return this.date
  // }
  // getCategory(){
  //   return this.category
  // }
  // getSubcategory(){
  //   return this.subCategory
  // }
  // getComment(){
  //   return this.comment
  // }
}
