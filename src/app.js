#!/usr/bin/env node

import { mockExpenseHistory, testIfIsExported } from "./mockExpenseHistory.js"
import { Expense } from "./Expense.js"
import { ExpenseManager } from "./ExpenseManager.js"
import "./Category.js"
import { CategoryManager} from "./CategoryManager.js"

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
  // console.log(mockExpenseHistory)

  try {
    const expenseManager = new ExpenseManager(mockExpenseHistory)
    const categoryManager = new CategoryManager()
    const newTestExpense1 = new Expense(100, new Date (2026,7,15), "Food", "Snacks", "New test expense")
    const newTestExpense2 = new Expense(100, new Date (2026,6,15), "FelFood", "Snacks", "New test expense")
    // expenseManager.addExpense(newTestExpense1)
    // console.log('mockExpenseHistory efter push:')
    // console.log(mockExpenseHistory)
    // expenseManager.addExpense(testExpense2)
    // expenseManager.getSumExpensesForMonth(2026, 7)
    // expenseManager.getTotalByCategory(2026, 7, "Mat")
    // expenseManager.addExpense(newTestExpense1)
    // expenseManager.addExpense(newTestExpense2)
    categoryManager.addSubCategory("hello")



  } catch (error) {
    console.error('An unexpected error occurred during execution:', error.message)
    process.exitCode = 1
  }
}

main()
