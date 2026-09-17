
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

  getAmount(){
    return this.amount
  }
  getDate(){
    return this.date
  }
  getCategory(){
    return this.category
  }
  getSubcategory(){
    return this.subCategory
  }
  getComment(){
    return this.comment
  }
}
