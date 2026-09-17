#!/usr/bin/env node

import { mockExpenseHistory, testIfIsExported } from "./mockExpenseHistory.js"
import { Expense } from "./Expense.js"
import { ExpenseManager } from "./ExpenseManager.js"
import "./Categories.js"

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
