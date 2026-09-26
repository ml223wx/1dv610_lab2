import { JSONMockExpenseHistory } from "./mockExpenseHistory.js"
import { Expense } from "./Expense.js"

export const mockExpenseHistory = JSONMockExpenseHistory.map(
  expense => new Expense(
    expense.amount,
    new Date(expense.date),
    expense.category,
    expense.subcategory,
    expense.description
  )
)
