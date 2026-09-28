### Tabellreflektion för namngivning
|Namn|Förklaring|Reflektion och regler från Clean Code|
|---|---|---|
|categoryExists(expense)|Returnerar ett boolskt värde om en kategori användaren försöker lägga till redan finns.|*Use pronouncable names, Don't be cute, Use searchable names* När funktionen används i koden står det t.ex. "if (this.categoryExists(expense)){...}" vilket förklarar sig självt i och med att koden nästan står skriven i naturligt, mänskligt språk.|
|findCategoryObject(categoryName)|*Use pronouncable names, Don't be cute, Use searchable names* Hittar ett Category-objekt med en sträng som parameter|Jag har döpt funktionen till findCategoryObject trots att man inte skulle lägga till "noise", i det här fallet att skriva att det är ett objekt som returneras. Jag behövde tydliggöra att det var ett Category-objekt som returnerades och inte namnet på en kategori, därför lät jag det stå kvar.|
|getSumByCategoryAndMonth()|*Use pronouncable names, Don't be cute, Use searchable names, Pick one word per concept* Returnerar summan från en kategori utgifter för en angiven månad.|Namnet tangerar att vara för långt men jag anser att den håller sig på rätt sida gränsen. Avvägningen är ju att göra funktionsnamnen så självförklarande som möjligt utan att de blir för långa. Jag anser att namnet förklarar exakt vad den gör.|
|getSumExpensesForMonth()|*Use pronouncable names, Don't be cute, Use searchable names*  Returnerar summan av alla utgifter för en angiven månad|Jag har konsekvent använt mig av verbet "get" och inte blandat. I boken togs det upp som exempel att man inte ska blanda ord som "get", "fetch", "retrieve" osv i sinda funktionsnamn om man inte har en mycket bra anledning till det.|
|||Vad jag inte har döpt mina variabler och funktioner till: - Namn som bara består av ett tecken (förutom i loopar, vilket boken "godkände") - Icke-uttalningsbara namn (enligt boken ska alla namn vara "pronouncable" och mina namn består av riktiga ord) - Jag har hårdkodat så lite som möjligt. Det enda stället är i app.js, vilken fungerar som en demonstration av koden, där man anger från vilken fil historik och standardkategorier ska läsas. Detta innebär att allt är sökbart, boken anger "MAX_CLASSES_PER_STUDENT" som mycket mer sökbart än siffran 7, och detta åstadkommer man delvis genom rimliga variabelnamn istället för att hårdkoda. - Bokstaven O, eller L i gemen, eftersom att de kan förvirras med siffrorna 1 och 0. |

### Kapitelreflektion kap 2


### Tabellreflektion för funktioner/metoder

| Metodnamn | Länk eller kod | Antal rader (ej ws) | Reflektion |
|---|---|---:|---|
| `getExpensesSameCategory()` | Se kod nedan | 9 | *Small!, One level of abstraction per function, Use descriptive names*Kod innanför if/else/while statements bör vara en rad lång, helst ett funktionsanrop |
| `addExpense()` | Se kod nedan | 9 |*Do one thing, One level of abstraction per function, Use descriptive names*  |
| `getExpensesSameCategory()` | Se kod nedan | 9 | *Small!, One level of abstraction per function, Use descriptive names*|
| `getAllExpensesForMonth()` | Se kod nedan | 9 | Hade kunnat göra en extra genomsökningsfunktion. Har dessvärre gjort en *triadic function*. Skulle jag ha skapat ett objekt som endast visade sig vara true eller false, enligt boken? |
| `categoryExists()` | Se kod nedan | 7 | *Small!, One level of abstraction per function, Use descriptive names*|

#### `getExpensesSameCategory()`

```js
getExpensesSameCategory(expenses, categoryName, propertyName) {
  let expensesInCategory = []

  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i][propertyName] === categoryName) {
      expensesInCategory.push(expenses[i])
    }
  }

  return expensesInCategory
}
```

#### `addExpense()`

```js
addExpense(expense) {
  if (this.categoryExists(expense)) {
    this.expenseRecord.push(expense)
  } else {
    throw new Error(
      `Category "${expense.category}" does not exist.`
    )
  }
}
```

#### `getExpensesSameCategory()`

```js
getExpensesSameCategory(expenses, categoryName, propertyName) {
  let expensesInCategory = []

  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i][propertyName] === categoryName) {
      expensesInCategory.push(expenses[i])
    }
  }

  return expensesInCategory
}
```

#### `getAllExpensesForMonth()`

```js
getAllExpensesForMonth(year, month) {
  let expensesForMonth = []

  for (let i = 0; i < this.expenseRecord.length; i++) {
    if (this.isExpenseInMonth(this.expenseRecord[i].date, year, month)) {
      expensesForMonth.push(this.expenseRecord[i])
    }
  }

  return expensesForMonth
}
```

#### `categoryExists()`

```js
categoryExists(expense) {
  for (let i = 0; i < this.categories.length; i++) {
    if (this.categories[i].name === expense.category) {
      return true
    }
  }
}
```

### Kapitelreflektion kap 3

Min största fundering gällande kapitel 3 är regeln/riktlinjen om att man ska ha så få parametrar som möjligt när man skriver funktioner.

Kan inte göra niladic functions eftersom jag i varje funktion jag har skrivit har behövt skicka med information om vilken kategori jag söker efter, eller vilken månad. Detta går inte att lägga direkt i klassen. Om man vill göra sådana funktioner måste det vara sådant som redan är sparat i klassen, som är statiskt. Alternativt att man gör en funktion per månad, typ searchAllExpensesForMarch() men det känns extremt opraktiskt.
Output arguments finns inte på samma sätt i javascript utan det skulle i så fall vara som att ändra på ett objekt. Enligt chatGPT.

Vad jag inte har gjort: Skickat in en boolean i en funktion. Istället if(boolean){nyFunktion()}

Det blir tydligt att de längsta funktionerna jag har skrivit är loopar.


### Reflektion över egen kodkvalitet
