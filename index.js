const currentYear = new Date().getFullYear()

function greet() {
    let name = prompt('What is your name?')
    alert('Hello, ' + name)
    let givenAge = prompt('How old are you?')
    let age = parseInt(givenAge)
    let thisYearBorn = confirm('Have you had a birthday yet this year?')
    let yearBorn = () => {
        if (thisYearBorn) {
            return currentYear - age
        } else {
            return currentYear - age - 1
        }
    }
    alert('You were born in ' + yearBorn())
}