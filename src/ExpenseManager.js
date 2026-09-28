import "./Category.js"

/**
 * Handling the user's expenses and statistics.
 */
export class ExpenseManager {
    constructor(expenseRecord, categories) {
    this.expenseRecord = expenseRecord
    this.categories = categories
  }

  addExpense(expense){
    if (this.categoryExists(expense)) {
      this.expenseRecord.push(expense)
    } else {
      throw new Error (
      `Category "${expense.category}" does not exist.`
      )
    }
  }

  // JavaScript counts month from 0, meaning that January = 0, December = 11.
  getSumExpensesForMonth(year, month){
    let expensesForMonth = this.getAllExpensesForMonth(year, month)
    return this.getSum(expensesForMonth)
  }

  getSumByCategoryAndMonth(year, month, categoryName){
    const expensesForMonth = this.getAllExpensesForMonth(year, month)
    const expensesInCategory = this.getExpensesSameCategory(expensesForMonth, categoryName)
    return this.getSum(expensesInCategory)
  }

  getExpensesSameCategory(expenses, categoryName){
    let expensesInCategory = []

      for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].category === categoryName) {
          expensesInCategory.push(expenses[i])
        }
      }
    return expensesInCategory
  }

  getSum (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i].amount
    }
    return sum
  }

  getAllExpensesForMonth(year, month){
    let expensesForMonth = []

    for (let i = 0; i < this.expenseRecord.length; i++) {
     const isExpenseInMonth = this.isExpenseInMonth(this.expenseRecord[i].date, year, month)

     if (isExpenseInMonth) {
      expensesForMonth.push(this.expenseRecord[i])
     }
    }

    return expensesForMonth
  }

  isExpenseInMonth(expenseDate, year, month){
    return expenseDate.getFullYear() === year && expenseDate.getMonth() == month
  }

  getTotalBySubCategory(year, month, subCategory){
    const allExpensesForMonth = this.getAllExpensesForMonth(year, month)
    let expensesInCategoryForMonth = []

    for (let i = 0; i < allExpensesForMonth.length; i++) {
      if (allExpensesForMonth[i].subCategory === subCategory) {
      expensesInCategoryForMonth.push(allExpensesForMonth[i])
      }
    }
    return this.getSum(expensesInCategoryForMonth)
  }

  categoryExists(expense){
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].name === expense.category){
        return true
      }
    }
  }
}
