#!/usr/bin/env node



/**
 * The user's expense representing a purchase.
 */
export class Expense {
  constructor(amount, date, comment, category) {
    this.amount = amount
    this.date = date
    this.comment = comment
    this.category = category
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
    return this.subCategoryName
  }
  getComment(){
    return this.comment
  }
}

/**
 * Handling the user's expenses and statistics.
 */
export class ExpenseManager {
    constructor(expense, expenseHistory) {
    this.expense = expense,
    this.expenseHistory = expenseHistory}

  addExpense(){

  }
  removeExpense(){

  }
  getExpense(){

  }
  getExpenses(){

  }
  getExpensesForMonth(year, month){

  }
  getTotalByCategory(year, month){

  }
  getTotalBySubcategory(year, month){

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

  }

  getSubcategories() {
    return this.subcategories
  }

  hasSubcategory(subcategoryName){

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
  console.log('🚀 CLI Application is up and running!')
  console.log("Edit src/app.js and run 'npm start' to see your changes.")

  try {
    const testExpense1 = new Expense(100, 2026-9-15, "Mat", "Snacks", "godis")
    const testExpense2 = new Expense (50, 2026-9-15, "Mat","Livsmedel" ,"kaffe")
    const expenseManager = new ExpenseManager()
    expenseManager.addExpense(testExpense1)
    expenseManager.addExpense(testExpense2)


  } catch (error) {
    console.error('An unexpected error occurred during execution:', error.message)
    process.exitCode = 1
  }
}

main()
