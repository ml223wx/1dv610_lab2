#!/usr/bin/env node

import { mockExpenseHistory, testIfIsExported } from "./mockExpenseHistory.js"
import { Expense } from "./Expense.js"
import { ExpenseManager } from "./ExpenseManager.js"
import "./Categories.js"
import "./standardCategories.js"



/**
 * Execution entry point.
 */
function main() {
  console.log('🚀 Application is up and running!')
  // console.log(mockExpenseHistory)

  try {
    const expenseManager = new ExpenseManager()
    const correctlyTestExpense = new Expense(100, new Date (2026,7,15), "Food", "Snacks", "New correctly entered test expense 1")

    expenseManager.getSumExpensesForMonth(2026, 7)
    expenseManager.getTotalByCategory(2026, 7, "Mat")
    expenseManager.addExpense(correctlyTestExpense)
    expenseManager.addExpense(faultyTestExpense2)


  } catch (error) {
    console.error('An unexpected error occurred during execution:', error.message)
    process.exitCode = 1
  }
}

main()
