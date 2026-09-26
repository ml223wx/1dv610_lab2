import { Expense } from "./Expense.js"

export const mockExpenseHistory =
  JSON.stringify([
    new Expense (
      100,
      new Date(2026-7-14),
      'Food',
      'Snacks',
      'ice cream'
  ),
    new Expense (
      100,
      new Date(2026-7-14),
      'Food',
      'Groceries',
      ''
  ),
    new Expense (
      100,
      new Date(2026-7-15),
      'Food',
      'Restaurant',
      'burger'
  ),
    new Expense (
      100,
      new Date(2026-8-16),
      'Food',
      'Snacks',
      'candy'
  ),
    new Expense (
      100,
      new Date(2026-8-16),
      'Hobby',
      'Crafts',
      'fabric'
  ),
    new Expense (
      100,
      new Date(2026-8-16),
      'Household',
      'Consumables',
      'dish soap'
  ),
    new Expense (
      100,
      new Date(2026-8-18),
      'Food',
      'Restaurant',
      'vietnamese'
  ),
    new Expense (
      100,
      new Date(2026-8-18),
      'Transportation',
      'Public transport',
      ''
  ),
    new Expense (
      100,
      new Date(2026-8-20),
      'Hobby',
      'Crafts',
      'sewing thread'
  ),
    new Expense (
      100,
      new Date(2026-8-21),
      'Shopping',
      'Stationaries',
      'notebook'
  )
  ]
)
