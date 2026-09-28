import { describe, it, expect } from "vitest"
import { Expense } from "../src/Expense.js"
import { ExpenseManager } from "../src/ExpenseManager.js"

// From chatGPT:

describe("ExpenseManager", () => {

    it("adds an expense", () => {
        const expenseManager = new ExpenseManager([],   [{
    "name": "Food",
    "subCategories": ["Groceries", "Restaurant", "Snacks"]
  }])

        const expense = new Expense(100, new Date (2026,8,15), "Food", "Snacks", "New test expense")

        expenseManager.addExpense(expense)

        // expect(expenseManager.getSumExpensesForMonth(2026, 7)).toContain(expense)
        expect(expenseManager.getSumExpensesForMonth(2026, 8)).toBe(100)
    })


    it("calculates total for a category for a specific month", () => {
        const expense1 = new Expense(
            500,
            new Date(2026, 7, 3),
            "Food",
            "Groceries",
            ""
        )

        const expense2 = new Expense(
            200,
            new Date(2026, 7, 14),
            "Food",
            "Restaurant",
            "Burger"
        )

        const expense3 = new Expense(
            100,
            new Date(2026, 7, 19),
            "Food",
            "Snacks",
            "Chips"
        )

        const manager = new ExpenseManager([
            expense1,
            expense2,
            expense3
        ])

        const result = manager.getSumByCategoryAndMonth(
            2026,
            7,
            "Food"
        )

        expect(result).toBe(800)
    })


    // it("returns expenses for a specific month", () => {
    //     const augustExpense = new Expense(
    //         100,
    //         new Date(2026, 7, 14),
    //         "Food",
    //         "Snacks",
    //         "Ice cream"
    //     )

    //     const septemberExpense = new Expense(
    //         200,
    //         new Date(2026, 8, 14),
    //         "Food",
    //         "Groceries",
    //         "Food"
    //     )

    //     const manager = new ExpenseManager([
    //         augustExpense,
    //         septemberExpense
    //     ])

    //     const result = manager.getExpensesByMonth(2026, 7)

    //     expect(result).toHaveLength(1)
    //     expect(result[0]).toBe(augustExpense)
    // })

})
