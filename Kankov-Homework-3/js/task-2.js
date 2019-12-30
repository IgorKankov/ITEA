function evenOrOdd(number){
    if(number % 2 === 0){
        alert("Even")
    } else {
        alert("Odd")
    }
}
const entering = +prompt("enter any number")
evenOrOdd(entering)