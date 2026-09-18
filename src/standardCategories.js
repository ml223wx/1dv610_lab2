import { Category } from "./Category.js"

export const communication = new Category("Communication", ["Post", "Telephone"])
export const food = new Category("Food", ["Groceries", "Restaurant", "Snacks"])
export const health = new Category("Health & Beauty", ["Beauty", "Healthcare"])
export const hobby = new Category("Hobby", ["Crafts", "Vacation", "Events", "Subscriptions"])
export const household = new Category("Household", ["Consumables", "Decor"])
export const shopping = new Category("Shopping", ["Clothes & accessories", "Stationaries"])
export const transportation = new Category("Transportation", ["Long distance", "Public transport"])

export const standardCategories = [communication, food, health, hobby, household, shopping, transportation]
