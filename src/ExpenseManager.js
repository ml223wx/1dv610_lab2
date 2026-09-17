/**
 * Handling the user's expenses and statistics.
 */
export class ExpenseManager {
    constructor(expenseHistory) {
    this.expenseHistory = expenseHistory
  }

  addExpense(expense){
    this.expenseHistory.push(expense)
  }

  removeExpense(){

  }

  getExpense(){

  }

  // JavaScript counts month from 0, meaning that January = 0, December = 11.
  getTotalExpensesForMonth(year, month){
    let expensesForMonth = []
    for (let i = 0; i < this.expenseHistory.length; i++) {
      const expense = this.expenseHistory[i]
      const expensesDate = expense.getDate()
      if (expensesDate.getFullYear() === year & expensesDate.getMonth() === month) {
      expensesForMonth.push(expense)
      }
    }
    let sum
    for (let i = 0; i < expensesForMonth.length; i++) {
      sum = sum + expensesForMonth[i].amount
    }
    return sum
  }

  getTotalByCategory(year, month, category){

  }

  getTotalBySubcategory(year, month, subCategory){

  }
}
