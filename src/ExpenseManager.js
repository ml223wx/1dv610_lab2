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

  getTotalExpensesForMonth(year, month){

  }

  getTotalByCategory(year, month, category){

  }

  getTotalBySubcategory(year, month, subCategory){

  }
}
