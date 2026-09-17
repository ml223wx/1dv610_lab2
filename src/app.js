#!/usr/bin/env node

import { mockExpenseHistory, testIfIsExported } from "./mockExpenseHistory.js"
import { Expense } from "./Expense.js"



// /**
//  * The user's expense representing a purchase.
//  */
// export class Expense {
//   constructor(amount, date, category, subCategory, comment) {
//     this.amount = amount
//     this.date = date
//     this.category = category
//     this.subCategory = subCategory
//     this.comment = comment
//   }

//   getAmount(){
//     return this.amount
//   }
//   getDate(){
//     return this.date
//   }
//   getCategory(){
//     return this.category
//   }
//   getSubcategory(){
//     return this.subCategory
//   }
//   getComment(){
//     return this.comment
//   }
// }

/**
 * Handling the user's expenses and statistics.
 */
export class ExpenseManager {

  addExpense(){

  }

  removeExpense(){

  }

  getExpense(){

  }

  getExpensesForMonth(year, month){

  }
  getTotalByCategory(year, month, category){

  }
  getTotalBySubcategory(year, month, subCategory){

  }
}

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

/**
 * A sub-category of purchases.
 */
export class Subcategory {
  constructor(name) {
    this.name = name
  }
}

/**
 * Execution entry point.
 */
function main() {
  console.log('🚀 Application is up and running!')
  console.log(mockExpenseHistory)

  try {
    // const expenseManager = new ExpenseManager()
    // expenseManager.addExpense(testExpense1)
    // expenseManager.addExpense(testExpense2)


  } catch (error) {
    console.error('An unexpected error occurred during execution:', error.message)
    process.exitCode = 1
  }
}

main()
