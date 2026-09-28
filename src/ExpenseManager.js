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
     const isSameDate = this.isSameDate(this.expenseHistory[i].date, year, month)
     if (isSameDate) {
      expensesForMonth.push(this.expenseHistory[i])
     }
    }

    return expensesForMonth
  }

  isSameDate(expenseDate, year, month){
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
