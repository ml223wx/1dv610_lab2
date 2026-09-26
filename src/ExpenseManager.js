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
    if (this.isValid(expense)) {
      this.expenseHistory.push(expense)
    } else {
      console.log("isValid() is false in Category.js - implement error handling")
    }
  }

  removeExpense(){

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
      if (expensesForMonth[i].category === category) {
      expensesInCategory.push(expensesForMonth[i])
      }
    }
    return this.getSum(expensesInCategory)
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
        if (expensesDate.getFullYear() === year & expensesDate.getMonth() === month) {
      expensesForMonth.push(expense)
      }
    }
    return expensesForMonth
  }

  getTotalBySubcategory(year, month, subCategory){
    const expensesForMonth = this.getAllExpensesForMonth(year, month)
    let expensesInCategory = []
    for (let i = 0; i < expensesForMonth.length; i++) {
      const expense = expensesForMonth[i]
      if (expense.subCategory === subCategory) {
      expensesInCategory.push(expense)
      }
    }
    return this.getSum(expensesInCategory)
    // let sum = 0

    // for (let i = 0; i < expensesInCategory.length; i++) {
    //   sum = sum + expensesInCategory[i].amount
    // }
    // return sum

  }

  isValid(expense){
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].name === expense.category){
        return true
      }
    }
  }
}
