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
  getSumExpensesForMonth(year, month){
    let expensesForMonth = this.getExpensesByMonth(year, month)
    let sum = 0
    for (let i = 0; i < expensesForMonth.length; i++) {
      sum = sum + expensesForMonth[i].amount
    }
    return sum
  }

  getTotalByCategory(year, month, category){
    const expensesForMonth = this.getExpensesByMonth(year, month)
    let expensesInCategory = []
    for (let i = 0; i < expensesForMonth.length; i++) {
      const expense = expensesForMonth[i]
      if (expense.category === category) {
      expensesInCategory.push(expense)
      }
    }

    let sum = 0

    for (let i = 0; i < expensesInCategory.length; i++) {
      sum = sum + expensesInCategory[i].amount
    }
    console.log("returnerar sum:")
    console.log(sum)
    return sum
  }

  getExpensesByMonth(year, month){
        let expensesForMonth = []
    for (let i = 0; i < this.expenseHistory.length; i++) {
      const expense = this.expenseHistory[i]
      const expensesDate = expense.getDate()
      if (expensesDate.getFullYear() === year & expensesDate.getMonth() === month) {
      expensesForMonth.push(expense)
      }
    }
    console.log("returnerar expensesForMonth:")
    console.log(expensesForMonth)
    return expensesForMonth
  }

  getTotalBySubcategory(year, month, subCategory){
    const expensesForMonth = this.getExpensesByMonth(year, month)
    let expensesInCategory = []
    for (let i = 0; i < expensesForMonth.length; i++) {
      const expense = expensesForMonth[i]
      if (expense.subCategory === subCategory) {
      expensesInCategory.push(expense)
      }
    }

    let sum = 0

    for (let i = 0; i < expensesInCategory.length; i++) {
      sum = sum + expensesInCategory[i].amount
    }
    console.log("returnerar sum:")
    console.log(sum)
    return sum

  }
}
