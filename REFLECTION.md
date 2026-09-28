### Tabellreflektion för namngivning
|Namn|Förklaring|Reflektion och regler från Clean Code|
|---|---|---|
|categoryExists(expense)|Returnerar ett boolskt värde om en kategori användaren försöker lägga till redan finns.|När funktionen används i koden står det t.ex. "if (this.categoryExists(expense)){...}" vilket förklarar sig självt i och med att koden nästan står skriven i naturligt, mänskligt språk.|
|findCategoryObject(categoryName)|Hittar ett Category-objekt med en sträng som parameter|Jag har döpt funktionen till findCategoryObject trots att man inte skulle lägga till "noise", i det här fallet att skriva att det är ett objekt som returneras. Jag behövde tydliggöra att det var ett Category-objekt som returnerades och inte namnet på en kategori, därför lät jag det stå kvar.|
|getSumByCategoryAndMonth()|Returnerar summan från en kategori utgifter för en angiven månad.|Namnet tangerar att vara för långt men jag anser att den håller sig på rätt sida gränsen. Avvägningen är ju att göra funktionsnamnen så självförklarande som möjligt utan att de blir för långa. Jag anser att namnet förklarar exakt vad den gör.|
|getSumExpensesForMonth()|Returnerar summan av alla utgifter för en angiven månad|Jag har konsekvent använt mig av verbet "get" och inte blandat. I boken togs det upp som exempel att man inte ska blanda ord som "get", "fetch", "retrieve" osv i sinda funktionsnamn om man inte har en mycket bra anledning till det.|
||||

### Kapitelreflektion kap 2


### Tabellreflektion för funktioner/metoder
|Metodamn|Länk eller kod|Antal rader (ej ws)|Reflektion|
|---|---|---|---|
||||"If/else/while should probably be function calls" - betyder detta att "
      if (expensesForMonth[i].category === category) {...}" istället borde skrivas "if (categoryIsSame(expensesForMonth[i].category, category)) {}" där "categoryIsSame()" är en egen funktion som bara returnerar det boolska värdet för"expensesForMonth[i].category === category"?|
|||||
|||||
|||||


|isExpensesDateYearSameYearExpensesMonthSameMonth()|  isExpensesDateYearSameYearExpensesMonthSameMonth (expensesFullYear, year, expensesMonth, month) {
    return expensesFullYear ===  year && expensesMonth === month
  }|Refaktorering in absurdum för att höja abstraktionsnivån. Istället för "if(expensesFullYear === year && expensesMonth == month) {}" skapade jag en ny funktion som behövde ha ett väldigt långt namn för att vara lättförstådd, vilket gör koden svårare att läsa. Detta för att jag försökte följa bokens förslag på namngivning när man genomför jämförelser, för att komma ihåg i vilken ordning man ska skriva in argumenten. Boken hävdar att ju färre argument en funktion tar in, desto bättre. Därför bröt jag ut det till två separata funktioner, en som jämförde år och en som jämförde månader. På så sätt behövde funktionen bara ta in två argument. ||

### Kapitelreflektion kap 3
Min största fundering gällande kapitel 3 är regeln/riktlinjen om att man ska ha så få parametrar som möjligt när man skriver funktioner.

### Reflektion över egen kodkvalitet
