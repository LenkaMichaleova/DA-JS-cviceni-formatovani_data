function formatDate(object) {
//  vysvětlení funkce "padStart()" zde: https://www.w3schools.com/jsref/jsref_string_padstart.asp
    const day = object.day.toString().padStart(2, "0")
    const month = object.month.toString().padStart(2, "0")
    const year = object.year.toString().padStart(4, "0")

    return `${day}-${month}-${year}`
}

console.log(formatDate({ day: 12, month: 3, year: 2015 }))
document.body.innerHTML = `<h1>Výsledek pro objekt { day: 12, month: 3, year: 2015 } je v konzoli (v Devtools)</h1>`