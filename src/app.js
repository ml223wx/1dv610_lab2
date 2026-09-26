#!/usr/bin/env node

// import { mockExpenseHistory } from "./mockExpenseHistory.js"
import { Expense } from "./Expense.js"
import { ExpenseManager } from "./ExpenseManager.js"
import {Category} from "./Category.js"
import { CategoryManager} from "./CategoryManager.js"
import { mockExpenseHistory } from "./JSONExpensesHistoryConverter.js"

/**
 * Execution entry point.
 */
function main() {
  console.log('🚀 Application is up and running!')

  try {
    const expenseManager = new ExpenseManager(mockExpenseHistory)
    const categoryManager = new CategoryManager()
    const newTestExpense = new Expense(100, new Date (2026,8,15), "Food", "Snacks", "New test expense")

    // // Adds a new expense:
    expenseManager.addExpense(newTestExpense)

    console.log('Gets the sum of all expenses for September:')
    console.log(expenseManager.getSumExpensesForMonth(2026, 8))

    console.log('Gets all "Food" category expenses for September: ')
    console.log(expenseManager.getTotalByCategory(2026, 8, 'Food'))

    // Adds a category:
    // Has to have at least 1 sub category
    const newCategory =  new Category("Health & Beauty", ["Beauty", "Healthcare"])
    categoryManager.addCategory(newCategory)

    // Adds a sub category:
    // TO-DO ...
    // Medication

    // console.log('Prints all categories:')
    // TO-DO ...

    // console.log('Prints all sub categories:')
    // TO-DO ...


  } catch (error) {
    console.error('An unexpected error occurred during execution:', error.message)
    process.exitCode = 1
  }
}

main()
