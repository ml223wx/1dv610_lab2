#!/usr/bin/env node

import { Expense } from "./Expense.js"
import { ExpenseManager } from "./ExpenseManager.js"
import { Category } from "./Category.js"
import { CategoryManager} from "./CategoryManager.js"
import { JSONExpensesHistoryConverter } from "./JSONExpensesHistoryConverter.js"
import { categories } from "./JSONcategoriesConverter.js"
import { JSONstandardCategories} from "./standardCategories.js"
import { JSONMockExpenseHistory } from "./mockExpenseHistory.js"

/**
 * Execution entry point.
 */
function main() {
  console.log('🚀 Application is up and running!')

  try {
    const expensesHistoryObject = new JSONExpensesHistoryConverter(JSONMockExpenseHistory)
    const expensesHistory = expensesHistoryObject.getExpensesHistory()
    
    const expenseManager = new ExpenseManager(expensesHistory, categories)
    const categoryManager = new CategoryManager(categories)
    const newTestExpense = new Expense(100, new Date (2026,8,15), "Food", "Snacks", "New test expense")

    // Adds a new expense:
    expenseManager.addExpense(newTestExpense)

    console.log('Gets the sum of all expenses for September:')
    console.log(expenseManager.getSumExpensesForMonth(2026, 8))

    console.log('Gets all "Food" category expenses for September: ')
    console.log(expenseManager.getTotalByCategory(2026, 8, 'Food'))

    // Adds a category:
    // Each category has to have at least 1 sub category
    const newCategory =  new Category("Health & Beauty", ["Beauty", "Healthcare"])
    categoryManager.addCategory(newCategory)

    // Adds a sub category:
    categoryManager.addSubCategory("Health & Beauty", "Medication")

    console.log('All categories:')
    console.log(categoryManager.categories)

  } catch (error) {
    console.error('An unexpected error occurred during execution:', error.message)
    process.exitCode = 1
  }
}

main()
