import "./Category.js"

/**
 * Handling the user's expenses and statistics.
 */
export class ExpenseManager {
    constructor(expenseHistory, categories) {
    this.expenseHistory = expenseHistory
    this.categories = categories
  }

  addExpense(expense){
    if (this.categoryExists(expense)) {
      this.expenseHistory.push(expense)
    } else {
      console.log("categoryExists() is false in Category.js - implement error handling")
    }
  }

  // JavaScript counts month from 0, meaning that January = 0, December = 11.
  getSumExpensesForMonth(year, month){
    let expensesForMonth = this.getAllExpensesForMonth(year, month)
    return this.getSum(expensesForMonth)
  }

  getSumByCategoryAndMonth(year, month, category){
    const expensesForMonth = this.getAllExpensesForMonth(year, month)
    let expensesInCategory = []

    for (let i = 0; i < expensesForMonth.length; i++) {
      if (this.isCategoryInArraySameCategory(expensesForMonth[i].category, category)) {
      expensesInCategory.push(expensesForMonth[i])
      }
    }
    return this.getSum(expensesInCategory)
  }

  isCategoryInArraySameCategory(categoryInArray, categoryToCompare){
    return categoryInArray === categoryToCompare
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
    for (let i = 0; i < this.expenseHistory.length; i++) {
      const expense = this.expenseHistory[i]
      const expensesDate = expense.date

      const expenseYear = expensesDate.getFullYear()
      const expenseMonth = expensesDate.getMonth()
        if (this.isExpensesDateYearSameYear(expenseYear, year) && this.isExpensesMonthSameMonth(expenseMonth, month)) {
      expensesForMonth.push(expense)
      }
    }
    return expensesForMonth
  }

  isExpensesDateYearSameYear (expensesFullYear, year) {
    return expensesFullYear ===  year
  }

  isExpensesMonthSameMonth(expensesMonth, month) {
    return expensesMonth === month
  }

  getTotalBySubcategory(year, month, subCategory){
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
